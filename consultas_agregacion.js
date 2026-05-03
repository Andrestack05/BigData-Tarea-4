// ============================================================
// SCRIPT: consultas_agregacion.js
// Curso: Big Data - UNAD - Tarea 4
// Descripción: Pipeline de agregación con análisis estadístico
// ============================================================
// El framework de agregación funciona como una tubería (pipeline)
// donde los documentos pasan por etapas en orden secuencial.
// Cada etapa recibe la salida de la anterior.
// ============================================================

use("techstore_db");


// ============================================================
// AGREGACIÓN 1: Estadísticas completas por categoría
// Objetivo: Entender la distribución de productos y precios
// ============================================================
print("\n===== AGREGACIÓN 1: Estadísticas por Categoría =====");

db.productos.aggregate([
  // Etapa 1: Agrupar por categoría y calcular estadísticas
  { $group: {
    _id: "$categoria",
    total_productos: { $sum: 1 },
    precio_promedio: { $avg: "$precio" },
    precio_minimo: { $min: "$precio" },
    precio_maximo: { $max: "$precio" },
    stock_total: { $sum: "$stock" },
    calificacion_promedio: { $avg: "$calificacion" }
  }},
  // Etapa 2: Redondear valores decimales para legibilidad
  { $project: {
    _id: 1,
    total_productos: 1,
    precio_promedio: { $round: ["$precio_promedio", 0] },
    precio_minimo: 1,
    precio_maximo: 1,
    stock_total: 1,
    calificacion_promedio: { $round: ["$calificacion_promedio", 2] }
  }},
  // Etapa 3: Ordenar de mayor a menor por número de productos
  { $sort: { total_productos: -1 } }
]).forEach(printjson);

/*
ANÁLISIS DE RESULTADOS ESPERADOS:
- Telefonía y Computación deberían ser las categorías más grandes,
  reflejando la amplitud del portafolio en dispositivos digitales.
- El precio promedio más alto se esperaría en Computación (por MacBooks)
  y Electrónica (por televisores OLED premium).
- Accesorios tendrá el precio promedio más bajo por su naturaleza
  complementaria y menor costo unitario.
- Una calificación promedio general entre 4.3 y 4.7 indicaría un
  catálogo bien curado con productos de calidad reconocida.
*/


// ============================================================
// AGREGACIÓN 2: Valor monetario del inventario por marca
// Objetivo: Identificar qué marcas representan mayor inversión
// ============================================================
print("\n===== AGREGACIÓN 2: Valor de Inventario por Marca =====");

db.productos.aggregate([
  // Etapa 1: Solo productos disponibles para la venta
  { $match: { disponible: true } },
  // Etapa 2: Agrupar por marca y calcular valor de inventario
  { $group: {
    _id: "$marca",
    productos_activos: { $sum: 1 },
    stock_total_unidades: { $sum: "$stock" },
    valor_inventario_pesos: { $sum: { $multiply: ["$precio", "$stock"] } },
    precio_unitario_promedio: { $avg: "$precio" }
  }},
  // Etapa 3: Formatear y ordenar por valor de inventario
  { $project: {
    marca: "$_id",
    _id: 0,
    productos_activos: 1,
    stock_total_unidades: 1,
    valor_inventario_pesos: { $round: ["$valor_inventario_pesos", 0] },
    precio_unitario_promedio: { $round: ["$precio_unitario_promedio", 0] }
  }},
  { $sort: { valor_inventario_pesos: -1 } }
]).forEach(printjson);

/*
ANÁLISIS DE RESULTADOS ESPERADOS:
- Samsung debería liderar el valor de inventario gracias a su presencia
  transversal en múltiples categorías (TV, smartphones, electrodomésticos,
  monitores, accesorios) con precios medios-altos y stock considerable.
- Apple tendrá un valor elevado a pesar de menor volumen de unidades,
  porque sus precios unitarios son los más altos del catálogo.
- Xiaomi destacará por su alto volumen de unidades (mayor stock)
  a precios más accesibles, equilibrando su posición.
- LG mostrará un valor importante por electrodomésticos y TV premium.
- Marcas de nicho como Sony o GoPro tendrán menor valor total pero
  alto precio unitario promedio.
*/


// ============================================================
// AGREGACIÓN 3: Distribución de calificaciones (buckets)
// Objetivo: Entender la calidad percibida del catálogo
// ============================================================
print("\n===== AGREGACIÓN 3: Distribución de Calificaciones =====");

db.productos.aggregate([
  {
    $bucket: {
      groupBy: "$calificacion",
      boundaries: [1.0, 2.0, 3.0, 4.0, 4.5, 5.1],
      default: "Fuera de rango",
      output: {
        cantidad_productos: { $sum: 1 },
        promedio_precio: { $avg: "$precio" },
        nombres_productos: { $push: "$nombre" }
      }
    }
  },
  // Agregar etiqueta descriptiva al rango
  { $addFields: {
    rango_descripcion: {
      $switch: {
        branches: [
          { case: { $eq: ["$_id", 1.0] }, then: "1.0-2.0: Malo" },
          { case: { $eq: ["$_id", 2.0] }, then: "2.0-3.0: Regular" },
          { case: { $eq: ["$_id", 3.0] }, then: "3.0-4.0: Bueno" },
          { case: { $eq: ["$_id", 4.0] }, then: "4.0-4.5: Muy Bueno" },
          { case: { $eq: ["$_id", 4.5] }, then: "4.5-5.0: Excelente" }
        ],
        default: "Otro"
      }
    }
  }}
]).forEach(printjson);

/*
ANÁLISIS DE RESULTADOS ESPERADOS:
- La distribución esperada es fuertemente asimétrica hacia la derecha:
  la gran mayoría de productos deberían estar en los rangos 4.0-4.5
  (Muy Bueno) y 4.5-5.0 (Excelente).
- Este patrón es típico en plataformas de e-commerce consolidadas donde:
  1. Los productos con calificaciones bajas son retirados del catálogo.
  2. Se tiende a priorizar productos de marcas reconocidas.
  3. Los compradores satisfechos son quienes más califican.
- Si el rango 3.0-4.0 tuviera muchos productos, sería señal para
  revisar la política de calidad o mejorar el servicio postventa.
- El promedio de precio por rango puede ser revelador: si los productos
  más caros tienen calificaciones altas, indica que el mercado percibe
  valor real en los productos premium del catálogo.
*/


// ============================================================
// AGREGACIÓN 4: Top 3 productos más reseñados por categoría
// Objetivo: Identificar los productos estrella del catálogo
// ============================================================
print("\n===== AGREGACIÓN 4: Top 3 Productos por Reseñas en cada Categoría =====");

db.productos.aggregate([
  // Ordenar PRIMERO por reseñas (antes de agrupar)
  { $sort: { num_resenas: -1 } },
  // Agrupar por categoría y acumular productos ordenados
  { $group: {
    _id: "$categoria",
    top_productos: {
      $push: {
        nombre: "$nombre",
        marca: "$marca",
        num_resenas: "$num_resenas",
        calificacion: "$calificacion",
        precio: "$precio"
      }
    }
  }},
  // Tomar solo los 3 primeros de cada categoría
  { $project: {
    categoria: "$_id",
    _id: 0,
    top_3_mas_resenados: { $slice: ["$top_productos", 3] }
  }},
  { $sort: { categoria: 1 } }
]).forEach(printjson);

/*
ANÁLISIS DE RESULTADOS ESPERADOS:
- En Telefonía: iPhone 15 y Samsung Galaxy S24 Ultra deberían liderar
  por ser los flagships más publicitados; Xiaomi Redmi Note 13 podría
  aparecer por su popularidad en el segmento económico.
- En Computación: MacBook Air M2 debería dominar; el Mouse MX Master 3S
  de Logitech podría aparecer por su alta rotación como accesorio de uso
  profesional.
- En Electrónica: Sony WH-1000XM5 probablemente lidera por ser el
  audífono de referencia en su categoría; Apple AirPods Pro 2 también
  debería estar entre los primeros.
- En Electrodomésticos: la menor cantidad de reseñas (vs teléfonos)
  refleja que son compras menos frecuentes; Samsung y LG lideran.
- Los productos con más reseñas no siempre tienen la calificación más
  alta: pueden ser populares por precio accesible o amplia distribución.
*/


// ============================================================
// AGREGACIÓN 5: Análisis de descuentos
// Objetivo: Identificar estrategia de precios por categoría
// ============================================================
print("\n===== AGREGACIÓN 5: Análisis de Descuentos por Categoría =====");

db.productos.aggregate([
  // Solo productos que tienen descuento
  { $match: { precio_descuento: { $ne: null } } },
  // Calcular el porcentaje de descuento
  { $addFields: {
    porcentaje_descuento: {
      $multiply: [
        { $divide: [
          { $subtract: ["$precio", "$precio_descuento"] },
          "$precio"
        ]},
        100
      ]
    }
  }},
  // Agrupar por categoría
  { $group: {
    _id: "$categoria",
    productos_con_descuento: { $sum: 1 },
    descuento_promedio_pct: { $avg: "$porcentaje_descuento" },
    mayor_descuento_pct: { $max: "$porcentaje_descuento" },
    ahorro_promedio_pesos: { $avg: { $subtract: ["$precio", "$precio_descuento"] } }
  }},
  { $project: {
    categoria: "$_id",
    _id: 0,
    productos_con_descuento: 1,
    descuento_promedio_pct: { $round: ["$descuento_promedio_pct", 1] },
    mayor_descuento_pct: { $round: ["$mayor_descuento_pct", 1] },
    ahorro_promedio_pesos: { $round: ["$ahorro_promedio_pesos", 0] }
  }},
  { $sort: { descuento_promedio_pct: -1 } }
]).forEach(printjson);

/*
ANÁLISIS DE RESULTADOS ESPERADOS:
- Categorías con productos de alta rotación (Telefonía, Computación)
  tenderán a tener más productos con descuento como estrategia competitiva.
- Los mayores porcentajes de descuento suelen darse en Electrónica
  (televisores con descuentos del 10-15% son comunes en temporadas).
- El ahorro promedio en pesos más alto estará en las categorías de
  productos más caros (laptops, televisores), aunque el porcentaje
  de descuento sea similar al de otras categorías.
- Productos Apple y LG premium típicamente NO tienen descuento, lo que
  eleva el precio promedio sin descuento de esas marcas.
*/


// ============================================================
// AGREGACIÓN 6: Productos con más stock disponible por vendedor
// ============================================================
print("\n===== AGREGACIÓN 6: Inventario por Vendedor =====");

db.productos.aggregate([
  { $match: { disponible: true } },
  { $group: {
    _id: "$vendedor_id",
    total_skus: { $sum: 1 },
    unidades_totales: { $sum: "$stock" },
    precio_promedio_catalogo: { $avg: "$precio" },
    categorias: { $addToSet: "$categoria" }
  }},
  // Unir con la colección de vendedores para obtener el nombre
  { $lookup: {
    from: "vendedores",
    localField: "_id",
    foreignField: "vendedor_id",
    as: "info_vendedor"
  }},
  { $project: {
    vendedor_id: "$_id",
    _id: 0,
    nombre_vendedor: { $arrayElemAt: ["$info_vendedor.nombre", 0] },
    total_skus: 1,
    unidades_totales: 1,
    precio_promedio_catalogo: { $round: ["$precio_promedio_catalogo", 0] },
    num_categorias: { $size: "$categorias" }
  }},
  { $sort: { unidades_totales: -1 } }
]).forEach(printjson);

/*
ANÁLISIS DE RESULTADOS ESPERADOS:
- V001 (TechImport SAS) debería tener más SKUs diversificados por ser
  el importador genérico que maneja múltiples marcas y categorías.
- V002 (Samsung Colombia) tendrá las mayores unidades totales por el
  alto stock de accesorios y productos de gama media que se venden masivamente.
- V003 (Apple Authorized) tendrá el precio promedio de catálogo más alto
  pero el menor número de unidades, reflejando el modelo de distribución premium.
- El $lookup demuestra la capacidad de MongoDB para hacer "joins" entre
  colecciones, similar a un LEFT JOIN en SQL.
*/

print("\n✅ Todas las agregaciones ejecutadas correctamente.");
print("📊 Para ver los resultados completos, revisar la salida de cada sección.");

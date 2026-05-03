// ============================================================
// SCRIPT: consultas_filtros.js
// Curso: Big Data - UNAD - Tarea 4
// Descripción: Consultas con filtros y operadores en MongoDB
// ============================================================

use("techstore_db");

print("\n===== OPERADORES DE COMPARACIÓN =====");

// $gt - Mayor que
print("Productos con precio > $2.000.000:");
db.productos.find(
  { precio: { $gt: 2000000 } },
  { nombre: 1, precio: 1, _id: 0 }
).sort({ precio: 1 }).forEach(printjson);

// $gte y $lte - Rango de precios
print("\nProductos entre $500.000 y $2.000.000:");
db.productos.find(
  { precio: { $gte: 500000, $lte: 2000000 } },
  { nombre: 1, precio: 1, categoria: 1, _id: 0 }
).forEach(printjson);

// $ne - No igual a
print("\nProductos con precio_descuento diferente de null (tienen descuento):");
db.productos.find(
  { precio_descuento: { $ne: null } },
  { nombre: 1, precio: 1, precio_descuento: 1, _id: 0 }
).limit(8).forEach(printjson);


print("\n===== OPERADORES LÓGICOS =====");

// $and implícito (múltiples condiciones en el mismo objeto)
print("Productos disponibles con calificación >= 4.5:");
db.productos.find(
  { disponible: true, calificacion: { $gte: 4.5 } },
  { nombre: 1, calificacion: 1, disponible: 1, _id: 0 }
).sort({ calificacion: -1 }).forEach(printjson);

// $or - Uno u otro
print("\nProductos de Samsung O de Apple:");
db.productos.find(
  { $or: [{ marca: "Samsung" }, { marca: "Apple" }] },
  { nombre: 1, marca: 1, precio: 1, _id: 0 }
).sort({ marca: 1 }).forEach(printjson);

// $and explícito con $or anidado
print("\nProductos premium: (Samsung o Apple) Y precio > $3.000.000:");
db.productos.find(
  {
    $and: [
      { $or: [{ marca: "Samsung" }, { marca: "Apple" }] },
      { precio: { $gt: 3000000 } }
    ]
  },
  { nombre: 1, marca: 1, precio: 1, _id: 0 }
).sort({ precio: -1 }).forEach(printjson);

// $not
print("\nProductos que NO son de la marca Samsung:");
db.productos.find(
  { marca: { $not: { $eq: "Samsung" } } },
  { nombre: 1, marca: 1, _id: 0 }
).limit(5).forEach(printjson);


print("\n===== OPERADOR $in y $nin =====");

// $in - El valor está dentro de la lista
print("Productos de Samsung, Apple o LG ($in):");
db.productos.find(
  { marca: { $in: ["Samsung", "Apple", "LG"] } },
  { nombre: 1, marca: 1, categoria: 1, _id: 0 }
).sort({ marca: 1 }).forEach(printjson);

// $nin - El valor NO está en la lista
print("\nProductos que NO son de las marcas principales:");
db.productos.find(
  { marca: { $nin: ["Samsung", "Apple", "LG", "Xiaomi"] } },
  { nombre: 1, marca: 1, _id: 0 }
).forEach(printjson);


print("\n===== BÚSQUEDA EN ARRAYS =====");

// Buscar documentos que contengan un elemento en un array
print("Productos con etiqueta 'premium':");
db.productos.find(
  { etiquetas: "premium" },
  { nombre: 1, marca: 1, precio: 1, etiquetas: 1, _id: 0 }
).forEach(printjson);

// $all - El array debe contener TODOS los elementos especificados
print("\nProductos con etiquetas 'samsung' Y 'flagship':");
db.productos.find(
  { etiquetas: { $all: ["samsung", "flagship"] } },
  { nombre: 1, etiquetas: 1, _id: 0 }
).forEach(printjson);

// $size - Filtrar por tamaño del array
print("\nProductos con exactamente 1 imagen:");
db.productos.find(
  { imagenes: { $size: 1 } },
  { nombre: 1, imagenes: 1, _id: 0 }
).limit(3).forEach(printjson);


print("\n===== BÚSQUEDA EN CAMPOS ANIDADOS =====");

// Notación de punto para acceder a campos dentro de objetos anidados
print("Productos con procesador Intel:");
db.productos.find(
  { "especificaciones.procesador": { $regex: "Intel", $options: "i" } },
  { nombre: 1, "especificaciones.procesador": 1, precio: 1, _id: 0 }
).forEach(printjson);

// Televisores de 55 pulgadas o más
print("\nTelevisores de 55 pulgadas o más:");
db.productos.find(
  { categoria: "Electrónica", subcategoria: "Televisores", "especificaciones.pulgadas": { $gte: 55 } },
  { nombre: 1, "especificaciones.pulgadas": 1, precio: 1, _id: 0 }
).sort({ "especificaciones.pulgadas": -1 }).forEach(printjson);

// Audífonos con cancelación de ruido
print("\nAudífonos con cancelación de ruido activa:");
db.productos.find(
  { subcategoria: "Audífonos", "especificaciones.cancelacion_ruido": true },
  { nombre: 1, marca: 1, precio: 1, _id: 0 }
).forEach(printjson);


print("\n===== EXPRESIONES REGULARES ($regex) =====");

// Buscar por texto parcial en el nombre
print("Productos cuyo nombre contiene 'Samsung':");
db.productos.find(
  { nombre: { $regex: "Samsung", $options: "i" } },
  { nombre: 1, precio: 1, _id: 0 }
).forEach(printjson);

// Buscar productos con código que empiece por "COMP"
print("\nProductos con código que empieza por 'COMP':");
db.productos.find(
  { codigo: { $regex: "^COMP" } },
  { codigo: 1, nombre: 1, _id: 0 }
).forEach(printjson);


print("\n===== SORT, LIMIT Y SKIP (PAGINACIÓN) =====");

// Ordenar por precio descendente y tomar los 5 más caros
print("Top 5 productos más caros:");
db.productos.find(
  { disponible: true },
  { nombre: 1, precio: 1, marca: 1, _id: 0 }
).sort({ precio: -1 }).limit(5).forEach(printjson);

// Paginación: página 2 de resultados (5 por página)
print("\nPágina 2 de productos (5 por página):");
db.productos.find(
  {},
  { nombre: 1, precio: 1, _id: 0 }
).sort({ precio: 1 }).skip(5).limit(5).forEach(printjson);


print("\n===== VERIFICACIÓN DE EXISTENCIA DE CAMPO =====");

// $exists - Verificar si un campo existe
print("Productos que tienen campo 'destacado' (fue marcado como destacado):");
db.productos.find(
  { destacado: { $exists: true } },
  { nombre: 1, destacado: 1, _id: 0 }
).forEach(printjson);

// Productos SIN precio_descuento nulo (tienen descuento real)
print("\nProductos con precio de descuento definido:");
db.productos.find(
  { precio_descuento: { $exists: true, $ne: null } },
  { nombre: 1, precio: 1, precio_descuento: 1, _id: 0 }
).limit(5).forEach(printjson);

print("\n✅ Script de consultas con filtros ejecutado correctamente.");

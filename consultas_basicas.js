// ============================================================
// SCRIPT: consultas_basicas.js
// Curso: Big Data - UNAD - Tarea 4
// Descripción: Operaciones CRUD en MongoDB
//   C - Create  (Insertar)
//   R - Read    (Seleccionar)
//   U - Update  (Actualizar)
//   D - Delete  (Eliminar)
// ============================================================

use("techstore_db");

print("\n========== C - INSERCIÓN ==========");

// Insertar un único documento
db.productos.insertOne({
  codigo: "TEL-099",
  nombre: "Motorola Edge 40",
  categoria: "Telefonía",
  subcategoria: "Smartphones",
  marca: "Motorola",
  precio: 1800000,
  precio_descuento: 1599000,
  stock: 20,
  disponible: true,
  calificacion: 4.3,
  num_resenas: 88,
  fecha_ingreso: new Date("2024-05-01"),
  especificaciones: {
    sistema_operativo: "Android 13",
    camara: "50MP + 13MP",
    bateria: "4400mAh",
    pantalla: "6.55 pulgadas",
    almacenamiento: "256GB"
  },
  imagenes: ["moto_edge40.jpg"],
  etiquetas: ["motorola", "android", "smartphone"],
  vendedor_id: "V001"
});
print("✅ insertOne ejecutado: Motorola Edge 40 agregado");

// Insertar múltiples documentos a la vez
db.productos.insertMany([
  {
    codigo: "ACC-099",
    nombre: "Base de Carga MagSafe Apple",
    categoria: "Accesorios",
    subcategoria: "Cargadores",
    marca: "Apple",
    precio: 180000,
    precio_descuento: null,
    stock: 35,
    disponible: true,
    calificacion: 4.6,
    num_resenas: 145,
    fecha_ingreso: new Date("2024-06-01"),
    especificaciones: { potencia: "15W", tipo: "MagSafe", compatibilidad: "iPhone 12 o superior" },
    imagenes: ["magsafe.jpg"],
    etiquetas: ["apple", "magsafe", "cargador", "inalambrico"],
    vendedor_id: "V003"
  },
  {
    codigo: "ELEC-099",
    nombre: "Parlante Xiaomi Smart Speaker",
    categoria: "Electrónica",
    subcategoria: "Parlantes",
    marca: "Xiaomi",
    precio: 250000,
    precio_descuento: 210000,
    stock: 40,
    disponible: true,
    calificacion: 4.1,
    num_resenas: 72,
    fecha_ingreso: new Date("2024-06-05"),
    especificaciones: { potencia: "12W", asistente: "Google Assistant", bluetooth: "5.0" },
    imagenes: ["xiaomi_smart.jpg"],
    etiquetas: ["xiaomi", "parlante", "smart", "google"],
    vendedor_id: "V005"
  }
]);
print("✅ insertMany ejecutado: 2 productos adicionales agregados");


print("\n========== R - LECTURA / SELECCIÓN ==========");

// Obtener todos los documentos
print("Total documentos en la colección:");
print(db.productos.countDocuments());

// Buscar por categoría
print("\nProductos de Telefonía:");
db.productos.find({ categoria: "Telefonía" }, { nombre: 1, marca: 1, precio: 1, _id: 0 }).forEach(printjson);

// Buscar un documento específico
print("\nBúsqueda de producto por código TEL-001:");
printjson(db.productos.findOne({ codigo: "TEL-001" }));

// Proyección: mostrar solo campos específicos
print("\nNombre, precio y categoría de todos los productos (proyección):");
db.productos.find({}, { nombre: 1, precio: 1, categoria: 1, _id: 0 }).limit(5).forEach(printjson);

// Contar documentos por categoría
print("\nCantidad de productos por categoría:");
db.productos.aggregate([
  { $group: { _id: "$categoria", total: { $sum: 1 } } },
  { $sort: { total: -1 } }
]).forEach(printjson);


print("\n========== U - ACTUALIZACIÓN ==========");

// Actualizar un campo de un documento específico
let resultado1 = db.productos.updateOne(
  { codigo: "TEL-001" },
  { $set: { precio: 3999000, precio_descuento: 3700000 } }
);
print("updateOne - modificados: " + resultado1.modifiedCount + " documento(s)");

// Incrementar el stock de un producto
let resultado2 = db.productos.updateOne(
  { codigo: "ACC-001" },
  { $inc: { stock: 10 } }
);
print("updateOne ($inc stock) - modificados: " + resultado2.modifiedCount);

// Actualizar múltiples documentos (marcar sin stock como no disponible)
let resultado3 = db.productos.updateMany(
  { stock: { $lt: 5 } },
  { $set: { disponible: false } }
);
print("updateMany (stock < 5 → no disponible) - modificados: " + resultado3.modifiedCount);

// Agregar un campo nuevo a un documento
let resultado4 = db.productos.updateOne(
  { codigo: "COMP-001" },
  { $set: { destacado: true, ultima_actualizacion: new Date() } }
);
print("Agregar campo nuevo - modificados: " + resultado4.modifiedCount);


print("\n========== D - ELIMINACIÓN ==========");

// Eliminar un documento específico de prueba
db.productos.insertOne({ codigo: "TEST-000", nombre: "Producto de prueba borrar", categoria: "Test", precio: 0, stock: 0 });
let resultadoBorrar = db.productos.deleteOne({ codigo: "TEST-000" });
print("deleteOne - eliminados: " + resultadoBorrar.deletedCount);

// Eliminar múltiples documentos (sin stock y no disponibles)
// NOTA: Se ejecuta con cuidado, primero revisamos cuántos afectaría
let contar = db.productos.countDocuments({ stock: 0, disponible: false });
print("Documentos que serían eliminados (stock=0 y no disponible): " + contar);

// Descomentar para ejecutar la eliminación real:
// let resultadoBorrarMuchos = db.productos.deleteMany({ stock: 0, disponible: false });
// print("deleteMany - eliminados: " + resultadoBorrarMuchos.deletedCount);

print("\n✅ Script de consultas básicas CRUD ejecutado completamente.");

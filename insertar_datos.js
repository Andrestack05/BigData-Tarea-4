// ============================================================
// SCRIPT: insertar_datos.js
// Curso: Big Data - UNAD - Tarea 4
// Caso de uso: Catálogo de Productos - TechStore Colombia
// Base de datos: techstore_db
// ============================================================
// INSTRUCCIONES:
//   1. Abrir mongosh en la terminal
//   2. Ejecutar: load("insertar_datos.js")
//   O también: mongosh techstore_db insertar_datos.js
// ============================================================

use("techstore_db");

// ============================================================
// LIMPIAR COLECCIONES (opcional - para empezar desde cero)
// ============================================================
db.productos.drop();
db.categorias.drop();
db.vendedores.drop();
print("Colecciones limpiadas.");

// ============================================================
// INSERTAR CATEGORÍAS
// ============================================================
db.categorias.insertMany([
  {
    nombre: "Electrónica",
    slug: "electronica",
    subcategorias: ["Televisores", "Audífonos", "Parlantes", "Cámaras"],
    activa: true
  },
  {
    nombre: "Computación",
    slug: "computacion",
    subcategorias: ["Laptops", "Monitores", "Teclados", "Mouse", "Memorias USB"],
    activa: true
  },
  {
    nombre: "Telefonía",
    slug: "telefonia",
    subcategorias: ["Smartphones", "Tablets", "Smartwatches", "Accesorios"],
    activa: true
  },
  {
    nombre: "Electrodomésticos",
    slug: "electrodomesticos",
    subcategorias: ["Refrigeradoras", "Lavadoras", "Microondas", "Licuadoras"],
    activa: true
  },
  {
    nombre: "Accesorios",
    slug: "accesorios",
    subcategorias: ["Cables", "Cargadores", "Fundas", "Soportes"],
    activa: true
  }
]);
print("Categorías insertadas.");

// ============================================================
// INSERTAR VENDEDORES
// ============================================================
db.vendedores.insertMany([
  { vendedor_id: "V001", nombre: "TechImport SAS",     pais: "Colombia", calificacion: 4.7, productos_activos: 45 },
  { vendedor_id: "V002", nombre: "Samsung Colombia",   pais: "Colombia", calificacion: 4.9, productos_activos: 30 },
  { vendedor_id: "V003", nombre: "Apple Authorized",   pais: "Colombia", calificacion: 4.8, productos_activos: 20 },
  { vendedor_id: "V004", nombre: "LG Electronics",     pais: "Colombia", calificacion: 4.6, productos_activos: 25 },
  { vendedor_id: "V005", nombre: "Xiaomi Official",    pais: "Colombia", calificacion: 4.5, productos_activos: 40 }
]);
print("Vendedores insertados.");

// ============================================================
// INSERTAR PRODUCTOS (100+ documentos)
// ============================================================
db.productos.insertMany([

  // ===== LAPTOPS =====
  {
    codigo: "COMP-001", nombre: "Laptop Lenovo IdeaPad 3",
    categoria: "Computación", subcategoria: "Laptops", marca: "Lenovo",
    precio: 2850000, precio_descuento: 2499000, stock: 15, disponible: true,
    calificacion: 4.3, num_resenas: 128,
    fecha_ingreso: new Date("2024-01-15"),
    especificaciones: { procesador: "Intel Core i5-1235U", ram: "8GB", almacenamiento: "512GB SSD", pantalla: "15.6 pulgadas", sistema_operativo: "Windows 11" },
    imagenes: ["lenovo_ideapad_1.jpg"],
    etiquetas: ["laptop", "lenovo", "intel", "i5"],
    vendedor_id: "V001"
  },
  {
    codigo: "COMP-002", nombre: "MacBook Air M2",
    categoria: "Computación", subcategoria: "Laptops", marca: "Apple",
    precio: 6200000, precio_descuento: null, stock: 8, disponible: true,
    calificacion: 4.9, num_resenas: 340,
    fecha_ingreso: new Date("2024-02-01"),
    especificaciones: { procesador: "Apple M2", ram: "8GB", almacenamiento: "256GB SSD", pantalla: "13.6 pulgadas", sistema_operativo: "macOS Ventura" },
    imagenes: ["macbook_air_m2.jpg"],
    etiquetas: ["laptop", "apple", "macbook", "m2"],
    vendedor_id: "V003"
  },
  {
    codigo: "COMP-003", nombre: "Laptop HP Pavilion 15",
    categoria: "Computación", subcategoria: "Laptops", marca: "HP",
    precio: 2200000, precio_descuento: 1990000, stock: 22, disponible: true,
    calificacion: 4.1, num_resenas: 95,
    fecha_ingreso: new Date("2024-01-20"),
    especificaciones: { procesador: "AMD Ryzen 5 5500U", ram: "8GB", almacenamiento: "256GB SSD", pantalla: "15.6 pulgadas", sistema_operativo: "Windows 11 Home" },
    imagenes: ["hp_pavilion.jpg"],
    etiquetas: ["laptop", "hp", "amd", "ryzen"],
    vendedor_id: "V001"
  },
  {
    codigo: "COMP-004", nombre: "Laptop ASUS VivoBook 15",
    categoria: "Computación", subcategoria: "Laptops", marca: "ASUS",
    precio: 2450000, precio_descuento: 2150000, stock: 18, disponible: true,
    calificacion: 4.2, num_resenas: 76,
    fecha_ingreso: new Date("2024-03-10"),
    especificaciones: { procesador: "Intel Core i7-1165G7", ram: "12GB", almacenamiento: "512GB SSD", pantalla: "15.6 pulgadas", sistema_operativo: "Windows 11" },
    imagenes: ["asus_vivobook.jpg"],
    etiquetas: ["laptop", "asus", "intel", "i7"],
    vendedor_id: "V001"
  },
  {
    codigo: "COMP-005", nombre: "Laptop Dell Inspiron 15",
    categoria: "Computación", subcategoria: "Laptops", marca: "Dell",
    precio: 3100000, precio_descuento: 2750000, stock: 12, disponible: true,
    calificacion: 4.4, num_resenas: 110,
    fecha_ingreso: new Date("2024-02-15"),
    especificaciones: { procesador: "Intel Core i7-1255U", ram: "16GB", almacenamiento: "512GB SSD", pantalla: "15.6 pulgadas", sistema_operativo: "Windows 11" },
    imagenes: ["dell_inspiron.jpg"],
    etiquetas: ["laptop", "dell", "intel", "i7", "16gb"],
    vendedor_id: "V001"
  },
  {
    codigo: "COMP-006", nombre: "Laptop Acer Aspire 5",
    categoria: "Computación", subcategoria: "Laptops", marca: "Acer",
    precio: 1980000, precio_descuento: 1750000, stock: 25, disponible: true,
    calificacion: 4.0, num_resenas: 88,
    fecha_ingreso: new Date("2024-03-01"),
    especificaciones: { procesador: "AMD Ryzen 3 5300U", ram: "8GB", almacenamiento: "256GB SSD", pantalla: "15.6 pulgadas", sistema_operativo: "Windows 11 Home" },
    imagenes: ["acer_aspire5.jpg"],
    etiquetas: ["laptop", "acer", "amd", "economico"],
    vendedor_id: "V001"
  },
  {
    codigo: "COMP-007", nombre: "MacBook Pro M3 14",
    categoria: "Computación", subcategoria: "Laptops", marca: "Apple",
    precio: 9800000, precio_descuento: null, stock: 4, disponible: true,
    calificacion: 4.9, num_resenas: 215,
    fecha_ingreso: new Date("2024-01-10"),
    especificaciones: { procesador: "Apple M3 Pro", ram: "18GB", almacenamiento: "512GB SSD", pantalla: "14.2 pulgadas", sistema_operativo: "macOS Sonoma" },
    imagenes: ["macbook_pro_m3.jpg"],
    etiquetas: ["laptop", "apple", "macbook", "m3", "premium", "pro"],
    vendedor_id: "V003"
  },

  // ===== SMARTPHONES =====
  {
    codigo: "TEL-001", nombre: "Samsung Galaxy S24",
    categoria: "Telefonía", subcategoria: "Smartphones", marca: "Samsung",
    precio: 4200000, precio_descuento: 3890000, stock: 30, disponible: true,
    calificacion: 4.7, num_resenas: 512,
    fecha_ingreso: new Date("2024-02-15"),
    especificaciones: { sistema_operativo: "Android 14", camara: "50MP + 10MP + 12MP", bateria: "4000mAh", pantalla: "6.2 pulgadas", almacenamiento: "128GB" },
    imagenes: ["galaxy_s24.jpg"],
    etiquetas: ["samsung", "android", "smartphone", "flagship"],
    vendedor_id: "V002"
  },
  {
    codigo: "TEL-002", nombre: "iPhone 15",
    categoria: "Telefonía", subcategoria: "Smartphones", marca: "Apple",
    precio: 5100000, precio_descuento: null, stock: 12, disponible: true,
    calificacion: 4.8, num_resenas: 890,
    fecha_ingreso: new Date("2024-01-10"),
    especificaciones: { sistema_operativo: "iOS 17", camara: "48MP + 12MP", bateria: "3877mAh", pantalla: "6.1 pulgadas", almacenamiento: "128GB" },
    imagenes: ["iphone_15.jpg"],
    etiquetas: ["apple", "iphone", "ios", "smartphone", "premium"],
    vendedor_id: "V003"
  },
  {
    codigo: "TEL-003", nombre: "Xiaomi Redmi Note 13",
    categoria: "Telefonía", subcategoria: "Smartphones", marca: "Xiaomi",
    precio: 1200000, precio_descuento: 990000, stock: 50, disponible: true,
    calificacion: 4.4, num_resenas: 230,
    fecha_ingreso: new Date("2024-03-01"),
    especificaciones: { sistema_operativo: "Android 13 MIUI 14", camara: "108MP + 8MP + 2MP", bateria: "5000mAh", pantalla: "6.67 pulgadas", almacenamiento: "128GB" },
    imagenes: ["redmi_note13.jpg"],
    etiquetas: ["xiaomi", "redmi", "android", "economico"],
    vendedor_id: "V005"
  },
  {
    codigo: "TEL-004", nombre: "Samsung Galaxy A55",
    categoria: "Telefonía", subcategoria: "Smartphones", marca: "Samsung",
    precio: 2100000, precio_descuento: 1850000, stock: 35, disponible: true,
    calificacion: 4.5, num_resenas: 180,
    fecha_ingreso: new Date("2024-04-01"),
    especificaciones: { sistema_operativo: "Android 14 One UI 6.1", camara: "50MP + 12MP + 5MP", bateria: "5000mAh", pantalla: "6.6 pulgadas", almacenamiento: "128GB" },
    imagenes: ["galaxy_a55.jpg"],
    etiquetas: ["samsung", "galaxy", "android", "gama-media"],
    vendedor_id: "V002"
  },
  {
    codigo: "TEL-005", nombre: "Xiaomi Poco X6 Pro",
    categoria: "Telefonía", subcategoria: "Smartphones", marca: "Xiaomi",
    precio: 1650000, precio_descuento: 1490000, stock: 28, disponible: true,
    calificacion: 4.6, num_resenas: 145,
    fecha_ingreso: new Date("2024-04-10"),
    especificaciones: { sistema_operativo: "Android 14 MIUI 14", camara: "64MP + 8MP + 2MP", bateria: "5100mAh", pantalla: "6.67 pulgadas", almacenamiento: "256GB" },
    imagenes: ["poco_x6.jpg"],
    etiquetas: ["xiaomi", "poco", "gaming", "android"],
    vendedor_id: "V005"
  },
  {
    codigo: "TEL-006", nombre: "iPhone 15 Pro",
    categoria: "Telefonía", subcategoria: "Smartphones", marca: "Apple",
    precio: 7200000, precio_descuento: null, stock: 6, disponible: true,
    calificacion: 4.9, num_resenas: 445,
    fecha_ingreso: new Date("2024-01-05"),
    especificaciones: { sistema_operativo: "iOS 17", camara: "48MP + 12MP + 12MP (periscópica)", bateria: "3274mAh", pantalla: "6.1 pulgadas", almacenamiento: "256GB" },
    imagenes: ["iphone_15_pro.jpg"],
    etiquetas: ["apple", "iphone", "ios", "smartphone", "pro", "premium"],
    vendedor_id: "V003"
  },
  {
    codigo: "TEL-007", nombre: "Samsung Galaxy S24 Ultra",
    categoria: "Telefonía", subcategoria: "Smartphones", marca: "Samsung",
    precio: 7500000, precio_descuento: 6900000, stock: 8, disponible: true,
    calificacion: 4.8, num_resenas: 320,
    fecha_ingreso: new Date("2024-02-20"),
    especificaciones: { sistema_operativo: "Android 14 One UI 6.1", camara: "200MP + 10MP + 50MP + 12MP", bateria: "5000mAh", pantalla: "6.8 pulgadas", almacenamiento: "256GB" },
    imagenes: ["galaxy_s24_ultra.jpg"],
    etiquetas: ["samsung", "galaxy", "android", "flagship", "premium", "stylus"],
    vendedor_id: "V002"
  },
  {
    codigo: "TEL-008", nombre: "Xiaomi 14T",
    categoria: "Telefonía", subcategoria: "Smartphones", marca: "Xiaomi",
    precio: 2800000, precio_descuento: 2500000, stock: 20, disponible: true,
    calificacion: 4.5, num_resenas: 95,
    fecha_ingreso: new Date("2024-05-01"),
    especificaciones: { sistema_operativo: "Android 14 HyperOS", camara: "50MP + 12MP + 50MP", bateria: "5000mAh", pantalla: "6.67 pulgadas", almacenamiento: "256GB" },
    imagenes: ["xiaomi_14t.jpg"],
    etiquetas: ["xiaomi", "android", "flagship", "leica"],
    vendedor_id: "V005"
  },
  {
    codigo: "TEL-009", nombre: "Samsung Galaxy A35",
    categoria: "Telefonía", subcategoria: "Smartphones", marca: "Samsung",
    precio: 1450000, precio_descuento: 1250000, stock: 42, disponible: true,
    calificacion: 4.3, num_resenas: 160,
    fecha_ingreso: new Date("2024-04-15"),
    especificaciones: { sistema_operativo: "Android 14", camara: "50MP + 8MP + 5MP", bateria: "5000mAh", pantalla: "6.6 pulgadas", almacenamiento: "128GB" },
    imagenes: ["galaxy_a35.jpg"],
    etiquetas: ["samsung", "galaxy", "android", "gama-media"],
    vendedor_id: "V002"
  },

  // ===== TELEVISORES =====
  {
    codigo: "ELEC-001", nombre: "Samsung TV 55 QLED 4K",
    categoria: "Electrónica", subcategoria: "Televisores", marca: "Samsung",
    precio: 3800000, precio_descuento: 3200000, stock: 10, disponible: true,
    calificacion: 4.6, num_resenas: 215,
    fecha_ingreso: new Date("2024-01-05"),
    especificaciones: { pulgadas: 55, resolucion: "4K UHD", tipo_panel: "QLED", smart_tv: true, sistema_operativo: "Tizen", hdmi_puertos: 4 },
    imagenes: ["samsung_tv_55.jpg"],
    etiquetas: ["samsung", "tv", "4k", "qled"],
    vendedor_id: "V002"
  },
  {
    codigo: "ELEC-002", nombre: "LG OLED 65 C3",
    categoria: "Electrónica", subcategoria: "Televisores", marca: "LG",
    precio: 7200000, precio_descuento: 6500000, stock: 5, disponible: true,
    calificacion: 4.9, num_resenas: 98,
    fecha_ingreso: new Date("2024-02-20"),
    especificaciones: { pulgadas: 65, resolucion: "4K UHD", tipo_panel: "OLED", smart_tv: true, sistema_operativo: "webOS 23", hdmi_puertos: 4 },
    imagenes: ["lg_oled_65.jpg"],
    etiquetas: ["lg", "tv", "oled", "4k", "premium"],
    vendedor_id: "V004"
  },
  {
    codigo: "ELEC-003", nombre: "Samsung TV 43 LED FHD",
    categoria: "Electrónica", subcategoria: "Televisores", marca: "Samsung",
    precio: 1500000, precio_descuento: 1299000, stock: 20, disponible: true,
    calificacion: 4.2, num_resenas: 310,
    fecha_ingreso: new Date("2024-01-25"),
    especificaciones: { pulgadas: 43, resolucion: "Full HD 1080p", tipo_panel: "LED", smart_tv: true, sistema_operativo: "Tizen", hdmi_puertos: 2 },
    imagenes: ["samsung_tv_43.jpg"],
    etiquetas: ["samsung", "tv", "fullhd", "economico"],
    vendedor_id: "V002"
  },
  {
    codigo: "ELEC-004", nombre: "LG OLED 55 B3",
    categoria: "Electrónica", subcategoria: "Televisores", marca: "LG",
    precio: 4900000, precio_descuento: 4400000, stock: 7, disponible: true,
    calificacion: 4.8, num_resenas: 140,
    fecha_ingreso: new Date("2024-02-10"),
    especificaciones: { pulgadas: 55, resolucion: "4K UHD", tipo_panel: "OLED", smart_tv: true, sistema_operativo: "webOS 23", hdmi_puertos: 4 },
    imagenes: ["lg_oled_55.jpg"],
    etiquetas: ["lg", "tv", "oled", "4k"],
    vendedor_id: "V004"
  },
  {
    codigo: "ELEC-005", nombre: "Samsung TV 75 Neo QLED",
    categoria: "Electrónica", subcategoria: "Televisores", marca: "Samsung",
    precio: 9500000, precio_descuento: 8200000, stock: 3, disponible: true,
    calificacion: 4.7, num_resenas: 45,
    fecha_ingreso: new Date("2024-03-20"),
    especificaciones: { pulgadas: 75, resolucion: "8K", tipo_panel: "Neo QLED", smart_tv: true, sistema_operativo: "Tizen", hdmi_puertos: 4 },
    imagenes: ["samsung_75_neoqled.jpg"],
    etiquetas: ["samsung", "tv", "8k", "neo-qled", "premium"],
    vendedor_id: "V002"
  },

  // ===== AUDÍFONOS =====
  {
    codigo: "ELEC-010", nombre: "Sony WH-1000XM5",
    categoria: "Electrónica", subcategoria: "Audífonos", marca: "Sony",
    precio: 1450000, precio_descuento: 1299000, stock: 25, disponible: true,
    calificacion: 4.8, num_resenas: 445,
    fecha_ingreso: new Date("2024-03-05"),
    especificaciones: { tipo: "Over-ear", conexion: "Bluetooth 5.2", cancelacion_ruido: true, autonomia: "30 horas", plegable: true },
    imagenes: ["sony_xm5.jpg"],
    etiquetas: ["sony", "audifonos", "noise-cancelling", "premium"],
    vendedor_id: "V001"
  },
  {
    codigo: "ELEC-011", nombre: "Samsung Galaxy Buds2 Pro",
    categoria: "Electrónica", subcategoria: "Audífonos", marca: "Samsung",
    precio: 650000, precio_descuento: 549000, stock: 40, disponible: true,
    calificacion: 4.5, num_resenas: 220,
    fecha_ingreso: new Date("2024-02-10"),
    especificaciones: { tipo: "In-ear TWS", conexion: "Bluetooth 5.3", cancelacion_ruido: true, autonomia: "8 horas (29 con estuche)", plegable: false },
    imagenes: ["galaxy_buds2.jpg"],
    etiquetas: ["samsung", "audifonos", "tws", "inalambrico"],
    vendedor_id: "V002"
  },
  {
    codigo: "ELEC-012", nombre: "JBL Tune 770NC",
    categoria: "Electrónica", subcategoria: "Audífonos", marca: "JBL",
    precio: 420000, precio_descuento: 360000, stock: 35, disponible: true,
    calificacion: 4.3, num_resenas: 185,
    fecha_ingreso: new Date("2024-03-10"),
    especificaciones: { tipo: "Over-ear", conexion: "Bluetooth 5.3", cancelacion_ruido: true, autonomia: "70 horas", plegable: true },
    imagenes: ["jbl_tune770.jpg"],
    etiquetas: ["jbl", "audifonos", "noise-cancelling", "bluetooth"],
    vendedor_id: "V001"
  },
  {
    codigo: "ELEC-013", nombre: "Apple AirPods Pro 2",
    categoria: "Electrónica", subcategoria: "Audífonos", marca: "Apple",
    precio: 1100000, precio_descuento: null, stock: 18, disponible: true,
    calificacion: 4.7, num_resenas: 530,
    fecha_ingreso: new Date("2024-01-15"),
    especificaciones: { tipo: "In-ear TWS", conexion: "Bluetooth 5.3", cancelacion_ruido: true, autonomia: "6 horas (30 con estuche)", plegable: false },
    imagenes: ["airpods_pro2.jpg"],
    etiquetas: ["apple", "airpods", "tws", "noise-cancelling", "premium"],
    vendedor_id: "V003"
  },

  // ===== MONITORES =====
  {
    codigo: "COMP-010", nombre: "Monitor Samsung 27 FHD IPS",
    categoria: "Computación", subcategoria: "Monitores", marca: "Samsung",
    precio: 850000, precio_descuento: 749000, stock: 15, disponible: true,
    calificacion: 4.5, num_resenas: 175,
    fecha_ingreso: new Date("2024-02-20"),
    especificaciones: { pulgadas: 27, resolucion: "1920x1080", tipo_panel: "IPS", tasa_refresco: "75Hz", hdmi: true },
    imagenes: ["monitor_27.jpg"],
    etiquetas: ["samsung", "monitor", "ips", "fullhd"],
    vendedor_id: "V002"
  },
  {
    codigo: "COMP-011", nombre: "Monitor LG 27 4K UHD",
    categoria: "Computación", subcategoria: "Monitores", marca: "LG",
    precio: 1800000, precio_descuento: 1599000, stock: 10, disponible: true,
    calificacion: 4.7, num_resenas: 120,
    fecha_ingreso: new Date("2024-03-05"),
    especificaciones: { pulgadas: 27, resolucion: "3840x2160", tipo_panel: "IPS", tasa_refresco: "60Hz", hdmi: true },
    imagenes: ["lg_4k_monitor.jpg"],
    etiquetas: ["lg", "monitor", "4k", "uhd"],
    vendedor_id: "V004"
  },
  {
    codigo: "COMP-012", nombre: "Monitor Samsung Odyssey G5 32",
    categoria: "Computación", subcategoria: "Monitores", marca: "Samsung",
    precio: 2200000, precio_descuento: 1950000, stock: 8, disponible: true,
    calificacion: 4.6, num_resenas: 88,
    fecha_ingreso: new Date("2024-04-01"),
    especificaciones: { pulgadas: 32, resolucion: "2560x1440", tipo_panel: "VA curvo", tasa_refresco: "165Hz", hdmi: true },
    imagenes: ["samsung_odyssey_g5.jpg"],
    etiquetas: ["samsung", "monitor", "curvo", "gaming", "qhd"],
    vendedor_id: "V002"
  },

  // ===== PERIFÉRICOS =====
  {
    codigo: "ACC-001", nombre: "Mouse Logitech MX Master 3S",
    categoria: "Computación", subcategoria: "Mouse", marca: "Logitech",
    precio: 350000, precio_descuento: 299000, stock: 45, disponible: true,
    calificacion: 4.9, num_resenas: 620,
    fecha_ingreso: new Date("2024-02-05"),
    especificaciones: { dpi: "200-8000", conexion: "Bluetooth + USB", botones: 7, recargable: true },
    imagenes: ["mx_master3s.jpg"],
    etiquetas: ["logitech", "mouse", "ergonomico", "premium"],
    vendedor_id: "V001"
  },
  {
    codigo: "ACC-002", nombre: "Teclado Mecánico Logitech G Pro X",
    categoria: "Computación", subcategoria: "Teclados", marca: "Logitech",
    precio: 650000, precio_descuento: 580000, stock: 20, disponible: true,
    calificacion: 4.7, num_resenas: 280,
    fecha_ingreso: new Date("2024-03-01"),
    especificaciones: { tipo: "Mecánico", switches: "GX Blue", iluminacion: "RGB", conexion: "USB", idioma: "Español" },
    imagenes: ["logitech_gpro.jpg"],
    etiquetas: ["logitech", "teclado", "mecanico", "gaming", "rgb"],
    vendedor_id: "V001"
  },
  {
    codigo: "ACC-003", nombre: "Cable USB-C a USB-C 2m Anker",
    categoria: "Accesorios", subcategoria: "Cables", marca: "Anker",
    precio: 45000, precio_descuento: null, stock: 100, disponible: true,
    calificacion: 4.4, num_resenas: 520,
    fecha_ingreso: new Date("2024-01-01"),
    especificaciones: { longitud: "2 metros", carga_rapida: true, velocidad_datos: "480 Mbps" },
    imagenes: ["cable_usbc.jpg"],
    etiquetas: ["cable", "usb-c", "carga", "anker"],
    vendedor_id: "V001"
  },
  {
    codigo: "ACC-004", nombre: "Cargador Samsung 45W Super Fast",
    categoria: "Accesorios", subcategoria: "Cargadores", marca: "Samsung",
    precio: 120000, precio_descuento: 95000, stock: 80, disponible: true,
    calificacion: 4.7, num_resenas: 380,
    fecha_ingreso: new Date("2024-01-05"),
    especificaciones: { potencia: "45W", tipo_conector: "USB-C", carga_rapida: true },
    imagenes: ["cargador_45w.jpg"],
    etiquetas: ["samsung", "cargador", "rapido", "45w"],
    vendedor_id: "V002"
  },
  {
    codigo: "ACC-005", nombre: "Memoria USB Kingston 128GB",
    categoria: "Computación", subcategoria: "Memorias USB", marca: "Kingston",
    precio: 95000, precio_descuento: 79000, stock: 60, disponible: true,
    calificacion: 4.3, num_resenas: 240,
    fecha_ingreso: new Date("2024-02-01"),
    especificaciones: { capacidad: "128GB", velocidad_lectura: "200 MB/s", velocidad_escritura: "150 MB/s", interfaz: "USB 3.2" },
    imagenes: ["kingston_usb.jpg"],
    etiquetas: ["kingston", "usb", "memoria", "almacenamiento"],
    vendedor_id: "V001"
  },

  // ===== ELECTRODOMÉSTICOS =====
  {
    codigo: "ELDOM-001", nombre: "Nevera Samsung 400L No Frost",
    categoria: "Electrodomésticos", subcategoria: "Refrigeradoras", marca: "Samsung",
    precio: 3200000, precio_descuento: 2890000, stock: 8, disponible: true,
    calificacion: 4.5, num_resenas: 87,
    fecha_ingreso: new Date("2024-01-30"),
    especificaciones: { capacidad: "400 litros", tipo: "No Frost", puertas: 2, color: "Plateado", eficiencia_energetica: "A+" },
    imagenes: ["nevera_samsung.jpg"],
    etiquetas: ["samsung", "nevera", "no-frost", "electrodomestico"],
    vendedor_id: "V002"
  },
  {
    codigo: "ELDOM-002", nombre: "Lavadora LG 14kg Carga Frontal",
    categoria: "Electrodomésticos", subcategoria: "Lavadoras", marca: "LG",
    precio: 2500000, precio_descuento: 2199000, stock: 6, disponible: true,
    calificacion: 4.6, num_resenas: 62,
    fecha_ingreso: new Date("2024-02-28"),
    especificaciones: { capacidad: "14 kg", tipo_carga: "Frontal", velocidad_centrifugado: "1400 RPM", vapor: true, eficiencia_energetica: "A+++" },
    imagenes: ["lavadora_lg.jpg"],
    etiquetas: ["lg", "lavadora", "electrodomestico"],
    vendedor_id: "V004"
  },
  {
    codigo: "ELDOM-003", nombre: "Microondas Samsung 28L",
    categoria: "Electrodomésticos", subcategoria: "Microondas", marca: "Samsung",
    precio: 480000, precio_descuento: 420000, stock: 30, disponible: true,
    calificacion: 4.3, num_resenas: 145,
    fecha_ingreso: new Date("2024-03-15"),
    especificaciones: { capacidad: "28 litros", potencia: "900W", tipo: "Con grill", color: "Negro" },
    imagenes: ["microondas.jpg"],
    etiquetas: ["samsung", "microondas", "cocina"],
    vendedor_id: "V002"
  },
  {
    codigo: "ELDOM-004", nombre: "Nevera LG Side by Side 600L",
    categoria: "Electrodomésticos", subcategoria: "Refrigeradoras", marca: "LG",
    precio: 5800000, precio_descuento: 5200000, stock: 4, disponible: true,
    calificacion: 4.7, num_resenas: 55,
    fecha_ingreso: new Date("2024-02-05"),
    especificaciones: { capacidad: "600 litros", tipo: "Side by Side", puertas: 2, color: "Inox", eficiencia_energetica: "A++" },
    imagenes: ["lg_side_by_side.jpg"],
    etiquetas: ["lg", "nevera", "side-by-side", "premium", "electrodomestico"],
    vendedor_id: "V004"
  },
  {
    codigo: "ELDOM-005", nombre: "Lavadora Samsung 12kg Carga Superior",
    categoria: "Electrodomésticos", subcategoria: "Lavadoras", marca: "Samsung",
    precio: 1650000, precio_descuento: 1450000, stock: 12, disponible: true,
    calificacion: 4.4, num_resenas: 78,
    fecha_ingreso: new Date("2024-03-20"),
    especificaciones: { capacidad: "12 kg", tipo_carga: "Superior", velocidad_centrifugado: "700 RPM", vapor: false, eficiencia_energetica: "A+" },
    imagenes: ["samsung_lavadora_top.jpg"],
    etiquetas: ["samsung", "lavadora", "electrodomestico"],
    vendedor_id: "V002"
  },

  // ===== TABLETS =====
  {
    codigo: "TEL-010", nombre: "iPad 10ma Generación",
    categoria: "Telefonía", subcategoria: "Tablets", marca: "Apple",
    precio: 2800000, precio_descuento: null, stock: 14, disponible: true,
    calificacion: 4.7, num_resenas: 360,
    fecha_ingreso: new Date("2024-01-20"),
    especificaciones: { sistema_operativo: "iPadOS 17", pantalla: "10.9 pulgadas", chip: "Apple A14 Bionic", almacenamiento: "64GB", conectividad: "WiFi" },
    imagenes: ["ipad_10.jpg"],
    etiquetas: ["apple", "ipad", "tablet", "ios"],
    vendedor_id: "V003"
  },
  {
    codigo: "TEL-011", nombre: "Samsung Galaxy Tab S9",
    categoria: "Telefonía", subcategoria: "Tablets", marca: "Samsung",
    precio: 3500000, precio_descuento: 3100000, stock: 9, disponible: true,
    calificacion: 4.6, num_resenas: 195,
    fecha_ingreso: new Date("2024-02-25"),
    especificaciones: { sistema_operativo: "Android 13", pantalla: "11 pulgadas", procesador: "Snapdragon 8 Gen 2", almacenamiento: "128GB", conectividad: "WiFi + 5G" },
    imagenes: ["tab_s9.jpg"],
    etiquetas: ["samsung", "tablet", "android", "s-pen"],
    vendedor_id: "V002"
  },
  {
    codigo: "TEL-012", nombre: "Xiaomi Pad 6",
    categoria: "Telefonía", subcategoria: "Tablets", marca: "Xiaomi",
    precio: 1400000, precio_descuento: 1199000, stock: 22, disponible: true,
    calificacion: 4.5, num_resenas: 130,
    fecha_ingreso: new Date("2024-03-15"),
    especificaciones: { sistema_operativo: "Android 13 MIUI 14", pantalla: "11 pulgadas", procesador: "Snapdragon 870", almacenamiento: "128GB", conectividad: "WiFi" },
    imagenes: ["xiaomi_pad6.jpg"],
    etiquetas: ["xiaomi", "tablet", "android", "economico"],
    vendedor_id: "V005"
  },

  // ===== SMARTWATCHES =====
  {
    codigo: "TEL-020", nombre: "Samsung Galaxy Watch 6",
    categoria: "Telefonía", subcategoria: "Smartwatches", marca: "Samsung",
    precio: 1200000, precio_descuento: 1050000, stock: 20, disponible: true,
    calificacion: 4.5, num_resenas: 175,
    fecha_ingreso: new Date("2024-02-01"),
    especificaciones: { sistema_operativo: "Wear OS 4", pantalla: "1.3 pulgadas AMOLED", bateria: "300mAh", resistencia_agua: "5ATM", compatible: "Android" },
    imagenes: ["galaxy_watch6.jpg"],
    etiquetas: ["samsung", "smartwatch", "wearable"],
    vendedor_id: "V002"
  },
  {
    codigo: "TEL-021", nombre: "Apple Watch Series 9",
    categoria: "Telefonía", subcategoria: "Smartwatches", marca: "Apple",
    precio: 2100000, precio_descuento: null, stock: 11, disponible: true,
    calificacion: 4.8, num_resenas: 410,
    fecha_ingreso: new Date("2024-01-25"),
    especificaciones: { sistema_operativo: "watchOS 10", pantalla: "1.9 pulgadas LTPO OLED", bateria: "308mAh", resistencia_agua: "WR50", compatible: "iPhone" },
    imagenes: ["apple_watch_s9.jpg"],
    etiquetas: ["apple", "smartwatch", "wearable", "premium"],
    vendedor_id: "V003"
  },

  // ===== ACCESORIOS ADICIONALES =====
  {
    codigo: "ACC-010", nombre: "Funda Samsung Galaxy S24 Silicona",
    categoria: "Accesorios", subcategoria: "Fundas", marca: "Samsung",
    precio: 85000, precio_descuento: 65000, stock: 90, disponible: true,
    calificacion: 4.2, num_resenas: 320,
    fecha_ingreso: new Date("2024-02-20"),
    especificaciones: { material: "Silicona", color: "Negro", compatibilidad: "Samsung Galaxy S24" },
    imagenes: ["funda_s24.jpg"],
    etiquetas: ["samsung", "funda", "accesorio", "proteccion"],
    vendedor_id: "V002"
  },
  {
    codigo: "ACC-011", nombre: "Soporte TV de Pared 40-80 pulgadas",
    categoria: "Accesorios", subcategoria: "Soportes", marca: "Genérico",
    precio: 120000, precio_descuento: 95000, stock: 55, disponible: true,
    calificacion: 4.1, num_resenas: 198,
    fecha_ingreso: new Date("2024-01-10"),
    especificaciones: { compatibilidad: "40-80 pulgadas", carga_maxima: "60 kg", angulo_inclinacion: "-5 a +15 grados", tipo: "Fijo" },
    imagenes: ["soporte_tv.jpg"],
    etiquetas: ["soporte", "tv", "pared", "accesorio"],
    vendedor_id: "V001"
  },
  {
    codigo: "ACC-012", nombre: "Hub USB-C 7 en 1 Anker",
    categoria: "Accesorios", subcategoria: "Cables", marca: "Anker",
    precio: 220000, precio_descuento: 189000, stock: 35, disponible: true,
    calificacion: 4.6, num_resenas: 290,
    fecha_ingreso: new Date("2024-03-10"),
    especificaciones: { puertos: "HDMI 4K, 3x USB-A, USB-C PD 100W, SD, MicroSD", compatibilidad: "USB-C universal" },
    imagenes: ["anker_hub.jpg"],
    etiquetas: ["anker", "hub", "usb-c", "adaptador"],
    vendedor_id: "V001"
  },
  {
    codigo: "ACC-013", nombre: "Cargador Inalámbrico 15W Samsung",
    categoria: "Accesorios", subcategoria: "Cargadores", marca: "Samsung",
    precio: 150000, precio_descuento: 120000, stock: 60, disponible: true,
    calificacion: 4.5, num_resenas: 265,
    fecha_ingreso: new Date("2024-02-10"),
    especificaciones: { potencia: "15W", tipo: "Qi inalámbrico", compatibilidad: "Samsung + otros Qi" },
    imagenes: ["cargador_inalambrico.jpg"],
    etiquetas: ["samsung", "cargador", "inalambrico", "qi"],
    vendedor_id: "V002"
  },
  {
    codigo: "ACC-014", nombre: "Funda MacBook Air 13 Incase",
    categoria: "Accesorios", subcategoria: "Fundas", marca: "Incase",
    precio: 180000, precio_descuento: 150000, stock: 28, disponible: true,
    calificacion: 4.3, num_resenas: 115,
    fecha_ingreso: new Date("2024-03-25"),
    especificaciones: { material: "Cuero sintético", color: "Azul marino", compatibilidad: "MacBook Air 13" },
    imagenes: ["funda_macbook.jpg"],
    etiquetas: ["incase", "funda", "macbook", "accesorio"],
    vendedor_id: "V001"
  },

  // ===== PARLANTES =====
  {
    codigo: "ELEC-020", nombre: "JBL Charge 5",
    categoria: "Electrónica", subcategoria: "Parlantes", marca: "JBL",
    precio: 580000, precio_descuento: 499000, stock: 30, disponible: true,
    calificacion: 4.7, num_resenas: 390,
    fecha_ingreso: new Date("2024-02-15"),
    especificaciones: { potencia: "40W", bateria: "7500mAh", autonomia: "20 horas", resistencia_agua: "IP67", bluetooth: "5.1" },
    imagenes: ["jbl_charge5.jpg"],
    etiquetas: ["jbl", "parlante", "bluetooth", "portatil"],
    vendedor_id: "V001"
  },
  {
    codigo: "ELEC-021", nombre: "Sony SRS-XB33",
    categoria: "Electrónica", subcategoria: "Parlantes", marca: "Sony",
    precio: 480000, precio_descuento: 420000, stock: 22, disponible: true,
    calificacion: 4.4, num_resenas: 210,
    fecha_ingreso: new Date("2024-03-20"),
    especificaciones: { potencia: "30W", bateria: "6000mAh", autonomia: "24 horas", resistencia_agua: "IP67", bluetooth: "5.0" },
    imagenes: ["sony_xb33.jpg"],
    etiquetas: ["sony", "parlante", "bluetooth", "portatil"],
    vendedor_id: "V001"
  },

  // ===== CÁMARAS =====
  {
    codigo: "ELEC-030", nombre: "Cámara Sony Alpha A7 III",
    categoria: "Electrónica", subcategoria: "Cámaras", marca: "Sony",
    precio: 8900000, precio_descuento: 8200000, stock: 3, disponible: true,
    calificacion: 4.9, num_resenas: 78,
    fecha_ingreso: new Date("2024-01-15"),
    especificaciones: { tipo: "Mirrorless", sensor: "Full Frame 24.2MP", video: "4K", estabilizacion: "IBIS 5 ejes", montura: "Sony E" },
    imagenes: ["sony_a7iii.jpg"],
    etiquetas: ["sony", "camara", "mirrorless", "profesional", "fullframe"],
    vendedor_id: "V001"
  },
  {
    codigo: "ELEC-031", nombre: "GoPro Hero 12 Black",
    categoria: "Electrónica", subcategoria: "Cámaras", marca: "GoPro",
    precio: 1800000, precio_descuento: 1599000, stock: 15, disponible: true,
    calificacion: 4.7, num_resenas: 245,
    fecha_ingreso: new Date("2024-02-20"),
    especificaciones: { tipo: "Acción", video: "5.3K 60fps", resistencia_agua: "10 metros sin carcasa", estabilizacion: "HyperSmooth 6.0", pantalla_posterior: true },
    imagenes: ["gopro_hero12.jpg"],
    etiquetas: ["gopro", "camara", "accion", "deporte", "4k"],
    vendedor_id: "V001"
  },

  // ===== PRODUCTOS FINALES ADICIONALES =====
  {
    codigo: "COMP-020", nombre: "SSD Externo Samsung T7 1TB",
    categoria: "Computación", subcategoria: "Memorias USB", marca: "Samsung",
    precio: 420000, precio_descuento: 370000, stock: 38, disponible: true,
    calificacion: 4.8, num_resenas: 445,
    fecha_ingreso: new Date("2024-01-25"),
    especificaciones: { capacidad: "1TB", velocidad_lectura: "1050 MB/s", velocidad_escritura: "1000 MB/s", interfaz: "USB 3.2 Gen2", resistencia: "IP65" },
    imagenes: ["samsung_t7.jpg"],
    etiquetas: ["samsung", "ssd", "externo", "almacenamiento", "portatil"],
    vendedor_id: "V002"
  },
  {
    codigo: "ELDOM-010", nombre: "Licuadora Oster 700W",
    categoria: "Electrodomésticos", subcategoria: "Licuadoras", marca: "Oster",
    precio: 280000, precio_descuento: 240000, stock: 45, disponible: true,
    calificacion: 4.2, num_resenas: 195,
    fecha_ingreso: new Date("2024-03-01"),
    especificaciones: { potencia: "700W", velocidades: 3, capacidad: "1.25 litros", material_vaso: "Vidrio" },
    imagenes: ["oster_licuadora.jpg"],
    etiquetas: ["oster", "licuadora", "cocina", "electrodomestico"],
    vendedor_id: "V001"
  },

  // ===== LAPTOPS ADICIONALES =====
  { codigo: "COMP-008", nombre: "Laptop MSI Thin 15", categoria: "Computación", subcategoria: "Laptops", marca: "MSI", precio: 3500000, precio_descuento: 3100000, stock: 10, disponible: true, calificacion: 4.4, num_resenas: 92, fecha_ingreso: new Date("2024-04-01"), especificaciones: { procesador: "Intel Core i7-12650H", ram: "16GB", almacenamiento: "512GB SSD", pantalla: "15.6 pulgadas", sistema_operativo: "Windows 11", gpu: "NVIDIA RTX 4050" }, imagenes: ["msi_thin15.jpg"], etiquetas: ["laptop", "msi", "gaming", "rtx", "intel"], vendedor_id: "V001" },
  { codigo: "COMP-009", nombre: "Laptop Samsung Galaxy Book3", categoria: "Computación", subcategoria: "Laptops", marca: "Samsung", precio: 4100000, precio_descuento: 3750000, stock: 7, disponible: true, calificacion: 4.5, num_resenas: 68, fecha_ingreso: new Date("2024-04-15"), especificaciones: { procesador: "Intel Core i7-1355U", ram: "16GB", almacenamiento: "512GB SSD", pantalla: "15.6 pulgadas", sistema_operativo: "Windows 11" }, imagenes: ["galaxy_book3.jpg"], etiquetas: ["laptop", "samsung", "intel", "delgada"], vendedor_id: "V002" },

  // ===== SMARTPHONES ADICIONALES =====
  { codigo: "TEL-013", nombre: "Motorola Moto G84", categoria: "Telefonía", subcategoria: "Smartphones", marca: "Motorola", precio: 980000, precio_descuento: 850000, stock: 38, disponible: true, calificacion: 4.2, num_resenas: 115, fecha_ingreso: new Date("2024-03-20"), especificaciones: { sistema_operativo: "Android 13", camara: "50MP + 8MP", bateria: "5000mAh", pantalla: "6.55 pulgadas", almacenamiento: "256GB" }, imagenes: ["moto_g84.jpg"], etiquetas: ["motorola", "android", "economico", "smartphone"], vendedor_id: "V001" },
  { codigo: "TEL-014", nombre: "Samsung Galaxy A25", categoria: "Telefonía", subcategoria: "Smartphones", marca: "Samsung", precio: 1050000, precio_descuento: 920000, stock: 45, disponible: true, calificacion: 4.1, num_resenas: 98, fecha_ingreso: new Date("2024-04-20"), especificaciones: { sistema_operativo: "Android 14", camara: "50MP + 8MP + 2MP", bateria: "5000mAh", pantalla: "6.5 pulgadas", almacenamiento: "128GB" }, imagenes: ["galaxy_a25.jpg"], etiquetas: ["samsung", "galaxy", "android", "gama-media"], vendedor_id: "V002" },
  { codigo: "TEL-015", nombre: "Xiaomi Redmi 13C", categoria: "Telefonía", subcategoria: "Smartphones", marca: "Xiaomi", precio: 650000, precio_descuento: 580000, stock: 60, disponible: true, calificacion: 4.0, num_resenas: 175, fecha_ingreso: new Date("2024-05-01"), especificaciones: { sistema_operativo: "Android 13 MIUI 14", camara: "50MP + 2MP", bateria: "5000mAh", pantalla: "6.74 pulgadas", almacenamiento: "128GB" }, imagenes: ["redmi_13c.jpg"], etiquetas: ["xiaomi", "redmi", "android", "economico", "basico"], vendedor_id: "V005" },
  { codigo: "TEL-016", nombre: "iPhone 14", categoria: "Telefonía", subcategoria: "Smartphones", marca: "Apple", precio: 3900000, precio_descuento: 3500000, stock: 10, disponible: true, calificacion: 4.7, num_resenas: 620, fecha_ingreso: new Date("2024-01-08"), especificaciones: { sistema_operativo: "iOS 17", camara: "12MP + 12MP", bateria: "3279mAh", pantalla: "6.1 pulgadas", almacenamiento: "128GB" }, imagenes: ["iphone14.jpg"], etiquetas: ["apple", "iphone", "ios", "smartphone"], vendedor_id: "V003" },
  { codigo: "TEL-017", nombre: "Realme C67", categoria: "Telefonía", subcategoria: "Smartphones", marca: "Realme", precio: 780000, precio_descuento: 699000, stock: 42, disponible: true, calificacion: 4.1, num_resenas: 88, fecha_ingreso: new Date("2024-05-10"), especificaciones: { sistema_operativo: "Android 14", camara: "108MP + 2MP", bateria: "5000mAh", pantalla: "6.72 pulgadas", almacenamiento: "128GB" }, imagenes: ["realme_c67.jpg"], etiquetas: ["realme", "android", "economico", "camara"], vendedor_id: "V001" },

  // ===== TELEVISORES ADICIONALES =====
  { codigo: "ELEC-006", nombre: "Hisense TV 50 4K ULED", categoria: "Electrónica", subcategoria: "Televisores", marca: "Hisense", precio: 1800000, precio_descuento: 1550000, stock: 14, disponible: true, calificacion: 4.3, num_resenas: 132, fecha_ingreso: new Date("2024-03-10"), especificaciones: { pulgadas: 50, resolucion: "4K UHD", tipo_panel: "ULED", smart_tv: true, sistema_operativo: "VIDAA U7", hdmi_puertos: 3 }, imagenes: ["hisense_50.jpg"], etiquetas: ["hisense", "tv", "4k", "economico"], vendedor_id: "V001" },
  { codigo: "ELEC-007", nombre: "TCL TV 55 QLED 4K", categoria: "Electrónica", subcategoria: "Televisores", marca: "TCL", precio: 2100000, precio_descuento: 1850000, stock: 11, disponible: true, calificacion: 4.2, num_resenas: 110, fecha_ingreso: new Date("2024-04-05"), especificaciones: { pulgadas: 55, resolucion: "4K UHD", tipo_panel: "QLED", smart_tv: true, sistema_operativo: "Google TV", hdmi_puertos: 3 }, imagenes: ["tcl_55.jpg"], etiquetas: ["tcl", "tv", "4k", "qled", "google-tv"], vendedor_id: "V001" },
  { codigo: "ELEC-008", nombre: "Samsung TV 32 HD Smart", categoria: "Electrónica", subcategoria: "Televisores", marca: "Samsung", precio: 850000, precio_descuento: 749000, stock: 25, disponible: true, calificacion: 4.0, num_resenas: 245, fecha_ingreso: new Date("2024-01-15"), especificaciones: { pulgadas: 32, resolucion: "HD 720p", tipo_panel: "LED", smart_tv: true, sistema_operativo: "Tizen", hdmi_puertos: 2 }, imagenes: ["samsung_tv_32.jpg"], etiquetas: ["samsung", "tv", "hd", "pequeño", "economico"], vendedor_id: "V002" },

  // ===== AUDÍFONOS ADICIONALES =====
  { codigo: "ELEC-014", nombre: "Xiaomi Redmi Buds 5 Pro", categoria: "Electrónica", subcategoria: "Audífonos", marca: "Xiaomi", precio: 280000, precio_descuento: 240000, stock: 50, disponible: true, calificacion: 4.3, num_resenas: 195, fecha_ingreso: new Date("2024-04-01"), especificaciones: { tipo: "In-ear TWS", conexion: "Bluetooth 5.3", cancelacion_ruido: true, autonomia: "10 horas (38 con estuche)", plegable: false }, imagenes: ["redmi_buds5.jpg"], etiquetas: ["xiaomi", "audifonos", "tws", "economico"], vendedor_id: "V005" },
  { codigo: "ELEC-015", nombre: "Beats Studio Pro", categoria: "Electrónica", subcategoria: "Audífonos", marca: "Beats", precio: 1200000, precio_descuento: 1050000, stock: 15, disponible: true, calificacion: 4.6, num_resenas: 310, fecha_ingreso: new Date("2024-02-25"), especificaciones: { tipo: "Over-ear", conexion: "Bluetooth 5.3 + USB-C", cancelacion_ruido: true, autonomia: "40 horas", plegable: true }, imagenes: ["beats_studio_pro.jpg"], etiquetas: ["beats", "audifonos", "premium", "noise-cancelling"], vendedor_id: "V001" },

  // ===== ACCESORIOS Y PERIFÉRICOS ADICIONALES =====
  { codigo: "ACC-015", nombre: "Teclado Logitech K380 Bluetooth", categoria: "Computación", subcategoria: "Teclados", marca: "Logitech", precio: 185000, precio_descuento: 159000, stock: 55, disponible: true, calificacion: 4.5, num_resenas: 420, fecha_ingreso: new Date("2024-02-01"), especificaciones: { tipo: "Membrana", conexion: "Bluetooth", dispositivos_simultaneos: 3, idioma: "Español" }, imagenes: ["logitech_k380.jpg"], etiquetas: ["logitech", "teclado", "bluetooth", "portatil", "multidevice"], vendedor_id: "V001" },
  { codigo: "ACC-016", nombre: "Pad Mouse XL Gamer HyperX", categoria: "Computación", subcategoria: "Mouse", marca: "HyperX", precio: 95000, precio_descuento: 79000, stock: 70, disponible: true, calificacion: 4.6, num_resenas: 380, fecha_ingreso: new Date("2024-03-05"), especificaciones: { dimensiones: "900x420x4mm", material: "Tela", base: "Antideslizante", tipo: "Extra Grande" }, imagenes: ["hyperx_pad.jpg"], etiquetas: ["hyperx", "pad", "mouse", "gaming", "xl"], vendedor_id: "V001" },
  { codigo: "ACC-017", nombre: "Webcam Logitech C920 HD Pro", categoria: "Computación", subcategoria: "Accesorios", marca: "Logitech", precio: 450000, precio_descuento: 390000, stock: 28, disponible: true, calificacion: 4.7, num_resenas: 540, fecha_ingreso: new Date("2024-01-20"), especificaciones: { resolucion: "1080p 30fps", angulo: "78 grados", microfono: "Estéreo integrado", conexion: "USB-A" }, imagenes: ["logitech_c920.jpg"], etiquetas: ["logitech", "webcam", "streaming", "trabajo-remoto"], vendedor_id: "V001" },
  { codigo: "ACC-018", nombre: "Disco Duro Externo WD 2TB", categoria: "Computación", subcategoria: "Memorias USB", marca: "WD", precio: 280000, precio_descuento: 249000, stock: 45, disponible: true, calificacion: 4.5, num_resenas: 490, fecha_ingreso: new Date("2024-02-10"), especificaciones: { capacidad: "2TB", velocidad: "5400 RPM", interfaz: "USB 3.0", formato: "2.5 pulgadas" }, imagenes: ["wd_2tb.jpg"], etiquetas: ["wd", "disco", "externo", "almacenamiento", "backup"], vendedor_id: "V001" },
  { codigo: "ACC-019", nombre: "Cable HDMI 2.1 8K 2m", categoria: "Accesorios", subcategoria: "Cables", marca: "Anker", precio: 65000, precio_descuento: null, stock: 85, disponible: true, calificacion: 4.4, num_resenas: 215, fecha_ingreso: new Date("2024-01-25"), especificaciones: { longitud: "2 metros", version: "HDMI 2.1", resolucion_max: "8K 60Hz / 4K 120Hz", hdr: true }, imagenes: ["cable_hdmi.jpg"], etiquetas: ["anker", "cable", "hdmi", "8k", "4k"], vendedor_id: "V001" },
  { codigo: "ACC-020", nombre: "Power Bank Xiaomi 20000mAh", categoria: "Accesorios", subcategoria: "Cargadores", marca: "Xiaomi", precio: 180000, precio_descuento: 150000, stock: 65, disponible: true, calificacion: 4.5, num_resenas: 670, fecha_ingreso: new Date("2024-02-20"), especificaciones: { capacidad: "20000mAh", potencia_salida: "22.5W", puertos: "USB-A x2 + USB-C", carga_rapida: true }, imagenes: ["xiaomi_powerbank.jpg"], etiquetas: ["xiaomi", "powerbank", "bateria", "portatil", "carga-rapida"], vendedor_id: "V005" },

  // ===== ELECTRODOMÉSTICOS ADICIONALES =====
  { codigo: "ELDOM-006", nombre: "Aire Acondicionado LG 12000 BTU", categoria: "Electrodomésticos", subcategoria: "Aire Acondicionado", marca: "LG", precio: 2200000, precio_descuento: 1990000, stock: 8, disponible: true, calificacion: 4.5, num_resenas: 74, fecha_ingreso: new Date("2024-03-01"), especificaciones: { btu: 12000, tipo: "Split inverter", eficiencia: "A++", wifi: true, area_cobertura: "20-30 m2" }, imagenes: ["lg_aire.jpg"], etiquetas: ["lg", "aire-acondicionado", "inverter", "electrodomestico"], vendedor_id: "V004" },
  { codigo: "ELDOM-007", nombre: "Aspiradora Dyson V15 Detect", categoria: "Electrodomésticos", subcategoria: "Aspiradoras", marca: "Dyson", precio: 3800000, precio_descuento: 3400000, stock: 5, disponible: true, calificacion: 4.8, num_resenas: 52, fecha_ingreso: new Date("2024-04-10"), especificaciones: { tipo: "Sin cable", potencia: "240 AW", autonomia: "60 minutos", filtro: "HEPA", sensor_laser: true }, imagenes: ["dyson_v15.jpg"], etiquetas: ["dyson", "aspiradora", "premium", "sin-cable"], vendedor_id: "V001" },
  { codigo: "ELDOM-008", nombre: "Cafetera Nespresso Vertuo Pop", categoria: "Electrodomésticos", subcategoria: "Cafeteras", marca: "Nespresso", precio: 480000, precio_descuento: 420000, stock: 30, disponible: true, calificacion: 4.6, num_resenas: 128, fecha_ingreso: new Date("2024-03-25"), especificaciones: { tipo: "Cápsulas", presion: "19 bares", capacidad_deposito: "1.1 litros" }, imagenes: ["nespresso_vertuo.jpg"], etiquetas: ["nespresso", "cafetera", "capsulas", "cocina"], vendedor_id: "V001" },
  { codigo: "ELDOM-009", nombre: "Freidora de Aire Philips 4.1L", categoria: "Electrodomésticos", subcategoria: "Freidoras", marca: "Philips", precio: 620000, precio_descuento: 549000, stock: 22, disponible: true, calificacion: 4.7, num_resenas: 210, fecha_ingreso: new Date("2024-02-15"), especificaciones: { capacidad: "4.1 litros", potencia: "1400W", temperatura_max: "200°C", pantalla: "Digital", programas: 7 }, imagenes: ["philips_airfryer.jpg"], etiquetas: ["philips", "airfryer", "freidora", "saludable", "cocina"], vendedor_id: "V001" },

  // ===== SMARTWATCHES ADICIONALES =====
  { codigo: "TEL-022", nombre: "Xiaomi Band 8", categoria: "Telefonía", subcategoria: "Smartwatches", marca: "Xiaomi", precio: 180000, precio_descuento: 150000, stock: 75, disponible: true, calificacion: 4.3, num_resenas: 540, fecha_ingreso: new Date("2024-03-10"), especificaciones: { sistema_operativo: "Xiaomi HyperOS", pantalla: "1.62 pulgadas AMOLED", bateria: "190mAh", resistencia_agua: "5ATM", compatible: "Android + iOS" }, imagenes: ["xiaomi_band8.jpg"], etiquetas: ["xiaomi", "smartband", "wearable", "economico"], vendedor_id: "V005" },
  { codigo: "TEL-023", nombre: "Garmin Forerunner 265", categoria: "Telefonía", subcategoria: "Smartwatches", marca: "Garmin", precio: 2500000, precio_descuento: 2200000, stock: 8, disponible: true, calificacion: 4.8, num_resenas: 145, fecha_ingreso: new Date("2024-04-20"), especificaciones: { sistema_operativo: "Garmin OS", pantalla: "1.3 pulgadas AMOLED", bateria: "13 días modo smartwatch", resistencia_agua: "5ATM", gps: true }, imagenes: ["garmin_265.jpg"], etiquetas: ["garmin", "smartwatch", "running", "deportivo", "gps"], vendedor_id: "V001" },

  // ===== MONITORES Y CÁMARAS ADICIONALES =====
  { codigo: "COMP-013", nombre: "Monitor Xiaomi Mi 27 FHD", categoria: "Computación", subcategoria: "Monitores", marca: "Xiaomi", precio: 750000, precio_descuento: 649000, stock: 18, disponible: true, calificacion: 4.4, num_resenas: 145, fecha_ingreso: new Date("2024-04-10"), especificaciones: { pulgadas: 27, resolucion: "1920x1080", tipo_panel: "IPS", tasa_refresco: "100Hz", hdmi: true }, imagenes: ["xiaomi_monitor27.jpg"], etiquetas: ["xiaomi", "monitor", "ips", "fullhd", "economico"], vendedor_id: "V005" },
  { codigo: "ELEC-032", nombre: "Cámara Instax Mini 12", categoria: "Electrónica", subcategoria: "Cámaras", marca: "Fujifilm", precio: 380000, precio_descuento: 330000, stock: 30, disponible: true, calificacion: 4.5, num_resenas: 285, fecha_ingreso: new Date("2024-03-15"), especificaciones: { tipo: "Instantánea", formato_foto: "62x46mm", flash: "Automático", bateria: "2x AA" }, imagenes: ["instax_mini12.jpg"], etiquetas: ["fujifilm", "instax", "camara", "instantanea", "regalo"], vendedor_id: "V001" },

  // ===== PARLANTES ADICIONALES =====
  { codigo: "ELEC-022", nombre: "Bose SoundLink Flex", categoria: "Electrónica", subcategoria: "Parlantes", marca: "Bose", precio: 850000, precio_descuento: 749000, stock: 18, disponible: true, calificacion: 4.7, num_resenas: 325, fecha_ingreso: new Date("2024-03-01"), especificaciones: { potencia: "35W", bateria: "4800mAh", autonomia: "12 horas", resistencia_agua: "IP67", bluetooth: "5.3" }, imagenes: ["bose_flex.jpg"], etiquetas: ["bose", "parlante", "premium", "bluetooth", "portatil"], vendedor_id: "V001" },

  // ===== TABLETS ADICIONALES =====
  { codigo: "TEL-013b", nombre: "Samsung Galaxy Tab A9+", categoria: "Telefonía", subcategoria: "Tablets", marca: "Samsung", precio: 1200000, precio_descuento: 1050000, stock: 20, disponible: true, calificacion: 4.3, num_resenas: 145, fecha_ingreso: new Date("2024-05-05"), especificaciones: { sistema_operativo: "Android 13", pantalla: "11 pulgadas", procesador: "Snapdragon 695", almacenamiento: "64GB", conectividad: "WiFi" }, imagenes: ["tab_a9plus.jpg"], etiquetas: ["samsung", "tablet", "android", "gama-media"], vendedor_id: "V002" },

  // ===== PRODUCTOS EXTRA FINALES =====
  { codigo: "EXTRA-001", nombre: "Audífono Sony WF-1000XM4", categoria: "Electrónica", subcategoria: "Audífonos", marca: "Sony", precio: 950000, precio_descuento: 820000, stock: 22, disponible: true, calificacion: 4.7, num_resenas: 310, fecha_ingreso: new Date("2024-03-01"), especificaciones: { tipo: "In-ear TWS", conexion: "Bluetooth 5.2", cancelacion_ruido: true, autonomia: "12 horas (36 con estuche)" }, imagenes: ["sony_wf1000xm4.jpg"], etiquetas: ["sony", "audifonos", "tws", "premium"], vendedor_id: "V001" },
  { codigo: "EXTRA-002", nombre: "Tablet Lenovo Tab M10 Plus", categoria: "Telefonía", subcategoria: "Tablets", marca: "Lenovo", precio: 890000, precio_descuento: 780000, stock: 18, disponible: true, calificacion: 4.2, num_resenas: 105, fecha_ingreso: new Date("2024-04-01"), especificaciones: { sistema_operativo: "Android 12", pantalla: "10.6 pulgadas", procesador: "MediaTek Helio G80", almacenamiento: "64GB", conectividad: "WiFi" }, imagenes: ["lenovo_tab_m10.jpg"], etiquetas: ["lenovo", "tablet", "android", "economico"], vendedor_id: "V001" },
  { codigo: "EXTRA-003", nombre: "Mouse Inalámbrico HP 430", categoria: "Computación", subcategoria: "Mouse", marca: "HP", precio: 85000, precio_descuento: 70000, stock: 75, disponible: true, calificacion: 4.1, num_resenas: 190, fecha_ingreso: new Date("2024-02-10"), especificaciones: { dpi: "1000-4000", conexion: "Bluetooth + USB", botones: 3, recargable: false }, imagenes: ["hp_mouse430.jpg"], etiquetas: ["hp", "mouse", "inalambrico", "economico"], vendedor_id: "V001" },
  { codigo: "EXTRA-004", nombre: "Smartwatch Huawei Band 8", categoria: "Telefonía", subcategoria: "Smartwatches", marca: "Huawei", precio: 220000, precio_descuento: 189000, stock: 40, disponible: true, calificacion: 4.3, num_resenas: 145, fecha_ingreso: new Date("2024-04-10"), especificaciones: { pantalla: "1.47 pulgadas AMOLED", bateria: "180mAh", autonomia: "14 dias", resistencia_agua: "5ATM", compatible: "Android + iOS" }, imagenes: ["huawei_band8.jpg"], etiquetas: ["huawei", "smartband", "wearable", "economico"], vendedor_id: "V001" },
  { codigo: "EXTRA-005", nombre: "Cargador Inalámbrico Anker 10W", categoria: "Accesorios", subcategoria: "Cargadores", marca: "Anker", precio: 75000, precio_descuento: 62000, stock: 90, disponible: true, calificacion: 4.4, num_resenas: 280, fecha_ingreso: new Date("2024-01-20"), especificaciones: { potencia: "10W", tipo: "Qi inalámbrico", compatibilidad: "Universal Qi" }, imagenes: ["anker_wireless.jpg"], etiquetas: ["anker", "cargador", "inalambrico", "qi"], vendedor_id: "V001" },
  { codigo: "EXTRA-006", nombre: "Parlante JBL Flip 6", categoria: "Electrónica", subcategoria: "Parlantes", marca: "JBL", precio: 420000, precio_descuento: 370000, stock: 28, disponible: true, calificacion: 4.6, num_resenas: 460, fecha_ingreso: new Date("2024-02-01"), especificaciones: { potencia: "30W", autonomia: "12 horas", resistencia_agua: "IP67", bluetooth: "5.1" }, imagenes: ["jbl_flip6.jpg"], etiquetas: ["jbl", "parlante", "bluetooth", "portatil"], vendedor_id: "V001" },
  { codigo: "EXTRA-007", nombre: "Teclado Bluetooth Samsung Smart", categoria: "Computación", subcategoria: "Teclados", marca: "Samsung", precio: 195000, precio_descuento: 165000, stock: 30, disponible: true, calificacion: 4.3, num_resenas: 88, fecha_ingreso: new Date("2024-03-15"), especificaciones: { tipo: "Membrana", conexion: "Bluetooth 5.0", dispositivos_simultaneos: 3, idioma: "Español" }, imagenes: ["samsung_teclado.jpg"], etiquetas: ["samsung", "teclado", "bluetooth", "portatil"], vendedor_id: "V002" },
  { codigo: "EXTRA-008", nombre: "Funda iPhone 15 Pro MagSafe", categoria: "Accesorios", subcategoria: "Fundas", marca: "Apple", precio: 180000, precio_descuento: null, stock: 40, disponible: true, calificacion: 4.5, num_resenas: 210, fecha_ingreso: new Date("2024-02-05"), especificaciones: { material: "Silicona", compatibilidad: "iPhone 15 Pro", magsafe: true }, imagenes: ["funda_iphone15pro.jpg"], etiquetas: ["apple", "funda", "magsafe", "iphone"], vendedor_id: "V003" },
  { codigo: "EXTRA-009", nombre: "Webcam Logitech C270 HD", categoria: "Computación", subcategoria: "Accesorios", marca: "Logitech", precio: 180000, precio_descuento: 155000, stock: 35, disponible: true, calificacion: 4.0, num_resenas: 320, fecha_ingreso: new Date("2024-01-15"), especificaciones: { resolucion: "720p 30fps", angulo: "60 grados", microfono: "Integrado", conexion: "USB-A" }, imagenes: ["logitech_c270.jpg"], etiquetas: ["logitech", "webcam", "economico", "trabajo-remoto"], vendedor_id: "V001" },
  { codigo: "EXTRA-010", nombre: "Cable Lightning a USB-C 1m Apple", categoria: "Accesorios", subcategoria: "Cables", marca: "Apple", precio: 95000, precio_descuento: null, stock: 70, disponible: true, calificacion: 4.3, num_resenas: 175, fecha_ingreso: new Date("2024-01-10"), especificaciones: { longitud: "1 metro", carga_rapida: true, compatibilidad: "iPhone con Lightning" }, imagenes: ["cable_lightning.jpg"], etiquetas: ["apple", "cable", "lightning", "carga"], vendedor_id: "V003" },
  { codigo: "EXTRA-011", nombre: "Soporte para Monitor Articulado", categoria: "Accesorios", subcategoria: "Soportes", marca: "Ergotron", precio: 380000, precio_descuento: 320000, stock: 20, disponible: true, calificacion: 4.8, num_resenas: 155, fecha_ingreso: new Date("2024-03-20"), especificaciones: { compatibilidad: "13-32 pulgadas", carga_maxima: "9 kg", movimiento: "360 grados", montaje: "Escritorio" }, imagenes: ["ergotron_soporte.jpg"], etiquetas: ["ergotron", "soporte", "monitor", "ergonomico"], vendedor_id: "V001" }
]);

print("✅ Todos los productos insertados exitosamente.");
print("📊 Total productos: " + db.productos.countDocuments());
print("📂 Total categorías: " + db.categorias.countDocuments());
print("🏪 Total vendedores: " + db.vendedores.countDocuments());

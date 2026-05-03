# Tarea 4 – Almacenamiento y Consultas de Datos en Big Data
## Curso: Big Data (202016911) – UNAD

**Caso de uso:** Catálogo de Productos – TechStore Colombia  
**Base de datos:** MongoDB  

---

## Estructura del Repositorio

```
tarea4-bigdata-mongodb/
│
├── insertar_datos.js          # Script de inserción (100+ documentos)
├── consultas_basicas.js       # Operaciones CRUD
├── consultas_filtros.js       # Consultas con filtros y operadores
├── consultas_agregacion.js    # Pipeline de agregación estadística
└── README.md                  # Este archivo
```

---

## Requisitos

- MongoDB Community Server 7.0 o superior
- mongosh (MongoDB Shell)
- Sistema Operativo: Windows 10/11, macOS o Linux

---

## Instrucciones de Instalación

### Windows

1. Descargar MongoDB Community desde: https://www.mongodb.com/try/download/community
2. Ejecutar el instalador `.msi` como Administrador
3. Seleccionar **Complete** y marcar **Install as a Service**
4. Descargar mongosh desde: https://www.mongodb.com/try/download/shell
5. Verificar instalación abriendo CMD y ejecutando: `mongosh`

---

## Ejecución de los Scripts

Abrir `mongosh` y ejecutar en orden:

```bash
# Paso 1 – Cargar datos
mongosh techstore_db insertar_datos.js

# Paso 2 – Consultas CRUD
mongosh techstore_db consultas_basicas.js

# Paso 3 – Filtros y operadores
mongosh techstore_db consultas_filtros.js

# Paso 4 – Agregaciones
mongosh techstore_db consultas_agregacion.js
```

O dentro de la consola interactiva de mongosh:
```javascript
load("insertar_datos.js")
```

---

## Descripción de Colecciones

| Colección    | Descripción                              | Documentos aprox. |
|--------------|------------------------------------------|--------------------|
| `productos`  | Catálogo principal de productos          | 100+               |
| `categorias` | Categorías y subcategorías del catálogo  | 5                  |
| `vendedores` | Información de vendedores/proveedores    | 5                  |

---

## Autor
Curso Big Data – UNAD – 2025

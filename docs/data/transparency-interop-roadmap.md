# 🏛️ ESTADO ABIERTO: INTEROPERABILIDAD Y TRANSPARENCIA 2.0

**Versión:** 1.0  
**Última actualización:** 19 Febrero 2026  
**Escuadrón:** 137 — Tramite-2: Ley de Transparencia 2.0  
**Soluciona:** Hallazgo TR2-01 (Silos de Información Cerrada)

---

## 🎯 El Problema Burocrático
CIVICUM tiene datos valiosos, pero si es un "jardín vallado", no ayuda a la política pública nacional.
El Estado exige estándares de interoperabilidad para considerar los datos válidos.

---

## 🔓 API de Datos Abiertos (Open By Default)

### 1. Estándar JSON-API & GeoJSON
*   Todos los reportes públicos son accesibles vía API REST sin autenticación (Rate-limited).
*   Formato estándar `GeoJSON` para integración directa con software GIS municipal (ArcGIS, QGIS).

### 2. Diccionario de Datos Público
*   Publicación del esquema de la base de datos (tablas públicas) en `datos.gob.cl` o equivalente.
*   Definición clara de cada variable (ej: qué significa exactamente "Gravedad Alta").

### 3. Licencia de Datos (ODbL)
*   Los datos agregados se publican bajo licencia **Open Database License (ODbL)**.
*   Permite uso comercial y académico, siempre que se atribuya y se comparta igual ("Share Alike").

---

## 🧪 Test del "Investigador"
1.  Un periodista quiere saber "Dónde hay más baches en Chile".
2.  Entra a `api.civicum.cl/v1/stats/baches`.
3.  **Meta:** Descarga un CSV o JSON limpio en < 5 segundos sin pedir permiso a nadie.

---
*Documento generado para cerrar Hallazgo TR2-01.*

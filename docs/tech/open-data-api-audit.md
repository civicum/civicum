# Protocolo de Auditoría Open Data API (Squad A4)

**Squad:** 50. Escuadrón A4: Open Data  
**Misión:** Auditoría de APIs públicas.  
**Responsables:** Data Engineer, Data Architect, Transparencia, Arquitecto Software, Licencias Datos.

## 1. API First, UI Second
Todo lo que ve el usuario en la web debe estar disponible vía API JSON.
- **Estándar:** OpenAPI 3.0 (Swagger) documentado automáticamente.
- **Licencia:** CC-BY-SA 4.0 por defecto para los datos de salida.

## 2. Rate Limiting Democrático
- **Gratis:** Acceso generoso para estudiantes y ONGs.
- **Control:** Token obligatorio para evitar abuso, pero obtención automática.

## 3. Formatos de Exportación
No solo JSON para programadores.
- **La Señora Juanita:** Debe poder descargar un Excel (.xlsx) o CSV con los problemas de su barrio.
- **Interoperabilidad:** GeoJSON para mapas.

## 4. Estabilidad (SLA de Datos)
- No cambiamos la estructura del JSON sin aviso de 6 meses (Deprecation Policy).
- Si la API cambia, la versión antigua (`/v1/`) sigue viva hasta el EOL.

*Los datos son del pueblo. Civicum solo los custodia.*

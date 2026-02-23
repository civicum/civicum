# 📍 GOOGLEABLE: SEO LOCAL Y SEMÁNTICO

**Versión:** 1.0  
**Última actualización:** 19 Febrero 2026  
**Escuadrón:** 132 — Distribución-2: SEO Local  
**Soluciona:** Hallazgo D2-01 (Invisibilidad en Buscadores)

---

## 🎯 El Problema de Distribución
Un vecino busca "bache calle 5 de abril maipú" en Google.
Si CIVICUM no aparece, el reporte no existe para el mundo público.

---

## 🕷️ Estrategia de Datos Estructurados (Schema.org)

### 1. Intercepción de Búsquedas Locales
*   Cada reporte público genera una URL permanente: `civicum.cl/reporte/maipu/bache-calle-5-abril`.
*   **Meta Title:** "Bache en Calle 5 de Abril - Reporte #1234 - Maipú | CIVICUM".
*   **H1:** Título descriptivo generado por IA (no "Reporte #1234").

### 2. JSON-LD Rich Snippets
Inyectar bloque `CivicStructure` o `Place` en el head:
```json
{
  "@context": "https://schema.org",
  "@type": "Issue",
  "name": "Bache peligroso en Calle 5 de Abril",
  "location": {
    "@type": "Place",
    "address": "Maipú, Santiago"
  },
  "status": "Open",
  "datePosted": "2026-02-19"
}
```
Esto permite que Google muestre el estado ("Abierto/Cerrado") directamente en los resultados de búsqueda.

### 3. Sitemap Geo-Segmentado
*   Sitemaps dinámicos por comuna: `sitemap-maipu.xml`.
*   Prioridad a reportes con alta actividad o impacto social.

---

## 🧪 Test del "Buscador"
1.  Publicar reporte con título único.
2.  Esperar indexación (forzar con Google Search Console API).
3.  Buscar el título en Google.
4.  **Meta:** Aparecer en Top 3 resultados con Rich Snippet de estado.

---
*Documento generado para cerrar Hallazgo D2-01.*

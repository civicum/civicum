# 🔗 COMPARTIR ES PODER: OPENGRAPH DINÁMICO Y VIRALIDAD

**Versión:** 1.0  
**Última actualización:** 19 Febrero 2026  
**Escuadrón:** 134 — Distribución-4: Shareability  
**Soluciona:** Hallazgo D4-01 (Links Muertos en WhatsApp)

---

## 🎯 El Problema de Distribución
Usuario comparte su causa en el grupo de vecinos de WhatsApp.
Sale un link azul feo: `civicum.cl/p/123`. Nadie hace click.
Perdemos el 80% del tráfico viral potencial.

---

## 🖼️ Generación de Previsualizaciones (Social Cards)

### 1. OpenGraph Dinámico (Vercel OG)
*   Al compartir `civicum.cl/reporte/123`, el servidor genera una imagen PNG al vuelo (`og-image`).
*   **Contenido de la Imagen:**
    *   Foto del reporte (o mapa si no hay foto).
    *   Título grande: "PELIGRO EN MAIPÚ".
    *   Badge de Estado: "⚠️ ABIERTO".
    *   Estadística: "45 vecinos apoyan esto".

### 2. Textos Persuasivos (Copywriting Automatizado)
*   `og:title`: "¡Ayuda a solucionar esto en Maipú!"
*   `og:description`: "Tu vecino reportó un problema crítico. Haz click para apoyar y exigir solución al municipio." (Call to Action claro).

### 3. Deep Linking (App Links / Universal Links)
*   Si el usuario tiene la app instalada, el link abre la app directo en el reporte.
*   Si no, abre la web (PWA) con opción inteligente de "Instalar".

---

## 🧪 Test del "WhatsApp Familiar"
1.  Copiar link de un reporte.
2.  Pegarlo en WhatsApp.
3.  **Meta:** Aparece una "tarjeta" visual atractiva con foto, título y datos en < 2 segundos.

---
*Documento generado para cerrar Hallazgo D4-01.*

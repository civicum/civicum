# 🧐 EL OJO DE LA CONTRALORÍA: CHECKLIST DE PROBIDAD

**Versión:** 1.0  
**Última actualización:** 19 Febrero 2026  
**Escuadrón:** 138 — Tramite-3: Auditoría Contraloría  
**Soluciona:** Hallazgo TR3-01 (Riesgo de Observación por CGR)

---

## 🎯 El Problema Burocrático
Un municipio usa CIVICUM para priorizar gastos. La Contraloría General de la República (CGR) audita: "¿Por qué arregló la calle A y no la B? ¿Fue porque en la A vive el primo del alcalde?".
Si CIVICUM no explica el algoritmo, el municipio recibe una sanción.

---

## 📋 Checklist de Probidad Algorítmica

### 1. Trazabilidad de Decisiones (Audit Log)
*   Cada vez que una autoridad marca un reporte como "Resuelto" o "Prioritario", debe quedar registrado:
    *   **Quién:** (RUT del funcionario).
    *   **Cuándo:** (Timestamp).
    *   **Por qué:** (Campo de texto obligatorio "Justificación Técnica").

### 2. Neutralidad del Ranking
*   El algoritmo de "Problemas Más Votados" es público y determinista.
*   No hay "Botón Mágico" para que el Alcalde suba o baje temas manualmente sin dejar una huella roja gigante en el log (`ADMIN_OVERRIDE`).

### 3. Declaración de Conflictos de Interés
*   Si un funcionario interactúa con un reporte creado por un familiar (detectado por apellidos o dirección), el sistema emite alerta preventiva: *"Posible conflicto de interés. Se sugiere derivar a otro funcionario."*

---

## 🧪 Test del "Sumario Administrativo"
1.  Un funcionario prioriza un reporte de su propia casa.
2.  2 semanas después, el Auditor busca esa acción.
3.  **Meta:** El sistema muestra la alerta "Conflicto Potencial" ignorada y la justificación vacía. Evidencia lista para el sumario.

---
*Documento generado para cerrar Hallazgo TR3-01.*

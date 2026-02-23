# ☣️ LICENCIAS CONTAMINANTES (AMBIGÜEDAD LEGAL)

**Versión:** 1.0
**Squad:** 312 Supply-2
**Problema:** Una librería crítica usa la "JSON License": *"The Software shall be used for Good, not Evil"*.
**Riesgo:** ¿Qué define "Evil"? Si un dictador usa Civicum, ¿violamos la licencia? Ningún equipo legal serio aprueba esto.

---

## 🎯 El Código es Ley, la Licencia también
Las licencias "tiernas" o "chistosas" son pesadillas corporativas.

## 🛡️ SANITIZACIÓN LEGAL

### 1. Detección de "Weird Licenses"
*   El scanner de licencias (Squad 92) se actualiza para flaggear no solo Copyleft, sino también:
    *   **JSON License** (Subjetiva).
    *   **Beerware** (Informal).
    *   **WTFPL** (Poco profesional).
    *   Cualquier licencia que no sea OSI Approved estándar.

### 2. Política de Reemplazo o Fork
*   Si encontramos una dependencia con JSON License (ej: versiones antiguas de JSLint):
    *   **Opción A:** Buscar alternativa moderna con MIT/Apache.
    *   **Opción B:** Si es insustituible, hacer un Fork, reescribir las partes críticas y licenciarlo nosotros (Clean Room Design).

### 3. "No-Evil" Clause Ban
*   Prohibición explícita de usar software con cláusulas morales.
*   El software es una herramienta. La ética de su uso es responsabilidad del usuario, no del autor de la librería. Aceptar estas cláusulas nos expone a demandas subjetivas.

---
*La ambigüedad legal es un bug en el contrato.*

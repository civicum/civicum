# 🚫 BOTONES DESHABILITADOS (LA ILUSIÓN DE SEGURIDAD)

**Versión:** 1.0
**Squad:** 277 Placebo-2
**Escenario:** El botón "Borrar" está gris porque el usuario no es admin. Un hacker abre la consola del navegador, quita el atributo `disabled`, y hace clic.

---

## 🎯 El Frontend no es Seguridad
Deshabilitar un botón en HTML es una sugerencia visual, no un control de acceso.

## 🛡️ VALIDACIÓN PROFUNDA

### 1. "Disabled" es solo UX
*   El estado gris del botón es SOLO para guiar al usuario honesto.
*   **Regla:** Jamás confiar en que un request no llegará porque el botón estaba apagado.

### 2. Backend Agnóstico de UI
*   El endpoint API (`POST /delete-user`) debe preguntar **siempre**:
    *   *"¿Quién eres?"* (Auth).
    *   *"¿Tienes permiso explícito para borrar ESTE recurso?"* (RBAC/ABAC).
*   Si la respuesta es no, retornar `403 Forbidden`, no `500 Error`.

### 3. Test de "Force Click"
*   En QA Automatizado (Cypress/Playwright), incluir tests que **fuerzan** el clic en elementos deshabilitados (rompiendo el DOM) para verificar que el backend rechaza la acción.

---
*Si se puede hacer con `curl`, se puede hackear.*

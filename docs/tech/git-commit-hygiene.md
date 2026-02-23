# Higiene de Commits en Git (Squad 195)

**Auditoría:** Roles 14 (Arquitecto), 69 (Ops), 15 (Frontend), 16 (Backend), 19 (QA Auto)

## 1. El Riesgo de la Historia Críptica
El historial de Git (`git log`) no es un bloc de notas temporal; es el documento legal y técnico más importante del proyecto. Un abogado, otro desarrollador o un auditor ciudadano debe ser capaz de entender el ciclo de vida de la aplicación.
Commits con mensajes como `fix`, `asdf`, `wip`, o `update css` destruyen la trazabilidad en un proyecto de Infraestructura Cívica.

## 2. Prohibición Formal (Commitlint + Husky)
Se establece una barrera técnica usando *Git Hooks*: es físicamente imposible subir un commit a GitHub si no cumple con la especificación `Conventional Commits`.

### Reglas Estrictas:
El mensaje de commit debe seguir la estructura: `<tipo>(<alcance>): <descripción corta y en imperativo>`

**1. Tipos Permitidos:**
*   `feat`: Nueva funcionalidad cívica.
*   `fix`: Parche de seguridad o error lógico.
*   `docs`: Cambios en la documentación o walktroughs.
*   `refactor`: Cambio de código que no arregla un bug ni añade un feature, pero baja la deuda técnica.
*   `perf`: Cambio de código que mejora la ejecución en redes bajas (Sq 193).
*   `chore`: Mantenimiento de herramientas o dependencias.

**2. Descripciones Utilitarias:**
Se prohíben descripciones ambiguas. "Fix bug" es un error.
*   *Correcto:* `fix(voting): anula doble voto por race condition en btn de submit`
*   *Correcto:* `feat(auth): incorpora validación PII contra registro civil`

El historial de CIVICUM debe leerse como un manifiesto profesional de estado, inmutable y cristalino.

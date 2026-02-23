# 📜 ESTÁNDAR DE GIT (HISTORIA LIMPIA)

**Versión:** 1.0
**Squad:** 195 Git
**Misión:** Que `git log` se lea como un libro de historia, no como los desvaríos de un loco.

---

## 🎯 El Problema
Commit messages:
*   "fix"
*   "listo"
*   "ahora si"
*   "cambios"

## 🛡️ CONVENTIONAL COMMITS

### 1. Formato Obligatorio
```
<tipo>(<alcance>): <descripción breve>

[Cuerpo opcional: Por qué se hizo el cambio]

[Footer: Closes #123]
```

### 2. Tipos Permitidos
*   `feat`: Nueva funcionalidad.
*   `fix`: Arreglo de bug.
*   `docs`: Cambios en documentación.
*   `style`: Formato (espacios, comas) sin cambio de lógica.
*   `refactor`: Cambio de código que no arregla bugs ni añade features.
*   `perf`: Mejora de rendimiento.
*   `test`: Añadir o corregir tests.
*   `chore`: Tareas de build, dependencias, herramientas.

### 3. Reglas de Oro
*   **Imperativo:** "Add feature", no "Added feature".
*   **Atómico:** Un commit = Una idea lógica. No mezclar un fix de CSS con un refactor de Base de Datos.
*   **No "WIP":** Nunca commitear código roto en la rama `main` o `develop`.

---
*Tu 'yo' del futuro te agradecerá por explicar qué demonios hiciste hoy.*

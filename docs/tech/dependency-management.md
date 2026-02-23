# 🍃 PROTOCOLO DE DEPENDENCIAS (TREE SHAKING)

**Versión:** 1.0
**Squad:** 193 Dependencias
**Misión:** Reducir la obesidad mórbida del `node_modules`.

---

## 🎯 El Problema
Importamos `lodash` completo (2MB) solo para usar `_.debounce`. O mantenemos librerías abandonadas hace 5 años (riesgo de seguridad).

## 🛡️ DIETA DE DEPENDENCIAS

### 1. Tree Shaking Obligatorio
*   Solo usar librerías que soporten ES Modules (ESM) para que el bundler (Vite/Webpack) pueda eliminar el código muerto.
*   **Prohibido:** `import * as _ from 'lodash'`.
*   **Permitido:** `import debounce from 'lodash/debounce'`.

### 2. "Bundle Phobia" Check
*   Antes de aprobar un PR que agrega una librería, el CI ejecuta un check de peso.
*   Si la librería pesa > 50KB gzipped, requiere justificación de Arquitectura. "¿Podemos escribir esa función nosotros en 10 líneas?".

### 3. Vencimiento de Dependencias
*   Script mensual (`npm audit` + check manual via `depcheck`):
    *   Detecta dependencias no usadas en el código (Ghost Dependencies).
    *   Detecta versiones Deprecadas.
    *   **Acción:** 7 días para actualizar o eliminar, si no, se rompe el build.

---
*El mejor código es el que no tienes que mantener.*

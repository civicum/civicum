# 🍝 POLÍTICA ANTI-ESPAGUETI (COMPLEJIDAD CICLOMÁTICA)

**Versión:** 1.0
**Squad:** 191 Espagueti
**Misión:** Código que no se entiende, se reescribe.

---

## 🎯 El Problema
Funciones de 500 líneas con 20 `if/else` anidados. Nadie se atreve a tocarlas. Se convierten en "Legacy" el día 1.

## 🛡️ ESTÁNDARES DE CALIDAD DE CÓDIGO

### 1. Métricas Duras (Linter Enforcement)
*   **Complejidad Ciclomática (McCabe):** Máximo **10** por función.
    *   Si es > 10 -> Refactorizar en sub-funciones.
*   **Profundidad de Anidación:** Máximo **3** niveles.
    *   Usa "Early Return" (`if (error) return;`) en vez de `if (ok) { ... }`.
*   **Longitud de Función:** Máximo **50 líneas**.

### 2. Regla del "Boy Scout"
*   *“Deja el campamento más limpio de lo que lo encontraste”.*
*   Si tocas un archivo para un fix pequeño, estás obligado a arreglar al menos un "Code Smell" cercano (ej: renombrar una variable `x` a `userIndex`).

### 3. Code Review: "El Test del Grito"
*   La calidad del código se mide en *WTFs/minuto* durante la revisión.
*   Si el reviewer tiene que preguntar "¿Qué hace esto?" más de 3 veces, el PR se rechaza automáticamente.

---
*Escribe código como si el próximo mantenedor fuera un psicópata que sabe dónde vives.*

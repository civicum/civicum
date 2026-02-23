# 🎭 LA BARRA DE PROGRESO FALSA (ÉTICA DE LA ESPERA)

**Versión:** 1.0
**Squad:** 276 Placebo-1
**Dilema:** El reporte se sube en 200ms. Si mostramos "Listo" tan rápido, el usuario cree que no funcionó.
**Solución:** Hacemos que la barra tarde 2 segundos artificialmente para parecer "robustos".

---

## 🎯 El Valor del "Throbber"
La percepción de esfuerzo del sistema aumenta la confianza en el resultado. Pero hay una línea delgada entre "Diseño Emocional" y "Mentira".

## 🛡️ PRINCIPIOS DE HONESTIDAD VISUAL

### 1. La Regla de los 2 Segundos (Benevolent Delay)
*   **Permitido:** Retrasar artificialmente una confirmación compleja (ej: "Analizando Blockchain") hasta 1.5s - 2.0s.
*   **Prohibido:** Retrasar acciones simples (Guardar, Borrar) o superar los 3 segundos solo por teatro.

### 2. Feedback Realista
*   No usar barras de progreso de "Zeno's Paradox" (que avanzan rápido al 99% y se quedan pegadas infinitamente).
*   Si la tarea es indeterminada, usar spinner circular, no barra porcentual mentirosa.

### 3. Explicación de la Espera
*   Si vamos a demorar artificialmente, usar el tiempo para educar:
    *   *"Encriptando tus datos..."* (Verdad técnica).
    *   *"Validando firma digital..."* (Verdad técnica).
    *   **Prohibido:** *"La IA está pensando..."* (Antropomorfización falsa).

---
*La espera debe dar confianza, no ansiedad.*

# 🔄 PARADOJA DE ARROW (CONSISTENCIA ELECTORAL)

**Versión:** 1.0
**Squad:** 331 Arrow-1
**Problema:** En un ranking de 3 opciones (A, B, C):
*   El 40% prefiere A > B > C
*   El 35% prefiere B > C > A
*   El 25% prefiere C > A > B
*   Resultado: A gana a B, B gana a C, ¡pero C gana a A! (Ciclo). No hay ganador lógico.

---

## 🎯 La Ilusión de la Voluntad General
Kenneth Arrow demostró que ningún sistema de votación por ranking es perfecto. Pero podemos evitar que sea caótico.

## 🛡️ ALGORITMOS ANTI-CICLO

### 1. Método Schulze (Batalla de Pares)
*   En lugar de "Mayoría Simple" (el que tiene más votos gana), usamos el **Método Schulze**.
*   Calcula el ganador Condorcet (el candidato que ganaría a todos los demás en un 1vs1).
*   Si hay un ciclo, Schulze encuentra el camino más fuerte para romper el empate matemáticamente.

### 2. Detección de Paradojas
*   El sistema alerta si el resultado es "inestable" (ej: Ganó la opción A, pero si cambiaban 2 votos ganaba la C).
*   Se muestra una etiqueta: **"Victoria Débil"** (Low Consensus Strength).

### 3. Segunda Vuelta Instantánea (IRV)
*   Para decisiones críticas, si nadie obtiene >50% en primera preferencia, se eliminan las opciones con menos votos y se redistribuyen sus segundas preferencias automáticamente.
*   Garantiza que el ganador final tenga aceptación mayoritaria real.

---
*Las matemáticas no mienten, pero los votos pueden confundir.*

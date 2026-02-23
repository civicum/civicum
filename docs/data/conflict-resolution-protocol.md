# ⚔️ VALIDACIÓN CRUZADA (CONFLICTO DE FUENTES)

**Versión:** 1.0
**Squad:** 240 Crawler-5
**Dilema:** El Servel dice que el Alcalde es Juan. La Municiplidad dice que es Pedro. ¿A quién le creemos?

---

## 🎯 La Verdad Inconsistente
El estado no es monolítico. Sus bases de datos a veces no conversan.

## 🛡️ JERARQUÍA DE CREDIBILIDAD

### 1. El Triángulo de la Verdad
*   Para cada dato crítico (Ej: Padrón Electoral), consultamos al menos 3 fuentes independientes si es posible.
*   **Consenso:** Si 2 de 3 coinciden, esa es la verdad mostrada.

### 2. Ranking de Autoridad (Source Rank)
*   En caso de empate, definimos un peso por fuente:
    *   **Diario Oficial:** 100 puntos (Verdad jurídica).
    *   **Contraloría:** 90 puntos.
    *   **Web Municipal:** 50 puntos (Suele estar desactualizada).
    *   **Prensa:** 20 puntos.

### 3. Etiqueta de "Dato en Disputa"
*   Si la contradicción es crítica e irresoluble automáticamente:
    *   Civicum muestra **ambos valores** con una advertencia:
    *   *⚠️ "Conflicto de Datos: Servel indica X, Municipio indica Y. Estamos verificando."*

---
*Ante la duda, transparencia de la duda.*

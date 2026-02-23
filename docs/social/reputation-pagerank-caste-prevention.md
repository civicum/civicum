# 🌟 RANKING DE REPUTACIÓN (CIVIC PAGERANK)

**Versión:** 1.0
**Squad:** 333 Arrow-3
**Problema:** ¿Quién es más creíble? ¿El que grita más fuerte o el que siempre ayuda? Necesitamos medir reputación sin crear una aristocracia intocable.

---

## 🎯 Meritocracia Líquida
La reputación fluye, se gana y se pierde. No es un título nobiliario.

## 🛡️ ALGORITMO DE CONFIANZA

### 1. PageRank Recursivo
*   Tu reputación aumenta si recibes "Apoyos" (Endorsements) de otros usuarios.
*   Pero vale más el apoyo de alguien que *ya* tiene alta reputación.
*   *Efecto:* Un bot granja de likes entre ellos mismos tiene reputación cercana a 0, porque nadie "real" los apoya.

### 2. Factor de Decaimiento (Time Decay)
*   La gloria pasada no garantiza crédito futuro.
*   La reputación tiene una **Vida Media de 6 meses**.
*   Si dejas de aportar, tu ranking baja suavemente hasta el promedio. Evita que los "fundadores" dominen para siempre.

### 3. Prevención de Castas (The Anti-Elite Damper)
*   La influencia de un usuario tiene un techo logarítmico.
*   Aunque tengas 1 millón de puntos de reputación, tu voto o reporte pesa máximo 2x o 3x el de un novato. Nunca 1000x.
*   *Civicum es democrático, no tecnocrático.*

---
*La confianza se construye a pie y se pierde a caballo.*

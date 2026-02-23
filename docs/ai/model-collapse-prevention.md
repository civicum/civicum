# 📉 IA SALUDABLE: PREVENCIÓN DE MODEL COLLAPSE

**Versión:** 1.0  
**Última actualización:** 19 Febrero 2026  
**Escuadrón:** 122 — Data-Sci-2: Model Collapse  
**Soluciona:** Hallazgo DS2-01 (Degradación por Auto-Entrenamiento)

---

## 🎯 El Problema de Datos
OpenClaw (nuestra IA) genera resúmenes. Luego usamos esos resúmenes para re-entrenar la v2.
Resultado: La IA empieza a olvidar la realidad y amplifica sus propias alucinaciones ("Inbreeding" digital). La calidad colapsa.

---

## 🧬 Estrategia de Higiene de Datos

### 1. Watermarking de Datos Sintéticos
*   Todo texto generado por Civia/OpenClaw se guarda en la DB con metadata `is_synthetic = true`.
*   **Regla de Oro:** El set de entrenamiento NUNCA debe contener datos con `is_synthetic = true`.

### 2. Inyección de Realidad (Fresh Data)
*   Para cada ciclo de Fine-Tuning, se debe inyectar un 20% de "Datos Frescos Humanos" (leyes nuevas, noticias verificadas, papers académicos).
*   Si no hay suficientes datos humanos nuevos, **NO SE RE-ENTRENA**. Mejor un modelo viejo estable que uno nuevo demente.

### 3. Métricas de Perplejidad (Perplexity Monitoring)
*   Evaluar el modelo contra un set de validación humano *fijo*.
*   Si la perplejidad sube (o la diversidad de vocabulario baja), es síntoma de colapso. Rollback inmediato al checkpoint anterior.

---

## 🧪 Test del "Eco"
1.  Entrenar un modelo pequeño solo con outputs del modelo anterior por 5 generaciones.
2.  Evaluar calidad.
3.  **Éxito:** Demostrar que la calidad se degrada, validando la necesidad del filtro `is_synthetic`.

---
*Documento generado para cerrar Hallazgo DS2-01.*

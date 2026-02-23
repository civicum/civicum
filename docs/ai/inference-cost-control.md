# Protocolo de Costos de Inferencia y Economía de Tokens (Squad Turing-D)

**Squad:** 79. Escuadrón Turing-D: Costos de Inferencia  
**Misión:** ¿Podemos pagar la IA si 1 millón de personas preguntan a la vez?  
**Responsables:** Finanzas, Arquitecto, AI PM, Backend.

## 1. Caching Semántico (Semantic Caching)
El 40% de las preguntas ciudadanas son idénticas ("¿Cuándo pasa la basura?", "¿Dónde pago el permiso?").
- **Estrategia:** Usamos Vector DB (pgvector) para buscar preguntas similares ya respondidas. Si la similitud (cosine similarity) es >0.95, devolvemos la respuesta cacheada (Costo = $0).

## 2. Cascada de Modelos (Model Cascading)
No usamos GPT-4 para saludar.
- **Router:** Un modelo pequeño (BERT o GPT-3.5-Turbo) clasifica la complejidad.
    - Simple ("Hola"): Modelo local/barato.
    - Complejo ("Analiza esta ley"): Modelo SOTA (GPT-4o / Claude 3.5).

## 3. Presupuesto Hard-Cap
- **Límite Diario:** Si el gasto de API supera los $500 USD/día en la cuenta gratuita, el sistema degrada suavemente a "Modo Búsqueda Clásica" (sin IA generativa) hasta el día siguiente. Nunca quebramos la fundación por éxito excesivo.

*La inteligencia es infinita, el presupuesto no.*

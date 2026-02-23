# 💨 HUELLA DE CARBONO IA (GREEN AI)

**Versión:** 1.0
**Squad:** 306 Greta-1
**Problema:** Una consulta a GPT-4 consume 25x más energía que una búsqueda en Google. Si 100.000 vecinos preguntan tonteras a la IA, calentamos el planeta.

---

## 🎯 Inteligencia, no Desperdicio
Usar LLMs gigantes para tareas triviales es irresponsable ambientalmente.

## 🛡️ ESTRATEGIA DE "ECO-MODELS"

### 1. Modelo Correcto para la Tarea Correcta (Routing)
*   **Tier 1 (Bajo Carbono):** Regex / NLP Clásico. Para validaciones simples (ej: "¿Está insultando?"). Costo energético: ~0.
*   **Tier 2 (Medio Carbono):** Modelo Destilado (ej: 3B params cuantizado) corriendo en CPU local o Edge. Para autocompletado y clasificación.
*   **Tier 3 (Alto Carbono):** LLM Fundacional (ej: GPT-4). Solo se invoca para razonamiento complejo ("Resume esta ley").

### 2. Caching Semántico Agresivo
*   Si el vecino A pregunta "¿Cómo saco hora de cédula?" y el vecino B pregunta lo mismo 10 segundos después:
    *   No llamamos a la IA dos veces.
    *   Respondemos desde cache vectorial (Redis VSS).
    *   **Meta:** 40% de "Cache Hit Ratio" en consultas ciudadanas.

### 3. Presupuesto de Tokens de CO2
*   Monitor de emisiones en tiempo real (API Carbon Aware SDK).
*   Si la intensidad de carbono de la red eléctrica de la región de inferencia es alta (hora punta carbón), posponer tareas batch no urgentes de IA para la noche (cuando hay viento/agua).

---
*No quememos carbón para generar tokens.*

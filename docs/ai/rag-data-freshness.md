# Protocolo de Frescura de Datos RAG (Squad Data-Sci-4)

**Squad:** 124. Escuadrón Data-Sci-4: Auditoría de RAG (Retrieval)  
**Misión:** ¿La IA recupera el documento vigente o la ley derogada el año pasado?  
**Responsables:** RAG Engineer, Abogado Público, Calidad Datos.

## 1. El Metadata "Vigencia"
Ningún documento entra al Vector Database sin metadatos temporales estrictos.
- **Campo Obligatorio:** `valid_from`, `valid_until`, `status` (VIGENTE, DEROGADO, EN_TRAMITE).
- **Filtro Hard-Core:** El retriever SIEMPRE aplica `filter: { status: "VIGENTE" }` por defecto.

## 2. Ponderación por Recencia (Recency Weighting)
Al calcular la similitud vectorial (Cosine Similarity):
- Se aplica un "Boost" matemático a los documentos publicados en los últimos 6 meses.
- Se penaliza a los documentos de hace >5 años si existe una versión más nueva con título similar.

## 3. Purga de Leyes Muertas
- Un proceso cron semanal ("The Grim Reaper") escanea la Biblioteca del Congreso Nacional (BCN). Si una ley cambia de estado a "Derogada", el sistema elimina o archiva sus vectores en Civicum inmediatamente.

*Una IA que cita leyes muertas es un peligro público.*

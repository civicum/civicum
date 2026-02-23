# Motor RAG de Ordenanzas Municipales (Squad 220)

**Misión:** La IA debe conocer las ordenanzas de aseo de 346 comunas. ¿Es viable?

## 1. El Riesgo de la Alucinación Centralista
Las Leyes de la República aplican en todo Chile, pero las Ordenanzas son dictadas por cada uno de los 346 municipios. Lo que es legal construir en Las Condes no lo es en Constitución.
Si un usuario pregunto a Civia: *"¿A qué hora puedo meter ruido martillando?"*, y el sistema responde basándose en la ordenanza global o inventa una regla, el ciudadano se arriesga a una multa policial generada por la negligencia algorítmica de CIVICUM.

## 2. Estrategia de RAG Federado (Spatial Retrieval-Augmented Generation)
Civia jamás responde de memoria.

1.  **Ingesta Vectorial Indexada por Comuna:** La tabla de Embeddings en PostgreSQL/Pinecone utiliza metadatos espaciales. Cada bloque de texto ingerido (PDF de la Ordenanza Municipal de Aseo y Ornato) lleva asociado el tag estricto `{ comuna_id: CL-13114 }`.
2.  **Context-Injection Localizado:** Cuando el ciudadano de Las Condes pregunta a Civia (o cuando un moderador evalúa un caso), el backend inyecta silenciosamente el contexto geográfico a la Query.
    `WHERE metadata->>'comuna_id' = user_location`
3.  **Hard-Fallback de Ignorancia:** Si la base de datos de CIVICUM no tiene el texto escaneado de la ordenanza de esa pequeña comuna rural en particular, Civia tiene prohibido inferir la respuesta y activa una directiva del Sistema:
    > ⚠️ *"Lo siento, aún no hemos digitalizado y verificado la ordenanza de Ruidos Molestos para la comuna de Tortel. Por favor consulta directamente en transparencia de tu municipio."*

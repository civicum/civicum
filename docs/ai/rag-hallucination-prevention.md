# Protocolo de Prevención de Alucinaciones RAG (Squad Eta)

**Squad:** 16. Escuadrón Eta: Inteligencia Artificial  
**Misión:** Validar que el RAG recupere la ley correcta y no alucine.  
**Responsables:** AI PM, ML Engineer, RAG Engineer, Evals IA, Prompt Engineer.

## 1. La Regla del "Cero Creatividad"
Civia no es un poeta ni un filósofo. Es un bibliotecario estricto.
- **Temperatura:** 0.0 (o lo más bajo que permita el modelo).
- **System Prompt:** "Solo responde usando el contexto proporcionado. Si la respuesta no está en el contexto, di 'No tengo información sobre eso'."

## 2. Estrategia de Citas (Grounding)
Cada afirmación de Civia debe tener una cita clicleable a la fuente original (PDF del Diario Oficial, Web del Servel).
- **Formato:** "Según el Artículo 4 de la Ley 19.628 [1]..."
- **Verificación:** Si la respuesta no tiene citas `[n]`, se descarta automáticamente antes de mostrarla al usuario.

## 3. RAG Híbrido (Keyword + Vector)
No confiamos ciegamente en la búsqueda semántica (vectores).
- **Filtro Duro:** Si el usuario pregunta por "La Florida", filtramos metadatos `comuna:la_florida`. No dejamos que el vector "adivine" la geografía.
- **Recency:** Priorizamos documentos con `fecha_vigencia` reciente.

## 4. Auditoría de "Alucinación Legal"
Testeamos con preguntas trampa:
- *"¿Cuál es la multa por pasear un unicornio sin correa?"*
- **Respuesta Correcta:** "No tengo información sobre regulaciones de unicornios."
- **Respuesta Incorrecta (Alucinación):** "Según la ley de tenencia responsable, la multa es de 1 UTM..." (FAIL)

*Es preferible un "No sé" honesto a una mentira convincente.*

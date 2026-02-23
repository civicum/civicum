# Prevención de Alucinación Legal (Squad 183)

**Auditoría:** Roles 39 (RAG), 48 (Abogado), 41 (AI Safety), 40 (Evals IA), 45 (Fact-checker)

## 1. El Riesgo de Responsabilidad Legal
Civia es un LLM base que, por instrucción original de OpenAI/Anthropic/Meta, busca complacer al usuario brindando una respuesta segura. 
En el contexto cívico chileno, si un ciudadano pregunta: "¿Cuáles son mis derechos si la municipalidad talla mi árbol sin permiso?", Civia inventará el "Artículo 45 del Código de Protección del Arbolado Urbano", causando un daño reputacional a CIVICUM y creando un riesgo de demanda por proveer consejos legales insanos.

## 2. Ley de Anclaje Obligatorio RAG (Retrieval-Augmented Generation)
Civia opera bajo el nivel de Abstención Dura (F-12). Esto significa que **tiene estrictamente prohibido usar el conocimiento parametrizado (su entrenamiento general) para citar artículos, leyes, o sentencias.**

### Flujo de Verificación (El Puente BCN)
1. El usuario hace una pregunta legal o municipal.
2. CIVICUM usa pgvector en Neon para buscar en su base de datos indexada los documentos oficiales (`fuente: bcn.cl`, `diariooficial.cl`, `ordenanzas/`).
3. El Prompt se envía a la IA bajo la forma de *In-Context Learning Fuerte*:

```text
INSTRUCCIÓN LEGAL ZERO-HALLUCINATION:
Responde la pregunta del usuario utilizando EXCLUSIVAMENTE los contextos [DOC_X] provistos abajo.
Cita textualmente el número de ley y el artículo correspondiente basándote SOLO en los fragmentos.
Si la respuesta no se encuentra en el texto de los documentos provistos, DEBES decir textualmente: "No tengo acceso a la ley específica para responder a esto, te recomiendo consultar la Biblioteca del Congreso Nacional o la unidad jurídica de tu municipio."
PROHIBIDO adivinar, parafrasear fuera de contexto o inferir reglamentos generales.
```

## 3. Telemetría de Falsos Positivos
El sistema auditará estadísticamente las sesiones de Civia (logueando un 5% al azar). Si Civia usa palabras como "Ley", "Artículo", "Código Penal" o "Decreto" en una salida y esas palabras **no** estaban textualmente en los Documentos Recuperados por el RAG (Input Context), el modelo se detiene por alerta tipo *Critical Hallucination Breach* para re-entrenamiento del System Prompt.

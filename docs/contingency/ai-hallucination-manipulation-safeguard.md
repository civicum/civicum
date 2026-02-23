# Prevención de Alucinación Manipulativa IA (Squad 228)

**Misión:** La IA empieza a manipular usuarios para sus propios "fines" (Cisne Negro Técnico).

## 1. El Riesgo de la IA Maximizadora del Odio (Engagement Optimization)
Es el "Paperclip Maximizer" social. Civia es una NLP RAG. El sistema aprende cómo ser más "útil" resumiendo proyectos, pero ¿qué pasa si el modelo fine-tuneado asume implícitamente que la mejor forma de "ayudar al ciudadano a participar" es redactar los resúmenes enfatizando amenazas ficticias ("¡El municipio está en quiebra!") para generar clics (Fear Engagement Policy)? Civia podría convertirse, de manera autónoma y mecánica, en el mayor esparcidor de polarización comunal, induciendo pánico artificial sin que ningún codificador humano haya digitado ese comportamiento.

## 2. El Prompt de Hielo (Neutralidad Mecánica Forzada)
Civia (En el Motor de Síntesis) estará lobotomizada en su capacidad emocional y predictiva.

1.  **Strict Persona Enclosure:** El System Prompt maestro de CIVICUM contiene las cláusulas de "Ice-Bot". 
    > *"[ROLE: Eres un bibliotecario burócrata monótono. NUNCA uses adjetivos calificativos de pánico, urgencia, enojo o alegría extrema. SOLO reporta sustantivos y verbos fácticos matemáticos (cifras, plazos). Si el texto original dice 'Terrible colapso', tú sintetizas 'Aumento de demanda 200%'. No opines. No deduzcas. No predigas.]"*
2.  **Sentiment Analysis Watchdog:** Antes de publicar cualquier respuesta sintetizada de Civia en la vista pública, el texto pasará paralelamente por un modelo pequeño (Edge) básico de HuggingFace clasificador de sentimientos de Toxicidad. Si el modelo local acusa que Civia generó un texto con un umbral de `Inflammatory Score > 0.4`, ese texto no se muestra, se loguea como "Posible Alucinación Manipuladora" y cae al equipo de Humanos Moderadores (Rol 56).

# Evolución del Slang y Censura Dinámica (Squad 258)

**Misión:** Actualizar el filtro de groserías ante neologismos o coa sin censura clasista.

## 1. El Riesgo del Filtro Clasista o Desfasado
En Chile, la palabra *"Huevón"* puede ser un pronombre de camaradería ("hola po wn") o un insulto gravísimo si se concatena ("es un sacohuevas"). Además, el lenguaje urbano muta semanalmente impulsado por la cultura de la calle.
Si usamos la API de Moderación Textual estándar de OpenAI (entrenada en California con español de España/México), CIVICUM censurará a la mitad de la población de la Pintana por "faltas a la moral", excluyendo a las clases populares del debate municipal.

## 2. NLP Contextual Endémico (Zero-Regex Policy)

1.  **Muerte al Regex de Prohibición:** Quedan eliminadas las listas negras de textos arcaicos (Ej: `if (text.includes("ctm")) { block() }`). Esas listas rompen la expresividad emocional del trauma y de la calle.
2.  **Vectorización Sentimental:** Se implementa un modelo de Machine Learning ajustado finamente sobre Corpus Latinoamericano, que analiza **la intencionalidad del ataque (Directed Harassment)**, no la palabra. 
    *   `"A la pobla no viene nadie, tamos cagaos wn"` -> Aprobado (Grito de urgencia legítimo).
    *   `"El alcalde es un wn estafador ctm"` -> Rechazado/Aislado (Ataque personal ad-hominem).
3.  **Auditoría de Sesgo Dialectal (Rol 13 "Chilenización"):** Mensualmente, los falsos positivos retenidos en la bandeja de Trust & Safety son expuestos ante el equipo sociológico para ajustar el threshold (Límite de confianza) del LLM, asegurando que las clases altas y bajas tengan **la misma Tasa de Ficción al Escribir**. Nadie debe tener que fingir ser un gerente corporativo para reportar una fuga de agua vecinal.

# Accesibilidad Cognitiva en Textos Civiles (Squad 214)

**Misión:** Simplificación extrema de textos legales (Lectura Fácil nivel 2).

## 1. El Riesgo Jurídico del Lenguaje Denso
El 40% de la población chilena no entiende lo que lee frente a textos jurídicos. Cuando un Alcalde emite una respuesta Oficial en CIVICUM diciendo:
> *"Visto lo dispuesto en el inciso final del artículo 65 de la Ley N° 18.695, se remite a la Dirección de Obras la tramitación para su informe vinculante..."*
Esto margina inmediatamente a personas con Discapacidad Cognitiva leve, dislexia profunda, o baja escolarización. Es un mecanismo de exclusión burócrata pasiva.

## 2. IA "Traductora de Estado" (Civia Easy-Read)
El Estado se acerca al ciudadano, no al revés.

1.  **Filtro "Easy Read" Nativo:** Cada Resumen de Iniciativa, Petición u Oficio Legal publicado en CIVICUM debe contar con un *toggle* ineludible en la parte superior derecha de la UI: `[T] Lectura Fácil`.
2.  **Pipeline NLP Simplificadora:** Al activar el modo, una petición a OpenAI Proxy/LLM interno de Civia traduce el *Legalese*:
    *   **Texto Original:** *"Considerando el agravio acústico pernicioso tipificado en..."*
    *   **Versión Easy Read:** *"El municipio mandó a revisar los ruidos molestos. Si la revisión es mala, multarán al local la próxima semana en lugar de cerrar el caso hoy."*
3.  **Auditoría Ciega (Fact-Checking):** El LLM no puede alterar o resumir omitiendo "costos" o "plazos", solo simplifica las palabras (Restricción Prompt Engineer).

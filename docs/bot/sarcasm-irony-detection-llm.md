# Sarcasmo, Ironía y Evals IA (Squad 260)

**Misión:** "¡Qué buena gestión alcalde!" (Con foto de basural). ¿Cómo la IA falla?

## 1. El Riesgo del Dashboard Positivo Falso (Toxic Positivity)
La municipalidad abre el "Tablero de Sentimiento Vecinal" de CIVICUM. Civia les dice que el 80% de los comentarios de hoy sobre "Aseo y Ornato" son *Positivos*. 
El Alcalde sale en prensa presumiendo el número. Sin embargo, el 100% de esos posteos decían cosas como: 
* *"Maravillosa pista de motocross nos dejó el alcalde en la calle central, gracias por tantos cráteres 👏"*
Si la IA fracasa en detectar el cinismo o el sarcasmo endémico chileno, el sistema de métricas de CIVICUM es un fraude por manipulación en la lectura lingüística; sirve como propaganda de campaña y no como denuncia.

## 2. Detección Cognitiva Multimodal
El modelo RAG no puede leer solo texto. Necesita ojos sociológicos.

1.  **Contraste Texto vs Imagen (Clip/ViT):** Si la IA de visión detecta basura estructural (neumáticos, tierra suelta), y el Score de sentimiento del Texto asociado a esa foto da `+0.9 Positivo` (Alegría), se interrumpe y detona un Evento Sarcástico (Irony Flag: `True`). 
2.  **Evaluación de Verbos de Gestión:** Palabras como *"Maravilloso, Genial, Gracias, Increíble, Arreglo"*, atadas a categorías de servicios (Aseo, Agua, Luz, Pavimentación) se pre-procesan con un malus (`-0.5`). Civia es configurada por Sistema para ser pesimista: **Ante la duda frente a un elogio, se califica orgánicamente como reclamo pasivo-agresivo**.  
3.  **Prohibición Absoluta del Score Positivo Mudo (Dashboard Ban):** CIVICUM *no* calculará jamás métricas de "Aprobación o Alegría" de Alcaldes en su backend estadístico. El municipio solo verá barras rojas ("Quejas Irresueltas") o grises ("Quejas Resueltas"). La plata pública no paga encuestas de satisfacción, paga soluciones de asfalto. El tablero es de Riesgo, no de Vanidad.

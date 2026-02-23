# 🎭 SARCASMO E IRONÍA (LA IA NO ENTIENDE CHISTES)

**Versión:** 1.0
**Squad:** 260 Semántica-5
**Problema:** "¡Qué lindo el basural!" -> Sentiment Analysis: Positivo (99%). Realidad: Negativo (100%).

---

## 🎯 La Mentira Literal
Los ciudadanos usan la ironía como arma de crítica. Si la IA no la entiende, nuestros reportes de satisfacción son basura.

## 🛡️ DETECCIÓN DE DOBLE SENTIDO

### 1. Incongruencia Texto-Imagen
*   Si el texto dice "Hermoso paisaje" pero la visión artificial detecta [Basura, Fuego, Ratones], se marca automáticamente como **Sarcasmo**.
*   Prioridad: Crítica severa.

### 2. Patrones de "Risa Falsa"
*   Detectamos marcadores textuales de ironía chilena:
    *   Uso excesivo de signos de exclamación con palabras negativas ("¡¡Maravilloso el taco!!").
    *   "Súper bien..." (al inicio de frase negativa).
    *   Emojis contradictorios (🔥🙃).

### 3. Etiquetado Humano (Feedback Loop)
*   Cuando la IA tiene duda (Confidence < 70%), pregunta a un moderador humano o a la comunidad ("Trust Crowd"):
    *   *"¿Este comentario es positivo o sarcástico?"*
*   Este feedback re-entrena al modelo continuamente.

---
*Entender el chiste es parte de entender el problema.*

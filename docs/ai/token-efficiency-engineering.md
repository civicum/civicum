# Protocolo de Ingeniería de Eficiencia de Tokens (Squad Data-Sci-5)

**Squad:** 125. Escuadrón Data-Sci-5: Economía de Tokens  
**Misión:** Optimización de costos de IA. ¿Estamos gastando tokens en "hola" y "gracias"?  
**Responsables:** Backend, Prompt Engineer, Finanzas.

## 1. Compresión de Prompts (Prompt Minification)
Antes de enviar el contexto al LLM:
- **Stopwords:** Eliminamos palabras vacías innecesarias de los documentos recuperados (artículos, preposiciones redundantes) si no afectan la semántica legal.
- **Formato:** JSON es caro en tokens (comillas, llaves). Usamos formatos más densos como YAML o XML simplificado para inyectar datos.

## 2. Respuestas Concisas por Diseño
- **System Instruction:** "Eres conciso. No saludes. No te despidas. Ve al punto."
- Si el usuario dice "Gracias", la IA no llama al LLM. Un clasificador regex simple responde "De nada" (Costo = 0).

## 3. Ventana de Contexto Deslizante Inteligente
- No enviamos todo el historial del chat.
- Enviamos: [Resumen de la conversación anterior] + [Última pregunta].
- Mantiene la coherencia sin pagar por tokens repetidos infinitamente.

*Cada token cuenta. La verbosidad es un lujo que no pagamos.*

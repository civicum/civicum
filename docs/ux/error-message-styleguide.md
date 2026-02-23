# 🚫 HUMAN ERROR MESSAGES: NO MORE "0x454"

**Versión:** 1.0  
**Última actualización:** 19 Febrero 2026  
**Escuadrón:** 129 — Haptic-4: Claridad de Errores  
**Soluciona:** Hallazgo H4-01 (Errores Crípticos y Culpabilizadores)

---

## 🎯 El Problema de UX
*   "Error 500: Internal Server Error" -> Usuario: "¿Qué rompí?"
*   "RUT inválido" -> Usuario: "¡Pero si es mi RUT!" (Quizás puso un punto de más).
*   Los errores técnicos asustan y alejan al usuario no-tech.

---

## 🗣️ Guía de Redacción Empática

### 1. La Fórmula del Error Útil
Todo mensaje de error debe responder 3 preguntas:
1.  **¿Qué pasó?** (En humano, no en código).
2.  **¿Por qué pasó?** (Contexto breve).
3.  **¿Cómo lo arreglo?** (Acción inmediata).

*   *Mal:* "Connection Timeout."
*   *Bien:* "Tardamos mucho en conectar. 📶 Revisa tu señal o intenta de nuevo en un ratito."

### 2. Nunca Culpar al Usuario
*   *Mal:* "Ingresaste mal el correo."
*   *Bien:* "No reconocemos ese correo. ¿Tendrá algún error de tipeo?"

### 3. Mapeo de Códigos de Backend
*   El frontend debe interceptar todos los códigos HTTP.
*   404 -> "Ups, no encontramos lo que buscabas. Quizás se movió."
*   403 -> "Esta zona es restringida. Necesitas permisos especiales."
*   500 -> "Nuestros servidores se marearon. Ya avisamos a los ingenieros. Prueba en 5 min."

---

## 🧪 Test de la "Madre"
1.  Provocar errores a propósito (cortar internet, enviar form vacío).
2.  Mostrar el mensaje a una persona no técnica.
3.  **Meta:** Debe poder explicarte qué tiene que hacer para arreglarlo sin pedir ayuda.

---
*Documento generado para cerrar Hallazgo H4-01.*

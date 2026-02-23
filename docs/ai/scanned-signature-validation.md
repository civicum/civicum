# ✍️ LA FIRMA QUE NO ES FIRMA (VALIDACIÓN VISUAL)

**Versión:** 1.0
**Squad:** 290 Burocracia-5
**Escenario:** El usuario sube un PDF. En el campo de firma hay un garabato hecho en Paint o una foto de una firma pegada. ¿Vale?

---

## 🎯 La Zona Gris de la "Firma Electrónica Simple"
Legalmente, cualquier marca que identifique al autor es válida. Técnicamente, es un riesgo de repudio ("Yo no firmé eso").

## 🛡️ SIGNATURE INTEGRITY CHECK

### 1. Detección de "Pegoteo" (ML Vision)
*   Modelo simple de Computer Vision (OpenCV) para detectar si la firma tiene:
    *   Fondo blanco perfecto (255,255,255) sobre un papel que tiene ruido/textura -> **Indica Copy-Paste**.
    *   Diferente resolución/compresión que el resto del texto.
*   Alerta: *"Parece ser una imagen pegada. Riesgo de rechazo. Sugerimos firmar en pantalla."*

### 2. Firma Biométrica en Pantalla (Canvas)
*   Priorizar siempre que el usuario firme dibujando en el celular (Canvas HTML5).
*   Capturamos no solo la imagen, sino la **telemetría del trazo** (velocidad, presión si hay, puntos X/Y en el tiempo).
*   Esto constituye una evidencia pericial mucho más fuerte que un JPG pegado.

### 3. Hash de Vinculación
*   La firma visual se aplana en el PDF y se sella criptográficamente el documento completo.
*   Evita el "Rip & Replace" (sacar la firma válida y pegarla en otro contrato).

---
*Una firma no es un dibujo, es un acto de voluntad.*

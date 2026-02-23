# 🗑️ BASURA ELECTRÓNICA (E-WASTE PREVENTION)

**Versión:** 1.0
**Squad:** 307 Greta-2
**Problema:** "Tu dispositivo ya no es compatible". Esa frase condena a un teléfono perfectamente funcional a la basura.

---

## 🎯 El Derecho a Reparar (y a Usar)
La obsolescencia programada por software es un crimen ecológico.

## 🛡️ SOPORTE LEGACY EXTENDIDO

### 1. Soporte Android N-5
*   Compromiso de soportar versiones de Android de hasta 5-6 años atrás (ej: Android 8 Oreo en 2026).
*   Usar `AppCompat` y evitar librerías que exijan API Levels recientes innecesariamente.

### 2. "Civicum Lite" (PWA)
*   Para teléfonos que ya no soportan la app nativa o no tienen espacio (Almacenamiento < 500MB).
*   Progressive Web App que pesa < 1MB y funciona en cualquier navegador moderno, extendiendo la vida útil del hardware antiguo.

### 3. Graceful Degradation
*   Si el teléfono es lento (no tiene GPU potente), la app detecta `device-memory` y:
    *   Apaga animaciones.
    *   Desactiva mapas 3D.
    *   Reduce calidad de imágenes.
    *   **Pero NO deja de funcionar.**

---
*El teléfono más ecológico es el que ya tienes.*

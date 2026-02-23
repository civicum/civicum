# ☀️ GLARE (BRILLO SOLAR EXTREMO)

**Versión:** 1.0
**Squad:** 252 Átomo-2
**Escenario:** Mediodía en el Desierto de Atacama. 100.000 Lux. La pantalla del celular parece un espejo.

---

## 🎯 El "Modo Desierto"
El "Dark Mode" no sirve aquí. El gris sutil tampoco.

## 🛡️ VISIBILIDAD DE ALTO CONTRASTE

### 1. Detección de Luz Ambiental
*   Usamos la API `AmbientLightSensor` (donde esté disponible) o permitimos un toggle manual rápido ("Modo Sol").
*   **Efecto:** Invierte la interfaz a **Blanco Puro (#FFFFFF) sobre Negro Puro (#000000)** o Amarillo (#FFFF00) sobre Negro. Cero grises, cero sombras, cero gradientes.

### 2. Tipografía "Bold" Automática
*   En este modo, el `font-weight` de todo el texto sube un escalón (Regular -> Bold, Bold -> Black).
*   Se eliminan las fuentes delgadas (Light/Thin) que desaparecen con el reflejo.

### 3. Iconografía de Silueta
*   Los iconos de línea (outline) se rellenan (solid).
*   Se maximiza el "Click Area" de los botones, asumiendo que el usuario no ve bien dónde toca.

---
*Si no se lee bajo el sol, no sirve en la calle.*

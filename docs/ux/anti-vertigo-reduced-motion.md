# Protocolo Anti-Vértigo (Squad Bio-3)

**Squad:** 158. Escuadrón Vértigo: Reducción de Movimiento  
**Misión:** ¿Las transiciones de pantalla causan mareos (Motion Sickness)?  
**Responsables:** Frontend, UI Visual, Accesibilidad.

## 1. Respeto Absoluto a `prefers-reduced-motion`
- El sistema detecta la configuración del OS. Si está activa:
    - **Cero Parallax:** Los fondos no se mueven a distinta velocidad.
    - **Fade-in en vez de Slide:** Las pantallas aparecen suavemente, no "entran volando" desde el lado (que causa desorientación vestibular).
    - **No Autoplay:** Videos y GIFs animados están pausados por defecto.

## 2. Transiciones Funcionales, No Decorativas
- Las animaciones duran máximo 300ms.
- El movimiento lateral masivo (toda la pantalla desplazándose) está prohibido en flujos de lectura.

## 3. Estabilidad del Viewport
- Evitamos el "Layout Shift" (CLS) cuando cargan imágenes. El contenido no debe saltar bajo el dedo del usuario (que marea y frustra).

*Una app cívica no debería necesitar Dramamine.*

# Protocolo Anti-Tremor (Squad Bio-1)

**Squad:** 156. Escuadrón Tremor: Parkinson y Motricidad Fina  
**Misión:** Usar la app en un bus en movimiento con manos temblorosas. ¿Se puede acertar al botón?  
**Responsables:** Accesibilidad, Frontend, Low-end.

## 1. Ley de Fitts Extrema: Botones de 60px
- **Estándar:** Ningún elemento interactivo mide menos de 48x48dp (Android/iOS guidelines), pero para acciones críticas subimos a 60x60dp.
- **Padding Invisible:** El área clickeable es 20% más grande que el icono visible.

## 2. Prevención de "Rage Click" Involuntario
- Si el usuario pulsa el botón "Enviar" 5 veces en 200ms (típico de temblor), el sistema registra **1 solo click**.
- Debouncing agresivo en todos los formularios.

## 3. Gestos "Perdonadores"
- No requerimos gestos de precisión como "Pinch to Zoom" rotatorio. Todo se puede hacer con Taps simples.
- Los Sliders tienen pasos discretos (snap), no continuos, para evitar saltos por pulso inestable.

*La tecnología debe adaptarse a la mano, no la mano a la tecnología.*

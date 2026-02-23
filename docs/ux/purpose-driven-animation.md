# Animación con Propósito y Performance (Squad 233)

**Misión:** Movimiento que guía, no que decora. Performance vs. Estética.

## 1. El Riesgo de la Basura Estética (Lottie Bloat)
La necesidad de "deleitarnos" (Squad Joy) usualmente choca frontalmente con la necesidad de "Performance Extremo" (Squad Low-End). Diseñadores juniors tienden a inyectar pesadas bibliotecas Lottie.js (300KB de puras JSON animaciones) para que un ícono de campana rebote, quebrando el *Time to Interactive* (TTI) en un celular chino del 2017 corriendo sobre red 3G en zona semi-rural. Deleitar paralizando el celular es una ofensa clasista.

## 2. Animación Cinética Restringida (Framer Motion / Tailwind)
Toda micro-interacción de Joy se limita a Coreografías Vectoriales.

1.  **CSS Hardware-Accelerated Rules:** Quedan proscritas animaciones manipulando `margin`, `padding`, o `width` (que repintan el Layout del DOM carísimo para la GPU móvil). Todo movimiento cívico operará sobre `transform: translate3d` y `opacity` pura, delegada a Tailwind o Framer Motion. 
2.  **Transiciones Skeleton:** En la PWA, la Skeleton Screen al cargar iniciativas no debe ser gris y estática. Un gradiente de carga rápida guiado visualmente hacia la zona de acción (Skeleton Wave) que cuesta solo CSS.
3.  **Movimiento Comprometido:** Solo se anima lo que indica cambio de estado (State Change). El "Pull to Refresh" estira un micro-SVG que hace *Snap* de vuelta a su posición (Efecto Resorte Suave). 
    *El peso máximo sumado de todo el JS encargado de Animación no debe superar los 25 KB gzippeados.*

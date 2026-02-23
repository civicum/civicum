# Glare Solar y Contraste WCAG AAA (Squad 252)

**Misión:** Usar CIVICUM en el Desierto de Atacama. ¿Se puede leer la app?

## 1. El Riesgo de Diseñar en Interiores (Dark Room Syndrome)
El diseñador UX (Rol 10) desarrolla la versión `Dark-Mode` ("Neon Cyberpunk") sentado en su oficina con aire acondicionado y luces cálidas Philips Hue. A las 12:00 PM (Cenit), un trabajador portuario en pleno Sol de Tocopilla o Iquique saca el celular (brillo al 100%) para reportar un accidente laboral o contaminación vecinal. 
El sol rebota violentamente sobre la pantalla opaca (Glare); el contraste de "Gris sutil contra fondo negro" de la iniciativa Cívica desaparece visualmente, volviéndose invisible e inoperable (Muro físico de exclusión climática).

## 2. Contraste de Acción Cruda (Sun-Resistance UI)
La interfaz debe soportar violencia de lúmenes, sin importar sutilezas estéticas.

1.  **Modo Exteriores Obligatorio (Light Mode W3C AAA Strict):** Todos los módulos transaccionales críticos ("Alza la Voz", "Voto Directo") que ocurren *In-Situ* (La calle) asumen por defeco un Theme de Alto Contraste Solar. Los fondos son puros (`#FFFFFF`), el texto es negro mate puro (`#000000`), no `slate-800`.
2.  **Límites Táctiles Gordos (Fat-Finger Outdoors):** En exteriores no caminamos detenidamente, vamos moviéndonos, apurados y bajo luz ceguera extrema. Todo Dropdown, Checkbox de Validar RUT, o Botón `[Apoyar]` aumenta su `padding` a proporciones que rompen el diseño minimalista urbano pero salvan la tasa de clic del usuario enceguecido (`min-width 120px` y `min-height 60px` Mobile Only).

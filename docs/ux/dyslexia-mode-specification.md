# Especificación: "Modo Dislexia" y Lectura de Alto Contraste

**Versión:** 1.0  
**Misión:** Evitar "ríos de texto", confusiones tipográficas ("b/d", "p/q") y abrumación ocular para usuarios neurodivergentes o con dislexia severa en artículos extensos de Academia Cívica y explicaciones constitucionales (Escuadrón 160 - Dislexia).

## 1. El Toggle de "Modo Dislexia" (Accesibilidad Perfil)
Dentro de *MiCIVICUM -> Preferencias de Accesibilidad*, debe existir un `Switch` primario denominado "Modo Lectura Asistida (Dislexia)".
Al activarse, todo el Design System mutará a las siguientes reglas (Forced CSS overrides):

### Reglas Tipográficas:
- **Fuente Alternativa Obligatoria:** Si bien IBM Plex Sans es la tipografía base, el modo "Lectura Asistida" inyectará mediante fallbacks o descarga asíncrona tipografías especializadas de fondo pesado como `OpenDyslexic` o un perfil optimizado de `Comic Sans MS` / `Lexend`, donde las letras asimétricas están fortalecidas en su base.
- **Letter-Spacing:** Forzado a `0.15em`.
- **Line-Height:** Forzado a mínimo `1.6em` y máximo `1.8em`.

### Reglas Estructurales (Evitar ríos de texto):
- **Justificación Centralizada Prohibida:** Todo texto largo (párrafos de >2 oraciones) se forza a `text-align: left`. Absolutamente prohibido `text-align: justify`.
- **Ancho de Línea:** Restringir lectura (`max-width: 60ch`) forzando márgenes, permitiendo que el ojo haga el "barrido" (sweep) sin perder el renglón.
- **Color de Fondo:** Aligerar el contraste estridente. Se sustituyen fondos "Blanco Puro (#FFFFFF)" por tonos cálidos o cremas muy tenues (#FAFAFA, #FDFDF6) que reducen el "glare" óptico típico que fatiga la lectura con la condición.

## 2. Arquitectura de Front-End
La lógica debe persistirse en `localStorage` o `IndexedDB` y cargar en el Head (CSS root variables invertido `[data-lex-mode='dyslexic']`) de inmediato antes del First Contentful Paint para evitar un FOAC (Flash of Unstyled Content) al abrir la página.

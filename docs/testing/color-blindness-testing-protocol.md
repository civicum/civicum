# Protocolo de Testing de Daltonismo (Color Blindness QA)

**Versión:** 1.0  
**Misión:** Asegurar que ninguna interfaz de Civicum (Especialmente mapas de 'Cuentas Claras' y semáforos de 'Alza la Voz') dependa exclusivamente del color para transmitir información crítica bajo Deuteranopia, Protanopia o Tritanopia (Escuadrón 157 - Dalton).

## 1. Reglas Generales de UI/UX (Design System)
- El color es un **refuerzo**, nunca la única señal de validación.
- Los alertas ("Error", "Éxito") deben estar explícita y forzosamente acompañados de iconografía (ej. `X` o `!` sobre íconos solidos, *checkmarks*).
- Los semáforos (Rojo/Amarillo/Verde) deben integrar formas diferenciadoras si aplican a mapas (ej. Cuadrados = Error, Triángulos = Precaución, Círculos = Correcto).

## 2. Instrucciones de Simulación en QA
Todo ingeniero de Front-End o de QA (Roles 15, 18 y 19) debe ejecutar la Suite de Simulación Visual de Chrome/Edge DevTools en cada Sprint de UI (Pre-Merge a rama Stage):
1. **Paso 1:** Abrir Chrome DevTools (F12) > Rendering tab.
2. **Paso 2:** Navegar hacia la sección `Emulate vision deficiencies`.
3. **Paso 3:** Auditar flujos primarios rotando las siguientes deficiencias:
   - Protanopia (Sin rojo)
   - Deuteranopia (Sin verde)
   - Tritanopia (Sin azul)
   - Achromatopsia (Sin color, Blanco y Negro absolutos)
4. **Criterio de Aprobación:** La página debe conservar legibilidad contrastante (> 4.5:1 ratio en textos y > 3.0:1 en límites de UI como bordes de inputs). Ninguna acción crítica debe volverse "invisible" por la carencia del tono.
5. El informe de QA emitido (Vitest/Playwright/jest-axe) debe ir anexado con una captura manual en Achromatopsia del componente auditado.

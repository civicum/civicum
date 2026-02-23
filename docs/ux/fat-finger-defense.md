# Protocolo "Dedo Gordo" (Fat Finger) (Squad Lambda-Cuatro)

**Squad:** 60. Escuadrón Lambda-Cuatro: El "Dedo Gordo"  
**Misión:** Errores de input. Tocar botones equivocados. ¿Es reversible? (Undo).  
**Responsables:** Frontend Lead, UX Researcher, Accesibilidad, QA Funcional.

## 1. El Derecho a Equivocarse
En pantallas táctiles pequeñas y en movimiento (micro), el error es la norma.
- **Acciones Destructivas:** "Borrar", "Salir", "Reportar" deben tener confirmación o ser reversibles.

## 2. Toast "Deshacer" (Undo Toast)
Cuando el usuario borra/archiva algo:
- No preguntamos "¿Estás seguro?" (que interrumpe el flujo).
- Lo borramos pero mostramos un mensaje flotante por 5 segundos: "Elemento borrado. [DESHACER]".
- Es más fluido y menos molesto.

## 3. Zonas de Seguridad
- **Separación:** Botones peligrosos (Rojo) deben estar lejos de botones de acción común (Verde). Mínimo 20px de separación real.
- **Hit Area:** El área clickeable es más grande que el icono visible, para perdonar la imprecisión del dedo.

## 4. Input Assist
- Si el usuario escribe "gmai.com", sugerimos "¿Quisiste decir gmail.com?". No bloqueamos, ayudamos.

*El usuario no es torpe, la interfaz es hostil. Nosotros la hacemos amable.*

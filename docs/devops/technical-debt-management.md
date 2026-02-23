# Protocolo de Gestión de Deuda Técnica (Squad Entropía-3)

**Squad:** 118. Escuadrón Entropía-3: Deuda Técnica Acumulada  
**Misión:** El código se vuelve inmantenible en 12 meses. Análisis estático de mantenibilidad.  
**Responsables:** Arquitecto, Frontend, Backend, Head of Ops, Product Lead.

## 1. La Regla del "Viernes de Refactor"
- **Política:** El 20% del sprint (todos los viernes) se dedica EXCLUSIVAMENTE a pagar deuda técnica. No se desarrollan features nuevas los viernes.
- **Objetivo:** Mantener la entropía bajo control antes de que se convierta en una bola de nieve.

## 2. Límite de Complejidad Ciclomática
- **Check Automático:** Si una función supera los 10 puntos de complejidad ciclomática (muchos `if/else` anidados), el CI/CD bloquea el merge.
- **Acción:** Obliga al desarrollador a dividir la función en trozos más pequeños y legibles.

## 3. "TODO" con Fecha de Caducidad
- Está prohibido dejar comentarios `// TODO: Fix this later` sin una fecha y un ticket de Jira asociado.
- Si el `TODO` tiene más de 3 meses de antigüedad, un script ("The Janitor") rompe el build para obligar al equipo a resolverlo o borrarlo.

*El código es como un jardín: si no lo podas, la maleza te come.*

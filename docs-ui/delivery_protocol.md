# Protocolo Obligatorio de Ejecución y Entrega (CIVICUM) v2

Este documento rige todas las interacciones, planeación, ejecución y reporte de tareas en este repositorio. Ninguna regla puede cerrarse ni implementarse si viola estos principios.

## 1. Regla Principal (SSOT) y Gobernanza Explícita
- **El SSOT manda por defecto.** No se implementa, reinterpreta ni cierra ninguna regla si el resultado diverge del SSOT.
- **Aprobación de Desviaciones (Ruta B - ADR):** Toda decisión técnica, de diseño o de producto que reemplace al SSOT debe ser formulada como un ADR y **aprobada explícitamente por el Owner (Daniel)**.
- **Estado Transitorio:** Mientras un ADR no esté formalmente redactado, consensuado y marcado como `ACCEPTED` por el Owner, el estado de la regla infractora será inamoviblemente **CONFLICTO** o **PARTIAL**, dependiendo de la severidad del desvío.

## 2. Prohibición Explícita de Falsos Cierres y Regla de Bloqueo
- **Prohibición Verbal:** Queda estrictamente prohibido declarar una entrega como "final completa", "cerrada", "lista" o equivalente si persisten reglas en **PARTIAL**, **NO IMPL** o **CONFLICTO**.
- **Regla de Bloqueo:** Es **imposible** declarar el estado `CERRADO` de un paquete o hito funcional si existe la más mínima desalineación entre (a) la matriz de trazabilidad, (b) el backlog de no conformidades, (c) el código vivo y (d) la evidencia adjunta. Todo debe decir lo mismo.

## 3. Protocolo Previo a Cualquier Cambio (Pre-validación)
Antes de modificar código, se debe entregar un plan con esta estructura:
1. Regla(s) SSOT afectadas.
2. Fuente formal rectora (SSOT / ADR).
3. Si la implementación actual cumple, diverge o es nueva.
4. Si habrá desviación constructiva.
5. Si la desviación requiere ADR previo.
6. Riesgo de romper otras reglas (Impacto cruzado).
7. Plan de evidencia para demostrar el cierre.

## 4. Protocolo Obligatorio de Entrega
Toda entrega final debe usar este formato exacto:
- **A. Qué regla(s) se intentó cerrar:** Lista de `UI_RULE_ID`.
- **B. Estado anterior y estado nuevo:** Ej. `PARTIAL` -> `OK`.
- **C. Fuente formal que justifica el cambio:** SSOT explícito o ADR aprobado.
- **D. Archivos modificados:** Lista exclusiva de archivos alterados en la misión.
- **E. Evidencia obligatoria:** Diff real del commit, tests ejecutados, artefactos visuales concretos, output nativo limpio.
- **F. Riesgos residuales:** Qué sigue abierto en el macro-scope de la entrega.
- **G. Dictamen honesto:** EXACTAMENTE UNA de estas 3 opciones:
  - `CERRADO`: 100% test passing, sin impacto colateral negativo, alineación total con SSOT.
  - `CERRADO CON RESERVAS`: Fix principal funcional y probado, pero quedan gaps identificados e ingresados al backlog (ej. `PARTIAL` aceptable no bloqueante).
  - `NO CERRADO`: Tests fallan, desalineación crítica con SSOT, o falta de evidencia.

## 5. Sincronización Obligatoria de Trazabilidad
Es mandatorio que, en el mismo commit/entrega donde se altera el estado de una regla, se sincronicen simultáneamente:
1. `docs-ui/traceability_matrix.md` (estado y métricas)
2. `docs-ui/non_conformities_backlog.md` (ingreso o retiro de la deuda)
3. Hash final visible en la cabecera de la matriz.
4. Las rutas a la evidencia generada o enlazada.

## 6. Regla de Divergencia (Manejo de Gaps)
Si una implementación no coincide con el SSOT, se elegirá y documentará de inmediato una de las siguientes rutas:
- **Ruta A:** Corregir el código para alinearlo al SSOT.
- **Ruta B:** Promover un ADR formal para revisión del Owner, dejando la regla parcial/en conflicto mientras se dirime.
- **Ruta C:** Declararlo como estado excepcional (**CONFLICTO**) de manera temporal, hasta lograr la resolución formal (vía ADR) o el retiro explícito/deprecación de la regla original.

## 7. Reglas de Estados de Trazabilidad
- **OK:** Implementado al 100% interactivo/visual y validado con prueba dura irrefutable.
- **PARTIAL:** Parcialmente implementado; faltan piezas, dependencias, refactors o datos.
  *Ejemplo:* El Tab de Navegación funciona ("Inicio"), pero falta programar el comportamiento dinámico "Filled variant" dictado por la regla.
- **NO IMPL:** Elemento enteramente diferido o ausente.
- **CONFLICTO:** Implementación activa diverge estructuradamente de la fuente formal.
  *Ejemplo:* El SSOT exige explícitamente un "Toast", pero el equipo programó un "Modal de pantalla completa". No es que le falte una pieza (Partial), es que se implementó un paradigma distinto.

## 8. Regla de Evidencia Estricta
Ninguna descripción narrativa reemplaza la prueba material.
- *"No hay overflow"* = Bounding box o Screenshot específico documentando `scrollWidth <= clientWidth`.
- *"No hay oclusión"* = Test dinámico probando coordenadas o Screenshot.
- *"Tests pasaron"* = Output nativo UTF-8/String.
- *"Regla cerrada"* = Update de matriz + Diff de código + Evidencia.

## 9. Regresión Obligatoria por Impacto Cruzado
Se debe investigar y declarar el impacto lateral antes de la implementación. Al finalizar, la regresión operativa es mandatoria según el core tocado:
- **Navegación (`SmartDock`, `SideRail`, `AppLayout`)**: Ejecutar obligatoriamente `smoke.breakpoints.spec.ts` (verifica Layout global de 360 a 1024px) y regenerar PNGs UI-NAV.
- **Layout General (`AppLayout`, Contenedores root)**: Ejecutar `smoke.breakpoints.spec.ts` y evaluar oclusión (`integration.5state.spec.ts`).
- **Estados (Loading, Error, Empty, Offline)**: Ejecutar forzosamente `integration.5state.spec.ts` (suite offline) y `integration.reports.spec.ts` (suite intercept de asincronía).
- **Componentes Compartidos (Botones, Inputs, Modales)**: Ejecutar regeneración visual completa en `/ui-kit`.

## 10. Cadencia Obligatoria de Revisión del Backlog
El responsable de desarrollo revisará el documento `non_conformities_backlog.md`:
1. **Antes de la Pre-validación:** Para no duplicar esfuerzos ni ignorar deudas estructurales que bloqueen la nueva feature.
2. **Antes de Emitir un Cierre General (Gate):** Ningún Gate o hito principal avanza si hay elementos sin clasificar en el backlog o si el entregable ignora deudas críticas listadas ahí.

## 11. Regla de Escalamiento por Antigüedad
Para evitar la fosilización de la deuda técnica, el backlog está sujeto a escalamiento temporal:
- Si una regla en estado **CONFLICTO** o **NO IMPL** permanece abierta superando **2 Gates consecutivos** o **15 días calendario** desde su captura inicial, se gatilla una "Delegación Forzosa".
- En este evento, se debe exigir al Owner (Daniel) una resolución formal inmediata: ya sea la promoción de un ADR (blanqueo oficial) o la baja explícita del feature. No se permite el arrastre infinito.

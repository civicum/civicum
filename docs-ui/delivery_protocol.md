# Protocolo Obligatorio de Ejecución y Entrega (CIVICUM)

Este documento rige todas las interacciones, planeación, ejecución y reporte de tareas en este repositorio. Ninguna regla puede cerrarse ni implementarse si viola estos principios.

## 1. Regla Principal (SSOT)
- **El SSOT manda por defecto.**
- No se implementa, reinterpreta ni cierra ninguna regla si el resultado diverge del SSOT, *salvo que* exista previamente una decisión formal (ADR) que lo reemplace explícitamente.

## 2. Prohibición Explícita de Falsos Cierres
Queda estrictamente prohibido declarar una entrega como "final completa", "cerrada", "lista" o equivalente si:
- En la matriz todavía existen reglas en estado **PARTIAL**, **NO IMPL** o **CONFLICTO**.
- Una regla marcada **OK** carece de evidencia suficiente, reproducible y no corrupta.

## 3. Protocolo Previo a Cualquier Cambio (Pre-validación)
Antes de implementar código, se debe entregar un plan corto con esta estructura:
1. Regla(s) SSOT afectadas.
2. Fuente formal que manda (SSOT / ADR).
3. Si la implementación actual cumple o no.
4. Si habrá desviación constructiva.
5. Si la desviación requiere ADR previo.
6. Riesgo de romper otras reglas (Impacto cruzado).
7. Plan de evidencia para demostrar el cierre.
*(Si hay desviación, se frena y se resuelve la gobernanza antes de codificar).*

## 4. Protocolo Obligatorio de Entrega
Toda entrega final de un fix o feature debe usar este formato exacto:
- **A. Qué regla(s) se intentó cerrar:** Lista de `UI_RULE_ID`.
- **B. Estado anterior y estado nuevo:** Ej. `PARTIAL` -> `OK`.
- **C. Fuente formal que justifica el cambio:** SSOT o ADR explícito.
- **D. Archivos modificados:** Lista de archivos tocados (sin rodeos).
- **E. Evidencia obligatoria:**
  - Diff real del commit.
  - Tests ejecutados.
  - Artefactos visuales (screenshots, bounding boxes).
  - Output limpio de consola/ejecución nativa.
- **F. Riesgos residuales:** Qué sigue abierto y por qué.
- **G. Dictamen honesto:** EXACTAMENTE UNA de estas 3 opciones: `CERRADO`, `CERRADO CON RESERVAS`, `NO CERRADO`.

## 5. Regla de Divergencia (Manejo de Gaps)
Si una implementación no coincide con el SSOT, se debe transitar exclusivamente por una de estas 3 rutas explícitas:
- **Ruta A:** Corregir el código para alinearlo al SSOT.
- **Ruta B:** Promover un ADR formal que reemplace el SSOT.
- **Ruta C:** Mantener abierto como **CONFLICTO**.
*(Prohibidas las racionalizaciones a posteriori de implementaciones "prácticas").*

## 6. Reglas de Estados de Trazabilidad
Prohibido usar **OK** si la descripción indica trabajo parcial, mocks, ausencia de backend o scopes diferidos.
- **OK:** Implementado al 100% y verificado con evidencia.
- **PARTIAL:** Parcialmente implementado o dependiente de piezas/datos faltantes.
- **NO IMPL:** No implementado en absoluto.
- **CONFLICTO:** Implementación activa pero en conflicto directo con la fuente formal (SSOT).

## 7. Regla de Evidencia Estricta
Ninguna narrativa verbal sustituye a la prueba concreta.
- *"No hay overflow"* → Adjuntar prueba geométrica (`scrollWidth <= clientWidth`) + screenshot.
- *"No hay oclusión"* → Adjuntar prueba de bounding-box dinámica + screenshot.
- *"Tests pasaron"* → Adjuntar raw output limpio y legible nativo (ej. UTF-8).
- *"Regla cerrada"* → Adjuntar fuente + diff + evidencia irrefutable.

## 8. Regla de Impacto Cruzado
Al alterar o cerrar una regla, se deben investigar y declarar explícitamente otras reglas impactadas colateralmente:
- Nav afecta: `UI-NAV-*`, `UI-CMP-*`
- Layout afecta: `UI-LAY-*`
- States afecta: `UI-STP-*`
*(Descartados fixes locales carentes de macrovisión).*

## 9. Backlog Obligatorio de No Conformidades
Debe existir un documento vivo (ver `non_conformities_backlog.md`) que rastree con prioridad y ruta de resolución explícita toda regla que no esté en `OK`.

## 10. Meta Principal
Cierres estrictos por regla, fundamentados con evidencia, con estados insobornablemente honestos y con la fuente formal siempre alineada.

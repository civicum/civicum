# 09 — Gobernanza UI

**Propósito:** Define quién puede cambiar qué en la UI, cómo se aprueba, y cómo se audita. Es el "reglamento interno" del sistema de diseño. Garantiza que ningún cambio visual pase sin revisión, y que toda decisión sea trazable.

## Decisiones que debe contener

- [ ] Roles: quién propone, quién revisa, quién aprueba cambios de UI
- [ ] Proceso ADR: flujo completo (propuesta → revisión → aceptación → implementación → verificación)
- [ ] Frecuencia de auditoría: cuándo se revisa que código ↔ docs estén sincronizados
- [ ] Criterio de "Done UI": checklist completa (referenciada desde `README.md`)
- [x] Gates de calidad: qué verifica cada gate (ver §Gates abajo)
- [ ] Deprecación de componentes: cómo se retira un componente del catálogo
- [ ] Versionado del pack: cuándo se incrementa versión de los docs 00–09
- [ ] Escalamiento: qué pasa si hay desacuerdo en una decisión de UI

## Gates de Calidad UI (v1)

| Gate | Nombre | Qué verifica |
|------|--------|--------------|
| **Gate 0** | Baseline / Inventario | Branch de control, inventario de rutas y componentes, screenshots golden |
| **Gate 1** | SSOT / ADR / Skeleton | Declaración SSOT, sistema ADR, skeleton del pack 00–09 |
| **Gate 2** | Extracción Documental | Extrae reglas de `/docs/` → las inyecta en 00–09 con DOCREF. Matriz de trazabilidad |
| **Gate 3** | Resolución de Conflictos | Resuelve contradicciones entre fuentes mediante ADRs. Cada conflicto = 1 ADR |
| **Gate 4** | Pack Completo + Auditoría | Completa 00–09 con reglas + DOCREFs. Auditoría código ↔ docs (0 drift) |
| **Gate 5+** | Implementación + Retrofit | Aplica reglas del pack al código real. Tests. Visual regression |

## Evidencia exigida en Gate 4

> El proceso ADR debe estar demostrado con al menos 3 ADRs aceptados. La auditoría código ↔ docs debe tener al menos 1 reporte ejecutado.

---

## TODO

- Definir roles para proyecto de 1 desarrollador (autor = revisor con checklist)
- Importar reglas de `docs/governance/` relevantes para UI
- Documentar proceso de deprecación (no aplica aún, pero la estructura debe existir)

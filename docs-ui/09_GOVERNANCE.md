# 09 — Gobernanza UI

**Propósito:** Define quién puede cambiar qué en la UI, cómo se aprueba, y cómo se audita. Es el "reglamento interno" del sistema de diseño. Garantiza que ningún cambio visual pase sin revisión, y que toda decisión sea trazable.

## Decisiones que debe contener

- [ ] Roles: quién propone, quién revisa, quién aprueba cambios de UI
- [ ] Proceso ADR: flujo completo (propuesta → revisión → aceptación → implementación → verificación)
- [ ] Frecuencia de auditoría: cuándo se revisa que código ↔ docs estén sincronizados
- [ ] Criterio de "Done UI": checklist completa (referenciada desde `README.md`)
- [ ] Gates de calidad: qué verifica cada gate (0, 1, 2, 3, 4)
- [ ] Deprecación de componentes: cómo se retira un componente del catálogo
- [ ] Versionado del pack: cuándo se incrementa versión de los docs 00–09
- [ ] Escalamiento: qué pasa si hay desacuerdo en una decisión de UI

## Evidencia exigida en Gate 4

> El proceso ADR debe estar demostrado con al menos 3 ADRs aceptados. La auditoría código ↔ docs debe tener al menos 1 reporte ejecutado.

---

## TODO

- Formalizar gates de calidad (Gate 0 control, Gate 1 SSOT, Gate 2 tokens, Gate 3 impl, Gate 4 audit)
- Definir roles para proyecto de 1 desarrollador (autor = revisor con checklist)
- Importar reglas de `docs/governance/` relevantes para UI
- Documentar proceso de deprecación (no aplica aún, pero la estructura debe existir)

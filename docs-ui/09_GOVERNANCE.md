# 09 — Gobernanza UI

**Propósito:** Define quién puede cambiar qué en la UI, cómo se aprueba, y cómo se audita. Es el "reglamento interno" del sistema de diseño. Garantiza que ningún cambio visual pase sin revisión, y que toda decisión sea trazable.

## Decisiones que debe contener

- [x] Roles: quién propone, quién revisa, quién aprueba cambios de UI (ver tabla + §Modo Solo Dev)

| Rol | Responsabilidad | En modo Solo Dev |
|-----|-----------------|------------------|
| **Autor (Proponente)** | Crea el ADR con contexto, decisión, alternativas | El desarrollador |
| **Revisor** | Valida contra checklist de aceptación (4 puntos) | El mismo desarrollador |
| **Aprobador** | Marca `Aceptado` + fecha en el ADR | El mismo desarrollador |
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
| **Gate 2** | Extracción Documental | Extrae reglas desde fuentes permitidas → construye matriz de trazabilidad con DOCREF + conflicts/gaps. No completa 00–09 aún |
| **Gate 3** | Resolución de Conflictos | Resuelve contradicciones entre fuentes mediante ADRs. Cada conflicto = 1 ADR |
| **Gate 4** | Pack Completo + Auditoría | Completa 00–09 con reglas + DOCREFs. Auditoría código ↔ docs (0 drift) |
| **Gate 5+** | Implementación + Retrofit | Aplica reglas del pack al código real. Tests. Visual regression |

## Evidencia exigida en Gate 4

> El proceso ADR debe estar demostrado con al menos 3 ADRs aceptados. La auditoría código ↔ docs debe tener al menos 1 reporte ejecutado.

---

## Modo Solo Dev (1 desarrollador)

> **Autor propone ADR → Autor revisa con checklist de aceptación → Aceptación registrada en el ADR con estado `Aceptado` + fecha.**

En un proyecto con un solo desarrollador, el autor cumple ambos roles (propuesta y revisión). La checklist de revisión es:
- [ ] ¿El ADR cita DOCREF o justificación técnica?
- [ ] ¿Las alternativas son reales (no strawman)?
- [ ] ¿Las consecuencias incluyen riesgos?
- [ ] ¿No contradice ADRs anteriores aceptados?

Si los 4 puntos se cumplen, el ADR se marca `Aceptado`.

## TODO

- Importar reglas de `docs/governance/` relevantes para UI
- Documentar proceso de deprecación (no aplica aún, pero la estructura debe existir)

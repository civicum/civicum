# Gate 4 — Decision Import Map

**Fecha:** 2026-02-26
**Propósito:** Mapeo de importación de decisiones ADR ACCEPTED al pack docs-ui/00–09.

---

| ADR | Tema | Pack a actualizar | UI_RULE_ID afectados | Qué cambia | Evidencia |
|-----|------|-------------------|---------------------|------------|-----------|
| ADR-0002 | `data-module` atmósferas | `03_LAYOUTS.md` | UI-TOK-007, UI-NAV-004, UI-PAT-002 | Regla: `data-module` como señal canónica de módulo. Valores: 6 módulos S01 + `unknown`=default. Gobernanza: no inventar valores sin DOCREF. | ADR-0002 ACCEPTED + DOCREF S01 §2.7 (L355), §9.3 (L1152) |
| ADR-0003 | Breakpoints oficiales | `03_LAYOUTS.md` | UI-LAY-001, UI-LAY-004, UI-CMP-006 | Opción B elegida: override `sm=480px` + alias temporal `sm640=640px`. Breaking change para `sm:` clases. | ADR-0003 ACCEPTED (Daniel, Opción B) + DOCREF S01 §6.1 (L618), §6.2 (L629) |
| ADR-0004 | Pantalla 404 | `04_NAVIGATION.md` | UI-NAV-008 | Regla: pantalla 404 personalizada dentro de AppLayout. Copy aprobado. Scope: solo AppLayout; standalone/onboarding excluido. | ADR-0004 ACCEPTED + DOCREF S01 §15.1, §15.4 |
| ADR-0005 | Dark mode postponement | `00_UI_CONTRACT.md` | UI-LAY-007 | Norma: dark mode no bloqueante Época 1–2; pospuesto a Época 3+ con spec mínima (tokens semánticos, class-based, WCAG AA). | ADR-0005 ACCEPTED + DOCREF S01 Done UI |
| ADR-0006 | 5-state pattern | `08_STATES_OFFLINE_PERF.md` | UI-STP-001..005, UI-STP-009 | Norma: toda pantalla maneja 5 estados (loading/empty/error/offline/success). Loading en UI-kit Playwright; golden solo si Empty es estable. | ADR-0006 ACCEPTED + DOCREF S01 §12 (L1356) |
| ADR-0007 | Tipografía | `01_TOKENS.md` | GAP-007 | Sección tipografía: Nunito Sans + IBM Plex Sans + IBM Plex Mono. Tier system (HIGH/MEDIUM/LOW). Budget: tier HIGH ~120KB vs UI-STP-008 ≤800KB. | ADR-0007 ACCEPTED + DOCREF S01 §3.1 (L394–396), §3.3 |

# OBSOLETO / NO NORMATIVO

Este archivo fue generado el 2026-03-22 y corresponde al HEAD `6321401`.

Fue superseded por `CIVICUM_RECOVERY.md`, `adr-ui/ADR-0009-taxonomia-navegacion-oficial.md`, la matriz de trazabilidad actual y el PR #1.

No debe usarse como estado `LATEST` actual, evidencia limpia ni fuente de cierre formal.

---

# RE-ENTRY SYNC v2 — Estado canónico + delta de implementación

**Fecha generación:** 2026-03-22T14:28-03:00
**Branch:** `ui-architecture-foundation`
**HEAD commit:** `6321401` — feat(gate5.8): reproducible data environment foundation

---

## 1. Verificación de repo actual

### git branch --show-current

```
ui-architecture-foundation
```

### git status --short --branch

```
## ui-architecture-foundation
```

### git log --decorate --oneline -n 20

```
6321401 (HEAD -> ui-architecture-foundation) feat(gate5.8): reproducible data environment foundation
8714d15 fix(gate5.7): repair ADR-0006 wording to match actual implementation history
cc13356 docs(gate5.7): final ADR wording alignment with real vertical integration
20d7fd3 fix(gate5.7): reconcile HEAD with report — backend automation and docs alignment
461fda5 docs(gate5.7): final seal — align matrix and ADR with Gate 5.7a reality
3ee96e8 fix(gate5.7a): functional EmptyState CTA + real backend in automation + wiring tests
ac0bd8e feat(gate5.7): first real data vertical — Dashboard communityReports with Loading, Error, Empty states
e6df1b0 docs(gate5.6): honest-stop seal — record lack of real data vertical for remaining states
c4d6332 docs(gate5.5): honest-stop seal — record production integration limits for remaining states
ada7c66 docs(gate5.4): final traceability seal — align UI-STP-001 and UI-STP-005 with Gate 5.4
8dd8367 docs(gate5.4): final consistency — align 08_STATES offline checklist with production integration
5bd0a64 docs(gate5.4): final polish — align offline indicator checklist and UI-STP-001 verification
d8ba0b6 docs(gate5.4): seal ADR-0006 with implementation record and production integration note
d5f0959 feat(gate5.4): integrate OfflineBanner in AppLayout via real navigator.onLine (UI-STP-005)
90ce8c6 docs(gate5.3): seal docs drift — ADR-0006 implementation record + UI-kit README + UI-STP-009 verification
415e273 docs(gate5.3): audit seal — SSOT notes + ADR-0006 implementation record + evidence path canon
32a6a54 docs(gate5.3): SSOT closure — traceability_matrix UI-STP-001..009 implementation notes
cf61361 test(gate5.3): Playwright ui-kit snapshots — 10 PNGs for 5-state evidence
c0481ad feat(gate5.3): /ui-kit deterministic route for 5-state evidence
fc42f22 feat(gate5.3): 5-state feedback components + shimmer keyframe (ADR-0006)
```

### Commit 964d5a7

**EXISTE:** `964d5a7 docs(gate4): consistency patch — add UI-TOK-009 typography rule, align 5-state evidence, clarify implementation pending`

### git diff --name-status 964d5a7..HEAD

```
M	adr-ui/ADR-0004-diseno-404.md
M	adr-ui/ADR-0006-estados-por-pantalla.md
M	docs-ui/04_NAVIGATION.md
M	docs-ui/08_STATES_OFFLINE_PERF.md
A	docs-ui/_gate5/gate5.6_evaluation_report.md
A	docs-ui/_gate5/gate5_5_evaluation.md
A	docs-ui/_gate5/implementation_plan.md
A	docs-ui/_gate5/runner_hygiene_windows.md
M	docs-ui/traceability_matrix.md
M	tests/visual/baseline/01_onboarding_splash0_desktop.png
M	tests/visual/baseline/02_onboarding_splash1_desktop.png
M	tests/visual/baseline/03_onboarding_splash2_desktop.png
M	tests/visual/baseline/08_dashboard_desktop.png
M	tests/visual/baseline/09_onboarding_splash0_mobile.png
M	tests/visual/baseline/10_onboarding_splash1_mobile.png
M	tests/visual/baseline/11_onboarding_splash2_mobile.png
M	tests/visual/baseline/12_dashboard_mobile.png
A	tests/visual/baseline/README.md
A	tests/visual/ui-kit/README.md
A	webapp/.env.example
M	webapp/.gitignore
M	webapp/README.md
M	webapp/package.json
A	webapp/playwright.config.ts
M	webapp/pnpm-lock.yaml
A	webapp/src/components/feedback/EmptyState.tsx
A	webapp/src/components/feedback/ErrorState.tsx
A	webapp/src/components/feedback/OfflineBanner.tsx
A	webapp/src/components/feedback/SkeletonScreen.tsx
A	webapp/src/components/feedback/SuccessState.tsx
M	webapp/src/components/icons/CivicumLogo.tsx
M	webapp/src/components/layout/AppLayout.tsx
A	webapp/src/components/layout/SmartDock.tsx
A	webapp/src/db/migrations/0000_daily_northstar.sql
A	webapp/src/db/migrations/meta/0000_snapshot.json
A	webapp/src/db/migrations/meta/_journal.json
A	webapp/src/db/reset.ts
A	webapp/src/db/seed.ts
A	webapp/src/lib/queryClient.ts
A	webapp/src/lib/useNetworkStatus.ts
M	webapp/src/main.tsx
M	webapp/src/pages/dashboard/DashboardPage.tsx
A	webapp/src/pages/not-found/NotFoundPage.tsx
A	webapp/src/pages/ui-kit/UIKitPage.tsx
A	webapp/src/server/db.ts
M	webapp/src/server/index.ts
A	webapp/src/server/serve.ts
M	webapp/tailwind.config.ts
A	webapp/tests/e2e/README.md
A	webapp/tests/e2e/integration.5state.spec.ts
A	webapp/tests/e2e/integration.reports.spec.ts
A	webapp/tests/e2e/smoke.breakpoints.spec.ts
A	webapp/tests/e2e/smoke.home.spec.ts
A	webapp/tests/e2e/smoke.notfound.spec.ts
A	webapp/tests/e2e/ui-kit.states.spec.ts
A	webapp/tests/visual/ui-kit/UI-STP-001_success_desktop.png
A	webapp/tests/visual/ui-kit/UI-STP-001_success_mobile.png
A	webapp/tests/visual/ui-kit/UI-STP-002_loading_desktop.png
A	webapp/tests/visual/ui-kit/UI-STP-002_loading_mobile.png
A	webapp/tests/visual/ui-kit/UI-STP-003_empty_desktop.png
A	webapp/tests/visual/ui-kit/UI-STP-003_empty_mobile.png
A	webapp/tests/visual/ui-kit/UI-STP-004_error_desktop.png
A	webapp/tests/visual/ui-kit/UI-STP-004_error_mobile.png
A	webapp/tests/visual/ui-kit/UI-STP-005_offline_desktop.png
A	webapp/tests/visual/ui-kit/UI-STP-005_offline_mobile.png
M	webapp/vite.config.ts
```

### git log --oneline --decorate 964d5a7..HEAD

```
6321401 (HEAD -> ui-architecture-foundation) feat(gate5.8): reproducible data environment foundation
8714d15 fix(gate5.7): repair ADR-0006 wording to match actual implementation history
cc13356 docs(gate5.7): final ADR wording alignment with real vertical integration
20d7fd3 fix(gate5.7): reconcile HEAD with report — backend automation and docs alignment
461fda5 docs(gate5.7): final seal — align matrix and ADR with Gate 5.7a reality
3ee96e8 fix(gate5.7a): functional EmptyState CTA + real backend in automation + wiring tests
ac0bd8e feat(gate5.7): first real data vertical — Dashboard communityReports with Loading, Error, Empty states
e6df1b0 docs(gate5.6): honest-stop seal — record lack of real data vertical for remaining states
c4d6332 docs(gate5.5): honest-stop seal — record production integration limits for remaining states
ada7c66 docs(gate5.4): final traceability seal — align UI-STP-001 and UI-STP-005 with Gate 5.4
8dd8367 docs(gate5.4): final consistency — align 08_STATES offline checklist with production integration
5bd0a64 docs(gate5.4): final polish — align offline indicator checklist and UI-STP-001 verification
d8ba0b6 docs(gate5.4): seal ADR-0006 with implementation record and production integration note
d5f0959 feat(gate5.4): integrate OfflineBanner in AppLayout via real navigator.onLine (UI-STP-005)
90ce8c6 docs(gate5.3): seal docs drift — ADR-0006 implementation record + UI-kit README + UI-STP-009 verification
415e273 docs(gate5.3): audit seal — SSOT notes + ADR-0006 implementation record + evidence path canon
32a6a54 docs(gate5.3): SSOT closure — traceability_matrix UI-STP-001..009 implementation notes
cf61361 test(gate5.3): Playwright ui-kit snapshots — 10 PNGs for 5-state evidence
c0481ad feat(gate5.3): /ui-kit deterministic route for 5-state evidence
fc42f22 feat(gate5.3): 5-state feedback components + shimmer keyframe (ADR-0006)
4d6e910 docs(gate5): ADR-0004 final consistency (verification label, route example, approval wording)
3bf9925 docs(gate5): ADR-0004 editorial polish (verification label + route example)
2ebe8d1 docs(gate5): seal ADR-0004 record consistency (align files + CTA rationale)
aa00c97 docs(gate5): audit-proof ADR-0004 implementation record (verify/remove unverified commits)
6d22850 docs(gate5): sync SSOT with implementation — update UI-LAY-001 + ADR-0004 implementation record
7c99df4 docs(gate5): add runner hygiene guide — minimize Bypass, standardize commands
6cf97d6 test+docs(gate5): seal 404 drift — update UI-NAV-008, rename notfound smoke, assert AppLayout+copy+CTAs
34755fe refactor(gate5): extract SmartDock into independent component file
7bb2c42 feat(gate5): add AppLayout 404 catch-all (ADR-0004) + update notfound smoke
1adef72 test(gate5): document empty-wrapper edge case + data-app-ready migration path
54e2112 test(gate5): dual-wait React mount pattern — diagnose bypass failures (no UI changes)
574e2c9 test(gate5): harden listener cleanup + route-independent wait (no UI changes)
652ef3e test(gate5): harden SSOT LG side-rail assertion selector (expected-fail until implemented)
10e49e5 test(gate5): align breakpoint smoke to SSOT UI-LAY-004 (no UI changes)
23e3932 test(gate5): align breakpoint smoke with SSOT UI-LAY-004 + fix baseline README counts
771d0bc test(gate5): add breakpoint smoke across viewports + golden hashes (no UI changes)
1fc13bb feat(gate5): activate breakpoints — xs=360 sm=480 keep sm640 + recapture golden(Completo)
a2a7aa9 test(gate5): harden smoke tests — fail on pageerror/console.error (no UI changes)
ad0841c chore(gate5): baseline sanity — minimal tailwind diff, build green, robust smoke pre404
2f7278f feat(gate5): prep breakpoints — add sm640 alias and rename sm->sm640 (no behavior change)
9e0c0d6 chore(gate5): harden Playwright harness (outputPath, pnpm docs, stable assertions)
ccc559f chore(gate5): add minimal Playwright E2E harness (no UI changes)
a682e9f docs(gate5): hygiene — align mermaid flow, harden pre-404 smoke test, mark grep optional
22b0f21 docs(gate5): plan consistency — split Playwright infra/tests, align UI-kit verification wording
e9849fa docs(gate5): review improvements — Playwright prerequisite step, component isolation guidance
f226d35 docs(gate5): drift seal — unify screenshot method, align 360px S4, anchor perf to CWV
f3f5fce docs(gate5): setup evidence harness + implementation plan (no UI changes)
09e18d5 docs(gate4): review refinements — GAP/OK semantics note, Success minimum in table, CTA guard caveat
0662e62 docs(gate4): hygiene patch — normalize GAP(DECIDED) to OK, clarify Success, decouple router ref
52a6c71 docs(gate4): consistency fix — align headers, import map ADR-0007, states checklist
```

---

## 2. Manifest canónico

### docs-ui/ (25 archivos)

```
docs-ui/00_UI_CONTRACT.md
docs-ui/01_TOKENS.md
docs-ui/02_COMPONENTS.md
docs-ui/03_LAYOUTS.md
docs-ui/04_NAVIGATION.md
docs-ui/05_PATTERNS.md
docs-ui/06_CONTENT_STYLE.md
docs-ui/07_A11Y.md
docs-ui/08_STATES_OFFLINE_PERF.md
docs-ui/09_GOVERNANCE.md
docs-ui/PACK_VERSION.md
docs-ui/README.md
docs-ui/epoch1_inventory.md
docs-ui/golden_screens.md
docs-ui/traceability_matrix.md
docs-ui/_gate2/conflicts_log.md
docs-ui/_gate2/extraction_notes.md
docs-ui/_gate2/gaps_log.md
docs-ui/_gate2/source_map.md
docs-ui/_gate2/validation_report.md
docs-ui/_gate4/decision_import_map.md
docs-ui/_gate5/gate5.6_evaluation_report.md
docs-ui/_gate5/gate5_5_evaluation.md
docs-ui/_gate5/implementation_plan.md
docs-ui/_gate5/runner_hygiene_windows.md
```

### adr-ui/ (9 archivos)

```
adr-ui/README.md
adr-ui/ADR-0000-template.md
adr-ui/ADR-0001-ssot-ui-docs.md
adr-ui/ADR-0002-data-module-atmosferas.md
adr-ui/ADR-0003-breakpoints-oficiales-vs-tailwind.md
adr-ui/ADR-0004-diseno-404.md
adr-ui/ADR-0005-dark-mode-especificacion-minima.md
adr-ui/ADR-0006-estados-por-pantalla.md
adr-ui/ADR-0007-tipografia-decision.md
```

### tests/visual/baseline/ (16 archivos)

```
tests/visual/baseline/01_onboarding_splash0_desktop.png
tests/visual/baseline/02_onboarding_splash1_desktop.png
tests/visual/baseline/03_onboarding_splash2_desktop.png
tests/visual/baseline/04_onboarding_step1_desktop.png
tests/visual/baseline/05_onboarding_step2_desktop.png
tests/visual/baseline/06_onboarding_step3_desktop.png
tests/visual/baseline/07_onboarding_step5_desktop.png
tests/visual/baseline/08_dashboard_desktop.png
tests/visual/baseline/09_onboarding_splash0_mobile.png
tests/visual/baseline/10_onboarding_splash1_mobile.png
tests/visual/baseline/11_onboarding_splash2_mobile.png
tests/visual/baseline/12_dashboard_mobile.png
tests/visual/baseline/13_profile_overview_mobile.png
tests/visual/baseline/14_profile_verification_mobile.png
tests/visual/baseline/15_profile_settings_mobile.png
tests/visual/baseline/README.md
```

### webapp/tests/visual/ui-kit/ (11 archivos)

```
webapp/tests/visual/ui-kit/README.md
webapp/tests/visual/ui-kit/UI-STP-001_success_desktop.png
webapp/tests/visual/ui-kit/UI-STP-001_success_mobile.png
webapp/tests/visual/ui-kit/UI-STP-002_loading_desktop.png
webapp/tests/visual/ui-kit/UI-STP-002_loading_mobile.png
webapp/tests/visual/ui-kit/UI-STP-003_empty_desktop.png
webapp/tests/visual/ui-kit/UI-STP-003_empty_mobile.png
webapp/tests/visual/ui-kit/UI-STP-004_error_desktop.png
webapp/tests/visual/ui-kit/UI-STP-004_error_mobile.png
webapp/tests/visual/ui-kit/UI-STP-005_offline_desktop.png
webapp/tests/visual/ui-kit/UI-STP-005_offline_mobile.png
```

### webapp/tests/e2e/ (7 archivos)

```
webapp/tests/e2e/README.md
webapp/tests/e2e/integration.5state.spec.ts
webapp/tests/e2e/integration.reports.spec.ts
webapp/tests/e2e/smoke.breakpoints.spec.ts
webapp/tests/e2e/smoke.home.spec.ts
webapp/tests/e2e/smoke.notfound.spec.ts
webapp/tests/e2e/ui-kit.states.spec.ts
```

---

## 3. Contenido completo de archivos (comprimido por secciones)

> Los contenidos completos de los 26 archivos docs-ui/ + adr-ui/ solicitados se incluyen en las secciones 3.A y 3.B a continuación. Se pegan tal cual — sin truncar, sin resumir.


### 3.A — docs-ui/ files


---

#### FILE: `docs-ui/README.md`

```markdown
# ðŸ“ CIVICUM â€” UI Architecture Pack

**Branch de origen:** `ui-architecture-foundation`
**Ãšltima actualizaciÃ³n:** 2026-02-24

---

## ðŸ”’ SSOT (Single Source of Truth)

> **La Ãºnica fuente normativa de UI para CIVICUM es `/docs-ui/*` + decisiones formalizadas en `/adr-ui/*`.**

Todo componente, token, patrÃ³n de navegaciÃ³n, contrato de layout o regla de accesibilidad que se aplique en cÃ³digo **debe** estar respaldado por un documento dentro de este directorio o por un ADR aceptado.

## âš ï¸ No-SSOT

> **Cualquier otra referencia en el repo o en documentos externos es histÃ³rica o inspiracional, no normativa**, salvo que estÃ© **citada e incorporada explÃ­citamente** en `/docs-ui` o en un ADR dentro de `/adr-ui`.

Esto incluye:
- Documentos en `/docs/knowledge-base/` (son fuente de investigaciÃ³n, no especificaciones ejecutables)
- Documentos en `/docs/ux/` (fuente vÃ¡lida de diseÃ±o/copy para extracciÃ³n en Gate 2; no normativa hasta importarse vÃ­a ADR o al pack)
- Conversaciones previas de desarrollo (contexto, no norma)
- Mockups o wireframes no formalizados

Si un patrÃ³n o decisiÃ³n de esos documentos debe ser normativo, **debe importarse** formalmente mediante un ADR o incorporarse en el archivo correspondiente de este pack (00â€“09).

## ðŸ“š Fuentes Permitidas para ExtracciÃ³n (Gate 2)

Las siguientes fuentes del repo son **material legÃ­timo** del cual extraer reglas, tokens, patrones y restricciones para importar a `/docs-ui/`:

| Fuente | UbicaciÃ³n | Tipo de contenido |
|--------|-----------|-------------------|
| UX / Copywriting | `/docs/ux/` | Tono Terracota, microcopy, reglas de redacciÃ³n |
| Knowledge Base | `/docs/knowledge-base/` | Design System, mÃ³dulos MVP, arquitectura tÃ©cnica, decisiones F-01â€“F-47, identidad de marca |
| Master Plan | `/docs/roadmap/CIVICUM_ULTIMATE_MASTER_PLAN.md` | Ã‰pocas, mÃ³dulos, requisitos de performance y a11y |
| Anexos TÃ©cnicos | `/docs/knowledge-base/CIVICUM_Anexo_Arquitectura_Tecnica_Completa.docx.md` | Stack, offline tiers, breakpoints, auth levels |
| Anexos Legales | `/docs/legal/` | Disclaimers, tÃ©rminos de servicio, compliance |
| Governance | `/docs/governance/` | Anti-dark-patterns, coherencia de marca, Ã©tica |

> [!IMPORTANT]
> Estas fuentes **no son normativas hasta ser importadas** en un archivo del pack (`/docs-ui/00â€“09`) o formalizadas en un ADR (`/adr-ui/`). La extracciÃ³n debe citar siempre el DOCREF de origen.

---

## ðŸ“¦ Mapa del UI Architecture Pack

| # | Archivo | PropÃ³sito |
|---|---------|-----------|
| 00 | [00_UI_CONTRACT.md](./00_UI_CONTRACT.md) | Contrato maestro de UI: quÃ© garantiza la app al usuario y al dev |
| 01 | [01_TOKENS.md](./01_TOKENS.md) | Design tokens: colores, tipografÃ­a, espaciado, sombras, radios |
| 02 | [02_COMPONENTS.md](./02_COMPONENTS.md) | CatÃ¡logo de componentes UI: inventario, variantes, API pÃºblica |
| 03 | [03_LAYOUTS.md](./03_LAYOUTS.md) | Layouts y grids: AppShell, breakpoints, zonas de contenido |
| 04 | [04_NAVIGATION.md](./04_NAVIGATION.md) | Sistema de navegaciÃ³n: rutas, Smart Dock, deep links, guards |
| 05 | [05_PATTERNS.md](./05_PATTERNS.md) | Patrones de UI recurrentes: formularios, cards, modales, listas |
| 06 | [06_CONTENT_STYLE.md](./06_CONTENT_STYLE.md) | GuÃ­a de contenido y microcopy: tono, placeholders, errores |
| 07 | [07_A11Y.md](./07_A11Y.md) | Accesibilidad: WCAG 2.1 AA, ARIA, focus, contraste, motion |
| 08 | [08_STATES_OFFLINE_PERF.md](./08_STATES_OFFLINE_PERF.md) | Estados de UI (loading/empty/error), offline y performance |
| 09 | [09_GOVERNANCE.md](./09_GOVERNANCE.md) | Gobernanza UI: proceso de cambio, roles, auditorÃ­a |

## ðŸ§© Artefactos Transversales (SSOT auxiliares)

| Artefacto | UbicaciÃ³n | PropÃ³sito |
|-----------|-----------|----------|
| `golden_screens.md` | `/docs-ui/` | Registro canÃ³nico de pantallas golden (ADR-gated) |
| `epoch1_inventory.md` | `/docs-ui/` | Baseline funcional/documental (Ã‰poca 1, no normativo) |
| `traceability_matrix.md` | `/docs-ui/` | Matriz DOCREF â€” se crea en Gate 2 |
| `PACK_VERSION.md` | `/docs-ui/` | Versionado SemVer del pack 00â€“09 |
| `tests/visual/baseline/` | `/tests/` | Evidencia visual de pantallas golden |
| `tests/visual/ui-kit/` | `/tests/` | Evidencia visual de variantes de componentes (UI Kit) |

> [!NOTE]
> Si un cambio afecta a cualquiera de estos artefactos, debe actualizarse la trazabilidad (y aplicar ADR cuando corresponda: golden list / herramienta de evidencia).

---

## ðŸ”„ Proceso de Cambio

> **No se introduce patrÃ³n, token ni regla de navegaciÃ³n nueva sin un ADR aceptado.**

1. **Proponer:** Crear un ADR en `/adr-ui/` usando la plantilla `ADR-0000-template.md`
2. **Revisar:** El ADR debe incluir contexto, decisiÃ³n, alternativas y consecuencias
3. **Aceptar:** El ADR se marca como `Aceptado` tras revisiÃ³n del responsable de UI (ver `09_GOVERNANCE.md` â€” Modo Solo Dev)
4. **Implementar:** Solo despuÃ©s de aceptaciÃ³n se modifica cÃ³digo
5. **Verificar:** El cambio debe reflejarse en el archivo correspondiente del pack (00â€“09) y en `traceability_matrix.md` (cuando exista)

---

## âœ… DefiniciÃ³n de "Done UI" (nivel mÃ­nimo)

### Done UI â€” Pantallas (Views)

- [ ] **AppShell:** Renderiza correctamente dentro de `AppLayout` (o layout standalone **solo si estÃ¡ explÃ­citamente definido en `03_LAYOUTS` y referenciado en `04_NAVIGATION`**)
- [ ] **Tokens:** Usa exclusivamente tokens del Design System Terracota (sin colores hardcodeados)
- [ ] **Estados:** Implementa al menos: normal, loading (skeleton/spinner), empty (con CTA), error (con retry)
- [ ] **Accesibilidad mÃ­nima:** Contraste AA (4.5:1 texto, 3:1 UI), focus-visible, labels ARIA en interactivos
- [ ] **Visual baseline:** Screenshot desktop + mobile solo si la pantalla estÃ¡ en [`golden_screens.md`](./golden_screens.md) y su **Estado = Completo** (ver regla #6)
- [ ] **Dark mode:** Responde a la fuente de tema definida en el sistema (ver `01_TOKENS` / `03_LAYOUTS`)
- [ ] **Responsive:** Cumple los breakpoints definidos en `03_LAYOUTS` (mÃ­nimo mÃ³vil y desktop) sin overflow horizontal

### Done UI â€” Componentes (UI Kit)

- [ ] **Tokens:** Usa exclusivamente tokens del Design System Terracota
- [ ] **Estados:** Implementa estados relevantes (disabled, loading, error) si aplica al componente
- [ ] **Accesibilidad mÃ­nima:** Contraste AA, focus-visible, labels ARIA
- [ ] **Evidencia:** Storybook/Playground `/ui-kit` + screenshots generados vÃ­a Playwright en `tests/visual/ui-kit/`; cambiar herramienta requiere ADR aceptado

## ðŸ“˜ Glosario Operativo

| TÃ©rmino | DefiniciÃ³n |
|---------|------------|
| **AppLayout** | Layout principal de la app: estructura global que contiene header, main y Smart Dock |
| **AppShell** | "CascarÃ³n" visual y navegacional dentro del AppLayout (top nav, dock, zonas de contenido) |
| **Standalone Layout** | Layout alternativo permitido **solo** si estÃ¡ definido en `03_LAYOUTS` y referenciado en `04_NAVIGATION` |
| **Golden Screen** | Pantalla crÃ­tica para regresiÃ³n visual, registrada en `golden_screens.md` |
| **Step Key** | ID canÃ³nico e inmutable de una pantalla dentro de un flujo (ej.: `splash0`, `dashboard`) |
| **DOCREF** | Referencia verificable a fuente original: ruta + secciÃ³n + cita corta |
| **Done UI** | Criterio mÃ­nimo de completitud para pantallas o componentes (definido arriba) |

---

## ðŸ“Ž Referencia: Baseline de Ã‰poca 1

- **Inventario completo:** [epoch1_inventory.md](./epoch1_inventory.md)
- **Screenshots baseline:** [`tests/visual/baseline/`](../tests/visual/baseline/) (15 capturas: 8 desktop + 7 mobile)

> [!NOTE]
> Ã‰poca 1 es **baseline documentado**; no implica aprobaciÃ³n final de UI. Los GAPs identificados en el inventario (Â§9) son deuda tÃ©cnica reconocida que se abordarÃ¡ en gates posteriores.

```


---

#### FILE: `docs-ui/00_UI_CONTRACT.md`

```markdown
# 00 â€” Contrato Maestro de UI

**PropÃ³sito:** Define las garantÃ­as que la interfaz de CIVICUM ofrece al usuario final y al equipo de desarrollo. Es el "contrato social" visual: quÃ© puede esperar un ciudadano al abrir la app, y quÃ© debe cumplir un developer al entregar una pantalla.

## Decisiones que debe contener

- [ ] Principios de diseÃ±o (mÃ¡x 5) con prioridad explÃ­cita
- [ ] Promesas al usuario: velocidad percibida, accesibilidad, consistencia, offline
- [ ] Restricciones de UI (ej.: "nunca infinite scroll", "nunca colores partidistas")
- [ ] DefiniciÃ³n de "calidad visual mÃ­nima" por tier de dispositivo (HIGH/MID/LOW)
- [ ] SLA visual: tiempos mÃ¡ximos aceptables de renderizado por componente

## Evidencia exigida en Gate 4

> Toda regla debe tener DOCREF (referencia a documento fuente en `/docs/`) o ADR en `/adr-ui/`.

---

<!-- TODO: Completar con reglas extraÃ­das de docs/knowledge-base/ y decisiones F-01 a F-47 -->

## Reglas consolidadas (Gate 4)

### Dark mode (ADR-0005)

Dark mode **no es bloqueante** para Ã‰poca 1â€“2; se pospone a Ã‰poca 3+ con spec mÃ­nima. Requisitos cuando se implemente:

1. Tokens semÃ¡nticos `--color-*` (no valores duros)
2. ActivaciÃ³n vÃ­a clase CSS (`.dark`)
3. Contraste WCAG AA en ambos modos

> **DOCREF:** ADR-0005 (ACCEPTED) + S01 â†’ Done UI â†’ "Dark mode" (L82)

---

## TODO

- Extraer principios de `CIVICUM_Identidad_de_Marca_Propuesta_Mision_Vision_Manifiesto.md`
- Importar restricciones de `CIVICUM_Anexo_Decisiones_F01_F47` (F-05: sin algoritmos, F-08: badges opcionales, etc.)
- Definir SLA visual basado en `docs/performance/` y Core Web Vitals del Master Plan


```


---

#### FILE: `docs-ui/01_TOKENS.md`

```markdown
# 01 â€” Design Tokens

**PropÃ³sito:** Centraliza todas las variables de diseÃ±o visual de CIVICUM: colores, tipografÃ­a, espaciado, sombras, radios y breakpoints. Son los "Ã¡tomos" del Design System Terracota â€” todo CSS custom property o clase Tailwind extendida debe originarse aquÃ­.

## Decisiones que debe contener

- [ ] Paleta Terracota completa: 5 escalas cromÃ¡ticas Ã— 10 tonos (50â€“900) + semÃ¡nticos
- [ ] TipografÃ­a: familias (Nunito Sans, IBM Plex Sans, IBM Plex Mono), escala, pesos
- [ ] Espaciado: escala base (4px grid vs 8px grid), mÃ¡rgenes y paddings estÃ¡ndar
- [ ] Sombras: niveles (sm, md, lg, xl, 2xl) con valores exactos
- [ ] Radios: escala (sm, md, lg, xl, 2xl, full)
- [ ] Breakpoints: valores exactos y nombres (xs, sm, md, lg, xl, 2xl)
- [ ] Animaciones: durations, easings, motion tokens
- [ ] Dark mode: mapeo token-por-token de light â†’ dark

## Evidencia exigida en Gate 4

> Toda regla debe tener DOCREF (ej.: `docs/knowledge-base/CIVICUM_Anexo_Design_System_Terracota.docx.md Â§1-2`) o ADR.

## Reglas consolidadas (Gate 4)

### TipografÃ­a (ADR-0007)

Migrar de Inter (Ã‰poca 1) a la tipografÃ­a de la spec:

| Familia | Rol | DOCREF |
|---------|-----|--------|
| **Nunito Sans** | Headings, UI labels, botones | S01 â†’ Â§3.1 (L394) |
| **IBM Plex Sans** | Body, contenido largo | S01 â†’ Â§3.1 (L396) |
| **IBM Plex Mono** | Datos, cÃ³digos, tablas numÃ©ricas | S01 â†’ Â§3.1 (L396) |

**Tier system** (DOCREF: S01 â†’ Â§3.3):
- **HIGH:** 3 familias completas (~120KB estimado)
- **MEDIUM:** Nunito Sans + IBM Plex Sans (sin Mono)
- **LOW:** `system-ui` fallback

**VerificaciÃ³n:** Peso total de fonts en tier HIGH debe validarse contra presupuesto critical pack (UI-STP-008: â‰¤800KB) en Gate 5+ con build + Lighthouse.

> **DOCREF:** ADR-0007 (ACCEPTED) + S01 â†’ Â§3.1 (L394â€“396), Â§3.3

---

## TODO

- Extraer tokens de `CIVICUM_Anexo_Design_System_Terracota.docx.md`
- Cruzar con `tailwind.config.ts` actual para detectar drift
- Documentar mapeo dark mode (actualmente parcial segÃºn epoch1_inventory.md G4/G7)


```


---

#### FILE: `docs-ui/02_COMPONENTS.md`

```markdown
# 02 â€” CatÃ¡logo de Componentes UI

**PropÃ³sito:** Inventario autoritativo de todos los componentes UI de CIVICUM: quÃ© existe, quÃ© variantes tiene, quÃ© API pÃºblica expone, y cuÃ¡les faltan. Funciona como el "catÃ¡logo de piezas" del sistema de diseÃ±o.

## Decisiones que debe contener

- [ ] Lista de componentes instalados (shadcn/ui + custom) con variantes
- [ ] API pÃºblica de cada componente: props obligatorias, opcionales, y defaults
- [ ] Reglas de composiciÃ³n: quÃ© componentes pueden anidarse y cÃ³mo
- [ ] Componentes pendientes de instalaciÃ³n (gap vs catÃ¡logo del Master Plan)
- [ ] IconografÃ­a: catÃ¡logo de Ã­conos Lucide utilizados + convenciones (stroke, size)
- [ ] Componente `CivicumLogo`: variantes, tamaÃ±os y reglas de uso

## Evidencia exigida en Gate 4

> Todo componente listado debe tener correspondencia 1:1 con un archivo en `src/components/ui/` o `src/components/`.
>
> **UbicaciÃ³n del UI Kit:** Storybook (preferido) o una ruta interna `/ui-kit` si Storybook no estÃ¡ disponible (= no ejecuta localmente o no ejecuta en CI). La ubicaciÃ³n elegida debe documentarse aquÃ­ al implementarse.
>
> **UI Kit activo (elegido):** `TBD` â€” se define al implementar en Gate 5+. Reemplazar `TBD` por `Storybook` o `/ui-kit` cuando se elija.
>
> **Variantes:** Deben estar demostradas en Storybook, Playground o pÃ¡gina interna `/ui-kit` con screenshots generados vÃ­a Playwright en `tests/visual/ui-kit/`. Cambiar herramienta requiere ADR aceptado.
>
> **Baseline visual (`tests/visual/baseline/`):** Reservado para pantallas golden completas (como las de Ã‰poca 1). No se usa para demostrar variantes individuales de componentes.

---

## TODO

- Importar lista de componentes instalados desde `epoch1_inventory.md Â§4`
- Cruzar con catÃ¡logo requerido del Master Plan (Â§Semana 2)
- Documentar API de cada componente shadcn/ui en uso

```


---

#### FILE: `docs-ui/03_LAYOUTS.md`

```markdown
# 03 â€” Layouts y Grids

**PropÃ³sito:** Documenta la arquitectura de layouts de CIVICUM: el AppShell, los breakpoints responsivos, las zonas de contenido, y cÃ³mo se distribuyen header, main y Smart Dock en cada viewport. Es el plano arquitectÃ³nico de la "carcasa" visual.

## Decisiones que debe contener

- [ ] Estructura del AppShell: header + main + bottom dock (con medidas exactas)
- [ ] Breakpoints activos y comportamiento por viewport (mobile/tablet/desktop)
- [ ] Zonas de contenido: max-width, padding, margins por breakpoint
- [ ] Layout standalone: reglas para pantallas fuera de AppLayout (ej.: Onboarding)
- [ ] Grid system: columnas, gaps, auto-fit vs auto-fill
- [ ] Reglas de scroll: overflow, sticky elements, z-index stack

## Evidencia exigida en Gate 4

> Cada layout definido debe tener screenshots de baseline en al menos 2 viewports (mobile 390px + desktop 1440px). Todo valor numÃ©rico debe ser verificable contra el cÃ³digo en `AppLayout.tsx`.

## Reglas consolidadas (Gate 4)

### Breakpoints oficiales (ADR-0003 â€” OpciÃ³n B, elegida por Daniel)

Se aprueba alinear Tailwind con breakpoints S01. **Breaking change:** `sm` pasa de 640px a 480px.

```js
screens: {
  'xs': '360px',    // NUEVO â€” Android Go, mÃ³viles bÃ¡sicos
  'sm': '480px',    // OVERRIDE â€” mÃ³viles medianos (era 640px)
  'sm640': '640px', // ALIAS TEMPORAL â€” migraciÃ³n de usos existentes
  'md': '768px',    // SIN CAMBIO
  'lg': '1024px',   // SIN CAMBIO
  'xl': '1280px',   // SIN CAMBIO
  '2xl': '1536px',  // SIN CAMBIO
}
```

- MigraciÃ³n: renombrar usos actuales `sm:` â†’ `sm640:` durante implementaciÃ³n (estimaciÃ³n ~1 archivo)
- Una vez migrados, eliminar alias `sm640` en Ã‰poca 2+

> **DOCREF:** ADR-0003 (ACCEPTED, OpciÃ³n B) + S01 â†’ Â§6.1 (L618), Â§6.2 (L629)

### `data-module` â€” seÃ±al canÃ³nica de mÃ³dulo (ADR-0002)

Cada mÃ³dulo CIVICUM usa `data-module` en su contenedor raÃ­z para activar `--module-accent` y `--module-bg`.

**Valores permitidos** (DOCREF: S01 â†’ Â§2.7, L351-371):
`mi-civicum`, `academia`, `civia`, `alza-la-voz`, `cuentas-claras`, `voto-ciudadano`

**Gobernanza:**
- `unknown` = tokens default (sin acento por mÃ³dulo). No activa atmÃ³sferas.
- No se inventan valores `data-module` sin DOCREF. Rutas no-S01 usan `unknown` o requieren ADR.

> **DOCREF:** ADR-0002 (ACCEPTED) + S01 â†’ Â§2.7 (L355), Â§9.3 (L1152)

---

## TODO

- Documentar medidas de `AppLayout.tsx` (header h-16, dock h-16, main max-w-7xl)
- Definir z-index stack formal (header z-50, dock z-50, modales, toasts)
- Documentar layout standalone del Onboarding (fullscreen, sin AppLayout)


```


---

#### FILE: `docs-ui/04_NAVIGATION.md`

```markdown
# 04 â€” Sistema de NavegaciÃ³n

**PropÃ³sito:** Define todas las rutas, transiciones, guards y la lÃ³gica de navegaciÃ³n de CIVICUM. Incluye el mapa completo de URLs, el comportamiento del Smart Dock, deep links, y las reglas de protecciÃ³n de rutas.

## Decisiones que debe contener

- [ ] Mapa completo de rutas con jerarquÃ­a (pÃºblicas vs protegidas)
- [ ] LÃ³gica de guards: quÃ© protege cada ruta y bajo quÃ© criterio
- [ ] Smart Dock: tabs, iconos, labels, badges, comportamiento activo/inactivo
- [ ] Desktop nav: links, orden, estados hover/active
- [ ] Transiciones entre rutas: animaciones, preservaciÃ³n de scroll
- [ ] Deep links y share URLs: formato y comportamiento
- [ ] Ruta 404: diseÃ±o y comportamiento
- [ ] Back navigation: reglas de "AtrÃ¡s" (especialmente Onboarding â†’ Splash)

## Evidencia exigida en Gate 4

> Toda ruta definida debe existir en el router entrypoint del proyecto (archivo donde se declara el router). Todo guard debe tener test E2E. El mapa de navegaciÃ³n debe coincidir con el de `epoch1_inventory.md Â§7`.

## Reglas consolidadas (Gate 4)

### Pantalla 404 (ADR-0004)

**Scope:** Solo para rutas dentro de AppLayout (Smart Dock visible). 404 para flujos standalone/onboarding queda fuera de scope (requiere ADR separado).

**Requisitos:**
1. Ruta catch-all (`path="*"`) en el router
2. Logo CIVICUM centrado
3. Copy aprobado: "Esta pÃ¡gina no existe â€” pero tu camino cÃ­vico sÃ­." + "QuizÃ¡s la direcciÃ³n cambiÃ³ o escribiste algo distinto."
4. CTA primario: ir al Dashboard. CTA secundario: explorar mÃ³dulos. *(Nota: validar en Gate 5+ que "explorar mÃ³dulos" sea accesible sin login; si requiere auth, usar guard o redirect.)*
5. Smart Dock permanece visible (no standalone layout)
6. 404 **no es golden por defecto**; se agrega a `golden_screens.md` solo vÃ­a ADR explÃ­cito.

> **DOCREF:** ADR-0004 (ACCEPTED) + UI-NAV-008 + S01 â†’ Â§15.1 (L1500), Â§15.4 (L1532)

---

## TODO

- Importar mapa de rutas de `epoch1_inventory.md Â§1 + Â§7`
- Formalizar inconsistencia de labels detectada en G8 (Smart Dock "Reportar" vs Nav "Alza la Voz")
- ~~Definir ruta 404 (GAP G1 del inventario)~~ â†’ Resuelto por ADR-0004
- Documentar cambio atmosfÃ©rico `data-module` requerido por UI/UX Â§2.7 (GAP G9)


```


---

#### FILE: `docs-ui/08_STATES_OFFLINE_PERF.md`

```markdown
# 08 â€” Estados de UI, Offline y Performance

**PropÃ³sito:** Define cÃ³mo se comporta la interfaz bajo condiciones no-ideales: estados de carga, vacÃ­o, error, y modo offline. TambiÃ©n establece los presupuestos de rendimiento visual (bundle size, FCP, LCP, CLS) por tier de dispositivo.

## Decisiones que debe contener

- [x] Estados obligatorios por pantalla: loading, empty, error, offline, success (5-state pattern â€” ADR-0006)
- [x] Success requerido (mÃ­nimo): checkmark + texto confirmatorio + siguiente paso (DOCREF: S01 â†’ Â§12, L1361)
- [ ] Mapping de Success por pantalla (Gate 5+; depende del flujo)
- [ ] PatrÃ³n de skeleton loading: cuÃ¡ndo usar, estructura visual
- [ ] PatrÃ³n de error: mensajes segÃºn `soulful-copywriting`, botÃ³n retry, fallback
- [ ] PatrÃ³n empty state: ilustraciÃ³n (opcional), mensaje empÃ¡tico, CTA de acciÃ³n
- [ ] Offline: 3 tiers (HIGH/MEDIUM/LOW), quÃ© se muestra offline por tier
- [x] Indicador de conectividad: OfflineBanner integrado en producciÃ³n vÃ­a AppLayout (Gate 5.4)
- [ ] Performance budgets: FCP, LCP, TTI, CLS por tier (HIGH/MID/LOW)
- [ ] Bundle size: < 800KB gzip total, presupuesto por chunk
- [ ] Font loading: estrategia por tier (HIGH: web fonts, LOW: system-ui)

## Evidencia exigida en Gate 4

> Toda pantalla debe demostrar sus 5 estados (loading, empty, error, offline, success) en tests o screenshots. Loading se demuestra en UI-kit Playwright. Empty se incluye en golden screenshots solo si es estado estable y la pantalla estÃ¡ en Estado=Completo. Error, Offline y Success se verifican vÃ­a E2E Playwright. Performance budgets deben tener mediciÃ³n con Lighthouse CI.

## Reglas consolidadas (Gate 4)

### 5-state pattern obligatorio (ADR-0006)

Toda pantalla CIVICUM debe manejar 5 estados:

| Estado | Componente | VerificaciÃ³n |
|--------|-----------|-------------|
| **Loading** | Skeleton shimmer (UI-STP-002) | UI-kit Playwright |
| **Empty** | IlustraciÃ³n + CTA por mÃ³dulo (UI-STP-003) | Golden screenshots (solo si es estado estable de golden screen) |
| **Error** | Toast Terracota + retry (UI-STP-004) | E2E Playwright |
| **Offline** | Banner NO alarma + Tier LOW (UI-STP-005) | E2E Playwright (evidencia en producciÃ³n vÃ­a AppLayout; ver `traceability_matrix.md`) |
| **Success** | MÃ­nimo segÃºn DOCREF (checkmark + texto + siguiente paso); variantes segÃºn contexto (S01 â†’ Â§12, L1361) | E2E Playwright |

**Performance:** Skeleton debe minimizar trabajo extra de JS; no debe introducir CLS. Se valida con Lighthouse en Gate 5+.

> **DOCREF:** ADR-0006 (ACCEPTED) + S01 â†’ Â§12 (L1356), Â§12.1 (L1357â€“1360), Â§12.3 (L1387)

---

## TODO

- Importar performance budgets del Master Plan (Â§Ã‰poca 4, Performance)
- Importar 3 tiers offline de `CIVICUM_Anexo_Arquitectura_Tecnica_Completa.docx.md Â§1.2.4`
- ~~Documentar GAPs actuales: G2 (sin error en geolocation), G4/G7 (sin dark mode en Dashboard/Layout)~~ â†’ Dark mode resuelto por ADR-0005
- Definir skeleton patterns para Dashboard y Perfil
- ~~Indicador de conectividad: banner, toast, o badge~~ â†’ Gate 5.4 integrÃ³ `OfflineBanner` en producciÃ³n vÃ­a `AppLayout`; ver `traceability_matrix.md` UI-STP-005.


```


---

#### FILE: `docs-ui/09_GOVERNANCE.md`

```markdown
# 09 â€” Gobernanza UI

**PropÃ³sito:** Define quiÃ©n puede cambiar quÃ© en la UI, cÃ³mo se aprueba, y cÃ³mo se audita. Es el "reglamento interno" del sistema de diseÃ±o. Garantiza que ningÃºn cambio visual pase sin revisiÃ³n, y que toda decisiÃ³n sea trazable.

## Decisiones que debe contener

- [x] Roles: quiÃ©n propone, quiÃ©n revisa, quiÃ©n aprueba cambios de UI (ver tabla + Â§Modo Solo Dev)

| Rol | Responsabilidad | En modo Solo Dev |
|-----|-----------------|------------------|
| **Autor (Proponente)** | Crea el ADR con contexto, decisiÃ³n, alternativas | El desarrollador |
| **Revisor** | Valida contra checklist de aceptaciÃ³n (4 puntos) | El mismo desarrollador |
| **Aprobador** | Marca `Aceptado` + fecha en el ADR | El mismo desarrollador |
- [x] Proceso ADR: flujo completo (ver `docs-ui/README.md` â€” Proceso de Cambio)
- [x] Frecuencia de auditorÃ­a: al cierre de cada gate se verifica que cÃ³digo â†” docs estÃ©n sincronizados
- [x] Criterio de "Done UI": checklist completa (definido en `docs-ui/README.md` â€” DefiniciÃ³n de Done UI)
- [x] Gates de calidad: quÃ© verifica cada gate (ver Â§Gates abajo)
- [x] DeprecaciÃ³n de componentes: marcar como `@deprecated` en 02_COMPONENTS + ADR que justifique remociÃ³n; no se elimina archivo hasta gate posterior
- [x] Versionado del pack: SemVer adaptado (ver [`PACK_VERSION.md`](../docs-ui/PACK_VERSION.md))
- [x] Escalamiento: si hay conflicto entre documentos fuente, se crea un ADR de conflicto y se congela la implementaciÃ³n de UI relacionada hasta que el ADR se marque `Aceptado`

## Gates de Calidad UI (v1)

| Gate | Nombre | QuÃ© verifica |
|------|--------|--------------|
| **Gate 0** | Baseline / Inventario | Branch de control, inventario de rutas y componentes, screenshots golden |
| **Gate 1** | SSOT / ADR / Skeleton | DeclaraciÃ³n SSOT, sistema ADR, skeleton del pack 00â€“09 |
| **Gate 2** | ExtracciÃ³n Documental | Extrae reglas desde fuentes permitidas â†’ construye matriz de trazabilidad con DOCREF + conflicts/gaps. No completa 00â€“09 aÃºn |
| **Gate 3** | ResoluciÃ³n de Conflictos | Resuelve contradicciones entre fuentes mediante ADRs. Cada conflicto = 1 ADR |
| **Gate 4** | Pack Completo + AuditorÃ­a | Completa 00â€“09 con reglas + DOCREFs. AuditorÃ­a cÃ³digo â†” docs (0 drift) |
| **Gate 5+** | ImplementaciÃ³n + Retrofit | Aplica reglas del pack al cÃ³digo real. Tests. Visual regression |

## Evidencia exigida en Gate 4

> El proceso ADR debe estar demostrado con al menos 3 ADRs aceptados. La auditorÃ­a cÃ³digo â†” docs debe tener al menos 1 reporte ejecutado.

---

## Modo Solo Dev (1 desarrollador)

> **Autor propone ADR â†’ Autor revisa con checklist de aceptaciÃ³n â†’ AceptaciÃ³n registrada en el ADR con estado `Aceptado` + fecha.**

En un proyecto con un solo desarrollador, el autor cumple ambos roles (propuesta y revisiÃ³n). La checklist de revisiÃ³n es:
- [ ] Â¿El ADR cita DOCREF o justificaciÃ³n tÃ©cnica?
- [ ] Â¿Las alternativas son reales (no strawman)?
- [ ] Â¿Las consecuencias incluyen riesgos?
- [ ] Â¿No contradice ADRs anteriores aceptados?

Si los 4 puntos se cumplen, el ADR se marca `Aceptado`.

## TODO

- Importar reglas de `docs/governance/` relevantes para UI

```


---

#### FILE: `docs-ui/golden_screens.md`

```markdown
# ðŸ–¼ï¸ Golden Screens Registry

**PropÃ³sito:** Lista canÃ³nica de pantallas que requieren evidencia visual (idealmente desktop + mobile) en `tests/visual/baseline/`. Ã‰poca 1 contiene entradas parciales que deben cerrarse en Gate 5+. Cambios a esta lista requieren un ADR aceptado.

---

## Pantallas Golden â€” Ã‰poca 1

| # | Pantalla | Ruta | Step Key | CÃ³mo reproducir | Desktop | Mobile | Estado |
|---|----------|------|----------|-----------------|---------|--------|--------|
| 1 | Onboarding Splash 0 (Logo) | `/onboarding` | `splash0` | Limpiar localStorage â†’ abrir `/` | `01_onboarding_splash0_desktop.png` | `09_onboarding_splash0_mobile.png` | Completo |
| 2 | Onboarding Splash 1 (Anti-Pitch) | `/onboarding` | `splash1` | splash0 â†’ click "Descubrir" | `02_onboarding_splash1_desktop.png` | `10_onboarding_splash1_mobile.png` | Completo |
| 3 | Onboarding Splash 2 (Privacidad) | `/onboarding` | `splash2` | splash1 â†’ click "Continuar" | `03_onboarding_splash2_desktop.png` | `11_onboarding_splash2_mobile.png` | Completo |
| 4 | Onboarding Paso 1 (Pacto CÃ­vico) | `/onboarding` | `step1` | splash2 â†’ click "Siguiente" | `04_onboarding_step1_desktop.png` | â€” | Parcial |
| 5 | Onboarding Paso 2 (Territorio) | `/onboarding` | `step2` | step1 â†’ click "Acepto" | `05_onboarding_step2_desktop.png` | â€” | Parcial |
| 6 | Onboarding Paso 3 (Identidad) | `/onboarding` | `step3` | step2 â†’ seleccionar comuna â†’ "Siguiente" | `06_onboarding_step3_desktop.png` | â€” | Parcial |
| 7 | Onboarding Paso 4 (Elige tus Batallas) | `/onboarding` | `step4` | step3 â†’ click "Entendido" | â€” | â€” | Pendiente |
| 8 | Onboarding Paso 5 (Listo) | `/onboarding` | `step5` | step4 â†’ click "Siguiente" | `07_onboarding_step5_desktop.png` | â€” | Parcial |
| 9 | Dashboard (Pulso CÃ­vico) | `/` | `dashboard` | Completar onboarding â†’ redirect `/` | `08_dashboard_desktop.png` | `12_dashboard_mobile.png` | Completo |
| 10 | Perfil â€” Resumen | `/perfil` | `profile-overview` | Dashboard â†’ click "Mi Perfil" | â€” | `13_profile_overview_mobile.png` | Parcial |
| 11 | Perfil â€” VerificaciÃ³n | `/perfil` | `profile-verification` | Perfil â†’ tab "Estado de VerificaciÃ³n" | â€” | `14_profile_verification_mobile.png` | Parcial |
| 12 | Perfil â€” Ajustes | `/perfil` | `profile-settings` | Perfil â†’ tab "Ajustes App" | â€” | `15_profile_settings_mobile.png` | Parcial |

**Leyenda de Estado:**
- **Completo:** Screenshot desktop + mobile presentes
- **Parcial:** Falta uno de los dos viewports
- **Pendiente:** Sin screenshots

---

## Reglas

1. **Agregar una pantalla golden** requiere un ADR aceptado que justifique por quÃ© es crÃ­tica para regresiÃ³n visual.
2. **Remover una pantalla golden** requiere un ADR aceptado (no se pueden eliminar silenciosamente).
3. Los screenshots se almacenan en `tests/visual/baseline/` con el naming: `NN_nombre_viewport.png`.
4. **ConvenciÃ³n de naming:** `Step Key` es el ID canÃ³nico de cada pantalla (estable e inmutable). `NN_` es solo orden de sorting histÃ³rico â€” no se renumeran archivos al insertar pantallas nuevas. Pantallas nuevas reciben el siguiente `NN_` disponible.
5. Los screenshots de **componentes individuales** (UI Kit) van en `tests/visual/ui-kit/`, no aquÃ­.
6. **Una pantalla solo cuenta para "Done UI â†’ Visual baseline" cuando su Estado = Completo.**
7. **Completar viewport faltante (Parcial â†’ Completo):** cuando una pantalla existente estÃ¡ Parcial y se agrega el screenshot faltante (desktop o mobile), debe usar el **mismo `NN_`** y el **mismo basename** que el screenshot existente; solo cambia el sufijo de viewport (`_desktop` / `_mobile`). Esto NO cuenta como pantalla nueva y NO consume un `NN_` nuevo.

```


---

#### FILE: `docs-ui/PACK_VERSION.md`

```markdown
# ðŸ“¦ UI Architecture Pack â€” VersiÃ³n

**VersiÃ³n actual:** `0.1.0`
**Fecha:** 2026-02-24
**Gate activo:** Gate 1 (SSOT + ADR + Skeleton)

---

## PolÃ­tica de Versionado (SemVer adaptado)

| Tipo | CuÃ¡ndo incrementar | Archivos que lo disparan |
|------|-------------------|--------------------------|
| **MAJOR** (X.0.0) | Cambio que rompe comportamiento o expectativas de UI | `00_UI_CONTRACT`, `04_NAVIGATION` |
| **MINOR** (0.X.0) | Cambio que modifica el sistema sin romperlo | `01_TOKENS`, `02_COMPONENTS`, `03_LAYOUTS`, `05_PATTERNS`, `07_A11Y` |
| **PATCH** (0.0.X) | Aclaraciones, editoriales, ejemplos sin impacto normativo | `06_CONTENT_STYLE`, `08_STATES_OFFLINE_PERF`, `09_GOVERNANCE`, README, golden_screens |

## Reglas

1. Cada commit que modifique un archivo del pack (00â€“09) debe evaluar si requiere bump de versiÃ³n.
2. El bump se registra aquÃ­ (versiÃ³n + fecha + gate + descripciÃ³n breve).
3. Artefactos transversales (golden_screens, traceability_matrix) no disparan bump por sÃ­ solos, salvo que modifiquen reglas del pack.

## Historial

| VersiÃ³n | Fecha | Gate | DescripciÃ³n |
|---------|-------|------|-------------|
| `0.1.0` | 2026-02-24 | Gate 1 | Skeleton completo 00â€“09, SSOT declarado, ADR system, golden_screens, governance |

```


---

#### FILE: `docs-ui/epoch1_inventory.md`

```markdown
# ðŸ“‹ CIVICUM â€” Inventario UI Ã‰poca 1 (Auditable)

**Branch:** `ui-architecture-foundation`
**Fecha:** 2026-02-24
**Generado desde:** revisiÃ³n estÃ¡tica de cÃ³digo fuente (22 archivos `.ts/.tsx`)
**Criterio:** observaciÃ³n directa del cÃ³digo, sin suposiciones. Los Ã­tems no verificables se marcan `GAP:`.

---

## 1. Mapa de Rutas (Router)

Definidas en `webapp/src/main.tsx` usando `react-router-dom` v6 (`BrowserRouter` + `<Routes>`).

| # | Ruta | Vista | MÃ³dulo | Protegida | Componente |
|---|------|-------|--------|-----------|------------|
| 1 | `/onboarding` | OnboardingFlow | Mi CIVICUM | No (pÃºblica) | `OnboardingFlow.tsx` |
| 2 | `/` | Dashboard (Pulso CÃ­vico) | Mi CIVICUM | SÃ­ (`ProtectedRoute`) | `DashboardPage.tsx` |
| 3 | `/alza-la-voz` | Placeholder | Alza la Voz | SÃ­ | Inline `<div>` stub |
| 4 | `/circulos` | Placeholder | CÃ­rculos de AcciÃ³n | SÃ­ | Inline `<div>` stub |
| 5 | `/perfil` | Perfil CÃ­vico | Mi CIVICUM | SÃ­ | `ProfilePage.tsx` |
| â€” | `*` (catch-all) | **GAP:** No existe ruta 404 | â€” | â€” | â€” |

**LÃ³gica de protecciÃ³n:** `ProtectedRoute` lee `useOnboardingStore.hasCompletedOnboarding` de `localStorage`. Si `false` â†’ redirect a `/onboarding`.

---

## 2. Inventario de Pantallas

### 2.1 OnboardingFlow (`/onboarding`)

| Campo | Valor |
|-------|-------|
| **Archivo** | `src/pages/onboarding/OnboardingFlow.tsx` (513 lÃ­neas) |
| **Objetivo** | Flujo inmersivo de bienvenida: 3 pantallas Splash persuasivas + 5 pasos funcionales de registro |
| **Layout** | Propio (sin `AppLayout`); fullscreen con fondo degradado dinÃ¡mico |
| **Componentes UI** | `Button`, `Card`, `CardContent`, `Progress`, `CivicumLogo` |
| **Iconos Lucide** | `MapPin`, `ShieldCheck`, `Target`, `CheckCircle2`, `ChevronRight`, `Navigation2`, `LogIn`, `Moon`, `Sun`, `ArrowRight`, `Shield`, `Activity`, `ShieldAlert` |
| **Animaciones** | `framer-motion` (`AnimatePresence`, `motion.div`) con variantes slide + spring |
| **Estado** | `useOnboardingStore` (Zustand persist), `useUIStore` (tema) |
| **Estado local** | `splashStep` (0-3), `direction`, `selectedRegion`, `isDetectingLocation` |

**Sub-pantallas internas:**

| Fase | Step | Nombre | Objetivo (1 lÃ­nea) |
|------|------|--------|---------------------|
| Splash | 0 | Logo + Eslogan | Presenta marca CIVICUM + "El Sistema Nervioso CÃ­vico de Chile" |
| Splash | 1 | Anti-Pitch | Presenta propuesta de valor: 43+ fuentes, sin algoritmos adictivos |
| Splash | 2 | Privacidad | Honestidad Radical, 1 Persona = 1 Voto |
| Onboarding | 1 | Pacto CÃ­vico (Honestidad Radical) | Solicita compromiso Ã©tico al usuario |
| Onboarding | 2 | Tu Territorio | SelecciÃ³n de RegiÃ³n + Comuna (GPS simulado o manual) |
| Onboarding | 3 | Identidad y Poder | Explica niveles de verificaciÃ³n (Observador â†’ L4) |
| Onboarding | 4 | Elige tus Batallas | Multi-select de intereses cÃ­vicos (6 opciones hardcodeadas) |
| Onboarding | 5 | DiagnÃ³stico Listo | ConfirmaciÃ³n final + botÃ³n "Entrar a CIVICUM" |

**Estados detectados:**
- âœ… Estado normal (default)
- âœ… Estado de carga (spinner en detecciÃ³n GPS)
- âŒ Estado vacÃ­o: N/A para este flujo
- âŒ Estado de error: **GAP:** No hay manejo de error visible si la geolocalizaciÃ³n falla realmente

**Problemas detectados:**
- Las comunas estÃ¡n hardcodeadas en un objeto local `REGIONES_COMUNAS` con solo 4 regiones y ~20 comunas (de las 346 reales)
- El botÃ³n "Detectar mi Comuna" usa `setTimeout` simulado, no `navigator.geolocation`
- No existe ruta "AtrÃ¡s" desde Splash step 0 (primer splash) ni indicador de progreso en la fase Splash
- **GAP:** No se observa persistencia de borrador mid-onboarding en IndexedDB (solo persiste vÃ­a Zustand/localStorage al completar)

---

### 2.2 DashboardPage (`/`)

| Campo | Valor |
|-------|-------|
| **Archivo** | `src/pages/dashboard/DashboardPage.tsx` (182 lÃ­neas) |
| **Objetivo** | Vista principal post-onboarding: mÃ©tricas cÃ­vicas del territorio + CTAs de acciÃ³n |
| **Layout** | Dentro de `AppLayout` (header + Smart Dock) |
| **Componentes UI** | `Card`, `CardContent`, `Button`, `Badge` |
| **Iconos Lucide** | `AlertTriangle`, `TrendingUp`, `Users`, `ChevronRight`, `MapPin`, `Activity` |
| **Animaciones** | `framer-motion` (`motion.div`, stagger children, spring) |
| **Estado** | `useOnboardingStore` (lee `data.communeId`) |

**Secciones internas:**

| SecciÃ³n | Contenido |
|---------|-----------|
| Premium Gradient Header | TÃ­tulo "Pulso CÃ­vico", badges comuna + sistema estable |
| 3 Cards de mÃ©tricas | Reportes CrÃ­ticos (12), CÃ­rculos Locales (3), Casos Resueltos (145) |
| CTA "AcciÃ³n Inmediata" | Card oscura â†’ Link a `/alza-la-voz` |
| CTA "OrganizaciÃ³n Inteligente" | Card clara â†’ Link a `/circulos` |

**Estados detectados:**
- âœ… Estado normal (datos hardcodeados de demo)
- âŒ Estado vacÃ­o: **GAP:** No hay estado empty-state si no hay datos
- âŒ Estado de error: **GAP:** No hay manejo de errores
- âŒ Estado de carga: **GAP:** No hay skeleton/loading

**Problemas detectados:**
- Los datos numÃ©ricos (12 reportes, 3 cÃ­rculos, 145 casos) estÃ¡n hardcodeados, no provienen de API
- El header usa `bg-slate-50` fijo (no responde a dark mode)
- **GAP:** No se observa integraciÃ³n con dark mode del `useUIStore` en esta vista

---

### 2.3 ProfilePage (`/perfil`)

| Campo | Valor |
|-------|-------|
| **Archivo** | `src/pages/profile/ProfilePage.tsx` (203 lÃ­neas) |
| **Objetivo** | Perfil del ciudadano: resumen de actividad, verificaciÃ³n progresiva L0â†’L4, ajustes de tema |
| **Layout** | Dentro de `AppLayout` |
| **Componentes UI** | `Card`, `CardContent`, `Badge`, `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent`, `Avatar`, `AvatarFallback`, `AvatarImage` |
| **Iconos Lucide** | `ShieldAlert`, `Target`, `Trophy`, `GraduationCap`, `Moon`, `Search`, `KeyRound` |
| **Animaciones** | `framer-motion` (scale, x-translate en header) |
| **Estado** | `useUIStore` (tema) |

**PestaÃ±as internas:**

| Tab | Nombre | Contenido |
|-----|--------|-----------|
| `overview` | Resumen | Cards: Impacto HistÃ³rico (0 reportes) + Academia CÃ­vica (0%) |
| `security` | Estado de VerificaciÃ³n | Niveles escalonados: Observador (activo) â†’ Correo â†’ Gubernamental |
| `settings` | Ajustes App | Selector de tema (system/light/dark) |

**Estados detectados:**
- âœ… Estado normal
- âŒ Estado de carga: **GAP:** No hay loading al cambiar tabs
- âŒ Estado de error: **GAP:** No hay error handling

**Problemas detectados:**
- Los nombres "Ciudadano Nuevo" y "Tu Territorio Base" estÃ¡n hardcodeados (no leen del onboarding store)
- El botÃ³n "Verificar Email" no tiene `onClick` handler (es un `<button>` sin funcionalidad)
- El header del perfil no responde a dark mode (usa `bg-white` y `bg-slate-50` fijos)
- **GAP:** Los niveles L2 y superiores estÃ¡n parcialmente documentados (solo se muestran L0 y L1, luego un "PrÃ³ximamente" genÃ©rico que agrupa L2-L4)

---

### 2.4 Alza la Voz (`/alza-la-voz`)

| Campo | Valor |
|-------|-------|
| **Elemento** | Inline stub: `<div className="p-6">MÃ³dulo Alza la Voz (En construcciÃ³n)</div>` |
| **Objetivo** | Placeholder para el mÃ³dulo de reportes ciudadanos |
| **Estado** | Sin implementar â€” solo texto "En construcciÃ³n" |

---

### 2.5 CÃ­rculos de AcciÃ³n (`/circulos`)

| Campo | Valor |
|-------|-------|
| **Elemento** | Inline stub: `<div className="p-6">MÃ³dulo CÃ­rculos de AcciÃ³n (En construcciÃ³n)</div>` |
| **Objetivo** | Placeholder para el mÃ³dulo de organizaciÃ³n vecinal |
| **Estado** | Sin implementar â€” solo texto "En construcciÃ³n" |

---

## 3. Componentes Compartidos (Layout)

### 3.1 AppLayout (`src/components/layout/AppLayout.tsx`)

| Campo | Valor |
|-------|-------|
| **LÃ­neas** | 114 |
| **Objetivo** | Layout principal post-onboarding con header y Smart Dock |
| **Estructura** | `<header>` sticky top + `<main>` con `<Outlet/>` + `<nav>` bottom dock |

**Elementos internos:**

| Zona | Visible en | Contenido |
|------|------------|-----------|
| Header (top bar) | Desktop + Mobile | `CivicumLogo` (brand) + NavLinks desktop (Inicio, Alza la Voz, CÃ­rculos) + Avatar perfil |
| Main content | Siempre | `<Outlet />` â€” renderiza la ruta activa. `max-w-7xl`, padding bottom `pb-24` en mobile |
| Smart Dock | Solo mobile (`md:hidden`) | 4 tabs: Inicio (`Home`), Reportar (`Lightbulb`), CÃ­rculos (`UsersRound`), Mi Perfil (`UserRound`) |

**Problemas detectados:**
- El header no responde a dark mode (fondo `bg-white` fijo, borde `border-b`)
- El Smart Dock tiene un tab "Reportar" (con Ã­cono Lightbulb) pero el desktop nav dice "Alza la Voz" â€” inconsistencia menor de labels
- No existe un tab "MÃ¡s" en el Smart Dock como indica la especificaciÃ³n UI/UX Â§9 (mÃ¡x 5 tabs + "MÃ¡s")
- No hay badge de notificaciÃ³n en ningÃºn tab
- **GAP:** No se observa cambio atmosfÃ©rico de `data-module` al navegar entre mÃ³dulos (especificado en UI/UX Â§2.7)

---

## 4. Componentes UI Primitivos (`src/components/ui/`)

| Componente | Archivo | Tipo |
|------------|---------|------|
| `Avatar` + `AvatarFallback` + `AvatarImage` | `avatar.tsx` | shadcn/ui + Radix |
| `Badge` | `badge.tsx` | shadcn/ui |
| `Button` | `button.tsx` | shadcn/ui |
| `Card` + `CardContent` | `card.tsx` | shadcn/ui |
| `Form` (+ context) | `form.tsx` | shadcn/ui + react-hook-form |
| `Input` | `input.tsx` | shadcn/ui |
| `Label` | `label.tsx` | shadcn/ui |
| `Progress` | `progress.tsx` | shadcn/ui + Radix |
| `ScrollArea` | `scroll-area.tsx` | shadcn/ui + Radix |
| `Tabs` + `TabsList` + `TabsTrigger` + `TabsContent` | `tabs.tsx` | shadcn/ui + Radix |

**Componentes NO instalados aÃºn (requeridos por Master Plan):**
- Dialog, Toast, Alert, Skeleton, Spinner
- Chip, Tag, Tooltip, Accordion
- Breadcrumbs, DataTable
- Select (shadcn), Checkbox, Radio, Switch, Textarea (shadcn)

---

## 5. Iconos y Marca

| Componente | Archivo | Uso |
|------------|---------|-----|
| `CivicumLogo` | `src/components/icons/CivicumLogo.tsx` | SVG inline (136 lÃ­neas), 4 variantes: `brand`, `white`, `dark`, `monochrome` |

**GAP:** Solo existe 1 Ã­cono custom (logo). No hay otros assets de marca (favicon.ico, OG image, splash icons para PWA).

---

## 6. State Management (Zustand Stores)

| Store | Archivo | PropÃ³sito | Persistencia |
|-------|---------|-----------|-------------|
| `useOnboardingStore` | `store/useOnboardingStore.ts` | Paso actual, datos de onboarding, estado de completitud | `localStorage` (`civicum-onboarding-storage`) |
| `useUIStore` | `store/useUIStore.ts` | Tema (`light`/`dark`/`system`), visibilidad del Dock | `localStorage` (`civicum-ui-storage`) |
| `useFeatureFlagsStore` | `store/useFeatureFlagsStore.ts` | Feature flags A/B: `enableGamificationCards`, `enableCommunityLeaderboard`, `enableHarshModerationBlur` | `localStorage` (`civicum-feature-flags`) |

---

## 7. Mapa de NavegaciÃ³n Principal

```
[Primer acceso] â”€â”€â–º /onboarding
                        â”‚
                        â”œâ”€â”€ Splash 0 (Logo)
                        â”œâ”€â”€ Splash 1 (Anti-Pitch)
                        â”œâ”€â”€ Splash 2 (Privacidad)
                        â”œâ”€â”€ Paso 1 (Pacto CÃ­vico)
                        â”œâ”€â”€ Paso 2 (Tu Territorio)
                        â”œâ”€â”€ Paso 3 (Identidad)
                        â”œâ”€â”€ Paso 4 (Intereses)
                        â””â”€â”€ Paso 5 (Listo) â”€â”€â–º completeOnboarding() â”€â”€â–º /
                                                                        â”‚
                                               â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
                                               â–¼                        â–¼
[AppLayout] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ Header (top) + Smart Dock (bottom mobile)
     â”‚
     â”œâ”€â”€ / (Dashboard "Pulso CÃ­vico")
     â”‚       â”œâ”€â”€ CTA "Alzar la Voz" â”€â”€â–º /alza-la-voz (stub)
     â”‚       â””â”€â”€ CTA "Explorar Mesas" â”€â”€â–º /circulos (stub)
     â”‚
     â”œâ”€â”€ /alza-la-voz â”€â”€â–º Placeholder "En construcciÃ³n"
     â”‚
     â”œâ”€â”€ /circulos â”€â”€â–º Placeholder "En construcciÃ³n"
     â”‚
     â””â”€â”€ /perfil (Perfil CÃ­vico)
             â”œâ”€â”€ Tab "Resumen"
             â”œâ”€â”€ Tab "Estado de VerificaciÃ³n"
             â””â”€â”€ Tab "Ajustes App" (selector de tema)
```

---

## 8. Dependencias UI Clave

| Dependencia | VersiÃ³n | Uso |
|-------------|---------|-----|
| `react-router-dom` | `^7.13.0` | Routing SPA |
| `framer-motion` | `^12.34.3` | Animaciones |
| `lucide-react` | `^0.575.0` | IconografÃ­a |
| `@radix-ui/*` | (mÃºltiples, via shadcn) | Primitivas accesibles |
| `zustand` | `^5.0.11` | State management |
| `tailwindcss` | `^3.4.17` | CSS utility-first |
| `class-variance-authority` | `^0.7.1` | Variantes de componentes (shadcn) |

---

## 9. Resumen de GAPs Encontrados

| # | GAP | UbicaciÃ³n | Impacto |
|---|-----|-----------|---------|
| G1 | No existe ruta 404 catch-all | `main.tsx` | Bajo (UX) |
| G2 | No hay manejo de error en geolocalizaciÃ³n real | `OnboardingFlow.tsx` | Medio |
| G3 | Sin persistencia de borrador mid-onboarding en IndexedDB | `OnboardingFlow.tsx` | Bajo |
| G4 | Dashboard no responde a dark mode | `DashboardPage.tsx` | Medio |
| G5 | ProfilePage no lee datos del onboarding store (nombre, comuna) | `ProfilePage.tsx` | Medio |
| G6 | BotÃ³n "Verificar Email" sin handler | `ProfilePage.tsx` | Bajo (stub) |
| G7 | AppLayout header/dock no responde a dark mode | `AppLayout.tsx` | Medio |
| G8 | Smart Dock no tiene tab "MÃ¡s" ni badges de notificaciÃ³n | `AppLayout.tsx` | Bajo |
| G9 | No hay cambio atmosfÃ©rico `data-module` entre mÃ³dulos | `AppLayout.tsx` | Bajo |
| G10 | Comunas hardcodeadas (20 de 346) | `OnboardingFlow.tsx` | Medio |
| G11 | Datos numÃ©ricos del dashboard hardcodeados | `DashboardPage.tsx` | Bajo (esperado en stub) |
| G12 | ~~Versiones de dependencias UI no verificadas~~ | `package.json` | **RESUELTO** â€” ver Â§8 |
| G13 | Sin assets PWA (favicon, OG, splash icons) mÃ¡s allÃ¡ del SVG inline | `public/` | Medio |

```


---

#### FILE: `docs-ui/traceability_matrix.md`

```markdown
# ðŸ“Š Matriz de Trazabilidad UI â€” CIVICUM

**Gate:** Gate 4 â€” ConsolidaciÃ³n ADR â†’ Pack
**Fecha:** 2026-02-26
**Ãšltima actualizaciÃ³n de implementaciÃ³n:** Gate 5.7b (2026-03-13)
**Total reglas:** 75
**Fuentes:** 4 documentos activos (ver `_gate2/source_map.md`)
**Convenciones:** S01=UI/UX Definitivo, S02=Design System Terracota, S03=Decisiones F01-F47, S07=Anti-Dark-Patterns

> **Nota:** Tipo=GAP se mantiene como marcador histÃ³rico del problema detectado; Estado=OK indica que la decisiÃ³n estÃ¡ tomada (ADR ACCEPTED). ImplementaciÃ³n se gestiona en Gate 5+ y se registra en Notas con commit hash cuando aplica.

---

## CONTRACT (00_UI_CONTRACT)

| UI_RULE_ID | Tipo | Regla | DOCREF | Estado | Impacto | VerificaciÃ³n | Notas |
|------------|------|-------|--------|--------|---------|-------------|-------|
| UI-CTR-001 | MUST | Paleta Terracota como identidad visual oficial | S01 â†’ Â§2 â†’ "DecisiÃ³n F-09: Paleta Terracota como identidad visual oficial" (L98) | OK | ALTO | Doc review + Visual regression | F-09 |
| UI-CTR-002 | PROHIBIDO | Colores partidistas (rojo UDI, azul PS, amarillo DC) | S03 â†’ F-05 â†’ "sin colores partidistas (rojo UDI, azul PS, amarillo DC prohibidos)" (L271) | OK | ALTO | Doc review + Visual regression | F-05 Apartidismo |
| UI-CTR-003 | MUST | Fuentes de datos siempre citadas y verificables | S03 â†’ F-02 â†’ "Fuentes siempre citadas y verificables" (L102) | OK | ALTO | E2E | F-02 Honestidad |
| UI-CTR-004 | MUST | Disclaimers visibles sobre limitaciones del sistema | S03 â†’ F-02 â†’ "Disclaimers visibles sobre limitaciones" (L121) | OK | ALTO | E2E | F-02 |
| UI-CTR-005 | PROHIBIDO | Dark patterns en toda la interfaz | S07 â†’ Â§Objetivo â†’ "Garantizar que CIVICUM no utilice patrones engaÃ±osos" (L11) | OK | ALTO | Doc review + E2E | AuditorÃ­a trimestral |
| UI-CTR-006 | MUST | Regla de Oro S4: si usuario 65+, Android Go, 3G no puede completar un flujo sin ayuda, rediseÃ±ar | S01 â†’ Â§6.2 â†’ "Si S4 puede completar un flujo sin ayuda externa, el diseÃ±o es correcto" (L629) | OK | ALTO | E2E + Performance | Criterio de aceptaciÃ³n |
| UI-CTR-007 | MUST | 3 tiers de experiencia: HIGH / MEDIUM / LOW | S01 â†’ Â§17.1 â†’ "Tres niveles de experiencia segÃºn dispositivo" (L1578) | OK | ALTO | Doc review + E2E | F-07, F-14 |

---

## TOKENS (01_TOKENS)

| UI_RULE_ID | Tipo | Regla | DOCREF | Estado | Impacto | VerificaciÃ³n | Notas |
|------------|------|-------|--------|--------|---------|-------------|-------|
| UI-TOK-001 | MUST | 4 colores primarios: Terracota #C2503A, Azul Profundo #264653, Verde Esperanza #0D7A5F, Azul ProtecciÃ³n #2563EB | S02 â†’ Â§1.1 â†’ "Los 4 colores core" (L71) | OK | ALTO | Visual regression | Escala 10 tonos c/u |
| UI-TOK-002 | MUST | SemÃ¡ntica: Ã‰xito=#0D7A5F, Error=#C2503A, Advertencia=#B56D18, Info=#2563EB | S02 â†’ Â§1.2 â†’ tabla colores semÃ¡nticos (L136) | OK | ALTO | Visual regression | |
| UI-TOK-003 | MUST | Espaciado base 4px: space-1(4px) a space-16(64px) | S01 â†’ Â§5.1 â†’ "Escala de Espaciado (Base 4px)" (L570) | OK | MEDIO | Doc review | 8 tokens |
| UI-TOK-004 | MUST | Sombras: shadow-sm a shadow-xl | S01 â†’ Â§5.2 â†’ tabla sombras (L585) | OK | BAJO | Doc review | 4 niveles |
| UI-TOK-005 | MUST | Border-radius: radius-sm(4px) a radius-full(9999px) | S01 â†’ Â§5.3 â†’ tabla border radius (L594) | OK | BAJO | Doc review | 5 niveles |
| UI-TOK-006 | MUST | CSS vars :root con esquema --color-terracota-*, --color-azul-*, etc. | S01 â†’ Â§2.7 â†’ bloque CSS ":root" (L308) | OK | ALTO | Doc review | ImplementaciÃ³n tÃ©cnica |
| UI-TOK-007 | MUST | MÃ³dulos con data-module + --module-accent / --module-bg | S01 â†’ Â§2.7 â†’ "[data-module='mi-civicum']" (L355) | OK | ALTO | Visual regression | Resolved by ADR-0002 (ACCEPTED) â€” Daniel. Valores: 6 mÃ³dulos S01 + `unknown`=default. Implementation pending Gate 5+. |
| UI-TOK-008 | SHOULD | Amarillo Mostaza (#D4872E) siempre con texto oscuro | S02 â†’ Â§1.2.1 â†’ "Usar siempre con texto oscuro (#264653 o negro)" (L155) | OK | MEDIO | Test a11y | Contraste 2.73:1 vs blanco |
| UI-TOK-009 | MUST | TipografÃ­a oficial: Nunito Sans (headings/labels), IBM Plex Sans (body), IBM Plex Mono (data/mono). Tier system HIGH/MED/LOW segÃºn S01. | S01 â†’ Â§3.1 (L394â€“396) + S01 â†’ Â§3.3 (tiers) + ADR-0007 (ACCEPTED) | OK | ALTO | Performance (budget UI-STP-008) + Visual regression + Doc review | Resolved by ADR-0007 (ACCEPTED) â€” Daniel. Implementation pending Gate 5+. |

---

## COMPONENTS (02_COMPONENTS)

| UI_RULE_ID | Tipo | Regla | DOCREF | Estado | Impacto | VerificaciÃ³n | Notas |
|------------|------|-------|--------|--------|---------|-------------|-------|
| UI-CMP-001 | MUST | Iconos Lucide React, stroke 2px, viewbox 24x24, round linecap/linejoin | S01 â†’ Â§4.1 â†’ "Base: Lucide React" (L452) | OK | MEDIO | UI-kit Playwright | 3 variantes: outlined/filled/duotone |
| UI-CMP-002 | MUST | Iconos decorativos: aria-hidden="true" focusable="false" | S01 â†’ Â§4.4 â†’ bloque JSX (L548) | OK | ALTO | Test a11y | WCAG obligatorio |
| UI-CMP-003 | MUST | Iconos funcionales sin texto: aria-label descriptivo | S01 â†’ Â§4.4 â†’ "Icono funcional â€” sin texto" (L555) | OK | ALTO | Test a11y | WCAG obligatorio |
| UI-CMP-004 | MUST | Skeleton shimmer: linear-gradient Gris100â†’200â†’100, 1.5s infinite | S01 â†’ Â§12.2 â†’ "Shimmer: linear-gradient" (L1381) | OK | MEDIO | UI-kit Playwright | |
| UI-CMP-005 | MUST | Spinner Terracota 0.8s, SM(16)/MD(24)/LG(48)px | S01 â†’ Â§7 Feedback â†’ "Spinner" (L744) | OK | BAJO | UI-kit Playwright | |
| UI-CMP-006 | MUST | Smart Dock: 5 tabs + "MÃ¡s", badge = punto rojo 8px sin nÃºmero | S01 â†’ Â§9.1+Â§9.2 â†’ "Badge: Punto rojo 8px (sin nÃºmero â€” reduce ansiedad)" (L1146) | OK | ALTO | E2E + Golden screenshots | |
| UI-CMP-007 | SHOULD | Bottom Sheet: drag handle, snap points (25%/50%/90%), backdrop dim | S01 â†’ Â§7 Nav â†’ "Bottom Sheet" (L754) | OK | MEDIO | UI-kit Playwright | |

---

## LAYOUTS (03_LAYOUTS)

| UI_RULE_ID | Tipo | Regla | DOCREF | Estado | Impacto | VerificaciÃ³n | Notas |
|------------|------|-------|--------|--------|---------|-------------|-------|
| UI-LAY-001 | MUST | Breakpoints mobile-first: XS=360, SM=480, MD=768, LG=1024, XL=1280, 2XL=1536 | S01 â†’ Â§6.1 â†’ tabla "Breakpoints Oficiales" (L618) | OK | ALTO | E2E (Playwright) + Golden screenshots (Completo) | Resolved by ADR-0003 (ACCEPTED, OpciÃ³n B) â€” Daniel. Breaking change: sm 640â†’480. Implemented Gate 5.1.2 (commit 1fc13bb): tailwind screens xs=360 sm=480 sm640=640. Verified by: Playwright smoke.breakpoints.spec.ts + golden recapture (Estado=Completo). |
| UI-LAY-002 | MUST | Grid: 12 columnas, gutter 24px desktop / 16px mobile, max-width 1280px | S01 â†’ Â§5.4 â†’ "Grid System" (L604) | OK | ALTO | Visual regression | |
| UI-LAY-003 | MUST | MÃ¡rgenes laterales: 16px (XS-SM), 24px (MD), 32px (LG+) | S01 â†’ Â§5.4 â†’ "MÃ¡rgenes laterales" (L608) | OK | MEDIO | Visual regression | |
| UI-LAY-004 | MUST | Smart Dock: bottom bar XS-MD, side rail LG+ | S01 â†’ Â§6.3 â†’ fila Smart Dock (L635) | OK | ALTO | E2E + Golden screenshots | Implementation pending Gate 5+; tracked by smoke.breakpoints.spec.ts (expected-fail until implemented). |
| UI-LAY-005 | MUST | Modales: fullscreen XS, centered 80% MD, centered 560px max LG | S01 â†’ Â§6.3 â†’ fila Modales (L637) | OK | MEDIO | E2E | |
| UI-LAY-006 | MUST | Tablas: cards apiladas XS, responsive MD, completa LG | S01 â†’ Â§6.3 â†’ fila Tablas (L638) | OK | MEDIO | Visual regression | |
| UI-LAY-007 | GAP | Dark mode: no hay definiciÃ³n de layouts/tokens para dark mode | â€” | OK | ALTO | â€” | Decision: ADR-0005 (ACCEPTED) â€” Daniel. Pospuesto a Ã‰poca 3+. Implementation pending Gate 5+. |

---

## NAVIGATION (04_NAVIGATION)

| UI_RULE_ID | Tipo | Regla | DOCREF | Estado | Impacto | VerificaciÃ³n | Notas |
|------------|------|-------|--------|--------|---------|-------------|-------|
| UI-NAV-001 | MUST | Dock order: Home, Aprende, Civia, Reporta, MÃ¡s | S01 â†’ Â§9.1 â†’ tabla posiciones 1-5 (L1129) | OK | ALTO | E2E | |
| UI-NAV-002 | MUST | Dock altura 56px + safe area iOS | S01 â†’ Â§9.2 â†’ "Altura: 56px" (L1141) | OK | MEDIO | Golden screenshots | |
| UI-NAV-003 | MUST | Icono activo: color mÃ³dulo + filled variant | S01 â†’ Â§9.2 â†’ "Icono activo: Color mÃ³dulo, filled variant" (L1144) | OK | MEDIO | Visual regression | |
| UI-NAV-004 | MUST | Cambio mÃ³dulo = cambio atmÃ³sfera cromÃ¡tica (150ms ease-in-out) | S01 â†’ Â§9.3 â†’ "cambio de atmÃ³sfera" (L1152) | OK | ALTO | E2E | data-module CSS var |
| UI-NAV-005 | MUST | Tab bounce: scale 1.2â†’1, 150ms | S01 â†’ Â§9.3 â†’ "icon bounces" (L1154) | OK | BAJO | UI-kit Playwright | |
| UI-NAV-006 | MUST | prefers-reduced-motion: corte directo | S01 â†’ Â§9.3 â†’ "corte directo sin animaciÃ³n" (L1158) | OK | ALTO | Test a11y | |
| UI-NAV-007 | MUST | Breadcrumbs: mÃ¡x 4 niveles, "â† Volver" en mobile | S01 â†’ Â§7 Nav â†’ "Breadcrumbs" (L751) | OK | MEDIO | E2E | |
| UI-NAV-008 | GAP | Falta ruta 404 | ADR-0004 â†’ Â§DecisiÃ³n (requisitos funcionales) | OK | ALTO | E2E (Playwright) | Implemented Gate 5.2 (commit 7bb2c42): AppLayout catch-all + NotFoundPage; Verified by Playwright smoke.notfound. |

---

## PATTERNS (05_PATTERNS)

| UI_RULE_ID | Tipo | Regla | DOCREF | Estado | Impacto | VerificaciÃ³n | Notas |
|------------|------|-------|--------|--------|---------|-------------|-------|
| UI-PAT-001 | MUST | Onboarding inmersivo 5 fases, ~8 min total | S01 â†’ Â§10 â†’ "5 FASES, ~8 minutos" (L1171) | OK | ALTO | E2E | |
| UI-PAT-002 | MUST | AtmÃ³sferas por mÃ³dulo: metÃ¡fora + paleta + emociÃ³n | S01 â†’ Â§8 â†’ "Cada mÃ³dulo es un 'mundo'" (L774) | OK | ALTO | Visual regression | 6 mundos |
| UI-PAT-003 | MUST | Toda animaciÃ³n: propÃ³sito funcional o emocional | S01 â†’ Â§13.1 â†’ "propÃ³sito funcional o emocional" (L1432) | OK | MEDIO | Doc review | |
| UI-PAT-004 | MUST | Animaciones solo transform + opacity | S01 â†’ Â§13.1 â†’ "Solo transform y opacity" (L1431) | OK | MEDIO | Performance | |
| UI-PAT-005 | MUST | DuraciÃ³n: â‰¤300ms transiciones, â‰¤800ms celebraciones | S01 â†’ Â§13.1 â†’ "300ms transiciones, 800ms celebraciones" (L1428) | OK | MEDIO | UI-kit Playwright | |
| UI-PAT-006 | MUST | FrustraciÃ³n â†’ acciÃ³n: siempre "siguiente paso" | S01 â†’ Â§14.1 â†’ "Siempre mostrar siguiente paso" (L1468) | OK | ALTO | E2E | |
| UI-PAT-007 | MUST | F-54 Reversibilidad: snackbar deshacer, grace 5s, soft-delete 30d | S01 â†’ Â§19 â†’ fila F-54 (L1679) | OK | ALTO | E2E | |
| UI-PAT-008 | MUST | F-55 Botones opuestos: stacked vertical XS, gap 16px | S01 â†’ Â§19 â†’ fila F-55 (L1680) | OK | ALTO | E2E | |

---

## CONTENT/STYLE (06_CONTENT_STYLE)

| UI_RULE_ID | Tipo | Regla | DOCREF | Estado | Impacto | VerificaciÃ³n | Notas |
|------------|------|-------|--------|--------|---------|-------------|-------|
| UI-CNT-001 | MUST | Tono "Vecino Organizado": empÃ¡tica, directa, cero paternalismo | S01 â†’ Â§15.1 â†’ tabla voz (L1500) | OK | ALTO | Doc review | |
| UI-CNT-002 | MUST | Registro formal-cercano: tÃº, no usted | S01 â†’ Â§15.1 â†’ "Registro: formal-cercano" (L1503) | OK | MEDIO | Doc review | |
| UI-CNT-003 | PROHIBIDO | Palabras: revoluciÃ³n, derrocar, enemigo, traidor, etc. | S01 â†’ Â§15.3 â†’ lista palabras prohibidas (L1513) | OK | ALTO | Doc review | 9 palabras baneadas |
| UI-CNT-004 | MUST | Errores humanos: "Algo fallÃ³ de nuestro lado" | S01 â†’ Â§15.4 â†’ "Errores (humanos)" (L1532) | OK | MEDIO | E2E | |
| UI-CNT-005 | MUST | InvitaciÃ³n sin presiÃ³n: "Puedes explorar sin registrarte" | S01 â†’ Â§15.4 â†’ "InvitaciÃ³n sin presiÃ³n" (L1527) | OK | MEDIO | E2E | |
| UI-CNT-006 | SHOULD | Disclaimers votos simbÃ³licos visibles | S01 â†’ Â§15.4 â†’ "Esto es un voto simbÃ³lico" (L1522) | OK | ALTO | E2E | F-02 |

---

## A11Y (07_A11Y)

| UI_RULE_ID | Tipo | Regla | DOCREF | Estado | Impacto | VerificaciÃ³n | Notas |
|------------|------|-------|--------|--------|---------|-------------|-------|
| UI-A11-001 | MUST | Contraste texto normal â‰¥4.5:1 | S01 â†’ Â§16.1 â†’ "Contraste texto normal: 4.5:1" (L1545) | OK | ALTO | Test a11y | WCAG AA |
| UI-A11-002 | MUST | Contraste texto grande â‰¥3:1 | S01 â†’ Â§16.1 â†’ "Contraste texto grande: 3:1" (L1546) | OK | ALTO | Test a11y | WCAG AA |
| UI-A11-003 | MUST | Ãrea tÃ¡ctil â‰¥44Ã—44px, objetivo 48Ã—48px | S01 â†’ Â§16.1 â†’ "Ãrea tÃ¡ctil: 44Ã—44px" (L1547) | OK | ALTO | Test a11y | WCAG |
| UI-A11-004 | MUST | Focus visible ring 2px + offset 2px | S01 â†’ Â§16.1 â†’ "Focus visible: Ring 2px + offset 2px" (L1548) | OK | ALTO | Test a11y | |
| UI-A11-005 | MUST | NavegaciÃ³n teclado 100% flujos | S01 â†’ Â§16.1 â†’ "NavegaciÃ³n teclado: 100% flujos" (L1549) | OK | ALTO | Test a11y + E2E | |
| UI-A11-006 | MUST | Screen reader: VoiceOver + TalkBack | S01 â†’ Â§16.1 â†’ "Screen reader: Compatibilidad total" (L1550) | OK | ALTO | Test a11y | |
| UI-A11-007 | MUST | 4 modos adaptativos: alto contraste, daltÃ³nicos, texto grande, reduced motion | S01 â†’ Â§16.2 â†’ tabla modos (L1556) | OK | ALTO | Test a11y | |
| UI-A11-008 | MUST | prefers-reduced-motion â†’ 0 animaciones | S01 â†’ Â§16.2 â†’ "cero animaciones" (L1561) | OK | ALTO | Test a11y | |

---

## STATES/PERF (08_STATES_OFFLINE_PERF)

| UI_RULE_ID | Tipo | Regla | DOCREF | Estado | Impacto | VerificaciÃ³n | Notas |
|------------|------|-------|--------|--------|---------|-------------|-------|
| UI-STP-001 | MUST | 5 estados por pantalla: loading, empty, error, offline, success | S01 â†’ Â§12 â†’ tabla estados (L1356) | OK | ALTO | UI-kit Playwright + E2E | Implemented Gate 5.3 (commits fc42f22, c0481ad, cf61361): 5 reusable components in `webapp/src/components/feedback/`. **Gate 5.4:** Offline integrated via `OfflineBanner`. **Gate 5.7:** Loading, Error, and Empty integrated in production on Dashboard via real `GET /api/community-reports` endpoint. Verified by `integration.reports.spec.ts` (8 tests Ã— desktop+mobile). |
| UI-STP-002 | MUST | Loading: skeleton shimmer, no spinner vacÃ­o | S01 â†’ Â§12.1 â†’ "Skeleton screen con shimmer" (L1357) | OK | MEDIO | UI-kit Playwright + E2E | Implemented Gate 5.3 (commit fc42f22): `SkeletonScreen.tsx`. **Gate 5.7:** Integrated in production on Dashboard `CommunityReportsSection` via real pending `useQuery` request. Verified by E2E `integration.reports.spec.ts` Loading test (route delay intercept). |
| UI-STP-003 | MUST | Empty: ilustraciÃ³n + CTA por mÃ³dulo | S01 â†’ Â§12.3 â†’ tabla empty states (L1387) | OK | MEDIO | UI-kit Playwright + E2E | Implemented Gate 5.3 (commit fc42f22): `EmptyState.tsx`. **Gate 5.7:** Integrated in production on Dashboard â€” renders when `communityReports` endpoint returns `{ reports: [] }`. **Gate 5.7a:** CTA funcional via `ctaTo` â†’ `Link` real a `/alza-la-voz`. VerificaciÃ³n: Empty UI validado por E2E con intercept sobre request real (`integration.reports.spec.ts` Empty + CTA tests); wiring real del backend probado por separado en tests sin intercept. No se ha observado DB real vacÃ­a; la UI estÃ¡ lista para ese caso. |
| UI-STP-004 | MUST | Error: toast Terracota + guardado + retry | S01 â†’ Â§12.1 â†’ fila Error (L1359) | OK | ALTO | UI-kit Playwright + E2E | Implemented Gate 5.3 (commit fc42f22): `ErrorState.tsx`. **Gate 5.7:** Integrated in production on Dashboard with real `onRetry` wired to `refetch()`. Verified by E2E `integration.reports.spec.ts` Error + Retry tests (intercept â†’ 500, then retry â†’ success). |
| UI-STP-005 | MUST | Offline: banner NO alarma + funcionalidad Tier LOW | S01 â†’ Â§12.1 â†’ fila Offline (L1360) | OK | ALTO | UI-kit Playwright + E2E | F-07. Implemented Gate 5.3 (`OfflineBanner.tsx` presentational). **Integrated in production Gate 5.4** (commit d5f0959): `AppLayout.tsx` via `useNetworkStatus` hook (real `navigator.onLine`). Verified by Playwright E2E `integration.5state.spec.ts` (`context.setOffline`). |
| UI-STP-006 | MUST | offline.html digno con logo + capacidades + CTA | S03 â†’ F-07 â†’ "Dignidad = experiencia completa" (L365) | OK | ALTO | E2E | |
| UI-STP-007 | MUST | CWV Tier LOW: FCPâ‰¤2.0s, LCPâ‰¤4.0s, TTIâ‰¤5.0s, CLSâ‰¤0.2 | S01 â†’ Â§17.2 â†’ tabla CWV (L1590) | OK | ALTO | Performance | Android Go target |
| UI-STP-008 | MUST | Critical pack â‰¤800KB | S03 â†’ F-07 â†’ "CRITICAL_PACK_SIZE_KB: 800" (L383) | OK | ALTO | Performance | |
| UI-STP-009 | GAP | Estados loading/error no implementados en Ã‰poca 1 | â€” | OK | ALTO | UI-kit Playwright + E2E | Decision: ADR-0006 (ACCEPTED) â€” Daniel. **Gap cerrado Gate 5.7:** Loading, Error, and Empty integrados en producciÃ³n vÃ­a Dashboard `CommunityReportsSection` â†’ real `GET /api/community-reports`. Success fuera de scope (vertical read-only). **Gate 5.7a cierre:** (1) Backend real levantado en suite automatizada vÃ­a dual `webServer` en `playwright.config.ts` (Hono 3001 + Vite 5173). (2) `/health` y `/api/community-reports` probados sin intercept (acepta 200 o 500 honesto). (3) Dashboard render real sin intercept (confirma que ErrorState aparece por `DATABASE_URL` ausente). (4) Estados UI validados por intercept sobre request real. Spec total: 8 tests de archivo (5 intercept + 3 real wiring) Ã— 2 projects = 16 E2E. |

---

## GOVERNANCE (09_GOVERNANCE)

| UI_RULE_ID | Tipo | Regla | DOCREF | Estado | Impacto | VerificaciÃ³n | Notas |
|------------|------|-------|--------|--------|---------|-------------|-------|
| UI-GOV-001 | PROHIBIDO | Notificaciones FOMO / urgencia falsa | S07 â†’ Â§Notificaciones â†’ "FOMO manipulation: Prohibido" (L31) | OK | ALTO | Doc review + E2E | F-02, F-08 |
| UI-GOV-002 | PROHIBIDO | GamificaciÃ³n adictiva: loops, loss aversion, streaks | S07 â†’ Â§GamificaciÃ³n â†’ "Addictive loops: Prohibido" (L37) | OK | ALTO | Doc review + E2E | F-08 |
| UI-GOV-003 | MUST | Karma = servicio, tope diario | S03 â†’ F-08 â†’ "basado en SERVICIO, Tope diario" (L418-420) | OK | ALTO | E2E | KARMA_DAILY_CAP: 100 |
| UI-GOV-004 | MUST | EliminaciÃ³n cuenta 1 click + export JSON/CSV | S07 â†’ Â§RetenciÃ³n â†’ "/api/me/delete en 1 click" (L46) | OK | ALTO | E2E | GDPR + Ley 19.628 |
| UI-GOV-005 | PROHIBIDO | Guilt trips al salir | S07 â†’ Â§RetenciÃ³n â†’ "Guilt trips on leaving: Prohibido" (L48) | OK | MEDIO | Doc review | |
| UI-GOV-006 | MUST | AuditorÃ­a anti-dark-patterns trimestral | S07 â†’ Â§AuditorÃ­a â†’ "RevisiÃ³n UX flows completos: Trimestral" (L65) | OK | MEDIO | Doc review | |

---

## Resumen

| MÃ©trica | Valor |
|---------|-------|
| **Total reglas** | 75 |
| **OK** | 75 |
| **CONFLICTO** | 0 |
| **GAP** | 0 |
| **Sin DOCREF** | 0 |
| **CategorÃ­as** | 10 |
| **Resolved by ADR** | 6 |

```


---

#### FILE: `docs-ui/_gate2/source_map.md`

```markdown
# ðŸ“ Gate 2 â€” Source Map

**PropÃ³sito:** Registro canÃ³nico de todas las fuentes consultadas para extracciÃ³n de reglas UI. Ninguna regla puede entrar a la matriz de trazabilidad si su fuente no aparece aquÃ­.

**Fecha:** 2026-02-24
**Gate:** Gate 2 â€” ExtracciÃ³n Documental

---

## Fuentes Consultadas

| # | Fuente (path exacto) | Tipo | Relevancia UI | Estado |
|---|----------------------|------|---------------|--------|
| S01 | `/docs/knowledge-base/CIVICUM_Diseno_UI_UX_Definitivo.md` | UX / Design | Documento canÃ³nico: 21 secciones, tokens, tipografÃ­a, breakpoints, componentes, navegaciÃ³n, estados, a11y, microcopy, animaciones, onboarding, atmÃ³sferas | Usada |
| S02 | `/docs/knowledge-base/CIVICUM_Anexo_Design_System_Terracota.docx.md` | Design System | Paleta completa, escalas de color, semÃ¡ntica, contrastes WCAG, CSS variables, dark mode, tipografÃ­a, espaciado | Usada |
| S03 | `/docs/knowledge-base/CIVICUM_Anexo_Decisiones_F01_F47_Exhaustivo.docx.md` | Producto / Decisiones | 47 decisiones formales: F-01 MVP, F-02 honestidad, F-03 datos mÃ­nimos, F-05 apartidismo, F-07 offline dignity, F-08 gamificaciÃ³n, F-09 coherencia marca, F-14 modo lite, F-45 testing | Usada |
| S04 | `/docs/knowledge-base/CIVICUM_Anexo_Arquitectura_Tecnica_Completa.docx.md` | Tech / Arquitectura | Stack, Core Web Vitals por tier, offline-first strategy, 3 tiers de experiencia, service worker | Revisada sin reglas nuevas (cubierta por S01/S03) |
| S05 | `/docs/knowledge-base/CIVICUM_Identidad_de_Marca_Propuesta_Mision_Vision_Manifiesto.md` | Marca / Identidad | MisiÃ³n, visiÃ³n, manifiesto, tono de voz, valores de marca | Revisada sin reglas nuevas (cubierta por S01/S02) |
| S06 | `/docs/knowledge-base/CIVICUM_Anexo_Modulos_MVP_Especificacion_Exhaustiva.docx.md` | Producto | EspecificaciÃ³n MVP por mÃ³dulo, flujos, pantallas | Revisada sin reglas nuevas (cubierta por S01) |
| S07 | `/docs/governance/anti-dark-patterns.md` | Governance / Ã‰tica | 20+ prohibiciones de dark patterns organizadas por categorÃ­a: onboarding, notificaciones, gamificaciÃ³n, retenciÃ³n, contenido | Usada |
| S08 | `/docs/governance/brand-coherence-audit.md` | Governance / Marca | AuditorÃ­a de coherencia de marca, checklist visual | Revisada sin reglas nuevas (cubierta por S02 F-09) |
| S09 | `/docs/ux/anti-dark-patterns.md` | UX / Ã‰tica | GuÃ­as UX anti-manipulaciÃ³n | Revisada sin reglas nuevas (cubierta por S07) |
| S10 | `/docs/ux/error-messages.md` | UX / Copy | Patrones de mensajes de error | Revisada sin reglas nuevas (cubierta por S01 Â§15) |
| S11 | `/docs/ux/fat-finger-defense.md` | UX / Accesibilidad | Defensa contra errores de toque accidental | Revisada sin reglas nuevas (cubierta por S01 Â§21.4) |
| S12 | `/docs/ux/reduced-motion-accessibility.md` | UX / A11y | Manejo de movimiento reducido | Revisada sin reglas nuevas (cubierta por S01 Â§16) |
| S13 | `/docs/frontend/fonts.md` | Tech / TipografÃ­a | Especificaciones de carga de fuentes | Revisada sin reglas nuevas (cubierta por S01 Â§3) |
| S14 | `/docs/frontend/service-worker-cache-strategy.md` | Tech / Offline | Estrategia de cache del service worker | Revisada sin reglas nuevas (cubierta por S01 Â§18) |
| S15 | `/docs/roadmap/CIVICUM_ULTIMATE_MASTER_PLAN.md` | Master Plan | Ã‰pocas, mÃ³dulos, requisitos de performance y a11y, Ã©pocas de implementaciÃ³n | Revisada sin reglas nuevas (cubierta por S01/S03/S04) |
| S16 | `/docs/legal/honest-cookie-consent.md` | Legal | Consentimiento de cookies honesto | Revisada sin reglas nuevas (cubierta por S07 pre-checked consent) |
| S17 | `/docs/knowledge-base/CIVICUM_Anexo_Fundamentos_Antropologicos_Culturales_Exhaustivo.docx.md` | Cultural / UX | Hallazgos culturales H1-H9 aplicados al diseÃ±o | Revisada sin reglas nuevas (cubierta por S01 Â§14) |

---

## Reglas del Source Map

1. **Solo las fuentes marcadas "Usada"** han generado reglas en la matriz de trazabilidad. Fuentes activas: S01, S02, S03, S07.
2. **"Revisada sin reglas nuevas"** = se leyÃ³ y las reglas relevantes ya estÃ¡n cubiertas por otra fuente.
3. Ninguna regla en `traceability_matrix.md` puede tener un DOCREF a una fuente no listada aquÃ­.
4. Nuevas fuentes descubiertas en gates posteriores deben aÃ±adirse aquÃ­ primero.

```


---

#### FILE: `docs-ui/_gate2/conflicts_log.md`

```markdown
# âš ï¸ Gate 2 â€” Conflicts Log

**PropÃ³sito:** Registro de contradicciones detectadas entre fuentes. No se resuelven aquÃ­ â€” Gate 3 las resuelve vÃ­a ADR.

---

## Conflictos Detectados

| CONFLICT_ID | Regla A + DOCREF | Regla B + DOCREF | QuÃ© contradice exactamente | ADR sugerido (tÃ­tulo) | ADR Draft | Status |
|-------------|------------------|------------------|---------------------------|----------------------|-----------|--------|
| CONFLICT-001 | UI-TOK-007: MÃ³dulos MUST usar `data-module` + `--module-accent` para cambio de atmÃ³sfera cromÃ¡tica. DOCREF: S01 â†’ Â§2.7 (L355) | Inventario Ã‰poca 1 (`epoch1_inventory.md` â†’ GAP G9): "No hay cambio atmospheric (`data-module`) al navegar entre mÃ³dulos". El cÃ³digo actual NO implementa `data-module`. | La fuente de diseÃ±o exige `data-module` en cada mÃ³dulo, pero el cÃ³digo de Ã‰poca 1 no lo implementa. No es un conflicto entre documentos sino entre documento y realidad. | ADR: "ImplementaciÃ³n de `data-module` para cambio de atmÃ³sfera â€” prioridad y scope" | [ADR-0002](../../adr-ui/ADR-0002-data-module-atmosferas.md) (ACCEPTED) | **DECIDED** |
| CONFLICT-002 | UI-LAY-001: Breakpoints oficiales incluyen XS=360px como breakpoint #1 (mobile-first). DOCREF: S01 â†’ Â§6.1 (L618) | `03_LAYOUTS.md` (skeleton, aÃºn sin reglas) + README Done UI â†’ "Cumple breakpoints definidos en `03_LAYOUTS`". El skeleton no tiene breakpoints documentados aÃºn, y Tailwind actual usa `sm=640px` (no 480px), `md=768px`, `lg=1024px` â€” sin `xs=360px`. | El UX Definitivo define 6 breakpoints incluyendo XS=360px y SM=480px, pero Tailwind defaults y el cÃ³digo actual usan diferentes breakpoints. Â¿Se extiende Tailwind o se aceptan los defaults? | ADR: "Breakpoints oficiales vs Tailwind defaults â€” extensiÃ³n de config" | [ADR-0003](../../adr-ui/ADR-0003-breakpoints-oficiales-vs-tailwind.md) (ACCEPTED) | **DECIDED** |

---

## Notas

- **CONFLICT-001** es cÃ³digoâ†”doc (mÃ¡s que docâ†”doc). Se podrÃ­a resolver como GAP de implementaciÃ³n, pero la escala del cambio (6 mÃ³dulos) justifica ADR.
- **CONFLICT-002** requiere decisiÃ³n tÃ©cnica: extender Tailwind con breakpoints custom (xs, sm) afecta todo el sistema.
- Ambos conflictos son de impacto ALTO.
- **Estado:** DECIDED â€” ADRs aceptados por Daniel (2026-02-26). ImplementaciÃ³n pendiente en Gate 5+.

```


---

#### FILE: `docs-ui/_gate2/gaps_log.md`

```markdown
# ðŸ•³ï¸ Gate 2 â€” Gaps Log

**PropÃ³sito:** Registro de reglas que deberÃ­an existir pero no tienen fuente (o la fuente es insuficiente). No se resuelven aquÃ­ â€” opciones listadas para Gate 3+.

---

## Gaps Detectados

| GAP_ID | QuÃ© falta | DÃ³nde deberÃ­a estar | Impacto | Opciones para resolver | ADR Draft | Status |
|--------|-----------|---------------------|---------|----------------------|-----------|--------|
| GAP-001 | Ruta 404: no existe ninguna pantalla ni ruta catch-all para URLs invÃ¡lidas. **Gate 3:** se resuelve vÃ­a ADR de diseÃ±o (definir intenciÃ³n, copy y layout de 404), no esperando una fuente externa. | `04_NAVIGATION` (routing) y cÃ³digo `src/App.tsx` | ALTO | (A) Crear ruta catch-all con redirect a Dashboard, (B) Crear pantalla 404 personalizada con tono CIVICUM (empÃ¡tico, no tÃ©cnico â€” ref: UI-CNT-001) y CTA, (C) Pantalla 404 + sugerencias tipo "Â¿Buscabasâ€¦?" | [ADR-0004](../../adr-ui/ADR-0004-diseno-404.md) (ACCEPTED) | **DECIDED** |
| GAP-002 | Error handling geolocalizaciÃ³n: no hay fallback visual definido si la geolocalizaciÃ³n falla durante onboarding | `08_STATES_OFFLINE_PERF` y `05_PATTERNS` (onboarding) | MEDIO | (A) Fallback silencioso a selector de comuna manual, (B) Toast informativo + selector manual, (C) Dialog explÃ­cito con opciones "Intentar de nuevo" / "Elegir manualmente" | â€” |
| GAP-003 | Persistencia de borrador onboarding: no hay definiciÃ³n de guardado parcial en IndexedDB | `08_STATES_OFFLINE_PERF` | MEDIO | (A) Guardar en localStorage por step, (B) Guardar en IndexedDB por step con TTL 7 dÃ­as, (C) No guardar â€” requerir completar en una sesiÃ³n (aceptar pÃ©rdida) | â€” |
| GAP-004 | Smart Dock: falta tab "MÃ¡s" y badges de notificaciÃ³n en implementaciÃ³n Ã‰poca 1 | `04_NAVIGATION` + `02_COMPONENTS` | MEDIO | (A) Implementar "MÃ¡s" como bottom sheet con mÃ³dulos secundarios, (B) Implementar como drawer lateral, (C) Posponer a Ã‰poca 2 cuando los mÃ³dulos secundarios existan | â€” |
| GAP-005 | Dark mode: existe menciÃ³n/referencia en fuentes (S02 menciona temas, S01 Done UI incluye dark mode como criterio), pero no hay definiciÃ³n completa implementable de tokens/layouts para Civicum. Se requiere ADR para establecer paleta dark si se decide implementar. | `01_TOKENS`, `03_LAYOUTS`, `00_UI_CONTRACT` | ALTO | (A) Definir paleta dark mode completa via ADR (Terracota sobre fondos oscuros), (B) Dark mode = Azul Profundo base + tokens invertidos via ADR, (C) Posponer dark mode a Ã‰poca 3+ (priorizar funcionalidad, aceptar GAP) | [ADR-0005](../../adr-ui/ADR-0005-dark-mode-especificacion-minima.md) (ACCEPTED) | **DECIDED** |
| GAP-006 | Estados loading/error no implementados en pantallas de Ã‰poca 1 (Dashboard, Perfil) | `08_STATES_OFFLINE_PERF` y cÃ³digo Ã‰poca 1 | ALTO | (A) Implementar 5 estados en todas las pantallas existentes en Gate 5, (B) Implementar solo loading+error en Gate 5 (empty y offline en Ã‰poca 2+), (C) Crear componentes genÃ©ricos de estado y dejar integraciÃ³n para cada mÃ³dulo | [ADR-0006](../../adr-ui/ADR-0006-estados-por-pantalla.md) (ACCEPTED) | **DECIDED** |
| GAP-007 | TipografÃ­a: spec define Nunito Sans + IBM Plex Sans + IBM Plex Mono, pero cÃ³digo Ã‰poca 1 usa solo Inter. No hay fuente que autorice explÃ­citamente Inter como alternativa. | `01_TOKENS` (tipografÃ­a) | ALTO | (A) Migrar a Nunito Sans + IBM Plex Sans (segÃºn spec), (B) Crear ADR para mantener Inter como decisiÃ³n nueva, (C) Usar Inter para body + Nunito Sans para headings (hÃ­brido) | [ADR-0007](../../adr-ui/ADR-0007-tipografia-decision.md) (ACCEPTED) | **DECIDED** |
| GAP-008 | PWA Assets: faltan favicon, OG image, splash icons segÃºn spec | `08_STATES_OFFLINE_PERF` (PWA) | MEDIO | (A) Generar todos los assets segÃºn spec Â§18.1 en Gate 5, (B) Generar mÃ­nimo (favicon + 192px + 512px) ahora, (C) Posponer a Ã‰poca 4 (deploy) | â€” |

---

## Mapeo GAPs â†’ Inventario Ã‰poca 1

| GAP_ID | GAP Inventario (epoch1_inventory.md) | Reglas candidatas en la matriz |
|--------|---------------------------------------|-------------------------------|
| GAP-001 | G1 (No 404 route) | UI-NAV-008 |
| GAP-002 | G2 (No geo fallback) | â€” (ninguna regla extraÃ­da, fuente insuficiente) |
| GAP-004 | G8 (Smart Dock lacks "More" tab) | UI-CMP-006 |
| GAP-005 | G4 + G7 (Dark mode incompleto en Dashboard + AppLayout) | UI-LAY-007 |
| GAP-006 | â€” (detectado por inventario general) | UI-STP-009 |
| GAP-007 | â€” (detectado al comparar cÃ³digo vs spec) | â€” |
| GAP-008 | G13 (Missing PWA assets) | â€” (regla existe en spec pero no se extrajo como rule atÃ³mica) |

---

## Notas

- **Backlog gaps = 8; GAP rules en `traceability_matrix.md` = 3** (los que carecen de fuente suficiente para volverse regla: UI-LAY-007, UI-NAV-008, UI-STP-009).
- **Lifecycle policy (general):** todo GAP de impacto **ALTO** debe convertirse en ADR en Gate 3 (definir decisiÃ³n, no esperar fuente externa). Una vez que el ADR sea aceptado, el GAP sale del backlog y pasa a "decisiÃ³n tomada" en Gate 4.
- Los GAPs de **impacto ALTO** son: GAP-001 (404), GAP-005 (dark mode), GAP-006 (estados), GAP-007 (tipografÃ­a). **Todos DECIDED vÃ­a ADR ACCEPTED (2026-02-26).**
- GAP-005 (dark mode): pospuesto a Ã‰poca 3+ vÃ­a ADR-0005 (ACCEPTED).
- GAP-007 (tipografÃ­a): migraciÃ³n a Nunito Sans + IBM Plex aprobada vÃ­a ADR-0007 (ACCEPTED). ImplementaciÃ³n en Gate 5+.

```


---

#### FILE: `docs-ui/_gate2/validation_report.md`

```markdown
# âœ… Gate 2 â€” Validation Report

**PropÃ³sito:** Anti-autoengaÃ±o. Valida integridad, precisiÃ³n (muestreo 20 reglas) y cobertura vs Ã‰poca 1.

---

## 1. Integridad

| MÃ©trica | Valor |
|---------|-------|
| Total reglas | 74 |
| OK | 69 (93.2%) |
| CONFLICTO | 2 (2.7%) |
| GAP | 3 (4.1%) |
| Reglas sin DOCREF | **0** âœ… |
| CategorÃ­as cubiertas | 10/10 |
| Fuentes en Source Map | 17 |
| Fuentes activamente usadas | 4 |

---

## 2. Muestreo de PrecisiÃ³n (20 reglas en 9 categorÃ­as)

### CONTRACT

**UI-CTR-002** (PROHIBIDO colores partidistas)
- DOCREF: S03 â†’ F-05 â†’ L271
- Cita: "Paleta Terracota: sin colores partidistas (rojo UDI, azul PS, amarillo DC prohibidos)"
- âœ… La cita soporta la regla directamente. F-05 estÃ¡ marcada como APROBADA con severidad ALTA.

**UI-CTR-006** (Regla de Oro S4)
- DOCREF: S01 â†’ Â§6.2 â†’ L629
- Cita: "Si S4 (Mayor Cauteloso, 65+ aÃ±os, Android Go de $50 USD, conexiÃ³n 3G) puede completar un flujo sin ayuda externa, el diseÃ±o es correcto."
- âœ… Cita literal. Criterio de aceptaciÃ³n universal para diseÃ±o.

### TOKENS

**UI-TOK-001** (4 colores primarios)
- DOCREF: S02 â†’ Â§1.1 â†’ L71
- Cita: "Los 4 colores core que definen la identidad visual de CIVICUM"
- âœ… Tabla con HEX, RGB, HSL, contraste WCAG para cada color. Evidencia exhaustiva.

**UI-TOK-003** (Espaciado base 4px)
- DOCREF: S01 â†’ Â§5.1 â†’ L570
- Cita: "Escala de Espaciado (Base 4px)" con tabla space-1(4px) a space-16(64px)
- âœ… 8 tokens definidos con valor exacto y uso.

**UI-TOK-007** (data-module)
- DOCREF: S01 â†’ Â§2.7 â†’ L355
- Cita: "[data-module='mi-civicum'] { --module-accent: var(--color-azul-500); --module-bg: var(--color-azul-50); }"
- âœ… CSS literal. Marcada CONFLICTO porque el cÃ³digo no lo implementa (correcto).

### COMPONENTS

**UI-CMP-001** (Lucide React, stroke 2px)
- DOCREF: S01 â†’ Â§4.1 â†’ L452
- Cita: "Base: Lucide React (stroke 2px, viewbox 24Ã—24, round linecap/linejoin)"
- âœ… Especificaciones exactas en tabla.

**UI-CMP-006** (Smart Dock badge)
- DOCREF: S01 â†’ Â§9.2 â†’ L1146
- Cita: "Badge notificaciÃ³n: Punto rojo 8px (sin nÃºmero â€” reduce ansiedad)"
- âœ… Cita literal con justificaciÃ³n de diseÃ±o.

### LAYOUTS

**UI-LAY-001** (Breakpoints)
- DOCREF: S01 â†’ Â§6.1 â†’ L618
- Cita: tabla con 6 breakpoints: XS=360, SM=480, MD=768, LG=1024, XL=1280, 2XL=1536
- âœ… Cita precisa. Marcada CONFLICTO porque Tailwind defaults difieren (correcto).

**UI-LAY-004** (Dock responsive)
- DOCREF: S01 â†’ Â§6.3 â†’ L635
- Cita: "Smart Dock: Bottom bar 5 tabs | Bottom bar 5 tabs | Side rail"
- âœ… Tabla de comportamiento responsive por componente.

### NAVIGATION

**UI-NAV-001** (Dock order)
- DOCREF: S01 â†’ Â§9.1 â†’ L1129
- Cita: tabla con posiciones 1-5: Home, Aprende, Civia, Reporta, MÃ¡s
- âœ… Orden exacto con iconos y mÃ³dulos.

**UI-NAV-004** (Cambio atmÃ³sfera)
- DOCREF: S01 â†’ Â§9.3 â†’ L1152
- Cita: "Cada cambio de mÃ³dulo es un cambio de atmÃ³sfera"
- âœ… 5 pasos de transiciÃ³n documentados.

### CONTENT

**UI-CNT-003** (Palabras prohibidas)
- DOCREF: S01 â†’ Â§15.3 â†’ L1513
- Cita: "revoluciÃ³n Â· derrocar Â· enemigo Â· traidor Â· 'ellos' Â· 'la casta' Â· 'verdad absoluta' Â· 'garantizamos' Â· 'cambiemos el mundo'"
- âœ… Lista exhaustiva con backticks.

**UI-CNT-004** (Errores humanos)
- DOCREF: S01 â†’ Â§15.4 â†’ L1532
- Cita: "Algo fallÃ³ de nuestro lado. Guardamos tu trabajo."
- âœ… Copy exacto de la fuente.

### A11Y

**UI-A11-003** (Ãrea tÃ¡ctil)
- DOCREF: S01 â†’ Â§16.1 â†’ L1547
- Cita: "Ãrea tÃ¡ctil: 44Ã—44px, Objetivo: 48Ã—48px"
- âœ… WCAG estÃ¡ndar, valores exactos.

**UI-A11-008** (Reduced motion)
- DOCREF: S01 â†’ Â§16.2 â†’ L1561
- Cita: "ReducciÃ³n Movimiento: prefers-reduced-motion: reduce â†’ Cero animaciones, transiciones instantÃ¡neas"
- âœ… Cita con media query y comportamiento esperado.

### STATES/PERF

**UI-STP-001** (5 estados)
- DOCREF: S01 â†’ Â§12 â†’ L1356
- Cita: tabla con 5 filas: Loading (skeleton shimmer), Empty (ilustraciÃ³n+CTA), Error (toast Terracota), Offline (banner, no alarma), Success (checkmark verde)
- âœ… Cada estado con visual, texto y comportamiento.

**UI-STP-007** (Core Web Vitals)
- DOCREF: S01 â†’ Â§17.2 â†’ L1590
- Cita: "FCP â‰¤2.0s, LCP â‰¤4.0s, TTI â‰¤5.0s, CLS â‰¤0.2"
- âœ… Targets numÃ©ricos exactos con herramienta de mediciÃ³n.

### GOVERNANCE

**UI-GOV-001** (Prohibido FOMO)
- DOCREF: S07 â†’ Â§Notificaciones â†’ L31
- Cita: "FOMO manipulation | âœ… Prohibido | F-02 Honestidad Radical"
- âœ… Checklist anti-dark-patterns verificada.

**UI-GOV-004** (EliminaciÃ³n cuenta)
- DOCREF: S07 â†’ Â§RetenciÃ³n â†’ L46
- Cita: "Difficult account deletion | âœ… Prohibido | /api/me/delete en 1 click"
- âœ… Endpoint especÃ­fico + mecanismo.

### Resultado del muestreo

| MÃ©trica | Valor |
|---------|-------|
| Reglas muestreadas | 20 |
| CategorÃ­as cubiertas | 9 (CONTRACT, TOKENS, COMPONENTS, LAYOUTS, NAVIGATION, CONTENT, A11Y, STATES/PERF, GOVERNANCE) |
| DOCREFs verificados âœ… | 20/20 |
| Correcciones necesarias | 0 |

---

## 3. Cobertura vs Ã‰poca 1 (GAPs prioritarios â†’ reglas candidatas)

### Dark mode incompleto (G4/G7) â†’ CONTRACT / LAYOUTS / TOKENS

| GAP Inventario | Regla vinculada | Estado | Notas |
|---------------|-----------------|--------|-------|
| G4 (Dashboard no dark mode) | UI-LAY-007 (GAP dark mode) | GAP | No hay fuente que defina dark mode para Terracota. Requiere ADR en Gate 3. |
| G7 (AppLayout no dark mode) | UI-LAY-007 (GAP dark mode) | GAP | Same â€” afecta header + dock. |

### Falta 404 (G1) â†’ NAVIGATION

| GAP Inventario | Regla vinculada | Estado | Notas |
|---------------|-----------------|--------|-------|
| G1 (No 404 route) | UI-NAV-008 (GAP 404) | GAP | Ninguna fuente define pantalla 404 especÃ­fica, pero UI-STP-001 exige 5 estados por pantalla y UI-CNT-004 define copy de error. |

### Estados loading/error ausentes (varios) â†’ STATES_PERF

| GAP Inventario | Regla vinculada | Estado | Notas |
|---------------|-----------------|--------|-------|
| â€” (general) | UI-STP-001 (5 estados), UI-STP-002 (skeleton), UI-STP-004 (error toast) | OK (regla existe, implementaciÃ³n no) | Las reglas estÃ¡n bien documentadas pero no se han implementado en Ã‰poca 1. GAP-006 las cubre. |

---

## 4. ConclusiÃ³n

| Criterio "DONE" Gate 2 | Cumple |
|------------------------|--------|
| Matriz existe | âœ… `traceability_matrix.md` |
| 0 reglas sin DOCREF | âœ… (0/74) |
| Conflictos registrados | âœ… 2 en `conflicts_log.md` |
| Gaps registrados | âœ… 8 en `gaps_log.md` (3 elevados a GAP rules en matriz) |
| Muestreo 20 reglas | âœ… 20/20 verificados en 9 categorÃ­as |
| No cambios UI/cÃ³digo | âœ… Solo archivos .md en docs-ui/ y adr-ui/ |

**Gate 2: COMPLETO.** Listo para Gate 3 (resoluciÃ³n de conflictos vÃ­a ADR).

```


---

#### FILE: `docs-ui/_gate4/decision_import_map.md`

```markdown
# Gate 4 â€” Decision Import Map

**Fecha:** 2026-02-26
**PropÃ³sito:** Mapeo de importaciÃ³n de decisiones ADR ACCEPTED al pack docs-ui/00â€“09.

---

| ADR | Tema | Pack a actualizar | UI_RULE_ID afectados | QuÃ© cambia | Evidencia |
|-----|------|-------------------|---------------------|------------|-----------|
| ADR-0002 | `data-module` atmÃ³sferas | `03_LAYOUTS.md` | UI-TOK-007, UI-NAV-004, UI-PAT-002 | Regla: `data-module` como seÃ±al canÃ³nica de mÃ³dulo. Valores: 6 mÃ³dulos S01 + `unknown`=default. Gobernanza: no inventar valores sin DOCREF. | ADR-0002 ACCEPTED + DOCREF S01 Â§2.7 (L355), Â§9.3 (L1152) |
| ADR-0003 | Breakpoints oficiales | `03_LAYOUTS.md` | UI-LAY-001, UI-LAY-004, UI-CMP-006 | OpciÃ³n B elegida: override `sm=480px` + alias temporal `sm640=640px`. Breaking change para `sm:` clases. | ADR-0003 ACCEPTED (Daniel, OpciÃ³n B) + DOCREF S01 Â§6.1 (L618), Â§6.2 (L629) |
| ADR-0004 | Pantalla 404 | `04_NAVIGATION.md` | UI-NAV-008 | Regla: pantalla 404 personalizada dentro de AppLayout. Copy aprobado. Scope: solo AppLayout; standalone/onboarding excluido. | ADR-0004 ACCEPTED + DOCREF S01 Â§15.1, Â§15.4 |
| ADR-0005 | Dark mode postponement | `00_UI_CONTRACT.md` | UI-LAY-007 | Norma: dark mode no bloqueante Ã‰poca 1â€“2; pospuesto a Ã‰poca 3+ con spec mÃ­nima (tokens semÃ¡nticos, class-based, WCAG AA). | ADR-0005 ACCEPTED + DOCREF S01 Done UI |
| ADR-0006 | 5-state pattern | `08_STATES_OFFLINE_PERF.md` | UI-STP-001..005, UI-STP-009 | Norma: toda pantalla maneja 5 estados (loading/empty/error/offline/success). Loading en UI-kit Playwright; golden solo si Empty es estable. | ADR-0006 ACCEPTED + DOCREF S01 Â§12 (L1356) |
| ADR-0007 | TipografÃ­a | `01_TOKENS.md` | UI-TOK-009 | SecciÃ³n tipografÃ­a: Nunito Sans + IBM Plex Sans + IBM Plex Mono. Tier system (HIGH/MEDIUM/LOW). Budget: tier HIGH ~120KB vs UI-STP-008 â‰¤800KB. | ADR-0007 ACCEPTED + DOCREF S01 Â§3.1 (L394â€“396), Â§3.3 |

```


### 3.B — adr-ui/ files


---

#### FILE: `adr-ui/README.md`

```markdown
# ðŸ“ ADR â€” Architecture Decision Records (UI)

**UbicaciÃ³n:** `/adr-ui/`
**ConvenciÃ³n:** Toda decisiÃ³n arquitectÃ³nica de UI que introduzca, modifique o elimine un patrÃ³n, token, regla de navegaciÃ³n o contrato de componente **debe** documentarse como un ADR.

---

## Â¿QuÃ© es un ADR?

Un **Architecture Decision Record** es un documento corto e inmutable que captura:
- **Por quÃ©** se tomÃ³ una decisiÃ³n tÃ©cnica
- **QuÃ©** alternativas se evaluaron
- **CuÃ¡les** son las consecuencias esperadas

Los ADRs son la memoria institucional del proyecto. Nunca se borran; si una decisiÃ³n se revierte, se crea un nuevo ADR que la **supersede** (referenciando el anterior).

---

## Â¿CuÃ¡ndo se requiere un ADR?

Se **requiere** un ADR antes de:
- Introducir un nuevo token o modificar la escala de tokens existentes
- Agregar un componente UI que no exista en el catÃ¡logo actual
- Cambiar el sistema de navegaciÃ³n o agregar nuevas rutas protegidas
- Modificar el contrato de `AppLayout` o crear un layout alternativo
- Cambiar la estrategia de dark mode, accesibilidad o estados offline
- Adoptar o descartar una dependencia de UI (ej.: nueva librerÃ­a de animaciones)
- Cualquier cambio que afecte a mÃ¡s de 3 archivos de UI simultÃ¡neamente

**No** se requiere para:
- Correcciones menores de estilo (typos CSS, ajustes de espaciado < 4px)
- Bug fixes que restauren comportamiento ya documentado
- ActualizaciÃ³n de screenshots de baseline

---

## ConvenciÃ³n de NumeraciÃ³n

```
ADR-NNNN-slug-descriptivo.md
```

- `NNNN`: nÃºmero secuencial de 4 dÃ­gitos, empezando en `0001`
- `slug`: kebab-case describiendo la decisiÃ³n (mÃ¡x 5 palabras)
- `0000` estÃ¡ reservado para la **plantilla**

Ejemplos:
- `ADR-0001-ssot-ui-docs.md`
- `ADR-0002-dark-mode-strategy.md`
- `ADR-0003-remove-framer-motion.md`

---

## Estado de un ADR

| Estado | Significado |
|--------|-------------|
| `PROPOSED` | En borrador, abierto a feedback |
| `ACCEPTED` | Aprobado, se puede implementar |
| `SUPERSEDED` | Reemplazado por un ADR posterior (enlazado) |
| `REJECTED` | Evaluado y descartado (se conserva para registro) |

---

## CÃ³mo se decide "ACCEPTED"

**Aprobador: Daniel.** ACCEPTED = aprobado por Daniel.

1. El autor crea el ADR usando la plantilla `ADR-0000-template.md`
2. Se revisa en el contexto del proyecto (coherencia con SSOT, impacto tÃ©cnico)
3. Si Daniel aprueba, se cambia el estado a `ACCEPTED` y se fecha
4. El cambio correspondiente se implementa en cÃ³digo y se actualiza el archivo del pack (00â€“09) en `/docs-ui/`

---

## Ãndice de ADRs

| # | TÃ­tulo | Estado | Fecha |
|---|--------|--------|-------|
| [ADR-0001](./ADR-0001-ssot-ui-docs.md) | SSOT para documentaciÃ³n UI | ACCEPTED | 2026-02-24 |
| [ADR-0002](./ADR-0002-data-module-atmosferas.md) | `data-module` para atmÃ³sferas cromÃ¡ticas | ACCEPTED | 2026-02-26 |
| [ADR-0003](./ADR-0003-breakpoints-oficiales-vs-tailwind.md) | Breakpoints oficiales vs Tailwind defaults | ACCEPTED | 2026-02-26 |
| [ADR-0004](./ADR-0004-diseno-404.md) | DiseÃ±o de pantalla 404 | ACCEPTED | 2026-02-26 |
| [ADR-0005](./ADR-0005-dark-mode-especificacion-minima.md) | Dark mode â€” especificaciÃ³n mÃ­nima | ACCEPTED | 2026-02-26 |
| [ADR-0006](./ADR-0006-estados-por-pantalla.md) | Estados obligatorios por pantalla (5-state) | ACCEPTED | 2026-02-26 |
| [ADR-0007](./ADR-0007-tipografia-decision.md) | TipografÃ­a â€” Inter vs Nunito Sans + IBM Plex | ACCEPTED | 2026-02-26 |

```


---

#### FILE: `adr-ui/ADR-0000-template.md`

```markdown
# ADR-0000: Plantilla de Architecture Decision Record

- **Estado:** N/A (plantilla)
- **Fecha:** â€”
- **Autor:** â€”
- **Supersede:** â€”

---

## Contexto

<!-- Â¿CuÃ¡l es el problema o la necesidad que motiva esta decisiÃ³n? Incluye contexto tÃ©cnico y de producto. -->

TODO: Describir el contexto

## DecisiÃ³n

<!-- Â¿QuÃ© se decidiÃ³ hacer? SÃ© especÃ­fico: quÃ© patrÃ³n, token, componente, ruta, etc. -->

TODO: Describir la decisiÃ³n

## Alternativas Consideradas

<!-- Lista de opciones evaluadas con pros/contras breves -->

### Alternativa A: [nombre]
- **Pros:** â€”
- **Contras:** â€”

### Alternativa B: [nombre]
- **Pros:** â€”
- **Contras:** â€”

## Consecuencias

<!-- Â¿QuÃ© implica esta decisiÃ³n? Tanto positivas como negativas. -->

- **Positivas:** â€”
- **Negativas:** â€”
- **Riesgos:** â€”

## Referencias

<!-- DOCREF: enlaces a docs-ui/, docs/, o fuentes externas que respalden la decisiÃ³n -->

- DOCREF: `docs-ui/XX_ARCHIVO.md` Â§secciÃ³n
- Link: [recurso externo](https://...)

---

> âœ… **AprobaciÃ³n (Daniel): PENDIENTE** â€” no ejecutar implementaciÃ³n hasta aprobaciÃ³n.

```


---

#### FILE: `adr-ui/ADR-0001-ssot-ui-docs.md`

```markdown
# ADR-0001: SSOT para DocumentaciÃ³n UI

- **Estado:** ACCEPTED
- **Fecha:** 2026-02-24
- **Autor:** Antigravity (Gate 1)
- **Supersede:** Ninguno (ADR inaugural)

---

## Contexto

CIVICUM tiene ~700 archivos de documentaciÃ³n distribuidos en 53 directorios bajo `/docs/`. Muchos de estos archivos contienen directrices de UI, diseÃ±o, accesibilidad y UX que fueron escritas en fases de investigaciÃ³n y auditorÃ­a, pero no fueron diseÃ±adas como especificaciones ejecutables para el equipo de desarrollo.

Esto genera ambigÃ¼edad: cuando un desarrollador necesita saber "Â¿quÃ© tokens de color usar?" o "Â¿cÃ³mo debe comportarse el Smart Dock?", debe buscar en mÃºltiples documentos que pueden contradecirse o estar desactualizados.

Se necesita una **fuente Ãºnica de verdad** (SSOT) que sea:
1. **Autoritativa** â€” si estÃ¡ aquÃ­, es ley
2. **Trazable** â€” cada regla tiene un origen documentado (DOCREF o ADR)
3. **Verificable** â€” se puede auditar contra el cÃ³digo real

## DecisiÃ³n

1. **`/docs-ui/`** es la Ãºnica fuente normativa de UI. Contiene un pack de 10 documentos (00â€“09) que cubren contratos, tokens, componentes, layouts, navegaciÃ³n, patrones, contenido, a11y, estados y gobernanza.

2. **`/adr-ui/`** contiene todas las decisiones arquitectÃ³nicas de UI en formato ADR (Architecture Decision Record). Cualquier cambio de patrÃ³n, token o navegaciÃ³n requiere un ADR aceptado antes de implementarse.

3. **Todo lo demÃ¡s** (`/docs/knowledge-base/`, `/docs/ux/`, `/docs/frontend/`, etc.) es material histÃ³rico o inspiracional. Si una regla de esos documentos debe ser normativa, se importa formalmente a `/docs-ui/` citando la fuente original.

4. **ConvenciÃ³n de nombres:**
   - Pack UI: `docs-ui/NN_NOMBRE.md` donde NN = 00â€“09
   - ADRs: `adr-ui/ADR-NNNN-slug.md` donde NNNN = 0001+
   - Inventarios: `docs-ui/epochN_inventory.md`

## Alternativas Consideradas

### Alternativa A: Usar `/docs/ux/` directamente como SSOT
- **Pros:** No requiere crear estructura nueva, los documentos ya existen
- **Contras:** Esos documentos fueron escritos como investigaciÃ³n/auditorÃ­a, no como specs ejecutables. Contienen recomendaciones mezcladas con anÃ¡lisis, sin formato uniforme ni versionado

### Alternativa B: Inline en cÃ³digo (JSDoc / comentarios)
- **Pros:** La documentaciÃ³n vive junto al cÃ³digo, siempre actualizada
- **Contras:** No permite visiÃ³n sistÃ©mica, difÃ­cil de auditar, no cubre decisiones de producto

### Alternativa C: Wiki externa (Notion/Confluence)
- **Pros:** Interfaz rica, colaborativa
- **Contras:** Rompe el principio "docs-as-code", no versionable con Git, dependencia externa, viola F-43 (zero-cost)

## Consecuencias

- **Positivas:**
  - Elimina ambigÃ¼edad: una sola fuente para buscar respuestas de UI
  - Trazabilidad total: cada regla tiene DOCREF o ADR
  - Auditable: Gate 4 puede verificar que cÃ³digo â†” docs estÃ¡n sincronizados
  - Compatible con CI: se pueden crear checks automÃ¡ticos contra el pack

- **Negativas:**
  - Requiere esfuerzo de migraciÃ³n: las reglas de `/docs/` relevantes deben importarse manualmente
  - Overhead de proceso: todo cambio de patrÃ³n requiere un ADR (pero es intencional â€” previene drift)

- **Riesgos:**
  - Si el pack no se mantiene actualizado, pierde valor. MitigaciÃ³n: Gate 4 lo impone como criterio de "Done UI"

## Referencias

- DOCREF: `docs-ui/README.md` â€” DeclaraciÃ³n SSOT y proceso de cambio
- DOCREF: `docs-ui/epoch1_inventory.md` â€” Inventario baseline de Ã‰poca 1
- DOCREF: `docs/knowledge-base/CIVICUM_Anexo_Design_System_Terracota.docx.md` â€” Fuente histÃ³rica de tokens
- DOCREF: `docs/ux/soulful-copywriting-terracotta.md` â€” Fuente histÃ³rica de tono y microcopy
- DOCREF: `docs/knowledge-base/CIVICUM_Anexo_Decisiones_F01_F47_Exhaustivo.docx.md` â€” Decisiones formales del proyecto

```


---

#### FILE: `adr-ui/ADR-0002-data-module-atmosferas.md`

```markdown
# ADR-0002: ImplementaciÃ³n de `data-module` para cambio de atmÃ³sfera cromÃ¡tica

- **Estado:** ACCEPTED
- **Fecha:** 2026-02-25
- **Daniel decision:** ACCEPTED â€” opciÃ³n elegida: A (Ãºnica propuesta)
- **Decision date:** 2026-02-26
- **Autor:** Antigravity (para aprobaciÃ³n de Daniel)
- **Afecta:** UI-TOK-007, UI-NAV-004, UI-PAT-002 | CONFLICT-001
- **Supersede:** â€”

---

## Contexto

La spec de diseÃ±o (S01 â†’ Â§2.7, Â§9.3) define que cada mÃ³dulo CIVICUM debe usar un atributo `data-module` en su contenedor raÃ­z para activar variables CSS `--module-accent` y `--module-bg`, generando un "cambio de atmÃ³sfera" cromÃ¡tica al navegar entre mÃ³dulos.

El cÃ³digo de Ã‰poca 1 **no implementa** `data-module`. El AppLayout y las vistas no aplican esta convenciÃ³n. Esto genera CONFLICT-001 entre la spec documental y la realidad del cÃ³digo.

- **DOCREF:** S01 â†’ Â§2.7 â†’ `[data-module='mi-civicum'] { --module-accent: var(--color-azul-500) }` (L355)
- **DOCREF:** S01 â†’ Â§9.3 â†’ "Cada cambio de mÃ³dulo es un cambio de atmÃ³sfera" (L1152)

## DecisiÃ³n

Implementar `data-module` en el contenedor raÃ­z de cada mÃ³dulo, asignando el atributo segÃºn la ruta activa. Los valores corresponden a los 6 mÃ³dulos definidos en la spec (DOCREF: S01 â†’ Â§2.7, L351-371 selectores CSS; S01 â†’ Â§20, L1749-1754 estructura de carpetas):

`mi-civicum`, `academia`, `civia`, `alza-la-voz`, `cuentas-claras`, `voto-ciudadano`

Las CSS variables `--module-accent` y `--module-bg` se definirÃ¡n con los selectores `[data-module="xxx"]`.

> **Nota â€” CÃ­rculos:** "CÃ­rculos" no aparece como mÃ³dulo en la spec de diseÃ±o (S01). Si existen rutas de producto que actÃºan como mÃ³dulo (ej. `/circulos`) pero no estÃ¡n en S01, el atributo debe usar un valor `unknown` temporal o requerir ADR de "definiciÃ³n de mÃ³dulos" antes de implementar theming para ese mÃ³dulo. No se deben inventar valores `data-module` sin DOCREF. `unknown` no activa atmÃ³sferas; usa tokens default (sin acento por mÃ³dulo) hasta que exista ADR.

## Alternativas Consideradas

### Alternativa A: Implementar vÃ­a `data-module` en contenedor raÃ­z (propuesta)
- **Pros:** Alineado 1:1 con la spec, theming vÃ­a CSS variables (un solo punto de control); el valor de `data-module` se deriva en runtime (ruteo)
- **Contras:** Requiere refactor del AppLayout para inyectar el atributo dinÃ¡micamente

### Alternativa B: Implementar vÃ­a Zustand + className condicional
- **Pros:** MÃ¡s familiar para devs React, ya existe store Zustand
- **Contras:** Diverge de la spec (no usa `data-module`), acopla theming a JS, mÃ¡s difÃ­cil de auditar visualmente

### Alternativa C: Posponer a Ã‰poca 2 (solo Dashboard y Perfil existen hoy)
- **Pros:** No tocamos cÃ³digo innecesariamente, solo 2 mÃ³dulos activos
- **Contras:** El conflicto sigue abierto, deuda acumula, futuras pantallas nacerÃ­an sin convenciÃ³n

## Consecuencias

- **Positivas:** Resuelve CONFLICT-001, habilita regresiÃ³n visual por mÃ³dulo, establece convenciÃ³n para Ã‰poca 2+
- **Negativas:** EstimaciÃ³n ~2-4h de implementaciÃ³n en contenedor raÃ­z + tokens CSS
- **Riesgos:** Si se elige Alternativa C, la deuda se multiplica con cada mÃ³dulo nuevo. Si se elige A, hay riesgo bajo de regresiÃ³n en las 2 vistas existentes.

## VerificaciÃ³n (Gate 5+)

- Visual regression: Golden screenshots deben mostrar acento correcto por mÃ³dulo
- E2E: Playwright test que navega entre mÃ³dulos y verifica `data-module` attribute en DOM
- UI-kit: No aplica (es layout, no componente aislado)

## Plan de implementaciÃ³n (no ejecutar aÃºn)

1. Agregar CSS variables `[data-module="xxx"]` en archivo de tokens (ubicaciÃ³n TBD)
2. En el contenedor raÃ­z (ej. `AppLayout`), derivar `data-module` de la ruta activa (mecanismo TBD)
3. Aplicar `data-module` al contenedor principal
4. Verificar desktop + mobile para Dashboard y Perfil
5. Actualizar golden screenshots si los colores cambian visiblemente

## Referencias

- DOCREF: `docs/knowledge-base/CIVICUM_Diseno_UI_UX_Definitivo.md` Â§2.7 (L355)
- DOCREF: `docs/knowledge-base/CIVICUM_Diseno_UI_UX_Definitivo.md` Â§9.3 (L1152)
- DOCREF: `docs-ui/traceability_matrix.md` â†’ UI-TOK-007, UI-NAV-004, UI-PAT-002
- DOCREF: `docs-ui/_gate2/conflicts_log.md` â†’ CONFLICT-001

---

> âœ… **AprobaciÃ³n (Daniel): COMPLETADA** â€” se autoriza implementaciÃ³n segÃºn el plan (Gate 5+).

```


---

#### FILE: `adr-ui/ADR-0003-breakpoints-oficiales-vs-tailwind.md`

```markdown
# ADR-0003: Breakpoints oficiales vs Tailwind defaults

- **Estado:** ACCEPTED
- **Fecha:** 2026-02-25
- **Daniel decision:** ACCEPTED â€” opciÃ³n elegida: B (override + alias temporal de migraciÃ³n)
- **Decision date:** 2026-02-26
- **Autor:** Antigravity (para aprobaciÃ³n de Daniel)
- **Afecta:** UI-LAY-001, UI-LAY-004, UI-CMP-006 | CONFLICT-002
- **Supersede:** â€”

---

## Contexto

La spec de diseÃ±o (S01 â†’ Â§6.1) define 6 breakpoints mobile-first: XS=360px, SM=480px, MD=768px, LG=1024px, XL=1280px, 2XL=1536px. Tailwind CSS 3.x defaults difieren: sm=640px, md=768px, lg=1024px, xl=1280px, 2xl=1536px. No existe `xs` en Tailwind defaults, y `sm` es 640px (no 480px).

El cÃ³digo de Ã‰poca 1 usa Tailwind defaults. Esto genera CONFLICT-002 entre la spec documental y la configuraciÃ³n actual.

- **DOCREF:** S01 â†’ Â§6.1 â†’ tabla "Breakpoints Oficiales" (L618)
- **DOCREF:** S01 â†’ Â§6.2 â†’ "Regla de Oro: si S4 (Android Go $50, 360px)..." (L629)

## DecisiÃ³n

Se aprueba alinear la configuraciÃ³n de Tailwind con los breakpoints de S01 (DOCREF: S01 â†’ Â§6.1, L618). **Daniel eligiÃ³ estrategia:** OpciÃ³n B (override + alias temporal de migraciÃ³n) â€” ver secciÃ³n "Compatibilidad / MigraciÃ³n" mÃ¡s abajo. **ImplementaciÃ³n autorizada en Gate 5+ segÃºn plan.**

ConfiguraciÃ³n objetivo (OpciÃ³n B, elegida por Daniel):

```js
screens: {
  'xs': '360px',   // NUEVO â€” Android Go, mÃ³viles bÃ¡sicos
  'sm': '480px',   // OVERRIDE â€” mÃ³viles medianos (era 640px)
  'md': '768px',   // SIN CAMBIO
  'lg': '1024px',  // SIN CAMBIO
  'xl': '1280px',  // SIN CAMBIO
  '2xl': '1536px', // SIN CAMBIO
}
```

**Si se elige OpciÃ³n B, esto es un breaking change para clases `sm:`** (pasan de 640px a 480px). Auditar el cÃ³digo existente para clases `sm:` que asumÃ­an 640px y ajustar.

> **Baseline histÃ³rico vs validaciÃ³n S4:** Los breakpoints Tailwind defaults (sm=640px) son el baseline histÃ³rico del cÃ³digo actual. El objetivo de esta migraciÃ³n no es solo alinear con la spec, sino habilitar la **validaciÃ³n S4** (Android Go, 360px) como criterio de aceptaciÃ³n real (DOCREF: S01 â†’ Â§6.2, L629). El breakpoint `xs: 360px` es el umbral mÃ­nimo de diseÃ±o; `sm: 480px` cubre mÃ³viles medianos (hipÃ³tesis: validar con analytics cuando exista).

## Alternativas Consideradas

### Alternativa 1: Extender Tailwind con breakpoints de la spec (alternativa recomendada)
- **Pros:** AlineaciÃ³n 1:1 con spec, habilita diseÃ±o real para Android Go (360px), `sm` a 480px cubre mejor el rango mÃ³vil medio (hipÃ³tesis a validar con analytics)
- **Contras:** **Breaking change**: clases `sm:` existentes ahora aplican desde 480px (no 640px). Inventario actual: estimaciÃ³n ~1 archivo afectado (verificar con `grep` antes de implementar)

### Alternativa 2: Mantener Tailwind defaults + alias custom
- **Pros:** No rompe nada existente, cero regresiÃ³n
- **Contras:** Diverge de la spec, crea confusiÃ³n ("Â¿cuÃ¡l sm uso?"), `xs` no existe como clase utility

### Alternativa 3: No usar breakpoints Tailwind, usar CSS custom media queries
- **Pros:** Control total, cero dependencia de convenciÃ³n Tailwind
- **Contras:** Pierde beneficio de utility classes, duplica sistema, inconsistente con stack elegido

## Consecuencias

- **Positivas:** S4 (Android Go 360px) tiene breakpoint dedicado, diseÃ±o mobile-first real, spec y cÃ³digo alineados
- **Negativas:** Requiere auditorÃ­a de clases `sm:` existentes (estimaciÃ³n preliminar: ~1 archivo; verificar con grep real antes de implementar), posible regresiÃ³n visual en rango 480-640px
- **Riesgos:** Si hay clases `sm:` que asumen 640px, el cambio puede causar regresiÃ³n visual. MitigaciÃ³n: `grep -r "sm:" webapp/src/` antes de implementar para inventario exacto.

## VerificaciÃ³n (Gate 5+)

- Golden screenshots (solo `golden_screens.md` con Estado=Completo): desktop + mobile (360px)
- Visual regression: Playwright en 360px, 480px, 768px, 1024px
- E2E: Verificar que Smart Dock pasa de bottom bar a side rail en LG (1024px)

## Compatibilidad / MigraciÃ³n

Dos estrategias posibles â€” **Daniel eligiÃ³ OpciÃ³n B** al aprobar este ADR:

### OpciÃ³n A: Segura (alias sin override)

Mantener `sm=640px` de Tailwind intacto. Agregar alias nuevos:

```js
screens: {
  'xs': '360px',   // NUEVO
  's480': '480px', // NUEVO â€” alias para SM de la spec
  // sm, md, lg, xl, 2xl = Tailwind defaults sin tocar
}
```

- **Pro:** Cero regresiÃ³n, cero migraciÃ³n de clases existentes.
- **Contra:** Diverge de nomenclatura S01 (`sm` en spec â‰  `sm` en cÃ³digo). Requiere ADR adicional si se desea alinear en el futuro.

### OpciÃ³n B: Alineada a S01 (override con alias de escape)

Override `sm=480px` segÃºn spec. Agregar alias temporal `sm640=640px`:

```js
screens: {
  'xs': '360px',    // NUEVO
  'sm': '480px',    // OVERRIDE
  'sm640': '640px', // ALIAS TEMPORAL â€” para migraciÃ³n de usos existentes
  // md, lg, xl, 2xl = sin cambio
}
```

- **Plan de migraciÃ³n:** Renombrar todos los usos actuales de `sm:` â†’ `sm640:` durante implementaciÃ³n (inventario: estimaciÃ³n ~1 archivo). Una vez migrados, eliminar alias `sm640` en Ã‰poca 2+.
- **Pro:** AlineaciÃ³n 1:1 con spec desde el inicio.
- **Contra:** Requiere paso de rename explÃ­cito (no "auditar" como verbo mÃ¡gico).

---

## Plan de implementaciÃ³n (no ejecutar aÃºn)

1. `grep -r "sm:" webapp/src/` â†’ inventariar todas las clases afectadas (estimaciÃ³n preliminar: ~1 archivo)
2. Actualizar `tailwind.config.ts` con nuevos breakpoints
3. Auditar y ajustar cada archivo donde `sm:` asumÃ­a 640px
4. Build + visual check en 360px, 480px, 768px, 1024px
5. Actualizar golden screenshots si cambian

## Referencias

- DOCREF: `docs/knowledge-base/CIVICUM_Diseno_UI_UX_Definitivo.md` Â§6.1 (L618)
- DOCREF: `docs/knowledge-base/CIVICUM_Diseno_UI_UX_Definitivo.md` Â§6.2 (L629)
- DOCREF: `docs-ui/traceability_matrix.md` â†’ UI-LAY-001
- DOCREF: `docs-ui/_gate2/conflicts_log.md` â†’ CONFLICT-002

---

> âœ… **AprobaciÃ³n (Daniel): COMPLETADA** â€” se autoriza implementaciÃ³n segÃºn el plan (Gate 5+).

```


---

#### FILE: `adr-ui/ADR-0004-diseno-404.md`

```markdown
# ADR-0004: DiseÃ±o de pantalla 404

- **Estado:** ACCEPTED
- **Fecha:** 2026-02-25
- **Daniel decision:** ACCEPTED â€” opciÃ³n elegida: A (Ãºnica propuesta)
- **Decision date:** 2026-02-26
- **Autor:** Antigravity (para aprobaciÃ³n de Daniel)
- **Afecta:** UI-NAV-008 | GAP-001
- **Supersede:** â€”

---

## Contexto

No existe ruta catch-all ni pantalla para URLs invÃ¡lidas. Un usuario que acceda a `/ruta-inexistente` obtiene un blank o un error genÃ©rico del framework. Esto viola UI-CTR-006 (Regla de Oro S4: flujo completable) y UI-CNT-004 (errores humanos, no tÃ©cnicos).

Ninguna fuente de diseÃ±o define explÃ­citamente una pantalla 404, por lo que este ADR **crea** la decisiÃ³n (no espera fuente externa).

- **DOCREF:** `docs-ui/traceability_matrix.md` â†’ UI-NAV-008 (GAP)
- **DOCREF:** `docs-ui/_gate2/gaps_log.md` â†’ GAP-001

## Scope

- **Dentro de scope:** Este 404 es para rutas dentro de AppLayout (Smart Dock visible).
- **Fuera de scope:** 404 para flujos standalone/onboarding queda fuera de scope y requerirÃ¡ ADR separado si aparece el caso.

## DecisiÃ³n

Crear una pantalla 404 personalizada alineada al tono CIVICUM: empÃ¡tica, directa, no tÃ©cnica, no culpabilizante (ref: UI-CNT-001, DOCREF: S01 â†’ Â§15.1 L1500; UI-CNT-004, DOCREF: S01 â†’ Â§15.4 L1532).

Requisitos funcionales:

1. **Logo CIVICUM** centrado
2. **Copy principal y secundario:** *(Copy aprobado en este ADR)*
   - "Esta pÃ¡gina no existe â€” pero tu camino cÃ­vico sÃ­."
   - "QuizÃ¡s la direcciÃ³n cambiÃ³ o escribiste algo distinto."
3. **CTA primario:** AcciÃ³n que lleve al inicio (Dashboard)
4. **CTA secundario:** AcciÃ³n que permita explorar mÃ³dulos
5. **NavegaciÃ³n:** Smart Dock permanece visible (no standalone layout)
6. **Registro de URL intentado:** *(requiere ADR separado de telemetrÃ­a/privacy â€” no es decisiÃ³n de UI pura)*

## Alternativas Consideradas

### Alternativa A: Pantalla 404 personalizada con CTAs (aceptada)
- **Pros:** Digna, alineada a tono CIVICUM, recupera al usuario, detecta enlaces rotos
- **Contras:** Requiere crear componente nuevo + ruta + copy aprobado

### Alternativa B: Redirect silencioso a Dashboard
- **Pros:** Cero UI nueva, usuario siempre llega a algo funcional
- **Contras:** Confuso (no explica quÃ© pasÃ³), oculta errores de enlace, viola F-02 (honestidad)

### Alternativa C: PÃ¡gina 404 genÃ©rica (texto mÃ­nimo)
- **Pros:** RÃ¡pido de implementar
- **Contras:** No sigue tono CIVICUM, experiencia pobre, no ayuda al usuario a navegar

## Consecuencias

- **Positivas:** Cierra GAP-001, mejora UX de error, detecta enlaces rotos, alineada a F-02
- **Negativas:** ~2h implementaciÃ³n (estimaciÃ³n), copy aprobado en este ADR
- **Riesgos:** Copy ya aprobado; validar legibilidad/a11y en implementaciÃ³n

## VerificaciÃ³n

- E2E: Playwright navega a `/ruta-inexistente`, verifica presencia de copy + CTAs
- Golden screenshots: 404 desktop + mobile (candidata a golden screen vÃ­a ADR)
  - **Nota:** 404 no es golden por defecto; se agrega a `golden_screens.md` solo vÃ­a ADR explÃ­cito.
- Test a11y: contraste, focus, aria-labels en CTAs

## Plan de implementaciÃ³n (no ejecutar aÃºn)

> **(HistÃ³rico)** â€” ya implementado en Gate 5.2; ver [Implementation record](#implementation-record-gate-52) abajo.

1. Ruta catch-all: configurar ruta comodÃ­n (`path="*"`) en el router (ubicaciÃ³n TBD)
2. Crear componente de pantalla 404 (nombre y ubicaciÃ³n TBD) con layout AppShell (Smart Dock visible)
   - Sugerencia: usar isotipo (no texto completo) â€” opciÃ³n a validar con diseÃ±o
3. Implementar copy y CTAs segÃºn decisiÃ³n aprobada
4. Capturar golden screenshots
5. Agregar a `golden_screens.md` si se decide que es golden (ADR separado)

## Referencias

- DOCREF: `docs-ui/traceability_matrix.md` â†’ UI-NAV-008, UI-CTR-006, UI-CNT-004
- DOCREF: `docs-ui/_gate2/gaps_log.md` â†’ GAP-001
- DOCREF: `docs/knowledge-base/CIVICUM_Diseno_UI_UX_Definitivo.md` Â§15.4 "Errores humanos" (L1532)

---

> âœ… **AprobaciÃ³n (Daniel): COMPLETADA** â€” implementaciÃ³n realizada en Gate 5.2; ver Implementation record.

---

## Implementation record (Gate 5.2)

- **Implemented in:** commit `7bb2c42` â€” catch-all `path="*"` inside AppLayout + `NotFoundPage.tsx`
  - Files (src): `webapp/src/main.tsx`, `webapp/src/pages/not-found/NotFoundPage.tsx`
- **CTA primario:** "Volver al inicio" â†’ navega a `/` (Dashboard)
- **CTA secundario:** "Explorar mÃ³dulos" â†’ navega a `/alza-la-voz` (primer mÃ³dulo disponible en Smart Dock)
  - Elegido porque es el primer mÃ³dulo disponible en Smart Dock al momento de Gate 5.2; si el orden/rutas cambian, actualizar este record y el smoke test.
- **Verified by:** Playwright `smoke.notfound.spec.ts` (commit `6cf97d6`) â€” asserts AppLayout header, exact ADR-0004 copy, CTA navigation, zero JS errors
  - Test original: `smoke.notfound-pre404.spec.ts` (created in `7bb2c42`, renamed to `smoke.notfound.spec.ts` in `6cf97d6`)
  - Files (commit `6cf97d6`): `webapp/tests/e2e/smoke.notfound.spec.ts` (created), `webapp/tests/e2e/smoke.notfound-pre404.spec.ts` (deleted), `docs-ui/traceability_matrix.md`
- **Traceability:** UI-NAV-008 actualizado en `docs-ui/traceability_matrix.md`


```


---

#### FILE: `adr-ui/ADR-0005-dark-mode-especificacion-minima.md`

```markdown
# ADR-0005: Dark mode â€” especificaciÃ³n mÃ­nima implementable

- **Estado:** ACCEPTED
- **Fecha:** 2026-02-25
- **Daniel decision:** ACCEPTED â€” opciÃ³n elegida: A (Ãºnica propuesta)
- **Decision date:** 2026-02-26
- **Autor:** Antigravity (para aprobaciÃ³n de Daniel)
- **Afecta:** UI-LAY-007 | GAP-005
- **Supersede:** â€”

---

## Contexto

`README.md` â†’ Done UI incluye "Dark mode: responde a la fuente de tema definida en el sistema" como criterio de completitud. Sin embargo, ninguna fuente de diseÃ±o define una paleta dark mode implementable para CIVICUM. S02 (Design System Terracota) menciona dark mode como concepto pero no provee tokens, contrastes ni mapping de colores para un tema oscuro.

Esto genera GAP-005: la regla existe como criterio, pero no hay especificaciÃ³n para cumplirla.

- **DOCREF:** `docs-ui/README.md` â†’ Done UI â†’ "Dark mode" (L82)
- **DOCREF:** `docs-ui/_gate2/gaps_log.md` â†’ GAP-005

## DecisiÃ³n

**Posponer dark mode a Ã‰poca 3+**, con las siguientes condiciones:

1. **Ã‰poca 1-2:** Solo tema claro. Eliminarlo de Done UI como bloqueante; mantenerlo como aspiraciÃ³n documentada.
2. **Ã‰poca 3 (prerrequisito):** Crear spec de tokens dark mode en `01_TOKENS.md`. Requisitos verificables:
   - (i) Dark mode se define vÃ­a **tokens semÃ¡nticos** (background, surface, text-primary, accent) â€” valores concretos TBD en la spec de tokens.
   - (ii) ActivaciÃ³n **class-based** (`[data-theme="dark"]`) + respeto a `prefers-color-scheme` del usuario.
   - (iii) **Contraste WCAG AA** en ambos temas como condiciÃ³n de "Done".
3. **Criterio de aceptaciÃ³n:** No se marca dark mode como "hecho" hasta que los 3 requisitos anteriores se cumplan y verifiquen.

## Alternativas Consideradas

### Alternativa A: Posponer a Ã‰poca 3+ con spec mÃ­nima documentada (propuesta)
- **Pros:** No bloquea Ã‰poca 1-2, documenta intenciÃ³n, define prerequisitos claros
- **Contras:** Dark mode no disponible para usuarios que lo necesitan (AMOLED battery, preferencia visual)

### Alternativa B: Implementar dark mode mÃ­nimo ahora (Azul Profundo base)
- **Pros:** Disponible desde Ã‰poca 1, cubre usuarios con preferencia dark
- **Contras:** Sin spec aprobada = tokens inventados, alto riesgo de contrastes fallidos, doble trabajo si la spec final difiere, no hay golden screenshots de referencia

### Alternativa C: Eliminar dark mode del roadmap completamente
- **Pros:** Simplifica, no hay deuda
- **Contras:** Ignora una proporciÃ³n significativa de usuarios mÃ³viles que prefieren dark mode (hipÃ³tesis a validar con datos reales), reduce opciones de accesibilidad, competitivamente dÃ©bil

## Consecuencias

- **Positivas:** Desbloquea Ã‰pocas 1-2 sin deuda de calidad, prioriza funcionalidad core sobre cosmÃ©tica
- **Negativas:** Usuarios con `prefers-color-scheme: dark` reciben tema claro (no roto, solo no adaptado)
- **Riesgos:** Si se pospone mÃ¡s allÃ¡ de Ã‰poca 3, se acumula deuda visual. MitigaciÃ³n: token spec ready en 01_TOKENS antes de Ã‰poca 3.

## VerificaciÃ³n (Gate 5+)

- **Ã‰poca 1-2:** Verificar que tema claro funciona sin errores cuando `prefers-color-scheme: dark` estÃ¡ activo (no romper nada)
- **Ã‰poca 3+:** Test a11y de contrastes en tema dark, golden screenshots dark, visual regression dual-theme

## Plan de implementaciÃ³n (no ejecutar aÃºn)

1. Actualizar `README.md` Done UI: dark mode pasa de bloqueante a "aspiraciÃ³n Ã‰poca 3+" 
2. Crear placeholder en `01_TOKENS.md` â†’ "Â§ Dark Mode: TBD â€” ver ADR-0005"
3. En Ã‰poca 3: diseÃ±ar tokens dark, implementar CSS toggle, verificar contrastes
4. Actualizar golden screenshots para incluir dark variants

## Referencias

- DOCREF: `docs-ui/README.md` â†’ Done UI â†’ "Dark mode" (L82)
- DOCREF: `docs-ui/_gate2/gaps_log.md` â†’ GAP-005
- DOCREF: `docs/knowledge-base/CIVICUM_Anexo_Design_System_Terracota.docx.md` (dark mode mencionado sin tokens)
- HipÃ³tesis a validar: beneficio de baterÃ­a AMOLED con dark mode â€” requiere datos reales antes de usar como argumento de decisiÃ³n

## Cierre de loop (Gate 4, si se aprueba este ADR)

- Actualizar `docs-ui/README.md` â†’ Done UI para reflejar que Dark Mode no bloquea Ã‰poca 1â€“2.
- Actualizar `docs-ui/traceability_matrix.md` â†’ UI-LAY-007 para anotar decisiÃ³n tomada y referencia a este ADR.
- GAP-005 pasa de backlog a "decisiÃ³n tomada" en `gaps_log.md`.

---

> âœ… **AprobaciÃ³n (Daniel): COMPLETADA** â€” se autoriza implementaciÃ³n segÃºn el plan (Gate 5+).

```


---

#### FILE: `adr-ui/ADR-0006-estados-por-pantalla.md`

```markdown
# ADR-0006: Estados obligatorios por pantalla (5-state pattern)

- **Estado:** ACCEPTED
- **Fecha:** 2026-02-25
- **Daniel decision:** ACCEPTED â€” opciÃ³n elegida: A (Ãºnica propuesta)
- **Decision date:** 2026-02-26
- **Autor:** Antigravity (para aprobaciÃ³n de Daniel)
- **Afecta:** UI-STP-001, UI-STP-002, UI-STP-003, UI-STP-004, UI-STP-005, UI-STP-009 | GAP-006
- **Supersede:** â€”

---

## Contexto

La spec (S01 â†’ Â§12) define 5 estados obligatorios por pantalla: loading, empty, error, offline, success. Las pantallas de Ã‰poca 1 (Dashboard, Perfil, Onboarding) no implementan estos estados â€” muestran contenido directamente o quedan en blanco durante la carga.

GAP-006 identifica esta ausencia. Las reglas existen (UI-STP-001 a UI-STP-005) pero no estÃ¡n implementadas.

- **DOCREF:** S01 â†’ Â§12 â†’ tabla 5 estados (L1356)
- **DOCREF:** S01 â†’ Â§12.2 â†’ skeleton shimmer spec (L1381)
- **DOCREF:** S01 â†’ Â§12.3 â†’ empty states por mÃ³dulo (L1387)
- **DOCREF:** `docs-ui/_gate2/gaps_log.md` â†’ GAP-006

## DecisiÃ³n

Adoptar un **5-state pattern** obligatorio: toda pantalla CIVICUM debe manejar los 5 estados definidos en la spec (DOCREF: S01 â†’ Â§12, L1356).

### Los 5 estados

| Estado | Comportamiento esperado | CuÃ¡ndo aplica |
|--------|------------------------|---------------|
| **Loading** | Skeleton shimmer (DOCREF: S01 â†’ Â§12.2, L1381) | Fetch inicial de datos |
| **Empty** | IlustraciÃ³n contextual + copy + CTA (DOCREF: S01 â†’ Â§12.3, L1387) | Datos cargados = 0 resultados |
| **Error** | Feedback Terracota + mensaje humano + opciÃ³n retry (DOCREF: S01 â†’ Â§12.1, L1359) | Fetch o acciÃ³n fallÃ³ |
| **Offline** | Banner informativo (no alarma) + funcionalidad degradada (DOCREF: S01 â†’ Â§12.1, L1360) | Sin conectividad |
| **Success** | ConfirmaciÃ³n visual + texto confirmatorio + siguiente paso (DOCREF: S01 â†’ Â§12, L1361) | Post-acciÃ³n completada |



## Alternativas Consideradas

### Alternativa A: 5 componentes reutilizables + integraciÃ³n en todas las pantallas (aceptada)
- **Pros:** DRY, consistente, auditables vÃ­a Playwright, spec 1:1
- **Contras:** ~8-12h implementaciÃ³n (estimaciÃ³n), requiere wrapper o HOC por pantalla

### Alternativa B: Implementar solo loading + error (mÃ­nimo viable)
- **Pros:** MÃ¡s rÃ¡pido (~4h, estimaciÃ³n), cubre los 2 estados mÃ¡s visibles
- **Contras:** Empty y offline quedan como deuda, no cumple spec completa, 3 de 5 estados sin resolver

### Alternativa C: Posponer todo a Ã‰poca 2
- **Pros:** No toca Ã‰poca 1
- **Contras:** Cada pantalla nueva de Ã‰poca 2 nace sin estados, deuda se multiplica

## Consecuencias

- **Positivas:** Cierra GAP-006, experiencia degradada digna (F-07), skeleton ayuda a reducir CLS si matchea layout real, retry reduce frustraciÃ³n
- **Negativas:** ~8-12h implementaciÃ³n (estimaciÃ³n), posible cambio en golden screenshots existentes
- **Riesgos:** Skeleton layout debe coincidir con layout real para evitar CLS al cargar. MitigaciÃ³n: diseÃ±ar skeleton que matchee estructura de cards/forms.

## VerificaciÃ³n (Gate 5.3+)

- UI-kit Playwright: screenshots de cada componente (skeleton, empty, error, offline banner)
- E2E: simular offline â†’ verificar banner + funcionalidad; simular error â†’ verificar toast + retry
- Golden screenshots: solo aplican si Empty es estado estable de una golden screen; Loading se verifica en UI-kit Playwright (no en golden screenshots)
- Performance: skeleton debe minimizar trabajo extra de JS; no debe introducir CLS; se valida con Lighthouse/Performance en Gate 5+

## Plan de implementaciÃ³n (histÃ³rico)

> **(HistÃ³rico)** â€” ya implementado progresivamente en Gate 5.3â€“5.7a; ver [Implementation record](#implementation-record-gate-5357a) abajo.

1. **Componentes sugeridos** (nombres y ubicaciÃ³n TBD):
   - Skeleton screen, Empty state, Error state, Offline banner â€” como componentes reutilizables
   - Ej. ubicaciÃ³n: `src/components/feedback/` (TBD)
2. **Hook sugerido:** wrapper que encapsule fetch + state machine â†’ retorna `{ state, data, retry }` (API TBD)
3. DetecciÃ³n offline: vÃ­a API del navegador (ej. `navigator.onLine`, Connection API) â€” implementaciÃ³n TBD
4. Integrar en Dashboard, Perfil (Onboarding solo offline banner)
5. Capturar screenshots de cada estado para visual regression
6. Actualizar golden screenshots si aplica

### Ejemplo no normativo â€” AplicaciÃ³n por pantalla, Ã‰poca 1

> âš ï¸ Esta tabla es un **ejemplo ilustrativo**, no una spec. Cada pantalla debe declarar su mapping de estados en Gate 4/5 durante implementaciÃ³n.

| Pantalla | Loading | Empty | Error | Offline | Success |
|----------|---------|-------|-------|---------|---------|
| Dashboard | âœ“ | âœ“ | âœ“ | âœ“ (datos cacheados) | â€” |
| Perfil | âœ“ | â€” (siempre hay datos) | âœ“ | âœ“ (datos locales) | âœ“ |
| Onboarding | â€” (no fetcha datos) | â€” | âœ“ | âœ“ (continuar offline) | âœ“ |

## Referencias

- DOCREF: `docs/knowledge-base/CIVICUM_Diseno_UI_UX_Definitivo.md` Â§12 (L1356-1418)
- DOCREF: `docs-ui/traceability_matrix.md` â†’ UI-STP-001 a UI-STP-009
- DOCREF: `docs-ui/_gate2/gaps_log.md` â†’ GAP-006

---

> âœ… **AprobaciÃ³n (Daniel): COMPLETADA** â€” implementaciÃ³n base en Gate 5.3/5.4; primera integraciÃ³n vertical real completada y verificada en Gate 5.7/5.7a. Ver Implementation record.

---

## Implementation record (Gate 5.3â€“5.7a)

### Gate 5.3 â€” Componentes UI-kit

- **Commit `fc42f22`** â€” `feat(gate5.3): 5-state feedback components + shimmer keyframe (ADR-0006)`
  - Files: `webapp/src/components/feedback/SkeletonScreen.tsx`, `EmptyState.tsx`, `ErrorState.tsx`, `OfflineBanner.tsx`, `SuccessState.tsx`, `webapp/tailwind.config.ts`
  - 5 componentes reutilizables presentacionales (composable, sin dependencia de pantalla). OfflineBanner es presentational (sin auto-detect). Shimmer keyframe 1.5s infinite.
- **Commit `c0481ad`** â€” `feat(gate5.3): /ui-kit deterministic route for 5-state evidence`
  - Files: `webapp/src/pages/ui-kit/UIKitPage.tsx`, `webapp/src/main.tsx`
  - Ruta `/ui-kit` determinista (sin red, sin datos reales). Soporta `?state=loading|empty|error|offline|success` para mostrar 1 estado a la vez. Cada secciÃ³n tiene `data-testid="state-X"` y `data-state="X"`.
- **Commit `cf61361`** â€” `test(gate5.3): Playwright ui-kit snapshots â€” 10 PNGs for 5-state evidence`
  - Files: `webapp/tests/e2e/ui-kit.states.spec.ts`, `webapp/tests/visual/ui-kit/*.png` (10 PNGs)
  - Playwright navega a `/ui-kit?state=X`, captura per-section screenshot en desktop 1440Ã—900 y mobile 360Ã—800. Screenshots guardados en ruta canÃ³nica `webapp/tests/visual/ui-kit/`.
- **Commit `32a6a54`** â€” `docs(gate5.3): SSOT closure â€” traceability_matrix UI-STP-001..009 implementation notes`
  - Files: `docs-ui/traceability_matrix.md`
  - Notas de implementaciÃ³n/verificaciÃ³n en UI-STP-001..005 y UI-STP-009.

### Gate 5.4 â€” IntegraciÃ³n en producciÃ³n

- **Commit `d5f0959`** â€” `feat(gate5.4): integrate OfflineBanner in AppLayout via real navigator.onLine (UI-STP-005)`
  - Files: `webapp/src/lib/useNetworkStatus.ts` (NEW), `webapp/src/components/layout/AppLayout.tsx`, `webapp/tests/e2e/integration.5state.spec.ts` (NEW), `docs-ui/traceability_matrix.md`
  - Hook `useNetworkStatus` usa `navigator.onLine` + event listeners `online`/`offline` (sin timers, sin polling). `AppLayout` renderiza `OfflineBanner` entre header y main cuando el navegador estÃ¡ offline. Playwright E2E verifica con `context.setOffline(true/false)`.

### Evidence & specs

- **Evidence canonical path:** `webapp/tests/visual/ui-kit/`
- **UI-kit Playwright spec:** `webapp/tests/e2e/ui-kit.states.spec.ts`
- **Production E2E spec:** `webapp/tests/e2e/integration.5state.spec.ts`

### Limitaciones documentadas (Gate 5.5 Honest Stop)

- **Gate 5.5 evaluation:** no honest production integration path found for Error / Empty / Loading / Success under current static architecture.
- **Offline:** remains the only state integrated in production as of Gate 5.4 (`AppLayout` â†’ `OfflineBanner` vÃ­a `useNetworkStatus`).
- Remaining states stay in UI-kit until real async data flows / empty collections / completion flows exist.
  - Dashboard y Profile usan datos hardcoded (sin fetch real).
  - Onboarding tiene geolocalizaciÃ³n simulada; integrar `ErrorState` requerirÃ­a geocoding inverso (lat/lng â†’ comuna) que no existe. El path de Ã©xito no puede ser real â†’ mezclar error real con Ã©xito fake es deshonesto.
- No se introdujeron timers artificiales ni lÃ³gicas inventadas en ningÃºn Gate.

### Gate 5.6 evaluation outcome

- Gate 5.6 intentÃ³ identificar la primera vertical real de datos.
- No se encontrÃ³ un camino honesto debido a la falta de backend y data wiring activo.
- Offline sigue siendo el Ãºnico estado integrado en producciÃ³n.
- Loading / Empty / Error / Success permanecen en UI-kit hasta que exista backend/data flow real.

### Gate 5.7 implementation record

- **Vertical:** Dashboard â†’ Reportes Comunitarios (read-only `GET /api/community-reports`)
- **Backend wiring:** Hono server entrypoint (`src/server/serve.ts`) + real Drizzle query sobre `communityReports` (`src/server/index.ts`) + Neon connection (`src/server/db.ts`)
- **Frontend wiring:** `QueryClientProvider` en `main.tsx` + `useQuery` en `DashboardPage.tsx` + Vite proxy `/api â†’ localhost:3001`
- **Estados integrados en producciÃ³n:**
  - **Loading** â†’ `SkeletonScreen` activado por request real pendiente (sin timer artificial)
  - **Error** â†’ `ErrorState` con `onRetry` â†’ `refetch()` activado por fallo real del endpoint
  - **Empty** â†’ `EmptyState` activado cuando la consulta devuelve 0 reportes reales
- **Success** queda fuera de scope (no hay mutaciÃ³n real en esta vertical read-only)
- **Tests (Gate 5.7 inicial):** `integration.reports.spec.ts` â€” 4 tests con intercept (Loading, Error, Empty, Retry) Ã— 2 projects = 8 E2E tests
- **Commit:** ac0bd8e
- **No se introdujeron timers artificiales, fake APIs, ni datos inventados**

### Gate 5.7a implementation record

- **Commit:** 3ee96e8
- **EmptyState CTA resuelto:**
  - Nuevo prop `ctaTo` en `EmptyState.tsx` â†’ renderiza `<Link>` de react-router (navegaciÃ³n real)
  - Dashboard `CommunityReportsSection` usa `ctaTo="/alza-la-voz"` en lugar del anterior `onAction` no-op
- **Playwright dual webServer:**
  - Backend Hono en puerto 3001 (verificado vÃ­a `/health`)
  - Frontend Vite en puerto 5173 (proxy `/api â†’ localhost:3001`)
  - Ambos se levantan automÃ¡ticamente al ejecutar `pnpm test:e2e`
- **Real backend wiring tests (sin intercept):**
  - `Backend /health returns real 200` â€” HTTP directo a `localhost:3001/health`
  - `Backend /api/community-reports returns real HTTP response` â€” acepta 200 (DB conectada) o 500 honesto (DB no configurada)
  - `Dashboard renders real state without intercept` â€” renderiza ErrorState real por `DATABASE_URL` ausente
- **Test de CTA funcional:** `Empty CTA: "Crear Reporte" navigates to /alza-la-voz` (con intercept para forzar estado Empty)
- **Spec total post-5.7a:** `integration.reports.spec.ts` â€” 8 tests de archivo (5 con intercept + 3 real wiring) Ã— 2 projects = 16 E2E tests
- **ClarificaciÃ³n de verificaciÃ³n:**
  - Loading/Error/Empty: integrados en producciÃ³n y validados por intercept sobre la request real del frontend
  - Wiring del backend real: validado por tests sin intercept (HTTP directo + render sin mock)
  - Empty UI con DB real vacÃ­a: no observado aÃºn (no hay DB con 0 rows en entorno de test); la UI estÃ¡ lista para ese caso
  - Success: sigue fuera de scope (vertical read-only, sin mutaciÃ³n)



```


---

#### FILE: `adr-ui/ADR-0007-tipografia-decision.md`

```markdown
# ADR-0007: TipografÃ­a â€” Inter (actual) vs Nunito Sans + IBM Plex (spec)

- **Estado:** ACCEPTED
- **Fecha:** 2026-02-25
- **Daniel decision:** ACCEPTED â€” opciÃ³n elegida: A (Ãºnica propuesta)
- **Decision date:** 2026-02-26
- **Autor:** Antigravity (para aprobaciÃ³n de Daniel)
- **Afecta:** GAP-007
- **Nota:** No existe UI_RULE_ID tipogrÃ¡fico en la matriz de trazabilidad; se consolidarÃ¡ en Gate 4 al crear regla en `01_TOKENS` con DOCREF.
- **Supersede:** â€”

---

## Contexto

La spec de diseÃ±o (S01 â†’ Â§3.1) define 3 familias tipogrÃ¡ficas:
- **Nunito Sans** â€” TÃ­tulos, UI, navegaciÃ³n (400/600/700)
- **IBM Plex Sans** â€” Body, contenido largo (400/600/700)  
- **IBM Plex Mono** â€” CÃ³digo, datos, mÃ©tricas (400)

El cÃ³digo de Ã‰poca 1 usa **Inter** como Ãºnica fuente. No existe ADR ni fuente documental que autorice Inter como alternativa. Esto es una desviaciÃ³n de implementaciÃ³n vs spec (no una ausencia de requisito).

- **DOCREF:** S01 â†’ Â§3.1 â†’ "Nunito Sans â€” TÃ­tulos, UI, NavegaciÃ³n" (L383)
- **DOCREF:** S01 â†’ Â§3.1 â†’ "IBM Plex Sans â€” Body, Contenido Largo" (L396)
- **DOCREF:** `docs-ui/_gate2/gaps_log.md` â†’ GAP-007

## DecisiÃ³n

**Migrar a la tipografÃ­a de la spec** (Nunito Sans + IBM Plex Sans + IBM Plex Mono), con implementaciÃ³n por tiers:

| Tier | Fonts cargadas | TamaÃ±o estimado |
|------|----------------|-----------------|
| **HIGH** | Nunito Sans + IBM Plex Sans + IBM Plex Mono (latin-ext) | ~120KB |
| **MEDIUM** | Nunito Sans + IBM Plex Sans (latin only) | ~40KB |
| **LOW** | System fonts (`system-ui, -apple-system, sans-serif`) | 0KB |

Eliminar Inter del proyecto.

## Alternativas Consideradas

### Alternativa A: Migrar a Nunito Sans + IBM Plex (spec) (propuesta)
- **Pros:** AlineaciÃ³n 1:1 con spec (DOCREF: S01 â†’ Â§3.1, L383), tier system alineado con spec (DOCREF: S01 â†’ Â§3.3, L433), fuentes diseÃ±adas para el propÃ³sito de CIVICUM (cercanÃ­a + seriedad + datos)
- **Contras:** RegresiÃ³n visual (todo el texto cambia), estimaciÃ³n ~4-6h refactor, estimaciÃ³n ~120KB peso fonts (mitigado por tiers)

### Alternativa B: Mantener Inter (formalizar como decisiÃ³n nueva)
- **Pros:** Cero regresiÃ³n, Inter es excelente font, ya implementada
- **Contras:** Diverge de spec canÃ³nica, pierde la distinciÃ³n heading/body/mono que la spec diseÃ±a intencionalmente, requiere justificaciÃ³n formal de por quÃ© no seguir la spec

### Alternativa C: HÃ­brido â€” Nunito Sans para headings + Inter para body
- **Pros:** Mantiene parte de la spec (headings) sin romper todo el body text
- **Contras:** Inconsistente con spec, Inter no estÃ¡ en el sistema de diseÃ±o, crea una tercera fuente no documentada

## Consecuencias

- **Positivas:** Coherencia total con spec tipogrÃ¡fica (S01 â†’ Â§3.1), cada familia cumple un rol semÃ¡ntico claro (heading â‰  body â‰  datos), tier system optimiza performance (S01 â†’ Â§3.3)
- **Negativas:** RegresiÃ³n visual completa, peso estimado de fonts en HIGH tier (~120KB), refactor de CSS/Tailwind font config
- **Riesgos:** Si los contrastes tipogrÃ¡ficos cambian, golden screenshots necesitan recaptura. MitigaciÃ³n: implementar despuÃ©s de golden screenshots migration.
- **Trade-off performance:** La migraciÃ³n tipogrÃ¡fica impacta el peso del critical pack (UI-STP-008: â‰¤800KB). El tier HIGH (~120KB estimado) debe validarse contra este presupuesto en Gate 5+; si lo excede, el tier system (S01 â†’ Â§3.3) es el mecanismo de ajuste: degradar a MEDIUM o LOW segÃºn dispositivo. No se inventan nÃºmeros nuevos â€” la verificaciÃ³n real se harÃ¡ con build + lighthouse en Gate 5+.

## VerificaciÃ³n (Gate 5+)

- Visual regression: todas las golden screenshots deben recapturarse post-migraciÃ³n
- Performance: verificar que Tier LOW funciona con system fonts (0KB extra)
- Test a11y: verificar legibilidad, contraste, tamaÃ±os mÃ­nimos con nuevas fonts
- UI-kit Playwright: screenshots de componentes con nueva tipografÃ­a

## Plan de implementaciÃ³n (no ejecutar aÃºn)

1. Instalar `@fontsource/nunito-sans`, `@fontsource/ibm-plex-sans`, `@fontsource/ibm-plex-mono`
2. Actualizar `tailwind.config.ts` â†’ fontFamily con las 3 familias + fallbacks
3. Actualizar `src/styles/tokens.css` â†’ `--font-heading`, `--font-body`, `--font-mono`
4. Eliminar Inter de `package.json` y de imports CSS
5. Auditar componentes para heading/body/mono usage
6. Implementar tier detection para font loading strategy
7. Recapturar golden screenshots

## Referencias

- DOCREF: `docs/knowledge-base/CIVICUM_Diseno_UI_UX_Definitivo.md` Â§3.1 (L383-414) â€” familias tipogrÃ¡ficas
- DOCREF: `docs/knowledge-base/CIVICUM_Diseno_UI_UX_Definitivo.md` Â§3.3 (L433) â€” tiers de carga tipogrÃ¡fica
- DOCREF: `docs-ui/_gate2/gaps_log.md` â†’ GAP-007

---

> âœ… **AprobaciÃ³n (Daniel): COMPLETADA** â€” se autoriza implementaciÃ³n segÃºn el plan (Gate 5+).

```


---

## 4. Delta de implementación

### 4.A — Componentes feedback + UIKitPage + main.tsx + tailwind.config.ts + ui-kit.states.spec.ts


---

#### FILE: `webapp/src/components/feedback/SkeletonScreen.tsx`

```tsx
import { type ReactNode } from 'react';

interface SkeletonScreenProps {
  /** Number of content rows to show */
  rows?: number;
  /** Show a header skeleton block */
  showHeader?: boolean;
  /** Show card-shaped skeleton blocks (3 columns on md+) */
  showCards?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Optional children to override default skeleton layout */
  children?: ReactNode;
}

function SkeletonBlock({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`rounded-lg bg-slate-200 animate-shimmer ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(90deg, #e2e8f0 0%, #cbd5e1 50%, #e2e8f0 100%)',
        backgroundSize: '200% 100%',
        ...style,
      }}
    />
  );
}

/**
 * SkeletonScreen â€” Loading state component (UI-STP-002)
 *
 * Displays shimmer skeleton blocks mimicking page layout.
 * DOCREF: S01 â†’ Â§12.2 â†’ "Shimmer: linear-gradient" (L1381)
 * DOCREF: UI-CMP-004 â†’ Skeleton shimmer: linear-gradient Gris100â†’200â†’100, 1.5s infinite
 */
export default function SkeletonScreen({
  rows = 3,
  showHeader = true,
  showCards = true,
  className = '',
  children,
}: SkeletonScreenProps) {
  if (children) {
    return <div className={`space-y-4 ${className}`}>{children}</div>;
  }

  return (
    <div className={`space-y-6 ${className}`} aria-busy="true" aria-label="Cargando contenido">
      {/* Header skeleton */}
      {showHeader && (
        <div className="space-y-3">
          <SkeletonBlock className="h-8 w-2/3" />
          <SkeletonBlock className="h-4 w-1/2" />
        </div>
      )}

      {/* Card skeletons */}
      {showCards && (
        <div className="grid gap-4 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-xl border border-slate-100 p-6 space-y-3">
              <SkeletonBlock className="h-10 w-10 rounded-full" />
              <SkeletonBlock className="h-6 w-1/3" />
              <SkeletonBlock className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      )}

      {/* Row skeletons */}
      <div className="space-y-3">
        {Array.from({ length: rows }).map((_, i) => (
          <SkeletonBlock key={i} className="h-4" style={{ width: `${90 - i * 10}%` }} />
        ))}
      </div>
    </div>
  );
}

export { SkeletonBlock };

```


---

#### FILE: `webapp/src/components/feedback/EmptyState.tsx`

```tsx
import { Inbox } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface EmptyStateProps {
  /** Main heading */
  title: string;
  /** Descriptive message */
  description: string;
  /** CTA button label */
  ctaLabel?: string;
  /** CTA click handler (renders a button) */
  onAction?: () => void;
  /** CTA navigation target (renders a Link â€” preferred over onAction for navigation) */
  ctaTo?: string;
  /** Custom icon (defaults to Inbox) */
  icon?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * EmptyState â€” Empty data state component (UI-STP-003)
 *
 * Displays an illustrative icon + contextual copy + CTA.
 * Supports two CTA modes:
 *  - `ctaTo`: renders a real navigable Link (preferred for route navigation)
 *  - `onAction`: renders a button with a click handler
 * DOCREF: S01 â†’ Â§12.3 â†’ tabla empty states (L1387)
 */
export default function EmptyState({
  title,
  description,
  ctaLabel,
  onAction,
  ctaTo,
  icon,
  className = '',
}: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center py-16 px-6 ${className}`}
      role="status"
    >
      {/* Illustration / Icon */}
      <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mb-6">
        {icon || <Inbox className="w-10 h-10 text-slate-400" strokeWidth={1.5} />}
      </div>

      {/* Copy */}
      <h3 className="text-lg font-semibold text-slate-800 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 max-w-sm leading-relaxed">{description}</p>

      {/* CTA â€” Link-based navigation */}
      {ctaLabel && ctaTo && (
        <Link to={ctaTo} className="mt-6">
          <Button className="bg-terracota-500 hover:bg-terracota-400 text-white">
            {ctaLabel}
          </Button>
        </Link>
      )}

      {/* CTA â€” Action-based callback (only if no ctaTo) */}
      {ctaLabel && onAction && !ctaTo && (
        <Button
          onClick={onAction}
          className="mt-6 bg-terracota-500 hover:bg-terracota-400 text-white"
        >
          {ctaLabel}
        </Button>
      )}
    </div>
  );
}


```


---

#### FILE: `webapp/src/components/feedback/ErrorState.tsx`

```tsx
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ErrorStateProps {
  /** Error message (defaults to CIVICUM's human-error copy per UI-CNT-004) */
  message?: string;
  /** Retry handler */
  onRetry?: () => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * ErrorState â€” Error feedback component (UI-STP-004)
 *
 * Terracota-colored feedback with human message + retry button.
 * DOCREF: S01 â†’ Â§12.1 â†’ fila Error (L1359)
 * DOCREF: UI-CNT-004 â†’ "Algo fallÃ³ de nuestro lado"
 */
export default function ErrorState({
  message = 'Algo fallÃ³ de nuestro lado. Estamos trabajando para solucionarlo.',
  onRetry,
  className = '',
}: ErrorStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center py-16 px-6 ${className}`}
      role="alert"
    >
      {/* Icon */}
      <div className="w-20 h-20 rounded-full bg-terracota-50 flex items-center justify-center mb-6">
        <AlertTriangle className="w-10 h-10 text-terracota-500" strokeWidth={1.5} />
      </div>

      {/* Message */}
      <h3 className="text-lg font-semibold text-slate-800 mb-2">Hubo un problema</h3>
      <p className="text-sm text-slate-500 max-w-sm leading-relaxed">{message}</p>

      {/* Retry CTA */}
      {onRetry && (
        <Button
          onClick={onRetry}
          variant="outline"
          className="mt-6 border-terracota-300 text-terracota-600 hover:bg-terracota-50"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Reintentar
        </Button>
      )}
    </div>
  );
}

```


---

#### FILE: `webapp/src/components/feedback/OfflineBanner.tsx`

```tsx
import { WifiOff } from 'lucide-react';

interface OfflineBannerProps {
  /** Additional CSS classes */
  className?: string;
}

/**
 * OfflineBanner â€” Offline state banner (UI-STP-005)
 *
 * Presentational component: renders when shown, no auto-detection.
 * Non-alarming informational banner per DOCREF: S01 â†’ Â§12.1 â†’ fila Offline (L1360).
 * "Banner NO alarma + funcionalidad Tier LOW"
 */
export default function OfflineBanner({ className = '' }: OfflineBannerProps) {
  return (
    <div
      className={`flex items-center gap-3 rounded-lg border border-azul-200 bg-azul-50 px-4 py-3 ${className}`}
      role="status"
      aria-live="polite"
    >
      <WifiOff className="w-5 h-5 text-azul-500 flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-azul-800">
          Sin conexiÃ³n a internet
        </p>
        <p className="text-xs text-azul-600 mt-0.5">
          Puedes seguir usando las funciones disponibles. Tus cambios se sincronizarÃ¡n cuando vuelvas a conectarte.
        </p>
      </div>
    </div>
  );
}

```


---

#### FILE: `webapp/src/components/feedback/SuccessState.tsx`

```tsx
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SuccessStateProps {
  /** Confirmatory message */
  message: string;
  /** Label for the "next step" CTA */
  nextLabel?: string;
  /** Next step click handler */
  onNext?: () => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * SuccessState â€” Post-action success component (UI-STP-001 context / ADR-0006)
 *
 * Checkmark + confirmatory text + next step CTA.
 * DOCREF: S01 â†’ Â§12, L1361 â†’ "ConfirmaciÃ³n visual + texto confirmatorio + siguiente paso"
 */
export default function SuccessState({
  message,
  nextLabel,
  onNext,
  className = '',
}: SuccessStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center py-16 px-6 ${className}`}
      role="status"
    >
      {/* Checkmark */}
      <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-6">
        <CheckCircle className="w-10 h-10 text-verde-500" strokeWidth={1.5} />
      </div>

      {/* Confirmatory text */}
      <h3 className="text-lg font-semibold text-slate-800 mb-2">Â¡Listo!</h3>
      <p className="text-sm text-slate-500 max-w-sm leading-relaxed">{message}</p>

      {/* Next step CTA */}
      {nextLabel && onNext && (
        <Button
          onClick={onNext}
          className="mt-6 bg-verde-500 hover:bg-green-600 text-white"
        >
          {nextLabel}
        </Button>
      )}
    </div>
  );
}

```


---

#### FILE: `webapp/src/pages/ui-kit/UIKitPage.tsx`

```tsx
import { useSearchParams } from 'react-router-dom';
import SkeletonScreen from '@/components/feedback/SkeletonScreen';
import EmptyState from '@/components/feedback/EmptyState';
import ErrorState from '@/components/feedback/ErrorState';
import OfflineBanner from '@/components/feedback/OfflineBanner';
import SuccessState from '@/components/feedback/SuccessState';

const ALL_STATES = ['loading', 'empty', 'error', 'offline', 'success'] as const;
type StateName = typeof ALL_STATES[number];

/**
 * UIKitPage â€” Deterministic showcase of all 5 feedback states (Gate 5.3)
 *
 * Supports ?state=loading|empty|error|offline|success to show a single state,
 * or shows all 5 simultaneously when no query param is provided.
 *
 * Each state section has:
 *  - data-testid="state-{name}" for Playwright locators
 *  - data-state="{name}" for semantic querying
 */
export default function UIKitPage() {
  const [searchParams] = useSearchParams();
  const filterState = searchParams.get('state') as StateName | null;

  const shouldShow = (state: StateName) =>
    !filterState || filterState === state;

  return (
    <div className="space-y-8 pb-16">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 mb-1">UI Kit â€” 5-State Pattern</h1>
        <p className="text-sm text-slate-500">
          Componentes de feedback reutilizables (ADR-0006). Evidencia determinista para Playwright.
        </p>
      </div>

      {/* Loading State */}
      {shouldShow('loading') && (
        <section
          data-testid="state-loading"
          data-state="loading"
          className="rounded-xl border border-slate-200 bg-white p-6"
        >
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Loading â€” Skeleton Shimmer (UI-STP-002)
          </h2>
          <SkeletonScreen rows={3} showHeader showCards />
        </section>
      )}

      {/* Empty State */}
      {shouldShow('empty') && (
        <section
          data-testid="state-empty"
          data-state="empty"
          className="rounded-xl border border-slate-200 bg-white p-6"
        >
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Empty â€” Sin datos (UI-STP-003)
          </h2>
          <EmptyState
            title="No hay reportes en tu zona"
            description="Cuando se registren reportes cerca de ti, aparecerÃ¡n aquÃ­. Puedes empezar alzando la voz."
            ctaLabel="Crear primer reporte"
            onAction={() => {}}
          />
        </section>
      )}

      {/* Error State */}
      {shouldShow('error') && (
        <section
          data-testid="state-error"
          data-state="error"
          className="rounded-xl border border-slate-200 bg-white p-6"
        >
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Error â€” Feedback Terracota (UI-STP-004)
          </h2>
          <ErrorState onRetry={() => {}} />
        </section>
      )}

      {/* Offline State */}
      {shouldShow('offline') && (
        <section
          data-testid="state-offline"
          data-state="offline"
          className="rounded-xl border border-slate-200 bg-white p-6"
        >
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Offline â€” Banner informativo (UI-STP-005)
          </h2>
          <OfflineBanner />
        </section>
      )}

      {/* Success State */}
      {shouldShow('success') && (
        <section
          data-testid="state-success"
          data-state="success"
          className="rounded-xl border border-slate-200 bg-white p-6"
        >
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Success â€” ConfirmaciÃ³n (UI-STP-001)
          </h2>
          <SuccessState
            message="Tu reporte fue enviado correctamente. Un verificador lo revisarÃ¡ pronto."
            nextLabel="Volver al inicio"
            onNext={() => {}}
          />
        </section>
      )}
    </div>
  );
}

```


---

#### FILE: `webapp/src/main.tsx`

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/queryClient'
import AppLayout from './components/layout/AppLayout'
import DashboardPage from './pages/dashboard/DashboardPage'
import ProfilePage from './pages/profile/ProfilePage'
import NotFoundPage from './pages/not-found/NotFoundPage'
import UIKitPage from './pages/ui-kit/UIKitPage'
import OnboardingFlow from './pages/onboarding/OnboardingFlow'
import { useOnboardingStore } from './store/useOnboardingStore'
import './index.css'

// Rutas protegidas que requieren onboarding
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const hasCompletedOnboarding = useOnboardingStore((state) => state.hasCompletedOnboarding);
  return hasCompletedOnboarding ? <>{children}</> : <Navigate to="/onboarding" />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/onboarding" element={<OnboardingFlow />} />

          <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/alza-la-voz" element={<div className="p-6">MÃ³dulo Alza la Voz (En construcciÃ³n)</div>} />
            <Route path="/circulos" element={<div className="p-6">MÃ³dulo CÃ­rculos de AcciÃ³n (En construcciÃ³n)</div>} />
            <Route path="/perfil" element={<ProfilePage />} />
            <Route path="/ui-kit" element={<UIKitPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)


```


---

#### FILE: `webapp/tailwind.config.ts`

```ts
/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			screens: {
				xs: '360px',
				sm: '480px',
				sm640: '640px',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				terracota: {
					'50': '#fdf3f1',
					'100': '#fae3df',
					'200': '#f6ccc5',
					'300': '#efa99c',
					'400': '#e57a67',
					'500': '#c2503a',
					'600': '#b7402a',
					'700': '#993320',
					'800': '#802e1f',
					'900': '#6a2a1e'
				},
				azul: {
					'50': '#f3f6f8',
					'100': '#e1e8ed',
					'200': '#c6d4dc',
					'300': '#9db8c5',
					'400': '#6c94a8',
					'500': '#264653',
					'600': '#3c697c',
					'700': '#335565',
					'800': '#2d4855',
					'900': '#283e4a'
				},
				verde: {
					'500': '#0D7A5F'
				},
				proteccion: {
					'500': '#2563EB'
				},
				dorado: {
					'500': '#D4872E'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				shimmer: {
					'0%': { backgroundPosition: '200% 0' },
					'100%': { backgroundPosition: '-200% 0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				shimmer: 'shimmer 1.5s infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}

```


---

#### FILE: `webapp/tests/e2e/ui-kit.states.spec.ts`

```ts
import { test, expect } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

const STATES = [
  { name: 'loading', testId: 'state-loading', rule: 'UI-STP-002' },
  { name: 'empty', testId: 'state-empty', rule: 'UI-STP-003' },
  { name: 'error', testId: 'state-error', rule: 'UI-STP-004' },
  { name: 'offline', testId: 'state-offline', rule: 'UI-STP-005' },
  { name: 'success', testId: 'state-success', rule: 'UI-STP-001' },
] as const;

// Resolve absolute output directory for committed PNGs
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const VISUAL_DIR = path.resolve(__dirname, '..', '..', 'tests', 'visual', 'ui-kit');

// ---------------------------------------------------------------------------
// Onboarding bypass â€” same pattern as smoke.notfound.spec.ts
// FRAGILITY NOTE: If Zustand storage key or schema changes, this breaks.
// ---------------------------------------------------------------------------
const ONBOARDING_STORAGE_KEY = 'civicum-onboarding-storage';

function buildOnboardingBypass(): string {
  return JSON.stringify({
    state: {
      hasCompletedOnboarding: true,
      currentStep: 5,
      data: { interests: [] },
    },
    version: 0,
  });
}

const REACT_MOUNT_TIMEOUT = 10_000;

async function waitForReactMount(page: import('@playwright/test').Page) {
  await page.locator('#root').waitFor({ state: 'attached', timeout: REACT_MOUNT_TIMEOUT });
  await page.waitForFunction(
    () => (document.querySelector('#root')?.childElementCount ?? 0) > 0,
    { timeout: REACT_MOUNT_TIMEOUT },
  );
}

test.describe('UI-Kit â€” 5-State Pattern (Gate 5.3)', () => {
  for (const { name, testId, rule } of STATES) {
    test(`captures ${name} state (${rule})`, async ({ page }, testInfo) => {
      const pageErrors: Error[] = [];
      page.on('pageerror', (e) => pageErrors.push(e));
      const consoleErrors: string[] = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') consoleErrors.push(msg.text());
      });

      // Bypass onboarding (same pattern as smoke.notfound.spec.ts)
      await page.goto('/onboarding');
      const bypassPayload = buildOnboardingBypass();
      await page.evaluate(([key, payload]) => {
        localStorage.setItem(key, payload);
      }, [ONBOARDING_STORAGE_KEY, bypassPayload] as const);

      // Navigate to ui-kit with single state
      await page.goto(`/ui-kit?state=${name}`);
      await waitForReactMount(page);

      // Locate the specific state section
      const section = page.locator(`[data-testid="${testId}"]`);
      await expect(section).toBeVisible();

      // Determine viewport label from project name
      const viewport = testInfo.project.name.includes('mobile') ? 'mobile' : 'desktop';

      // Capture per-section screenshot to committed path
      const filename = `${rule}_${name}_${viewport}.png`;
      await section.screenshot({ path: path.join(VISUAL_DIR, filename) });

      // Zero JS errors
      expect(pageErrors, 'pageerror should be empty').toEqual([]);
      expect(consoleErrors, 'console.error should be empty').toEqual([]);
    });
  }
});

```


### 4.B — Lista completa webapp/tests/visual/ui-kit/

```
webapp/tests/visual/ui-kit/README.md
webapp/tests/visual/ui-kit/UI-STP-001_success_desktop.png
webapp/tests/visual/ui-kit/UI-STP-001_success_mobile.png
webapp/tests/visual/ui-kit/UI-STP-002_loading_desktop.png
webapp/tests/visual/ui-kit/UI-STP-002_loading_mobile.png
webapp/tests/visual/ui-kit/UI-STP-003_empty_desktop.png
webapp/tests/visual/ui-kit/UI-STP-003_empty_mobile.png
webapp/tests/visual/ui-kit/UI-STP-004_error_desktop.png
webapp/tests/visual/ui-kit/UI-STP-004_error_mobile.png
webapp/tests/visual/ui-kit/UI-STP-005_offline_desktop.png
webapp/tests/visual/ui-kit/UI-STP-005_offline_mobile.png
```

---

## 5. Estado operativo actual

### Último gate realmente alcanzado

**Gate 5.8** (commit `6321401`) — `feat(gate5.8): reproducible data environment foundation`

Gates completados con hitos verificables:
- **Gate 0–4**: Baseline, SSOT, ADR system, extracción documental, resolución conflictos, pack completo. Todo docs-only.
- **Gate 5.1**: Playwright E2E harness + breakpoints (ADR-0003 implemented, commit `1fc13bb`).
- **Gate 5.2**: NotFoundPage + catch-all 404 (ADR-0004 implemented, commit `7bb2c42`).
- **Gate 5.3**: 5-state feedback components + UI-kit route + 10 Playwright PNGs (ADR-0006 partial, commits `fc42f22`, `c0481ad`, `cf61361`).
- **Gate 5.4**: OfflineBanner integrado en producción via AppLayout + useNetworkStatus (commit `d5f0959`).
- **Gate 5.5**: Honest stop — no se encontró integración real adicional con arquitectura estática.
- **Gate 5.6**: Honest stop — no se encontró vertical de datos real.
- **Gate 5.7/5.7a**: Primera vertical real de datos — Dashboard communityReports con Loading/Error/Empty via `GET /api/community-reports` (Hono + Drizzle + Neon). Commits `ac0bd8e`, `3ee96e8`.
- **Gate 5.8**: Reproducible data environment foundation (commit `6321401`).

### ADRs — Estado

| ADR | Estado | Implementado |
|-----|--------|-------------|
| ADR-0001 (SSOT) | ACCEPTED | Sí — estructura docs-ui/ + adr-ui/ operativa |
| ADR-0002 (data-module) | ACCEPTED | **NO** — implementation pending Gate 5+ |
| ADR-0003 (breakpoints) | ACCEPTED | **SÍ** — Gate 5.1.2 commit `1fc13bb` |
| ADR-0004 (404) | ACCEPTED | **SÍ** — Gate 5.2 commit `7bb2c42` |
| ADR-0005 (dark mode) | ACCEPTED | **NO** — pospuesto a Época 3+ (por diseño) |
| ADR-0006 (5-state) | ACCEPTED | **PARCIAL** — componentes: SÍ; producción: Loading/Error/Empty en Dashboard; Offline en AppLayout; Success: NO (sin mutación real) |
| ADR-0007 (tipografía) | ACCEPTED | **NO** — implementation pending Gate 5+ |

### Reglas OK con "implementation pending"

- **UI-TOK-007** (data-module atmósferas) — ADR-0002 ACCEPTED, sin implementar
- **UI-TOK-009** (tipografía Nunito Sans + IBM Plex) — ADR-0007 ACCEPTED, sin implementar
- **UI-LAY-004** (Smart Dock side rail en LG+) — docs OK, tracked por expected-fail test
- **UI-LAY-007** (dark mode) — ADR-0005 ACCEPTED, pospuesto a Época 3+

### Implementado de verdad vs solo documentado

**IMPLEMENTADO EN CÓDIGO:**
- 5 componentes feedback: `SkeletonScreen.tsx`, `EmptyState.tsx`, `ErrorState.tsx`, `OfflineBanner.tsx`, `SuccessState.tsx`
- Ruta `/ui-kit` con UIKitPage determinista (`?state=X`)
- `NotFoundPage.tsx` + catch-all route
- `SmartDock.tsx` extraída como componente independiente
- Breakpoints xs=360, sm=480, sm640=640 en `tailwind.config.ts`
- `useNetworkStatus` hook + OfflineBanner en AppLayout (producción)
- `QueryClientProvider` + `useQuery` en DashboardPage con proxy `/api`
- Backend Hono (`src/server/serve.ts`, `src/server/db.ts`, `src/server/index.ts`)
- DB migrations (Drizzle, `src/db/migrations/`)
- Seed/reset scripts (`src/db/seed.ts`, `src/db/reset.ts`)
- Playwright E2E: 7 spec files (smoke.home, smoke.notfound, smoke.breakpoints, ui-kit.states, integration.5state, integration.reports)
- 10 PNGs evidence en `webapp/tests/visual/ui-kit/`
- 15 PNGs golden baseline en `tests/visual/baseline/`

**SOLO DOCUMENTADO (no implementado):**
- data-module atmósferas por módulo (ADR-0002)
- Tipografía Nunito Sans + IBM Plex (ADR-0007) — usa Inter
- Dark mode (ADR-0005) — pospuesto Época 3+
- Smart Dock side rail LG+ (UI-LAY-004) — solo bottom bar
- Smart Dock tab "Más" + badges (UI-CMP-006 parcial)
- Tab bounce animation (UI-NAV-005)
- Breadcrumbs (UI-NAV-007)
- Bottom Sheet (UI-CMP-007)
- Performance budgets / Lighthouse CI (UI-STP-007, UI-STP-008)
- offline.html digno (UI-STP-006)
- Pack 00–09 parcialmente completo (05_PATTERNS, 06_CONTENT_STYLE, 07_A11Y sin reglas consolidadas)
- Success state integrado en producción (sin mutación real existente)

### MISSING / BLOCKERS

1. **MISSING: Pack docs 05, 06, 07** — `05_PATTERNS.md`, `06_CONTENT_STYLE.md`, `07_A11Y.md` existen como skeletons con "TODO" pero sin reglas consolidadas de Gate 4
2. **MISSING: PACK_VERSION no bumped** — sigue en `0.1.0` Gate 1; debería reflejar los cambios de Gate 4+
3. **MISSING: data-module implementation** — ADR-0002 ACCEPTED pero sin código
4. **MISSING: Tipografía migration** — ADR-0007 ACCEPTED pero sigue Inter
5. **MISSING: Success state en producción** — componente existe, sin vertical con mutación real
6. **MISSING: Performance validation** — sin Lighthouse CI, sin medición CWV real
7. **MISSING: offline.html** — UI-STP-006 sin implementar
8. **MISSING: PWA assets** — GAP-008 sin resolver (favicon, OG, splash icons)
9. **MISSING: Smart Dock "Más" tab** — UI-CMP-006 parcial
10. **MISSING: DB seed con 0 rows** — Empty state con DB real vacía no observado en E2E

---

## 6. Evidencia final

El único cambio pendiente es la creación de este archivo:

```
docs-ui/_reentry/REENTRY_SYNC_LATEST.md
```

**Confirmación explícita:** solo docs de contexto; sin cambios UI/código/tests.


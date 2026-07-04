# OBSOLETO / NO NORMATIVO

Este archivo fue generado el 2026-03-22 y corresponde al HEAD `6321401`.

Contiene evidencia historica/cruda y conclusiones superadas por Gate 5.9a y Gate 6.

No debe usarse como evidencia limpia ni como estado actual del PR.

---

# AUDIT_EVIDENCE_PACK v1 — Evidencia cruda para auditoría rigurosa

**Fecha generación:** 2026-03-22T15:34-03:00
**Branch:** `ui-architecture-foundation`
**HEAD commit:** `6321401` — feat(gate5.8): reproducible data environment foundation

---

## 1. Evidencia git actual

### git branch --show-current

```
ui-architecture-foundation
```

### git status --short --branch

```
## ui-architecture-foundation
?? docs-ui/_reentry/
```

### git show --stat --name-only HEAD

```
commit 6321401083a1fe189ba0ebb29f302ca7a5703c70
Author: Daniel Aguirre <daniel.aguirre.personal@gmail.com>
Date:   Mon Mar 16 18:11:46 2026 -0300

    feat(gate5.8): reproducible data environment foundation

webapp/.env.example
webapp/README.md
webapp/package.json
webapp/pnpm-lock.yaml
webapp/src/db/migrations/0000_daily_northstar.sql
webapp/src/db/migrations/meta/0000_snapshot.json
webapp/src/db/migrations/meta/_journal.json
webapp/src/db/reset.ts
webapp/src/db/seed.ts
```

### git log --decorate --oneline -n 15

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
```

---

## 2. Contenido completo — archivos de drift documental

> Contenido exacto pegado por secciones debajo. Sin truncar, sin resumir.


---

#### FILE: `docs-ui/05_PATTERNS.md`

```markdown
# 05 â€” Patrones de UI Recurrentes

**PropÃ³sito:** Cataloga los patrones de interacciÃ³n repetibles en CIVICUM: cÃ³mo se construyen formularios, cards de mÃ©tricas, listas paginadas, modales de confirmaciÃ³n, y otros elementos que aparecen en mÃºltiples pantallas. Evita reinventar la rueda.

## Decisiones que debe contener

- [ ] PatrÃ³n Card de MÃ©trica: estructura (icono + badge + nÃºmero + subtÃ­tulo + footer)
- [ ] PatrÃ³n Card de AcciÃ³n (CTA): estructura (icono + tÃ­tulo + descripciÃ³n + botÃ³n)
- [ ] PatrÃ³n Formulario Multi-Step: estructura (indicador de progreso + contenido + nav)
- [ ] PatrÃ³n Lista Paginada: paginaciÃ³n (NO infinite scroll, F-05), filtros, ordenamiento
- [ ] PatrÃ³n Modal de ConfirmaciÃ³n: estructura, botones, escape/overlay behavior
- [ ] PatrÃ³n Tab Panel: estructura (triggers + contenido), comportamiento responsivo
- [ ] PatrÃ³n Glassmorphism: cuÃ¡ndo usar, valores de backdrop-blur/opacity/ring

## Evidencia exigida en Gate 4

> Todo patrÃ³n debe tener al menos 1 ejemplo concreto implementado en cÃ³digo y screenshot de referencia.

---

## TODO

- Extraer patrones de `DashboardPage.tsx` (Card MÃ©trica, Card CTA)
- Extraer patrÃ³n Tab Panel de `ProfilePage.tsx`
- Extraer patrÃ³n Multi-Step de `OnboardingFlow.tsx`
- Formalizar uso de Glassmorphism (usado en Onboarding cards y theme toggle)

```


---

#### FILE: `docs-ui/06_CONTENT_STYLE.md`

```markdown
# 06 â€” GuÃ­a de Contenido y Microcopy

**PropÃ³sito:** Define el tono, estilo y reglas de redacciÃ³n para toda la interfaz de CIVICUM. Desde tÃ­tulos y subtÃ­tulos hasta placeholders, mensajes de error, disclaimers legales y CTAs. Implementa el "Tono Terracota": cÃ¡lido, terrenal, honesto, local.

## Decisiones que debe contener

- [ ] Tono general: principios (mÃ¡x 5) con ejemplos positivos y negativos
- [ ] Microcopy por contexto: placeholders, botones, validaciones, Ã©xitos, errores
- [ ] ChilenizaciÃ³n sutil: cuÃ¡ndo usarla, lÃ­mites, ejemplos aprobados
- [ ] Disclaimers legales obligatorios: voto simbÃ³lico, no asesorÃ­a legal, datos
- [ ] Honestidad Radical ante errores: fraseo para estados de fallo
- [ ] Nomenclatura oficial: nombres de mÃ³dulos, niveles de verificaciÃ³n, acciones

## Evidencia exigida en Gate 4

> Toda regla de tono debe tener DOCREF a `docs/ux/soulful-copywriting-terracotta.md` o decisiÃ³n formal. Todo disclaimer debe citar la fuente legal correspondiente.

---

## TODO

- Importar reglas de `docs/ux/soulful-copywriting-terracotta.md`
- Extraer disclaimers de `docs/legal/terms-of-service.md`
- Formalizar nomenclatura de niveles (Observador, Correo Verificado, Gubernamental â†’ L0-L4)
- Importar reglas de tono de `CIVICUM_Identidad_de_Marca` (Honestidad Radical, Apartidismo)

```


---

#### FILE: `docs-ui/07_A11Y.md`

```markdown
# 07 â€” Accesibilidad (A11Y)

**PropÃ³sito:** Define los estÃ¡ndares de accesibilidad que toda pantalla y componente de CIVICUM debe cumplir. El objetivo es WCAG 2.1 AA como mÃ­nimo, con aspiraciÃ³n a AAA en componentes crÃ­ticos. Incluye reglas de contraste, navegaciÃ³n por teclado, ARIA, y respeto por preferencias de movimiento.

## Decisiones que debe contener

- [ ] Nivel de conformidad: WCAG 2.1 AA obligatorio, AAA aspiracional
- [ ] Contraste: ratios mÃ­nimos (4.5:1 texto normal, 3:1 texto grande y UI)
- [ ] NavegaciÃ³n por teclado: focus-visible, tab order, skip links
- [ ] ARIA: roles, labels, live regions, landmarks obligatorios
- [ ] Motion: `prefers-reduced-motion` â€” quÃ© animaciones se desactivan
- [ ] Texto: tamaÃ±o mÃ­nimo, zoom 200%, texto alternativo para imÃ¡genes
- [ ] Formularios: labels asociados, error announcements, autofill
- [ ] Testing: herramientas (jest-axe, axe-core, Lighthouse) y umbrales

## Evidencia exigida en Gate 4

> Toda regla debe tener test automatizado (`jest-axe` o Lighthouse CI). 0 violations bloqueantes. DOCREF a `docs/testing/audit-accesibilidad.md`.

---

## TODO

- Importar requisitos de `docs/testing/audit-accesibilidad.md`
- Cruzar con `CIVICUM_Anexo_Arquitectura_Tecnica_Completa.docx.md Â§1.5`
- Documentar estado actual: focus-visible parcial, sin skip links, sin ARIA landmarks
- Definir modo "Alto Contraste" y "DaltÃ³nico" (mencionados en Master Plan Â§ConfiguraciÃ³n)

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

## 3. Contenido completo — archivos de implementación real


---

#### FILE: `webapp/playwright.config.ts`

```ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests/e2e',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: 'html',

    use: {
        baseURL: 'http://localhost:5173',
        trace: 'on-first-retry',
    },

    projects: [
        {
            name: 'desktop-chromium',
            use: {
                ...devices['Desktop Chrome'],
                viewport: { width: 1440, height: 900 },
            },
        },
        {
            name: 'mobile-chromium',
            use: {
                ...devices['Pixel 5'],
                viewport: { width: 360, height: 800 },
            },
        },
    ],

    /*
     * Dual web servers (Gate 5.7a):
     *   1) Hono backend on port 3001 (real API for /api/community-reports)
     *   2) Vite frontend on port 5173 (proxies /api â†’ localhost:3001)
     *
     * Both start automatically when running `pnpm test:e2e`.
     * The real backend is available for wiring-reality tests (no intercept).
     * Intercept-based tests work regardless because route() takes priority.
     */
    webServer: [
        {
            command: 'pnpm dev:server',
            url: 'http://localhost:3001/health',
            reuseExistingServer: !process.env.CI,
            timeout: 15_000,
        },
        {
            command: 'pnpm dev',
            url: 'http://localhost:5173',
            reuseExistingServer: !process.env.CI,
            timeout: 30_000,
        },
    ],
});


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

#### FILE: `webapp/src/pages/dashboard/DashboardPage.tsx`

```tsx
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, TrendingUp, Users, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import SkeletonScreen from '@/components/feedback/SkeletonScreen';
import ErrorState from '@/components/feedback/ErrorState';
import EmptyState from '@/components/feedback/EmptyState';

/** Shape of a community report from the real API */
interface CommunityReport {
    id: string;
    title: string;
    description: string;
    status: string;
    createdAt: string;
}

interface ReportsResponse {
    reports: CommunityReport[];
}

/**
 * Fetches community reports from the real backend endpoint.
 * No fake data. No fallback arrays. The request either succeeds or fails genuinely.
 */
async function fetchCommunityReports(): Promise<ReportsResponse> {
    const res = await fetch('/api/community-reports');
    if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || `Error ${res.status}: No se pudieron cargar los reportes.`);
    }
    return res.json();
}

/**
 * Renders the community reports section using real async data.
 * Integrates Gate 5.3 feedback components:
 * - Loading â†’ SkeletonScreen (real pending request)
 * - Error â†’ ErrorState with retry (real fetch failure)
 * - Empty â†’ EmptyState (real 0 results from DB)
 * - Data â†’ real report cards
 */
function CommunityReportsSection() {
    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: ['community-reports'],
        queryFn: fetchCommunityReports,
    });

    // Loading: real pending request â€” no artificial delay
    if (isLoading) {
        return (
            <div data-testid="reports-loading">
                <SkeletonScreen rows={3} showHeader={false} showCards={false} />
            </div>
        );
    }

    // Error: real fetch failure (backend down, DB unreachable, 500, etc.)
    if (isError) {
        return (
            <div data-testid="reports-error">
                <ErrorState
                    message={error instanceof Error ? error.message : 'No se pudieron cargar los reportes.'}
                    onRetry={() => refetch()}
                />
            </div>
        );
    }

    const reports = data?.reports ?? [];

    // Empty: real 0 results from database
    if (reports.length === 0) {
        return (
            <div data-testid="reports-empty">
                <EmptyState
                    title="Sin reportes comunitarios"
                    description="AÃºn no hay reportes en tu zona. SÃ© el primero en alzar la voz por tu comunidad."
                    icon={<FileText className="w-10 h-10 text-slate-400" strokeWidth={1.5} />}
                    ctaLabel="Crear Reporte"
                    ctaTo="/alza-la-voz"
                />
            </div>
        );
    }

    // Data: real reports from database
    return (
        <div data-testid="reports-data" className="space-y-3">
            {reports.map((report) => (
                <Card key={report.id} className="border-slate-200">
                    <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-sm text-slate-800 truncate">{report.title}</h4>
                                <p className="text-xs text-slate-500 mt-1 line-clamp-2">{report.description}</p>
                            </div>
                            <span className={`ml-3 text-xs px-2 py-1 rounded-full font-medium shrink-0 ${
                                report.status === 'RESOLVED'
                                    ? 'bg-green-100 text-green-700'
                                    : report.status === 'PENDING'
                                        ? 'bg-amber-100 text-amber-700'
                                        : 'bg-slate-100 text-slate-600'
                            }`}>
                                {report.status}
                            </span>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

export default function DashboardPage() {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Inicio Local</h1>
                <p className="text-slate-500">MÃ©tricas y necesidades en tu entorno inmediato.</p>
            </div>

            {/* Static summary cards â€” these remain hardcoded (not part of this vertical) */}
            <div className="grid gap-4 md:grid-cols-3">
                <Card className="bg-azul-50 border-azul-100 shadow-none">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium flex items-center gap-2 text-azul-900">
                            <Users className="w-4 h-4 text-azul-600" /> CÃ­rculos Locales
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-azul-700">3 Mesas</div>
                        <p className="text-xs text-azul-600/80 mt-1">Deliberando ordenanzas municipales.</p>
                    </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-100 shadow-none">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium flex items-center gap-2 text-green-900">
                            <TrendingUp className="w-4 h-4 text-green-600" /> Casos Resueltos
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-green-700">145 Esta Semana</div>
                        <p className="text-xs text-green-600/80 mt-1">Autoridades respondieron por canal oficial.</p>
                    </CardContent>
                </Card>
            </div>

            {/* Real async section: Community Reports â€” Gate 5.7 vertical */}
            <div className="space-y-4">
                <h2 className="text-xl font-bold tracking-tight flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    Reportes Comunitarios
                </h2>
                <CommunityReportsSection />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                    <h2 className="text-xl font-bold tracking-tight">Acciones Inmediatas</h2>
                    <Card className="border-slate-200">
                        <CardContent className="p-6">
                            <div className="flex flex-col items-center justify-center text-center space-y-3">
                                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                                    <AlertTriangle className="w-6 h-6 text-slate-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Reporta una vulnerabilidad social o infraestructura</h3>
                                    <p className="text-sm text-slate-500 max-w-sm mt-1">Â¿Poste en mal estado? Â¿Basural clandestino? ReÃºne evidencia irrefutable de forma anÃ³nima.</p>
                                </div>
                                <Link to="/alza-la-voz" className="w-full mt-2">
                                    <Button className="w-full bg-slate-900 hover:bg-slate-800">Alzar la Voz ("Reportar")</Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-4">
                    <h2 className="text-xl font-bold tracking-tight">Debate Ciudadano</h2>
                    <Card className="border-slate-200">
                        <CardContent className="p-6">
                            <div className="flex flex-col items-center justify-center text-center space-y-3">
                                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                                    <Users className="w-6 h-6 text-slate-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">CÃ­rculos de AcciÃ³n</h3>
                                    <p className="text-sm text-slate-500 max-w-sm mt-1">Ãšnete a asambleas organizadas localmente. DeliberaciÃ³n guiada y prevenciÃ³n estructural.</p>
                                </div>
                                <Link to="/circulos" className="w-full mt-2">
                                    <Button variant="outline" className="w-full">Explorar Mesas</Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

```


---

#### FILE: `webapp/src/components/layout/AppLayout.tsx`

```tsx
import { Outlet, NavLink } from "react-router-dom";
import { CivicumLogo } from "../icons/CivicumLogo";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { SmartDock } from "./SmartDock";
import OfflineBanner from "../feedback/OfflineBanner";
import { useNetworkStatus } from "@/lib/useNetworkStatus";

export default function AppLayout() {
    const { isOnline } = useNetworkStatus();

    return (
        <div className="flex min-h-screen w-full flex-col bg-slate-50">
            {/* 
        TOP NAVBAR (Desktop & Mobile General)
        Sticky top nav with brand and profile access 
      */}
            <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b bg-white px-4 shadow-sm md:px-6">
                <div className="flex items-center gap-2">
                    {/* Logo con color de marca (Terracota) */}
                    <CivicumLogo className="h-8 w-auto" variant="brand" />
                </div>

                {/* Desktop Navigation Links (Hidden on Mobile) */}
                <nav className="hidden items-center gap-6 md:flex">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-sm font-medium transition-colors hover:text-terracota-600 ${isActive ? "text-terracota-500" : "text-slate-600"}`
                        }
                    >
                        Inicio
                    </NavLink>
                    <NavLink
                        to="/alza-la-voz"
                        className={({ isActive }) =>
                            `text-sm font-medium transition-colors hover:text-terracota-600 ${isActive ? "text-terracota-500" : "text-slate-600"}`
                        }
                    >
                        Alza la Voz
                    </NavLink>
                    <NavLink
                        to="/circulos"
                        className={({ isActive }) =>
                            `text-sm font-medium transition-colors hover:text-terracota-600 ${isActive ? "text-terracota-500" : "text-slate-600"}`
                        }
                    >
                        CÃ­rculos de AcciÃ³n
                    </NavLink>
                </nav>

                {/* User Profile Access */}
                <div className="flex items-center gap-4">
                    <NavLink to="/perfil">
                        <Avatar className="h-9 w-9 border-2 border-transparent transition-colors hover:border-terracota-200">
                            <AvatarImage src="" alt="Avatar" />
                            <AvatarFallback className="bg-terracota-100 text-terracota-700">L0</AvatarFallback>
                        </Avatar>
                    </NavLink>
                </div>
            </header>

            {/* Offline Banner â€” real navigator.onLine detection (UI-STP-005, ADR-0006) */}
            {!isOnline && (
                <div className="w-full max-w-7xl mx-auto px-4 pt-3 md:px-6">
                    <OfflineBanner />
                </div>
            )}

            {/* 
        MAIN CONTENT AREA
        Renders the active route's component
      */}
            <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-6 pb-24 md:pb-6">
                <Outlet />
            </main>

            {/* 
        SMART DOCK (Mobile Only PWA Bottom Navigation)
        Fixed at bottom, easy thumb access (extracted to component)
      */}
            <SmartDock />
        </div>
    );
}

```


---

#### FILE: `webapp/src/components/layout/SmartDock.tsx`

```tsx
import { NavLink } from "react-router-dom";
import { Home, Lightbulb, UserRound, UsersRound } from "lucide-react";

export function SmartDock() {
    return (
        <nav className="fixed bottom-0 left-0 z-50 flex h-16 w-full items-center justify-around border-t bg-white pb-safe pt-1 shadow-lg md:hidden">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `flex flex-col items-center justify-center gap-1 w-16 h-full transition-colors ${isActive ? "text-terracota-500" : "text-slate-500 hover:text-slate-900"}`
                }
            >
                <Home className="h-5 w-5" />
                <span className="text-[10px] font-medium">Inicio</span>
            </NavLink>

            <NavLink
                to="/alza-la-voz"
                className={({ isActive }) =>
                    `flex flex-col items-center justify-center gap-1 w-16 h-full transition-colors ${isActive ? "text-terracota-500" : "text-slate-500 hover:text-slate-900"}`
                }
            >
                <Lightbulb className="h-5 w-5" />
                <span className="text-[10px] font-medium">Reportar</span>
            </NavLink>

            <NavLink
                to="/circulos"
                className={({ isActive }) =>
                    `flex flex-col items-center justify-center gap-1 w-16 h-full transition-colors ${isActive ? "text-terracota-500" : "text-slate-500 hover:text-slate-900"}`
                }
            >
                <UsersRound className="h-5 w-5" />
                <span className="text-[10px] font-medium">CÃ­rculos</span>
            </NavLink>

            <NavLink
                to="/perfil"
                className={({ isActive }) =>
                    `flex flex-col items-center justify-center gap-1 w-16 h-full transition-colors ${isActive ? "text-terracota-500" : "text-slate-500 hover:text-slate-900"}`
                }
            >
                <UserRound className="h-5 w-5" />
                <span className="text-[10px] font-medium">Mi Perfil</span>
            </NavLink>
        </nav>
    );
}

```


---

#### FILE: `webapp/src/lib/useNetworkStatus.ts`

```ts
import { useState, useEffect } from 'react';

/**
 * useNetworkStatus â€” Real browser online/offline detection.
 *
 * Uses `navigator.onLine` for initial value + `online`/`offline` window events.
 * No timers, no polling â€” pure event-driven.
 *
 * DOCREF: ADR-0006 â†’ Offline state; UI-STP-005 â†’ banner NO alarma.
 */
export function useNetworkStatus() {
  const [isOnline, setIsOnline] = useState(() =>
    typeof navigator !== 'undefined' ? navigator.onLine : true,
  );

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return { isOnline };
}

```


---

#### FILE: `webapp/src/server/index.ts`

```ts
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { desc } from 'drizzle-orm'
import { getDb } from './db'
import { communityReports } from '../db/schema'

const app = new Hono()

app.use('*', logger())
app.use('*', cors())

app.get('/health', (c) => c.json({ status: 'ok', version: '1.0.0' }))

/**
 * GET /api/community-reports â€” Read-only endpoint (Gate 5.7)
 *
 * Real query to communityReports table via Drizzle + Neon.
 * - If DATABASE_URL is missing â†’ real 500 error
 * - If DB is connected but table is empty â†’ real empty array
 * - If DB is connected and has data â†’ real data
 * No fake data. No fallback arrays.
 */
app.get('/api/community-reports', async (c) => {
    try {
        const db = getDb()
        const reports = await db
            .select()
            .from(communityReports)
            .orderBy(desc(communityReports.createdAt))
            .limit(50)
        return c.json({ reports })
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Error desconocido'
        console.error('[community-reports] Query failed:', message)
        return c.json(
            { error: 'No se pudieron cargar los reportes comunitarios.', detail: message },
            500
        )
    }
})

// Auth middleware structure (L0-L4 validation)
app.use('/api/protected/*', async (_c, next) => {
    // TODO: Implement JWT validation and Level authorization here
    await next()
})

app.get('/api/protected/profile', (c) => {
    return c.json({ message: 'Profile data protected by L2 validation' })
})

export default app

```


---

#### FILE: `webapp/src/server/serve.ts`

```ts
import { createServer } from 'node:http';
import app from './index';

const port = parseInt(process.env.PORT || '3001', 10);

/**
 * Standalone Node.js HTTP server for the Hono app.
 * Uses node:http with Hono's fetch adapter â€” no extra dependency needed.
 * Run with: npx tsx src/server/serve.ts
 */
const server = createServer(async (req, res) => {
    const url = new URL(req.url || '/', `http://localhost:${port}`);

    // Read body for non-GET requests
    let body: string | undefined;
    if (req.method !== 'GET' && req.method !== 'HEAD') {
        body = await new Promise<string>((resolve) => {
            let data = '';
            req.on('data', (chunk: Buffer) => { data += chunk.toString(); });
            req.on('end', () => resolve(data));
        });
    }

    const honoReq = new Request(url.toString(), {
        method: req.method || 'GET',
        headers: req.headers as HeadersInit,
        body: body || undefined,
    });

    const honoRes = await app.fetch(honoReq);

    res.writeHead(honoRes.status, Object.fromEntries(honoRes.headers.entries()));
    const resBody = await honoRes.text();
    res.end(resBody);
});

server.listen(port, () => {
    console.log(`[CIVICUM] Hono server running on http://localhost:${port}`);
});

```


---

#### FILE: `webapp/src/server/db.ts`

```ts
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '../db/schema';

/**
 * Real database connection using Neon Serverless driver.
 * Requires DATABASE_URL environment variable.
 * If DATABASE_URL is missing, queries will fail with a real error â€” no fake fallback.
 */
export function getDb() {
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
        throw new Error('DATABASE_URL is not configured. Cannot connect to database.');
    }
    const sql = neon(databaseUrl);
    return drizzle(sql, { schema });
}

```


---

#### FILE: `webapp/src/db/seed.ts`

```ts

import { getDb } from "../server/db";
import { communityReports } from "./schema";
import * as dotenv from "dotenv";

dotenv.config();

async function seed() {
    console.log("ðŸŒ± Seeding database...");
    
    if (!process.env.DATABASE_URL) {
        console.error("âŒ Seeding blocked: DATABASE_URL is not configured.");
        process.exit(1);
    }
    
    try {
        const db = getDb();
        await db.insert(communityReports).values([
            {
                title: "Bache en Avenida Central",
                description: "Agujero profundo en el carril derecho justo antes del cruce.",
                status: "PENDING"
            },
            {
                title: "Luminaria apagada",
                description: "Poste de luz no funciona hace 3 noches en el parque sur.",
                status: "PENDING"
            }
        ]);
        console.log("âœ… Seed complete.");
        process.exit(0);
    } catch (error) {
        console.error("âŒ Seed failed:", error);
        process.exit(1);
    }
}

seed();

```


---

#### FILE: `webapp/src/db/reset.ts`

```ts
import { getDb } from "../server/db";
import { communityReports } from "./schema";
import * as dotenv from "dotenv";

dotenv.config();

async function reset() {
    console.log("ðŸ—‘ï¸ Resetting database...");
    
    if (!process.env.DATABASE_URL) {
        console.error("âŒ Reset blocked: DATABASE_URL is not configured.");
        process.exit(1);
    }
    
    try {
        const db = getDb();
        await db.delete(communityReports);
        console.log("âœ… Database reset complete (0 rows).");
        process.exit(0);
    } catch (error) {
        console.error("âŒ Reset failed:", error);
        process.exit(1);
    }
}

reset();

```


---

#### FILE: `webapp/tests/e2e/integration.reports.spec.ts`

```ts
import { test, expect } from '@playwright/test';

// ---------------------------------------------------------------------------
// Onboarding bypass â€” same pattern as other specs
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

async function setupOnboardingBypass(page: import('@playwright/test').Page) {
  await page.goto('/onboarding');
  const bypassPayload = buildOnboardingBypass();
  await page.evaluate(([key, payload]) => {
    localStorage.setItem(key, payload);
  }, [ONBOARDING_STORAGE_KEY, bypassPayload] as const);
}

// ---------------------------------------------------------------------------
// Gate 5.7 â€” Integration tests for Community Reports vertical
//
// These tests intercept the REAL HTTP request to /api/community-reports
// and control the response. The production code path (useQuery â†’ fetch)
// is unchanged â€” the interception happens at the network layer via Playwright.
//
// NO timers. NO fake flags. NO production toggles.
// ---------------------------------------------------------------------------

test.describe('Integration â€” Community Reports (Gate 5.7)', () => {
  test('Loading: skeleton is shown while request is pending', async ({ page }) => {
    const pageErrors: Error[] = [];
    page.on('pageerror', (e) => pageErrors.push(e));
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    await setupOnboardingBypass(page);

    // Intercept and hold the request to observe the loading state
    let resolveRequest: (() => void) | undefined;
    const requestHeld = new Promise<void>((resolve) => { resolveRequest = resolve; });

    await page.route('**/api/community-reports', async (route) => {
      // Signal that request was intercepted
      resolveRequest?.();
      // Hold for 2 seconds to let Playwright assert the loading state
      await new Promise((r) => setTimeout(r, 2000));
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ reports: [] }),
      });
    });

    await page.goto('/');
    await waitForReactMount(page);

    // Wait for the request to be intercepted (proves fetch was made)
    await requestHeld;

    // Assert Loading state is visible (SkeletonScreen renders aria-busy)
    const loadingSection = page.locator('[data-testid="reports-loading"]');
    await expect(loadingSection).toBeVisible({ timeout: 5_000 });

    // Verify skeleton has aria attributes
    const skeleton = loadingSection.locator('[aria-busy="true"]');
    await expect(skeleton).toBeVisible();

    // Wait for loading to resolve (becomes empty since we sent [])
    const emptySection = page.locator('[data-testid="reports-empty"]');
    await expect(emptySection).toBeVisible({ timeout: 10_000 });

    // Zero JS errors
    expect(pageErrors, 'pageerror should be empty').toEqual([]);
    // Note: React Query retries may produce console warnings, filter those
  });

  test('Error: error state is shown when backend returns 500', async ({ page }) => {
    const pageErrors: Error[] = [];
    page.on('pageerror', (e) => pageErrors.push(e));

    await setupOnboardingBypass(page);

    // Intercept and return 500 â€” simulates a real backend failure
    await page.route('**/api/community-reports', async (route) => {
      await route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({
          error: 'No se pudieron cargar los reportes comunitarios.',
          detail: 'Connection refused',
        }),
      });
    });

    await page.goto('/');
    await waitForReactMount(page);

    // Assert Error state is visible
    const errorSection = page.locator('[data-testid="reports-error"]');
    await expect(errorSection).toBeVisible({ timeout: 15_000 });

    // Verify error content from ErrorState component
    await expect(errorSection).toContainText('Hubo un problema');

    // Verify retry button exists (ErrorState onRetry)
    const retryButton = errorSection.locator('button', { hasText: 'Reintentar' });
    await expect(retryButton).toBeVisible();

    // Zero JS errors (page-level errors; console errors from fetch 500 are expected)
    expect(pageErrors, 'pageerror should be empty').toEqual([]);
  });

  test('Empty: empty state is shown when backend returns 0 reports', async ({ page }) => {
    const pageErrors: Error[] = [];
    page.on('pageerror', (e) => pageErrors.push(e));
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    await setupOnboardingBypass(page);

    // Intercept and return empty array â€” simulates a real empty database
    await page.route('**/api/community-reports', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ reports: [] }),
      });
    });

    await page.goto('/');
    await waitForReactMount(page);

    // Assert Empty state is visible
    const emptySection = page.locator('[data-testid="reports-empty"]');
    await expect(emptySection).toBeVisible({ timeout: 10_000 });

    // Verify EmptyState copy
    await expect(emptySection).toContainText('Sin reportes comunitarios');
    await expect(emptySection).toContainText('SÃ© el primero en alzar la voz');

    // Zero JS errors
    expect(pageErrors, 'pageerror should be empty').toEqual([]);
  });

  test('Retry: clicking retry on error triggers a new request', async ({ page }) => {
    const pageErrors: Error[] = [];
    page.on('pageerror', (e) => pageErrors.push(e));

    await setupOnboardingBypass(page);

    let requestCount = 0;

    // First request: 500 error; second request: success with empty
    await page.route('**/api/community-reports', async (route) => {
      requestCount++;
      if (requestCount <= 2) {
        // First two calls (initial + React Query retry): return 500
        await route.fulfill({
          status: 500,
          contentType: 'application/json',
          body: JSON.stringify({ error: 'DB down' }),
        });
      } else {
        // After user clicks retry: return success
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ reports: [] }),
        });
      }
    });

    await page.goto('/');
    await waitForReactMount(page);

    // Wait for error state (after initial + 1 retry fail)
    const errorSection = page.locator('[data-testid="reports-error"]');
    await expect(errorSection).toBeVisible({ timeout: 15_000 });

    // Click retry
    const retryButton = errorSection.locator('button', { hasText: 'Reintentar' });
    await retryButton.click();

    // Should transition to empty state (since we return [] on retry)
    const emptySection = page.locator('[data-testid="reports-empty"]');
    await expect(emptySection).toBeVisible({ timeout: 15_000 });

    // Zero JS errors
    expect(pageErrors, 'pageerror should be empty').toEqual([]);
  });

  test('Empty CTA: "Crear Reporte" navigates to /alza-la-voz', async ({ page }) => {
    const pageErrors: Error[] = [];
    page.on('pageerror', (e) => pageErrors.push(e));

    await setupOnboardingBypass(page);

    // Intercept to force empty state
    await page.route('**/api/community-reports', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ reports: [] }),
      });
    });

    await page.goto('/');
    await waitForReactMount(page);

    // Wait for empty state
    const emptySection = page.locator('[data-testid="reports-empty"]');
    await expect(emptySection).toBeVisible({ timeout: 10_000 });

    // Click the CTA link â€” should navigate to /alza-la-voz
    const ctaLink = emptySection.locator('a', { hasText: 'Crear Reporte' });
    await expect(ctaLink).toBeVisible();
    await ctaLink.click();

    await expect(page).toHaveURL('/alza-la-voz');

    // Zero JS errors
    expect(pageErrors, 'pageerror should be empty').toEqual([]);
  });
});

// ---------------------------------------------------------------------------
// Gate 5.7a â€” Real backend wiring tests (NO intercept)
//
// These tests exercise the real Hono backend started by Playwright's
// webServer config. No route interception is used â€” every HTTP request
// goes through the real Vite proxy â†’ real Hono server.
//
// The backend will return a real 500 (DATABASE_URL not configured) or
// real data/empty if a DB is connected. Both outcomes are valid.
// ---------------------------------------------------------------------------

test.describe('Real Backend Wiring (Gate 5.7a)', () => {
  test('Backend /health returns real 200', async ({ request }) => {
    // Direct HTTP request to the real Hono server (no browser, no intercept)
    const response = await request.get('http://localhost:3001/health');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toEqual({ status: 'ok', version: '1.0.0' });
  });

  test('Backend /api/community-reports returns real HTTP response', async ({ request }) => {
    // Direct HTTP request to the real endpoint â€” no intercept
    const response = await request.get('http://localhost:3001/api/community-reports');
    // Accept either 200 (DB connected) or 500 (DB not configured) â€” both are honest
    expect([200, 500]).toContain(response.status());

    const body = await response.json();
    if (response.status() === 200) {
      expect(body).toHaveProperty('reports');
      expect(Array.isArray(body.reports)).toBe(true);
    } else {
      expect(body).toHaveProperty('error');
    }
  });

  test('Dashboard renders real state without intercept', async ({ page }) => {
    const pageErrors: Error[] = [];
    page.on('pageerror', (e) => pageErrors.push(e));

    await setupOnboardingBypass(page);

    // NO page.route â€” this is a real request through the Vite proxy to the real backend
    await page.goto('/');
    await waitForReactMount(page);

    // Dashboard should render one of the three real states (no intercept)
    const dataSection = page.locator('[data-testid="reports-data"]');
    const emptySection = page.locator('[data-testid="reports-empty"]');
    const errorSection = page.locator('[data-testid="reports-error"]');

    // Wait for any of the three states to appear (real backend response)
    await expect(
      dataSection.or(emptySection).or(errorSection)
    ).toBeVisible({ timeout: 20_000 });

    // Zero JS errors
    expect(pageErrors, 'pageerror should be empty').toEqual([]);
  });
});


```


---

#### FILE: `webapp/tests/e2e/integration.5state.spec.ts`

```ts
import { test, expect } from '@playwright/test';

// ---------------------------------------------------------------------------
// Onboarding bypass â€” same pattern as other specs
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

test.describe('Integration â€” 5-State Offline (Gate 5.4)', () => {
  test('offline banner appears when browser goes offline and disappears when back online', async ({ page, context }) => {
    const pageErrors: Error[] = [];
    page.on('pageerror', (e) => pageErrors.push(e));
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    // Bypass onboarding
    await page.goto('/onboarding');
    const bypassPayload = buildOnboardingBypass();

    // Stub /api/community-reports (backend not running during this test)
    await page.route('**/api/community-reports', (route) =>
        route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ reports: [] }) })
    );
    await page.evaluate(([key, payload]) => {
      localStorage.setItem(key, payload);
    }, [ONBOARDING_STORAGE_KEY, bypassPayload] as const);

    // Navigate to home (inside AppLayout)
    await page.goto('/');
    await waitForReactMount(page);

    // Banner should NOT be visible when online
    const banner = page.locator('[role="status"]').filter({ hasText: 'Sin conexiÃ³n' });
    await expect(banner).not.toBeVisible();

    // Simulate going offline (real Playwright browser emulation)
    await context.setOffline(true);

    // Dispatch offline event since Playwright setOffline may not fire it in all cases
    await page.evaluate(() => window.dispatchEvent(new Event('offline')));

    // Banner SHOULD appear
    await expect(banner).toBeVisible({ timeout: 5_000 });

    // Verify banner content per UI-STP-005
    await expect(banner).toContainText('Sin conexiÃ³n a internet');
    await expect(banner).toContainText('Puedes seguir usando las funciones disponibles');

    // Simulate going back online
    await context.setOffline(false);
    await page.evaluate(() => window.dispatchEvent(new Event('online')));

    // Banner should disappear
    await expect(banner).not.toBeVisible({ timeout: 5_000 });

    // Zero JS errors
    expect(pageErrors, 'pageerror should be empty').toEqual([]);
    expect(consoleErrors, 'console.error should be empty').toEqual([]);
  });
});

```


---

#### FILE: `webapp/tests/e2e/smoke.breakpoints.spec.ts`

```ts
import { test, expect } from '@playwright/test';

/**
 * Breakpoint Smoke Tests â€” SSOT UI-LAY-004 Verification
 *
 * Validates the SSOT layout contract for Smart Dock behavior across viewports.
 *
 * â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
 * â”‚ UI-LAY-004 (MUST): Smart Dock: bottom bar XS-MD, side rail LG+    â”‚
 * â”‚ DOCREF: S01 â†’ Â§6.3 â†’ fila Smart Dock (L635)                      â”‚
 * â”‚ SOURCE: docs-ui/traceability_matrix.md (line 64)                  â”‚
 * â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
 *
 * Invariants under test (derived from UI-LAY-004):
 *   - 360px (XS): Smart Dock visible as bottom bar
 *   - 480px (SM): Smart Dock visible as bottom bar
 *   - 768px (MD): Smart Dock visible as bottom bar â† DRIFT: current code hides at md
 *   - 1024px (LG): Smart Dock should be side rail  â† GAP: side rail not implemented
 *   - All viewports: zero JS errors (pageerror + console.error)
 *
 * NOTE: This test does NOT assert "desktop nav visible/hidden" because
 * no UI_RULE_ID + DOCREF exists for that behavior in the traceability matrix.
 *
 * DOCREF: ADR-0003 (ACCEPTED, OpciÃ³n B) â€” VerificaciÃ³n Â§63-67
 * DOCREF: docs-ui/03_LAYOUTS.md â€” Breakpoints oficiales Â§20-33
 */

// ---------------------------------------------------------------------------
// Selectors â€” implementation-coupled (no data-testid available yet)
//
// FRAGILITY NOTE: These selectors are tied to the current markup structure
// in AppLayout.tsx. They will break if the markup changes semantically.
//
// TODO (Gate 5+): Add data-testid="smart-dock" to AppLayout.tsx,
// then update to page.getByTestId('smart-dock').
// ---------------------------------------------------------------------------

// Smart Dock (mobile bottom nav): <nav class="fixed bottom-0 ... md:hidden">
const SMART_DOCK = 'nav.fixed';

// Side Rail (desktop LG+ nav) â€” placeholder selector.
// TODO (Gate 5+): Add data-testid="side-rail" to SideRail component when it exists.
const SIDE_RAIL = '[data-testid="side-rail"]';

// ---------------------------------------------------------------------------
// Onboarding bypass fixture â€” FRAGILE INTERNAL FIXTURE
//
// Directly injects Zustand persisted state to skip onboarding.
// NOT a contract â€” mirrors internal schema of useOnboardingStore.ts.
//
// If this breaks (onboarding shows instead of dashboard), check:
//   1. Key rename: grep for 'civicum-onboarding-storage' in src/store/
//   2. Schema change: compare with useOnboardingStore.ts state shape
//   3. Zustand version: check if persist version changed from 0
//
// DOCREF: webapp/src/store/useOnboardingStore.ts
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

// ---------------------------------------------------------------------------
// Helper: dual-wait for React mount (route-independent)
//
// Avoids networkidle flakiness and does not depend on specific layout elements
// like <header>, which may not exist on every route (e.g. standalone onboarding).
//
// Dual-wait pattern:
//   1. Wait for #root to exist (always true in a React SPA)
//   2. Wait for #root to have at least one child (React has mounted content)
//
// If step 2 times out, it likely means:
//   - The onboarding bypass fixture is broken (schema/key changed)
//   - The route does not render content (empty catch-all, 404 GAP)
//   - A JS error prevented React from mounting
//
// EDGE CASE: childElementCount > 0 can false-fail if React mounts an empty
// wrapper/fragment with no DOM children. If this happens in the future,
// upgrade step 2 to a semantic signal:
//   - Preferred: document.querySelector('#root [data-app-ready]')
//     (add data-app-ready to AppLayout/OnboardingLayout root when implemented)
//   - Fallback: document.querySelector('#root nav, #root header, #root main')
// ---------------------------------------------------------------------------
const REACT_MOUNT_TIMEOUT = 10_000;

async function waitForReactMount(page: import('@playwright/test').Page) {
    // Step 1: #root element exists (always present in index.html)
    await page.locator('#root').waitFor({ state: 'attached', timeout: REACT_MOUNT_TIMEOUT });

    // Step 2: React has mounted at least one child inside #root
    await page.waitForFunction(
        () => (document.querySelector('#root')?.childElementCount ?? 0) > 0,
        { timeout: REACT_MOUNT_TIMEOUT },
    ).catch(() => {
        throw new Error(
            `waitForReactMount: #root has no children after ${REACT_MOUNT_TIMEOUT}ms. ` +
            'Possible causes: onboarding bypass fixture broken (check ONBOARDING_STORAGE_KEY / schema), ' +
            'route renders nothing (404 GAP), or JS error prevented mount.'
        );
    });
}

// ---------------------------------------------------------------------------
// Helper: setup error listeners, bypass onboarding, navigate to dashboard
// ---------------------------------------------------------------------------
async function setupPage(page: import('@playwright/test').Page, width: number, height: number) {
    const pageErrors: Error[] = [];
    page.on('pageerror', (e) => pageErrors.push(e));
    const consoleErrors: string[] = [];
    page.on('console', (msg) => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });

    await page.setViewportSize({ width, height });

    // Stub /api/community-reports so proxy errors don't pollute console.error
    // (backend is not running during smoke tests â€” this is NOT the vertical under test)
    await page.route('**/api/community-reports', (route) =>
        route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ reports: [] }) })
    );

    // Inject onboarding bypass fixture
    await page.goto('/onboarding');
    const bypassPayload = buildOnboardingBypass();
    await page.evaluate(([key, payload]) => {
        localStorage.setItem(key, payload);
    }, [ONBOARDING_STORAGE_KEY, bypassPayload] as const);

    await page.goto('/');
    await waitForReactMount(page);

    return { pageErrors, consoleErrors };
}

// ---------------------------------------------------------------------------
// Tests â€” SSOT UI-LAY-004
// ---------------------------------------------------------------------------
test.describe('Breakpoint Smoke â€” SSOT UI-LAY-004', () => {

    // â”€â”€ XS = 360px â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // UI-LAY-004: "bottom bar XS-MD" â†’ dock visible at XS âœ…
    test('360px (XS): Smart Dock visible as bottom bar, no JS errors', async ({ page }) => {
        const { pageErrors, consoleErrors } = await setupPage(page, 360, 800);

        const dock = page.locator(SMART_DOCK).first();
        await expect(dock, 'UI-LAY-004: Smart Dock should be bottom bar at XS (360px)').toBeVisible();

        expect(pageErrors, 'pageerror should be empty at 360px').toEqual([]);
        expect(consoleErrors, 'console.error should be empty at 360px').toEqual([]);
    });

    // â”€â”€ SM = 480px â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // UI-LAY-004: "bottom bar XS-MD" â†’ dock visible at SM âœ…
    test('480px (SM): Smart Dock visible as bottom bar, no JS errors', async ({ page }) => {
        const { pageErrors, consoleErrors } = await setupPage(page, 480, 800);

        const dock = page.locator(SMART_DOCK).first();
        await expect(dock, 'UI-LAY-004: Smart Dock should be bottom bar at SM (480px)').toBeVisible();

        expect(pageErrors, 'pageerror should be empty at 480px').toEqual([]);
        expect(consoleErrors, 'console.error should be empty at 480px').toEqual([]);
    });

    // â”€â”€ MD = 768px â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // UI-LAY-004: "bottom bar XS-MD" â†’ dock should be visible at MD.
    // DRIFT: Current implementation uses md:hidden, hiding dock at â‰¥768px.
    // This test is expected to fail until AppLayout is fixed to show dock at MD.
    // Debe convertirse en test passing cuando se implemente (Gate 5+).
    test('768px (MD): Smart Dock visible as bottom bar â€” SSOT drift', async ({ page }) => {
        test.fail(true, 'SSOT UI-LAY-004 drift: dock should be bottom bar at MD (768px) but current code uses md:hidden. Must fix in Gate 5+ to align with SSOT.');

        const { pageErrors, consoleErrors } = await setupPage(page, 768, 900);

        const dock = page.locator(SMART_DOCK).first();
        await expect(dock, 'UI-LAY-004: Smart Dock should be bottom bar at MD (768px)').toBeVisible();

        expect(pageErrors, 'pageerror should be empty at 768px').toEqual([]);
        expect(consoleErrors, 'console.error should be empty at 768px').toEqual([]);
    });

    // â”€â”€ LG = 1024px â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // UI-LAY-004: "side rail LG+" â†’ dock should be a side rail at LG.
    // GAP: Side rail component does not exist yet.
    // This test is expected to fail until side rail is implemented.
    // Debe convertirse en test passing cuando se implemente (Gate 5+).
    test('1024px (LG): Smart Dock visible as side rail â€” pending implementation', async ({ page }) => {
        test.fail(true, 'SSOT UI-LAY-004 pending: side rail not yet implemented at LG+ (1024px). Must become passing test when SideRail component is added (Gate 5+).');

        const { pageErrors, consoleErrors } = await setupPage(page, 1024, 900);

        // Assert side rail exists at LG â€” uses placeholder data-testid selector.
        // TODO (Gate 5+): agregar data-testid="side-rail" al componente cuando exista.
        await expect(page.locator(SIDE_RAIL), 'UI-LAY-004: side rail should exist at LG').toBeVisible();

        expect(pageErrors, 'pageerror should be empty at 1024px').toEqual([]);
        expect(consoleErrors, 'console.error should be empty at 1024px').toEqual([]);
    });

    // â”€â”€ JS-only checks at all ADR-0003 breakpoints â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // These ensure no viewport causes crashes, independent of layout assertions.
    test('All breakpoints: no JS errors at 360/480/768/1024', async ({ page }) => {
        const allErrors: string[] = [];

        for (const [label, w, h] of [
            ['XS(360)', 360, 800],
            ['SM(480)', 480, 800],
            ['MD(768)', 768, 900],
            ['LG(1024)', 1024, 900],
        ] as const) {
            const pageErrors: Error[] = [];
            const onPageError = (e: Error) => pageErrors.push(e);
            const consoleErrors: string[] = [];
            const onConsole = (msg: import('@playwright/test').ConsoleMessage) => {
                if (msg.type() === 'error') consoleErrors.push(msg.text());
            };
            page.on('pageerror', onPageError);
            page.on('console', onConsole);

            // Stub /api/community-reports (backend not running during smoke tests)
            await page.route('**/api/community-reports', (route) =>
                route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ reports: [] }) })
            );

            await page.setViewportSize({ width: w, height: h });

            const bypassPayload = buildOnboardingBypass();
            await page.goto('/onboarding');
            await page.evaluate(([key, payload]) => {
                localStorage.setItem(key, payload);
            }, [ONBOARDING_STORAGE_KEY, bypassPayload] as const);

            await page.goto('/');
            await waitForReactMount(page);

            if (pageErrors.length > 0) allErrors.push(`${label}: pageerror(${pageErrors.length})`);
            if (consoleErrors.length > 0) allErrors.push(`${label}: console.error(${consoleErrors.length})`);

            // Remove only our own handlers (not all listeners on the event)
            page.off('pageerror', onPageError);
            page.off('console', onConsole);
        }

        expect(allErrors, 'No JS errors at any breakpoint').toEqual([]);
    });
});

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


---

## 4. Verificación focalizada de blockers (grep results)

### 4.1 — data-module | module-accent | module-bg en webapp/src

```
(0 resultados — NO IMPLEMENTADO en código)
```

**En docs-ui y adr-ui:** 50+ menciones documentales (ADR-0002, traceability_matrix, 03_LAYOUTS, conflicts_log, etc.)
**Conclusión:** Documentado extensamente. Cero líneas de implementación en webapp/src.

### 4.2 — Nunito | IBM Plex | fontFamily | font-heading | font-body | font-mono en webapp/src

```
webapp/src/pages/onboarding/OnboardingFlow.tsx:254: font-mono (clase Tailwind genérica, no IBM Plex)
```

**No hay referencia a Nunito Sans ni IBM Plex en ningún archivo de webapp/src.**
**No hay Inter como import de fuente explícito en webapp/src (solo substring "Inter" en "Intereses").**
**Conclusión:** Tipografía de la spec (ADR-0007) NO implementada. Se usa font-family por defecto del navegador/Tailwind.

### 4.3 — offline.html | service worker | serviceWorker en webapp

```
(0 resultados — NO IMPLEMENTADO)
```

**Conclusión:** No existe offline.html, no existe service worker. UI-STP-006 sin implementar.

### 4.4 — favicon | og:image | apple-touch-icon | manifest en webapp

```
(0 resultados en archivos .html/.json/.tsx/.ts)
```

**Conclusión:** Sin assets PWA (GAP-008). Sin favicon, sin OG tags, sin apple-touch-icon, sin manifest.json.

### 4.5 — side-rail | Breadcrumb | BottomSheet | tab Más | tab More en webapp/src

```
(0 resultados — NINGUNO IMPLEMENTADO)
```

**Conclusión:** Side rail (UI-LAY-004 LG+), breadcrumbs (UI-NAV-007), bottom sheet (UI-CMP-007), tab "Más" — ninguno existe en el código.

---

## 5. Clasificación final

| # | Item | Estado real | Evidencia exacta | Riesgo si no se resuelve |
|---|------|------------|-------------------|--------------------------|
| 1 | data-module atmósferas | SOLO DOCUMENTADO | grep `data-module` en webapp/src = 0 hits; ADR-0002 ACCEPTED; docs-ui/03_LAYOUTS.md §41-50 documenta regla | MEDIO — sin cambio cromático entre módulos; UX plana |
| 2 | Tipografía Nunito/IBM Plex | SOLO DOCUMENTADO | grep `Nunito\|IBM Plex\|fontFamily` en webapp/src = 0 hits; ADR-0007 ACCEPTED; usa defaults Tailwind | MEDIO — identidad visual incompleta; spec no cumplida |
| 3 | Dark mode | SOLO DOCUMENTADO | ADR-0005: pospuesto Época 3+; grep `darkMode` en tailwind.config.ts = `["class"]` (config lista, sin implementación real) | BAJO — pospuesto intencionalmente por ADR |
| 4 | Smart Dock side rail LG+ | DOC-DRIFT | SmartDock.tsx:6 usa `md:hidden` (desaparece en ≥768px); UI-LAY-004 dice "side rail LG+"; smoke.breakpoints.spec.ts L193 expected-fail | ALTO — dock invisible en desktop; nav incompleta LG+ |
| 5 | Tab "Más" + badges | SOLO DOCUMENTADO | SmartDock.tsx tiene solo 4 tabs: Inicio, Reportar, Círculos, Mi Perfil; grep `Más\|badge` = 0 hits | BAJO — funcionalidad secundaria pendiente |
| 6 | Breadcrumbs | SOLO DOCUMENTADO | grep `Breadcrumb` en webapp/src = 0 hits; UI-NAV-007 en traceability_matrix | BAJO — no crítico para Época 1 |
| 7 | Bottom sheet | SOLO DOCUMENTADO | grep `BottomSheet\|Bottom Sheet` en webapp/src = 0 hits; UI-CMP-007 en traceability_matrix | BAJO — sin caso de uso activo en Época 1 |
| 8 | offline.html | MISSING | grep `offline.html\|service.worker` en webapp = 0 hits; UI-STP-006 en traceability_matrix | MEDIO — sin fallback offline digno; OfflineBanner existe pero no offline.html |
| 9 | Performance/Lighthouse CI | MISSING | No existe configuración Lighthouse CI ni scripts de medición; UI-STP-007/008 documentan budgets | ALTO — sin validación de presupuestos de rendimiento |
| 10 | PWA assets | MISSING | grep `favicon\|og:image\|apple-touch-icon\|manifest` en webapp = 0 hits; GAP-008 en epoch1_inventory | MEDIO — app no instalable; sin OG preview en redes sociales |
| 11 | Success state en producción | SOLO DOCUMENTADO | SuccessState.tsx existe; DashboardPage.tsx no lo usa (vertical read-only sin mutación); ADR-0006 documenta limitación | BAJO — componente listo; falta vertical con mutación real |
| 12 | DB seed con 0 rows | IMPLEMENTADO (parcial) | db/reset.ts existe y limpia tabla; pero no se ejecuta en E2E; Empty con DB real vacía no observado | BAJO — reset.ts puede producir estado Empty real pero no se invoca en tests |
| 13 | Docs 05/06/07 consolidados | DOC-DRIFT | 05_PATTERNS.md: 27 líneas, 7 TODOs sin completar; 06_CONTENT_STYLE.md: 26 líneas, 4 TODOs; 07_A11Y.md: 28 líneas, 4 TODOs | MEDIO — skeletons sin reglas; auditoría no puede validar patrones/contenido/a11y |
| 14 | PACK_VERSION alineado | DOC-DRIFT | PACK_VERSION.md: versión `0.1.0` Gate 1 (2026-02-24); HEAD está en Gate 5.8; sin bump desde Gate 1 | BAJO — versión no refleja estado real; cosmético pero confuso para auditoría |

---

## 6. Confirmación final

**Solo paquete de evidencia; sin cambios UI/código/tests/config.**

Único archivo creado:
```
docs-ui/_reentry/AUDIT_EVIDENCE_PACK.md
```


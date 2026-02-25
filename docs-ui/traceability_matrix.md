# 📊 Matriz de Trazabilidad UI — CIVICUM

**Gate:** Gate 2 — Extracción Documental
**Fecha:** 2026-02-24
**Total reglas:** 74
**Fuentes:** 4 documentos activos (ver `_gate2/source_map.md`)
**Convenciones:** S01=UI/UX Definitivo, S02=Design System Terracota, S03=Decisiones F01-F47, S07=Anti-Dark-Patterns

---

## CONTRACT (00_UI_CONTRACT)

| UI_RULE_ID | Tipo | Regla | DOCREF | Estado | Impacto | Verificación | Notas |
|------------|------|-------|--------|--------|---------|-------------|-------|
| UI-CTR-001 | MUST | Paleta Terracota como identidad visual oficial | S01 → §2 → "Decisión F-09: Paleta Terracota como identidad visual oficial" (L98) | OK | ALTO | Doc review + Visual regression | F-09 |
| UI-CTR-002 | PROHIBIDO | Colores partidistas (rojo UDI, azul PS, amarillo DC) | S03 → F-05 → "sin colores partidistas (rojo UDI, azul PS, amarillo DC prohibidos)" (L271) | OK | ALTO | Doc review + Visual regression | F-05 Apartidismo |
| UI-CTR-003 | MUST | Fuentes de datos siempre citadas y verificables | S03 → F-02 → "Fuentes siempre citadas y verificables" (L102) | OK | ALTO | E2E | F-02 Honestidad |
| UI-CTR-004 | MUST | Disclaimers visibles sobre limitaciones del sistema | S03 → F-02 → "Disclaimers visibles sobre limitaciones" (L121) | OK | ALTO | E2E | F-02 |
| UI-CTR-005 | PROHIBIDO | Dark patterns en toda la interfaz | S07 → §Objetivo → "Garantizar que CIVICUM no utilice patrones engañosos" (L11) | OK | ALTO | Doc review + E2E | Auditoría trimestral |
| UI-CTR-006 | MUST | Regla de Oro S4: si usuario 65+, Android Go, 3G no puede completar un flujo sin ayuda, rediseñar | S01 → §6.2 → "Si S4 puede completar un flujo sin ayuda externa, el diseño es correcto" (L629) | OK | ALTO | E2E + Performance | Criterio de aceptación |
| UI-CTR-007 | MUST | 3 tiers de experiencia: HIGH / MEDIUM / LOW | S01 → §17.1 → "Tres niveles de experiencia según dispositivo" (L1578) | OK | ALTO | Doc review + E2E | F-07, F-14 |

---

## TOKENS (01_TOKENS)

| UI_RULE_ID | Tipo | Regla | DOCREF | Estado | Impacto | Verificación | Notas |
|------------|------|-------|--------|--------|---------|-------------|-------|
| UI-TOK-001 | MUST | 4 colores primarios: Terracota #C2503A, Azul Profundo #264653, Verde Esperanza #0D7A5F, Azul Protección #2563EB | S02 → §1.1 → "Los 4 colores core" (L71) | OK | ALTO | Visual regression | Escala 10 tonos c/u |
| UI-TOK-002 | MUST | Semántica: Éxito=#0D7A5F, Error=#C2503A, Advertencia=#B56D18, Info=#2563EB | S02 → §1.2 → tabla colores semánticos (L136) | OK | ALTO | Visual regression | |
| UI-TOK-003 | MUST | Espaciado base 4px: space-1(4px) a space-16(64px) | S01 → §5.1 → "Escala de Espaciado (Base 4px)" (L570) | OK | MEDIO | Doc review | 8 tokens |
| UI-TOK-004 | MUST | Sombras: shadow-sm a shadow-xl | S01 → §5.2 → tabla sombras (L585) | OK | BAJO | Doc review | 4 niveles |
| UI-TOK-005 | MUST | Border-radius: radius-sm(4px) a radius-full(9999px) | S01 → §5.3 → tabla border radius (L594) | OK | BAJO | Doc review | 5 niveles |
| UI-TOK-006 | MUST | CSS vars :root con esquema --color-terracota-*, --color-azul-*, etc. | S01 → §2.7 → bloque CSS ":root" (L308) | OK | ALTO | Doc review | Implementación técnica |
| UI-TOK-007 | MUST | Módulos con data-module + --module-accent / --module-bg | S01 → §2.7 → "[data-module='mi-civicum']" (L355) | CONFLICTO | ALTO | Visual regression | Ver CONFLICT-001. ADR Draft: ADR-0002 (PROPOSED) |
| UI-TOK-008 | SHOULD | Amarillo Mostaza (#D4872E) siempre con texto oscuro | S02 → §1.2.1 → "Usar siempre con texto oscuro (#264653 o negro)" (L155) | OK | MEDIO | Test a11y | Contraste 2.73:1 vs blanco |

---

## COMPONENTS (02_COMPONENTS)

| UI_RULE_ID | Tipo | Regla | DOCREF | Estado | Impacto | Verificación | Notas |
|------------|------|-------|--------|--------|---------|-------------|-------|
| UI-CMP-001 | MUST | Iconos Lucide React, stroke 2px, viewbox 24x24, round linecap/linejoin | S01 → §4.1 → "Base: Lucide React" (L452) | OK | MEDIO | UI-kit Playwright | 3 variantes: outlined/filled/duotone |
| UI-CMP-002 | MUST | Iconos decorativos: aria-hidden="true" focusable="false" | S01 → §4.4 → bloque JSX (L548) | OK | ALTO | Test a11y | WCAG obligatorio |
| UI-CMP-003 | MUST | Iconos funcionales sin texto: aria-label descriptivo | S01 → §4.4 → "Icono funcional — sin texto" (L555) | OK | ALTO | Test a11y | WCAG obligatorio |
| UI-CMP-004 | MUST | Skeleton shimmer: linear-gradient Gris100→200→100, 1.5s infinite | S01 → §12.2 → "Shimmer: linear-gradient" (L1381) | OK | MEDIO | UI-kit Playwright | |
| UI-CMP-005 | MUST | Spinner Terracota 0.8s, SM(16)/MD(24)/LG(48)px | S01 → §7 Feedback → "Spinner" (L744) | OK | BAJO | UI-kit Playwright | |
| UI-CMP-006 | MUST | Smart Dock: 5 tabs + "Más", badge = punto rojo 8px sin número | S01 → §9.1+§9.2 → "Badge: Punto rojo 8px (sin número — reduce ansiedad)" (L1146) | OK | ALTO | E2E + Golden screenshots | |
| UI-CMP-007 | SHOULD | Bottom Sheet: drag handle, snap points (25%/50%/90%), backdrop dim | S01 → §7 Nav → "Bottom Sheet" (L754) | OK | MEDIO | UI-kit Playwright | |

---

## LAYOUTS (03_LAYOUTS)

| UI_RULE_ID | Tipo | Regla | DOCREF | Estado | Impacto | Verificación | Notas |
|------------|------|-------|--------|--------|---------|-------------|-------|
| UI-LAY-001 | MUST | Breakpoints mobile-first: XS=360, SM=480, MD=768, LG=1024, XL=1280, 2XL=1536 | S01 → §6.1 → tabla "Breakpoints Oficiales" (L618) | CONFLICTO | ALTO | Doc review | Ver CONFLICT-002. ADR Draft: ADR-0003 (PROPOSED) |
| UI-LAY-002 | MUST | Grid: 12 columnas, gutter 24px desktop / 16px mobile, max-width 1280px | S01 → §5.4 → "Grid System" (L604) | OK | ALTO | Visual regression | |
| UI-LAY-003 | MUST | Márgenes laterales: 16px (XS-SM), 24px (MD), 32px (LG+) | S01 → §5.4 → "Márgenes laterales" (L608) | OK | MEDIO | Visual regression | |
| UI-LAY-004 | MUST | Smart Dock: bottom bar XS-MD, side rail LG+ | S01 → §6.3 → fila Smart Dock (L635) | OK | ALTO | E2E + Golden screenshots | |
| UI-LAY-005 | MUST | Modales: fullscreen XS, centered 80% MD, centered 560px max LG | S01 → §6.3 → fila Modales (L637) | OK | MEDIO | E2E | |
| UI-LAY-006 | MUST | Tablas: cards apiladas XS, responsive MD, completa LG | S01 → §6.3 → fila Tablas (L638) | OK | MEDIO | Visual regression | |
| UI-LAY-007 | GAP | Dark mode: no hay definición de layouts/tokens para dark mode | — | GAP | ALTO | — | Ver GAP-005. ADR Draft: ADR-0005 (PROPOSED) |

---

## NAVIGATION (04_NAVIGATION)

| UI_RULE_ID | Tipo | Regla | DOCREF | Estado | Impacto | Verificación | Notas |
|------------|------|-------|--------|--------|---------|-------------|-------|
| UI-NAV-001 | MUST | Dock order: Home, Aprende, Civia, Reporta, Más | S01 → §9.1 → tabla posiciones 1-5 (L1129) | OK | ALTO | E2E | |
| UI-NAV-002 | MUST | Dock altura 56px + safe area iOS | S01 → §9.2 → "Altura: 56px" (L1141) | OK | MEDIO | Golden screenshots | |
| UI-NAV-003 | MUST | Icono activo: color módulo + filled variant | S01 → §9.2 → "Icono activo: Color módulo, filled variant" (L1144) | OK | MEDIO | Visual regression | |
| UI-NAV-004 | MUST | Cambio módulo = cambio atmósfera cromática (150ms ease-in-out) | S01 → §9.3 → "cambio de atmósfera" (L1152) | OK | ALTO | E2E | data-module CSS var |
| UI-NAV-005 | MUST | Tab bounce: scale 1.2→1, 150ms | S01 → §9.3 → "icon bounces" (L1154) | OK | BAJO | UI-kit Playwright | |
| UI-NAV-006 | MUST | prefers-reduced-motion: corte directo | S01 → §9.3 → "corte directo sin animación" (L1158) | OK | ALTO | Test a11y | |
| UI-NAV-007 | MUST | Breadcrumbs: máx 4 niveles, "← Volver" en mobile | S01 → §7 Nav → "Breadcrumbs" (L751) | OK | MEDIO | E2E | |
| UI-NAV-008 | GAP | Falta ruta 404 | — | GAP | ALTO | — | Ver GAP-001. ADR Draft: ADR-0004 (PROPOSED) |

---

## PATTERNS (05_PATTERNS)

| UI_RULE_ID | Tipo | Regla | DOCREF | Estado | Impacto | Verificación | Notas |
|------------|------|-------|--------|--------|---------|-------------|-------|
| UI-PAT-001 | MUST | Onboarding inmersivo 5 fases, ~8 min total | S01 → §10 → "5 FASES, ~8 minutos" (L1171) | OK | ALTO | E2E | |
| UI-PAT-002 | MUST | Atmósferas por módulo: metáfora + paleta + emoción | S01 → §8 → "Cada módulo es un 'mundo'" (L774) | OK | ALTO | Visual regression | 6 mundos |
| UI-PAT-003 | MUST | Toda animación: propósito funcional o emocional | S01 → §13.1 → "propósito funcional o emocional" (L1432) | OK | MEDIO | Doc review | |
| UI-PAT-004 | MUST | Animaciones solo transform + opacity | S01 → §13.1 → "Solo transform y opacity" (L1431) | OK | MEDIO | Performance | |
| UI-PAT-005 | MUST | Duración: ≤300ms transiciones, ≤800ms celebraciones | S01 → §13.1 → "300ms transiciones, 800ms celebraciones" (L1428) | OK | MEDIO | UI-kit Playwright | |
| UI-PAT-006 | MUST | Frustración → acción: siempre "siguiente paso" | S01 → §14.1 → "Siempre mostrar siguiente paso" (L1468) | OK | ALTO | E2E | |
| UI-PAT-007 | MUST | F-54 Reversibilidad: snackbar deshacer, grace 5s, soft-delete 30d | S01 → §19 → fila F-54 (L1679) | OK | ALTO | E2E | |
| UI-PAT-008 | MUST | F-55 Botones opuestos: stacked vertical XS, gap 16px | S01 → §19 → fila F-55 (L1680) | OK | ALTO | E2E | |

---

## CONTENT/STYLE (06_CONTENT_STYLE)

| UI_RULE_ID | Tipo | Regla | DOCREF | Estado | Impacto | Verificación | Notas |
|------------|------|-------|--------|--------|---------|-------------|-------|
| UI-CNT-001 | MUST | Tono "Vecino Organizado": empática, directa, cero paternalismo | S01 → §15.1 → tabla voz (L1500) | OK | ALTO | Doc review | |
| UI-CNT-002 | MUST | Registro formal-cercano: tú, no usted | S01 → §15.1 → "Registro: formal-cercano" (L1503) | OK | MEDIO | Doc review | |
| UI-CNT-003 | PROHIBIDO | Palabras: revolución, derrocar, enemigo, traidor, etc. | S01 → §15.3 → lista palabras prohibidas (L1513) | OK | ALTO | Doc review | 9 palabras baneadas |
| UI-CNT-004 | MUST | Errores humanos: "Algo falló de nuestro lado" | S01 → §15.4 → "Errores (humanos)" (L1532) | OK | MEDIO | E2E | |
| UI-CNT-005 | MUST | Invitación sin presión: "Puedes explorar sin registrarte" | S01 → §15.4 → "Invitación sin presión" (L1527) | OK | MEDIO | E2E | |
| UI-CNT-006 | SHOULD | Disclaimers votos simbólicos visibles | S01 → §15.4 → "Esto es un voto simbólico" (L1522) | OK | ALTO | E2E | F-02 |

---

## A11Y (07_A11Y)

| UI_RULE_ID | Tipo | Regla | DOCREF | Estado | Impacto | Verificación | Notas |
|------------|------|-------|--------|--------|---------|-------------|-------|
| UI-A11-001 | MUST | Contraste texto normal ≥4.5:1 | S01 → §16.1 → "Contraste texto normal: 4.5:1" (L1545) | OK | ALTO | Test a11y | WCAG AA |
| UI-A11-002 | MUST | Contraste texto grande ≥3:1 | S01 → §16.1 → "Contraste texto grande: 3:1" (L1546) | OK | ALTO | Test a11y | WCAG AA |
| UI-A11-003 | MUST | Área táctil ≥44×44px, objetivo 48×48px | S01 → §16.1 → "Área táctil: 44×44px" (L1547) | OK | ALTO | Test a11y | WCAG |
| UI-A11-004 | MUST | Focus visible ring 2px + offset 2px | S01 → §16.1 → "Focus visible: Ring 2px + offset 2px" (L1548) | OK | ALTO | Test a11y | |
| UI-A11-005 | MUST | Navegación teclado 100% flujos | S01 → §16.1 → "Navegación teclado: 100% flujos" (L1549) | OK | ALTO | Test a11y + E2E | |
| UI-A11-006 | MUST | Screen reader: VoiceOver + TalkBack | S01 → §16.1 → "Screen reader: Compatibilidad total" (L1550) | OK | ALTO | Test a11y | |
| UI-A11-007 | MUST | 4 modos adaptativos: alto contraste, daltónicos, texto grande, reduced motion | S01 → §16.2 → tabla modos (L1556) | OK | ALTO | Test a11y | |
| UI-A11-008 | MUST | prefers-reduced-motion → 0 animaciones | S01 → §16.2 → "cero animaciones" (L1561) | OK | ALTO | Test a11y | |

---

## STATES/PERF (08_STATES_OFFLINE_PERF)

| UI_RULE_ID | Tipo | Regla | DOCREF | Estado | Impacto | Verificación | Notas |
|------------|------|-------|--------|--------|---------|-------------|-------|
| UI-STP-001 | MUST | 5 estados por pantalla: loading, empty, error, offline, success | S01 → §12 → tabla estados (L1356) | OK | ALTO | E2E | |
| UI-STP-002 | MUST | Loading: skeleton shimmer, no spinner vacío | S01 → §12.1 → "Skeleton screen con shimmer" (L1357) | OK | MEDIO | UI-kit Playwright | |
| UI-STP-003 | MUST | Empty: ilustración + CTA por módulo | S01 → §12.3 → tabla empty states (L1387) | OK | MEDIO | E2E | 6 variantes |
| UI-STP-004 | MUST | Error: toast Terracota + guardado + retry | S01 → §12.1 → fila Error (L1359) | OK | ALTO | E2E | |
| UI-STP-005 | MUST | Offline: banner NO alarma + funcionalidad Tier LOW | S01 → §12.1 → fila Offline (L1360) | OK | ALTO | E2E | F-07 |
| UI-STP-006 | MUST | offline.html digno con logo + capacidades + CTA | S03 → F-07 → "Dignidad = experiencia completa" (L365) | OK | ALTO | E2E | |
| UI-STP-007 | MUST | CWV Tier LOW: FCP≤2.0s, LCP≤4.0s, TTI≤5.0s, CLS≤0.2 | S01 → §17.2 → tabla CWV (L1590) | OK | ALTO | Performance | Android Go target |
| UI-STP-008 | MUST | Critical pack ≤800KB | S03 → F-07 → "CRITICAL_PACK_SIZE_KB: 800" (L383) | OK | ALTO | Performance | |
| UI-STP-009 | GAP | Estados loading/error no implementados en Época 1 | — | GAP | ALTO | — | Ver GAP-006. ADR Draft: ADR-0006 (PROPOSED) |

---

## GOVERNANCE (09_GOVERNANCE)

| UI_RULE_ID | Tipo | Regla | DOCREF | Estado | Impacto | Verificación | Notas |
|------------|------|-------|--------|--------|---------|-------------|-------|
| UI-GOV-001 | PROHIBIDO | Notificaciones FOMO / urgencia falsa | S07 → §Notificaciones → "FOMO manipulation: Prohibido" (L31) | OK | ALTO | Doc review + E2E | F-02, F-08 |
| UI-GOV-002 | PROHIBIDO | Gamificación adictiva: loops, loss aversion, streaks | S07 → §Gamificación → "Addictive loops: Prohibido" (L37) | OK | ALTO | Doc review + E2E | F-08 |
| UI-GOV-003 | MUST | Karma = servicio, tope diario | S03 → F-08 → "basado en SERVICIO, Tope diario" (L418-420) | OK | ALTO | E2E | KARMA_DAILY_CAP: 100 |
| UI-GOV-004 | MUST | Eliminación cuenta 1 click + export JSON/CSV | S07 → §Retención → "/api/me/delete en 1 click" (L46) | OK | ALTO | E2E | GDPR + Ley 19.628 |
| UI-GOV-005 | PROHIBIDO | Guilt trips al salir | S07 → §Retención → "Guilt trips on leaving: Prohibido" (L48) | OK | MEDIO | Doc review | |
| UI-GOV-006 | MUST | Auditoría anti-dark-patterns trimestral | S07 → §Auditoría → "Revisión UX flows completos: Trimestral" (L65) | OK | MEDIO | Doc review | |

---

## Resumen

| Métrica | Valor |
|---------|-------|
| **Total reglas** | 74 |
| **OK** | 69 |
| **CONFLICTO** | 2 |
| **GAP** | 3 |
| **Sin DOCREF** | 0 |
| **Categorías** | 10 |

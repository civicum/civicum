# ADR-0007: Tipografía — Inter (actual) vs Nunito Sans + IBM Plex (spec)

- **Estado:** PROPOSED
- **Fecha:** 2026-02-25
- **Autor:** Antigravity (para aprobación de Moska)
- **Afecta:** GAP-007
- **Nota:** No existe UI_RULE_ID tipográfico en la matriz de trazabilidad; se consolidará en Gate 4 al crear regla en `01_TOKENS` con DOCREF.
- **Supersede:** —

---

## Contexto

La spec de diseño (S01 → §3.1) define 3 familias tipográficas:
- **Nunito Sans** — Títulos, UI, navegación (400/600/700)
- **IBM Plex Sans** — Body, contenido largo (400/600/700)  
- **IBM Plex Mono** — Código, datos, métricas (400)

El código de Época 1 usa **Inter** como única fuente. No existe ADR ni fuente documental que autorice Inter como alternativa. Esto es una desviación de implementación vs spec (no una ausencia de requisito).

- **DOCREF:** S01 → §3.1 → "Nunito Sans — Títulos, UI, Navegación" (L383)
- **DOCREF:** S01 → §3.1 → "IBM Plex Sans — Body, Contenido Largo" (L396)
- **DOCREF:** `docs-ui/_gate2/gaps_log.md` → GAP-007

## Decisión (propuesta)

**Migrar a la tipografía de la spec** (Nunito Sans + IBM Plex Sans + IBM Plex Mono), con implementación por tiers:

| Tier | Fonts cargadas | Tamaño estimado |
|------|----------------|-----------------|
| **HIGH** | Nunito Sans + IBM Plex Sans + IBM Plex Mono (latin-ext) | ~120KB |
| **MEDIUM** | Nunito Sans + IBM Plex Sans (latin only) | ~40KB |
| **LOW** | System fonts (`system-ui, -apple-system, sans-serif`) | 0KB |

Eliminar Inter del proyecto.

## Alternativas Consideradas

### Alternativa A: Migrar a Nunito Sans + IBM Plex (spec) (propuesta)
- **Pros:** Alineación 1:1 con spec (DOCREF: S01 → §3.1, L383), tier system alineado con spec (DOCREF: S01 → §3.3, L433), fuentes diseñadas para el propósito de CIVICUM (cercanía + seriedad + datos)
- **Contras:** Regresión visual (todo el texto cambia), estimación ~4-6h refactor, estimación ~120KB peso fonts (mitigado por tiers)

### Alternativa B: Mantener Inter (formalizar como decisión nueva)
- **Pros:** Cero regresión, Inter es excelente font, ya implementada
- **Contras:** Diverge de spec canónica, pierde la distinción heading/body/mono que la spec diseña intencionalmente, requiere justificación formal de por qué no seguir la spec

### Alternativa C: Híbrido — Nunito Sans para headings + Inter para body
- **Pros:** Mantiene parte de la spec (headings) sin romper todo el body text
- **Contras:** Inconsistente con spec, Inter no está en el sistema de diseño, crea una tercera fuente no documentada

## Consecuencias

- **Positivas:** Coherencia total con spec tipográfica (S01 → §3.1), cada familia cumple un rol semántico claro (heading ≠ body ≠ datos), tier system optimiza performance (S01 → §3.3)
- **Negativas:** Regresión visual completa, peso estimado de fonts en HIGH tier (~120KB), refactor de CSS/Tailwind font config
- **Riesgos:** Si los contrastes tipográficos cambian, golden screenshots necesitan recaptura. Mitigación: implementar después de golden screenshots migration.
- **Trade-off performance:** La migración tipográfica impacta el peso del critical pack (UI-STP-008: ≤800KB). El tier HIGH (~120KB estimado) debe validarse contra este presupuesto en Gate 5+; si lo excede, el tier system (S01 → §3.3) es el mecanismo de ajuste: degradar a MEDIUM o LOW según dispositivo. No se inventan números nuevos — la verificación real se hará con build + lighthouse en Gate 5+.

## Verificación (Gate 5+)

- Visual regression: todas las golden screenshots deben recapturarse post-migración
- Performance: verificar que Tier LOW funciona con system fonts (0KB extra)
- Test a11y: verificar legibilidad, contraste, tamaños mínimos con nuevas fonts
- UI-kit Playwright: screenshots de componentes con nueva tipografía

## Plan de implementación (no ejecutar aún)

1. Instalar `@fontsource/nunito-sans`, `@fontsource/ibm-plex-sans`, `@fontsource/ibm-plex-mono`
2. Actualizar `tailwind.config.ts` → fontFamily con las 3 familias + fallbacks
3. Actualizar `src/styles/tokens.css` → `--font-heading`, `--font-body`, `--font-mono`
4. Eliminar Inter de `package.json` y de imports CSS
5. Auditar componentes para heading/body/mono usage
6. Implementar tier detection para font loading strategy
7. Recapturar golden screenshots

## Referencias

- DOCREF: `docs/knowledge-base/CIVICUM_Diseno_UI_UX_Definitivo.md` §3.1 (L383-414) — familias tipográficas
- DOCREF: `docs/knowledge-base/CIVICUM_Diseno_UI_UX_Definitivo.md` §3.3 (L433) — tiers de carga tipográfica
- DOCREF: `docs-ui/_gate2/gaps_log.md` → GAP-007

---

> ✅ **Aprobación (Moska): PENDIENTE** — no ejecutar implementación hasta aprobación.

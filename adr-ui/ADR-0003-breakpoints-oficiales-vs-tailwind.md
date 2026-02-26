# ADR-0003: Breakpoints oficiales vs Tailwind defaults

- **Estado:** PROPOSED
- **Fecha:** 2026-02-25
- **Autor:** Antigravity (para aprobación de Moska)
- **Afecta:** UI-LAY-001, UI-LAY-004, UI-CMP-006 | CONFLICT-002
- **Supersede:** —

---

## Contexto

La spec de diseño (S01 → §6.1) define 6 breakpoints mobile-first: XS=360px, SM=480px, MD=768px, LG=1024px, XL=1280px, 2XL=1536px. Tailwind CSS 3.x defaults difieren: sm=640px, md=768px, lg=1024px, xl=1280px, 2xl=1536px. No existe `xs` en Tailwind defaults, y `sm` es 640px (no 480px).

El código de Época 1 usa Tailwind defaults. Esto genera CONFLICT-002 entre la spec documental y la configuración actual.

- **DOCREF:** S01 → §6.1 → tabla "Breakpoints Oficiales" (L618)
- **DOCREF:** S01 → §6.2 → "Regla de Oro: si S4 (Android Go $50, 360px)..." (L629)

## Decisión (propuesta)

Proponemos alinear la configuración de Tailwind con los breakpoints de S01 (DOCREF: S01 → §6.1, L618). **Moska elige estrategia al aprobar:** Opción A (alias sin override) u Opción B (override + alias temporal de migración) — ver sección "Compatibilidad / Migración" más abajo. **Ninguna opción se implementa sin aprobación explícita.**

Configuración objetivo (Opción B, si se elige override):

```js
screens: {
  'xs': '360px',   // NUEVO — Android Go, móviles básicos
  'sm': '480px',   // OVERRIDE — móviles medianos (era 640px)
  'md': '768px',   // SIN CAMBIO
  'lg': '1024px',  // SIN CAMBIO
  'xl': '1280px',  // SIN CAMBIO
  '2xl': '1536px', // SIN CAMBIO
}
```

**Si se elige Opción B, esto es un breaking change para clases `sm:`** (pasan de 640px a 480px). Auditar el código existente para clases `sm:` que asumían 640px y ajustar.

> **Baseline histórico vs validación S4:** Los breakpoints Tailwind defaults (sm=640px) son el baseline histórico del código actual. El objetivo de esta migración no es solo alinear con la spec, sino habilitar la **validación S4** (Android Go, 360px) como criterio de aceptación real (DOCREF: S01 → §6.2, L629). El breakpoint `xs: 360px` es el umbral mínimo de diseño; `sm: 480px` cubre móviles medianos (hipótesis: validar con analytics cuando exista).

## Alternativas Consideradas

### Alternativa 1: Extender Tailwind con breakpoints de la spec (alternativa recomendada)
- **Pros:** Alineación 1:1 con spec, habilita diseño real para Android Go (360px), `sm` a 480px cubre mejor el rango móvil medio (hipótesis a validar con analytics)
- **Contras:** **Breaking change**: clases `sm:` existentes ahora aplican desde 480px (no 640px). Inventario actual: estimación ~1 archivo afectado (verificar con `grep` antes de implementar)

### Alternativa 2: Mantener Tailwind defaults + alias custom
- **Pros:** No rompe nada existente, cero regresión
- **Contras:** Diverge de la spec, crea confusión ("¿cuál sm uso?"), `xs` no existe como clase utility

### Alternativa 3: No usar breakpoints Tailwind, usar CSS custom media queries
- **Pros:** Control total, cero dependencia de convención Tailwind
- **Contras:** Pierde beneficio de utility classes, duplica sistema, inconsistente con stack elegido

## Consecuencias

- **Positivas:** S4 (Android Go 360px) tiene breakpoint dedicado, diseño mobile-first real, spec y código alineados
- **Negativas:** Requiere auditoría de clases `sm:` existentes (estimación preliminar: ~1 archivo; verificar con grep real antes de implementar), posible regresión visual en rango 480-640px
- **Riesgos:** Si hay clases `sm:` que asumen 640px, el cambio puede causar regresión visual. Mitigación: `grep -r "sm:" webapp/src/` antes de implementar para inventario exacto.

## Verificación (Gate 5+)

- Golden screenshots (solo `golden_screens.md` con Estado=Completo): desktop + mobile (360px)
- Visual regression: Playwright en 360px, 480px, 768px, 1024px
- E2E: Verificar que Smart Dock pasa de bottom bar a side rail en LG (1024px)

## Compatibilidad / Migración

Dos estrategias posibles — **Moska elige cuál adoptar** al aprobar este ADR:

### Opción A: Segura (alias sin override)

Mantener `sm=640px` de Tailwind intacto. Agregar alias nuevos:

```js
screens: {
  'xs': '360px',   // NUEVO
  's480': '480px', // NUEVO — alias para SM de la spec
  // sm, md, lg, xl, 2xl = Tailwind defaults sin tocar
}
```

- **Pro:** Cero regresión, cero migración de clases existentes.
- **Contra:** Diverge de nomenclatura S01 (`sm` en spec ≠ `sm` en código). Requiere ADR adicional si se desea alinear en el futuro.

### Opción B: Alineada a S01 (override con alias de escape)

Override `sm=480px` según spec. Agregar alias temporal `sm640=640px`:

```js
screens: {
  'xs': '360px',    // NUEVO
  'sm': '480px',    // OVERRIDE
  'sm640': '640px', // ALIAS TEMPORAL — para migración de usos existentes
  // md, lg, xl, 2xl = sin cambio
}
```

- **Plan de migración:** Renombrar todos los usos actuales de `sm:` → `sm640:` durante implementación (inventario: estimación ~1 archivo). Una vez migrados, eliminar alias `sm640` en Época 2+.
- **Pro:** Alineación 1:1 con spec desde el inicio.
- **Contra:** Requiere paso de rename explícito (no "auditar" como verbo mágico).

---

## Plan de implementación (no ejecutar aún)

1. `grep -r "sm:" webapp/src/` → inventariar todas las clases afectadas (estimación preliminar: ~1 archivo)
2. Actualizar `tailwind.config.ts` con nuevos breakpoints
3. Auditar y ajustar cada archivo donde `sm:` asumía 640px
4. Build + visual check en 360px, 480px, 768px, 1024px
5. Actualizar golden screenshots si cambian

## Referencias

- DOCREF: `docs/knowledge-base/CIVICUM_Diseno_UI_UX_Definitivo.md` §6.1 (L618)
- DOCREF: `docs/knowledge-base/CIVICUM_Diseno_UI_UX_Definitivo.md` §6.2 (L629)
- DOCREF: `docs-ui/traceability_matrix.md` → UI-LAY-001
- DOCREF: `docs-ui/_gate2/conflicts_log.md` → CONFLICT-002

---

> ✅ **Aprobación (Moska): PENDIENTE** — no ejecutar implementación hasta aprobación.

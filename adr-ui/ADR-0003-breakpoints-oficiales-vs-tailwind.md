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

Extender la configuración de Tailwind (`tailwind.config.ts`) con los breakpoints de la spec, manteniendo compatibilidad:

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

Auditar el código existente para clases `sm:` que asumían 640px y ajustar si es necesario.

## Alternativas Consideradas

### Alternativa A: Extender Tailwind con breakpoints de la spec (propuesta)
- **Pros:** Alineación 1:1 con spec, habilita diseño real para Android Go (360px), `sm` a 480px cubre mejor la realidad móvil chilena
- **Contras:** Rompe clases `sm:` existentes (ahora aplican desde 480px, no 640px), requiere auditoría de ~todos los archivos con `sm:`

### Alternativa B: Mantener Tailwind defaults + alias custom
- **Pros:** No rompe nada existente, cero regresión
- **Contras:** Diverge de la spec, crea confusión ("¿cuál sm uso?"), `xs` no existe como clase utility

### Alternativa C: No usar breakpoints Tailwind, usar CSS custom media queries
- **Pros:** Control total, cero dependencia de convención Tailwind
- **Contras:** Pierde beneficio de utility classes, duplica sistema, inconsistente con stack elegido

## Consecuencias

- **Positivas:** S4 (Android Go 360px) tiene breakpoint dedicado, diseño mobile-first real, spec y código alineados
- **Negativas:** Requiere auditoría de clases `sm:` existentes (~15-30 archivos estimados), posible regresión visual en breakpoint 480-640px
- **Riesgos:** Si hay muchas clases `sm:` que asumen 640px, el refactor puede ser significativo. Mitigación: buscar `sm:` en codebase antes de implementar.

## Verificación (Gate 5+)

- Golden screenshots: desktop + mobile (360px) para todas las golden screens
- Visual regression: Playwright en 360px, 480px, 768px, 1024px
- E2E: Verificar que Smart Dock pasa de bottom bar a side rail en LG (1024px)

## Plan de implementación (no ejecutar aún)

1. `grep -r "sm:" src/` → inventariar todas las clases afectadas
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

# 03 — Layouts y Grids

**Propósito:** Documenta la arquitectura de layouts de CIVICUM: el AppShell, los breakpoints responsivos, las zonas de contenido, y cómo se distribuyen header, main y Smart Dock en cada viewport. Es el plano arquitectónico de la "carcasa" visual.

## Decisiones que debe contener

- [ ] Estructura del AppShell: header + main + bottom dock (con medidas exactas)
- [ ] Breakpoints activos y comportamiento por viewport (mobile/tablet/desktop)
- [ ] Zonas de contenido: max-width, padding, margins por breakpoint
- [ ] Layout standalone: reglas para pantallas fuera de AppLayout (ej.: Onboarding)
- [ ] Grid system: columnas, gaps, auto-fit vs auto-fill
- [ ] Reglas de scroll: overflow, sticky elements, z-index stack

## Evidencia exigida en Gate 4

> Cada layout definido debe tener screenshots de baseline en al menos 2 viewports (mobile 390px + desktop 1440px). Todo valor numérico debe ser verificable contra el código en `AppLayout.tsx`.

## Reglas consolidadas (Gate 4)

### Breakpoints oficiales (ADR-0003 — Opción B, elegida por Daniel)

Se aprueba alinear Tailwind con breakpoints S01. **Breaking change:** `sm` pasa de 640px a 480px.

```js
screens: {
  'xs': '360px',    // NUEVO — Android Go, móviles básicos
  'sm': '480px',    // OVERRIDE — móviles medianos (era 640px)
  'sm640': '640px', // ALIAS TEMPORAL — migración de usos existentes
  'md': '768px',    // SIN CAMBIO
  'lg': '1024px',   // SIN CAMBIO
  'xl': '1280px',   // SIN CAMBIO
  '2xl': '1536px',  // SIN CAMBIO
}
```

- Migración: renombrar usos actuales `sm:` → `sm640:` durante implementación (estimación ~1 archivo)
- Una vez migrados, eliminar alias `sm640` en Época 2+

> **DOCREF:** ADR-0003 (ACCEPTED, Opción B) + S01 → §6.1 (L618), §6.2 (L629)

### `data-module` — señal canónica de módulo (ADR-0002)

Cada módulo CIVICUM usa `data-module` en su contenedor raíz para activar `--module-accent` y `--module-bg`.

**Valores permitidos** (DOCREF: S01 → §2.7, L351-371):
`mi-civicum`, `academia`, `civia`, `alza-la-voz`, `cuentas-claras`, `voto-ciudadano`

**Gobernanza:**
- `unknown` = tokens default (sin acento por módulo). No activa atmósferas.
- No se inventan valores `data-module` sin DOCREF. Rutas no-S01 usan `unknown` o requieren ADR.

> **DOCREF:** ADR-0002 (ACCEPTED) + S01 → §2.7 (L355), §9.3 (L1152)

---

## TODO

- Documentar medidas de `AppLayout.tsx` (header h-16, dock h-16, main max-w-7xl)
- Definir z-index stack formal (header z-50, dock z-50, modales, toasts)
- Documentar layout standalone del Onboarding (fullscreen, sin AppLayout)


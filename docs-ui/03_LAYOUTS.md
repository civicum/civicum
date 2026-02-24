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

---

## TODO

- Documentar medidas de `AppLayout.tsx` (header h-16, dock h-16, main max-w-7xl)
- Definir z-index stack formal (header z-50, dock z-50, modales, toasts)
- Documentar layout standalone del Onboarding (fullscreen, sin AppLayout)

# 🔒 GATE 5.9a — SEAL DOCUMENT

**Gate:** 5.9a — Layout Navigation Audit Fix
**Fecha de cierre:** 2026-04-13
**Branch:** `ui-architecture-foundation`

### Identidad de commit

> `6e2ed35` es el **HEAD del branch al momento de redactar este seal**, no el commit exacto que implementó Gate 5.9a. El último commit (`docs(gate5): split UI-STP-004 into dual error pattern (ADR-0008)`) es posterior al scope de 5.9a. El commit original de implementación de 5.9a fue `dc5fee0` según registros previos de `traceability_matrix.md`. Commits intermedios (Gate 6, ADR-0008) se intercalaron antes de este sellado documental.

---

## Scope exacto de Gate 5.9a

Corrección de layout y navegación responsiva: SmartDock (bottom bar XS-MD), SideRail (LG+), safe area iOS, y wrapper compartido para evitar overflow horizontal en desktop.

---

## Archivos tocados

| Archivo | Tipo de cambio |
|---------|---------------|
| `webapp/src/components/layout/SmartDock.tsx` | Fix altura 56px + safe area (`pb-safe` + `h-[56px]` wrapper) |
| `webapp/src/components/layout/SideRail.tsx` | Componente LG+ (`fixed left, w-[72px], lg:flex`) |
| `webapp/src/components/layout/AppLayout.tsx` | Wrapper compartido `lg:pl-[72px]` (reemplaza `lg:ml-[72px]` defectuoso) |
| `webapp/index.html` | `viewport-fit=cover` en meta viewport |
| `webapp/src/index.css` | Utility `.pb-safe { padding-bottom: env(safe-area-inset-bottom) }` |
| `docs-ui/traceability_matrix.md` | Actualización de filas afectadas |

---

## Reglas afectadas — Estado al cierre de 5.9a

| Regla | Estado | Detalle |
|-------|--------|---------|
| **UI-LAY-004** | ✅ OK | SmartDock `lg:hidden`, SideRail `lg:flex`. Wrapper `lg:pl-[72px]` envuelve OfflineBanner + main. Zero overflow verificado por E2E. |
| **UI-NAV-002** | ✅ OK | Altura exterior = 56px + env(safe-area-inset-bottom). `viewport-fit=cover` presente. `.pb-safe` CSS real. Verificable solo en iOS con notch. |
| **UI-CMP-006** | ⚠️ PARTIAL | Gate 5.9a entregó la estructura de 5 posiciones en SmartDock (pos 5 = placeholder disabled "Más"). **No entregó:** overlay funcional (MoreMenu.tsx = Gate 6), ni badge real (requiere backend). El badge rojo 8px existe como componente visual hardcodeado, sin suscripción a notificaciones. |
| **UI-STP-006** | ❌ NO IMPL | `offline.html` no existe. Service Worker ausente. Manifest ausente. OfflineBanner (UI-STP-005) no sustituye esta regla. |

---

## Qué quedó cerrado en 5.9a

- Layout responsivo SmartDock/SideRail con breakpoint LG (1024px)
- Wrapper compartido `lg:pl-[72px]` sin overflow horizontal
- Safe area iOS: estructura `<nav pb-safe>` → `<div h-[56px]>` con CSS real
- `viewport-fit=cover` en `index.html`
- E2E verificación de overflow (`scrollWidth ≤ clientWidth`) y oclusión (`sideRail.right ≤ banner.left`)

## Qué quedó parcial al cierre de 5.9a

- **UI-CMP-006:** 5 posiciones presentes, pero pos 5 era placeholder disabled. Overlay funcional y badge real pendientes.
- **UI-NAV-003:** Icono activo usa `text-terracota-500` uniforme. Falta color por módulo (`data-module`) y filled variant.

## Qué quedó fuera de scope de 5.9a

- Overlay funcional del tab "Más" (MoreMenu.tsx → entregado en Gate 6)
- Taxonomía Ruta C / redirecciones (→ Gate 6)
- `offline.html` + Service Worker + `manifest.json` (UI-STP-006)
- Toast transaccional con retry (UI-STP-004B / ADR-0008)
- Badge real con backend de notificaciones
- Bottom sheet completo
- Breadcrumbs
- Typography implementation (ADR-0007)
- `data-module` + CSS vars por módulo (UI-TOK-007)
- Dark mode (ADR-0005, Época 3+)

---

## Nota de integridad

> Este documento existe porque `traceability_matrix.md` ya contiene notas de Gate 6 (taxonomía UI-NAV-001, Ruta C) mezcladas con el cierre de Gate 5.9a. Este seal aísla el scope real de 5.9a para auditoría independiente.

---

**Sellado por:** Agente AI (audit documental)
**Fecha:** 2026-04-13

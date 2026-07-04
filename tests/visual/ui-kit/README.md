# UI-Kit Visual Evidence

**Propósito:** Almacenar snapshots de componentes individuales (skeletons, empty states, error, offline, success) usados para verificar reglas de UI-kit y 5-state pattern (ADR-0006).

## Estado actual (Gate 5.3)

**Playwright automatizado.** Los snapshots en este directorio son **de referencia manual / legacy**. La evidencia canónica generada por Playwright vive en:

```
webapp/tests/visual/ui-kit/
```

> **Canonical path:** `webapp/tests/visual/ui-kit/` — los 10 PNGs de 5-state evidence son generados por `webapp/tests/e2e/ui-kit.states.spec.ts` y committed en esa ubicación.

## PNGs canónicos (Gate 5.3)

| Archivo | Regla | Estado | Viewport |
|---------|-------|--------|----------|
| `UI-STP-001_success_desktop.png` | UI-STP-001 | success | 1440×900 |
| `UI-STP-001_success_mobile.png` | UI-STP-001 | success | 360×800 |
| `UI-STP-002_loading_desktop.png` | UI-STP-002 | loading | 1440×900 |
| `UI-STP-002_loading_mobile.png` | UI-STP-002 | loading | 360×800 |
| `UI-STP-003_empty_desktop.png` | UI-STP-003 | empty | 1440×900 |
| `UI-STP-003_empty_mobile.png` | UI-STP-003 | empty | 360×800 |
| `UI-STP-004_error_desktop.png` | UI-STP-004 | error | 1440×900 |
| `UI-STP-004_error_mobile.png` | UI-STP-004 | error | 360×800 |
| `UI-STP-005_offline_desktop.png` | UI-STP-005 | offline | 1440×900 |
| `UI-STP-005_offline_mobile.png` | UI-STP-005 | offline | 360×800 |

## Cómo regenerar

```bash
pnpm -C webapp test:e2e -- --grep "UI-Kit"
```

Los PNGs se sobreescriben automáticamente en `webapp/tests/visual/ui-kit/`.

## Naming convention

```
UI-STP-{NNN}_{estado}_{viewport}.png
```

- **NNN:** ID de regla en traceability_matrix (001, 002, …)
- **estado:** `loading`, `empty`, `error`, `offline`, `success`
- **viewport:** `desktop` (1440×900) o `mobile` (360×800)

## Reglas

1. Los screenshots de **pantallas completas** van en `tests/visual/baseline/`, no aquí.
2. Cada snapshot debe poder reproducirse ejecutando el spec de Playwright.
3. Si un componente cambia por ADR, se regenera el snapshot y se registra en el commit.

## Relación con la matriz

| UI_RULE_ID | Componente | Verificación |
|------------|-----------|-------------|
| UI-STP-001 | 5-state pattern (all) | Playwright `ui-kit.states.spec.ts` |
| UI-STP-002 | SkeletonScreen (loading) | Playwright `ui-kit.states.spec.ts` |
| UI-STP-003 | EmptyState | Playwright `ui-kit.states.spec.ts` |
| UI-STP-004 | ErrorState | Playwright `ui-kit.states.spec.ts` |
| UI-STP-005 | OfflineBanner | Playwright `ui-kit.states.spec.ts` |
| UI-CMP-004 | Skeleton shimmer | Playwright `ui-kit.states.spec.ts` |

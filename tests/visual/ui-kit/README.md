# UI-Kit Visual Evidence

**Propósito:** Almacenar snapshots de componentes individuales (skeletons, spinners, toasts, badges, etc.) usados para verificar reglas de UI-kit (ej. UI-CMP-004, UI-CMP-005).

## Estado actual

**No existe infraestructura de tests visuales.** No hay Playwright, Storybook ni Vitest instalados. Los screenshots de esta carpeta se generan manualmente hasta que se instale tooling.

## Cómo generar snapshots (manual — Época 1)

1. Ejecutar dev server: `cd webapp && npm run dev`
2. Navegar al componente o pantalla que contiene el componente aislado
3. Capturar screenshot con DevTools (Ctrl+Shift+P → "Capture screenshot") a viewport fijo
4. Guardar con naming: `COMPONENTE_VARIANTE_VIEWPORT.png`
   - Ejemplo: `skeleton_shimmer_desktop.png`, `spinner_terracota_sm_mobile.png`

## Naming convention

```
<componente>_<variante>_<viewport>.png
```

- **componente:** nombre en snake_case (ej. `skeleton_shimmer`, `toast_error`, `badge_dot`)
- **variante:** tamaño o estado (ej. `sm`, `md`, `lg`, `error`, `success`)
- **viewport:** `desktop` (1440×900) o `mobile` (360×800)

> Los snapshots deben capturarse con "Capture screenshot" (viewport), no full size. Para snapshots, lo crítico es el ancho; mantener altura fija por reproducibilidad.

## Validación CI (GAP)

> **GAP:** No existe CI pipeline ni test runner visual. Cuando se instale Playwright (recomendado para Gate 5.1+), este directorio será el output de `npx playwright test --update-snapshots` para el test suite de UI-kit.

## Reglas

1. Los screenshots de **pantallas completas** van en `tests/visual/baseline/`, no aquí.
2. Cada snapshot debe poder reproducirse siguiendo instrucciones documentadas.
3. Si un componente cambia por ADR, se regenera el snapshot y se registra en el commit.

## Relación con la matriz

| UI_RULE_ID | Componente | Verificación |
|------------|-----------|-------------|
| UI-CMP-004 | Skeleton shimmer | UI-kit Playwright (manual hasta CI) |
| UI-CMP-005 | Spinner Terracota | UI-kit Playwright (manual hasta CI) |
| UI-CMP-007 | Bottom Sheet | UI-kit Playwright (manual hasta CI) |
| UI-STP-002 | Loading skeleton (5-state) | UI-kit Playwright (manual hasta CI) |

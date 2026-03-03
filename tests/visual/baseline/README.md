# Golden Screenshots Baseline

**Propósito:** Almacenar screenshots de pantallas completas ("golden screens") para regresión visual. Este directorio es la evidencia canónica del estado visual de CIVICUM.

## Estado actual

- **15 PNGs presentes** (recapturados con Playwright en Gate 5.1.2)
- **12 pantallas registradas** en `docs-ui/golden_screens.md`
  - 4 Completo (desktop + mobile): splash0, splash1, splash2, dashboard
  - 7 Parcial (falta un viewport)
  - 1 Pendiente (sin screenshots)
- **Método de captura:** Playwright headless (viewport exacto) desde Gate 5.1.2; manual (DevTools) en Época 1

## Pantallas golden

Ver lista canónica en: [`docs-ui/golden_screens.md`](../../docs-ui/golden_screens.md)

> **Regla:** Solo las pantallas listadas en `golden_screens.md` se almacenan aquí. Agregar o remover una pantalla golden requiere un ADR aceptado.

## Cómo regenerar (manual — Época 1)

### Preparación

1. `cd webapp && npm run dev` (dev server en `http://localhost:5173`)
2. Abrir Chrome DevTools → Device Toolbar

### Viewports estándar

| Viewport | Resolución | Sufijo |
|----------|-----------|--------|
| Desktop | 1440×900 | `_desktop.png` |
| Mobile | 360×800 (S4 — ADR-0003) | `_mobile.png` |

> **Nota:** Época 1 fue capturada a 390×844; desde Gate 5.1 la validación S4 usa 360px (ADR-0003). Cuando se regenere baseline, usar 360×800.

### Flujo de captura

1. Seguir la columna "Cómo reproducir" de `golden_screens.md`
2. Esperar que la página se estabilice (sin spinners, sin animaciones)
3. DevTools: Ctrl+Shift+P → "Capture screenshot" (viewport, no full size)
4. Guardar con naming: `NN_<step_key>_<viewport>.png` (usar mismo `NN_` y `step_key` del registro en `golden_screens.md`)

### Ejemplo

```
01_onboarding_splash0_desktop.png   ← Pantalla #1, desktop
09_onboarding_splash0_mobile.png   ← Pantalla #1, mobile
```

## Naming convention

```
NN_<step_key>_<viewport>.png
```

- **NN:** Número de sorting histórico (no se renumeran al insertar)
- **step_key:** ID canónico de la pantalla (de `golden_screens.md`)
- **viewport:** `desktop` o `mobile`

## Automatización futura (GAP)

> **GAP:** No existe Playwright ni CI para regeneración automática. Cuando se instale Playwright (recomendado Gate 5.1+), este directorio será el output de un test suite E2E con `page.screenshot()` para cada pantalla golden.

**Plan recomendado:**
1. Instalar `@playwright/test` como devDependency
2. Crear `tests/visual/golden.spec.ts` con un test por pantalla
3. Ejecutar con `npx playwright test --update-snapshots` para generar/actualizar baselines
4. CI compara contra baseline en cada PR

## Reglas

1. **No modificar PNGs manualmente** (recortar, editar). Si un screenshot necesita actualización, regenerar completo.
2. **Un screenshot nuevo = un commit** que referencia el cambio (ADR, fix, nueva feature).
3. Los screenshots de **componentes individuales** van en `tests/visual/ui-kit/`, no aquí.

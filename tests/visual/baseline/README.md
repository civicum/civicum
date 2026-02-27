# Golden Screenshots Baseline

**Propósito:** Almacenar screenshots de pantallas completas ("golden screens") para regresión visual. Este directorio es la evidencia canónica del estado visual de CIVICUM.

## Estado actual

- **15 PNGs presentes** (capturados manualmente en Época 1)
- **12 pantallas registradas** en `docs-ui/golden_screens.md`
  - 3 Completo (desktop + mobile)
  - 8 Parcial (falta un viewport)
  - 1 Pendiente (sin screenshots)
- **Método de captura:** Manual (DevTools screenshot)

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
| Mobile | 390×844 (iPhone 14) | `_mobile.png` |

### Flujo de captura

1. Seguir la columna "Cómo reproducir" de `golden_screens.md`
2. Esperar que la página se estabilice (sin spinners, sin animaciones)
3. DevTools: Ctrl+Shift+P → "Capture full size screenshot"
4. Guardar con naming: `NN_nombre_viewport.png` (usar mismo `NN_` que el registro)

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

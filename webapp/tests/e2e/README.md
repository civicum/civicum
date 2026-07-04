# E2E Tests — Playwright

**Propósito:** Tests end-to-end para CIVICUM webapp usando Playwright.

## Prerrequisitos

- Node.js ≥ 18
- pnpm instalado
- Chromium instalado via Playwright: `npx playwright install chromium`

## Cómo ejecutar

### 1. Ejecutar tests (dev server se inicia automáticamente)

```bash
cd webapp
pnpm test:e2e
```

### 2. Ejecutar con UI (debug visual)

```bash
cd webapp
pnpm test:e2e:ui
```

### 3. Ver reporte HTML

Después de ejecutar tests, el reporte se genera automáticamente:

```bash
npx playwright show-report
```

## Estructura

```
tests/e2e/
├── README.md                         # Este archivo
├── smoke.home.spec.ts                # Smoke test: home page loads
└── smoke.notfound-pre404.spec.ts     # Smoke test: unknown route no crash
```

## Screenshots

Los screenshots van a `test-results/` via `testInfo.outputPath()`. **No se guardan en el repo** — son artefactos temporales de cada ejecución.

## Viewports

| Proyecto | Viewport | Uso |
|----------|----------|-----|
| `desktop-chromium` | 1440×900 | Desktop estándar |
| `mobile-chromium` | 360×800 | S4 / Android Go (ADR-0003) |

## Troubleshooting

### "browserType.launch: Executable doesn't exist"

Instalar browsers:
```bash
npx playwright install chromium
```

### "Connection refused localhost:5173"

La config incluye `webServer` que inicia `pnpm dev` automáticamente. Si falla:
```bash
pnpm dev
```
y luego en otra terminal: `pnpm test:e2e`.

### Tests pasan pero screenshots vacíos

Verificar que la app no tiene errores de compilación: `pnpm build`.

## Convenciones

- **Smoke tests** (`smoke.*.spec.ts`): validan que la app no crashea. Sin assert de contenido específico.
- **E2E tests** (`*.e2e.spec.ts`): validan flujos completos con asserts de UI (Gate 5.2+).
- **Visual tests** (`*.visual.spec.ts`): comparan screenshots contra baselines (Gate 5.3+).
- Baselines golden van en `tests/visual/baseline/` (versionados).

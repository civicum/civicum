# CIVICUM_RECOVERY.md
Documento de recuperacion compacto para continuar Civicum desde un chat nuevo sin perder el estado operativo. No es una bitacora cruda ni una transcripcion: registra estado, decisiones, comandos relevantes, resultados y el proximo paso.

Ultima actualizacion: 2026-07-04.
Agente actual: Hermes Agent (OpenRouter / nvidia/nemotron-3-super-120b-a12b:free).

## 1. Estado actual

- Proyecto: Civicum.
- Ruta local: `C:\Users\daniel.aguirre\Proyectos\civicum`.
- Rama actual: `ui-architecture-foundation`.
- Working tree: **limpio** (Fase 1, Fase 2 y Fase 3 commiteadas).
- Origin confirmado: `https://github.com/civicum/civicum.git`.
- Agente: Transicion de Codex (OpenAI) a Hermes Agent (Nous Research).
- Modelo actual: `nvidia/nemotron-3-super-120b-a12b:free` via OpenRouter.
- Costo: $0/mes (F-43 Zero-Cost Stack: Neon, Vercel, Cloudflare, OpenRouter free models disponibles).
- Ultimo commit Fase 1: `6b8a09a feat(fase1): cimientos`.
- Ultimo commit Fase 2: `0070960 feat(fase2): infraestructura DB conectada, migracion aplicada y datos geograficos sembrados (16 regiones, 71 comunas)`.
- Ultimo commit Fase 3: `b18ba86 feat(fase3): design system Terracota — tokens CSS, paleta completa, tipografia IBM Plex Sans/Nunito Sans, dark mode real, utilidades semanticas y safe-area`.
- Working tree actual: **limpio**.

### Cambios Fase 1 realizados (commiteados en 6b8a09a)

- Archivos eliminados: `webapp/src/App.tsx`, `webapp/src/App.css` (placeholder muerto; routing real en main.tsx).
- Paginas nuevas creadas:
  - `webapp/src/pages/academia/AcademiaPage.tsx` — Pagina completa con modulos, progreso, insignias.
  - `webapp/src/pages/civia/CiviaPage.tsx` — Asistente IA con sugerencias, politicas de honestidad.
  - `webapp/src/pages/alza-la-voz/AlzaLaVozPage.tsx` — Reportes, categorias, mesas de deliberacion.
  - `webapp/src/pages/cuentas-claras/CuentasClarasPage.tsx` — Transparencia presupuestaria.
  - `webapp/src/pages/voto-ciudadano/VotoCiudadanoPage.tsx` — Democracia paralela, votaciones.
- Archivos modificados:
  - `webapp/src/main.tsx` — 5 nuevas rutas conectadas (academia, civia, alza-la-voz, cuentas-claras, voto-ciudadano).
  - `webapp/src/components/layout/MoreMenu.tsx` — Cuentas Claras y Voto Ciudadano habilitados como NavLink.

### Cambios Fase 2 realizados (commiteados en 0070960)

- `webapp/src/db/schema.ts` — IDs semanticos (text) para regions/communes, FK ajustada en community_reports.
- `webapp/src/db/seed-geo.ts` — Seed de 16 regiones y 71 comunas chilenas reales con protecciones de seguridad.
- `webapp/src/db/migrations/0001_organic_mantis.sql` — Migracion Drizzle: UUID → text, FKs recreadas en orden correcto.
- `webapp/src/db/_verify.ts` — Script de verificacion de datos geograficos.
- `webapp/.env` — DATABASE_URL configurado para Neon (Civicum Plataforma Accion Civica).
- Migracion aplicada y seed ejecutado exitosamente: 16 regiones, 71 comunas.
- Backend validado: `/health` 200 OK, `/api/community-reports` 200 [].
### Cambios Fase 3 realizados (commiteados en b18ba86)

- `webapp/src/index.css` — Diseno Terracota completo: imports de fuentes (Nunito Sans, IBM Plex Sans, IBM Plex Mono), paleta de colores semanticos (terracota-500: #c2503a, azul-500: #264653, verde-500: #0D7A5F, dorado-500: #D4872E, proteccion-500: #2563EB), soporte real para dark mode via clase `.dark`, utilidades CSS semanticas (`.text-terracota-500`, `.bg-terracota-500`, etc.), correccion del utility `.pb-safe` para safe area en iOS.

### Validaciones tecnicas realizadas

Comandos ejecutados y resultado:

- `pnpm -C webapp lint`: paso (0 errores).
- `pnpm -C webapp build`: paso (11.41s).
- `npx playwright test --reporter=line`: 46/46 tests E2E pasaron.
- Backend health check: `/health` 200, `/api/community-reports` 200 [].

Hitos breves no necesariamente commiteados en este documento:

- Decision visual: `UI-STP-002_loading_desktop.png` restaurado desde HEAD por ruido de shimmer; repo limpio.
- Backup remoto: rama `ui-architecture-foundation` subida a `origin` y vinculada a `origin/ui-architecture-foundation`.
- Draft PR creado: `https://github.com/civicum/civicum/pull/1` como checkpoint de fase, no candidato final de merge.
- Estrategia visual segura aplicada: `ui-kit.states.spec.ts` escribe evidencia en output ignorado, visual completo 10 passed, sin modificar PNGs versionados.
- Limpieza documental PR #1 aplicada y subida en tres commits: `6ef648f docs(reentry): mark stale evidence snapshots obsolete`, `a66196b docs(ui): align pack metadata and ADR index`, `25782e3 docs(ui): clarify evidence hashes and navigation memo`.
- Fix backend/DB aplicado y subido en `3584d2f`: `db:reset` y `db:seed` quedan bloqueados por defecto, rechazan `NODE_ENV=production`, evitan URLs prod/staging sospechosas; `/api/protected/*` responde 501 hasta auth real; errores DB publicos son genericos; CORS/proxy/env quedaron parametrizados.
- Validacion local controlada post-fix: `pnpm -C webapp lint` paso, `pnpm -C webapp build` paso, backend dev levanto en `http://localhost:3001`, frontend dev levanto en `http://localhost:5173`, `/health` respondio 200, `/api/protected/profile` respondio 501 esperado, `/`, `/dashboard`, `/ui-kit` y `/no-existe` respondieron 200 HTML Vite/React.
- Error previo `ERR_CONNECTION_REFUSED` no se reprodujo con servidores dev activos; causa probable: no habia servidor escuchando al abrir la vista previa.

## 3. Reglas criticas

- No ejecutar scripts PowerShell no auditados.
- No ejecutar `scripts/close_ui_nav_001.ps1`.
- No ejecutar nada dentro de `C:\Users\daniel.aguirre\Proyectos\civicum_QUARANTINE\\`.
- No tocar, aplicar, borrar ni crear stashes sin aprobacion explicita.
- No usar `git reset`, `git clean`, `git checkout`, `git switch`, `git merge` ni `git rebase` sin aprobacion explicita.
- No ejecutar migraciones, `db:seed`, `db:reset` ni comandos de DB sin aprobacion explicita.
- No versionar `bitacora_antigravity.txt`.
- No leer `bitacora_antigravity.txt` completa salvo autorizacion explicita.
- No ejecutar `ui-kit.states.spec.ts` completo sin plan visual.
- No hacer `git add` ni `git commit` sin aprobacion explicita y staging por rutas especificas.
- No mostrar secretos completos si se detectan.

## 4. Arquitectura resumida

- App real: `webapp/`.
- Frontend: React 19 + Vite + TypeScript.
- Routing: `react-router-dom`.
- Estado cliente: Zustand.
- Datos remotos: TanStack Query.
- UI: Tailwind, Radix/shadcn-style, `lucide-react`, `framer-motion`.
- Backend: Hono sobre Node HTTP.
- DB: Drizzle ORM + PostgreSQL/Neon mediante `DATABASE_URL`.
- Testing: Playwright, ESLint, TypeScript build.
- Package manager: pnpm.

Puntos de entrada principales:

- `webapp/src/main.tsx`
- `webapp/src/components/layout/AppLayout.tsx`
- `webapp/src/server/index.ts`
- `webapp/src/server/serve.ts`
- `webapp/src/db/schema.ts`

## 5. Documentacion normativa

- Documentacion normativa UI: `docs-ui/`.
- ADRs UI: `adr-ui/`.
- Matriz: `docs-ui/traceability_matrix.md`.
- Backlog de no conformidades: `docs-ui/non_conformities_backlog.md`.
- Guia de seguridad del repo: `AGENTS.md`.
- `bitacora_antigravity.txt` es contexto historico local, no norma vigente.

Estado documental relevante:

- UI-NAV-001 quedo cerrado en contenido por ADR-0009 y codigo alineado.
- Limpieza documental PR #1 aplicada:
  - `_reentry` obsoleto/no normativo queda neutralizado para no ser evidencia vigente.
  - `PACK_VERSION.md` refleja `0.2.0`, Gate 6 checkpoint, PR Draft/no release final.
  - `docs-ui/02_COMPONENTS.md` registra `/ui-kit` como UI Kit activo y evidencia visual nueva via `testInfo.outputPath(...)` hacia output ignorado.
  - `adr-ui/README.md` indexa ADR-0008 y ADR-0009.
  - `docs-ui/traceability_matrix.md` usa `Hash de hito/verificacion` cuando corresponde.
  - `docs-ui/_reentry/UI_NAV_001_RECONCILIATION_MEMO.md` queda historico/no normativo.
- La referencia documental de \"Hash pendiente\" en `docs-ui/traceability_matrix.md` fue reemplazada por:
  - ADR-0009: `0c57451`
  - implementacion Ruta C: `0718d26`
- `docs-ui/non_conformities_backlog.md` fue alineado para no mantener UI-NAV-001 como PARTIAL.

## 6. Validaciones tecnicas realizadas

Comandos ejecutados y resultado:

- `pnpm -C webapp lint`: paso.
- `pnpm -C webapp build`: paso.
- `pnpm -C webapp exec playwright test --list`: paso; detecto 46 tests.
- Post-fix backend/DB `3584d2f`: `pnpm -C webapp lint` paso.
- Post-fix backend/DB `3584d2f`: `pnpm -C webapp build` paso.

Nota de build:

- El build paso con advertencia no bloqueante de Vite sobre chunks mayores a 500 kB.

Validacion local dev controlada post-push:

- `pnpm -C webapp dev:server`: backend levanto en `http://localhost:3001`.
- `pnpm -C webapp dev`: frontend levanto en `http://localhost:5173`.
- `/health`: HTTP 200 con `{ \"status\": \"ok\", \"version\": \"1.0.0\" }`.
- `/api/protected/profile`: HTTP 501 esperado.
- Frontend `/`, `/dashboard`, `/ui-kit` y `/no-existe`: HTTP 200 HTML Vite/React.
- DB real validada y `/api/community-reports` validado contra DB real.

## 7. Estado E2E

Tests E2E ejecutados y resultado:

- `pnpm -C webapp exec playwright test tests/e2e/smoke.notfound.spec.ts`: paso; 2 tests.
- `pnpm -C webapp exec playwright test tests/e2e/smoke.home.spec.ts`: paso; 4 tests.
- `pnpm -C webapp exec playwright test tests/e2e/smoke.breakpoints.spec.ts`: paso; 10 tests.
- `pnpm -C webapp exec playwright test tests/e2e/integration.5state.spec.ts`: paso; 4 tests.
- `pnpm -C webapp exec playwright test tests/e2e/integration.reports.spec.ts -g \"Community Reports\"`: paso; 10 tests interceptados.
- `pnpm -C webapp exec playwright test tests/e2e/integration.reports.spec.ts -g \"Real Backend Wiring\"`: paso; 6 tests.

Resultados backend observados:

- `/health` respondio 200.
- `/api/community-reports` respondio 200 con `{ \"reports\": [] }` (datos reales de Neon).
- Ese endpoint ahora funciona correctamente con la base de datos real.

Estado Git tras esos E2E seguros:

- `git status --short`: limpio antes de la prueba visual acotada.
- `git diff --name-status`: limpio antes de la prueba visual acotada.

## 8. Estado visual/snapshots

Se ejecuto inicialmente un unico test visual acotado:

```powershell
pnpm -C webapp exec playwright test tests/e2e/ui-kit.states.spec.ts --project=desktop-chromium -g \"captures loading state\"
```

Resultado:

- Paso: 1 test.
- Proyecto ejecutado: `desktop-chromium`.
- Estado ejecutado: `loading`.
- Archivo modificado:
  - `webapp/tests/visual/ui-kit/UI-STP-002_loading_desktop.png`
- Decision posterior: el cambio fue clasificado como ruido de captura del shimmer y restaurado desde HEAD.
- Estado posterior: working tree limpio.

Estrategia visual segura aplicada:

- `webapp/tests/e2e/ui-kit.states.spec.ts` ahora escribe capturas con `testInfo.outputPath(filename)`.
- Las capturas quedan en output de Playwright ignorado por Git, como `webapp/test-results/`.
- Suite visual completa ejecutada: `pnpm -C webapp exec playwright test tests/e2e/ui-kit.states.spec.ts`.
- Resultado: paso, 10 tests.
- `pnpm -C webapp lint`: paso despues del cambio.
- No se modificaron PNGs versionados en `webapp/tests/visual/ui-kit/`.
- Commit local/remoto: `aba7c8b test: write ui kit visuals to playwright output`.

Regla actual:

- No reemplazar ni commitear snapshots PNG versionados sin inspeccion visual y autorizacion explicita.
- La actualizacion de snapshots versionados queda como decision futura separada, si se requiere evidencia oficial nueva.

PNGs versionados que siguen siendo evidencia oficial existente:

- `webapp/tests/visual/ui-kit/UI-STP-001_success_desktop.png`
- `webapp/tests/visual/ui-kit/UI-STP-001_success_mobile.png`
- `webapp/tests/visual/ui-kit/UI-STP-002_loading_desktop.png`
- `webapp/tests/visual/ui-kit/UI-STP-002_loading_mobile.png`
- `webapp/tests/visual/ui-kit/UI-STP-003_empty_desktop.png`
- `webapp/tests/visual/ui-kit/UI-STP-003_empty_mobile.png`
- `webapp/tests/visual/ui-kit/UI-STP-004_error_desktop.png`
- `webapp/tests/visual/ui-kit/UI-STP-004_error_mobile.png`
- `webapp/tests/visual/ui-kit/UI-STP-005_offline_desktop.png`
- `webapp/tests/visual/ui-kit/UI-STP-005_offline_mobile.png`

## 9. Stashes y cuarentena

Stashes conocidos. Preservar, no aplicar, no borrar:

- `stash@{0}`: `pre-close-ui-nav-001-artifacts`.
- `stash@{1}`: `Stashing unrelated pngs before Gate 5.6`.
- `stash@{2}`: WIP antiguo Dashboard/Profile con borrados peligrosos.

Cuarentena externa:

- Ruta: `C:\Users\daniel.aguirre\Proyectos\civicum_QUARANTINE\\`.
- Contiene:
  - `close_ui_nav_001.ps1`
  - `local_close_ui_nav_001_runbook.md`

Regla:

- No ejecutar, mover, borrar, versionar ni inspeccionar contenido de cuarentena sin autorizacion explicita.

## 10. Bitacora historica

- `bitacora_antigravity.txt` existe como fuente historica local y esta ignorada por `.gitignore`.
- No versionarla.
- No leerla completa salvo autorizacion explicita.
- Procesarla solo por ventanas autorizadas.
- Extraer de ella decisiones vigentes, descartadas, pendientes y contradicciones.
- No usarla para sobreescribir ADRs, matriz, backlog o codigo vigente sin validacion.

## 11. Riesgos abiertos

- PR #1 sigue siendo grande y debe mantenerse Draft hasta revisar por secciones y/o ejecutar validaciones finales autorizadas.
- Revision visual humana/subjetiva pendiente para `/`, `/dashboard`, `/ui-kit`, `/no-existe`, navegacion desktop/mobile, menu Mas y estados UI kit.
- DB real validada; `DATABASE_URL` esta configurado localmente y `/api/community-reports` fue validado contra DB real.
- Checks remotos GitHub no confirmados porque `gh` no esta disponible en este equipo.
- Stashes antiguos pueden contener contexto util o cambios peligrosos; revisar solo con plan.
- `bitacora_antigravity.txt` puede contener decisiones historicas, pero tambien ruido, contradicciones o informacion no vigente.
- La evidencia visual nueva de `ui-kit.states.spec.ts` queda en output ignorado por Git; si se decide actualizar snapshots versionados, requiere revision visual y autorizacion explicita.
- Riesgo documental `_reentry` obsoleto/ruidoso reducido: los artefactos stale quedaron marcados obsoletos/no normativos y no deben usarse como evidencia vigente.
- No ejecutar `db:*`, migraciones, seed/reset ni comandos DB sin autorizacion explicita.
- No marcar PR #1 ready-for-review sin revision por secciones y validaciones autorizadas.

## 12. Proximo paso exacto

Primer paso recomendado al reentrar:

1. Confirmar estado actual:
```bash
git status --short
git diff --name-status
git log --oneline -5
```

2. Proximo frente recomendado (Fase 4 - Modulo 1 Alza la Voz):
- Implementar formulario de reporte ciudadano con geolocalizacion y captura de evidencia.
- Conectar el formulario al endpoint `/api/community-reports` (crear endpoint POST si no existe).
- Implementar estados de envio: carga, exito, error.
- Permitir adjuntar imagenes y describir la ubicacion.
- Validar datos con Zod antes de enviar.
- Mostrar lista de reportes enviados (de la API) en la misma pagina o en una nueva vista.

3. Fase 5 (Modulos 2-3 Academia Cívica + Cuentas Claras) inmediatamente despues:
- Implementar microlearning gamificado con seguimiento de progreso y otorgamiento de insignias.
- Conectar Academia Cívica a un backend de lecciones (por ahora, datos estaticos o mock).
- Para Cuentas Claras, integrar datos presupuestarios municipales (por ahora, datos estaticos o de una API publica).
- Implementar filtros y visualizaciones de gasto e ingreso.

### Fases completadas

- **Fase 0** ✅ — Diagnostico: lint (0 errores), build (16s), 46/46 tests E2E pasan.
- **Fase 1** ✅ — Cimientos: App.tsx eliminado, 5 paginas nuevas creadas con diseno Terracota, navegacion completa (8 rutas), MoreMenu actualizado.
- **Fase 2** ✅ — Infraestructura: DB conectada a Neon, migracion aplicada, datos geograficos sembrados (16 regiones, 71 comunas), endpoints de salud y reportes validados.
- **Fase 3** ✅ — Design System Terracota: tokens CSS, paleta completa, tipografia IBM Plex Sans/Nunito Sans, dark mode real, utilidades semanticas y safe-area.

## 13. Politica de actualizacion

Codex debe proponer actualizar `CIVICUM_RECOVERY.md` despues de cada hito relevante, por ejemplo:

- commit nuevo.
- test importante ejecutado.
- decision visual tomada.
- stash revisado.
- ventana de `bitacora_antigravity.txt` procesada.
- riesgo abierto o cerrado.
- cambio de arquitectura.
- cambio de documentacion normativa.
- cambio del proximo paso exacto.

Reglas para actualizar este documento:

- Mantenerlo bajo 30.000 caracteres.
- No pegar prompts completos.
- No pegar logs completos.
- Registrar solo estado, decisiones, comandos relevantes, resultados y proximo paso.
- Mantenerlo como documento de recuperacion, no como bitacora exhaustiva.
- Si el working tree esta sucio, actualizarlo solo con aprobacion explicita y cuidando no mezclar cambios no relacionados.

## 14. Fase 4 - Módulo Alza la Voz (Formulario de reportes)

- **Objetivo**: Implementar formulario de reporte ciudadano con geolocalizacion, captura de evidencia y envío al backend.
- **Cambios realizados**:
  - Frontend: `webapp/src/pages/alza-la-voz/AlzaLaVozPage.tsx` - formulario con título, descripción, 6 categorías, geolocalización, subida de imagen, envío POST a `/api/community-reports`.
  - Backend: `webapp/src/server/index.ts` - endpoints GET y POST `/api/community-reports` usando Drizzle ORM con Neon PostgreSQL.
  - Servidor: `webapp/src/server/serve.ts` - servidor Hono independiente.
- **Validaciones técnicas realizadas**:
  - `pnpm lint`: 0 errores, 0 warnings.
  - `pnpm build`: exitoso (warning de chunk size > 500 KB, informativo).
  - Backend health check: `{"status":"ok","version":"1.0.0"}`.
  - Pruebas end-to-end (Playwright): 46 pruebas pasaron en 49.7 s.
- **Próximos pasos**: Considerar geocodificación automática para `communeId`, mejorar manejo de errores, añadir pruebas de unidad.
# CIVICUM_RECOVERY.md

Documento de recuperacion compacto para continuar Civicum desde un chat nuevo sin perder el estado operativo. No es una bitacora cruda ni una transcripcion: registra estado, decisiones, comandos relevantes, resultados y el proximo paso.

Ultima actualizacion: 2026-05-26.

## 1. Estado actual

- Proyecto: Civicum.
- Ruta local: `C:\Users\daniel.aguirre\Proyectos\civicum`.
- Rama actual: `ui-architecture-foundation`.
- Working tree conocido antes de esta actualizacion: limpio.
- Origin confirmado: `https://github.com/civicum/civicum.git`.
- Rama remota: `origin/ui-architecture-foundation`.
- Upstream configurado correctamente: `ui-architecture-foundation` trackea `origin/ui-architecture-foundation`.
- Ultimo commit funcional validado y pusheado antes de esta actualizacion: `3584d2f fix(webapp): harden db scripts and api defaults`.
- Esta actualizacion de Recovery aun no esta commiteada al momento de editar este documento.
- Draft PR creado: `https://github.com/civicum/civicum/pull/1`.
- Estado PR: `OPEN / Draft`.
- Base PR: `main`.
- Head PR: `ui-architecture-foundation`.
- Decision visual tomada: `webapp/tests/visual/ui-kit/UI-STP-002_loading_desktop.png` fue restaurado desde HEAD por ruido de shimmer.
- No hay PNGs modificados pendientes al momento de esta actualizacion.

## 2. Ultimos commits relevantes

- `3584d2f fix(webapp): harden db scripts and api defaults`
- `25782e3 docs(ui): clarify evidence hashes and navigation memo`
- `a66196b docs(ui): align pack metadata and ADR index`
- `6ef648f docs(reentry): mark stale evidence snapshots obsolete`
- `d205aba docs: update recovery after visual output strategy`
- `aba7c8b test: write ui kit visuals to playwright output`
- `835c303 docs: record draft PR in recovery`
- `d1dcc05 fix: resolve webapp lint errors`
- `8b1de77 docs: replace pending traceability hash`
- `1ef25ce docs: align non-conformities backlog with navigation status`
- `a4851f7 chore: add root gitignore for local artifacts`
- `9f3468c docs: add repository safety guidance`
- `0718d26 feat(gate6): implement Ruta C navigation taxonomy and Mas overlay`
- `0c57451 docs(ui-nav-001): officialize navigation taxonomy via ADR-0009`

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
- No ejecutar nada dentro de `C:\Users\daniel.aguirre\Proyectos\civicum_QUARANTINE\`.
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
- La referencia documental de "Hash pendiente" en `docs-ui/traceability_matrix.md` fue reemplazada por:
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
- `/health`: HTTP 200 con `{ "status": "ok", "version": "1.0.0" }`.
- `/api/protected/profile`: HTTP 501 esperado.
- Frontend `/`, `/dashboard`, `/ui-kit` y `/no-existe`: HTTP 200 HTML Vite/React.
- DB real no validada y `/api/community-reports` no validado contra DB real.

## 7. Estado E2E

Tests E2E ejecutados y resultado:

- `pnpm -C webapp exec playwright test tests/e2e/smoke.notfound.spec.ts`: paso; 2 tests.
- `pnpm -C webapp exec playwright test tests/e2e/smoke.home.spec.ts`: paso; 4 tests.
- `pnpm -C webapp exec playwright test tests/e2e/smoke.breakpoints.spec.ts`: paso; 10 tests.
- `pnpm -C webapp exec playwright test tests/e2e/integration.5state.spec.ts`: paso; 4 tests.
- `pnpm -C webapp exec playwright test tests/e2e/integration.reports.spec.ts -g "Community Reports"`: paso; 10 tests interceptados.
- `pnpm -C webapp exec playwright test tests/e2e/integration.reports.spec.ts -g "Real Backend Wiring"`: paso; 6 tests.

Resultados backend observados:

- `/health` respondio 200.
- `/api/community-reports` respondio 500 controlado por falta de `DATABASE_URL`.
- Ese 500 era esperado y aceptado por los tests de Real Backend Wiring.

Estado Git tras esos E2E seguros:

- `git status --short`: limpio antes de la prueba visual acotada.
- `git diff --name-status`: limpio antes de la prueba visual acotada.

## 8. Estado visual/snapshots

Se ejecuto inicialmente un unico test visual acotado:

```powershell
pnpm -C webapp exec playwright test tests/e2e/ui-kit.states.spec.ts --project=desktop-chromium -g "captures loading state"
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

- Ruta: `C:\Users\daniel.aguirre\Proyectos\civicum_QUARANTINE\`.
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
- DB real no validada; `DATABASE_URL` no esta configurado localmente y `/api/community-reports` no fue validado contra DB real.
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

```powershell
git status --short
git diff --name-status
git log --oneline -5
```

2. Proximo frente recomendado:

- Revisar y commitear esta actualizacion de `CIVICUM_RECOVERY.md` si el diff es correcto.
- Luego completar revision visual humana/manual controlada del PR #1.
- Mantener PR #1 en Draft por ahora; no marcar ready-for-review todavia.
- No actualizar snapshots versionados salvo decision explicita y revision visual.

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

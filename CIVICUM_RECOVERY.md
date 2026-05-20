# CIVICUM_RECOVERY.md

Documento de recuperacion compacto para continuar Civicum desde un chat nuevo sin perder el estado operativo. No es una bitacora cruda ni una transcripcion: registra estado, decisiones, comandos relevantes, resultados y el proximo paso.

Ultima actualizacion: 2026-05-20.

## 1. Estado actual

- Proyecto: Civicum.
- Ruta local: `C:\Users\daniel.aguirre\Proyectos\civicum`.
- Rama actual: `ui-architecture-foundation`.
- Working tree conocido al crear este documento:
  - `M webapp/tests/visual/ui-kit/UI-STP-002_loading_desktop.png`
- Ese PNG fue modificado por una prueba visual acotada y no debe commitearse ni restaurarse sin inspeccion previa.
- No hay decision tomada aun sobre conservar o descartar ese PNG.

## 2. Ultimos commits relevantes

- `d1dcc05 fix: resolve webapp lint errors`
- `8b1de77 docs: replace pending traceability hash`
- `1ef25ce docs: align non-conformities backlog with navigation status`
- `a4851f7 chore: add root gitignore for local artifacts`
- `9f3468c docs: add repository safety guidance`
- `0718d26 feat(gate6): implement Ruta C navigation taxonomy and Mas overlay`
- `0c57451 docs(ui-nav-001): officialize navigation taxonomy via ADR-0009`

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
- No hacer `git add` ni `git commit` hasta resolver primero el estado del PNG visual modificado.
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
- La referencia documental de "Hash pendiente" en `docs-ui/traceability_matrix.md` fue reemplazada por:
  - ADR-0009: `0c57451`
  - implementacion Ruta C: `0718d26`
- `docs-ui/non_conformities_backlog.md` fue alineado para no mantener UI-NAV-001 como PARTIAL.

## 6. Validaciones tecnicas realizadas

Comandos ejecutados y resultado:

- `pnpm -C webapp lint`: paso.
- `pnpm -C webapp build`: paso.
- `pnpm -C webapp exec playwright test --list`: paso; detecto 46 tests.

Nota de build:

- El build paso con advertencia no bloqueante de Vite sobre chunks mayores a 500 kB.

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

Se ejecuto un unico test visual acotado:

```powershell
pnpm -C webapp exec playwright test tests/e2e/ui-kit.states.spec.ts --project=desktop-chromium -g "captures loading state"
```

Resultado:

- Paso: 1 test.
- Proyecto ejecutado: `desktop-chromium`.
- Estado ejecutado: `loading`.
- Archivo modificado:
  - `webapp/tests/visual/ui-kit/UI-STP-002_loading_desktop.png`

Regla actual:

- No commitear ni restaurar `webapp/tests/visual/ui-kit/UI-STP-002_loading_desktop.png` sin inspeccion previa.
- No ejecutar el spec visual completo sin plan visual.

PNGs versionados que `ui-kit.states.spec.ts` puede sobrescribir:

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

- `webapp/tests/visual/ui-kit/UI-STP-002_loading_desktop.png` esta modificado y pendiente de inspeccion contra HEAD.
- `ui-kit.states.spec.ts` escribe directamente en `webapp/tests/visual/ui-kit/`, una ruta versionada.
- La suite visual completa puede sobrescribir 10 PNGs versionados.
- `DATABASE_URL` no esta configurado localmente; backend real funciona en modo error controlado para `/api/community-reports`.
- Stashes antiguos pueden contener contexto util o cambios peligrosos; revisar solo con plan.
- `bitacora_antigravity.txt` puede contener decisiones historicas, pero tambien ruido, contradicciones o informacion no vigente.
- Tests E2E seguros pasaron, pero la estrategia visual completa sigue pendiente.

## 12. Proximo paso exacto

Primer paso recomendado al reentrar:

1. Confirmar estado actual:

```powershell
git status --short
git diff --name-status
git log --oneline -5
```

2. Inspeccionar el PNG modificado sin restaurarlo ni commitearlo:

```powershell
git diff --stat -- webapp/tests/visual/ui-kit/UI-STP-002_loading_desktop.png
git diff --summary -- webapp/tests/visual/ui-kit/UI-STP-002_loading_desktop.png
```

3. Si se necesita comparacion visual, preparar un plan antes de ejecutar comandos que extraigan o generen imagenes desde HEAD.

Decision pendiente:

- Conservar `webapp/tests/visual/ui-kit/UI-STP-002_loading_desktop.png`.
- Restaurarlo desde HEAD.
- Regenerar visuales bajo una estrategia mas amplia.
- Cambiar el spec para escribir en una ruta no versionada, solo si se autoriza editar tests.

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

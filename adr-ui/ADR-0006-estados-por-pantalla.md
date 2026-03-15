# ADR-0006: Estados obligatorios por pantalla (5-state pattern)

- **Estado:** ACCEPTED
- **Fecha:** 2026-02-25
- **Daniel decision:** ACCEPTED — opción elegida: A (única propuesta)
- **Decision date:** 2026-02-26
- **Autor:** Antigravity (para aprobación de Daniel)
- **Afecta:** UI-STP-001, UI-STP-002, UI-STP-003, UI-STP-004, UI-STP-005, UI-STP-009 | GAP-006
- **Supersede:** —

---

## Contexto

La spec (S01 → §12) define 5 estados obligatorios por pantalla: loading, empty, error, offline, success. Las pantallas de Época 1 (Dashboard, Perfil, Onboarding) no implementan estos estados — muestran contenido directamente o quedan en blanco durante la carga.

GAP-006 identifica esta ausencia. Las reglas existen (UI-STP-001 a UI-STP-005) pero no están implementadas.

- **DOCREF:** S01 → §12 → tabla 5 estados (L1356)
- **DOCREF:** S01 → §12.2 → skeleton shimmer spec (L1381)
- **DOCREF:** S01 → §12.3 → empty states por módulo (L1387)
- **DOCREF:** `docs-ui/_gate2/gaps_log.md` → GAP-006

## Decisión

Adoptar un **5-state pattern** obligatorio: toda pantalla CIVICUM debe manejar los 5 estados definidos en la spec (DOCREF: S01 → §12, L1356).

### Los 5 estados

| Estado | Comportamiento esperado | Cuándo aplica |
|--------|------------------------|---------------|
| **Loading** | Skeleton shimmer (DOCREF: S01 → §12.2, L1381) | Fetch inicial de datos |
| **Empty** | Ilustración contextual + copy + CTA (DOCREF: S01 → §12.3, L1387) | Datos cargados = 0 resultados |
| **Error** | Feedback Terracota + mensaje humano + opción retry (DOCREF: S01 → §12.1, L1359) | Fetch o acción falló |
| **Offline** | Banner informativo (no alarma) + funcionalidad degradada (DOCREF: S01 → §12.1, L1360) | Sin conectividad |
| **Success** | Confirmación visual + texto confirmatorio + siguiente paso (DOCREF: S01 → §12, L1361) | Post-acción completada |



## Alternativas Consideradas

### Alternativa A: 5 componentes reutilizables + integración en todas las pantallas (aceptada)
- **Pros:** DRY, consistente, auditables vía Playwright, spec 1:1
- **Contras:** ~8-12h implementación (estimación), requiere wrapper o HOC por pantalla

### Alternativa B: Implementar solo loading + error (mínimo viable)
- **Pros:** Más rápido (~4h, estimación), cubre los 2 estados más visibles
- **Contras:** Empty y offline quedan como deuda, no cumple spec completa, 3 de 5 estados sin resolver

### Alternativa C: Posponer todo a Época 2
- **Pros:** No toca Época 1
- **Contras:** Cada pantalla nueva de Época 2 nace sin estados, deuda se multiplica

## Consecuencias

- **Positivas:** Cierra GAP-006, experiencia degradada digna (F-07), skeleton ayuda a reducir CLS si matchea layout real, retry reduce frustración
- **Negativas:** ~8-12h implementación (estimación), posible cambio en golden screenshots existentes
- **Riesgos:** Skeleton layout debe coincidir con layout real para evitar CLS al cargar. Mitigación: diseñar skeleton que matchee estructura de cards/forms.

## Verificación (Gate 5.3+)

- UI-kit Playwright: screenshots de cada componente (skeleton, empty, error, offline banner)
- E2E: simular offline → verificar banner + funcionalidad; simular error → verificar toast + retry
- Golden screenshots: solo aplican si Empty es estado estable de una golden screen; Loading se verifica en UI-kit Playwright (no en golden screenshots)
- Performance: skeleton debe minimizar trabajo extra de JS; no debe introducir CLS; se valida con Lighthouse/Performance en Gate 5+

## Plan de implementación (histórico)

> **(Histórico)** — ya implementado progresivamente en Gate 5.3–5.7a; ver [Implementation record](#implementation-record-gate-53-57a) abajo.

1. **Componentes sugeridos** (nombres y ubicación TBD):
   - Skeleton screen, Empty state, Error state, Offline banner — como componentes reutilizables
   - Ej. ubicación: `src/components/feedback/` (TBD)
2. **Hook sugerido:** wrapper que encapsule fetch + state machine → retorna `{ state, data, retry }` (API TBD)
3. Detección offline: vía API del navegador (ej. `navigator.onLine`, Connection API) — implementación TBD
4. Integrar en Dashboard, Perfil (Onboarding solo offline banner)
5. Capturar screenshots de cada estado para visual regression
6. Actualizar golden screenshots si aplica

### Ejemplo no normativo — Aplicación por pantalla, Época 1

> ⚠️ Esta tabla es un **ejemplo ilustrativo**, no una spec. Cada pantalla debe declarar su mapping de estados en Gate 4/5 durante implementación.

| Pantalla | Loading | Empty | Error | Offline | Success |
|----------|---------|-------|-------|---------|---------|
| Dashboard | ✓ | ✓ | ✓ | ✓ (datos cacheados) | — |
| Perfil | ✓ | — (siempre hay datos) | ✓ | ✓ (datos locales) | ✓ |
| Onboarding | — (no fetcha datos) | — | ✓ | ✓ (continuar offline) | ✓ |

## Referencias

- DOCREF: `docs/knowledge-base/CIVICUM_Diseno_UI_UX_Definitivo.md` §12 (L1356-1418)
- DOCREF: `docs-ui/traceability_matrix.md` → UI-STP-001 a UI-STP-009
- DOCREF: `docs-ui/_gate2/gaps_log.md` → GAP-006

---

> ✅ **Aprobación (Daniel): COMPLETADA** — implementación base en Gate 5.3/5.4; primera integración vertical real completada y verificada en Gate 5.7/5.7a. Ver Implementation record.

---

## Implementation record (Gate 5.3–5.7a)

### Gate 5.3 — Componentes UI-kit

- **Commit `fc42f22`** — `feat(gate5.3): 5-state feedback components + shimmer keyframe (ADR-0006)`
  - Files: `webapp/src/components/feedback/SkeletonScreen.tsx`, `EmptyState.tsx`, `ErrorState.tsx`, `OfflineBanner.tsx`, `SuccessState.tsx`, `webapp/tailwind.config.ts`
  - 5 componentes reutilizables presentacionales (composable, sin dependencia de pantalla). OfflineBanner es presentational (sin auto-detect). Shimmer keyframe 1.5s infinite.
- **Commit `c0481ad`** — `feat(gate5.3): /ui-kit deterministic route for 5-state evidence`
  - Files: `webapp/src/pages/ui-kit/UIKitPage.tsx`, `webapp/src/main.tsx`
  - Ruta `/ui-kit` determinista (sin red, sin datos reales). Soporta `?state=loading|empty|error|offline|success` para mostrar 1 estado a la vez. Cada sección tiene `data-testid="state-X"` y `data-state="X"`.
- **Commit `cf61361`** — `test(gate5.3): Playwright ui-kit snapshots — 10 PNGs for 5-state evidence`
  - Files: `webapp/tests/e2e/ui-kit.states.spec.ts`, `webapp/tests/visual/ui-kit/*.png` (10 PNGs)
  - Playwright navega a `/ui-kit?state=X`, captura per-section screenshot en desktop 1440×900 y mobile 360×800. Screenshots guardados en ruta canónica `webapp/tests/visual/ui-kit/`.
- **Commit `32a6a54`** — `docs(gate5.3): SSOT closure — traceability_matrix UI-STP-001..009 implementation notes`
  - Files: `docs-ui/traceability_matrix.md`
  - Notas de implementación/verificación en UI-STP-001..005 y UI-STP-009.

### Gate 5.4 — Integración en producción

- **Commit `d5f0959`** — `feat(gate5.4): integrate OfflineBanner in AppLayout via real navigator.onLine (UI-STP-005)`
  - Files: `webapp/src/lib/useNetworkStatus.ts` (NEW), `webapp/src/components/layout/AppLayout.tsx`, `webapp/tests/e2e/integration.5state.spec.ts` (NEW), `docs-ui/traceability_matrix.md`
  - Hook `useNetworkStatus` usa `navigator.onLine` + event listeners `online`/`offline` (sin timers, sin polling). `AppLayout` renderiza `OfflineBanner` entre header y main cuando el navegador está offline. Playwright E2E verifica con `context.setOffline(true/false)`.

### Evidence & specs

- **Evidence canonical path:** `webapp/tests/visual/ui-kit/`
- **UI-kit Playwright spec:** `webapp/tests/e2e/ui-kit.states.spec.ts`
- **Production E2E spec:** `webapp/tests/e2e/integration.5state.spec.ts`

### Limitaciones documentadas (Gate 5.5 Honest Stop)

- **Gate 5.5 evaluation:** no honest production integration path found for Error / Empty / Loading / Success under current static architecture.
- **Offline:** remains the only state integrated in production as of Gate 5.4 (`AppLayout` → `OfflineBanner` vía `useNetworkStatus`).
- Remaining states stay in UI-kit until real async data flows / empty collections / completion flows exist.
  - Dashboard y Profile usan datos hardcoded (sin fetch real).
  - Onboarding tiene geolocalización simulada; integrar `ErrorState` requeriría geocoding inverso (lat/lng → comuna) que no existe. El path de éxito no puede ser real → mezclar error real con éxito fake es deshonesto.
- No se introdujeron timers artificiales ni lógicas inventadas en ningún Gate.

### Gate 5.6 evaluation outcome

- Gate 5.6 intentó identificar la primera vertical real de datos.
- No se encontró un camino honesto debido a la falta de backend y data wiring activo.
- Offline sigue siendo el único estado integrado en producción.
- Loading / Empty / Error / Success permanecen en UI-kit hasta que exista backend/data flow real.

### Gate 5.7 implementation record

- **Vertical:** Dashboard → Reportes Comunitarios (read-only `GET /api/community-reports`)
- **Backend wiring:** Hono server entrypoint (`src/server/serve.ts`) + real Drizzle query sobre `communityReports` (`src/server/index.ts`) + Neon connection (`src/server/db.ts`)
- **Frontend wiring:** `QueryClientProvider` en `main.tsx` + `useQuery` en `DashboardPage.tsx` + Vite proxy `/api → localhost:3001`
- **Estados integrados en producción:**
  - **Loading** → `SkeletonScreen` activado por request real pendiente (sin timer artificial)
  - **Error** → `ErrorState` con `onRetry` → `refetch()` activado por fallo real del endpoint
  - **Empty** → `EmptyState` activado cuando la consulta devuelve 0 reportes reales
- **Success** queda fuera de scope (no hay mutación real en esta vertical read-only)
- **Tests (Gate 5.7 inicial):** `integration.reports.spec.ts` — 4 tests con intercept (Loading, Error, Empty, Retry) × 2 projects = 8 E2E tests
- **Commit:** ac0bd8e
- **No se introdujeron timers artificiales, fake APIs, ni datos inventados**

### Gate 5.7a implementation record

- **Commit:** 3ee96e8
- **EmptyState CTA resuelto:**
  - Nuevo prop `ctaTo` en `EmptyState.tsx` → renderiza `<Link>` de react-router (navegación real)
  - Dashboard `CommunityReportsSection` usa `ctaTo="/alza-la-voz"` en lugar del anterior `onAction` no-op
- **Playwright dual webServer:**
  - Backend Hono en puerto 3001 (verificado vía `/health`)
  - Frontend Vite en puerto 5173 (proxy `/api → localhost:3001`)
  - Ambos se levantan automáticamente al ejecutar `pnpm test:e2e`
- **Real backend wiring tests (sin intercept):**
  - `Backend /health returns real 200` — HTTP directo a `localhost:3001/health`
  - `Backend /api/community-reports returns real HTTP response` — acepta 200 (DB conectada) o 500 honesto (DB no configurada)
  - `Dashboard renders real state without intercept` — renderiza ErrorState real por `DATABASE_URL` ausente
- **Test de CTA funcional:** `Empty CTA: "Crear Reporte" navigates to /alza-la-voz` (con intercept para forzar estado Empty)
- **Spec total post-5.7a:** `integration.reports.spec.ts` — 8 tests de archivo (5 con intercept + 3 real wiring) × 2 projects = 16 E2E tests
- **Clarificación de verificación:**
  - Loading/Error/Empty: integrados en producción y validados por intercept sobre la request real del frontend
  - Wiring del backend real: validado por tests sin intercept (HTTP directo + render sin mock)
  - Empty UI con DB real vacía: no observado aún (no hay DB con 0 rows en entorno de test); la UI está lista para ese caso
  - Success: sigue fuera de scope (vertical read-only, sin mutación)



# ADR-0004: Diseño de pantalla 404

- **Estado:** ACCEPTED
- **Fecha:** 2026-02-25
- **Daniel decision:** ACCEPTED — opción elegida: A (única propuesta)
- **Decision date:** 2026-02-26
- **Autor:** Antigravity (para aprobación de Daniel)
- **Afecta:** UI-NAV-008 | GAP-001
- **Supersede:** —

---

## Contexto

No existe ruta catch-all ni pantalla para URLs inválidas. Un usuario que acceda a `/ruta-inexistente` obtiene un blank o un error genérico del framework. Esto viola UI-CTR-006 (Regla de Oro S4: flujo completable) y UI-CNT-004 (errores humanos, no técnicos).

Ninguna fuente de diseño define explícitamente una pantalla 404, por lo que este ADR **crea** la decisión (no espera fuente externa).

- **DOCREF:** `docs-ui/traceability_matrix.md` → UI-NAV-008 (GAP)
- **DOCREF:** `docs-ui/_gate2/gaps_log.md` → GAP-001

## Scope

- **Dentro de scope:** Este 404 es para rutas dentro de AppLayout (Smart Dock visible).
- **Fuera de scope:** 404 para flujos standalone/onboarding queda fuera de scope y requerirá ADR separado si aparece el caso.

## Decisión

Crear una pantalla 404 personalizada alineada al tono CIVICUM: empática, directa, no técnica, no culpabilizante (ref: UI-CNT-001, DOCREF: S01 → §15.1 L1500; UI-CNT-004, DOCREF: S01 → §15.4 L1532).

Requisitos funcionales:

1. **Logo CIVICUM** centrado
2. **Copy principal y secundario:** *(Copy aprobado en este ADR)*
   - "Esta página no existe — pero tu camino cívico sí."
   - "Quizás la dirección cambió o escribiste algo distinto."
3. **CTA primario:** Acción que lleve al inicio (Dashboard)
4. **CTA secundario:** Acción que permita explorar módulos
5. **Navegación:** Smart Dock permanece visible (no standalone layout)
6. **Registro de URL intentado:** *(requiere ADR separado de telemetría/privacy — no es decisión de UI pura)*

## Alternativas Consideradas

### Alternativa A: Pantalla 404 personalizada con CTAs (aceptada)
- **Pros:** Digna, alineada a tono CIVICUM, recupera al usuario, detecta enlaces rotos
- **Contras:** Requiere crear componente nuevo + ruta + copy aprobado

### Alternativa B: Redirect silencioso a Dashboard
- **Pros:** Cero UI nueva, usuario siempre llega a algo funcional
- **Contras:** Confuso (no explica qué pasó), oculta errores de enlace, viola F-02 (honestidad)

### Alternativa C: Página 404 genérica (texto mínimo)
- **Pros:** Rápido de implementar
- **Contras:** No sigue tono CIVICUM, experiencia pobre, no ayuda al usuario a navegar

## Consecuencias

- **Positivas:** Cierra GAP-001, mejora UX de error, detecta enlaces rotos, alineada a F-02
- **Negativas:** ~2h implementación (estimación), copy aprobado en este ADR
- **Riesgos:** Copy ya aprobado; validar legibilidad/a11y en implementación

## Verificación (Gate 5+)

- E2E: Playwright navega a `/ruta-que-no-existe`, verifica presencia de copy + CTAs
- Golden screenshots: 404 desktop + mobile (candidata a golden screen vía ADR)
  - **Nota:** 404 no es golden por defecto; se agrega a `golden_screens.md` solo vía ADR explícito.
- Test a11y: contraste, focus, aria-labels en CTAs

## Plan de implementación (no ejecutar aún)

> **(Histórico)** — ya implementado en Gate 5.2; ver [Implementation record](#implementation-record-gate-52) abajo.

1. Ruta catch-all: configurar ruta comodín (`path="*"`) en el router (ubicación TBD)
2. Crear componente de pantalla 404 (nombre y ubicación TBD) con layout AppShell (Smart Dock visible)
   - Sugerencia: usar isotipo (no texto completo) — opción a validar con diseño
3. Implementar copy y CTAs según decisión aprobada
4. Capturar golden screenshots
5. Agregar a `golden_screens.md` si se decide que es golden (ADR separado)

## Referencias

- DOCREF: `docs-ui/traceability_matrix.md` → UI-NAV-008, UI-CTR-006, UI-CNT-004
- DOCREF: `docs-ui/_gate2/gaps_log.md` → GAP-001
- DOCREF: `docs/knowledge-base/CIVICUM_Diseno_UI_UX_Definitivo.md` §15.4 "Errores humanos" (L1532)

---

> ✅ **Aprobación (Daniel): COMPLETADA** — se autoriza implementación según el plan (Gate 5+).

---

## Implementation record (Gate 5.2)

- **Implemented in:** commit `7bb2c42` — catch-all `path="*"` inside AppLayout + `NotFoundPage.tsx`
  - Files: `webapp/src/main.tsx`, `webapp/src/pages/not-found/NotFoundPage.tsx`, `webapp/tests/e2e/smoke.notfound-pre404.spec.ts`
- **CTA primario:** "Volver al inicio" → navega a `/` (Dashboard)
- **CTA secundario:** "Explorar módulos" → navega a `/alza-la-voz` (primer módulo disponible en Smart Dock)
- **Verified by:** Playwright `smoke.notfound.spec.ts` (commit `6cf97d6`) — asserts AppLayout header, exact ADR-0004 copy, CTA navigation, zero JS errors
  - Files: `webapp/tests/e2e/smoke.notfound.spec.ts` (created), `webapp/tests/e2e/smoke.notfound-pre404.spec.ts` (deleted/renamed), `docs-ui/traceability_matrix.md`
- **Traceability:** UI-NAV-008 actualizado en `docs-ui/traceability_matrix.md`


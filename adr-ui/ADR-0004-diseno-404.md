# ADR-0004: Diseño de pantalla 404

- **Estado:** PROPOSED
- **Fecha:** 2026-02-25
- **Autor:** Antigravity (para aprobación de Moska)
- **Afecta:** UI-NAV-008 | GAP-001
- **Supersede:** —

---

## Contexto

No existe ruta catch-all ni pantalla para URLs inválidas. Un usuario que acceda a `/ruta-inexistente` obtiene un blank o un error genérico del framework. Esto viola UI-CTR-006 (Regla de Oro S4: flujo completable) y UI-CNT-004 (errores humanos, no técnicos).

Ninguna fuente de diseño define explícitamente una pantalla 404, por lo que este ADR **crea** la decisión (no espera fuente externa).

- **DOCREF:** `docs-ui/traceability_matrix.md` → UI-NAV-008 (GAP)
- **DOCREF:** `docs-ui/_gate2/gaps_log.md` → GAP-001

## Decisión (propuesta)

Crear una pantalla 404 personalizada con tono "Vecino Organizado", que incluya:

1. **Logo CIVICUM** centrado (isotipo, no texto completo)
2. **Copy principal:** "Esta página no existe — pero tu camino cívico sí."
3. **Copy secundario:** "Quizás la dirección cambió o escribiste algo distinto."
4. **CTA primario:** "Ir al Inicio" → `/` (Dashboard)
5. **CTA secundario:** "Explorar módulos" → abre Smart Dock
6. **Navegación:** Smart Dock permanece visible (no standalone layout)
7. **Registro:** log del URL intentado para detección de enlaces rotos (analytics privacy-first)

**Ruta:** React Router catch-all `<Route path="*" element={<NotFoundPage />} />`

## Alternativas Consideradas

### Alternativa A: Pantalla 404 personalizada con CTAs (propuesta)
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
- **Negativas:** ~2h implementación, necesita copy aprobado
- **Riesgos:** Copy debe validarse con tono "Vecino Organizado" (no técnico, no culpabilizante)

## Verificación (Gate 5+)

- E2E: Playwright navega a `/ruta-que-no-existe`, verifica presencia de copy + CTAs
- Golden screenshots: 404 desktop + mobile (candidata a golden screen vía ADR)
- Test a11y: contraste, focus, aria-labels en CTAs

## Plan de implementación (no ejecutar aún)

1. Crear `src/pages/NotFoundPage.tsx` con layout AppShell (Smart Dock visible)
2. Agregar `<Route path="*">` en React Router
3. Implementar copy y CTAs según decisión
4. Capturar golden screenshots
5. Agregar a `golden_screens.md` si se decide que es golden (ADR separado)

## Referencias

- DOCREF: `docs-ui/traceability_matrix.md` → UI-NAV-008, UI-CTR-006, UI-CNT-004
- DOCREF: `docs-ui/_gate2/gaps_log.md` → GAP-001
- DOCREF: `docs/knowledge-base/CIVICUM_Diseno_UI_UX_Definitivo.md` §15.4 "Errores humanos" (L1532)

---

> ✅ **Aprobación (Moska): PENDIENTE** — no ejecutar implementación hasta aprobación.

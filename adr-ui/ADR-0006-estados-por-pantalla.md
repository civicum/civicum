# ADR-0006: Estados obligatorios por pantalla (5-state pattern)

- **Estado:** PROPOSED
- **Fecha:** 2026-02-25
- **Autor:** Antigravity (para aprobación de Moska)
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

## Decisión (propuesta)

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

### Alternativa A: 5 componentes reutilizables + integración en todas las pantallas (propuesta)
- **Pros:** DRY, consistente, auditables vía Playwright, spec 1:1
- **Contras:** ~8-12h implementación, requiere wrapper o HOC por pantalla

### Alternativa B: Implementar solo loading + error (mínimo viable)
- **Pros:** Más rápido (~4h), cubre los 2 estados más visibles
- **Contras:** Empty y offline quedan como deuda, no cumple spec completa, 3 de 5 estados sin resolver

### Alternativa C: Posponer todo a Época 2
- **Pros:** No toca Época 1
- **Contras:** Cada pantalla nueva de Época 2 nace sin estados, deuda se multiplica

## Consecuencias

- **Positivas:** Cierra GAP-006, experiencia degradada digna (F-07), skeleton elimina CLS, retry reduce frustración
- **Negativas:** ~8-12h implementación, posible cambio en golden screenshots existentes
- **Riesgos:** Skeleton layout debe coincidir con layout real para evitar CLS al cargar. Mitigación: diseñar skeleton que matchee estructura de cards/forms.

## Verificación (Gate 5+)

- UI-kit Playwright: screenshots de cada componente (skeleton, empty, error, offline banner)
- E2E: simular offline → verificar banner + funcionalidad; simular error → verificar toast + retry
- Golden screenshots: solo aplican si Empty es estado estable de una golden screen; Loading se verifica en UI-kit Playwright (no en golden screenshots)
- Performance: skeleton debe minimizar trabajo extra de JS; no debe introducir CLS; se valida con Lighthouse/Performance en Gate 5+

## Plan de implementación (no ejecutar aún)

1. **Componentes sugeridos** (nombres y ubicación TBD):
   - Skeleton screen, Empty state, Error state, Offline banner — como componentes reutilizables
   - Ej. ubicación: `src/components/feedback/` (TBD)
2. **Hook sugerido:** wrapper que encapsule fetch + state machine → retorna `{ state, data, retry }` (API TBD)
3. Detección offline: vía API del navegador (ej. `navigator.onLine`, Connection API) — implementación TBD
4. Integrar en Dashboard, Perfil (Onboarding solo offline banner)
5. Capturar screenshots de cada estado para visual regression
6. Actualizar golden screenshots si aplica

### Aplicación por pantalla — Época 1 *(hipótesis, requiere validación en implementación)*

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

> ✅ **Aprobación (Moska): PENDIENTE** — no ejecutar implementación hasta aprobación.

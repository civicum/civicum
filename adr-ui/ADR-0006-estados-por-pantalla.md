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

Implementar un **5-state pattern** como componentes reutilizables y aplicarlos a todas las pantallas:

### Los 5 estados

| Estado | Componente | Comportamiento | Cuándo aplica |
|--------|-----------|----------------|---------------|
| **Loading** | `<ScreenSkeleton>` | Shimmer animation (Gris100→200→100, 1.5s infinite) | Fetch inicial de datos |
| **Empty** | `<EmptyState>` | Ilustración + copy contextual + CTA | Datos cargados = 0 resultados |
| **Error** | `<ErrorState>` | Toast Terracota + mensaje humano + retry | Fetch falló |
| **Offline** | `<OfflineBanner>` | Banner top informativo (no alarma) + funcionalidad degradada | `navigator.onLine === false` |
| **Success** | (inline) | Checkmark verde + texto confirmatorio | Post-acción completada |

### Aplicación por pantalla (Época 1)

| Pantalla | Loading | Empty | Error | Offline | Success |
|----------|---------|-------|-------|---------|---------|
| Dashboard | Skeleton cards | "Tu camino cívico comienza aquí" + CTA | Toast + retry | Banner + datos cacheados | — |
| Perfil | Skeleton form | — (siempre hay datos del usuario) | Toast + retry | Banner + datos locales | "Cambios guardados" |
| Onboarding | — (no fetcha datos) | — | Dialog + opción reiniciar | Banner + continuar offline | "¡Bienvenido!" |

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
- Golden screenshots: actualizar si skeleton/empty cambian apariencia de screens golden
- Performance: verificar que skeleton no aumente FCP (debe ser HTML/CSS puro, no JS)

## Plan de implementación (no ejecutar aún)

1. Crear componentes en `src/components/feedback/`: `ScreenSkeleton`, `EmptyState`, `ErrorState`, `OfflineBanner`
2. Crear hook `useScreenState(fetchFn)` que retorna `{ state, data, retry }`
3. Integrar en Dashboard, Perfil (Onboarding solo offline banner)
4. Capturar screenshots de cada estado para `tests/visual/ui-kit/`
5. Actualizar golden screenshots si aplica

## Referencias

- DOCREF: `docs/knowledge-base/CIVICUM_Diseno_UI_UX_Definitivo.md` §12 (L1356-1418)
- DOCREF: `docs-ui/traceability_matrix.md` → UI-STP-001 a UI-STP-009
- DOCREF: `docs-ui/_gate2/gaps_log.md` → GAP-006

---

> ✅ **Aprobación (Moska): PENDIENTE** — no ejecutar implementación hasta aprobación.

# 🕳️ Gate 2 — Gaps Log

**Propósito:** Registro de reglas que deberían existir pero no tienen fuente (o la fuente es insuficiente). No se resuelven aquí — opciones listadas para Gate 3+.

---

## Gaps Detectados

| GAP_ID | Qué falta | Dónde debería estar | Impacto | Opciones para resolver | ADR Draft |
|--------|-----------|---------------------|---------|----------------------|-----------|
| GAP-001 | Ruta 404: no existe ninguna pantalla ni ruta catch-all para URLs inválidas. **Gate 3:** se resuelve vía ADR de diseño (definir intención, copy y layout de 404), no esperando una fuente externa. | `04_NAVIGATION` (routing) y código `src/App.tsx` | ALTO | (A) Crear ruta catch-all con redirect a Dashboard, (B) Crear pantalla 404 personalizada con tono "Vecino Organizado" y CTA, (C) Pantalla 404 + sugerencias tipo "¿Buscabas…?" | [ADR-0004](../adr-ui/ADR-0004-diseno-404.md) (PROPOSED) |
| GAP-002 | Error handling geolocalización: no hay fallback visual definido si la geolocalización falla durante onboarding | `08_STATES_OFFLINE_PERF` y `05_PATTERNS` (onboarding) | MEDIO | (A) Fallback silencioso a selector de comuna manual, (B) Toast informativo + selector manual, (C) Dialog explícito con opciones "Intentar de nuevo" / "Elegir manualmente" | — |
| GAP-003 | Persistencia de borrador onboarding: no hay definición de guardado parcial en IndexedDB | `08_STATES_OFFLINE_PERF` | MEDIO | (A) Guardar en localStorage por step, (B) Guardar en IndexedDB por step con TTL 7 días, (C) No guardar — requerir completar en una sesión (aceptar pérdida) | — |
| GAP-004 | Smart Dock: falta tab "Más" y badges de notificación en implementación Época 1 | `04_NAVIGATION` + `02_COMPONENTS` | MEDIO | (A) Implementar "Más" como bottom sheet con módulos secundarios, (B) Implementar como drawer lateral, (C) Posponer a Época 2 cuando los módulos secundarios existan | — |
| GAP-005 | Dark mode: existe mención/referencia en fuentes (S02 menciona temas, S01 Done UI incluye dark mode como criterio), pero no hay definición completa implementable de tokens/layouts para Civicum. Se requiere ADR para establecer paleta dark si se decide implementar. | `01_TOKENS`, `03_LAYOUTS`, `00_UI_CONTRACT` | ALTO | (A) Definir paleta dark mode completa via ADR (Terracota sobre fondos oscuros), (B) Dark mode = Azul Profundo base + tokens invertidos via ADR, (C) Posponer dark mode a Época 3+ (priorizar funcionalidad, aceptar GAP) | [ADR-0005](../adr-ui/ADR-0005-dark-mode-especificacion-minima.md) (PROPOSED) |
| GAP-006 | Estados loading/error no implementados en pantallas de Época 1 (Dashboard, Perfil) | `08_STATES_OFFLINE_PERF` y código Época 1 | ALTO | (A) Implementar 5 estados en todas las pantallas existentes en Gate 5, (B) Implementar solo loading+error en Gate 5 (empty y offline en Época 2+), (C) Crear componentes genéricos de estado y dejar integración para cada módulo | [ADR-0006](../adr-ui/ADR-0006-estados-por-pantalla.md) (PROPOSED) |
| GAP-007 | Tipografía: spec define Nunito Sans + IBM Plex Sans + IBM Plex Mono, pero código Época 1 usa solo Inter. No hay fuente que autorice explícitamente Inter como alternativa. | `01_TOKENS` (tipografía) | ALTO | (A) Migrar a Nunito Sans + IBM Plex Sans (según spec), (B) Crear ADR para mantener Inter como decisión nueva, (C) Usar Inter para body + Nunito Sans para headings (híbrido) | [ADR-0007](../adr-ui/ADR-0007-tipografia-decision.md) (PROPOSED) |
| GAP-008 | PWA Assets: faltan favicon, OG image, splash icons según spec | `08_STATES_OFFLINE_PERF` (PWA) | MEDIO | (A) Generar todos los assets según spec §18.1 en Gate 5, (B) Generar mínimo (favicon + 192px + 512px) ahora, (C) Posponer a Época 4 (deploy) | — |

---

## Mapeo GAPs → Inventario Época 1

| GAP_ID | GAP Inventario (epoch1_inventory.md) | Reglas candidatas en la matriz |
|--------|---------------------------------------|-------------------------------|
| GAP-001 | G1 (No 404 route) | UI-NAV-008 |
| GAP-002 | G2 (No geo fallback) | — (ninguna regla extraída, fuente insuficiente) |
| GAP-004 | G8 (Smart Dock lacks "More" tab) | UI-CMP-006 |
| GAP-005 | G4 + G7 (Dark mode incompleto en Dashboard + AppLayout) | UI-LAY-007 |
| GAP-006 | — (detectado por inventario general) | UI-STP-009 |
| GAP-007 | — (detectado al comparar código vs spec) | — |
| GAP-008 | G13 (Missing PWA assets) | — (regla existe en spec pero no se extrajo como rule atómica) |

---

## Notas

- **Backlog gaps = 8; GAP rules en `traceability_matrix.md` = 3** (los que carecen de fuente suficiente para volverse regla: UI-LAY-007, UI-NAV-008, UI-STP-009).
- **Lifecycle policy (general):** todo GAP de impacto **ALTO** debe convertirse en ADR en Gate 3 (definir decisión, no esperar fuente externa). Una vez que el ADR sea aceptado, el GAP sale del backlog y pasa a "decisión tomada" en Gate 4.
- Los GAPs de **impacto ALTO** son: GAP-001 (404), GAP-005 (dark mode), GAP-006 (estados), GAP-007 (tipografía).
- GAP-005 (dark mode): las fuentes mencionan dark mode como criterio y referencia, pero **no contienen una definición implementable** de tokens/layouts. Se necesita un ADR para establecerlo.
- GAP-007 (tipografía): es una **desviación de implementación vs spec** (Inter en código vs Nunito Sans/IBM Plex en spec). En Gate 3 se resuelve vía ADR como *decisión*, no como ausencia. **Lifecycle:** una vez que el ADR sea aceptado en Gate 3, este GAP sale del backlog y pasa a "decisión tomada" en Gate 4 (no debe quedar como deuda perpetua).

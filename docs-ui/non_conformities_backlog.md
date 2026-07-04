# Backlog de No Conformidades (CIVICUM UI) v2

Documento vivo para rastrear todas las reglas que no poseen un estado `OK` puro, garantizando visibilidad de la deuda técnica, gaps documentales y dependencias no resueltas. 
**Revisión Obligatoria:** En cada nueva iteración y estrictamente antes de emitir un dictamen de "CERRADO" para cualquier Gate.

Última actualización: 2026-03-26 (Validación UI-NAV-001)

---

## 🎯 ORDEN DE PRIORIZACIÓN VIGENTE


1. **UI-STP-006** — primera prioridad, solo si ya se destrabó Base URLs + routing Hono
   *Motivo:* deuda importante de offline real/PWA, pero con bloqueador técnico previo.
2. **UI-NAV-003** — segunda prioridad
   *Motivo:* mejora técnica/UI dependiente de una taxonomía de navegación ya estabilizada.
3. **UI-STP-004B** — tercera prioridad
   *Motivo:* sistema de errores transaccionales/toasts; conviene abordarlo cuando entren mutaciones y formularios reales.
4. **UI-CMP-006** — cuarta prioridad
   *Motivo:* depende de backend de notificaciones e in-app messaging; no conviene adelantarlo artificialmente.

---

## 🔴 CONFLICTO

*(No hay conflictos en curso tras la formalización de ADR-0008 en Gate 5.9b).*

---

## 🟡 PARTIAL


### UI-NAV-003 (Iconografía Activa Incompleta)
- **Estado Actual:** PARTIAL
- **Fuente Formal (SSOT §9.2):** Exige *Color por módulo* y *Filled variant* al activar.
- **Implementación:** Solamente aplica un mismo color de destaque (`text-terracota-500`) y se apoya en iconografía Outline base (Lucide React).
- **Root Cause:** Restricción técnica de la librería de íconos y ausencia de la variable `--module-accent` integrada en la state machine de la app root.
- **Prioridad:** BAJA (Cosmética UI)
- **Owner:** Antigravity (Frontend)
- **Ruta de Cierre:** Ruta A (Implementación)
- **Siguiente Acción Concreta:** Desarrollar hook de propagación de color de módulo (`data-module`) en context global y wrapper para importar variante de ícono filled.
- **Dependencia / Bloqueador:** UI-TOK-007 (Vars de atmósfera sin consolidar a nivel router).
- **Gate / Release Objetivo:** Época 2 (Polish UI)
- **Fecha de Apertura:** 2026-03-23
- **Última Revisión:** 2026-03-24
- **Evidencia Asociada:** `webapp/src/components/layout/SmartDock.tsx`

### UI-CMP-006 (Ausencia de Notificaciones / Badge)
- **Estado Actual:** PARTIAL
- **Fuente Formal (SSOT §9.1+9.2):** Exige "Punto rojo 8px sin número" en "Más".
- **Implementación:** El "Más" evolucionó a un disparador de Overlay (`MoreMenu.tsx`) e incluye visualmente el RedDotBadge estipulado, pero carece de un data source dinámico para activarse/desactivarse.
- **Root Cause:** La infraestructura de notificaciones / polling y el datasource necesario para comandar el badge no existen.
- **Prioridad:** MEDIA (Features core diferidos)
- **Owner:** Antigravity (Fullstack)
- **Ruta de Cierre:** Ruta A (Implementación diferida)
- **Siguiente Acción Concreta:** Construir BD / in-app messaging y atar la visibilidad del badge en `MoreMenu.tsx` al estado del usuario logueado.
- **Dependencia / Bloqueador:** Definición funcional del backend de Notificaciones e in-app messaging.
- **Gate / Release Objetivo:** Época 3
- **Fecha de Apertura:** 2026-03-23
- **Última Revisión:** 2026-03-24
- **Evidencia Asociada:** `traceability_matrix.md` (UI-CMP-006)

---

## ⚪ NO IMPL

### UI-STP-006 (Degradación PWA / Offline.html)
- **Estado Actual:** NO IMPL
- **Fuente Formal (S03 F-07):** Exige "offline.html digno con logo + capacidades + CTA".
- **Implementación:** PWA structure absente, zero capabilities fallback cuando la app no ha sido loadeada de inicio.
- **Root Cause:** Alcance masivo que interfiere radicalmente con tooling inicial y tiempos de dev del MVP web. Diferido conscientemente.
- **Prioridad:** ALTA (Arquitectura de Resiliencia)
- **Owner:** Antigravity (DevOps / Frontend)
- **Ruta de Cierre:** Ruta A (Implementación nativa)
- **Siguiente Acción Concreta:** Integrar `vite-plugin-pwa`, configurar estrategias de caching `networkFirst` / `staleWhileRevalidate` y servir layout local html blindado.
- **Dependencia / Bloqueador:** Finalización de estabilización de Base URLs y routing del servidor Hono.
- **Gate / Release Objetivo:** Gate 6 / Época 2
- **Fecha de Apertura:** 2026-02-28
- **Última Revisión:** 2026-03-24
- **Evidencia Asociada:** `traceability_matrix.md` (UI-STP-006)

### UI-STP-004B (Error Transaccional / Toast)
- **Estado Actual:** NO IMPL
- **Fuente Formal (ADR-0008 / SSOT §12.1):** Exige "Toast Terracota + persistencia + retry funcional" para fallos en writes/mutaciones.
- **Implementación:** Inexistente.
- **Root Cause:** El foco del MVP ha sido flujos read-only y resiliencia de carga inicial; la infraestructura para estado transaccional y toasts globales no se ha abordado.
- **Prioridad:** ALTA (Prevención de pérdida de datos del usuario).
- **Owner:** Antigravity (Frontend)
- **Alcance Exacto:** Interacciones de guardado de datos (ej. formularios de reporte, profile edits) donde una falla de red o de DB rechace el guardado. La UI temporal debe persistir en el cliente y ofrecer opción nativa de reintento, notificando vía Toast/Banner sin navegar ni desechar el progreso de la pantalla.
- **Superficies Incluidas:** Formularios de creación/edición, panel de configuraciones, interacciones de submit asíncronas no esenciales que devuelven estados distintos a 2xx.
- **Exclusiones:** Fetch inicial de página, cargas críticas donde la UI no puede inicializarse (cubierto por UI-STP-004A ErrorState completo).
- **Ruta de Cierre:** Ruta A (Implementación Genuina) - Infraestructura de Toast system global ligada a providers de red.
- **Gate / Release Objetivo:** Época 3 (Mutaciones e Interacciones Complex).
- **Fecha de Apertura:** 2026-03-25
- **Última Revisión:** 2026-03-25
- **Evidencia Asociada:** `traceability_matrix.md` (Línea UI-STP-004B)

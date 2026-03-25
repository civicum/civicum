# Backlog de No Conformidades (CIVICUM UI) v2

Documento vivo para rastrear todas las reglas que no poseen un estado `OK` puro, garantizando visibilidad de la deuda técnica, gaps documentales y dependencias no resueltas. 
**Revisión Obligatoria:** En cada nueva iteración y estrictamente antes de emitir un dictamen de "CERRADO" para cualquier Gate.

Última actualización: 2026-03-24 (Gate 5.9a)

---

## 🔴 CONFLICTO

### UI-STP-004 (Error State vs Toast)
- **Estado Actual:** CONFLICTO
- **Fuente Formal (SSOT §12.1):** Exige "toast Terracota + guardado + retry".
- **Implementación (ADR-0006):** Pantalla completa `ErrorState.tsx`.
- **Root Cause:** Reemplazo de interacción local (toast) por estado global de pantalla (componente reutilizable), sin la debida actualización/aprobación explícita sobre la línea del SSOT original.
- **Prioridad:** ALTA
- **Owner:** Antigravity (Desarrollo) / Daniel (Aprobado/ADR)
- **Ruta de Cierre:** Ruta B (Sustitución por ADR)
- **Siguiente Acción Concreta:** Redactar propuesta de ADR oficial revocando el mandato "toast" e institucionalizando la pantalla completa para someterlo a aprobación de Daniel.
- **Dependencia / Bloqueador:** Confirmación directa del Owner de producto de que prefiere la pantalla completa sobre el Toast.
- **Gate / Release Objetivo:** Gate 5.9b (Resolución Documental)
- **Fecha de Apertura:** 2026-03-24 (Auditoría 5.9a)
- **Última Revisión:** 2026-03-24
- **Evidencia Asociada:** `traceability_matrix.md` (Linea UI-STP-004), UI-Kit Test (`tests/visual/ui-kit/UI-STP-004_error_desktop.png`).

---

## 🟡 PARTIAL

### UI-NAV-001 (Desviación de Copy en Smart Dock)
- **Estado Actual:** PARTIAL
- **Fuente Formal (SSOT §9.1):** Textos: *Home, Aprende, Civia, Reporta, Más*.
- **Implementación:** Textos: *Inicio, Alza la Voz, Círculos, Mi Perfil, Más*.
- **Root Cause:** El SSOT mantiene el copy de la versión original conceptual, mientras el producto pivotó sus secciones.
- **Prioridad:** MEDIA
- **Owner:** Producto / UX
- **Ruta de Cierre:** Ruta B (Actualizar SSOT/Copywriting manual)
- **Siguiente Acción Concreta:** Modificar la tabla L1129 en SSOT §9.1 o abrir un PR actualizando los labels en `SmartDock.tsx` y `SideRail.tsx`.
- **Dependencia / Bloqueador:** Decisión de producto sobre cuál es el taxonomy oficial de CIVICUM.
- **Gate / Release Objetivo:** Epoca 2 / Gate 6
- **Fecha de Apertura:** 2026-03-23
- **Última Revisión:** 2026-03-24
- **Evidencia Asociada:** `webapp/src/components/layout/SmartDock.tsx`

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
- **Implementación:** "Más" existe como disabled state, el Badge de notificaciones es inexistente.
- **Root Cause:** La infraestructura de notificaciones / polling y el datasource necesario para el badge no existen.
- **Prioridad:** MEDIA (Features core diferidos)
- **Owner:** Antigravity (Fullstack)
- **Ruta de Cierre:** Ruta A (Implementación diferida)
- **Siguiente Acción Concreta:** Modelar BD para notificaciones transaccionales y construir el `RedDotBadge` puro visualmente.
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

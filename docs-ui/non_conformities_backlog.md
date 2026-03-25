# Backlog de No Conformidades (CIVICUM UI)

Documento vivo para rastrear todas las reglas que no poseen un estado `OK` puro, garantizando visibilidad de la deuda técnica, gaps documentales y dependencias no resueltas.

Última actualización: 2026-03-24 (Gate 5.9a)

## 🔴 CONFLICTO

### UI-STP-004 (Error State)
- **Estado Actual:** CONFLICTO
- **Fuente Formal (SSOT §12.1):** Exige "toast Terracota + guardado + retry" (feedback transitorio / overlay).
- **Implementación (ADR-0006):** Pantalla completa `ErrorState.tsx`.
- **Root Cause:** El ADR-0006 implementó un patrón de pantalla completa para los 5 estados, perdiendo la característica "toast" exigida en el SSOT. El ADR no revocó normativamente esa línea del SSOT.
- **Ruta de Cierre Necesaria:** [Ruta B] Aprobar y emitir un ADR que reforme formalmente el SSOT §12.1 para legitimar el uso de página completa, o [Ruta A] deshacer `ErrorState` y construir un sistema global de Toasts.

## 🟡 PARTIAL

### UI-NAV-001 (Estructura SmartDock / SideRail Labels)
- **Estado Actual:** PARTIAL
- **Fuente Formal (SSOT §9.1):** Exige los textos: *Home, Aprende, Civia, Reporta, Más*.
- **Implementación:** Los textos duros son: *Inicio, Alza la Voz, Círculos, Mi Perfil, Más*.
- **Root Cause:** Desfase crónico entre copywriting implementado y SSOT.
- **Ruta de Cierre Necesaria:** [Ruta A] Alinear el código con el SSOT o [Ruta B] emitir ADR de copy.

### UI-NAV-003 (Iconografía Activa)
- **Estado Actual:** PARTIAL
- **Fuente Formal (SSOT §9.2):** Exige *Color por módulo* y *Filled variant* al activar.
- **Implementación:** Color único (`text-terracota-500`) y variant constante (solamente cambian CSS classes genéricas, Lucide solo ofrece outline base).
- **Root Cause:** Complejidad técnica (el swap a filled variant requiere importar el set de iconos fill explícitamente) y lógica de módulo (no propagada al layout raíz de navegación).
- **Ruta de Cierre Necesaria:** [Ruta A] Implementar tokenización por módulo y swapper dinámico de variantes filled.

### UI-CMP-006 (Badge en Smart Dock)
- **Estado Actual:** PARTIAL
- **Fuente Formal (SSOT §9.1+9.2):** Exige "Punto rojo 8px sin número" en la posición de notificaciones/Más.
- **Implementación:** La posición "Más" existe (desactivada), pero el badge punto rojo explícitamente no está.
- **Root Cause:** No hay backend real/mock de notificaciones para detonar el display, ni el componente visual aislado.
- **Ruta de Cierre Necesaria:** [Ruta A] Construir visualmente el red-dot de 8px y linkearlo a un state store.

## ⚪ NO IMPL

### UI-STP-006 (Experiencia Offline PWA Completa)
- **Estado Actual:** NO IMPL
- **Fuente Formal (S03 F-07):** Exige "offline.html digno con logo + capacidades + CTA" nativo del Service Worker.
- **Implementación:** No se generó la infraestructura PWA (sin manifest, sin Service Worker, sin fallback estático HTTP). La app solo ofrece `OfflineBanner` si el browser pierde red estando la SPA ya cargada.
- **Root Cause:** Scope masivo pospuesto explícitamente. Se priorizó infraestructura inicial SPA sin capabilities nativas móviles PWA web.
- **Ruta de Cierre Necesaria:** [Ruta A] Implementar Vite PWA Plugin, registrar Service Worker y servir capa fallback offline.

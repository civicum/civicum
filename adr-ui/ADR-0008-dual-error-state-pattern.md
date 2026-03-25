# ADR-0008: Patrón Dual de Estados de Error

- **Estado:** ACCEPTED
- **Fecha:** 2026-03-25
- **Autor:** Antigravity / Daniel
- **Supersede:** Parcialmente a ADR-0006 y regla original UI-STP-004.

---

## Contexto

La regla documental original `UI-STP-004` exigía el uso de un patrón único para errores: *"Toast Terracota + guardado + retry"*. No obstante, durante las integraciones en producción (Gate 5.3 a 5.7), se constató que la aplicación posee dos dominios de falla incompatibles con una interfaz unificada:
1. **Errores críticos de layout o de carga inicial** (ej. caída completa de base de datos) que vuelven inoperativa la vista actual.
2. **Errores transaccionales o no bloqueantes** (ej. fallos en submits de formularios o acciones secundarias) que permiten al usuario continuar usando el resto de la interfaz o reintentar sin perder su contexto.

Tratar de forzar el patrón Toast (UI-STP-004) para fallas de carga masiva resultaba en pantallas blancas rotas bajo un toast, lo cual motivó la adopción del componente de pantalla completa `ErrorState.tsx` (registrado en ADR-0006). Esto generó una no conformidad formal temporal (Ruta C - Conflicto Documental).

## Decisión

Se decide adoptar formalmente el **Patrón Dual de Estados de Error** y dividir la regla original `UI-STP-004` en dos normativas atómicas con su respectiva gobernanza y trazabilidad:

### 1. UI-STP-004A: Error de Layout Crítico / Fetch Inicial
- **Patrón:** Full-screen (`ErrorState.tsx`).
- **Uso:** Fallos catastróficos, interrupciones al montar la estructura base de una vista, o caídas de conectividad pura contra el backend sin caché disponible.
- **Acción esperada:** Bloquear UI parcial/totalmente con explicación contextual y otorgar botón prominente de reintento ("Volver a intentar").

### 2. UI-STP-004B: Error Transaccional / No Bloqueante
- **Patrón:** Contextual (Toast / Banner Terracota + persistencia + retry).
- **Uso:** Fallos en mutaciones de datos (POST/PUT/DELETE), fallos en carga de widgets secundarios no esenciales, desincronización de un guardado en segundo plano.
- **Acción esperada:** Preservar la UI operativa, informar el fallo temporal, retener los datos en local y ofrecer un mecanismo de retry o descarte manual.

## Consecuencias

- **Positivas:** Resolución del conflicto doc-código, claridad total sobre las superficies de testing (distintas para bloqueantes vs. mutaciones), y un backlog honesto de lo que realmente falta por desarrollar para interacciones transaccionales.
- **Negativas:** Obliga a diseñar y testear flujos diferentes según el tipo de data fetching (ej. `useQuery` vs `useMutation`), incrementando el número de E2Es.

## Referencias

- DOCREF: `docs-ui/08_STATES_OFFLINE_PERF.md` (Sección 5-state pattern)
- DOCREF: `docs-ui/traceability_matrix.md` (Entradas UI-STP-004A y UI-STP-004B)
- DOCREF: `docs-ui/non_conformities_backlog.md` (Backlog explícito transaccional)

---

> ✅ **Aprobación (Daniel): ACCEPTED** — Patrón Dual aprobado conceptualmente en Gate 5.9b.

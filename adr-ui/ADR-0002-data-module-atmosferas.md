# ADR-0002: Implementación de `data-module` para cambio de atmósfera cromática

- **Estado:** PROPOSED
- **Fecha:** 2026-02-25
- **Autor:** Antigravity (para aprobación de Moska)
- **Afecta:** UI-TOK-007, UI-NAV-004, UI-PAT-002 | CONFLICT-001
- **Supersede:** —

---

## Contexto

La spec de diseño (S01 → §2.7, §9.3) define que cada módulo CIVICUM debe usar un atributo `data-module` en su contenedor raíz para activar variables CSS `--module-accent` y `--module-bg`, generando un "cambio de atmósfera" cromática al navegar entre módulos.

El código de Época 1 **no implementa** `data-module`. El AppLayout y las vistas no aplican esta convención. Esto genera CONFLICT-001 entre la spec documental y la realidad del código.

- **DOCREF:** S01 → §2.7 → `[data-module='mi-civicum'] { --module-accent: var(--color-azul-500) }` (L355)
- **DOCREF:** S01 → §9.3 → "Cada cambio de módulo es un cambio de atmósfera" (L1152)

## Decisión (propuesta)

Implementar `data-module` en el contenedor raíz de cada módulo, asignando el atributo según la ruta activa. Los valores corresponden a los 6 módulos definidos en la spec (DOCREF: S01 → §2.7, L351-371 selectores CSS; S01 → §20, L1749-1754 estructura de carpetas):

`mi-civicum`, `academia`, `civia`, `alza-la-voz`, `cuentas-claras`, `voto-ciudadano`

Las CSS variables `--module-accent` y `--module-bg` se definirán con los selectores `[data-module="xxx"]`.

> **Nota:** "Círculos" no aparece como módulo en la spec de diseño (S01). Si se añade como módulo en futuras épocas, se deberá extender esta lista con DOCREF correspondiente.

## Alternativas Consideradas

### Alternativa A: Implementar vía `data-module` en contenedor raíz (propuesta)
- **Pros:** Alineado 1:1 con la spec, CSS puro (sin JS para theming), un solo punto de control
- **Contras:** Requiere refactor del AppLayout para inyectar el atributo dinámicamente

### Alternativa B: Implementar vía Zustand + className condicional
- **Pros:** Más familiar para devs React, ya existe store Zustand
- **Contras:** Diverge de la spec (no usa `data-module`), acopla theming a JS, más difícil de auditar visualmente

### Alternativa C: Posponer a Época 2 (solo Dashboard y Perfil existen hoy)
- **Pros:** No tocamos código innecesariamente, solo 2 módulos activos
- **Contras:** El conflicto sigue abierto, deuda acumula, futuras pantallas nacerían sin convención

## Consecuencias

- **Positivas:** Resuelve CONFLICT-001, habilita regresión visual por módulo, establece convención para Época 2+
- **Negativas:** Estimación ~2-4h de implementación en contenedor raíz + tokens CSS
- **Riesgos:** Si se elige Alternativa C, la deuda se multiplica con cada módulo nuevo. Si se elige A, hay riesgo bajo de regresión en las 2 vistas existentes.

## Verificación (Gate 5+)

- Visual regression: Golden screenshots deben mostrar acento correcto por módulo
- E2E: Playwright test que navega entre módulos y verifica `data-module` attribute en DOM
- UI-kit: No aplica (es layout, no componente aislado)

## Plan de implementación (no ejecutar aún)

1. Agregar CSS variables `[data-module="xxx"]` en archivo de tokens (ubicación TBD)
2. En el contenedor raíz (ej. `AppLayout`), derivar `data-module` de la ruta activa (mecanismo TBD)
3. Aplicar `data-module` al contenedor principal
4. Verificar desktop + mobile para Dashboard y Perfil
5. Actualizar golden screenshots si los colores cambian visiblemente

## Referencias

- DOCREF: `docs/knowledge-base/CIVICUM_Diseno_UI_UX_Definitivo.md` §2.7 (L355)
- DOCREF: `docs/knowledge-base/CIVICUM_Diseno_UI_UX_Definitivo.md` §9.3 (L1152)
- DOCREF: `docs-ui/traceability_matrix.md` → UI-TOK-007, UI-NAV-004, UI-PAT-002
- DOCREF: `docs-ui/_gate2/conflicts_log.md` → CONFLICT-001

---

> ✅ **Aprobación (Moska): PENDIENTE** — no ejecutar implementación hasta aprobación.

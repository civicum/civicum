# ADR-0009: Taxonomía de Navegación Oficial

- **Estado:** ACCEPTED
- **Fecha:** 2026-04-15
- **Autor:** Daniel (PO)
- **Supersede:** —

---

## Contexto

UI-NAV-001 (MUST) define el orden y labels del dock de navegación principal. El SSOT original (S01 → §9.1) usaba labels provisionales (Home / Aprende / Civia / Reporta / Más) que fueron refinados durante Gate 6 (Ruta C) para alinearse con la voz de marca (UI-CNT-001: "Vecino Organizado", UI-CNT-002: registro tú/cercano) y eliminar anglicismos.

La implementación actual en SmartDock.tsx y SideRail.tsx usa la taxonomía refinada, pero el SSOT fuente no fue actualizado formalmente, dejando UI-NAV-001 en estado de drift documental.

## Decisión

Se oficializa la siguiente taxonomía como canónica para toda superficie de navegación (SmartDock, SideRail, y futuros componentes de navegación):

| Posición | Label oficial | Ruta        | Icono (Lucide) |
|----------|--------------|-------------|----------------|
| 1        | Inicio       | `/`         | Home            |
| 2        | Academia     | `/academia` | GraduationCap   |
| 3        | Civia        | `/civia`    | Bot             |
| 4        | Alza la Voz  | `/alza-la-voz` | Lightbulb    |
| 5        | Más          | overlay     | —               |

Redirección activa: `/circulos` → `/alza-la-voz`.

Esta decisión reemplaza los labels provisionales del SSOT original y constituye la fuente normativa para UI-NAV-001 en adelante.

## Alternativas Consideradas

### Alternativa A: Oficializar taxonomía implementada (elegida)
- **Pros:** Cierra drift. Costo cero (ya implementado). Labels coherentes con voz de marca.
- **Contras:** Diverge del SSOT original en 3 de 5 labels.

### Alternativa B: Revertir implementación al SSOT original
- **Pros:** Consistencia con documento fuente sin modificarlo.
- **Contras:** Deshace Gate 6. Costo técnico alto (~2-4h). Reintroduce anglicismo ("Home"). "Reporta" es menos expresivo que "Alza la Voz".

### Alternativa C: Solución híbrida
- **Pros:** Avance parcial sin forzar todas las decisiones de tono.
- **Contras:** Deja drift parcial abierto. Complejidad de gestión.

## Consecuencias

- **Positivas:** UI-NAV-001 pasa a OK. Elimina drift entre código y docs. Labels coherentes con UI-CNT-001/002.
- **Negativas:** El Anexo MVP §2 queda desactualizado respecto a esta decisión; se considera documento histórico de diseño, no normativo para navegación.
- **Riesgos:** Ninguno operativo. La implementación ya está integrada en el baseline actual y validada por E2E.

## Referencias

- DOCREF: `docs-ui/traceability_matrix.md` → UI-NAV-001
- DOCREF: `docs-ui/04_NAVIGATION.md` → TODO item actualizado
- DOCREF: `docs-ui/_reentry/UI_NAV_001_RECONCILIATION_MEMO.md` — análisis de opciones
- DOCREF: S01 → §9.1 (labels originales, histórico) + §15.1 (voz de marca)

---

> ✅ **Aprobación (Daniel): ACCEPTED** — 2026-04-15. Taxonomía oficializada por reconciliación documental post Gate 6.

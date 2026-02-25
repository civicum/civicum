# ⚠️ Gate 2 — Conflicts Log

**Propósito:** Registro de contradicciones detectadas entre fuentes. No se resuelven aquí — Gate 3 las resuelve vía ADR.

---

## Conflictos Detectados

| CONFLICT_ID | Regla A + DOCREF | Regla B + DOCREF | Qué contradice exactamente | ADR sugerido (título) |
|-------------|------------------|------------------|---------------------------|----------------------|
| CONFLICT-001 | UI-TOK-007: Módulos MUST usar `data-module` + `--module-accent` para cambio de atmósfera cromática. DOCREF: S01 → §2.7 (L355) | Inventario Época 1 (`epoch1_inventory.md` → GAP G9): "No hay cambio atmospheric (`data-module`) al navegar entre módulos". El código actual NO implementa `data-module`. | La fuente de diseño exige `data-module` en cada módulo, pero el código de Época 1 no lo implementa. No es un conflicto entre documentos sino entre documento y realidad. | ADR: "Implementación de `data-module` para cambio de atmósfera — prioridad y scope" |
| CONFLICT-002 | UI-LAY-001: Breakpoints oficiales incluyen XS=360px como breakpoint #1 (mobile-first). DOCREF: S01 → §6.1 (L618) | `03_LAYOUTS.md` (skeleton, aún sin reglas) + README Done UI → "Cumple breakpoints definidos en `03_LAYOUTS`". El skeleton no tiene breakpoints documentados aún, y Tailwind actual usa `sm=640px` (no 480px), `md=768px`, `lg=1024px` — sin `xs=360px`. | El UX Definitivo define 6 breakpoints incluyendo XS=360px y SM=480px, pero Tailwind defaults y el código actual usan diferentes breakpoints. ¿Se extiende Tailwind o se aceptan los defaults? | ADR: "Breakpoints oficiales vs Tailwind defaults — extensión de config" |

---

## Notas

- **CONFLICT-001** es código↔doc (más que doc↔doc). Se podría resolver como GAP de implementación, pero la escala del cambio (6 módulos) justifica ADR.
- **CONFLICT-002** requiere decisión técnica: extender Tailwind con breakpoints custom (xs, sm) afecta todo el sistema.
- Ambos conflictos son de impacto ALTO.

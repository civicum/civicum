# UI-NAV-001 — Memo de Decisión: Reconciliación de Taxonomía de Navegación

**Fecha:** 2026-04-14
**Regla:** UI-NAV-001 (MUST)
**Estado histórico en matriz al redactar memo:** PARTIAL
**Decisor esperado:** Daniel (Product Owner)

> **Nota de vigencia:** Memo histórico/no normativo. La fuente vigente para UI-NAV-001 es ADR-0009 junto con la matriz actual del PR Draft.

---

## 1. Estado actual

| Dimensión | SSOT vigente (Anexo MVP §2) | Implementación actual (SmartDock/SideRail) |
|-----------|----------------------------|-------------------------------------------|
| Tab 1 | Home | Inicio |
| Tab 2 | Aprende | Academia |
| Tab 3 | Civia | Civia |
| Tab 4 | Reporta | Alza la Voz |
| Tab 5 | Más | Más |

**Rutas implementadas:** `/` (Inicio), `/academia`, `/civia`, `/alza-la-voz`, overlay Más.
**Redirección activa:** `/circulos` → `/alza-la-voz`.

---

## 2. Diff semántico

| Pos | SSOT label | Impl label | Cambio semántico |
|-----|-----------|------------|-----------------|
| 1 | Home | Inicio | Traducción al español. Consistente con tono "Vecino Organizado" (UI-CNT-002: tú, no usted). Elimina anglicismo. |
| 2 | Aprende | Academia | Ampliación: de acción (aprender) a institución (academia). Más formal, menos invitacional. |
| 3 | Civia | Civia | Sin cambio. |
| 4 | Reporta | Alza la Voz | Cambio de tono significativo: de acción directa/utilitaria a expresión cívica/emocional. Ruta cambia de `/reporta` a `/alza-la-voz`. |
| 5 | Más | Más | Sin cambio. |

**Impacto en navegación:** Ninguno funcional — las rutas resuelven correctamente.
**Impacto en tono:** Positivo — "Inicio" y "Alza la Voz" son más coherentes con la voz de marca (UI-CNT-001).
**Impacto en consistencia:** Negativo mientras SSOT y código digan cosas distintas.

---

## 3. Justificación observable

- **Gate 6 / Ruta C** implementó la taxonomía actual tras evaluación de tres opciones (Ruta A, B, C). Ruta C fue aprobada operativamente en conversación `92e6c97e`.
- **Evidencia documental:** `traceability_matrix.md` fila UI-NAV-001 registra "Gate 6 (Ruta C) implementado". `local_close_ui_nav_001_runbook.md` queda como referencia histórica fuera del PR/en cuarentena; no debe usarse como evidencia activa de cierre.
- **No reconciliado:** El Anexo MVP §2 (documento SSOT fuente) no fue actualizado. La aprobación de Ruta C fue operativa, no documental.

---

## 4. Opciones de decisión

### Opción 1: Oficializar taxonomía implementada

Actualizar Anexo MVP §2 con labels/rutas actuales.

- **Ventajas:** Cierra PARTIAL → OK. Elimina drift. Un solo commit documental.
- **Riesgos:** Modifica SSOT fuente — requiere aprobación formal del PO.
- **Docs afectados:** `CIVICUM_Anexo_Modulos_MVP_Especificacion_Exhaustiva.docx.md` (§2), `traceability_matrix.md`.
- **Costo:** ~30 min. Solo docs.

### Opción 2: Revertir implementación al SSOT original

Cambiar código a Home/Aprende/Civia/Reporta/Más.

- **Ventajas:** Consistencia con documento fuente sin modificarlo.
- **Riesgos:** Deshace trabajo de Gate 6. Rompe redirección `/alza-la-voz`. Requiere nuevo ciclo E2E. Posible regresión.
- **Docs afectados:** `SmartDock.tsx`, `SideRail.tsx`, `AppLayout.tsx`, rutas, `traceability_matrix.md`.
- **Costo:** ~2-4 horas. Código + tests + docs.

### Opción 3: Híbrida — oficializar parcial

Oficializar solo los cambios no controversiales (Home→Inicio, Civia=Civia, Más=Más) y abrir decisión formal para Aprende→Academia y Reporta→Alza la Voz.

- **Ventajas:** Avance parcial sin forzar decisiones de tono.
- **Riesgos:** Deja PARTIAL abierto. Complejidad de gestión para 2 labels pendientes.
- **Docs afectados:** Los mismos que Opción 1, pero con nota de pendiente.
- **Costo:** ~1 hora. Docs + seguimiento.

---

## 5. Recomendación

**→ Opción 1: Oficializar taxonomía implementada.**

Argumento: La taxonomía actual (Inicio/Academia/Civia/Alza la Voz/Más) es más coherente con la voz de marca definida en UI-CNT-001/002, fue aprobada operativamente en Gate 6, y revertirla tendría costo técnico sin beneficio de producto. El drift existe solo en el documento fuente, no en la experiencia de usuario.

**Siguiente paso:** Documental — actualizar Anexo MVP §2 y cerrar UI-NAV-001 en `traceability_matrix.md` con un solo commit.

---

## Resolución final

> **Decisión ejecutada:** La taxonomía se oficializó mediante **ADR-0009**, no mediante edición del Anexo MVP §2. El Anexo queda como documento histórico de diseño. El SSOT normativo para UI-NAV-001 es `adr-ui/ADR-0009-taxonomia-navegacion-oficial.md`.
>
> La recomendación original de este memo (Opción 1: editar Anexo MVP) fue descartada tras verificar que el Anexo no es fuente normativa para navegación según `docs-ui/README.md`.
>
> **Fecha de cierre:** 2026-04-15

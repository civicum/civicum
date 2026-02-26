# 📝 ADR — Architecture Decision Records (UI)

**Ubicación:** `/adr-ui/`
**Convención:** Toda decisión arquitectónica de UI que introduzca, modifique o elimine un patrón, token, regla de navegación o contrato de componente **debe** documentarse como un ADR.

---

## ¿Qué es un ADR?

Un **Architecture Decision Record** es un documento corto e inmutable que captura:
- **Por qué** se tomó una decisión técnica
- **Qué** alternativas se evaluaron
- **Cuáles** son las consecuencias esperadas

Los ADRs son la memoria institucional del proyecto. Nunca se borran; si una decisión se revierte, se crea un nuevo ADR que la **supersede** (referenciando el anterior).

---

## ¿Cuándo se requiere un ADR?

Se **requiere** un ADR antes de:
- Introducir un nuevo token o modificar la escala de tokens existentes
- Agregar un componente UI que no exista en el catálogo actual
- Cambiar el sistema de navegación o agregar nuevas rutas protegidas
- Modificar el contrato de `AppLayout` o crear un layout alternativo
- Cambiar la estrategia de dark mode, accesibilidad o estados offline
- Adoptar o descartar una dependencia de UI (ej.: nueva librería de animaciones)
- Cualquier cambio que afecte a más de 3 archivos de UI simultáneamente

**No** se requiere para:
- Correcciones menores de estilo (typos CSS, ajustes de espaciado < 4px)
- Bug fixes que restauren comportamiento ya documentado
- Actualización de screenshots de baseline

---

## Convención de Numeración

```
ADR-NNNN-slug-descriptivo.md
```

- `NNNN`: número secuencial de 4 dígitos, empezando en `0001`
- `slug`: kebab-case describiendo la decisión (máx 5 palabras)
- `0000` está reservado para la **plantilla**

Ejemplos:
- `ADR-0001-ssot-ui-docs.md`
- `ADR-0002-dark-mode-strategy.md`
- `ADR-0003-remove-framer-motion.md`

---

## Estado de un ADR

| Estado | Significado |
|--------|-------------|
| `PROPOSED` | En borrador, abierto a feedback |
| `ACCEPTED` | Aprobado, se puede implementar |
| `SUPERSEDED` | Reemplazado por un ADR posterior (enlazado) |
| `REJECTED` | Evaluado y descartado (se conserva para registro) |

---

## Cómo se decide "ACCEPTED"

1. El autor crea el ADR usando la plantilla `ADR-0000-template.md`
2. Se revisa en el contexto del proyecto (coherencia con SSOT, impacto técnico)
3. Si hay consenso, se cambia el estado a `ACCEPTED` y se fecha
4. El cambio correspondiente se implementa en código y se actualiza el archivo del pack (00–09) en `/docs-ui/`

---

## Índice de ADRs

| # | Título | Estado | Fecha |
|---|--------|--------|-------|
| [ADR-0001](./ADR-0001-ssot-ui-docs.md) | SSOT para documentación UI | ACCEPTED | 2026-02-24 |
| [ADR-0002](./ADR-0002-data-module-atmosferas.md) | `data-module` para atmósferas cromáticas | ACCEPTED | 2026-02-26 |
| [ADR-0003](./ADR-0003-breakpoints-oficiales-vs-tailwind.md) | Breakpoints oficiales vs Tailwind defaults | ACCEPTED | 2026-02-26 |
| [ADR-0004](./ADR-0004-diseno-404.md) | Diseño de pantalla 404 | ACCEPTED | 2026-02-26 |
| [ADR-0005](./ADR-0005-dark-mode-especificacion-minima.md) | Dark mode — especificación mínima | ACCEPTED | 2026-02-26 |
| [ADR-0006](./ADR-0006-estados-por-pantalla.md) | Estados obligatorios por pantalla (5-state) | ACCEPTED | 2026-02-26 |
| [ADR-0007](./ADR-0007-tipografia-decision.md) | Tipografía — Inter vs Nunito Sans + IBM Plex | ACCEPTED | 2026-02-26 |

# 📦 UI Architecture Pack — Versión

**Versión actual:** `0.1.0`
**Fecha:** 2026-02-24
**Gate activo:** Gate 1 (SSOT + ADR + Skeleton)

---

## Política de Versionado (SemVer adaptado)

| Tipo | Cuándo incrementar | Archivos que lo disparan |
|------|-------------------|--------------------------|
| **MAJOR** (X.0.0) | Cambio que rompe comportamiento o expectativas de UI | `00_UI_CONTRACT`, `04_NAVIGATION` |
| **MINOR** (0.X.0) | Cambio que modifica el sistema sin romperlo | `01_TOKENS`, `02_COMPONENTS`, `03_LAYOUTS`, `05_PATTERNS`, `07_A11Y` |
| **PATCH** (0.0.X) | Aclaraciones, editoriales, ejemplos sin impacto normativo | `06_CONTENT_STYLE`, `08_STATES_OFFLINE_PERF`, `09_GOVERNANCE`, README, golden_screens |

## Reglas

1. Cada commit que modifique un archivo del pack (00–09) debe evaluar si requiere bump de versión.
2. El bump se registra aquí (versión + fecha + gate + descripción breve).
3. Artefactos transversales (golden_screens, traceability_matrix) no disparan bump por sí solos, salvo que modifiquen reglas del pack.

## Historial

| Versión | Fecha | Gate | Descripción |
|---------|-------|------|-------------|
| `0.1.0` | 2026-02-24 | Gate 1 | Skeleton completo 00–09, SSOT declarado, ADR system, golden_screens, governance |

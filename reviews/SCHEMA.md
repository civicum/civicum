# Schema de Hallazgos — CIVICUM Reviews

Este documento define el formato estándar para normalizar hallazgos de expertos.

## Estructura de un Hallazgo

```yaml
id: FINDING-XXXX
source:
  expert: "[Nombre del experto]"
  report: "[Nombre del informe]"
  date: "YYYY-MM-DD"
target:
  document: "[Doc afectado]"
  section: "[Sección específica]"
  line_range: "[Opcional: líneas]"
classification:
  type: "[error | inconsistencia | mejora | pregunta | crítico]"
  severity: "[alta | media | baja]"
  category: "[requisitos | arquitectura | datos | api | seguridad | privacidad | ux | testing | otro]"
content:
  title: "[Título breve del hallazgo]"
  description: "[Descripción detallada]"
  recommendation: "[Acción sugerida]"
  evidence: "[Cita o referencia al informe original]"
status:
  state: "[nuevo | duplicado | aceptado | rechazado | implementado]"
  decision_ref: "[Referencia a decision-log si aplica]"
  notes: "[Notas adicionales]"
```

## Reglas de Normalización

1. Cada hallazgo tiene un ID único: `FINDING-XXXX`
2. Un hallazgo = un problema/mejora específico
3. Si un experto reporta múltiples issues, se separan en hallazgos individuales
4. Hallazgos duplicados se marcan y referencian al original
5. Todo hallazgo debe tener al menos: id, source, target, classification, content.title

## Estados del Hallazgo

| Estado | Descripción |
|--------|-------------|
| `nuevo` | Recién normalizado, pendiente de revisión |
| `duplicado` | Ya existe otro hallazgo igual (referenciar) |
| `aceptado` | Se implementará el cambio |
| `rechazado` | No se implementará (documentar razón) |
| `implementado` | Cambio realizado y verificado |

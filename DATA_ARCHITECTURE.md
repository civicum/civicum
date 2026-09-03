# DATA ARCHITECTURE — SNID (Sistema Nacional de Integración de Datos de Civicum)
**Versión: 1.0.0 | Fecha: 2026-08-05 | Autor: Principal Software Architect / Data Architect**

---

## 1. Filosofía y Principios del SNID

### 1.1 Propósito
El SNID es la capa permanente de datos de Civicum. Su misión es garantizar que cada número mostrado a un ciudadano tenga una **trazabilidad completa** hasta su fuente oficial, sin importar cuántos años pasen ni cuántas fuentes nuevas se agreguen.

### 1.2 Principios (por orden de prioridad)
| # | Principio | Significado práctico |
|---|-----------|---------------------|
| 1 | **Precisión sobre cobertura** | Un indicador con 10 años de datos verificados es mejor que uno con 70 años de estimaciones. |
| 2 | **Transparencia radical** | Toda laguna, interpolación o estimación se declara explícitamente en la UI y se audita. |
| 3 | **Simplicidad incremental** | Se empieza con lo simple que funciona → se agrega complejidad solo cuando la necesidad real la fuerza. |
| 4 | **Reproductibilidad total** | Cualquier persona con el mismo código y los mismos archivos fuente obtiene exactamente el mismo dataset final. |
| 5 | **Separación fuente ↔ transformación ↔ presentación** | El dato crudo se almacena sin tocar. La transformación es determinística. La presentación es otro paso independiente. |
| 6 | **Evolución orgánica** | La arquitectura cambia solo cuando una fuente real lo impone, no por moda técnica. |
| 7 | **Diseño sin dependencia propietaria** | Toda herramienta usada en el pipeline debe ser reemplazable por otra equivalente sin romper el sistema. |

---

## 2. Objetivos del SNID

1. **Centralizar la entrada de datos**: una única interfaz (clase `DataSource`) para conectar nuevas fuentes.
2. **Normalizar automáticamente**: tasas (%) a escala 0-100, moneda a CLP constantes año base 2020, fechas a ISO 8601.
3. **Validar en múltiples etapas**: al ingresar, al transformar, al unir datasets, antes de exponer.
4. **Versionar cada snapshot** del dataset final.
5. **Permitir auditoría completa** desde el valor en pantalla hasta el archivo CSV original.
6. **Escalar a nuevas fuentes sin refactorar el core**: agregar un conector es copiar una plantilla de ~50 líneas.
7. **Actualizar automáticas fuentes con API**, con fallback a proyección conservadora si una fuente falla temporalmente.

---

## 3. Arquitectura General

```
┌────────────┐    ┌─────────────────────┐    ┌───────────────────┐    ┌─────────────┐
│ FUENTES    │ → │ CONECTORES          │ → │ MOTOR DE DATOS    │ → │ EXPOSICIÓN  │
│ OFICIALES  │    │ (pipelines)         │    │ (transformación)  │    │ (API/Hooks) │
└────────────┘    └─────────────────────┘    └───────────────────┘    └─────────────┘
 INE, CASEN,       data/connectors/         data/core/engine.ts      backend/api
 BCCh, DIPRES,     <fuente>/fetch.ts        +normalize.ts              + React hooks
 MINEDUC, SISS     _validate.ts             +derive.ts                getPoblacion()
                   _cache/                  +index.ts                 getGastoE...
```

**Capas lógicas:**
- **Ingestión (connectors)**: obtienen datos de una fuente y los transforman en `IndicatorRecord[]`.
- **Procesamiento (core/engine)**: normaliza (moneda constante, escalas), deriva indicadores secundarios, ensambla el dataset final enriquecido.
- **Exposición (API + hooks)**: sirve el dataset al frontend (vía API o carga estática en construcción).
- **Persistencia (Neon PostgreSQL)**: almacena el `snapshot` final versionado.

---

## 4. Flujo Completo del Dato

```
Fuente oficial (CSV, API, Excel)
    ↓ [connector/fetch.ts]
Archivo RAW en data/raw/<fuente>/ (inmutable, se guarda con hash)
    ↓ [validate.ts]
Archivo VALIDATION_REPORT.md (autogenerado, marca errores/residuos)
    ↓ [normalize.ts]
Archivo NORMALIZED en data/interim/<fuente>_normalized.csv
    ↓ [engine/merge.ts]
TAILAS set merged: data/final/enriched_dataset.ts (TypeScript) +
                  metadata.json (source fingerprint, hash, fecha)
    ↓ [build/step]
Proceso de build lee enriched_dataset.ts y lo empaqueta en el bundle final
                (en el futuro, un endpoint /api/data/{year} puede servirlo dinámicamente)
    ↓ [frontend]
Usuarios consumen datos vía funciones importadas (getPoblacion(year) etc.)
```

---

## 5. Componentes y Responsabilidades

| Componente | Directorio / Responsable | Función |
|------------|--------------------------|---------|
| **Connectors** | `webapp/src/data/connectors/` | Obtener datos de una fuente específica y producir `IndicatorRecord[]` |
| **Validator** | `webapp/src/data/core/validate.ts` | Aplicar reglas estadísticas (outlier detection, gap check, consistency) |
| **Normalizer** | `webapp/src/data/core/normalize.ts` | Asegurar que unidades, escalas y formatos son homogéneos (CLP 2020, porcentajes 0-100, etc.) |
| **Derivation Engine** | `webapp/src/data/core/derive.ts` | Calcular indicadores derivados (per cápita, ratios) a partir de datos base |
| **Merge Engine** | `webapp/src/data/core/merge.ts` | Combinar todos los conectores normalizados en un único `EnrichedDataset` |
| **Metadata Store** | `webapp/src/data/catalog/metadata.ts` | Registro inmutable de cada fuente y cada corrida. |
| **Expositor** | `server/src/api/indicators.ts` + `webapp/src/pages/cuentas-claras/presupuestoDataEnriquecido.ts` | Expose el dataset final con helper functions |
| **Build Step `generateDataModule`** | `webapp/scripts/buildDataModule.ts` | Ensamble final TypeScript file from normalized intermédiate files. |

---

## 6. Estrategia de Validación y Control de Calidad (QC)

### 6.1 Multi-stage gates
1. **Raw check**: el archivo descargado no debe estar corrupto (tamaño > 0, parseable).
2. **Schema check**: las cabeceras/keys deben concordar con el `contracto` del conector (definido en cada fetch.ts).
3. **Domain check**: si un valor está fuera del rango esperado (población < 0, tasa < 0 o > 100), es marcado como minor y sigue el análisis; inverosímil es detenido y reportado.
4. **Cross-source consistency** (Gate 4): en el merge, se comparan indicadores que aparecen en múltiples fuentes (ej. población del INE ≈ population del World Bank); la diferencia > 5% se eleva a sujeto de revisión.

### 6.2 Corrección de errores
- No se corrigen automáticamente valores que el validador marca mal.
- El metadata de la corrida incluye `qc_flagged_rows` y `explain_actions`.
- Los flags se muestran en la UI como tooltip/nota "Este dato no pasa control de calidad — fuente original en revisión".

---

## 7. Estrategia de Normalización

| Aspecto | Norma |
|---------|-------|
| **Moneda** | Convertir todo a CLP constantes año 2020 usando el IPC oficial del Banco Central. |
| **Longitud (%)** | 0–100 (0 a 1 en almacenamiento interno, 0-100 en presentación). |
| **Fechas** | Año como entero (1955, 1956,…). Frecuencia: siempre anual. Trimestral se promedia/anualiza (o se almacena trimestre, compatible). |
| **Unidades** | Absoluta enteros para conteos (población, matrícula). Racional (64 bits) para ratios. |
| **Códigos geográficos** | Se usan los IDs semánticos de regi´on y comuna definidos en `db/schema.ts` (r01, c0701, etc). Si una fuente usa otro código, el conector incluye mapping. |

---

## 8. Estrategia de Versionado del Dataset

- Cada corrida del pipeline produce un **build_tag** único: `YYYY-MM-DD_hhmm` + git commit hash.
- El dataset final se guarda con ese tag (archivo `enriched.full.{tag}.tsv`).
- El módulo TypeScript activo siempre apunta al último tag estable que pasó todas las pruebas.
- Historial de cambios se registra en `data/final/CHANGELOG.md`.
- Se conservan mínimo las últimas 10 versiones completas.

---

## 9. Estrategia de Trazabilidad y Autoría

- Cada `IndicatorRecord` tiene la propiedad `sourceRunId` que apunta a la entrada en `metadata.json`.
- La interfaz de usuario muestra **tooltip de fuente**: «Fuente: INE, Proyección poblacional 2024 (base Censo 2024), descargado 2026-08-05».
- En el panel de auditoría (futuro) se podrá listar cada valor y su recorrido.
- Los archivos RAW se conservan in forever como evidencia.

---

## 10. Estrategia de Actualización Automática

| Método | Caso de uso |
|--------|-------------|
| **APIs (Best)** | Banco Central — se puede programar un cron semanal con credenciales, obtiene nuevas filas. |
| **Carga manual + script** | Fuentes tipo DIPRES o SISS donde los archivos CSV se publican bajo URL fija—`pnpm run data:update` reapunta a la URLs known. |
| **Recordatorio por cron y mail** | INE Stat: job cada mes que verifica si hay un archivo nuevo, y si sí, notifica al administrador para descarga manual (se necesita interacción por login). |
| **Warm standby** | Para la mínima cobertura offline, una copia local del último dataset válido se mantiene en el Service Worker de la PWA. |

---

## 11. Manejo de Errores

| Error | Estrategia |
|-------|------------|
| **Connector timeout o fallo de red** | Reintento 3x, luego fallback al dato anterior (flag preserve). |
| **Archivo corrompido** | Se descarta. El dataset permanece en su última versión buena. |
| **Incompatibilidad de schema** | El pipeline aborta BUILD. Se notifica al operador. Se usa validate.ts para detectarlo. |
| **Inconsistencia de fuente entre ellas** | Se genera alerta en CI. No se avisa hasta que un humano la revisa. |
| **Datos de cobertura incompleta** | Se registra como `coverage_gaps` en metadatos. En la UI, le falta a un año una línea punteada que dice "dato no disponible". |

---

## 12. Escalabilidad

- **Nuevas fuentes**: se agrega carpeta `connectors/nueva_fuente/fetch.ts` + registro en `DATA_CATALOG.md`. El merge engine detecta columnas automáticamente.
- **Max de datos**: para millones de registros (ej. todas las comunas anualmente), se pasa a almacenamiento columnar en PostgreSQL con partición por año.
- **Carga**, el step `buildDataModule` cachea los normalizados; solo se reprocesan fuentes cambiadas (detects por hash del RAW).
- Actualmente: todos los procesamiento es off-line (datos pre-computados). Hasta que no haya necesidad de datos en tiempo real, esto no se cambia.

---

## 13. Criterios para Incorporar Nuevas Fuentes

1. La fuente productora **debe ser institución oficial reconocida** (INE, BCCh, MINEDUC, DIPRES, SISS, UIS, etc.) o de institutos académicos de renombre (ej. IMCO).
2. El conjunto de datos **debe cubrir al menos 10 años consecutivos** del período 1955‑2024, o ser exclusivamente para referencia geográfica.
3. El acceso debe ser **gratauto** (sin pago), o tener un acuerdo de licencia permisiva para su uso.
4. Para ser incluido, se requiere un validador de schema y un script de verificación en el conector.
5. Cada nueva fuente debe actualizar DATA_CATALOG.md y se revisa por todo el equipo.

---

## 13. Stack Técnico Recomendado (inmediato)

| Capa | Herramienta | Motivo |
|------|-------------|--------|
| Connector scripting | TypeScript (tsx) | Mismo lenguaje del proyecto, fácil portabilidad. |
| Processado serio | TypeScript (Node) o Python — se decide en la implementación. Python es más limpio para manejo de CSV/Excel. Pero para no introducir polygop, se mantiene TypeScript para todas las stages CI. |
| Almacenamiento intermedio | CSV/TSV fue más light que una BD; PostgreSQL ya tiene seeds pero usarde para datos masivos. |
| Database | Neon PostgreSQL con schema futuro `pipeline_data`. |
| Build step | `pnpm run data:build` integrado en el paso de `pnpm run build` opcional. |

---

**Versión:** 1.0.0  
**Revisores:** (pendiente)  
**Fecha de última modificación:** 2026-08-05  
**Autor:** Data Architect — Civicum SNID
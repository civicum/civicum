# 🔗 DATA LINEAGE — TRAZABILIDAD DE PUNTA A PUNTA

**Versión:** 1.0  
**Última actualización:** 15 Febrero 2026  
**Soluciona:** Observación Kappa-5

---

## 🎯 Objetivo

Documentar la cadena de proveniencia (lineage) de cada dato desde su fuente original hasta la interfaz de usuario, garantizando que cada transformación sea trazable y auditable.

---

## 📊 Diagrama de Linaje General

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  FUENTE      │────▶│  EXTRACCIÓN  │────▶│  VALIDACIÓN  │────▶│  STORAGE     │────▶│  UI          │
│  OFICIAL     │     │  (Scraper)   │     │  (Quality    │     │  (PostgreSQL │     │  (React)     │
│              │     │              │     │   Gates)     │     │   + Cache)   │     │              │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
     │                     │                    │                     │                    │
     ▼                     ▼                    ▼                     ▼                    ▼
  source_url           scraper_log_id      validation_score      _metadata            tooltip con
  fetch_date           records_fetched     records_rejected      .source_url          "Fuente: X"
                       duration_ms         schema_version        .fetched_at          "Actualizado: Y"
                                                                .version
```

---

## 📋 Metadata de Proveniencia (`_metadata`)

Cada registro en las tablas críticas incluye un campo JSONB `_metadata` con la siguiente estructura:

```typescript
interface ProvenanceMetadata {
  // Origen
  source_url: string;          // URL exacta de donde se extrajo
  source_name: string;         // Nombre de fuente (BCN, SERVEL, DIPRES...)
  source_type: 'api' | 'dataset' | 'scraping' | 'manual';
  
  // Extracción
  fetched_at: string;          // ISO timestamp de extracción
  scraper_job_id: string;      // FK a scraper_logs.id
  scraper_version: string;     // Versión del script que extrajo
  
  // Validación
  validation_score: number;    // 0.0-1.0 (pasa gates = 1.0)
  quality_gates_passed: string[]; // ['schema', 'integrity', 'freshness', 'quality']
  quality_gates_failed: string[]; // Gates que fallaron (vacío si todo OK)
  
  // Transformaciones
  transformations: string[];   // ['normalize_rut', 'convert_clp_to_uf', ...]
  schema_version: string;      // Versión del esquema de destino
  
  // Trazabilidad
  lineage_hash: string;        // SHA-256(source_url + fetched_at + content_hash)
  previous_version_id?: string; // ID de versión anterior si es update
}
```

---

## 🗂️ Linaje por Tipo de Dato

### Legislación (BCN → Knowledge Cache → Civia/UI)

| Etapa | Input | Output | Transformación |
|-------|-------|--------|----------------|
| Extracción | RSS BCN / Ley Chile HTML | JSON raw | Parse HTML, extract fields |
| Validación | JSON raw | JSON validado | Zod schema check |
| Normalización | JSON validado | Record DB | Map fields, normalize dates to ISO |
| Storage | Record DB | PostgreSQL row | INSERT/UPSERT + _metadata |
| Serving | DB query | API response | Add freshness indicator (TTL check) |
| UI | API response | React component | Show source + date tooltip |

### Votaciones (Congreso Abierto → DB → UI)

| Etapa | Input | Output | Transformación |
|-------|-------|--------|----------------|
| Extracción | REST API XML/JSON | JSON raw | Parse XML to JSON |
| Validación | JSON raw | JSON validado | Schema + consistency (sum check) |
| Enriquecimiento | JSON validado | JSON enriched | Map authority_id, add party info |
| Storage | JSON enriched | `parliamentary_votes` row | UPSERT + _metadata |
| Serving | DB query | API response | Add match with citizen votes |
| UI | API response | VotingCard component | Show detailed breakdown |

### Presupuestos (DIPRES/SINIM → DB → UI)

| Etapa | Input | Output | Transformación |
|-------|-------|--------|----------------|
| Extracción | Excel/CSV/API | JSON raw | Parse spreadsheet, map columns |
| Validación | JSON raw | JSON validado | Schema + ejecutado ≤ presupuesto |
| Cross-validation | JSON validado | JSON enriched | Cross-check DIPRES vs SINIM |
| Storage | JSON enriched | `budget_data` row | UPSERT + _metadata |
| Serving | DB query | API response | Compute execution_percent |
| UI | API response | Chart component | Visualize + compare comunas |

### Electoral (SERVEL → DB → UI)

| Etapa | Input | Output | Transformación |
|-------|-------|--------|----------------|
| Extracción | Power BI / PDF / CSV | JSON raw | OCR (if PDF) + parse |
| Validación | JSON raw | JSON validado | Golden dataset comparison |
| Integridad | JSON validado | JSON verified | total = sum(all_votes) |
| Storage | JSON verified | `electoral_results` row | UPSERT + _metadata |
| Serving | DB query | API response | Add historical comparison |
| UI | API response | ResultsCard component | Show with source attribution |

---

## 🔍 Consulta de Linaje

```sql
-- Ver proveniencia completa de un dato
SELECT 
  id,
  _metadata->>'source_url' AS fuente,
  _metadata->>'source_name' AS nombre_fuente,
  _metadata->>'fetched_at' AS extraido_el,
  _metadata->>'validation_score' AS score_calidad,
  _metadata->>'scraper_job_id' AS job_id,
  _metadata->'transformations' AS transformaciones,
  _metadata->>'lineage_hash' AS hash_lineage
FROM budget_data
WHERE territory_id = 'comuna_santiago'
ORDER BY (_metadata->>'fetched_at')::timestamptz DESC
LIMIT 1;
```

---

## 📱 Lineage en UI

Cada dato mostrado al usuario incluye un tooltip de proveniencia:

```
📄 Presupuesto Municipal Santiago 2025
   Fuente: SINIM (sinimr)
   Actualizado: 2026-02-10
   Calidad: ✅ 100% (4/4 Quality Gates)
   [Ver fuente original ↗]
```

---

*Documento generado para cerrar Observación Kappa-5*

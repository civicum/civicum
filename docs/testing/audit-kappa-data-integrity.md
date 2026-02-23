# 🔍 INFORME DE AUDITORÍA — ESCUADRÓN 18: KAPPA "Integridad de Datos"

**Versión:** 2.0 (POST-SANEAMIENTO)  
**Fecha:** 15 Febrero 2026  
**Misión:** Verificar que scrapers traigan datos reales del Congreso/SERVEL. Integridad end-to-end.  
**Estado General:** ✅ TODOS LOS HALLAZGOS RESUELTOS

---

## 👥 Integrantes

| Rol | Especialidad |
|-----|-------------|
| Rol 30 | Data Architect |
| Rol 31 | Data Engineer |
| Rol 32 | Calidad de Datos |
| Rol 33 | Fuentes Públicas |
| Rol 34 | Scraping Resiliente |

---

## 📊 Resumen de Hallazgos

| # | Hallazgo | Severidad | Estado |
|---|----------|-----------|--------|
| Κ-1 | Sin Golden Dataset para scrapers | 🔴 BLOQUEANTE | ✅ RESUELTO |
| Κ-2 | Sin protocolo de integridad SERVEL | 🟠 ALTO | ✅ RESUELTO |
| Κ-3 | Cross-validation limitada a presupuestos | 🟠 ALTO | ✅ RESUELTO |
| Κ-4 | `scraper_logs` sin métricas de calidad | 🟡 MEDIO | ✅ RESUELTO |
| Κ-5 | Sin cadena de linaje end-to-end | 🟡 MEDIO | ✅ RESUELTO |

---

## 🔎 Detalle de Hallazgos y Resolución

### Κ-1: Sin Golden Dataset para Verificación de Scrapers [✅ RESUELTO]

**Problema:** Los scrapers validaban esquemas (Zod) pero nunca comparaban outputs contra datos de referencia verificados. Un scraper podía extraer datos estructuralmente válidos pero semánticamente incorrectos sin que se detectara.

**Solución implementada:**
- **NUEVO:** `docs/data/golden-datasets-spec.md`
- Golden datasets para 5 fuentes críticas: BCN, SERVEL, DIPRES, Congreso Abierto, InfoLobby
- Job de comparación periódico con TypeScript
- Acciones ante drift (HALT/cuarentena/log según severidad)
- Schedule diferenciado: diario (Congreso) → semanal (BCN, InfoLobby) → mensual (DIPRES)

---

### Κ-2: Sin Protocolo de Integridad SERVEL [✅ RESUELTO]

**Problema:** SERVEL (datos electorales) es la fuente más crítica pero sin API oficial. No existía protocolo específico para verificar datos extraídos vía scraping de Power BI/PDFs.

**Solución implementada:**
- **MODIFICADO:** `docs/data/sources-fallback.md` — nueva sección "Protocolo de Integridad SERVEL"
- 5 verificaciones obligatorias post-ingesta (consistencia votos, padrón, cobertura comunas, golden ref, Diario Oficial)
- Checksums conocidos para eventos históricos (Plebiscito 2022, Presidencial 2021 R2)
- Diagrama de flujo de ingesta SERVEL con puntos de validación

---

### Κ-3: Cross-Validation Limitada a Presupuestos [✅ RESUELTO]

**Problema:** `cross-validation.md` solo definía validación cruzada para datos presupuestarios. Los otros 3 tipos de datos críticos (legislación, votaciones, autoridades) no tenían cross-validation.

**Solución implementada:**
- **MODIFICADO:** `docs/data/cross-validation.md` — 3 nuevas secciones
- Cross-validación de Legislación: BCN vs Ley Chile vs Diario Oficial
- Cross-validación de Votaciones: Congreso Abierto API vs Cámara/Senado web
- Cross-validación de Autoridades: SERVEL vs sitios institucionales vs SUBDERE
- Reglas de validación con severidades por campo

---

### Κ-4: `scraper_logs` Sin Métricas de Calidad [✅ RESUELTO]

**Problema:** La tabla `scraper_logs` (§2.2.10) registraba `records_fetched/inserted/updated` pero no `records_rejected` ni `validation_score`, imposibilitando medir la tasa de rechazo.

**Solución implementada:**
- **MODIFICADO:** `CIVICUM_Anexo_Arquitectura_Tecnica_Completa.docx.md` §2.2.10
- +3 columnas: `records_rejected` (INT), `validation_score` (DECIMAL), `schema_version` (TEXT)
- Permite calcular rejection rate = rejected / (fetched) por fuente
- Trazabilidad de qué versión del esquema validó cada ingesta

---

### Κ-5: Sin Cadena de Linaje End-to-End [✅ RESUELTO]

**Problema:** No existía documentación formal de data lineage — desde la fuente oficial hasta la UI. No había trazabilidad de transformaciones aplicadas a cada dato.

**Solución implementada:**
- **NUEVO:** `docs/data/data-lineage.md`
- Diagrama general de linaje (Fuente → Extracción → Validación → Storage → UI)
- Interface `ProvenanceMetadata` con 14 campos de trazabilidad
- Linaje detallado para 4 tipos de datos: legislación, votaciones, presupuestos, electoral
- SQL de consulta de proveniencia
- Especificación de tooltip en UI con fuente y fecha

---

## 📈 Impacto en Documentación

| Documento | Cambios |
|-----------|---------|
| `golden-datasets-spec.md` | **NUEVO** — 5 golden datasets con job de comparación |
| `data-lineage.md` | **NUEVO** — Provenance metadata + linaje por tipo |
| `sources-fallback.md` | +Protocolo SERVEL con checksums y flujo |
| `cross-validation.md` | +3 matrices: legislación, votaciones, autoridades |
| `Arquitectura §2.2.10` | +3 columnas en `scraper_logs` |

---

*Documento generado para auditoría retrospectiva — Escuadrón 18 Kappa*

# 📡 POLÍTICA DE OPEN DATA Y APIs PÚBLICAS

**Versión:** 1.0  
**Última actualización:** 15 Febrero 2026  
**Soluciona:** Observación A4-1, A4-2

---

## 🎯 Objetivo

Definir qué datos de CIVICUM se exponen como open data, bajo qué condiciones, y con qué API pública.

---

## 📋 Datos Publicables como Open Data

### Datos que SÍ son públicos (derivados de fuentes públicas)

| Dataset | Fuente | Licencia | Endpoint Propuesto |
|---------|--------|----------|-------------------|
| Autoridades por comuna | BCN + SERVEL | CC BY 4.0 | `/api/v1/autoridades` |
| Presupuestos municipales | DIPRES + SINIM | CC BY 4.0 | `/api/v1/presupuestos` |
| Legislación vigente | BCN | CC BY 4.0 | `/api/v1/legislacion` |
| Resultados electorales | SERVEL | CC BY 4.0 | `/api/v1/electoral` |
| Votaciones parlamentarias | Congreso Abierto | CC BY 4.0 | `/api/v1/votaciones` |
| Integridad de datos | Verificación propia | CC BY 4.0 | `/api/v1/data-integrity/{dataset}` |

### Datos que NO son públicos (nunca exponidos)

| Dato | Razón |
|------|-------|
| Perfiles de usuarios | Privacidad (Ley 19.628) |
| Votos individuales | Anonimato garantizado |
| Apoyos individuales | Privacidad |
| Datos de contacto | PII |
| Logs de moderación | Confidencialidad |

### Datos agregados (publicables sin PII)

| Dataset | Granularidad | Endpoint |
|---------|-------------|----------|
| Votos simbólicos (totales) | Por tema, por comuna | `/api/v1/votos/agregados` |
| Reportes ciudadanos (anon) | Por tipo, por comuna | `/api/v1/reportes/agregados` |
| Métricas plataforma | Totales nacionales | `/api/v1/metricas` |

### Preservación Histórica (Digital Heritage)
*Estrategia "Arca Digital" para asegurar la historia a 50 años (Squad 147)*

| Nivel | Estrategia | Frecuencia | Formato |
|---|---|---|---|
| **Snapshot Anual** | Export completo a Archive.org (Wayback Machine) | Anual (31 Dic) | WARC |
| **Data Dump** | "Civicum Year in Data" en Zenodo/IPFS | Anual | JSONL + CSV (Open Data) |
| **Código** | Software Heritage Archive | Cada Release | Git Snapshot |
| **Legal** | Depósito Legal Digital (Biblioteca Nacional) | Anual | PDF/A (Reportes) |

---

## 🔍 Hallazgos

### A4-1: Sin Especificación de API Pública [✅ RESUELTO]

**Problema:** Los endpoints internos existen pero no hay API pública documentada para reutilización por terceros.

**Solución: Especificación API v1**

| Aspecto | Valor |
|---------|-------|
| Formato | REST JSON |
| Documentación | OpenAPI 3.0 (Swagger) |
| Autenticación | API Key (gratis, con registro) |
| Rate Limit | 100 req/min (sin auth: 10/min) |
| Versionado | `/api/v1/` con deprecation 6 meses |
| CORS | Abierto (`*`) para endpoints públicos |
| Caché | 1h para datos estáticos, 5min para agregados |

### A4-2: Sin Política de Uso de Datos [✅ RESUELTO]

**Problema:** Si CIVICUM publica open data, necesita reglas de uso para evitar abuso.

**Solución:**

| Regla | Detalle |
|-------|---------|
| Atribución obligatoria | "Datos: CIVICUM (civicum.cl)" |
| No uso comercial sin autorización | CC BY 4.0 permite, pero no datos de usuarios |
| No re-identificación | Prohibido intentar des-anonimizar datos agregados |
| Rate limit | Anti-scraping: 100/min con key, 10/min sin key |
| ToS API | Registro acepta términos de uso responsable |
| Fair use | Investigadores y medios con acceso expandido (1000/min) |

---

## 📊 Roadmap

| Fase | Contenido | Plazo |
|------|-----------|-------|
| 1 | `/data-integrity` (ya existe en F-48) | MVP |
| 2 | `/autoridades`, `/presupuestos` | Post-MVP |
| 3 | `/votos/agregados`, `/reportes/agregados` | V2 |
| 4 | Swagger UI público | V2 |

---

*Documento generado para cerrar Observaciones A4-1 y A4-2*

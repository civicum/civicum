# 📜 AUDITORÍA DE LEGALIDAD DE SCRAPING POR FUENTE

**Versión:** 1.0  
**Última actualización:** 16 Febrero 2026  
**Escuadrón:** 70 — Kafka-Epsilon: Propiedad Intelectual  
**Soluciona:** KE-1, KE-2

---

## 🎯 Problema

¿Estamos infringiendo copyright con los datos scrapeados? ¿Cada fuente permite el uso que le damos?

---

## 🔴 HALLAZGO KE-1: Sin Auditoría de Legalidad de Scraping por Fuente Individual

**Problema:** Existe política de "scraping ético" (robots.txt, rate limit, User-Agent) y licencia CC BY 4.0 para datos redistribuidos, pero no hay análisis legal FUENTE POR FUENTE de si el scraping está permitido.

**Solución: Inventario Legal de Fuentes**

| # | Fuente | Tipo de acceso | Licencia de datos | robots.txt | ToS | ¿Scraping legal? | Riesgo |
|---|--------|---------------|-------------------|-----------|-----|-------------------|--------|
| 1 | **BCN** (Biblioteca del Congreso) | API + Web | Datos públicos por ley (20.285) | ✅ Permite | Sin restricción explícita | ✅ SÍ | 🟢 Nulo |
| 2 | **SERVEL** | Datasets descargables | Datos públicos electorales | ✅ Permite | Sin restricción | ✅ SÍ | 🟢 Nulo |
| 3 | **DIPRES** | Excel/CSV descargables | Datos presupuestarios públicos | ✅ Permite | Sin restricción | ✅ SÍ | 🟢 Nulo |
| 4 | **ChileCompra** | API oficial | Datos públicos (transparencia) | ✅ API oficial | API key pública | ✅ SÍ | 🟢 Nulo |
| 5 | **Congreso Abierto** | API REST | Open Data explícito | ✅ | Open Data | ✅ SÍ | 🟢 Nulo |
| 6 | **InfoLobby** | API + Web | Datos públicos (Ley 20.730) | ✅ | Sin restricción | ✅ SÍ | 🟢 Nulo |
| 7 | **ChileAtiende** | API REST | Datos públicos | ✅ | Uso libre | ✅ SÍ | 🟢 Nulo |
| 8 | **SINIM** (indicadores municipales) | Web | Datos públicos | ⚠️ Verificar | Sin ToS explícito | ✅ Probablemente | 🟡 Bajo |
| 9 | **Municipios** (sitios web) | Web scraping | Contenido público | ⚠️ Variable | Variable por municipio | ⚠️ Caso a caso | 🟡 Bajo |
| 10 | **Diario Oficial** | Web | Publicación oficial del Estado | ✅ | Uso libre | ✅ SÍ | 🟢 Nulo |
| 11 | **Contraloría** | Web + API | Datos públicos (fiscalización) | ⚠️ Verificar | Sin ToS explícito | ✅ Probablemente | 🟡 Bajo |
| 12 | **CPLT** (Consejo Transparencia) | Web | Datos públicos | ✅ | Uso libre | ✅ SÍ | 🟢 Nulo |

### Análisis legal base

**Argumento central:** Todos los datos que CIVICUM consume son publicados por el Estado chileno en cumplimiento de la Ley 20.285 (Transparencia) y otras leyes. Los datos públicos por mandato legal no tienen protección de copyright sobre los datos en sí (solo sobre la presentación/diseño).

**Ley 17.336 (Propiedad Intelectual Chile):**
- Art. 3: No protege "los textos oficiales de los organismos públicos"
- Art. 71-B: Uso incidental de obras protegidas con fines de información
- Los DATOS (cifras, nombres, fechas) no son obras protegibles

---

## 🟠 HALLAZGO KE-2: Sin Política de Atribución Formal por Fuente

**Problema:** `open-data-policy.md` define CC BY 4.0 para datos redistribuidos pero no especifica CÓMO se atribuye cada fuente en la UI.

**Solución: Estándar de Atribución**

### Regla general
```
TODO dato mostrado que venga de fuente externa DEBE tener:
1. Enlace a la fuente original
2. Fecha de última actualización
3. Disclaimer si es dato procesado (vs. crudo)
```

### Implementación en UI

```
📊 Presupuesto Municipal 2025
Fuente: DIPRES (dipres.gob.cl) | Actualizado: 3 ene 2026
[Ver dato original ↗]

👤 Concejal Juan Pérez
Fuente: SERVEL | Electo: Nov 2024
Lobby: 5 audiencias (InfoLobby ↗) | Votaciones: 23 (Congreso Abierto ↗)

⚖️ Ley 20.285
Fuente: BCN (bcn.cl/leychile) | Vigente desde 2008
[Ver texto completo ↗]
```

### Metadatos por dataset

```typescript
// dataSource.ts
interface DataSource {
  id: string;
  name: string;
  url: string;
  license: 'PUBLIC_LAW' | 'OPEN_DATA' | 'CC_BY' | 'UNKNOWN';
  lastVerified: Date;      // Última vez que se verificó robots.txt/ToS
  nextVerification: Date;  // Próxima verificación programada
  attributionText: string; // Texto exacto de atribución
  robotsTxtAllows: boolean;
  tosAllows: boolean | null; // null = sin ToS explícito
}

// Cron trimestral: verificar robots.txt y ToS de TODAS las fuentes
// Si cambia → alert a Rol 36 (Licencias) + Rol 50 (Abogado PI)
```

---

*Documento generado para Escuadrón 70 Kafka-Epsilon. Resolución KE-1 + KE-2.*

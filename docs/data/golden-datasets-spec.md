# 🏆 GOLDEN DATASETS — VERIFICACIÓN DE INTEGRIDAD DE SCRAPERS

**Versión:** 1.0  
**Última actualización:** 15 Febrero 2026  
**Soluciona:** Observación Kappa-1

---

## 🎯 Objetivo

Mantener conjuntos de datos de referencia ("golden datasets") con valores verificados manualmente contra fuentes oficiales, para detectar scraper drift — cuando un scraper extrae datos estructuralmente correctos pero semánticamente incorrectos.

---

## 📊 Golden Datasets por Fuente Crítica

### 1. BCN / Ley Chile (Legislación)

| Campo | Golden Value (verificado 2026-01-15) |
|-------|--------------------------------------|
| Ley 20.285 (Transparencia) | Promulgada 2008-08-11, vigente, 33 artículos |
| Ley 19.628 (Datos Personales) | Promulgada 1999-08-28, vigente, 23 artículos |
| DL 211 (Libre Competencia) | Promulgado 1973-12-22, vigente con modificaciones |

**Verificación:** Comparar `title`, `promulgation_date`, `status`, `article_count` contra golden.

### 2. SERVEL (Electoral)

| Campo | Golden Value (verificado 2026-01-15) |
|-------|--------------------------------------|
| Plebiscito 2022-09-04 | Apruebo: 4,860,093 / Rechazo: 7,882,958 / Total: 13,021,063 |
| Elección Presidencial 2021 R2 | Boric: 4,620,890 / Kast: 3,650,088 / Total: 8,363,320 |
| Comunas totales SERVEL | 346 |

**Verificación:** `total_votos = apruebo + rechazo + nulos + blancos`, comparar contra Diario Oficial.

### 3. DIPRES (Presupuestos)

| Campo | Golden Value (verificado 2026-01-15) |
|-------|--------------------------------------|
| Ley de Presupuestos 2025 | Total: CLP ~70 billones (verificar c/ publicación DIPRES) |
| Ejecución 2024 Q4 | Debe existir y tener ejecutado ≤ presupuestado |

**Verificación:** `ejecutado <= presupuestado`, monto total ±5% vs publicación oficial.

### 4. Congreso Abierto (Votaciones)

| Campo | Golden Value (verificado 2026-01-15) |
|-------|--------------------------------------|
| Cámara de Diputados | 155 diputados |
| Senado | 50 senadores |
| Votación conocida (ref) | Verificar votos_a_favor + votos_en_contra + abstenciones = total_presentes |

**Verificación:** `sum(individual_votes) == votes_for + votes_against + abstentions`.

### 5. InfoLobby (Audiencias)

| Campo | Golden Value |
|-------|-------------|
| Sujetos pasivos activos | >21,000 |
| Campos obligatorios | Fecha, sujeto_activo, sujeto_pasivo, materia |

**Verificación:** Todos los registros tienen los 4 campos obligatorios, fechas en rango válido.

---

## 🔧 Job de Comparación

```typescript
// jobs/golden-dataset-check.ts
interface GoldenCheck {
  source: string;
  field: string;
  expected: string | number;
  actual: string | number;
  match: boolean;
  drift_percent?: number;
}

async function runGoldenDatasetCheck(): Promise<GoldenCheck[]> {
  const results: GoldenCheck[] = [];
  
  // BCN: verificar leyes conocidas
  const ley20285 = await db.query(
    `SELECT * FROM legal_documents WHERE id = 'ley_20285'`
  );
  results.push({
    source: 'BCN',
    field: 'Ley 20.285 status',
    expected: 'vigente',
    actual: ley20285.status,
    match: ley20285.status === 'vigente'
  });
  
  // SERVEL: verificar totales electorales
  const plebiscito = await db.query(
    `SELECT * FROM electoral_results WHERE event = 'plebiscito_2022'`
  );
  const totalCheck = plebiscito.apruebo + plebiscito.rechazo + 
                     plebiscito.nulos + plebiscito.blancos;
  results.push({
    source: 'SERVEL',
    field: 'Plebiscito 2022 total votes',
    expected: plebiscito.total_votos,
    actual: totalCheck,
    match: totalCheck === plebiscito.total_votos
  });
  
  // Congreso: verificar consistency
  const votes = await db.query(
    `SELECT *, (votes_for + votes_against + abstentions) as computed_total 
     FROM parliamentary_votes ORDER BY vote_date DESC LIMIT 10`
  );
  for (const vote of votes) {
    const individualCount = Object.keys(vote.individual_votes).length;
    results.push({
      source: 'Congreso',
      field: `Vote ${vote.session_id} consistency`,
      expected: vote.computed_total,
      actual: individualCount,
      match: individualCount === vote.computed_total
    });
  }
  
  return results;
}
```

### Schedule

| Check | Frecuencia | Alerta Si |
|-------|-----------|-----------|
| BCN golden check | Semanal | Cualquier mismatch |
| SERVEL golden check | Tras cada ingesta | total_votos ≠ suma componentes |
| DIPRES golden check | Mensual | ejecutado > presupuestado |
| Congreso golden check | Diario | individual_votes ≠ totales |
| InfoLobby golden check | Semanal | Campos obligatorios vacíos |

---

## 🚨 Acciones ante Drift

| Drift Detectado | Severidad | Acción |
|----------------|-----------|--------|
| Dato golden no encontrado | 🔴 CRÍTICO | Halt ingesta + alerta Slack + Email |
| Valor difiere >5% | 🟠 ALTO | Cuarentena dato + revisión manual |
| Valor difiere 1-5% | 🟡 MEDIO | Log + flag para revisión |
| Estructura cambió | 🔴 CRÍTICO | Activar fallback + crear ticket |

---

*Documento generado para cerrar Observación Kappa-1*

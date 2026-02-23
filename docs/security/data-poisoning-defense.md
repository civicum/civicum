# 🧪 DEFENSA CONTRA ENVENENAMIENTO DE IA (DATA POISONING)

**Versión:** 1.0  
**Última actualización:** 16 Febrero 2026  
**Escuadrón:** 64 — Defcon-4: Envenenamiento de IA  
**Soluciona:** DC4-1, DC4-2  
**Complementa:** `docs/security/ai-redteam.md` (prompt injection)

---

## 🎯 Problema

Usuarios inyectan datos falsos sutiles para sesgar a Civia (IA local). No es prompt injection (ya cubierto), es **envenenamiento de los datos que Civia usa para responder**.

---

## 🔴 HALLAZGO DC4-1: Sin Defensa contra Data Poisoning

**Problema:** `ai-redteam.md` cubre prompt injection pero no el escenario donde un actor malicioso corrompe los datos fuente que Civia usa para responder preguntas.

**Superficies de ataque:**

| Superficie | Qué puede envenenar | Ejemplo |
|------------|---------------------|---------|
| Reportes ciudadanos | "Alcalde X robó 100 millones" (falso) → Civia lo repite | Difamación automatizada |
| Comentarios | Comentarios sutilmente sesgados que Civia indexa | Sesgo ideológico |
| Fuentes oficiales manipuladas | Scraper trae dato corrupto de BCN/DIPRES | Información errónea |
| Knowledge Pack contaminado | Skill inject datos falsos en Knowledge Base | Backdoor en IA |

**Solución: 4 Capas Anti-Envenenamiento**

### Capa 1: Civia NUNCA usa UGC como fuente de verdad
```
REGLA CRÍTICA (F-17 Evidence-Only):
- Civia SOLO cita: BCN, SERVEL, DIPRES, Diario Oficial, ChileCompra
- Civia NUNCA dice: "Según reportes ciudadanos..."
- Si preguntado sobre algo sin fuente oficial: "No tengo información 
  verificada sobre eso. Puedo mostrarte los datos oficiales de..."
```

### Capa 2: Validación de Fuentes Oficiales
| Fuente | Validación | Alerta si falla |
|--------|-----------|-----------------|
| BCN | Hash SHA-256 del scrape vs. hash anterior | Si >20% cambio en una actualización |
| SERVEL | Cross-check con 2 endpoints diferentes | Si discrepancia |
| DIPRES | Verificación de formato + rangos esperados | Si presupuesto fuera de rango histórico 3σ |
| Diario Oficial | Verificación SSL + dominio exacto | Si cert o dominio diferente |

```typescript
// Validación de integridad de scraping
async function validateScrapedData(source: string, data: unknown): Promise<boolean> {
  const previous = await getPreviousVersion(source);
  if (!previous) return true; // primera vez
  
  const changePercent = calculateChangeDelta(previous, data);
  if (changePercent > 0.20) { // >20% cambio
    await alert('DATA_ANOMALY', { source, changePercent });
    await quarantine(data); // No publicar hasta revisión humana
    return false;
  }
  
  // Verificar rangos
  if (source === 'DIPRES') {
    const budgetValues = extractBudgets(data);
    for (const v of budgetValues) {
      if (isOutlier(v, historicalMean, historicalStdDev, 3)) {
        await alert('BUDGET_OUTLIER', { value: v, source });
        return false;
      }
    }
  }
  
  return true;
}
```

### Capa 3: Knowledge Pack Integrity (Anti-skill-injection)
```
REGLA (refuerza KP-003 + KP-017):
- Todo Knowledge Pack tiene SHA-256 en manifest.json
- Al cargar: verificar hash ANTES de ejecutar
- Si hash no coincide → RECHAZAR + alerta Rol 41 (AI Safety)
- Skills de OpenClaw: sandbox estricto (no puede escribir fuera de scope)
- Solo HITL (Human In The Loop) puede aprobar nuevos skills
```

### Capa 4: Monitoreo de Sesgo en Respuestas
| Métrica | Cómo se mide | Umbral |
|---------|-------------|--------|
| Sentiment drift | Promedio de sentimiento de respuestas Civia por semana | Si cambia >1σ vs. baseline |
| Source diversity | % de respuestas que citan >1 fuente | ≥60% |
| Claim verification rate | % de claims que tienen fuente verificable | ≥90% |
| User-reported inaccuracies | Reportes "Civia se equivocó" | <5% |

---

## 🟠 HALLAZGO DC4-2: Sin Fact-Checking de Reportes Ciudadanos

**Problema:** Un reporte ciudadano puede contener acusaciones falsas. Si llega a tendencia, el daño reputacional es grande.

**Solución: Verificación Progresiva de Reportes**

| Nivel de reporte | Verificación requerida | Acción |
|------------------|----------------------|--------|
| Nuevo (0-9 apoyos) | Ninguna — es opinión ciudadana | Visible solo para comuna |
| Comunitario (10-49) | Flag automático para Rol 45 (Fact-checker) | Fact-checker revisa claims factuales |
| Impacto (50-199) | Fact-check obligatorio antes de escalar | Claims verificados/refutados visibles |
| Interés Público (200+) | Fact-check + fuentes cruzadas + disclaimer | Banner: "Verificado ✅" o "Sin verificar ⚠️" |

**Disclaimer en todo reporte:**
```
ℹ️ Este es un reporte ciudadano. No representa la posición de CIVICUM.
Los datos oficiales están disponibles en [Cuentas Claras].
```

---

*Documento generado para Escuadrón 64 Defcon-4. Resolución DC4-1 + DC4-2.*

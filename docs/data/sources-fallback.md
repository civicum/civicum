# 🔄 FUENTES DE DATOS: PLAN DE FALLBACK

**Versión:** 1.0  
**Última actualización:** 6 Febrero 2026  
**Soluciona:** Observaciones A5-1 y A5-2

---

## 🎯 Matriz de Fuentes y Fallbacks

### Fuentes Críticas (SLA: 99.5%)

| Fuente Primaria | Fallback 1 | Fallback 2 | SLA |
|-----------------|------------|------------|-----|
| **BCN (Leyes)** | Archive.org | Cache local 7d | 99.9% |
| **SERVEL (Elecciones)** | Datos GOB.cl | Cache local 30d | 99.5% |
| **DIPRES (Presupuesto)** | Portal Transparencia | Cache local 90d | 99.5% |
| **InfoLobby** | CPLT scraping | Cache local 30d | 99% |
| **InfoProbidad** | CPLT API | Cache local 365d | 99% |

### Fuentes Importantes (SLA: 95%)

| Fuente Primaria | Fallback 1 | Fallback 2 | SLA |
|-----------------|------------|------------|-----|
| Congreso Abierto | API Cámara | Cache local 7d | 95% |
| Senado.cl | Archive.org | Cache local 7d | 95% |
| SINIM (Municipal) | Datos SUBDERE | Cache local 180d | 90% |
| Poder Judicial | N/A (manual) | Cache local 30d | 85% |

---

## 🚨 Detección de Cambio de Estructura HTML

### Sistema de Monitoreo (Nuevo - A5-1)

```typescript
interface StructureMonitor {
  // Hash de la estructura DOM significativa
  computeStructureHash(html: string): string;
  
  // Comparar con hash anterior
  detectChange(current: string, stored: string): ChangeResult;
  
  // Umbral de alerta (>10% cambio)
  ALERT_THRESHOLD: 0.10;
}

interface ChangeResult {
  hasChanged: boolean;
  changePercentage: number;
  affectedSelectors: string[];
  action: 'AUTO_ADAPT' | 'ALERT_MANUAL' | 'FALLBACK';
}
```

### Flujo de Detección

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Scraping      │────▶│   Comparar      │────▶│   ¿Cambio >10%? │
│   Ejecutado     │     │   Hash DOM      │     │                 │
└─────────────────┘     └─────────────────┘     └────────┬────────┘
                                                         │
                              ┌──────────────────────────┼──────────────────────────┐
                              ▼                          ▼                          ▼
                        ┌───────────┐            ┌──────────────┐           ┌───────────────┐
                        │ Sin Cambio │            │ Cambio <10%  │           │ Cambio >10%   │
                        │ Continuar  │            │ Auto-adaptar │           │ ALERTA MANUAL │
                        └───────────┘            └──────────────┘           └───────────────┘
```

### Alertas Configuradas

| Fuente | Cambio | Acción | Notificación |
|--------|--------|--------|--------------|
| BCN | <5% | Auto-adapt | Log |
| BCN | 5-10% | Auto-adapt | Slack |
| BCN | >10% | Fallback + Manual | Slack + Email |
| SERVEL | Cualquiera | Manual | Slack + Email |
| DIPRES | <10% | Auto-adapt | Log |
| DIPRES | >10% | Fallback + Manual | Slack + Email |

---

## 📊 SLAs por Tipo de Dato

| Dato | Frescura Requerida | Fallback Aceptado | Alerta Si |
|------|-------------------|-------------------|-----------|
| Leyes vigentes | 24h | 7 días | >7d desactualizado |
| Votaciones Congreso | 1h | 24h | >24h desactualizado |
| Presupuesto | 30d | 90d | >90d desactualizado |
| Lobby | 7d | 30d | >30d desactualizado |
| Patrimonio | 365d | 365d | Sin actualización anual |

---

## 🗳️ Protocolo de Integridad SERVEL (Saneamiento Kappa-2)

> ⚠️ **CRÍTICO:** SERVEL no tiene API oficial. Los datos electorales se extraen de Power BI, PDFs y CSVs publicados ad-hoc. Sin verificación específica, un cambio de formato puede producir datos electorales incorrectos.

### Verificaciones Obligatorias Post-Ingesta

| # | Check | Condición | Acción si falla |
|---|-------|-----------|-----------------|
| 1 | **Consistencia de votos** | `apruebo + rechazo + nulos + blancos = total_emitidos` | HALT + alerta inmediata |
| 2 | **Padrón electoral** | `total_emitidos ≤ habilitados` | HALT + revisión manual |
| 3 | **Comunas completas** | 346 comunas presentes | WARNING + listar faltantes |
| 4 | **Golden dataset** | Valores conocidos (Plebiscito 2022, etc.) coinciden | HALT si difieren |
| 5 | **Diario Oficial** | Cross-ref con resultados publicados en DO | Cuarentena si discrepancia |

### Checksums Conocidos (Golden Reference)

```typescript
const SERVEL_GOLDEN = {
  'plebiscito_2022_09_04': {
    apruebo: 4_860_093,
    rechazo: 7_882_958,
    checksum: 'sha256:a1b2c3...', // hash del dataset oficial
  },
  'presidencial_2021_r2': {
    boric: 4_620_890,
    kast: 3_650_088,
    checksum: 'sha256:d4e5f6...',
  }
};
```

### Flujo de Ingesta SERVEL

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Extraer     │────▶│  Checksum    │────▶│  Consistency │────▶│  Golden      │
│  Power BI/   │     │  vs Golden   │     │  total =     │     │  Dataset     │
│  PDF/CSV     │     │  Reference   │     │  sum(votos)  │     │  Match?      │
└──────────────┘     └──────────────┘     └──────────────┘     └──────┬───────┘
                                                                      │
                            ┌─────────────────────────────────────────┼─────────┐
                            ▼                                         ▼         ▼
                     ┌──────────────┐                          ✅ INSERT   ❌ HALT
                     │  Cross-ref   │                          en DB       + Alerta
                     │  Diario      │
                     │  Oficial     │
                     └──────────────┘
```

---

## 🔧 Procedimiento de Fallback

### Cuando Fuente Primaria Falla

1. **Detectar falla** (timeout, 5xx, estructura rota)
2. **Intentar Fallback 1** (máx 3 reintentos)
3. **Si falla → Fallback 2** (caché local)
4. **Registrar incidente** en log
5. **Notificar equipo** si >1h sin fuente primaria
6. **Mostrar banner** "Datos actualizados hace X"

### Cuando Estructura Cambia

1. **Detectar cambio** (hash diferente)
2. **Evaluar severidad** (<10% vs >10%)
3. **Si >10%: Activar fallback** inmediato
4. **Crear ticket** para actualizar scraper
5. **Notificar Data Team** (Slack + Email)

---

*Documento generado para cerrar Observaciones A5-1 y A5-2*

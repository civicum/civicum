# 🔀 CROSS-VALIDACIÓN DE DATOS PRESUPUESTARIOS

**Versión:** 1.0  
**Última actualización:** 6 Febrero 2026  
**Soluciona:** Observación Omicron-1

---

## 🎯 Objetivo

Comparar datos de múltiples fuentes para detectar discrepancias.

---

## 📊 Fuentes a Cross-Validar

| Dato | Fuente 1 | Fuente 2 | Fuente 3 |
|------|----------|----------|----------|
| Presupuesto Ley | Ley de Presupuestos | DIPRES | BCN |
| Ejecución | SIGFE | Portal Transparencia | SINIM |
| Municipal | SINIM | SUBDERE | Municipio |

---

## 🔧 Pipeline de Validación

```typescript
// jobs/cross-validation.ts
interface ValidationResult {
  source1: string;
  source2: string;
  field: string;
  value1: number;
  value2: number;
  discrepancy: number;
  severity: 'low' | 'medium' | 'high';
}

async function crossValidate(): Promise<ValidationResult[]> {
  const results: ValidationResult[] = [];
  
  // Comparar cada campo entre fuentes
  // Calcular discrepancia porcentual
  // Clasificar severidad (>5% = high)
  
  return results.filter(r => r.discrepancy > 0.01); // >1%
}
```

---

## 🚨 Alertas

| Discrepancia | Severidad | Acción |
|--------------|-----------|--------|
| 1-5% | Bajo | Log |
| 5-10% | Medio | Slack |
| >10% | Alto | Slack + Email + Ticket |

---

*Documento generado para cerrar Observación Omicron-1*

---

## 📚 Cross-Validación de Legislación (Saneamiento Kappa-3)

| Dato | Fuente 1 | Fuente 2 | Fuente 3 |
|------|----------|----------|----------|
| Leyes vigentes | BCN RSS | Ley Chile | Diario Oficial |
| Artículos constitucionales | BCN | Texto vigente PDF | N/A |
| Estado de ley (vigente/derogada) | BCN | Ley Chile | N/A |

### Reglas de Validación

| Campo | Regla | Severidad |
|-------|-------|-----------|
| Número de ley | Debe coincidir en ambas fuentes | 🔴 CRÍTICO |
| Estado (vigente/derogada) | Discrepancia = cuarentena inmediata | 🔴 CRÍTICO |
| Fecha promulgación | Diferencia ≤1 día | 🟡 MEDIO |
| Artículos count | Diferencia >2 = alerta | 🟠 ALTO |

---

## 🗳️ Cross-Validación de Votaciones (Saneamiento Kappa-3)

| Dato | Fuente 1 | Fuente 2 |
|------|----------|----------|
| Votaciones Cámara | Congreso Abierto API | Cámara de Diputados web |
| Votaciones Senado | Congreso Abierto API | Senado.cl |
| Resultado (aprobado/rechazado) | API | Acta oficial |

### Reglas de Validación

| Campo | Regla | Severidad |
|-------|-------|-----------|
| Resultado total | a_favor + en_contra + abstención = presentes | 🔴 CRÍTICO |
| Votos individuales | Cada parliamentarian_id debe existir en authorities | 🟠 ALTO |
| Fecha/hora votación | Diferencia ≤1h entre fuentes | 🟡 MEDIO |

---

## 👤 Cross-Validación de Autoridades (Saneamiento Kappa-3)

| Dato | Fuente 1 | Fuente 2 | Fuente 3 |
|------|----------|----------|----------|
| Alcaldes | SERVEL resultados | Sitio municipal | SUBDERE |
| Parlamentarios | SERVEL | Congreso Abierto | Cámara/Senado web |
| Concejales | SERVEL resultados | Sitio municipal | N/A |

### Reglas de Validación

| Campo | Regla | Severidad |
|-------|-------|-----------|
| Nombre completo | Fuzzy match ≥90% entre fuentes | 🟠 ALTO |
| Partido político | Debe coincidir o tener fecha cambio | 🟡 MEDIO |
| Período (inicio/fin) | Diferencia ≤1 semana | 🟡 MEDIO |
| 346 comunas con alcalde | Cobertura = 100% | 🔴 CRÍTICO |

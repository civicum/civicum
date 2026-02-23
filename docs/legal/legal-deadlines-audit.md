# ⏰ AUDITORÍA DE PLAZOS LEGALES — COMPLETITUD Y EXACTITUD

**Versión:** 1.0  
**Última actualización:** 16 Febrero 2026  
**Escuadrón:** 68 — Kafka-Gamma: Plazos Legales  
**Soluciona:** KG-1, KG-2

---

## 🎯 Problema

¿El sistema alerta correctamente sobre TODOS los plazos de respuesta del Estado? ¿Son los plazos correctos?

---

## 🔴 HALLAZGO KG-1: Sin Inventario Exhaustivo de Plazos Legales

**Problema:** El sistema de alertas (verde→amarillo→naranja→rojo) usa 15 días como plazo genérico, pero los plazos varían según el tipo de solicitud y la ley aplicable.

**Solución: Catálogo Exhaustivo de Plazos**

### Plazos de Respuesta del Estado Chileno

| Tipo de Solicitud | Ley | Plazo | Desde cuándo | Prorroga | Escalamiento |
|-------------------|-----|-------|-------------|----------|-------------|
| Acceso a info pública | 20.285 art. 14 | 20 días hábiles | Recepción por OIRS | +10 días si complejidad | Consejo para la Transparencia |
| Reclamo por denegación | 20.285 art. 24 | 15 días hábiles (CPLT) | Interposición reclamo | No | Corte de Apelaciones |
| Solicitud administrativa general | 19.880 art. 27 | 20 días hábiles | Inicio procedimiento | No aplicable en general | Contraloría |
| Silencio administrativo (+) | 19.880 art. 64 | 6 meses | Solicitud | — | Se entiende ACEPTADA |
| Silencio administrativo (-) | 19.880 art. 65 | 6 meses | Solicitud | — | Se entiende RECHAZADA |
| Derechos ARCO (datos personales) | 19.628 art. 12 | 2 días hábiles | Ejercicio del derecho | No | Tribunales civiles |
| Recurso de protección | CPR art. 20 | 30 días corridos | Acto u omisión | No | Corte Suprema |
| Denuncia municipal | 18.695 art. 5 | Sin plazo legal explícito | — | — | Contraloría Regional |
| Petición constitucional | CPR art. 19 N°14 | 30 días hábiles (práctica) | Recepción | No formal | Sin escalamiento directo |
| Respuesta SERNAC | 19.496 art. 58 | 25 días hábiles | Reclamo | No | Juzgado Policía Local |

### Configuración del Sistema de Alertas

```typescript
// legalDeadlines.ts
const LEGAL_DEADLINES: Record<string, DeadlineConfig> = {
  'ACCESS_INFO': {
    law: 'Ley 20.285 art. 14',
    workingDays: 20,
    extensionDays: 10,
    extensionCondition: 'Volumen o complejidad de información',
    escalateTo: 'Consejo para la Transparencia (CPLT)',
    escalateUrl: 'https://www.consejotransparencia.cl/amparo/',
    alerts: [
      { day: 10, level: 'yellow', msg: 'Quedan 10 días hábiles para respuesta' },
      { day: 15, level: 'orange', msg: '⚠️ Quedan 5 días hábiles' },
      { day: 18, level: 'red', msg: '❌ Vence en 2 días' },
      { day: 20, level: 'expired', msg: '⛔ Plazo vencido. Puedes reclamar ante CPLT' },
    ]
  },
  'ARCO_RIGHTS': {
    law: 'Ley 19.628 art. 12',
    workingDays: 2,
    extensionDays: 0,
    escalateTo: 'Tribunales civiles',
    alerts: [
      { day: 1, level: 'yellow', msg: 'Plazo vence mañana' },
      { day: 2, level: 'expired', msg: '⛔ Plazo vencido' },
    ]
  },
  'ADMIN_REQUEST': {
    law: 'Ley 19.880 art. 27',
    workingDays: 20,
    extensionDays: 0,
    escalateTo: 'Contraloría General de la República',
    alerts: [
      { day: 10, level: 'yellow' },
      { day: 15, level: 'orange' },
      { day: 18, level: 'red' },
      { day: 20, level: 'expired' },
    ]
  },
  'MUNICIPAL_COMPLAINT': {
    law: 'LOC 18.695',
    workingDays: null, // Sin plazo explícito
    escalateTo: 'Contraloría Regional',
    alerts: [
      { day: 15, level: 'yellow', msg: 'Sin plazo legal, pero buena práctica esperar 15 días' },
      { day: 30, level: 'orange', msg: 'Sin respuesta en 30 días. Puedes escalar a Contraloría' },
    ]
  },
};
```

---

## 🟠 HALLAZGO KG-2: Sin Cálculo Correcto de Días Hábiles

**Problema:** Los plazos legales son en días hábiles (no corridos), pero no hay evidencia de que el sistema calcule correctamente.

**Solución: Calculadora de Días Hábiles Chile**

```typescript
// workingDaysCalculator.ts

// Feriados legales Chile 2026 (Ley 2.977 + decretos)
const FERIADOS_CHILE_2026 = [
  '2026-01-01', // Año Nuevo
  '2026-04-03', // Viernes Santo
  '2026-04-04', // Sábado Santo
  '2026-05-01', // Día del Trabajo
  '2026-05-21', // Glorias Navales
  '2026-06-20', // Día de los Pueblos Indígenas (variable)
  '2026-06-29', // San Pedro y San Pablo
  '2026-07-16', // Virgen del Carmen
  '2026-08-15', // Asunción de la Virgen
  '2026-09-18', // Fiestas Patrias
  '2026-09-19', // Glorias del Ejército
  '2026-10-12', // Encuentro Dos Mundos
  '2026-10-31', // Día de las Iglesias Evangélicas
  '2026-11-01', // Todos los Santos
  '2026-12-08', // Inmaculada Concepción
  '2026-12-25', // Navidad
];

function addWorkingDays(startDate: Date, days: number): Date {
  let current = new Date(startDate);
  let added = 0;
  
  while (added < days) {
    current.setDate(current.getDate() + 1);
    const dayOfWeek = current.getDay();
    const dateStr = current.toISOString().split('T')[0];
    
    // Saltar fines de semana
    if (dayOfWeek === 0 || dayOfWeek === 6) continue;
    // Saltar feriados
    if (FERIADOS_CHILE.includes(dateStr)) continue;
    
    added++;
  }
  
  return current;
}

// Fuente de feriados: mantener actualizado anualmente
// BCN publica calendario oficial en diciembre de cada año
// Cron job: verificar en enero de cada año que el calendario esté actualizado
```

**Indicador de plazo en UI:**
```
📅 Solicitud enviada: 3 marzo 2026
⏰ Plazo legal: 20 días hábiles (Ley 20.285)
📆 Fecha límite: 31 marzo 2026
🟢 Estado: Dentro de plazo (12 días hábiles restantes)

[Ver detalle del plazo] [Escalar si no responden]
```

**Honestidad radical (Rol 04) en plazos sin ley explícita:**
```
⚠️ Este tipo de solicitud no tiene plazo legal definido.
Te avisaremos si pasan 30 días sin respuesta, y podrás 
escalar a Contraloría. Pero no estamos obligando al municipio 
a responder en un plazo específico.
```

---

*Documento generado para Escuadrón 68 Kafka-Gamma. Resolución KG-1 + KG-2.*

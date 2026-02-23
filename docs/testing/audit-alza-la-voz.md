# 📢 AUDITORÍA MÓDULO ALZA LA VOZ

**Versión:** 1.0  
**Última actualización:** 15 Febrero 2026  
**Soluciona:** Observación B3-1, B3-2

---

## 🎯 Objetivo

Auditoría específica del módulo de reportes ciudadanos. Verificar que el flujo de denuncia→escalamiento→resolución funcione correctamente.

---

## ✅ Flujo Auditado

```
┌─────────────┐   ┌─────────────┐   ┌─────────────┐   ┌─────────────┐
│  Ciudadano   │──▶│   Reporte   │──▶│ Escalamiento│──▶│  Resolución │
│  crea caso   │   │  validado   │   │  automático │   │  + tracking │
└─────────────┘   └─────────────┘   └─────────────┘   └─────────────┘
```

### Niveles de Escalamiento (Verificados)

| Nivel | Umbral | Visibilidad | Notificación | Ref |
|-------|--------|------------|--------------|-----|
| 1 Local | 1-9 apoyos | Comuna | Autor | Capacidades §2.10 |
| 2 Comunitario | 10+ | Comuna destacado | Feed comunal | Capacidades §2.10 |
| 3 Impacto | 50+ | Regional | Autoridades regionales | Capacidades §2.10 |
| 4 Interés Público | 200+ | Nacional | Contraloría si excede plazo | Capacidades §2.10 |

### Plazos Legales (Verificados)

| Día | Alerta | Acción | Ref |
|-----|--------|--------|-----|
| 3 | 🟢 Verde | "Reporte recibido" | Capacidades Timeline |
| 7 | 🟡 Amarilla | "7 días sin respuesta" | Capacidades Timeline |
| 12 | 🟠 Naranja | "Plazo vence en 3 días" + opción escalar | Capacidades Timeline |
| 15+ | 🔴 Roja | "Plazo vencido" + auto-escalar si autorizado | Capacidades Timeline |

---

## 🔍 Hallazgos (Saneamiento B3-1, B3-2)

### B3-1: Sin Protocolo de Reportes Abusivos [✅ RESUELTO]

**Problema:** El módulo permite crear reportes pero no define qué pasa con reportes falsos, maliciosos o spam.

**Solución:**

| Tipo Abuso | Detección | Acción |
|-----------|-----------|--------|
| Reporte falso | 3+ contra-reportes verificados | Ocultamiento + warning usuario |
| Spam masivo | Rate limit: máx 3 reportes/día/usuario | Bloqueo temporal |
| Contenido difamatorio | TensorFlow.js toxicity + revisión humana | Eliminación + sanción |
| Reporte duplicado | Deduplicación por geolocalización + texto | Merge automático |
| Extorsión | Detección de patrones amenazantes | Denuncia legal + ban |

### B3-2: Sin Métricas de Eficacia del Módulo [✅ RESUELTO]

**Dashboard Alza la Voz:**

| Métrica | Definición | Target |
|---------|-----------|--------|
| Tasa resolución | Reportes resueltos / total | >40% |
| Tiempo medio resolución | Días desde creación a resolución | <15 días |
| Escalamientos exitosos | Escalados que obtuvieron respuesta | >60% |
| Reportes abusivos | % reportes removidos por abuso | <5% |
| Satisfacción ciudadana | Rating post-resolución | >3.5/5 |

---

*Documento generado para cerrar Observaciones B3-1 y B3-2*

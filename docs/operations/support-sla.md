# 📞 SLA DE SOPORTE Y OPERACIONES DIARIAS

**Versión:** 1.0  
**Última actualización:** 15 Febrero 2026  
**Soluciona:** Observación Xi-1

---

## 🎯 Objetivo

Definir SLAs de soporte, canales de atención, y procedimientos operativos diarios complementando `maturity-rubric.md` y `staging.md`.

---

## 📋 Canales de Soporte

| Canal | Disponibilidad | SLA Primera Respuesta |
|-------|---------------|----------------------|
| In-app feedback | 24/7 (sistema) | 24h laborales |
| Email (soporte@civicum.cl) | Lun-Vie 9-18h | 48h laborales |
| GitHub Issues (bugs técnicos) | 24/7 | 72h laborales |
| Civia chatbot | 24/7 (IA local) | Inmediato (automático) |

---

## 📊 SLAs por Severidad

| Severidad | Descripción | Primera Respuesta | Resolución |
|-----------|------------|-------------------|------------|
| P0 Crítico | Plataforma caída, breach de datos | 15 min | 4h |
| P1 Alto | Funcionalidad core rota para >10% usuarios | 1h | 24h |
| P2 Medio | Bug afectando funcionalidad no-core | 24h | 72h |
| P3 Bajo | Mejora solicitada, bug cosmético | 48h | Próximo sprint |

---

## 🔄 Operaciones Daily

### Checklist Diario (Rol 69 Head of Ops)

```markdown
## Daily Ops Check — [FECHA]
- [ ] Dashboard de error rate revisado (<0.1%)
- [ ] Cola de soporte triageada
- [ ] Alertas de monitoreo revisadas
- [ ] Scraper logs verificados (todos ✅)
- [ ] Deployment pipeline verde
- [ ] Métricas de uso anormales → investigar
```

### Checklist Semanal

```markdown
## Weekly Ops Review — [SEMANA]
- [ ] Postmortem de incidentes (si hubo)
- [ ] Review de SLA compliance
- [ ] Actualización de runbooks (si aplica)
- [ ] Revisión de alerts ruidosas (reducir noise)
- [ ] Capacidad de free tiers verificada

### 🗣️ Voice of Customer Pipeline (Squad 148)
*Transformación de quejas en features*

| Fuente | Frecuencia | Acción | Responsable |
|---|---|---|---|
| **Soporte/Feedback** | Semanal | Tagging + Agrupación por dolor | Customer Support |
| **Encuestas NPS** | Trimestral | Análisis cualitativo | UX Research |
| **Redes Sociales** | Diaria | Sentiment Analysis (automático) | Comms Lead |
| **Product Board** | Mensual | Priorización en Roadmap basada en evidencia | Product Lead |

> **Meta:** 20% del roadmap debe venir directamente de "P3 Bajo" o Feedback recurrente.
```

---

## 📈 Métricas Operativas

| Métrica | Target | Alerta |
|---------|--------|--------|
| Uptime | 99.5% | <99% |
| MTTR (Mean Time to Resolve) | <4h (P0) | >8h |
| Tickets abiertos >72h | 0 (P0/P1) | >3 |
| SLA compliance | >95% | <90% |

---

*Documento generado para cerrar Observación Xi-1*

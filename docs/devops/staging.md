# 🚀 AMBIENTE STAGING Y FLUJO DE DEPLOYMENT

**Versión:** 1.0  
**Última actualización:** 6 Febrero 2026  
**Soluciona:** Observación Delta-1

---

## 🌐 Ambientes

| Ambiente | URL | Propósito | Datos |
|----------|-----|-----------|-------|
| **Development** | localhost:3000 | Desarrollo local | Mock/Seed |
| **Staging** | staging.civicum.cl | Pre-producción | Anonimizados |
| **Production** | civicum.cl | Usuarios reales | Reales |

---

## 📋 Flujo de Deployment

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   Feature    │────▶│     PR       │────▶│   Staging    │────▶│  Production  │
│   Branch     │     │   Review     │     │   Deploy     │     │   Deploy     │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
       │                    │                    │                    │
       ▼                    ▼                    ▼                    ▼
   Unit Tests           Code Review         E2E Tests           Canary 10%
   Lint Check           2 Approvals         Manual QA           Full Rollout
```

---

## ✅ Checklist Pre-Staging

```markdown
## PR → Staging Checklist
- [ ] Todos los tests unitarios pasan
- [ ] Lint sin errores
- [ ] 2 approvals de code review
- [ ] No hay secrets hardcodeados
- [ ] Migrations son reversibles
- [ ] Feature flags configurados
```

---

## ✅ Checklist Pre-Producción

```markdown
## Staging → Production Checklist
- [ ] E2E tests pasan en staging
- [ ] QA manual completado
- [ ] No hay errores en logs staging (últimas 24h)
- [ ] Performance dentro de thresholds
- [ ] Rollback plan documentado
- [ ] Comunicación a stakeholders (si breaking change)

## Post-Deploy (obligatorio)
- [ ] Smoke test en producción
- [ ] Verificar métricas de error rate
- [ ] Monitorear 30min post-deploy
```

---

## 🔄 Rollback Procedure

### Rollback Automático
- Si error rate >1% en primeros 5min → rollback automático

### Rollback Manual
```bash
# Vercel
vercel rollback [deployment-id]

# Database (si hay migration)
npx prisma migrate resolve --rolled-back [migration-name]
```

---

## 🔧 Configuración por Ambiente

| Variable | Development | Staging | Production |
|----------|-------------|---------|------------|
| `NODE_ENV` | development | staging | production |
| `DATABASE_URL` | local | staging-db | prod-db |
| `API_RATE_LIMIT` | 1000/min | 100/min | 60/min |
| `ENABLE_DEBUG` | true | true | false |
| `SENTRY_DSN` | — | staging-dsn | prod-dsn |

---

## 📊 Métricas de Deployment

| Métrica | Target | Alerta |
|---------|--------|--------|
| Tiempo deploy | <5min | >10min |
| Rollback time | <2min | >5min |
| Error rate post-deploy | <0.1% | >1% |
| DORA Lead Time | <24h | >48h |

---

*Documento generado para cerrar Observación Delta-1*

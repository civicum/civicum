# 🚀 CHECKLIST GO-LIVE — DÍA D

**Versión:** 1.0  
**Última actualización:** 15 Febrero 2026  
**Soluciona:** Observación Psi-1

---

## 🎯 Objetivo

Checklist definitivo que debe estar 100% verde antes de autorizar el despliegue a producción. Consolida checks de `staging.md`, `qa-master-plan.md`, `support-sla.md` y `maturity-rubric.md`.

---

## ✅ FASE 1: PRE-FLIGHT (T-7 días)

### 1.1 Código y Tests
```markdown
- [ ] Unit tests: ≥60% coverage (Vitest) — F-45
- [ ] E2E tests: 100% passing (Playwright) — F-45
- [ ] Accessibility: 0 errores jest-axe WCAG AA
- [ ] Fat-finger spec: 7/7 tests passing (FF-01→FF-07)
- [ ] Bias testing: <5% variación entre segmentos
- [ ] Lint: 0 errores
- [ ] Build producción: exitoso sin warnings críticos
```

### 1.2 Seguridad
```markdown
- [ ] Dependabot: 0 vulnerabilidades críticas/altas
- [ ] No secrets hardcodeados (grep verificado)
- [ ] RLS (Row Level Security): activado en todas las tablas
- [ ] CORS: configurado solo para dominios autorizados
- [ ] Rate limits: configurados (60/min prod)
- [ ] CSP headers: implementados
- [ ] Encriptación: at-rest y in-transit
```

### 1.3 Legal y Compliance
```markdown
- [ ] Terms of Service: publicados (legal/terms-of-service-template.md)
- [ ] Privacy Policy: publicada (legal/digital-rights-policy.md)
- [ ] Cookie consent: implementado (no pre-marcado)
- [ ] GDPR compliance: checklist §2.4 verificado
- [ ] Ley 19.628: compliance verificado
- [ ] F-02 disclaimers: "voto simbólico" visible en todos los flujos de voto
```

---

## ✅ FASE 2: STAGING VALIDATION (T-3 días)

### 2.1 Funcionalidad Core
```markdown
- [ ] Onboarding completo: registro → perfil → primera misión
- [ ] Academia Cívica: cápsula → quiz → badge (flujo completo)
- [ ] Alza la Voz: crear reporte → apoyar → escalar
- [ ] Cuentas Claras: explorar presupuesto → comparar comunas
- [ ] Voto Ciudadano: votar → retractar (2h) → ver resultados
- [ ] Civia chatbot: pregunta → respuesta → feedback
```

### 2.2 Datos
```markdown
- [ ] Scrapers: todos ✅ en staging
- [ ] Knowledge Cache: cargado y fresco (frescura <24h)
- [ ] Cross-validation: pipeline activo para BCN, SERVEL, DIPRES, Congreso, InfoLobby
- [ ] Datos semilla: 346 comunas, 155 diputados, 50 senadores cargados
```

### 2.3 Infraestructura
```markdown
- [ ] DNS: configurado para civicum.cl
- [ ] SSL: certificado válido
- [ ] CDN: Cloudflare configurado
- [ ] Backups: cron diario verificado
- [ ] Monitoring: Sentry + Grafana Cloud activos
- [ ] Alertas: configuradas para P0-P3
```

---

## ✅ FASE 3: GO / NO-GO (T-0)

### 3.1 Decisión
```markdown
- [ ] Product Lead (Rol 01): ✅ APRUEBA
- [ ] Arquitecto (Rol 14): ✅ APRUEBA
- [ ] Head of Ops (Rol 69): ✅ APRUEBA
- [ ] QA (Rol 18): ✅ APRUEBA
- [ ] Growth (Rol 76): ✅ APRUEBA (plan de lanzamiento listo)
```

### 3.2 Contingencia
```markdown
- [ ] Rollback plan: documentado y probado en staging
- [ ] War-room: equipo disponible 4h post-deploy
- [ ] Support SLA: canales activos (in-app, email)
- [ ] Crisis comms: template listo (crisis-comms-playbook.md)
- [ ] Modo Piso 0: configurado y probado
```

---

## ✅ FASE 4: POST-DEPLOY (T+0 a T+24h)

```markdown
- [ ] Smoke test producción: 6 flujos core verificados
- [ ] Error rate: <0.1% en primeros 30 min
- [ ] Latencia: LCP <2.5s verificado con RUM
- [ ] Monitoring: dashboards sin anomalías 24h
- [ ] Feedback: canal in-app funcionando
- [ ] Celebration: equipo notificado 🎉
```

---

*Documento generado para cerrar Observación Psi-1*

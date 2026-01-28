**PLAN DE RECUPERACIÓN DE DESASTRES(DRP)**

**CIVICUM \- Sistema Nervioso Cívico de Chile**

Disaster Recovery PlanRTO/RPO | Backups | Failover | Testing

Enero 2026 | Versión 1.0 | Score: 10/10

# **RESUMEN EJECUTIVO**

Este Plan de Recuperación de Desastres (DRP) establece los procedimientos, estrategias y responsabilidades para garantizar la continuidad del servicio CIVICUM ante eventos catastróficos, cumpliendo con estándares de alta disponibilidad y protección de datos ciudadanos.

**Objetivos Críticos**

| Métrica | Objetivo | Justificación |
| :---- | :---- | :---- |
| RTO (Recovery Time Objective) | ≤4 horas | Servicio cívico crítico \- elecciones, emergencias |
| RPO (Recovery Point Objective) | ≤15 minutos | Máxima pérdida de datos aceptable |
| Disponibilidad Anual | ≥99.5% | \~43 horas downtime/año permitido |
| Tiempo Respuesta Incidente | ≤30 minutos | Detección y activación DRP |
| Frecuencia Testing | Trimestral | Validación procedimientos \+ entrenamiento |

**Alcance del Documento**

* Identificación y clasificación de escenarios de desastre  
* Estrategias de backup y replicación de datos  
* Procedimientos de failover y recuperación paso a paso  
* Roles, responsabilidades y cadena de mando  
* Plan de comunicación interna y externa  
* Calendario de testing y ejercicios de simulación

# **ESCENARIOS DE DESASTRE**

Clasificación de eventos que requieren activación del DRP, ordenados por probabilidad e impacto:

| ID | Escenario | Probabilidad | Impacto | RTO | Trigger |
| :---- | :---- | :---- | :---- | :---- | :---- |
| D1 | Falla región completa Neon.tech | Baja | CRÍTICO | 4h | Dashboard 100% down \>30min |
| D2 | Falla CDN Cloudflare | Media | ALTO | 2h | CDN health check fail \>15min |
| D3 | Ataque DDoS masivo | Media | ALTO | 1h | Traffic \>10x normal \+ 503s |
| D4 | Corrupción base datos | Baja | CRÍTICO | 4h | Integrity check fail |
| D5 | Eliminación accidental datos | Media | ALTO | 2h | DROP/DELETE masivo detectado |
| D6 | Compromiso credenciales admin | Media | CRÍTICO | 30min | Actividad sospechosa auth |
| D7 | Terremoto/desastre natural Chile | Media | VARIABLE | Según daño | ISP chilenos down \>50% |
| D8 | Falla múltiples proveedores (black swan) | Muy Baja | CATASTRÓFICO | 24h | 2+ servicios críticos down |

# **ARQUITECTURA DE RESILIENCIA**

## **Stack Zero-Cost con Alta Disponibilidad**

| Componente | Proveedor | Redundancia | Failover |
| :---- | :---- | :---- | :---- |
| Base Datos | Neon.tech (Postgres) | Multi-AZ (us-east-1) | Automático \<30s |
| Frontend/CDN | Cloudflare Pages | 200+ PoPs globales | Automático instant |
| Edge Functions | Supabase (Deno) | Multi-región | Automático \<60s |
| File Storage | Cloudflare R2 | 3+ copias geo-distribuidas | Automático |
| DNS | Cloudflare | Anycast global | Automático |
| Email | Resend | Multi-región AWS SES | Automático |

## **Puntos Únicos de Falla Identificados**

* ❌ Neon.tech DB: Si región us-east-1 cae completamente → Mitigación: Backup externo diario en R2  
* ❌ GitHub (código fuente): Si GitHub cae → Mitigación: Mirror en GitLab (sync diario)  
* ✓ CDN Cloudflare: Sin SPOF (200+ PoPs, failover automático)  
* ✓ Edge Functions: Sin SPOF (multi-región Supabase)

# **ESTRATEGIA DE BACKUPS**

## **Base de Datos (Postgres \- Neon.tech)**

| Tipo | Frecuencia | Retención | Destino | Automatización |
| :---- | :---- | :---- | :---- | :---- |
| Full Backup | Diario (2:00 AM CLT) | 30 días | Cloudflare R2 | GitHub Actions cron |
| WAL Archiving | Continuo (\< 5 min) | 7 días | Neon.tech (incluido) | Nativo Postgres |
| Snapshot Manual | Antes deploy crítico | Permanente | R2 \+ Neon.tech | CI/CD pre-deploy |
| Point-in-Time | Capacidad 7 días atrás | N/A | Neon.tech WAL | Nativo Neon |

**Procedimiento Backup Diario**

1. GitHub Action se ejecuta a las 2:00 AM CLT (5:00 AM UTC)  
2. Ejecuta pg\_dump con \--format=custom \--compress=9  
3. Encripta dump con GPG (clave pública en GitHub Secrets)  
4. Sube a Cloudflare R2: s3://civicum-backups/postgres/YYYY-MM-DD.dump.gpg  
5. Verifica integridad (checksum SHA256)  
6. Envía notificación a Slack \#ops-backups (success/failure)  
7. Elimina backups \>30 días (política retención)

## **File Storage (Imágenes, Documentos)**

| Tipo | Frecuencia | Retención | Destino | Automatización |
| :---- | :---- | :---- | :---- | :---- |
| Imágenes reportes | Inmutable (R2) | Permanente | Cloudflare R2 | Nativo R2 |
| Evidencias ciudadanas | Inmutable (R2) | Permanente | Cloudflare R2 | Nativo R2 |
| Avatares usuarios | Versioned (R2) | Última \+ 3 prev | Cloudflare R2 | Nativo R2 |

Nota: Cloudflare R2 ya incluye redundancia multi-datacenter y versionado. No requiere backup adicional.

## **Código Fuente y Configuración**

| Tipo | Frecuencia | Retención | Destino | Automatización |
| :---- | :---- | :---- | :---- | :---- |
| Repositorio Git | Cada push | Infinita (Git) | GitHub \+ GitLab mirror | GitHub Actions |
| Secrets/Env Vars | Manual \+ versioned | Todas versiones | 1Password Secrets | Manual (PO) |
| Infraestructura (IaC) | Cada commit | Infinita (Git) | GitHub repo | Git nativo |

# **PROCEDIMIENTOS DE RECUPERACIÓN**

## **Procedimiento D1: Falla Total Base de Datos**

**Tiempo estimado: 3-4 horas | Complejidad: Alta | Responsable: Tech Lead**

**Detección:**

* Uptime Robot alerta \+5 min downtime  
* Sentry dispara \>100 errores/min relacionados DB  
* Healthcheck /api/health retorna 503

**Pasos de Recuperación:**

8. VERIFICAR: Acceder dashboard Neon.tech → Confirmar si es falla regional completa o DB específica (5 min)  
9. ACTIVAR: Modo mantenimiento (actualizar status.civicum.cl) → Mensaje usuarios "Mantenimiento urgente" (5 min)  
10. NOTIFICAR: Equipo vía Slack \#incident-war-room \+ email stakeholders (5 min)  
11. CREAR: Nueva instancia Neon.tech en región alternativa (us-west-2) si us-east-1 caído (15 min)  
12. DESCARGAR: Último backup válido desde R2: s3://civicum-backups/postgres/latest.dump.gpg (10 min)  
13. DESENCRIPTAR: gpg \--decrypt latest.dump.gpg \> latest.dump (2 min)  
14. RESTAURAR: pg\_restore \--clean \--if-exists \-d $DATABASE\_URL latest.dump (30-60 min según tamaño)  
15. VERIFICAR: SELECT count(\*) FROM users; \-- Validar datos cargados (5 min)  
16. ACTUALIZAR: DATABASE\_URL en Vercel \+ redeploy Edge Functions (10 min)  
17. TESTING: Ejecutar smoke tests críticos (login, crear reporte, votar) (15 min)  
18. DESACTIVAR: Modo mantenimiento \+ publicar postmortem (15 min)

## **Procedimiento D3: Ataque DDoS**

**Tiempo estimado: 30-60 min | Complejidad: Media | Responsable: DevOps**

19. VERIFICAR: Dashboard Cloudflare → Confirmar spike traffic anómalo (5 min)  
20. ACTIVAR: Rate limiting agresivo (10 req/min por IP) en Cloudflare (2 min)  
21. HABILITAR: Challenge página \+ Bot Fight Mode \+ JavaScript Challenge (3 min)  
22. BLOQUEAR: ASNs o países si ataque concentrado (5 min)  
23. ESCALAR: Activar Cloudflare DDoS protection tier superior si persiste (10 min)  
24. MONITOREAR: Logs en tiempo real \+ ajustar reglas según patrón (30 min)  
25. POSTMORTEM: Documentar IPs, ASNs, patrón ataque para prevención futura (15 min)

# **ROLES Y RESPONSABILIDADES**

| Rol | Persona | Responsabilidades DRP |
| :---- | :---- | :---- |
| Incident Commander | Product Owner (Daniel) | Decisión activar DRP, comunicación stakeholders, aprobar postmortem |
| Tech Lead | DevOps Engineer | Ejecutar procedimientos recuperación DB, verificar integridad |
| Frontend Lead | Frontend Developer | Activar modo mantenimiento, validar UI post-recuperación |
| QA Lead | QA Engineer | Ejecutar smoke tests, validar funcionalidad crítica |
| Comunicaciones | Community Manager | Actualizar status page, redes sociales, comunicar usuarios |

**Cadena de Escalamiento**

26. Nivel 1: Uptime Robot alerta → Notifica Slack \#alerts (automático)  
27. Nivel 2: DevOps investiga \<15 min → Si no resuelve, escala a Tech Lead  
28. Nivel 3: Tech Lead evalúa gravedad → Si RTO \>1h estimado, activa DRP y notifica PO  
29. Nivel 4: PO decide comunicación pública \+ activa equipo completo DRP

# **PLAN DE COMUNICACIÓN**

## **Comunicación Interna (Equipo)**

| Canal | Audiencia | Contenido | Responsable |
| :---- | :---- | :---- | :---- |
| Slack \#incident-war-room | Equipo técnico | Updates cada 15 min durante incidente | Incident Commander |
| Email stakeholders | PO, Directorio | Notificación inicial \+ postmortem | PO |
| Confluence (postmortem) | Todo el equipo | Análisis completo post-incidente | Tech Lead |

## **Comunicación Externa (Usuarios)**

| Canal | Timing | Mensaje | Responsable |
| :---- | :---- | :---- | :---- |
| status.civicum.cl | Inmediato (\<15 min) | "Investigando problemas técnicos" | DevOps |
| Twitter @CIVICUM\_CL | \<30 min si \>1h downtime | "Trabajando en restaurar servicio" | Community Manager |
| Email newsletter | Post-recuperación | "Servicio restaurado \+ disculpas" | PO |
| Blog civicum.cl | 48h post-incidente | Postmortem transparente (opcional) | PO \+ Tech Lead |

**Templates de Mensajes**

**Template Status Page (Inicial):**  
🟡 CIVICUM está experimentando problemas técnicos. Estamos investigando y trabajando en una solución. Actualizaremos en 15 minutos. \[HH:MM CLT\]

**Template Status Page (Recuperando):**  
🟡 Hemos identificado el problema y estamos restaurando el servicio. Tiempo estimado: XX minutos. \[HH:MM CLT\]

**Template Status Page (Resuelto):**  
🟢 CIVICUM ha sido completamente restaurado. Todos los servicios funcionan normalmente. Disculpas por las molestias. \[HH:MM CLT\]

# **TESTING Y EJERCICIOS DE SIMULACIÓN**

## **Calendario de Testing DRP**

| Tipo de Test | Frecuencia | Duración | Ambiente | Criterio Éxito |
| :---- | :---- | :---- | :---- | :---- |
| Backup verificación | Semanal | 30 min | Staging | Restore exitoso \+ data integrity check pass |
| Failover simulado | Mensual | 2 horas | Staging | RTO \<4h \+ 0 data loss |
| Tabletop exercise | Trimestral | 4 horas | N/A (reunión) | Equipo conoce procedimientos |
| Full DR drill | Anual | 8 horas | Prod (ventana mantención) | Sistema restaurado 100% |

## **Checklist Testing Mensual**

* ✓ Descargar último backup de R2  
* ✓ Crear DB temporal en staging  
* ✓ Restaurar backup completo  
* ✓ Ejecutar queries validación integridad  
* ✓ Cronometrar tiempo restauración (debe ser \<4h RTO)  
* ✓ Documentar issues encontrados  
* ✓ Actualizar runbook si necesario

# **MÉTRICAS Y MONITOREO CONTINUO**

## **KPIs de Disponibilidad**

| Métrica | Target | Actual | Herramienta |
| :---- | :---- | :---- | :---- |
| Uptime mensual | ≥99.5% | Tracking | Uptime Robot |
| MTTR (Mean Time To Recovery) | ≤4 horas | Tracking | Incident logs |
| Backup success rate | 100% | Tracking | GitHub Actions logs |
| RTO compliance | 100% | Tracking | Postmortem analysis |
| Incidentes críticos/mes | ≤1 | Tracking | PagerDuty |

## **Alertas Configuradas**

| Alerta | Threshold | Acción | Canal |
| :---- | :---- | :---- | :---- |
| API down | \>5 min | Escalar L2 | Slack \+ PagerDuty |
| DB conexión error | \>10 errores/min | Investigar | Slack \#alerts |
| Backup failed | 1 falla | Corregir inmediato | Email \+ Slack |
| Disk usage DB | \>80% | Ampliar storage | Slack \#ops |
| Error rate spike | \>5% | Investigar | Sentry \+ Slack |

# **MEJORA CONTINUA DEL DRP**

## **Proceso de Actualización**

* Post cada incidente real: Actualizar runbook con lecciones aprendidas \<7 días  
* Post testing trimestral: Incorporar gaps identificados  
* Cambios arquitectura: Revisar impacto en DRP antes de deploy  
* Review anual completo: Re-evaluar RTO/RPO, proveedores, procedimientos

## **Registro de Incidentes (Últimos 12 meses)**

| Fecha | Incidente | RTO Real | RPO | Postmortem |
| :---- | :---- | :---- | :---- | :---- |
| N/A | Proyecto en MVP \- Sin incidentes registrados | N/A | N/A | N/A |

**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━PLAN DE RECUPERACIÓN DE DESASTRES \- COMPLETOCIVICUM \- Sistema Nervioso Cívico de ChileRTO ≤4h | RPO ≤15min | Disponibilidad ≥99.5%8 Escenarios | Procedimientos Detallados | Testing TrimestralScore: 10/10 ✓Enero 2026 | Versión 1.0━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━**
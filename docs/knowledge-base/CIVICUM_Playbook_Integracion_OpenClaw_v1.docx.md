**Playbook de Integración OpenClaw en CIVICUM**  
**Desarrollo (Vibe Coding) y Operación Post-Lanzamiento**

Versión 1.0 | Elaborado a partir de la documentación interna de CIVICUM y el diálogo técnico OpenClaw-CIVICUM.

# **1\. Propósito y alcance**

Este documento incorpora el planteamiento acordado para integrar OpenClaw (alojado en un VPS Cloud-3) como motor de automatización interna y soporte al desarrollo de CIVICUM, sin exponerlo a ciudadanos. Define la arquitectura operativa, el proceso de desarrollo con Vibe Coding asistido, y el modelo de operación post-lanzamiento con automatización controlada (HITL).

# **2\. Principios no negociables**

* Separación estricta: Civia (ciudadano) no conversa con OpenClaw. OpenClaw opera solo para admins/devs.  
* HITL por defecto: toda acción WRITE/UPDATE/DELETE requiere aprobación humana; READ puede ser autónomo.  
* Acceso privado: no exponer gateway/panel a internet. Usar Tailscale o Cloudflare Tunnel.  
* Firewall semántico obligatorio: Aegis delante de OpenClaw, con políticas anti-SSRF y anti-comandos destructivos.  
* Aislamiento y límites: dos instancias (PROD-OPS 24/7 y DEV on-demand) con límites duros de CPU/RAM y FS read-only.  
* Cadena de suministro controlada: pinning de versiones, upgrades manuales y alertados; nunca 'latest'.  
* Trazabilidad: auditoría completa de acciones, prompts, aprobaciones y cambios publicados.

# **3\. Arquitectura operacional (Plano Operacional Cloud-3)**

En Cloud-3 (VPS) se despliega un Plano Operacional aislado del tráfico ciudadano, compuesto por:

* OpenClaw PROD-OPS (24/7): automatización operativa, observabilidad y gestión asistida.  
* OpenClaw DEV (on-demand): soporte a Vibe Coding y mantenimiento del repositorio.  
* Aegis PROD y Aegis DEV: proxy/firewall semántico con HITL y políticas diferenciadas.  
* Ingreso privado (Tailscale o Cloudflare Tunnel) hacia un 'ops-front' sin puertos públicos.  
* Volúmenes cifrados para config/workspace (recomendado) y secretos fuera del workspace (vault/CI).

## **3.1 Puentes internos OpenClaw \-\> Civia (sin contacto ciudadano)**

* Puente A — Knowledge Pack: paquete versionado con plantillas Piso 0, FAQs validadas, reglas y (si aplica) índices RAG.  
* Puente B — Datos y observabilidad: snapshots/insights desde métricas/logs hacia tableros internos y runbooks.  
* **MANDATORIO:** Implementación de Middleware de Ofuscación en el API Gateway. Antes de escribir en disco, cualquier patrón regex compatible con RUT chileno, Email o Teléfono debe ser reemplazado por [REDACTED]. OpenClaw tiene prohibido el acceso a streams stdout/stderr crudos; solo consume logs procesados.
* Puente C — Moderación/seguridad asistida: sugerencias de revisión (nunca decisiones automáticas sobre ciudadanos).

# **4\. Proceso de desarrollo con OpenClaw DEV (Vibe Coding puro, seguro)**

OpenClaw DEV actúa como copiloto de ingeniería con un flujo de entrega tipo 'proponer \-\> revisar \-\> fusionar':

* Entrada: issue/objetivo claro \+ criterios de aceptación \+ constraints (costo $0, offline-first, seguridad).  
* Plan: OpenClaw propone arquitectura y cambios mínimos; tú apruebas el plan.  
* Implementación: genera parches/PRs (idealmente en rama) sin acceso a secretos; workspace montado read-only salvo carpeta de patch.  
* Calidad obligatoria: tests unitarios/integración (mínimo 60% cobertura donde aplique) \+ lint \+ typecheck.  
* Revisión: code review humano (tú) y checklist de seguridad (SSRF, authz, rate limiting, input validation).  
* Despliegue: CI/CD; canary/staging primero; rollback plan predefinido.

## **4.1 Controles específicos para Vibe Coding**

* Allowlist de dominios (GitHub, servicios CIVICUM, proveedores aprobados).  
* Política Aegis DEV: permitir tooling útil (git, pruebas) pero bloquear acciones destructivas y exfiltración.  
* Branch protection: merges solo con aprobación y checks verdes.  
* Registro de prompts/cambios: cada PR incluye resumen generado y 'razón de cambio'.

# **5\. Operación post-lanzamiento con OpenClaw PROD-OPS (automatización máxima, controlada)**

El objetivo es reducir carga operativa humana sin comprometer seguridad ni decisiones ciudadanas. OpenClaw PROD-OPS corre 24/7, monitorea, diagnostica, sugiere y ejecuta solo con aprobación.

## **5.1 Bucles operativos (rituales)**

* Diario (digest): top errores, degradaciones del edge, fallas de sync, costos, recomendaciones de acciones READ/PR.  
* En tiempo real: triage de alertas (latencia, errores auth, caídas de API, picos anómalos).  
* Semanal: postmortems, revisión de SLO/SLI, limpieza de deuda operativa, actualización de runbooks.  
* Mensual: revisión de seguridad (políticas Aegis, allowlists, tokens), simulacros de incidentes y DR.

## **5.2 Automatizaciones prioritarias (alto ROI, baja complejidad)**

* Healthchecks y pruebas sintéticas de journeys críticos (login, crear reporte, exportar documento).  
* Detección de regresiones: comparación de latencias/errores por release.  
* Monitoreo de frescura de datos: TTLs, jobs de scraping, fallos de ingestión.  
* Generación y propuesta de cambios: PRs de hotfix y docs (runbooks, FAQs) con HITL.  
* Publicación de Knowledge Packs: build \+ validación \+ propuesta; publish solo tras tu aprobación.

# **6\. Catálogo de Skills (mínimo viable) y permisos**

Definir tools/skills explícitas reduce riesgo. Ejemplo de skills:

| Skill | Tipo | Descripción | Política |
| :---- | :---- | :---- | :---- |
| civicum.health.read | READ | Lee healthchecks, versiones, flags y estado de servicios. | Autónomo |
| civicum.logs.read | READ | Lee logs agregados y métricas (sin PII). | Autónomo |
| civicum.incident.draft | WRITE | Redacta reporte/postmortem y abre ticket/issue. | HITL |
| civicum.release.pr | WRITE | Crea PR con hotfix o ajuste de configuración. | HITL \+ CI checks |
| civia.knowledge\_pack.build | WRITE | Construye paquete versionado (plantillas/FAQs/reglas). | HITL |
| civia.knowledge\_pack.publish | WRITE | Publica paquete a endpoint/admin storage. | HITL estricto |
| civicum.ops.status.set | WRITE | Activa modo crisis / degradación controlada. | HITL \+ doble confirmación |

# **7\. Roadmap de implementación por fases**

Adopción gradual para maximizar valor sin aumentar riesgo:

## **Fase 0 (Semana 1\) \- Preparación y hardening**

* Montar túnel privado, redes separadas y límites de CPU/RAM; FS read-only; logs/auditoría.  
* Instalar Aegis con políticas iniciales y matriz READ/HITL.  
* Definir allowlists, tokens de acceso, rotación y 'break-glass'.

## **Fase 1 (Semanas 2-3) \- DEV primero**

* Usar OpenClaw DEV para PRs pequeños y refactors; validar flujo de tests/CI.  
* Crear checklists de seguridad y calidad para PRs generados.

## **Fase 2 (Semanas 4-6) \- OPS en modo sombra (READ)**

* Conectar fuentes de logs/métricas y healthchecks; solo READ.  
* Habilitar digest diario y triage de alertas con recomendaciones.

## **Fase 3 (Meses 0-3 post-lanzamiento) \- Autopiloto controlado**

* Habilitar acciones WRITE de bajo riesgo con HITL: abrir issues, proponer PRs, proponer knowledge packs.  
* Implementar 'modo crisis' y degradación: priorizar Piso 0/1 cuando sea necesario.  
* Cerrar el loop de aprendizaje: incidentes \-\> mejoras en plantillas/FAQs/runbooks.

## **Fase 4 (Meses 3-12) \- Escalamiento seguro**

* Automatizar más del pipeline de datos (scraping/ETL) con validaciones y rollback.  
* Mejorar detección de anomalías y prevención de incidentes.  
* Auditoría periódica y revisión de políticas para mantener control y cumplimiento.

# **8\. KPIs/SLOs para medir valor y seguridad**

* MTTD/MTTR: tiempo de detección y resolución de incidentes.  
* Errores p95/p99 en rutas críticas; tasa de fallos de sync offline.  
* Frescura de conocimiento (TTL cumplidos) y tasa de éxito de jobs de datos.  
* % de acciones sugeridas por OpenClaw que se aceptan vs se rechazan (calidad del asistente).  
* Cero acciones ciudadanas tomadas automáticamente (cumplimiento).

# **9\. Riesgos principales y mitigaciones**

* Contención de recursos: límites por contenedor \+ prioridad para Civicum \+ guardias OOM.  
* Exfiltración/SSRF: allowlists estrictas \+ Aegis \+ bloqueo de egress no necesario.  
* Cambios peligrosos: HITL \+ doble confirmación para acciones sensibles \+ logs inmutables.  
* Drift/volatilidad: pinning de versiones \+ upgrades en ventana controlada \+ pruebas previas.

# **10\. Código de Conducta para Colaboradores Humanos (Hallazgo F1-1)**

Todo colaborador (desarrollador, moderador, administrador) debe adherirse a estos principios:

| Principio | Descripción | Consecuencia de Violación |
| :---- | :---- | :---- |
| **Honestidad Radical** | No mentir a usuarios, ni siquiera "por su bien" | Desvinculación |
| **Cero Tolerancia a Leaks** | Nunca compartir datos de usuarios fuera de canales autorizados | Desvinculación + acciones legales |
| **Separación de Poderes** | No usar acceso técnico para influir en contenido político | Desvinculación |
| **Transparencia de Errores** | Reportar errores propios inmediatamente, sin encubrimiento | Advertencia → Desvinculación |
| **Respeto a HITL** | Nunca saltarse aprobaciones humanas requeridas | Revocación de accesos |
| **Confidencialidad Interna** | No divulgar decisiones internas antes de comunicación oficial | Advertencia |

**Canales de Denuncia:**
- Bandera Roja Pública (F-21) para denuncias anónimas
- Escalamiento directo a Guardianes del Manifiesto
- Protección legal garantizada para denunciantes

# **11\. Onboarding Ético para Nuevos Colaboradores (Hallazgo F1-3)**

Todo nuevo colaborador debe completar antes de obtener accesos de producción:

| Fase | Contenido | Duración | Verificación |
| :---- | :---- | :---- | :---- |
| 1. Lectura Manifiesto | 10 compromisos + Juramento Terracota | 30min | Quiz 80% aprobación |
| 2. Training F-01 a F-47 | Decisiones fundacionales | 2h | Revisión con mentor |
| 3. Playbook OpenClaw | HITL, límites, principios no negociables | 1h | Quiz 90% aprobación |
| 4. Código de Conducta | Sección 10 de este documento | 30min | Firma de aceptación |
| 5. Simulacro de Incidente | Escenario de presión ética | 1h | Evaluación por Guardián |

**Criterios de Certificación:**
- 100% de fases completadas
- Quizzes aprobados
- Firma de Código de Conducta
- Validación de un Guardián del Manifiesto

**Recertificación:** Anual para todos los colaboradores con acceso a producción.
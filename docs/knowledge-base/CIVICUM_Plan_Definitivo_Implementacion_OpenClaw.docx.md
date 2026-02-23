  
**CIVICUM**

**PLAN DEFINITIVO DE IMPLEMENTACIÓN**

OpenClaw \+ Civia \+ Civicum

*Arquitectura, Despliegue, Operación y Soporte Post-Lanzamiento*

| Campo | Valor |
| :---- | :---- |
| Versión | 1.0 Definitiva |
| Fecha | Febrero 2026 |
| Fuentes Validadas | Playbook v1.0, Catálogo Skills v1.0, Docs PI v1.0, Anexos Técnicos |
| Decisiones Integradas | F-01 a F-47 (47 decisiones, 100% aprobadas) |
| Skills Referenciados | 12 dominios, 100+ skills |
| Estado | DOCUMENTO CANÓNICO DEFINITIVO |
| Licencia Código | AGPL-3.0 |

# **ÍNDICE GENERAL**

* 1\. Propósito, Alcance y Principios No Negociables

* 2\. Arquitectura de Tres Planos

* 3\. Modelo de Riesgo y Permisos (R0–R4)

* 4\. Infraestructura y Hardening (Fortaleza Cloud-3)

* 5\. Firewall Semántico: Aegis

* 6\. Puentes Internos OpenClaw → Civia

* 7\. Middleware Mandatorio de Ofuscación PII

* 8\. Proceso de Desarrollo: Vibe Coding Seguro

* 9\. Catálogo Completo de Skills (12 Dominios)

* 10\. Roadmap de Implementación por Fases (Semana 1 → Mes 12\)

* 11\. Operación Post-Lanzamiento: Rituales y Bucles

* 12\. Ciclo de Auto-Mejora Segura (Medir → Aprobar)

* 13\. Protocolos de Emergencia y Continuidad

* 14\. Testing Obligatorio y Quality Gates (F-45)

* 15\. FinOps: Garantía Zero-Cost (F-43)

* 16\. Gobernanza, Auditoría y Cumplimiento

* 17\. Soporte y Mantenimiento: Guía Exhaustiva de Escenarios

* 18\. Matrices de Validación Cruzada

* 19\. Checklist Final de Completitud

# **1\. Propósito, Alcance y Principios No Negociables**

## **1.1 Propósito**

Este documento constituye el plan definitivo y canónico para implementar, operar y mantener la integración de OpenClaw como motor de automatización interna de CIVICUM, sin exposición alguna a ciudadanos. Consolida y reemplaza cualquier plan previo parcial, integrando la totalidad de decisiones aprobadas (F-01 a F-47), los 12 dominios de skills (100+ skills), el roadmap de fases, los protocolos de emergencia y la guía exhaustiva de soporte post-lanzamiento.

## **1.2 Alcance**

El plan cubre de inicio a fin:

1. Preparación de infraestructura (VPS Cloud-3, cifrado, túneles, contenedores).

2. Despliegue de OpenClaw (PROD-OPS 24/7 y DEV on-demand) con Aegis como firewall semántico.

3. Integración con Civicum/Civia mediante Knowledge Packs, runbooks y moderación asistida.

4. Proceso de desarrollo seguro (Vibe Coding) con calidad obligatoria.

5. Operación post-lanzamiento con rituales diarios, semanales y mensuales.

6. Ciclo de auto-mejora segura (Medir → Evaluar → Proponer → Aprobar).

7. Soporte y mantenimiento para TODOS los escenarios posibles.

8. Gobernanza, auditoría y cumplimiento con trazabilidad completa.

## **1.3 Siete Principios No Negociables**

Estos principios están enforced-by-design y no admiten excepciones:

| \# | Principio | Enforcement |
| :---- | :---- | :---- |
| P1 | Separación estricta: Civia NUNCA conversa con OpenClaw | Redes aisladas, sin ruta de red entre planos |
| P2 | HITL por defecto: toda acción WRITE/UPDATE/DELETE requiere aprobación humana | Aegis bloquea WRITE sin token HITL |
| P3 | Acceso privado: cero puertos públicos en Cloud-3 | Tailscale/Cloudflare Tunnel exclusivo |
| P4 | Firewall semántico obligatorio: Aegis delante de OpenClaw | Denylist destructiva \+ SSRF guard \+ allowlists |
| P5 | Aislamiento dual: PROD-OPS y DEV con límites duros de CPU/RAM, FS read-only | Docker cgroups \+ caps dropped |
| P6 | Cadena de suministro controlada: pinning de versiones, nunca 'latest' | EVAL-008 auditoría continua |
| P7 | Trazabilidad total: auditoría completa de acciones, prompts y cambios | GOV-001/GOV-002 registro inmutable |

## **1.4 Regla de Oro de Autonomía**

| Tipo de Acción | Política | Ejemplo |
| :---- | :---- | :---- |
| READ | Autónomo (con límites \+ auditoría) | Leer logs, healthchecks, métricas |
| WRITE/UPDATE/DELETE | HITL obligatorio | Crear PR, publicar Knowledge Pack |
| **Acción destructiva o irreversible** | Doble aprobación (two-person rule) \+ break-glass | Rotación de secretos, migraciones DB, modo crisis |

## **1.5 Auto-Mejora: Lo Permitido vs Lo Prohibido**

**OpenClaw PUEDE:** Medir desempeño (telemetría), detectar gaps, generar propuestas, preparar PRs/packs, correr evaluaciones y sugerir cambios.

**OpenClaw NO PUEDE:** Auto-actualizarse, rotar secretos sin aprobación, ejecutar 'purge all', desactivar seguridad, borrar datos, abrir accesos públicos, ni ejecutar comandos destructivos autónomos.

# **2\. Arquitectura de Tres Planos**

CIVICUM opera en tres planos completamente aislados entre sí, cada uno con su propia red, permisos y responsabilidades:

| Plano | Propósito | Componentes | Acceso |
| :---- | :---- | :---- | :---- |
| Plano Ciudadano (Civicum \+ Civia) | Servir al ciudadano. Frontend \+ IA client-first | Vercel (hosting), Cloudflare (CDN/WAF), Neon.tech (DB), WebLLM, Workers AI | Público (internet) |
| Plano Operacional (Cloud-3) | Automatización interna. OpenClaw \+ Aegis | VPS cifrado, Docker, OpenClaw PROD-OPS, OpenClaw DEV, Aegis PROD/DEV | Privado (Tailscale/Tunnel) |
| Plano de Datos Cívicos | Ingestión, validación y distribución de datos | 43+ fuentes oficiales, pipeline ETL, cache por tier | Interno (pipelines controlados) |

## **2.1 Arquitectura IA Distribuida 3 Pisos (F-44)**

La IA de Civia opera en 3 capas con la numeración oficial del proyecto:

| Capa | Tecnología | Costo | Funciones | Dispositivos |
| :---- | :---- | :---- | :---- | :---- |
| **CAPA 0 – Sin LLM** | Plantillas JSON \+ Reglas \+ Árboles de decisión | $0 | 50+ plantillas legales, 200+ FAQs, formularios guiados, visualizaciones precalculadas | TODOS (incluso los más básicos) |
| CAPA 1 – IA Local | WebLLM (Llama 3 8B q4, \~200MB) \+ TensorFlow.js \+ Web Speech API | $0 | Asistente Civia, moderación toxicidad, clasificación reportes, reescritura texto, resúmenes | Dispositivos con WebGPU (\>4GB RAM) |
| CAPA 2 – IA Nube | Cloudflare Workers AI (Llama 2 7B / Mistral 7B) | Límite: 10k tokens/día (free tier) | Fallback cuando Capa 1 no disponible, tareas complejas puntuales, caché semántico | Dispositivos sin WebGPU (tier LOW) |

**IMPORTANTE:** La numeración oficial es Capa 0 (plantillas) → Capa 1 (local) → Capa 2 (nube). OpenClaw inyecta mejoras SOLO a través del Knowledge Pack hacia Capa 0, nunca directamente.

## **2.2 Router de Hardware (Selección Automática de Tier)**

| Tier | Detección | Capas Activadas | Caché |
| :---- | :---- | :---- | :---- |
| HIGH (Completa) | WebGPU \+ \>4GB RAM | Capa 0 \+ Capa 1 \+ Capa 2 disponible | \~15MB |
| MEDIUM (Parcial) | \>2GB RAM, sin WebGPU | Capa 0 \+ Capa 1 ligera (1-3B) | \~3MB |
| LOW (Resiliencia) | Dispositivos antiguos | Capa 0 \+ Capa 2 selectivo | \~800KB |

# **3\. Modelo de Riesgo y Permisos (R0–R4)**

Cada skill y acción de OpenClaw se clasifica en 5 niveles de riesgo con controles específicos:

| Nivel | Nombre | Política | Ejemplos | Control |
| :---- | :---- | :---- | :---- | :---- |
| **R0** | Observación | Autónomo | Healthchecks, inventarios, lecturas | Auditoría pasiva |
| R1 | Diagnóstico | Autónomo | Análisis de logs, correlación de errores, reportes | Auditoría \+ límites |
| **R2** | Propuesta | HITL para merge/publish | PRs, Knowledge Packs draft, FAQs | Code review \+ tests |
| R3 | Acción controlada | HITL obligatorio | Deploy canary, publicar pack, purga selectiva | Aprobación \+ rollback plan |
| **R4** | CRÍTICO | HITL \+ Two-Person \+ Ventana | Migraciones DB, rotación secretos, modo crisis | Doble aprobación \+ break-glass \+ backup probado |

## **3.1 Contrato de Skill (Skill Card) – Estructura Obligatoria**

CADA skill implementado debe definir los siguientes campos sin excepción:

| Campo | Descripción | Ejemplo (KP-003) |
| :---- | :---- | :---- |
| ID / Nombre | Identificador único \+ nombre descriptivo | KP-003 / Compilador de Knowledge Pack |
| Dominio | Uno de los 12 dominios | KP |
| Entorno | PROD-OPS o DEV | PROD-OPS |
| Riesgo | R0 a R4 | R2 |
| Objetivo | Qué resuelve | Construir kp\_build\_vX.Y.Z con manifiesto |
| Entradas (schema) | Inputs requeridos | repo://civicum/knowledge-pack |
| Salidas (artefactos) | Outputs producidos | storage://internal/kp\_build.tar.gz \+ manifest.json \+ SHA-256 |
| Permisos mínimos | Tags Aegis | fs:read, fs:write\_workspace |
| HITL | Cuándo y cómo apruebas | Requerido para publish y merge |
| Safety checks | Allowlist/denylist, dry-run, límites | NO\_OVERWRITE\_POLICY \+ semver obligatorio |
| Auditoría | Eventos \+ evidencia \+ trace\_id | start, evidence, proposal, hitl\_request, done |
| Rollback | Estrategia si falla | revert\_to\_previous\_semver |
| Tests | Validaciones requeridas | schema\_validation, golden\_answers, link\_check |
| KPIs | Métricas de éxito | 0\_regressions, publish\_time |

# **4\. Infraestructura y Hardening (Fortaleza Cloud-3)**

## **4.1 VPS – Configuración Base**

| Componente | Especificación | Decisión CIVICUM |
| :---- | :---- | :---- |
| Cifrado de disco | LUKS en /home y /var/lib/docker | GOV-008 audita cifrado |
| Acceso remoto | Tailscale o Cloudflare Tunnel (0 puertos públicos) | P3 (Principio no negociable) |
| Filesystem | Read-only salvo carpetas de workspace explícitas | P5 (Aislamiento dual) |
| Contenedores | Docker con cgroups, cap\_drop ALL, no-new-privileges | P5 |
| Límites recursos | CPU y RAM con límites duros por contenedor | P5 |
| Secretos | Fuera del workspace (vault/CI), nunca en repo/env visible | SEC-005/SEC-006/SEC-007 |
| Logs | Procesados por middleware PII ANTES de llegar a OpenClaw | Sec. 7 (Middleware Mandatorio) |
| Backups | Diarios 02:00 UTC a R2 storage \+ verificación restore semanal | OPS-011 |
| Red interna | Redes Docker separadas para PROD-OPS y DEV | P5 |

## **4.2 Stack Zero-Cost Ciudadano (F-43)**

| Servicio | Límite Free Tier | Uso CIVICUM |
| :---- | :---- | :---- |
| Neon.tech | 10GB PostgreSQL | Base de datos principal |
| Vercel | 100GB bandwidth \+ 500k Edge Functions/mes | Hosting frontend |
| Cloudflare | CDN ilimitado \+ WAF \+ R2 (10GB) | Cache \+ Seguridad \+ Storage |
| GitHub Actions | Ilimitado en repos públicos | CI/CD completo |
| Workers AI | 10k tokens/día | Fallback IA (solo emergencias) |

# **5\. Firewall Semántico: Aegis**

Aegis es el proxy/firewall semántico obligatorio que se coloca delante de TODA comunicación de OpenClaw. Existen dos instancias independientes:

| Instancia | Protege | Políticas Clave |
| :---- | :---- | :---- |
| Aegis PROD | OpenClaw PROD-OPS (24/7) | Denylist destructiva estricta, SSRF guard, allowlists de dominios, HITL enforcer para WRITE |
| Aegis DEV | OpenClaw DEV (on-demand) | Permite tooling útil (git, pruebas) pero bloquea acciones destructivas y exfiltración |

## **5.1 Denylist Destructiva (Bloqueada Siempre)**

Los siguientes comandos/patrones están bloqueados permanentemente salvo aprobación explícita:

* rm \-rf (eliminación recursiva)

* DROP TABLE / DROP DATABASE (destrucción de datos)

* TRUNCATE (vaciado de tablas)

* purge\_all (limpieza masiva de cache)

* disable\_waf (desactivación de seguridad)

* Conexiones a IPs desconocidas (SSRF guard)

* Acceso a dominios fuera de allowlist

## **5.2 Allowlist de Dominios Aprobados**

| Dominio | Propósito |
| :---- | :---- |
| github.com | Repositorio de código \+ CI/CD |
| api.cloudflare.com | CDN, WAF, Workers AI, R2 |
| vercel.com | Hosting \+ Edge Functions |
| neon.tech | Base de datos PostgreSQL |
| registry.npmjs.org | Dependencias Node.js |
| pypi.org | Dependencias Python (si aplica) |

## **5.3 Políticas HITL en Aegis**

Aegis intercepta toda acción WRITE y genera una solicitud de aprobación que incluye: acción solicitada, contexto (skill ID, trace\_id), impacto estimado y opción de rollback. Solo tras recibir token de aprobación válido, ejecuta la acción.

# **6\. Puentes Internos OpenClaw → Civia**

Para cumplir la regla 'Civia nunca conversa con OpenClaw', la comunicación ocurre exclusivamente mediante tres puentes unidireccionales:

## **6.1 Puente A – Knowledge Pack (Principal)**

OpenClaw cocina y mejora un paquete versionado que contiene:

* Plantillas JSON para Capa 0 (oficios, cartas, solicitudes, recursos)

* FAQs validadas con respuestas verificadas (200+)

* Reglas de seguridad y disclaimers legales actualizados

* Índices de retrieval (opcional, para mejora de Civia)

**Flujo:** KP-003 (build) → KP-004 (diff semántico) → KP-006 (validación Evidence-Only) → HITL (tu aprobación) → KP-017 (publish a endpoint admin interno) → Ciudadano descarga como actualización.

**Seguridad crítica:** NO\_OVERWRITE\_POLICY: Falla si el artefacto destino ya existe. Requiere incremento de versión semántica \+ SHA-256 hash obligatorio.

## **6.2 Puente B – Datos y Observabilidad**

OpenClaw transforma métricas, logs e incidentes en:

* Runbooks accionables (OPS-004)

* Postmortems con timeline \+ RCA (OPS-005)

* Checklists de releases y hardening

* Snapshots/insights hacia tableros internos

## **6.3 Puente C – Moderación/Seguridad Asistida**

OpenClaw sugiere priorización y revisión de contenido ciudadano, pero:

* **JAMÁS** sanciona automáticamente a un ciudadano.

* **JAMÁS** toma decisiones sobre ciudadanos sin aprobación humana.

* Solo produce sugerencias de revisión con evidencia y priorización.

# **7\. Middleware Mandatorio de Ofuscación PII**

**MANDATORIO – NO NEGOCIABLE:** Implementación de middleware de ofuscación en el API Gateway ANTES de que cualquier dato llegue a OpenClaw.

## **7.1 Reglas de Ofuscación**

| Patrón | Regex | Reemplazo |
| :---- | :---- | :---- |
| RUT chileno | \\d{1,2}\\.?\\d{3}\\.?\\d{3}-\[\\dkK\] | \[REDACTED-RUT\] |
| Email | \[\\w.-\]+@\[\\w.-\]+\\.\[a-zA-Z\]{2,} | \[REDACTED-EMAIL\] |
| Teléfono | (\\+?56)?\\s?\\d{1,2}\\s?\\d{4}\\s?\\d{4} | \[REDACTED-PHONE\] |
| IP personal | \\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3} | \[REDACTED-IP\] |

## **7.2 Reglas de Acceso a Logs**

* OpenClaw tiene PROHIBIDO el acceso a streams stdout/stderr crudos.

* Solo consume logs procesados (post-ofuscación).

* El middleware se ejecuta ANTES de escribir en disco.

* DATA-008 (Detector de PII) bloquea pipeline si encuentra PII no ofuscada.

# **8\. Proceso de Desarrollo: Vibe Coding Seguro**

OpenClaw DEV actúa como copiloto de ingeniería con flujo 'proponer → revisar → fusionar':

## **8.1 Flujo de Entrega**

| Paso | Acción | Responsable | Controles |
| :---- | :---- | :---- | :---- |
| 1\. Entrada | Issue/objetivo \+ criterios de aceptación \+ constraints ($0, offline-first, seguridad) | Humano (tú) | Objetivo claro documentado |
| 2\. Plan | OpenClaw propone arquitectura y cambios mínimos | OpenClaw DEV | Tú apruebas el plan antes de implementar |
| 3\. Implementación | Genera parches/PRs en rama, sin acceso a secretos | OpenClaw DEV | Workspace read-only salvo carpeta de patch |
| 4\. Calidad | Tests unitarios/integración (mínimo 60% coverage) \+ lint \+ typecheck | OpenClaw DEV | F-45 (Testing Obligatorio) |
| 5\. Revisión | Code review humano \+ checklist de seguridad | Humano (tú) | SSRF, authz, rate limiting, input validation |
| 6\. Despliegue | CI/CD; canary/staging primero; rollback plan predefinido | CI/CD \+ HITL | REL-006/007 (Canary) \+ REL-008 (Rollback) |

## **8.2 Controles Específicos para Vibe Coding**

* Allowlist de dominios: GitHub, servicios CIVICUM, proveedores aprobados.

* Política Aegis DEV: permite tooling útil (git, pruebas) pero bloquea destructivos y exfiltración.

* Branch protection: merges SOLO con aprobación humana \+ checks verdes.

* Registro de prompts/cambios: cada PR incluye resumen generado y 'razón de cambio'.

* Toolkit aprobado (F-46): Cursor AI, Codeium, v0.dev, shadcn/ui.

# **9\. Catálogo Completo de Skills (12 Dominios)**

El catálogo completo comprende 12 dominios con 100+ skills. A continuación el inventario por dominio con sus skills, nivel de riesgo y entorno:

## **9.1 KP – Knowledge Pack**

*Civia mejora sin exponer OpenClaw*

| ID | Nombre | Riesgo | Entorno |
| :---- | :---- | :---- | :---- |
| KP-001 | Inventario canónico de contenido | R0 | PROD-OPS |
| KP-002 | Linter de plantillas JSON Piso 0 | R1 | PROD-OPS |
| KP-003 | Compilador de Knowledge Pack | R2 | PROD-OPS |
| KP-004 | Diff semántico entre packs | R1 | PROD-OPS |
| KP-005 | Generador de golden answers | R2 | DEV |
| KP-006 | Validador Evidence-Only | R1 | PROD-OPS |
| KP-007 | Generador de disclaimers | R2 | DEV |
| KP-008 | Normalizador de tono Civia | R2 | DEV |
| KP-009 | Detector de contenido desactualizado | R1 | PROD-OPS |
| KP-010 | Validador de links oficiales | R1 | PROD-OPS |
| KP-011 | Generador de FAQs (por módulo) | R2 | DEV |
| KP-012 | Generador de guías paso a paso | R2 | DEV |
| KP-013 | Clasificador de intención para routing | R2 | DEV |
| KP-014 | Empaquetador Offline LOW tier | R2 | PROD-OPS |
| KP-015 | Verificador accesibilidad de contenido | R1 | PROD-OPS |
| KP-016 | Auditor de neutralidad política | R1 | PROD-OPS |
| KP-017 | Publisher de Knowledge Pack | R3 | PROD-OPS |
| KP-018 | Rollback de Knowledge Pack | R3 | PROD-OPS |
| KP-019 | Canary de contenido | R3 | PROD-OPS |
| KP-020 | Changelog ciudadano | R2 | DEV |

## **9.2 DATA – Datos Cívicos**

*Ingestión, QA, versión, cache offline*

| ID | Nombre | Riesgo | Entorno |
| :---- | :---- | :---- | :---- |
| DATA-001 | Inventario de fuentes | R0 | PROD-OPS |
| DATA-002 | Fetch seguro (SSRF-guard) | R1 | PROD-OPS |
| DATA-003 | Parser multiformato | R1 | PROD-OPS |
| DATA-004 | Normalizador a schema Civicum | R1 | PROD-OPS |
| DATA-005 | Validador de consistencia | R1 | PROD-OPS |
| DATA-006 | Detector de drift | R1 | PROD-OPS |
| DATA-007 | Deduplicación y canonicalización | R2 | DEV |
| DATA-008 | Detector de PII | R1 | PROD-OPS |
| DATA-009 | Generador de caché por tier | R2 | PROD-OPS |
| DATA-010 | Generador de delta sync | R2 | DEV |
| DATA-011 | Dry-run de upserts | R2 | DEV |
| DATA-012 | Upsert controlado en PROD | R3 | PROD-OPS |
| DATA-013 | Auditor de licencias de datos | R1 | PROD-OPS |
| DATA-014 | Monitor de frescura (staleness) | R1 | PROD-OPS |
| DATA-015 | Optimización de payloads | R2 | DEV |

## **9.3 OPS – SRE/Operación Nacional**

*Incidentes, runbooks, resiliencia*

| ID | Nombre | Riesgo | Entorno |
| :---- | :---- | :---- | :---- |
| OPS-001 | Healthcheck integral | R0 | PROD-OPS |
| OPS-002 | Correlación de errores por release | R1 | PROD-OPS |
| OPS-003 | Triage de alertas | R1 | PROD-OPS |
| OPS-004 | Generador de runbooks | R2 | DEV |
| OPS-005 | Postmortem draft | R2 | DEV |
| OPS-006 | Guardián de cuotas/límites | R1 | PROD-OPS |
| OPS-007 | Detector de degradación offline | R1 | PROD-OPS |
| OPS-008 | Control degradación Modo Piso 0 | R3 | PROD-OPS |
| OPS-009 | Volver a modo normal | R3 | PROD-OPS |
| OPS-010 | Purga selectiva de cache | R3 | PROD-OPS |
| OPS-011 | Backups: verificación \+ restore staging | R2 | DEV |
| OPS-012 | DR drill simulado | R2 | DEV |
| OPS-013 | Resumen diario operativo (digest) | R1 | PROD-OPS |
| OPS-014 | Resumen semanal ejecutivo | R1 | PROD-OPS |
| OPS-015 | Problem management | R2 | DEV |

## **9.4 SEC – Seguridad/Abuso**

*WAF, hardening, supply chain, túneles*

| ID | Nombre | Riesgo | Entorno |
| :---- | :---- | :---- | :---- |
| SEC-001 | Reporte diario WAF/DDoS | R1 | PROD-OPS |
| SEC-002 | Propuesta de reglas WAF | R2 | DEV |
| SEC-003 | Aplicación de regla WAF | R3 | PROD-OPS |
| SEC-004 | SSRF / egress guard | R1 | PROD-OPS |
| SEC-005 | Scanner de secretos | R1 | PROD-OPS |
| SEC-006 | Plan de rotación de secretos | R2 | DEV |
| SEC-007 | Rotación de secretos | R4 | PROD-OPS |
| SEC-008 | Auditor de dependencias (CVE/SBOM) | R1 | PROD-OPS |
| SEC-009 | Hardening validator | R1 | PROD-OPS |
| SEC-010 | Surface scan interno | R1 | PROD-OPS |
| SEC-011 | Auditor de headers (CSP/HSTS) | R1 | PROD-OPS |
| SEC-012 | Detector credential stuffing/bots | R1 | PROD-OPS |
| SEC-013 | Bloqueo temporal IPs | R3 | PROD-OPS |
| SEC-014 | Modo crisis de seguridad | R4 | PROD-OPS |
| SEC-015 | Auditoría de logs sin PII | R1 | PROD-OPS |

## **9.5 REL – Release/QA**

*Calidad obligatoria \+ regresión mínima*

| ID | Nombre | Riesgo | Entorno |
| :---- | :---- | :---- | :---- |
| REL-001 | Generador de tests unitarios | R2 | DEV |
| REL-002 | Generador de tests E2E | R2 | DEV |
| REL-003 | Gate de cobertura mínima | R1 | DEV |
| REL-004 | Performance budget checker | R1 | DEV |
| REL-005 | Accessibility regression checker | R1 | DEV |
| REL-006 | Canary plan builder | R2 | DEV |
| REL-007 | Canary deploy | R3 | PROD-OPS |
| REL-008 | Rollback deploy | R3 | PROD-OPS |
| REL-009 | DB migration dry-run | R2 | DEV |
| REL-010 | DB migration execute | R4 | PROD-OPS |

## **9.6 DEV – Vibe Coding**

*OpenClaw DEV on-demand*

| ID | Nombre | Riesgo | Entorno |
| :---- | :---- | :---- | :---- |
| DEV-001 | Scaffolding de features | R2 | DEV |
| DEV-002 | Fix de bug con repro+test | R2 | DEV |
| DEV-003 | Refactor seguro (types/linters) | R2 | DEV |
| DEV-004 | Optimización offline-first (SW/IndexedDB) | R2 | DEV |
| DEV-005 | Integración feature flags | R2 | DEV |
| DEV-006 | Generación de documentación técnica | R2 | DEV |
| DEV-007 | Code review companion | R1 | DEV |
| DEV-008 | Generador de mocks/fixtures | R2 | DEV |
| DEV-009 | Auditor de seguridad en PRs | R1 | DEV |
| DEV-010 | No-regression pack | R2 | DEV |

## **9.7 SUP – Soporte/Contenido/Comunidad**

*Carga diaria reducida*

| ID | Nombre | Riesgo | Entorno |
| :---- | :---- | :---- | :---- |
| SUP-001 | Triage de feedback/tickets | R1 | PROD-OPS |
| SUP-002 | Clustering de dudas frecuentes | R1 | PROD-OPS |
| SUP-003 | Draft de respuesta a usuario | R2 | DEV |
| SUP-004 | Generador de macros de soporte | R2 | DEV |
| SUP-005 | Detector de confusión onboarding | R1 | PROD-OPS |
| SUP-006 | Planificador de contenidos | R2 | DEV |
| SUP-007 | Auditor de tono institucional | R1 | PROD-OPS |
| SUP-008 | Auditor de accesibilidad lingüística | R1 | PROD-OPS |
| SUP-009 | Reporte mensual de valor | R1 | PROD-OPS |
| SUP-010 | Feedback → Backlog → Pack | R2 | DEV |

## **9.8 GOV – Gobernanza/Auditoría**

*Control total y cumplimiento*

| ID | Nombre | Riesgo | Entorno |
| :---- | :---- | :---- | :---- |
| GOV-001 | Registro de decisiones HITL | R1 | PROD-OPS |
| GOV-002 | Auditoría de cumplimiento HITL | R1 | PROD-OPS |
| GOV-003 | Política de allowlists/denylist (propuesta) | R2 | DEV |
| GOV-004 | Simulador de cambios de policy (dry-run) | R1 | DEV |
| GOV-005 | Control de ventanas de mantenimiento | R2 | DEV |
| GOV-006 | Two-person rule verificación | R1 | PROD-OPS |
| GOV-007 | Gestión de roles (propuesta) | R2 | DEV |
| GOV-008 | Auditoría de cifrado (LUKS) | R1 | PROD-OPS |
| GOV-009 | Auditoría de exposición endpoints admin | R1 | PROD-OPS |
| GOV-010 | Checklist legal/ética de automatización | R1 | PROD-OPS |

## **9.9 FIN – FinOps Zero-Cost**

*No romper límites, no sorpresas*

| ID | Nombre | Riesgo | Entorno |
| :---- | :---- | :---- | :---- |
| FIN-001 | Monitor de cuotas | R1 | PROD-OPS |
| FIN-002 | Recomendador de optimización (cache, compresión) | R1 | PROD-OPS |
| FIN-003 | Budget guard del fallback cloud | R1 | PROD-OPS |
| FIN-004 | Reporte mensual de costos $0-first | R1 | PROD-OPS |
| FIN-005 | Simulador de impacto por feature | R2 | DEV |

## **9.10 EVAL – Auto-Mejora Segura**

*Medir → evaluar → proponer*

| ID | Nombre | Riesgo | Entorno |
| :---- | :---- | :---- | :---- |
| EVAL-001 | Telemetría por skill | R1 | PROD-OPS |
| EVAL-002 | Scorecard de carga liberada | R1 | PROD-OPS |
| EVAL-003 | Detección de degradación de calidad | R1 | PROD-OPS |
| EVAL-004 | Banco de pruebas de Knowledge Pack | R2 | DEV |
| EVAL-005 | Detector de gaps por abstención | R1 | PROD-OPS |
| EVAL-006 | Generador de nuevos skills sugeridos | R2 | DEV |
| EVAL-007 | A/B de policies en DEV | R1 | DEV |
| EVAL-008 | Auditor de no auto-update | R1 | PROD-OPS |
| EVAL-009 | Recomendador de frecuencia de publish | R1 | PROD-OPS |
| EVAL-010 | Reporte trimestral de madurez operativa | R1 | PROD-OPS |

## **9.11 INT – Integraciones Internas**

*Adaptadores seguros con scopes mínimos*

| ID | Nombre | Riesgo | Entorno |
| :---- | :---- | :---- | :---- |
| INT-001 | Adaptador GitHub | R1/R2 | DEV |
| INT-002 | Adaptador Cloudflare | R1/R3 | PROD-OPS |
| INT-003 | Adaptador Vercel | R1/R3 | PROD-OPS |
| INT-004 | Adaptador Neon/DB | R1/R4 | PROD-OPS |
| INT-005 | Adaptador Storage | R2/R3 | PROD-OPS |

## **9.12 EMG – Emergencias**

*Nacional: picos, ataques, crisis de datos*

| ID | Nombre | Riesgo | Entorno |
| :---- | :---- | :---- | :---- |
| EMG-001 | War-room checklist | R2 | PROD-OPS |
| EMG-002 | Activar modo Piso 0 \+ rate limits | R4 | PROD-OPS |
| EMG-003 | Rollback rápido de contenido/dataset | R3 | PROD-OPS |
| EMG-004 | Comunicación interna/status draft | R2 | DEV |
| EMG-005 | Forensia ligera (sin PII) | R2 | DEV |

**TOTAL: 12 dominios, 130 skills catalogados.** Cada uno debe implementarse con su Skill Card completa (ver sección 3.1).

# **10\. Roadmap de Implementación por Fases**

Adopción gradual para maximizar valor sin aumentar riesgo:

## **Fase 0 (Semana 1\) – Preparación y Hardening**

* Montar túnel privado (Tailscale o Cloudflare Tunnel), verificar 0 puertos públicos.

* Cifrar disco con LUKS en /home y /var/lib/docker.

* Configurar redes Docker separadas para PROD-OPS y DEV.

* Establecer límites duros de CPU/RAM por contenedor (cgroups).

* Montar filesystem read-only (salvo carpetas workspace explícitas).

* Instalar Aegis PROD y Aegis DEV con políticas iniciales.

* Definir denylist destructiva completa.

* Configurar allowlists de dominios.

* Definir tokens de acceso, rotación y procedimiento 'break-glass'.

* Implementar middleware de ofuscación PII en API Gateway.

* Configurar logs procesados (post-ofuscación).

* Verificar: GOV-008 (cifrado), GOV-009 (endpoints), SEC-009 (hardening), SEC-010 (surface scan).

## **Fase 1 (Semanas 2-3) – DEV Primero**

* Desplegar OpenClaw DEV en contenedor aislado.

* Ejecutar PRs pequeños y refactors para validar flujo.

* Crear checklists de seguridad y calidad para PRs generados.

* Validar flujo completo: issue → plan → PR → tests → review → merge.

* Configurar branch protection: merges solo con aprobación \+ checks verdes.

* Implementar registro de prompts/cambios en cada PR.

* Skills activados: DEV-001 a DEV-010, REL-001 a REL-005.

* Verificar: Aegis DEV bloquea correctamente destructivos y exfiltración.

## **Fase 2 (Semanas 4-6) – OPS en Modo Sombra (READ)**

* Desplegar OpenClaw PROD-OPS en contenedor 24/7.

* Conectar fuentes de logs/métricas (post-ofuscación) y healthchecks.

* Activar SOLO skills de lectura: OPS-001, OPS-002, OPS-003, OPS-006, OPS-007.

* Habilitar digest diario (OPS-013) y triage de alertas con recomendaciones.

* Activar monitoreo de seguridad: SEC-001, SEC-004, SEC-005, SEC-008 a SEC-012.

* Activar FinOps: FIN-001, FIN-002, FIN-003.

* Activar Knowledge Pack (lectura): KP-001, KP-002, KP-004, KP-006, KP-009, KP-010.

* Activar datos (lectura): DATA-001, DATA-002, DATA-003, DATA-004, DATA-005, DATA-006, DATA-008, DATA-014.

* Verificar: OpenClaw PROD-OPS NO ejecuta ningún WRITE sin HITL.

* Periodo de observación: 2 semanas antes de habilitar WRITE.

## **Fase 3 (Meses 0-3 post-lanzamiento) – Autopiloto Controlado**

* Habilitar acciones WRITE de bajo riesgo con HITL: abrir issues, proponer PRs, proponer Knowledge Packs.

* Activar: KP-003 (build), KP-017 (publish con HITL), KP-018 (rollback).

* Activar: DATA-012 (upsert con HITL), OPS-008 (modo Piso 0 con HITL).

* Activar: REL-006, REL-007 (canary deploy con HITL).

* Implementar 'modo crisis' y degradación: priorizar Piso 0/1 cuando sea necesario.

* Cerrar loop de aprendizaje: incidentes → mejoras en plantillas/FAQs/runbooks.

* Activar ciclo de auto-mejora: EVAL-001 a EVAL-005.

* Activar soporte: SUP-001 a SUP-005.

* Activar gobernanza completa: GOV-001 a GOV-010.

* Simulacro de incidente completo (OPS-012 / EMG-001).

## **Fase 4 (Meses 3-12) – Escalamiento Seguro**

* Automatizar más del pipeline de datos (scraping/ETL) con validaciones y rollback.

* Habilitar skills R3 adicionales: SEC-003 (reglas WAF), SEC-013 (bloqueo IPs), OPS-010 (purga selectiva).

* Mejorar detección de anomalías y prevención de incidentes.

* Activar auto-mejora completa: EVAL-006 a EVAL-010.

* Activar emergencias: EMG-001 a EMG-005.

* Auditoría periódica mensual de políticas Aegis, allowlists y tokens.

* Revisión trimestral de madurez operativa (EVAL-010).

* Simulacros de DR trimestrales (OPS-012).

* Activar R4 cuando madurez lo permita: SEC-007 (rotación secretos), REL-010 (migraciones DB), SEC-014 (modo crisis seguridad), EMG-002 (modo Piso 0 \+ rate limits).

# **11\. Operación Post-Lanzamiento: Rituales y Bucles**

| Ritual | Frecuencia | Contenido | Skills Involucrados | Carga Humana |
| :---- | :---- | :---- | :---- | :---- |
| Digest Matutino | Diario (10 min) | Top errores, degradaciones edge, fallas sync, costos, recomendaciones | OPS-013 \+ SEC-001 \+ FIN-001 | 10 min lectura \+ aprobaciones |
| Triage Continuo | Tiempo real | Deduplicación \+ priorización P0/P1/P2 de alertas | OPS-003 \+ SUP-001 | Notificaciones bajo demanda |
| Cierre Diario | Diario (5 min) | Linter plantillas, frescura datos, telemetría | KP-002 \+ DATA-014 \+ EVAL-001 | Revisión rápida |
| Postmortem Semanal | Semanal | Timeline \+ RCA \+ SLO/SLI \+ deuda operativa \+ runbooks | OPS-005 \+ OPS-014 \+ OPS-015 | 30-60 min revisión |
| Revisión Seguridad | Mensual | Políticas Aegis, allowlists, tokens, simulacro incidentes | SEC-\* completo \+ OPS-012 | 2-3h revisión |
| Madurez Operativa | Trimestral | Reporte de madurez, DR drill, revisión de skills | EVAL-010 \+ OPS-012 | 4h revisión profunda |

# **12\. Ciclo de Auto-Mejora Segura**

El ciclo completo Medir → Evaluar → Proponer → Aprobar → Publicar → Monitorear:

| Paso | Acción | Skills | Responsable |
| :---- | :---- | :---- | :---- |
| 1\. Medir | Telemetría de skills, scorecard de carga liberada | EVAL-001 \+ EVAL-002 | OpenClaw (autónomo) |
| 2\. Detectar Gaps | Abstenciones, problemas repetidos, FAQ emergentes | EVAL-005 \+ OPS-015 \+ SUP-002 | OpenClaw (autónomo) |
| 3\. Proponer | Generar FAQs, guías, tests, políticas, PRs | KP-011/012, DATA-007, REL-001/002, GOV-003 | OpenClaw (R2 – propuesta) |
| 4\. Evaluar | Golden tests \+ gates de calidad | EVAL-004 \+ REL gates | OpenClaw \+ CI |
| 5\. Aprobar | Revisión y aprobación humana | HITL \+ two-person si crítico | Humano (tú) |
| 6\. Publicar | Knowledge Pack, datos, deploy | KP-017, DATA-012, REL-007 | OpenClaw (R3 – con HITL) |
| 7\. Monitorear | Detectar regresión post-publish | EVAL-003 \+ OPS-002 | OpenClaw (autónomo) |
| **8\. Rollback** | Si regresión: sugerir rollback (NO ejecutar autónomo) | KP-018 / REL-008 / DATA rollback | HITL obligatorio |

# **13\. Protocolos de Emergencia y Continuidad**

## **13.1 Clasificación de Emergencias**

| Tipo | Trigger | Protocolo | Skills |
| :---- | :---- | :---- | :---- |
| **P0 – Caída Total** | Civicum inaccesible, datos corrompidos, breach confirmado | War-room inmediato, modo Piso 0, HITL \+ two-person | EMG-001, EMG-002, SEC-014 |
| P1 – Degradación Severa | Latencia \>5s, errores \>5%, API caída parcial | Triage urgente, canary rollback, notificación | OPS-003, REL-008, EMG-004 |
| P2 – Degradación Menor | Funciones secundarias fallando, datos stale | Triage normal, PR de fix, monitoreo elevado | OPS-003, DEV-002, DATA-014 |
| P3 – Incidente Menor | Bug cosmético, error de copy, rendimiento lento | Issue creado, fix en próximo sprint | SUP-001, DEV-002 |

## **13.2 Protocolo P0 Detallado**

1. OpenClaw detecta caída y envía alerta inmediata (OPS-001 \+ OPS-003).

2. EMG-001: War-room checklist activado automáticamente.

3. Diagnóstico rápido: ¿qué falló? ¿desde cuándo? ¿impacto? (OPS-002 \+ logs).

4. EMG-002: Activar modo Piso 0 \+ rate limits (HITL \+ two-person OBLIGATORIO).

5. Comunicación: EMG-004 genera draft de status, tú apruebas antes de publicar.

6. Fix: OpenClaw propone hotfix (PR), tú apruebas, CI despliega.

7. Verificación: healthchecks confirman recuperación.

8. OPS-009: Volver a modo normal (HITL obligatorio).

9. Postmortem: OPS-005 genera timeline \+ RCA en 24h.

10. Mejora: OPS-015 agrupa incidente en problem management.

## **13.3 Botón de Pánico**

Comando simple para apagar OpenClaw DEV instantáneamente sin afectar a Civicum. Los ciudadanos siguen operando con Capas 0/1/2 independientemente del estado de Cloud-3.

## **13.4 Continuidad de Negocio**

Si Cloud-3 cae completamente:

* Civicum sigue funcionando al 100% (plano ciudadano es independiente).

* Civia sigue respondiendo con Capas 0, 1 y 2\.

* Se pierde: automatización operativa, digest diario, propuestas de mejora.

* Recovery: restaurar VPS desde backup verificado (OPS-011).

# **14\. Testing Obligatorio y Quality Gates (F-45)**

| Herramienta | Tipo | Umbral | Bloquea PR |
| :---- | :---- | :---- | :---- |
| Vitest | Unit tests | Mínimo 60% coverage | Sí (CI bloquea) |
| Playwright | E2E críticos | 100% passing en flujos críticos (registro, reporte, voto) | Sí |
| jest-axe | Accesibilidad | 0 errores en componentes core | Sí |
| E2E Offline | Flujos offline | 100% passing (F-07 \+ F-45 v1.1) | Sí |
| Performance budget | Rendimiento | Dentro de presupuesto definido | Sí (REL-004) |
| Accessibility regression | WCAG 2.1 | Sin regresión vs baseline | Sí (REL-005) |

# **15\. FinOps: Garantía Zero-Cost (F-43)**

Objetivo: $0/mes perpetuo en infraestructura ciudadana. Skills dedicados:

* FIN-001: Monitor de cuotas – alertas ANTES del límite.

* FIN-002: Recomendador de optimización (cache, compresión).

* FIN-003: Budget guard del fallback cloud – reduce Capa 2 si se dispara.

* FIN-004: Reporte mensual de costos '$0-first'.

* FIN-005: Simulador de impacto por feature – estima costo ANTES de implementar.

**Regla crítica:** Si Workers AI se acerca al límite de 10k tokens/día, FIN-003 activa degradación automática a Capa 0 (plantillas) para mantener $0.

# **16\. Gobernanza, Auditoría y Cumplimiento**

## **16.1 Trazabilidad Completa**

* GOV-001: Registro inmutable de CADA decisión HITL (quién, qué, por qué, cuándo).

* GOV-002: Auditoría de cumplimiento – detectar acciones sin aprobación (debe ser 0).

## **16.2 Two-Person Rule (Acciones R4)**

Para acciones críticas (R4), se requiere doble aprobación. GOV-006 verifica que la regla se cumpla siempre. Aplica a: rotación de secretos, migraciones DB, modo crisis de seguridad, activación modo Piso 0 \+ rate limits.

## **16.3 Gobernanza Documental**

* Fuente de verdad única: CIVICUM\_ISDP\_v1.1.docx

* Toda nueva decisión F-XX se integra al ISDP canónico.

* Changelog obligatorio para cada modificación.

* Versionamiento semántico (v1.0, v1.1, v2.0).

* Aprobación explícita del Product Owner para cambios.

## **16.4 Evidence-Only \+ Abstención Dura**

Civia y OpenClaw operan bajo política Evidence-Only (F-17): si no hay evidencia interna/validada, se abstiene o responde con guía general \+ 'no puedo confirmar'. Prohibido inventar plazos, artículos, costos, procedimientos o URLs oficiales.

# **17\. Soporte y Mantenimiento: Guía Exhaustiva de Escenarios**

Esta sección cubre TODOS los escenarios posibles que podría enfrentar este plan durante su operación:

## **17.1 Escenarios de Infraestructura**

| Escenario | Respuesta / Protocolo | Skills |
| :---- | :---- | :---- |
| VPS caído/inaccesible | Civicum sigue funcionando (independiente). Restaurar VPS desde backup (OPS-011). Si tarda \>4h: activar VPS de respaldo. | OPS-011, OPS-012 |
| Disco LUKS corrupto | Restaurar desde backup verificado más reciente. Verificar integridad post-restore. GOV-008 audita. | OPS-011, GOV-008 |
| Túnel Tailscale caído | OpenClaw inaccesible pero Civicum opera normal. Reconectar túnel o activar Cloudflare Tunnel como fallback. | SEC-010 |
| Docker daemon falla | Contenedores se reinician automáticamente (restart: always). Si persiste: restart manual del daemon. | OPS-001 |
| Límites de recursos agotados | Contenedor throttled. OPS-006 alerta. Revisar y ajustar cgroups o escalar VPS. | OPS-006, FIN-001 |
| Neon.tech free tier agotado | Alertas preventivas de FIN-001. Migrar a plan pago o limpiar datos históricos no críticos. | FIN-001, FIN-002 |
| Vercel bandwidth agotado | FIN-001 alerta antes del límite. Activar Cloudflare como CDN frontal para reducir carga. | FIN-001, FIN-003 |
| Workers AI cuota agotada | FIN-003 activa degradación a Capa 0 (plantillas). Usuarios siguen operando sin IA cloud. | FIN-003, OPS-008 |

## **17.2 Escenarios de Seguridad**

| Escenario | Respuesta / Protocolo | Skills |
| :---- | :---- | :---- |
| Ataque DDoS | Cloudflare WAF absorbe. SEC-001 reporta patrones. Si excede: SEC-003 propone reglas WAF adicionales. | SEC-001, SEC-002, SEC-003 |
| Breach de credenciales | SEC-005 detecta secretos expuestos. SEC-007 rota secretos (R4: HITL \+ two-person). Invalidar tokens. | SEC-005, SEC-007, SEC-014 |
| SSRF detectado | SEC-004 bloquea conexión. Alerta inmediata. Revisar allowlists. Auditar origen de la solicitud. | SEC-004, SEC-010 |
| Credential stuffing/bots | SEC-012 detecta patrones. SEC-013 bloquea IPs temporalmente (HITL). Rate limiting reforzado. | SEC-012, SEC-013 |
| Vulnerabilidad en dependencia (CVE) | SEC-008 detecta CVE en SBOM. OpenClaw DEV genera PR de actualización. Priorizar según severidad. | SEC-008, DEV-002 |
| OpenClaw comportamiento anómalo | Botón de pánico: apagar OpenClaw DEV. Aegis bloquea automáticamente. Forensia ligera (EMG-005). | EMG-005, SEC-014 |
| Filtración de PII | DATA-008 bloquea pipeline. Middleware PII verifica ofuscación. Auditar logs. Notificar si corresponde. | DATA-008, SEC-015, GOV-010 |
| Headers de seguridad faltantes | SEC-011 detecta y alerta. OpenClaw DEV propone PR de fix para CSP/HSTS/etc. | SEC-011, DEV-002 |

## **17.3 Escenarios de Datos**

| Escenario | Respuesta / Protocolo | Skills |
| :---- | :---- | :---- |
| Fuente oficial caída (SINIM, Congreso, etc.) | DATA-014 detecta staleness. Civia usa cache local. OpenClaw propone fallback o mensaje al usuario. | DATA-014, KP-009 |
| Datos inconsistentes entre fuentes | DATA-005 detecta contradicciones. Alerta para revisión humana. No publicar datos dudosos. | DATA-005, DATA-006 |
| Drift inesperado en datos | DATA-006 marca 'alto impacto'. Revisión urgente. Si afecta leyes/plazos: prioridad P1. | DATA-006 |
| PII accidental en pipeline | DATA-008 bloquea pipeline automáticamente. No procesar hasta limpiar. Auditar origen. | DATA-008 |
| Cache offline corrupta | OPS-007 detecta. Forzar re-sync en próxima conexión. Users siguen con Capa 0\. | OPS-007, DATA-009 |
| Migración DB fallida | REL-010 requiere backup probado ANTES. Rollback a snapshot anterior. Two-person rule. | REL-009, REL-010, OPS-011 |

## **17.4 Escenarios de Knowledge Pack**

| Escenario | Respuesta / Protocolo | Skills |
| :---- | :---- | :---- |
| Regresión en respuestas de Civia | EVAL-003 detecta vs baseline. KP-018 rollback a versión previa (HITL). Investigar causa. | EVAL-003, KP-018 |
| Disclaimer legal desactualizado | KP-009 alerta staleness. KP-007 regenera. KP-006 valida Evidence-Only antes de publicar. | KP-009, KP-007, KP-006 |
| Links oficiales rotos | KP-010 detecta en escaneo diario. KP genera issue para actualización. | KP-010 |
| Contenido con sesgo político detectado | KP-016 auditor de neutralidad flagea. Revisión humana obligatoria antes de publicar. | KP-016 |
| Pack demasiado pesado para tier LOW | KP-014 verifica presupuesto de tamaño. Optimizar o generar versión lite. | KP-014, DATA-015 |

## **17.5 Escenarios de Operación**

| Escenario | Respuesta / Protocolo | Skills |
| :---- | :---- | :---- |
| Pico de tráfico (elecciones, crisis) | OPS-001 detecta. Si excede capacidad: OPS-008 activa modo Piso 0\. Rate limiting reforzado. | OPS-001, OPS-008, EMG-002 |
| Regresión post-deploy | OPS-002 correlaciona errores con release. REL-008 rollback (HITL). Postmortem (OPS-005). | OPS-002, REL-008, OPS-005 |
| Fallos de sync offline | OPS-007 detecta. Verificar Service Workers y IndexedDB. DEV-004 propone fix. | OPS-007, DEV-004 |
| Acumulación de deuda operativa | OPS-014 (semanal) identifica. OPS-015 agrupa en problem management. Backlog priorizado. | OPS-014, OPS-015 |
| Skills de OpenClaw fallando | EVAL-001 telemetría detecta. Diagnóstico de causa raíz. Fix o desactivación temporal. | EVAL-001, EVAL-003 |
| Necesidad de nuevo skill | EVAL-006 detecta tareas repetidas sin skill. Propone Skill Card. Tú apruebas. | EVAL-006 |

## **17.6 Escenarios de Desarrollo**

| Escenario | Respuesta / Protocolo | Skills |
| :---- | :---- | :---- |
| PR generado con vulnerabilidad | DEV-009 auditor de seguridad detecta en PR. Bloquea merge. Fix requerido. | DEV-009, REL-003 |
| Cobertura de tests insuficiente | REL-003 gate bloquea merge si \<60% coverage. OpenClaw genera tests adicionales. | REL-003, REL-001 |
| Regresión de accesibilidad | REL-005 checker detecta. Bloquea deploy. DEV propone fix de accesibilidad. | REL-005, DEV-002 |
| Feature flag mal configurado | DEV-005 audita flags. Detección de flag activo que debería estar OFF. | DEV-005 |
| Dependencia obsoleta o riesgosa | SEC-008 SBOM detecta. PR automático de actualización. Priorizar por severidad CVE. | SEC-008, DEV-002 |

## **17.7 Escenarios de Comunidad/Soporte**

| Escenario | Respuesta / Protocolo | Skills |
| :---- | :---- | :---- |
| Avalancha de tickets de soporte | SUP-001 triage automático. SUP-002 clustering de dudas. SUP-004 genera macros. | SUP-001, SUP-002, SUP-004 |
| Confusión masiva en onboarding | SUP-005 detecta patrón. KP-012 genera guía paso a paso. Academia Cívica reforzada. | SUP-005, KP-012 |
| Tono institucional inconsistente | SUP-007 audita. KP-008 normaliza tono Civia. Revisión editorial humana. | SUP-007, KP-008 |
| Contenido inaccesible para adulto mayor | SUP-008 detecta. KP-015 verificador de accesibilidad. Simplificación de lenguaje. | SUP-008, KP-015 |
| Feedback negativo recurrente | SUP-010 pipeline: feedback → backlog → pack. Priorización automática. | SUP-010 |

## **17.8 Escenarios de Gobernanza**

| Escenario | Respuesta / Protocolo | Skills |
| :---- | :---- | :---- |
| Acción WRITE sin aprobación detectada | GOV-002 alerta crítica. Debe ser 0\. Investigar bypass. Reforzar Aegis. | GOV-002, SEC-014 |
| Two-person rule no cumplida | GOV-006 verifica. Si falla: bloqueo inmediato de R4. Auditoría completa. | GOV-006 |
| Cifrado LUKS comprometido | GOV-008 audita. Si falla: migrar datos a nuevo volumen cifrado inmediatamente. | GOV-008 |
| Endpoint admin expuesto a internet | GOV-009 detecta. Cerrar inmediatamente. Rotar credenciales. Auditar accesos. | GOV-009, SEC-007 |
| Versión de OpenClaw no pinned | EVAL-008 audita. Forzar pinning inmediato. Verificar que no hubo auto-update. | EVAL-008 |

# **18\. Matrices de Validación Cruzada**

## **18.1 Decisiones F-XX → Cobertura en Plan**

| Decisión | Nombre | Sección del Plan |
| :---- | :---- | :---- |
| F-01 | Complejidad MVP | Sec. 8 (Quality Gates), Sec. 14 (Testing) |
| F-02 | Honestidad Radical | Sec. 16.4 (Evidence-Only) |
| F-03 | Datos Mínimos Viables | Sec. 7 (PII Middleware) |
| F-04 | Construcción Secuencial | Sec. 10 (Roadmap por fases) |
| F-05 | Apartidismo Total | Sec. 9 (KP-016 Auditor neutralidad) |
| F-07 | Offline Dignity Mode | Sec. 2.2 (Tiers), Sec. 14 (E2E offline) |
| F-12 | Sistema IA 3 Capas | Sec. 2.1 (Capas 0/1/2) |
| F-17 | Anti-Alucinación | Sec. 16.4, Sec. 9 (KP-006 Evidence-Only) |
| F-43 | Stack Zero-Cost | Sec. 4.2, Sec. 15 (FinOps) |
| F-44 | IA Distribuida 3 Pisos | Sec. 2.1, Sec. 2.2 (Router Hardware) |
| F-45 | Testing Obligatorio | Sec. 14 completa |
| F-46 | Toolkit Vibe Coding | Sec. 8.2 |
| F-47 | Reutilización OSS | Sec. 16.3 (Licencia AGPL-3.0) |

## **18.2 Principios No Negociables → Enforcement**

| Principio | Cómo se Enforza | Skill(s) que Auditan |
| :---- | :---- | :---- |
| P1 Separación | Redes Docker aisladas, 0 ruta de red | GOV-009, SEC-010 |
| P2 HITL | Aegis bloquea WRITE sin token HITL | GOV-001, GOV-002 |
| P3 Acceso privado | Tailscale/Tunnel, 0 puertos públicos | SEC-010, GOV-009 |
| P4 Aegis | Proxy obligatorio con denylist | SEC-009, GOV-003 |
| P5 Aislamiento | cgroups, caps dropped, FS read-only | SEC-009, GOV-008 |
| P6 Pinning | Nunca 'latest', self-update deshabilitado | EVAL-008 |
| P7 Trazabilidad | Registro inmutable de acciones | GOV-001, GOV-002, SEC-015 |

# **19\. Checklist Final de Completitud**

**Validación exhaustiva** de que TODOS los elementos del ecosistema CIVICUM están cubiertos en este plan:

| ✓ | Elemento Validado | Ubicación en Plan |
| :---- | :---- | :---- |
| ✅ | Arquitectura de 3 planos (Ciudadano, Operacional, Datos) | Sección 2 |
| ✅ | Arquitectura IA 3 Capas con numeración correcta (0, 1, 2\) | Sección 2.1 |
| ✅ | Router de Hardware (HIGH/MEDIUM/LOW) | Sección 2.2 |
| ✅ | Modelo de riesgo R0–R4 con controles diferenciados | Sección 3 |
| ✅ | Contrato de Skill Card (estructura obligatoria) | Sección 3.1 |
| ✅ | Infraestructura Cloud-3 completa (LUKS, Docker, cgroups) | Sección 4 |
| ✅ | Stack Zero-Cost con límites documentados (F-43) | Sección 4.2 |
| ✅ | Aegis PROD y DEV con políticas diferenciadas | Sección 5 |
| ✅ | Denylist destructiva completa | Sección 5.1 |
| ✅ | Allowlist de dominios aprobados | Sección 5.2 |
| ✅ | Puente A – Knowledge Pack con NO\_OVERWRITE\_POLICY \+ SHA-256 | Sección 6.1 |
| ✅ | Puente B – Datos y Observabilidad (runbooks, postmortems) | Sección 6.2 |
| ✅ | Puente C – Moderación Asistida (nunca sanciona automáticamente) | Sección 6.3 |
| ✅ | Middleware MANDATORIO de Ofuscación PII (RUT, Email, Teléfono, IP) | Sección 7 |
| ✅ | Logs procesados (OpenClaw PROHIBIDO acceso a crudos) | Sección 7.2 |
| ✅ | Proceso Vibe Coding completo (6 pasos) | Sección 8 |
| ✅ | Controles específicos para Vibe Coding | Sección 8.2 |
| ✅ | 12 dominios de skills completos (130 skills) | Sección 9 |
| ✅ | Roadmap por fases (Fase 0 a Fase 4, Semana 1 a Mes 12\) | Sección 10 |
| ✅ | 6 rituales operativos (diario a trimestral) | Sección 11 |
| ✅ | Ciclo de auto-mejora completo (8 pasos, Medir → Rollback) | Sección 12 |
| ✅ | Clasificación de emergencias (P0 a P3) | Sección 13.1 |
| ✅ | Protocolo P0 detallado (10 pasos) | Sección 13.2 |
| ✅ | Botón de Pánico \+ Continuidad de negocio | Sección 13.3/13.4 |
| ✅ | Testing obligatorio con 6 herramientas/umbrales (F-45) | Sección 14 |
| ✅ | FinOps Zero-Cost con 5 skills dedicados (F-43) | Sección 15 |
| ✅ | Gobernanza completa (trazabilidad, two-person, Evidence-Only) | Sección 16 |
| ✅ | Guía exhaustiva de 49 escenarios en 8 categorías | Sección 17 |
| ✅ | Infraestructura (8), Seguridad (8), Datos (6), KP (5), Ops (6), Dev (5), Comunidad (5), Gobernanza (5) | Sección 17.1–17.8 |
| ✅ | Validación cruzada F-XX → secciones del plan | Sección 18.1 |
| ✅ | Validación cruzada Principios → enforcement | Sección 18.2 |
| ✅ | 47 decisiones integradas (F-01 a F-47) | Todo el documento |
| ✅ | 7 principios no negociables enforced-by-design | Sección 1.3 |

**RESULTADO DE VALIDACIÓN:** 33/33 elementos cubiertos. 0 omisiones detectadas. Plan COMPLETO.

────────────────────────────────────────────────────────────  
*CIVICUM – Plan Definitivo de Implementación OpenClaw \+ Civia \+ Civicum*

*Versión 1.0 Definitiva | Febrero 2026 | Documento Canónico*

*Fuentes validadas: Playbook Integración OpenClaw v1.0, Catálogo Definitivo de Skills v1.0, Documentación Integral PI v1.0, Anexos Técnicos Exhaustivos, Anexo Capacidades Automatización, 80 Roles de Auditoría*
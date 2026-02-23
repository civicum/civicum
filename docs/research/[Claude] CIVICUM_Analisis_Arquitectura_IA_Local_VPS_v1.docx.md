

**CIVICUM**

Sistema Nervioso Civico de Chile

**ANALISIS CRITICO DE ARQUITECTURA DE IA LOCAL**

Plan de Implementacion Paso a Paso para VPS Cloud-3

| Version | 1.0 Definitiva |
| :---- | :---- |
| **Fecha** | Febrero 2026 |
| **Documentos Analizados** | 2 investigaciones \+ 17 docs proyecto |
| **Decisiones Integradas** | F-01 a F-47 (53 con saneamiento) |
| **Estado** | DOCUMENTO DE REFERENCIA |
| **Licencia Codigo** | AGPL-3.0 / Apache 2.0 (modelos) |

# **INDICE GENERAL**

# **1\. RESUMEN EJECUTIVO**

Este documento consolida el analisis critico de dos investigaciones sobre arquitectura de IA local para CIVICUM, cruzadas exhaustivamente con los 17 documentos del proyecto y las 53 decisiones aprobadas (F-01 a F-53). El resultado es un plan de implementacion paso a paso optimizado para el VPS Cloud-3 con 4 vCPU AMD EPYC, 12GB RAM y 100GB NVMe, ubicado en Santiago, Chile.

## **1.1 Documentos Analizados**

| ID | Documento | Enfoque |
| :---- | :---- | :---- |
| DOC-1 | Arquitectura Ollama \+ OpenClaw en VPS Chile | Soberania datos, optimizacion NUMA/AVX2, Aegis \+ Presidio |
| DOC-2 | Stack Completo OSS con Inventario de Modelos | 3 stacks evaluados, mapeo tareas-componentes, benchmarks |

## **1.2 Recomendacion Final**

**Stack Recomendado:** Mistral 7B (Clibrain LINCE) con evolucion gradual desde Arquitectura A (Minimalista) hacia Arquitectura B (Modular).

**Justificacion:** Apache 2.0, fine-tuned espanol neutro (MT-Bench 6.84), \~4GB RAM en int4, 5-9 tok/s en CPU AVX2. Alineado con F-44 (IA 3 Pisos), F-43 (Zero-Cost) y los 7 Principios No Negociables del Plan Definitivo.

# **2\. ANALISIS DOCUMENTO 1: Ollama \+ OpenClaw**

## **2.1 Fortalezas**

| Fortaleza | Alineacion Proyecto |
| :---- | :---- |
| Optimizacion NUMA/AVX2 para AMD EPYC 7002 | Maximiza rendimiento del VPS Cloud-3 contratado |
| Soberania total: datos nunca salen de Chile | P3 (Acceso privado) \+ ubicacion Santiago |
| Seguridad robusta: Aegis \+ Presidio \+ SBOM | P4 (Firewall semantico) \+ P6 (Pinning versiones) |
| Cuantizacion Q4\_K\_M para eficiencia en CPU | Permite LLM 7B en 4GB RAM, deja margen para auxiliares |
| Integracion multicanal (WhatsApp, Telegram, Discord) | Expansion futura canales de comunicacion ciudadana |

## **2.2 Limitaciones Detectadas**

| Limitacion | Impacto / Mitigacion |
| :---- | :---- |
| Complejidad operativa alta para fundador solo | Mitigar con Arquitectura A minimalista (Fase 1\) |
| No integra F-44 (IA 3 Pisos) completamente | Requiere mapeo explicito: OpenClaw \= Plano Operacional |
| Falta separacion Civia (ciudadano) vs OpenClaw (interno) | P1 (Separacion estricta) requiere redes Docker aisladas |
| Requiere expertise avanzado en tuning Linux | Documentar runbooks detallados \+ automatizar con scripts |

# **3\. ANALISIS DOCUMENTO 2: Stack Completo OSS**

## **3.1 Comparativa de 3 Stacks**

| Criterio | Stack 1: Mistral 7B | Stack 2: Dolly 12B | Stack 3: Granite 8B | Veredicto |
| :---- | :---- | :---- | :---- | :---- |
| **Parametros** | 7.3B (3.8GB int4) | 12B (\~6.5GB int4) | 8B (\~4.2GB int4) | Mistral: mejor ratio RAM/rendimiento |
| **Velocidad CPU** | 5-9 tok/s | 1-2 tok/s | 3-5 tok/s | Mistral: unico viable para interactivo |
| **Espanol** | LINCE fine-tuned | No nativo | Multilingue basico | Mistral: critico para Chile |
| **Licencia** | Apache 2.0 | MIT | Apache 2.0 | Todas compatibles con AGPL-3.0 |
| **MT-Bench** | 6.84 | \~4.5 | \~5.8 | Mistral: mayor calidad general |
| **Comunidad** | Madura, extensa | Limitada | Emergente | Mistral: menor riesgo operativo |

## **3.2 Componentes Auxiliares Especificados**

| Componente | Modelo | RAM | Licencia | Fase Activacion |
| :---- | :---- | :---- | :---- | :---- |
| Embeddings | DistilUSE multilingual | \~500MB | Apache 2.0 | Dia 31-60 |
| Reranker | Cross-Encoder MS MARCO | \~450MB | Apache 2.0 | Dia 31-60 |
| OCR | Tesseract 5 \+ EasyOCR | \~200MB | Apache 2.0 | Dia 61-90 |
| STT | Whisper small (244M) | \~500MB | MIT | Evaluacion futura |
| Moderacion | BERT espanol offensive | \~110MB | Apache 2.0 | Dia 31-60 |

## **3.3 Mapeo de Tareas CIVICUM a Componentes IA**

El DOC-2 mapea 20+ tareas criticas organizadas por dominio. Las mas relevantes para el VPS Cloud-3 son:

| Skill | Descripcion | Riesgo | Componente IA | Prioridad |
| :---- | :---- | :---- | :---- | :---- |
| OPS-013 | Resumen diario operativo | R1 | LLM (Mistral) | Dia 0-30 |
| OPS-003 | Triage alertas P0/P1/P2 | R1 | LLM \+ Clasificador | Dia 0-30 |
| KP-006 | Validador Evidence-Only | R1 | LLM | Dia 0-30 |
| DATA-008 | Detector PII (RUT/email/tel) | R1 | Regex \+ NER | Dia 0-30 |
| OPS-004 | Generador Runbooks | R2 | LLM | Dia 31-60 |
| DEV-001 | Scaffolding features | R2 | LLM | Dia 31-60 |
| DATA-003 | Parser multiformato (PDF/HTML) | R1 | OCR \+ LLM | Dia 61-90 |
| KP-008 | Normalizador tono Civia | R2 | LLM \+ Embeddings | Dia 61-90 |

# **4\. ALINEACION CON DOCUMENTACION CIVICUM**

## **4.1 Cumplimiento 7 Principios No Negociables**

| \# | Principio | Implementacion en VPS |
| :---- | :---- | :---- |
| P1 | Separacion estricta Civia/OpenClaw | Redes Docker aisladas (civicum-internal), 0 ruta directa entre planos |
| P2 | HITL por defecto | Aegis bloquea WRITE sin token HITL. Solo READ es autonomo |
| P3 | Acceso privado | Tailscale/CF Tunnel, 0 puertos publicos, UFW deny incoming |
| P4 | Firewall semantico obligatorio | Aegis proxy con denylist destructiva \+ SSRF guard \+ allowlists .gob.cl |
| P5 | Aislamiento dual PROD/DEV | Docker cgroups, caps dropped, FS read-only, AppArmor |
| P6 | Cadena suministro controlada | SHA256 pinning modelos, nunca 'latest', self-update deshabilitado |
| P7 | Trazabilidad total | GOV-001/002 registro inmutable, trace\_id por accion, logs auditados |

## **4.2 Integracion con IA 3 Pisos (F-44)**

| Capa | Tecnologia | Ubicacion | Relacion con VPS |
| :---- | :---- | :---- | :---- |
| **CAPA 0** | Plantillas JSON \+ Reglas | Dispositivo ciudadano | OpenClaw cocina Knowledge Pack \-\> Capa 0 |
| **CAPA 1** | WebLLM (Llama 3 8B q4) | Dispositivo ciudadano | Independiente del VPS (client-side) |
| **CAPA 2** | Workers AI (fallback) | Cloudflare Edge | Independiente del VPS (edge) |
| **OpenClaw** | Mistral 7B (Ollama) | VPS Cloud-3 | Automatizacion interna, NUNCA atiende ciudadanos |

# **5\. ESPECIFICACIONES VPS CLOUD-3**

| Especificacion | Detalle |
| :---- | :---- |
| **CPU** | 4 vCPU AMD EPYC 7002 Series (2.25 GHz base, 3.4 GHz turbo) |
| **RAM** | 12 GB |
| **Storage** | 100 GB NVMe (10x mas rapido que SSD convencional) |
| **Swap** | 4 GB habilitado (solo emergencia) |
| **OS** | Ubuntu 22.04 (sin entorno grafico) |
| **Virtualizacion** | KVM con CPU dedicada |
| **Instrucciones** | AVX2 soportado (critico para inferencia GGUF) |
| **Docker** | Activo |
| **Ollama** | Pre-instalado (evaluar dockerizar para aislamiento) |
| **Ubicacion** | Santiago, Chile (baja latencia nacional) |
| **Red** | 1 IP dedicada, transferencia ilimitada, uptime 99.98% |
| **Seguridad** | Proteccion DDoS avanzada, acceso root |

## **5.1 Presupuesto de RAM (12 GB Total)**

| Componente | RAM | Fase | Nota |
| :---- | :---- | :---- | :---- |
| OS \+ Docker \+ servicios base | \~2 GB | Siempre | Overhead sistema operativo |
| Mistral 7B int4 (GGUF) | \~4 GB | Dia 0-30 | Modelo principal LLM |
| Aegis proxy \+ OpenClaw core | \~1 GB | Dia 0-30 | Servicios Python/FastAPI |
| DistilUSE embeddings | \~500 MB | Dia 31-60 | Lazy loading on-demand |
| Cross-Encoder reranker | \~450 MB | Dia 31-60 | Lazy loading on-demand |
| BERT moderacion | \~110 MB | Dia 31-60 | Clasificador ligero |
| **TOTAL ESTIMADO** | **\~8 GB** | \- | **Margen libre: \~4 GB \+ 4 GB swap emergencia** |

# **6\. PLAN DE IMPLEMENTACION PASO A PASO**

Plan detallado organizado en 8 fases sobre 20 dias, con criterios de aceptacion y rollback para cada fase.

## **FASE 1: Preparacion Infraestructura (Dia 1-2)**

### **1.1 Hardening Sistema Base**

Actualizar sistema, instalar herramientas esenciales, configurar NUMA para AMD EPYC, establecer limites del sistema y deshabilitar servicios innecesarios.

sudo apt update && sudo apt upgrade \-y

sudo apt install \-y build-essential git curl wget htop iotop numactl sysstat

echo "kernel.numa\_balancing=0" | sudo tee \-a /etc/sysctl.conf

sudo systemctl disable snapd && sudo systemctl stop snapd

### **1.2 Configurar Firewall y Red Segura**

UFW con politica deny-all \+ Tailscale para acceso zero-trust. SSH solo por IP Tailscale. Cero puertos publicos (cumple P3).

sudo ufw default deny incoming && sudo ufw default allow outgoing

curl \-fsSL https://tailscale.com/install.sh | sh && sudo tailscale up

### **1.3 Volumenes Cifrados (LUKS)**

Volumen cifrado de 10GB para datos sensibles. Requiere passphrase manual al boot por seguridad (cumple P5).

sudo cryptsetup luksFormat /opt/civicum-vault.img

sudo mkdir \-p /mnt/civicum-secure/{config,secrets,logs,workspace}

### **1.4 Docker con Limites**

Configurar Docker daemon con log rotation, limites de recursos y redes aisladas.

docker network create \--internal civicum-internal

docker network create civicum-external

## **FASE 2: Despliegue Motor IA (Dia 3-4)**

### **2.1 Evaluar y Dockerizar Ollama**

El Ollama pre-instalado se dockeriza para aislamiento. Configuracion con numactl para localidad CPU/memoria. Limites: 3 CPUs, 8GB RAM (max 1 modelo cargado).

docker run \-d \--name civicum-ollama \--cpus=3.0 \--memory=8g ollama/ollama:0.1.26

### **2.2 Descargar y Verificar Mistral 7B**

Descarga con pinning de version. Obtener SHA256 y guardarlo en configuracion (cumple P6). Prueba de inferencia basica.

docker exec civicum-ollama ollama pull mistral:7b-instruct-v0.2-q4\_K\_M

echo "MISTRAL\_7B\_SHA256=\<hash\>" \>\> /mnt/civicum-secure/config/.env

### **2.3 Benchmark Inicial**

Suite de 3 tests (prompt corto/medio/largo) con medicion de tok/s y monitoreo RAM/swap. Criterio: 5-9 tok/s, swap=0MB.

## **FASE 3: Componentes Auxiliares (Dia 5-6)**

### **3.1 Servicio de Embeddings**

DistilUSE multilingual via FastAPI. Limite: 0.5 CPU, 1GB RAM. Red interna unicamente. Endpoint /embed para vectorizacion de textos.

### **3.2 Aegis \- Firewall Semantico**

Proxy FastAPI con: denylist de patrones peligrosos (rm \-rf, DROP TABLE, eval), sanitizacion PII (RUT, email, telefono chileno), allowlist de dominios .gob.cl para SSRF guard, y verificacion de token HITL (cumple P2 \+ P4).

**Patrones de ofuscacion PII (Middleware Mandatorio Seccion 7 del Plan Definitivo):**

| Patron | Regex | Reemplazo |
| :---- | :---- | :---- |
| RUT chileno | \\d{1,2}\\.?\\d{3}\\.?\\d{3}-\[\\dkK\] | \[REDACTED-RUT\] |
| Email | \[\\w.-\]+@\[\\w.-\]+\\.\[a-zA-Z\]{2,} | \[REDACTED-EMAIL\] |
| Telefono | (\\+?56)?\\s?\\d{1,2}\\s?\\d{4}\\s?\\d{4} | \[REDACTED-PHONE\] |
| IP personal | \\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3} | \[REDACTED-IP\] |

## **FASE 4: OpenClaw Basico (Dia 7-9)**

### **4.1 Orquestador**

Clase OpenClawOrchestrator con registro de skills, ejecucion con trace\_id, y llamadas a LLM via Aegis. Skills se clasifican por nivel de riesgo R0-R4.

### **4.2 Skills Iniciales (R0/R1)**

Activar en Fase 1 unicamente skills autonomos de bajo riesgo:

| Skill | Funcion | Riesgo | Descripcion |
| :---- | :---- | :---- | :---- |
| OPS-001 | Healthcheck/uptime | R0 | Monitoreo basico de servicios |
| EVAL-001 | Telemetria skills | R0 | Metricas de rendimiento |
| OPS-013 | Digest diario | R1 | Resumen operativo automatico |
| KP-006 | Validador Evidence-Only | R1 | Bloquea respuestas sin fuente |
| DATA-008 | Detector PII | R1 | Bloquea pipeline si encuentra PII |
| SEC-001 | Reporte diario WAF | R1 | Analisis patrones de ataque |

## **FASE 5: Knowledge Pack Inicial (Dia 10-11)**

Estructura versionada con FAQs (JSON), plantillas (OIRS, oficios, solicitudes), y fuentes civicas. Compilacion con SHA-256 hash y manifest. Flujo: KP-003 (build) \-\> KP-004 (diff) \-\> KP-006 (Evidence-Only) \-\> HITL (aprobacion) \-\> KP-017 (publish).

### **5.1 Estructura de Directorios**

/mnt/civicum-secure/workspace/knowledge-pack/

  faqs/          \# JSON con pregunta \+ respuesta \+ fuentes

  templates/     \# Plantillas documentos civicos

  sources/       \# Fuentes oficiales indexadas

  builds/        \# Packs compilados \+ manifests

## **FASE 6: Testing y Validacion (Dia 12-14)**

Suite automatizada con 3 categorias de tests:

| Test | Criterio Aceptacion | Metodo |
| :---- | :---- | :---- |
| Velocidad inferencia | \< 5s para respuestas tipicas (5-9 tok/s) | 3 prompts (corto/medio/largo), 3 repeticiones |
| Calidad espanol | 80% respuestas correctas en 10 FAQs \+ 5 redacciones | Evaluacion manual \+ criterios predefinidos |
| Sanitizacion PII | 100% RUT/email/telefono redactados | Inyeccion de datos PII en prompts |
| Abstencion | \> 90% abstenciones cuando falta evidencia | Preguntas fuera de alcance \+ trampas |
| Adversarial | 0 bypass en injection/conflictos | Prompt injection, secuencias raras |
| Recursos | RAM \< 10GB, swap \= 0MB | docker stats \+ psutil continuo |

## **FASE 7: Documentacion y Operacion (Dia 15-16)**

Runbooks operativos documentados y backups automatizados.

### **7.1 Runbooks Criticos**

| Runbook | Contenido |
| :---- | :---- |
| restart-services.md | Pasos para detener, verificar y reiniciar stack Docker completo \+ rollback |
| update-model.md | Backup modelo actual, descarga nuevo, verificacion SHA256, pruebas, rollback |
| emergency-shutdown.md | Boton de panico: apagar OpenClaw DEV, Aegis bloquea, forensia (EMG-005) |
| backup-restore.md | Procedimiento backup/restore con .tar.gpg cifrado y checksums |

### **7.2 Backups Automatizados**

Cron diario (3 AM): modelos Ollama, Knowledge Pack, configs, logs (7 dias). Checksums SHA256. Retencion 30 dias.

## **FASE 8: Integracion con Civia (Dia 17-20)**

Gateway API seguro (solo GET) para exponer Knowledge Pack al Plano Ciudadano. CORS restringido a civicum.cl. Endpoints: /manifest, /faqs, /templates. Exposicion via Cloudflare Tunnel (cumple P1 \+ P3).

# **7\. RIESGOS CRITICOS Y MITIGACIONES**

| Riesgo | Problema | Mitigacion |
| :---- | :---- | :---- |
| **Sobrecarga RAM** | Multiples modelos pueden superar 12GB | Lazy loading on-demand, limites Docker por contenedor, swap 4GB solo emergencia, alertas si RAM \> 95% |
| **CPU saturada** | 4 vCPU pueden colapsar con tareas simultaneas | Colas/prioridades en OpenClaw, tareas DEV solo ventana baja carga, limitar threads LLM a 3 (dejar 1 para OS) |
| **Alucinaciones** | LLM puede inventar datos sin evidencia | KP-006 Evidence-Only (bloquea sin cita), prompt estricto, abstencion dura, logs con trace\_id |
| **Complejidad ops** | Un solo fundador debe mantener sistema | Empezar con Arq. A minimalista, solo R0/R1 inicialmente, runbooks exhaustivos, automatizar ritualess |
| **Costos ocultos** | VPS puede requerir upgrade si carga aumenta | FIN-001 monitoreo uso, alertas limites, techo seguro \~50K MAU zero-cost |

# **8\. ROADMAP 30-60-90 DIAS**

| Periodo | Objetivos | Criterio Exit |
| :---- | :---- | :---- |
| **Dia 0-30** | Infra segura \+ Ollama dockerizado \+ Mistral 7B \+ Aegis \+ Knowledge Pack inicial \+ Skills R0/R1 \+ Benchmark completo \+ 0 puertos publicos \+ Backups automaticos | 80% FAQs OK, \<5s latencia, 0 crashes 48h, logs sin PII |
| **Dia 31-60** | Embeddings \+ Reranker activos \+ Skills R2 (DEV-001, OPS-004) \+ Moderacion BERT \+ Prometheus/Grafana \+ Documentacion equipo | Retrieval funcional, 0 alucinaciones en 20 pruebas ciegas |
| **Dia 61-90** | Migracion a Arq. B modular \+ Usuarios piloto \+ Tuning con feedback real \+ Pruebas carga (5-10 concurrentes) \+ Auditoria \+ Go Live | \>90% exactitud en 50 FAQs, \<5s promedio, DR drill OK |

## **8.1 Post-90 Dias (Meses 4-12)**

Habilitar skills R3 adicionales (SEC-003 reglas WAF, SEC-013 bloqueo IPs, OPS-010 purga selectiva). Activar auto-mejora completa (EVAL-006 a EVAL-010). Auditorias mensuales de politicas Aegis. Simulacros DR trimestrales. Activar R4 cuando madurez lo permita.

# **9\. CHECKLIST DE ACEPTACION DIA 30**

| Criterio | Meta | Verificacion |
| :---- | :---- | :---- |
| Respuestas correctas FAQs | \> 80% | Suite 10 FAQs \+ evaluacion |
| Latencia respuesta tipica | \< 5 seg | Benchmark automatizado |
| Crashes en 48h continuas | 0 | Monitoreo continuo |
| PII visible en logs | 0 | Auditoria grep logs |
| Uso RAM (sin auxiliares) | \< 10 GB | docker stats |
| Uso swap | 0 MB | free \-h / swapon |
| Tokens/segundo Mistral 7B | 5-9 tok/s | Benchmark con \--verbose |
| Aegis bloquea patrones peligrosos | 100% | Suite tests adversariales |
| Backups diarios funcionando | SI | Verificar cron \+ checksums |
| Puertos publicos expuestos | 0 | nmap externo |
| Tailscale activo | SI | tailscale status |
| Volumenes cifrados LUKS | SI | cryptsetup status |
| Runbooks documentados y probados | 4+ | Ejecucion manual de cada uno |
| Abstenciones apropiadas | \> 90% | Preguntas fuera de alcance |

## **9.1 Plan B (Fallback)**

| Si... | Entonces... | Modelo Alternativo |
| :---- | :---- | :---- |
| Mistral 7B calidad insuficiente | Evaluar para tareas offline/generacion larga | Dolly 2.0 12B (MIT) |
| Necesidad multilingue critica | ASR \+ texto integrado | IBM Granite 3.3 8B (Apache 2.0) |
| STT robusta requerida | En servidor con cautela por recursos | Whisper small (244M, MIT) |


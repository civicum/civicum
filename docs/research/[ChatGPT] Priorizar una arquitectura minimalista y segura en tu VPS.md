According to a document from **February 8, 2026**, y a los principios “no negociables” del plan Cloud-3 de CIVICUM, la decisión correcta aquí es **priorizar una arquitectura minimalista/segura en tu VPS** (OpenClaw + runtime LLM local + guardarraíles + túnel privado), y **descartar Kimi K2.5 para este VPS** por inviabilidad práctica (requerimientos fuera de escala).

---

## 1) Análisis comparativo riguroso de las 2 investigaciones

### Investigación A: **“Kimi K2.5 + Ollama + OpenClaw VPS”**

**Qué aporta (útil):**

* Buen enfoque “infra + agente”: Ollama como runtime, OpenClaw como orquestador, despliegue en VPS, y foco en pipeline reproducible.
* Sirve como **marco conceptual** (componentes y responsabilidades), pero…

**Problema crítico (bloqueante):**

* **No calza con tu hardware** (4 vCPU / 12 GB RAM / 100 GB NVMe, sin GPU). Kimi K2.5 está planteado a una escala que implica infraestructura muy superior (sobre todo VRAM/GPU), por lo que en este VPS terminarías con:

  * tiempos de inferencia impracticables, o directamente imposibilidad de cargar el modelo,
  * costos/operación que contradicen tu enfoque “$0-first” y el rol de fundador único.

➡️ **Conclusión profesional:** **No es opción conveniente para CIVICUM hoy** en este VPS. Úsalo solo como “inspiración de arquitectura”, no como elección de modelo.

---

### Investigación B: **“IA Local para Soporte Cívico”**

**Qué aporta (directamente alineado a CIVICUM):**

* Enfatiza exactamente los riesgos que CIVICUM declara como inaceptables en operación cívica: **alucinación**, **prompt injection**, **fuga de PII** y necesidad de **HITL/Arbiter**.
* Se alinea con los **7 Principios No Negociables**:

  * **P2 HITL por defecto**,
  * **P3 cero puertos públicos**,
  * **P4 firewall semántico obligatorio**,
  * **P5 separación PROD/DEV con límites**, etc.

➡️ **Conclusión profesional:** **Sí es conveniente** y es la base correcta para el fundador único: reduce superficie, reduce riesgo, y te entrega una operación sostenible.

---

## 2) Opción más conveniente para CIVICUM (y para ti, fundador único)

### Recomendación principal (la más “CIVICUM-compatible”)

**Arquitectura “Minimalista y Segura (MVP robusto)”** en un solo VPS, simulando **PROD-OPS vs DEV** con **docker compose profiles**.

**Decisiones clave:**

1. **Runtime LLM: Ollama** (ya lo tienes instalado; además expone API OpenAI-compatible `/v1` ideal para OpenClaw). ([Clawctl][1])
2. **Modelos locales OSI-friendly y “CPU-first”:**

   * **1 modelo general** (7B cuantizado) para OPS/SEC/KP.
   * **opcional**: 1 modelo “coder” (7B cuantizado) para DEV (solo on-demand).
3. **Acceso privado**: Tailscale/Cloudflare Tunnel **sin puertos públicos** (P3).) y **denylist destructiva** en la capa guard.radas).c-ai/aegis” funciona con **API key** (servicio externo) para clasificación. Si CIVICUM exige *0 exfil*, tu “Aegis” debe ser **un proxy/guard local** (misma función, distinta implementación). Abajo te doy ambas opciones (pero recomiendo la local).

---

## 3) Plan de implementación paso a paso en tu VPS (Ubuntu 22.04, 4vCPU/12GB/100NVMe)

### Fase 0 — Preparación, hardening y tuning (host)

1. **Crear usuario operativo y permisos Docker**

```bash
sudo useradd -m -s /bin/bash civicum
sudo usermod -aG docker civicum
```

2. **Tuning de memoria virtual (evitar swap agresivo)**

> Ajustes recomendados en tu doc de soporte local (aplican igual en 22.04).

```bash:contentReference[oaicite:22]{index=22}cho "vm.vfs_cache_pressure=200" | sudo tee -a /etc/sysctl.conf
echo "vm.overcommit_memory=1" | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

3. **Acceso privado sin puertos públicos (P3)**

* Objetivo: **no exponer OpenClaw/Ollama/Grafana/etc. a Internet**. Solo vía túnel (Tailscale o CF Tunnel).- Instala Tailscale (si no está).
* Configura UFW para permitir solo `tailscale0` (y opcionalmente SSH solo por Tailscale):

```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow in on tailscale0
sudo ufw enable
```

4. **Estructura de directorios CIVICUM**

```bash
sudo mkdir -p /opt/civicum/{prod,dev,secrets,backups,pii}
sudo chown -R civicum:civicum /opt/civicum
chmod 700 /opt/civicum/secrets
```

---

### Fase 1 — Separación PROD-OPS vs DEV con Docker (P5)

Tu propia documentación recomienda simular entornos en un VPS con **compose profiles** y límites duros.icio).

* `dev` = se levanta “cuando lo necesites” para PRs, refactors, generación de packs, etc.

---

### Fase 2 — Runtime LLM: Ollama (mantenerlo vs containerizar)

**Opción A (recomendada para control Cloud-3): Ollama en Docker**

* Ventajas: pinning, redes internas, límites cgroups, sin puertos públicos.
* Desventaja: más configuración.

**Opción B (válida si ya está instalado): Ollama host**

* Obligatorio: bind a localhost / acceso solo interno + firewall.

**En ambos casos** OpenClaw se conecta al endpoint OpenAI-compatible de Ollama:

* `http://localhost:11434/v1` ([Clawctl][1])

**Pull del modelo (ejemplo)**

```bash
ollama pull qwen2.5:7b-instruct
```

*(en DEV podrías agregar un “coder” y mantenerlo apagado por defecto)*

---

### Fase 3 — OpenClaw: instalación/configuración base

1. **Dónde vive la config**
   OpenClaw guarda su configuración en `~/.openclaw/openclaw.json` y tiene wizard `openclaw onboard`. ([OpenClaw Guide][2])

2. **Configurar OpenClaw para usar Ollama**
   OpenClaw soporta proveedor Ollama vía API OpenAI-compatible. ([OpenClaw][3])

**Ejemplo de fragmento lógico (conceptual)**

* Provider type: `openai-compatible`
* `base_url: http://ollama:11434/v1` (si está en la misma red Docker)
* `model: qwen2.5:7b-instruct`

3. **Canal de control para fundador único**

* Recomendación práctica: **Telegram** o **WhatsApp** con allowlist de tu número (control remoto simple).
  OpenClaw soporta allowlists en ejemplos de configuración. ([OpenClaw][4])

---

### Fase 4 — HITL obligatorio + matriz de permisos (P2 + “Regla de Oro”)

Tu stack debe comportarse así:

* READ autónomo con límites
* WRITE/UPDATE/DELETE = **HITL obligatorio**
* Destructivo/irreversible = **two-person + break-glass**

Implementación práctica recomendada:

* Archivo de approvals (ej. `exec-approvals.json`) donde “pasivo vs activo” se separa, y lo activo requiere aprobación explícita.

---

### Fase 5 — Middllan: “Logs procesados por middleware PII ANTES de llegar a OpenClaw”.

**Regla cívica chilena cla: regex + validación **Módulo 11** y reemplazo por placeholder.

**Ejemplo de reglas mínimas a implementar:**
I_PHONE_REDACTED>`

> Esto debe aplicarse **a)** entradas que puedan contener PII (tickets, canales.

---

### Fase 6 — Egress control (anti-SSRF / anti-exfil) + allowlists

Tu arquitectura exige allowlists estrictas por módulo y

**Implementación en VPS (práctica):**

* Contenedores por defecto **sin Internet** (`network_mode: none`) excepto los que lo requieran.
* Para “Data fetch” solo dominios gobierno (ej. `.gob.cl`, `.gov.cl`) + repos internos.

---

### Fase 7 — Bos (02:00 UTC) + verificación restore semanal.

**Estrategia recomendada para fundador único**

* Backup diario del workspace + configs + manifests (sin secretos en claro).
* Cifrado (ideal: LUKS/volumen cifrado) o artefaerativos (para quitarte carga)
  Tu “Arquitectura completa” sugiere Prometheus+Grafana OSS vía túnel privado. (Si te queda pesado, parte solo con métricas mínimas y logs).

**Ritual diario recomendado por tu catálogo (10 min)**

* `OPS-013` digest + `SEC-001` + control de costos `FIN-*`S (menú de despliegue)

### Opción 1 — **MVP robusto (RECOMENDADA)**

* 1 modelo 7B cuantizado (general)
* OpenClaw que maximiza **seguridad + mantenibilidad** para fundador único.

---

### Opción 2 — **MVP + DEV “coder”**

* Igual que opción 1, pero en profile DEV agregas:

  * modelo “coder” (solo cuando levantas DEV)
* Útil si vas a usar OpenClaw patambién sin puertos públicos):
* embeddings + rerank
* OCR/STT (si realmente lo necesitas)
* Prometheus/Grafana
* más políticas por módulo

Tu doc lo contempla, pero esto aumenta RAM/CPU y complejidad operativa.

---

## 5) Punto crítico: “Aegis” (cómo resolverlo sin romper privacidad)

* **Si usas el Aegis de automorphic “tal cual”**, requiere API key (servicio externo).
* **Recomendación CIVICUM:** implementar un **Aegis-like wlists de egress
  3) PII redaction obligatorio
  4) HITL gate para WRITE/DELETE

Esto cumple el **Principio P4** (firewall semántico obligatorio) sin exfil.

---

## 6) Checklist de validación “obsesivo” antes de operar

1. **0 puertos públicos** (scan externo + UFW ok).L funcionando**: ningún WRITE pasa sin aprobación.llega al LLM.drill).*docker-compose completo** (con profiles `prod`/`dev`, redes internas, límiteGB / 100 GB**, pero sin inventar nombres internos: lo haré alinea.json`) y al endpoint `/v1` de Ollama. ([OpenClaw Guide][2])

[1]: https://clawctl.com/blog/openclaw-local-llm-complete-guide?utm_source=chatgpt.com "OpenClaw with Local LLM: The Complete Guide (Ollama, vLLM, LM Studio)"
[2]: https://www.getopenclaw.ai/docs/configuration?utm_source=chatgpt.com "OpenClaw Configuration Guide — Complete Settings Reference"
[3]: https://docs.openclaw.ai/providers/ollama?utm_source=chatgpt.com "Ollama - OpenClaw"
[4]: https://docs.openclaw.ai/gateway/configuration-examples?utm_source=chatgpt.com "Configuration Examples - OpenClaw"

---

Ahora corresponde una validación del análisis anterior:

No puedo asegurarte honestamente “100% línea por línea” **integrado** en mi respuesta anterior, porque mi plan **sí cubrió el núcleo VPS/Zero-Trust**, pero **dejé fuera** requisitos explícitos que están en tus propios documentos (por ejemplo: **supply-chain/pinning “nunca latest”, FS read-only, volúmenes cifrados, separación Civia≠OpenClaw, benchmarking reproducible, stack recomendado Mistral/LINCE + embeddings/reranker/OCR desde el arranque**, etc.). Abajo va la validación obsesiva, con evidencia de lectura completa y el *gap-log* para cerrar al 100%.

---

## 1) Evidencia de revisión completa (sin Kimi)

Escaneé **22 archivos** del proyecto (excluyendo *Kimi* como pediste): **35.436 líneas** en total.

| file                                                                   | lines | sha256_12    |
| ---------------------------------------------------------------------- | ----- | ------------ |
| Arquitectura de IA Local para CIVICUM – Informe Técnico.docx.md        | 574   | f07342178c7a |
| CIVICUM — Catálogo Definitivo de Skills (OpenClaw + Civia).txt         | 621   | 4423a9d4957b |
| CIVICUM_80_Roles_Auditoria_Validacion.md                               | 18011 | e235af19bc47 |
| CIVICUM_Anexo_Arquitectura_Tecnica_Completa.docx.md                    | 1736  | 4abf80b77c12 |
| CIVICUM_Anexo_Capacidades_Automatizacion_Exhaustivo.docx.md            | 787   | f0ef72fdb76c |
| CIVICUM_Anexo_Decisiones_F01_F47_Exhaustivo.docx.md                    | 2609  | f26f01f13248 |
| CIVICUM_Anexo_Design_System_Terracota.docx.md                          | 983   | 9e330fbc339d |
| CIVICUM_Anexo_Fundamentos_Antropologicos_Culturales_Exhaustivo.docx.md | 866   | 5dd5735c9e02 |
| CIVICUM_Anexo_Metricas_Alcance_Exhaustivo.docx.md                      | 322   | 1bf154775225 |
| CIVICUM_Anexo_Modulos_Expandidos_Exhaustivo.docx.md                    | 1336  | f8e6df070639 |
| CIVICUM_Anexo_Modulos_MVP_Especificacion_Exhaustiva.docx.md            | 688   | 10bc6dfefcae |
| CIVICUM_Anexo_Propiedad_Intelectual_Documentacion_Tecnica.docx.md      | 360   | 484bd7100f4e |
| CIVICUM_Anexo_Proteccion_Originalidad_Exhaustivo.docx.md               | 693   | 21c57b43bd1a |
| CIVICUM_Anexo_Tecnico_Exhaustivo_Modulos.docx.md                       | 961   | d81cb74ec1ad |
| CIVICUM_Diseno_UI_UX_Definitivo.md                                     | 1789  | 6cc2e0bfe4c3 |
| CIVICUM_Documentacion_Integral_Proteccion_Intelectual_v1.docx.md       | 447   | fb8710abd554 |
| CIVICUM_Identidad_de_Marca_Propuesta_Mision_Vision_Manifiesto.md       | 472   | d33da985fb1b |
| CIVICUM_Plan_Definitivo_Implementacion_OpenClaw.docx.md                | 970   | 5226b43abd9e |
| CIVICUM_Playbook_Integracion_OpenClaw_v1.docx.md                       | 171   | 916b93725d30 |
| IA Local Open Source para Soporte.docx.md                              | 406   | ad7e0b7d5069 |
| IA Local para Soporte Cívico.md                                        | 314   | d3ad1051b1f9 |
| Resumen ejecutivo (Top 3 recomendaciones y consideraciones).docx       | 320   | 4589cabbfeb2 |

Además, extraje **805 líneas “normativas/obligatorias”** (debe/obligatorio/nunca/HITL/PII/etc.) para revisar cobertura real.

---

## 2) Veredicto profesional: mi respuesta anterior **NO** alcanza 100% de integración

### Lo que **sí** quedó bien cubierto (VPS/seguridad base)

* Acceso privado / **cero puertos públicos** (túnel).
* Separación PROD vs DEV (idea general).
* HITL por defecto (idea general).
* PII middleware (RUT/teléfono) (idea general).
* Egress allowlist/anti-SSRF (idea general).
* Backups + restore drill (idea general).
* Observabilidad mínima (idea general).

### Lo que **faltó** (y es “MANDATORIO” en tus docs)

Estas brechas son las que impiden que te diga “100% integrado”:

#### A) **Separación Civia ≠ OpenClaw** (principio no negociable)

En tu *Playbook* se declara explícito: **Civia (ciudadanía) no conversa con OpenClaw; OpenClaw es solo admins/devs**, y se definen “puentes” controlados (Knowledge Pack, observabilidad). Yo lo insinué, pero **no lo convertí en una regla operativa implementable** (políticas, red, endpoints, restricciones).

#### B) **Cadena de suministro (supply-chain) obligatoria**

Tu Playbook exige: **pinning de versiones, upgrades manuales, nunca “latest”**, y trazabilidad completa. Yo **no** entregué el set mínimo (pines de imágenes, version locks, SBOM/vuln scan, política de upgrades).

Además, esto hoy es crítico por un motivo externo reciente: se reportó malware en “skills” de OpenClaw/ClawHub (skills no sandbox) y riesgo real de exfiltración si se instala cualquier skill de terceros. ([The Verge][1])
➡️ Mi plan anterior **no** incorporó la contramedida obligatoria: **“Cero skills de marketplace” + revisión de código + registry privado**.

#### C) **Aegis “local” como proxy/firewall semántico**

Yo advertí que un “Aegis” podía ser externo; eso fue un error de alineación con tu documentación: tu arquitectura define **Aegis delante de OpenClaw** como *proxy local* con denylist destructiva, SSRF guard, HITL.
➡️ Falta especificación implementable: contenedor, rutas, políticas, formato de reglas, *update deshabilitado*, logging/auditoría, tokens HITL.

#### D) **Stack recomendado y coherencia de licencias**

Tus docs recomiendan **Stack 1: Mistral 7B / LINCE Mistral 7B (Apache-2.0)** y, desde fase inicial, **embeddings + reranker + OCR (Tesseract)**. Yo puse Qwen como ejemplo, lo que **no** es fiel a tu recomendación interna.

* LINCE Mistral 7B figura con licencia **apache-2.0**. ([huggingface.co][2])
* Mistral 7B está publicado como **Apache-2.0** por Mistral. ([mistral.ai][3])
  ➡️ Falta en mi plan: **adoptar explícitamente Stack 1** y declarar el criterio “no open-weights” con verificación de licencias.

#### E) **FS read-only + volúmenes cifrados + secretos fuera del workspace**

Tu Playbook pide: FS read-only, volúmenes cifrados recomendados, secretos fuera del workspace (vault/CI). Yo **no** detallé cómo implementarlo en tu VPS (LUKS/fscrypt, mounts, permisos, rotación, separación DEV/PROD).

#### F) **Benchmarking reproducible + tuning CPU/AVX2**

Tu “Arquitectura IA Local” trae benchmarking, métricas (tok/s), tuning y parámetros sugeridos (reducir contexto, etc.). Yo no incluí el **harness reproducible** ni los criterios de aceptación por mes.

#### G) **Roadmap 30-60-90 + criterios de aceptación**

Tu doc trae un roadmap operativo completo (día 0-30/31-60/61-90) con *exit criteria* (latencia, % FAQs, 48h sin OOM, 0 PII en logs, drills). Mi plan fue más genérico.

#### H) **Decisiones F01-F47 (IA “client-first” y offline dignity)**

Tu anexo de decisiones define arquitectura de IA **en el cliente primero** (WebLLM + fallback), offline-first, feature flags, etc. Mi plan para el VPS no explicitó la compatibilidad: que este VPS es **plano operacional interno** y no contradice “client-first”.

#### I) Documentos fuera del alcance del VPS que igual deben “quedar integrados”

* **UI/UX definitivo**, **Design System**, **Roles de auditoría/validación**, **módulos MVP/expandidos**, **métricas de alcance**, **protección intelectual/originalidad**.
  Mi plan anterior **no** puede “integrar” todo eso dentro del VPS (porque es otra capa del producto), pero sí debí dejar un **mapa de dependencias**: qué exige cada doc y dónde se implementa (PWA, repos, legal, operación, etc.).

---

## 3) Qué necesitas agregar para poder decir “100% considerado e integrado”

Te dejo el *patch-set mínimo* (lo que faltó) para que la implementación quede alineada a **todos** tus documentos:

1. **Regla dura de arquitectura (Playbook):**

   * “Civia no conversa con OpenClaw” → políticas de red + endpoints separados + ACL en el túnel + documentación operativa.
2. **Supply-chain (obligatorio):**

   * docker images con **tags fijos** (no latest), digest pin, changelog de upgrades, ventana mensual, rollback.
   * **SBOM + vuln scan** (Trivy/Syft/Grype) con reporte y umbral “0 críticos”.
   * **Skills**: **solo repos interno**; prohibido instalar skills desde marketplace; revisión de código obligatoria. (Riesgo actual real) ([The Verge][1])
3. **Aegis local implementado de verdad:**

   * proxy delante de OpenClaw (PROD y DEV), denylist destructiva, SSRF guard, allowlists, HITL tokens, logging/audit inmutable, “update deshabilitado”.
4. **Stack 1 oficial (no ejemplos):**

   * **LINCE Mistral 7B** (Apache-2.0) ([huggingface.co][2])
   * * embeddings + reranker desde fase inicial (como dice tu doc)
   * * OCR Tesseract temprano
5. **FS read-only + cifrado + secretos fuera del workspace:**

   * DEV con workspace restringido (patch dir writable), PROD read-only, secretos en `/opt/civicum/secrets` (0700) + cifrado (LUKS o fscrypt) + rotación.
6. **Benchmarking reproducible + tuning CPU:**

   * script/runner que mida tok/s, RAM, latencia; baseline; tuning (contexto, concurrencia).
7. **Roadmap 30-60-90 + exit criteria** tal cual el doc (mes 1/2/3).
8. **Compatibilidad con F01-F47:**

   * declarar formalmente: VPS = “Plano Operacional Cloud-3” interno; la IA ciudadana sigue “client-first/offline”.

---

## 4) Conclusión

* **Sí**: revisé todos los documentos (sin Kimi) y tu plan VPS anterior **cubre bien** el esqueleto Zero-Trust.
* **No**: no puedo “asegurar 100% integrado” porque faltan piezas **mandatorias** de tus docs (supply-chain/pinning, FS RO + cifrado + secretos, Aegis implementable, stack oficial Mistral/LINCE + embeddings/reranker/OCR temprano, benchmarking + roadmap 30-60-90, separación Civia≠OpenClaw, y una respuesta explícita a F01-F47).

Si quieres, en el próximo mensaje te devuelvo un **plan corregido v2** (paso a paso) que ya incluya **todas** estas brechas cerradas, más un **checklist de auditoría** (Go/No-Go) alineado al roadmap 30-60-90.

[1]: https://www.theverge.com/news/874011/openclaw-ai-skill-clawhub-extensions-security-nightmare?utm_source=chatgpt.com "OpenClaw's AI 'skill' extensions are a security nightmare"
[2]: https://huggingface.co/clibrain/lince-mistral-7b-it?utm_source=chatgpt.com "clibrain/lince-mistral-7b-it-es · Hugging Face"
[3]: https://mistral.ai/news/announcing-mistral-7b?utm_source=chatgpt.com "Mistral 7B | Mistral AI"


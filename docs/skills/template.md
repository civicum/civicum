# 📋 SKILL CARDS - TEMPLATE Y EJEMPLOS

**Versión:** 1.0  
**Última actualización:** 6 Febrero 2026  
**Soluciona:** Observación OC-2 (Auditoría OpenClaw)

---

## 🎯 Template Obligatorio

Cada skill DEBE documentar los siguientes campos:

```yaml
# Skill Card: {ID}
id: {DOMINIO}-{NÚMERO}
name: {Nombre descriptivo}
domain: {KP|DATA|OPS|SEC|REL|DEV|SUP|GOV|FIN|EVAL|INT|EMG}
environment: {PROD-OPS|DEV}
risk_level: {R0|R1|R2|R3|R4}

objective: |
  {Descripción clara de qué problema resuelve}

inputs:
  - name: {nombre}
    type: {tipo}
    required: {true|false}
    schema: {referencia a schema}

outputs:
  - name: {nombre}
    type: {artefacto|mensaje|cambio}
    location: {storage://|repo://|etc}

permissions:
  aegis_tags:
    - {fs:read|fs:write_workspace|net:allowlist|etc}
  hitl: {required|optional|none}

safety_checks:
  - {NO_OVERWRITE_POLICY|semver|dry_run|allowlist|etc}

auditing:
  events:
    - start
    - evidence
    - proposal
    - hitl_request
    - done
  trace_id: {formato}

rollback:
  strategy: {descripción}
  time_target: {segundos}

tests:
  - {schema_validation|golden_answers|link_check|etc}

kpis:
  - {métrica}: {valor}
```

---

## 📋 EJEMPLO: KP-003 (Compilador de Knowledge Pack)

```yaml
id: KP-003
name: Compilador de Knowledge Pack
domain: KP
environment: PROD-OPS
risk_level: R2

objective: |
  Construir kp_build_vX.Y.Z con manifiesto verificable
  para actualizar Civia sin exponer OpenClaw.

inputs:
  - name: source_repo
    type: repository
    required: true
    schema: repo://civicum/knowledge-pack

outputs:
  - name: kp_build
    type: artefacto
    location: storage://internal/kp_build.tar.gz
  - name: manifest
    type: artefacto
    location: storage://internal/manifest.json
  - name: hash
    type: string
    format: SHA-256

permissions:
  aegis_tags:
    - fs:read
    - fs:write_workspace
  hitl: required_for_publish

safety_checks:
  - NO_OVERWRITE_POLICY
  - semver_increment_required
  - sha256_hash_generated

auditing:
  events:
    - kp_003_start
    - kp_003_build_complete
    - kp_003_hash_generated
    - kp_003_hitl_request
    - kp_003_done
  trace_id: uuid-v4

rollback:
  strategy: revert_to_previous_semver
  time_target: 60

tests:
  - schema_validation
  - golden_answers (min 10)
  - link_check

kpis:
  - regressions: 0
  - publish_time: <5min
```

---

## 📋 EJEMPLO: SEC-004 (SSRF Guard)

```yaml
id: SEC-004
name: SSRF / Egress Guard
domain: SEC
environment: PROD-OPS
risk_level: R1

objective: |
  Bloquear conexiones a IPs/dominios no autorizados.
  Prevenir exfiltración de datos.

inputs:
  - name: outbound_request
    type: http_request
    required: true

outputs:
  - name: decision
    type: enum
    values: [ALLOWED, BLOCKED]
  - name: log_entry
    type: audit_log

permissions:
  aegis_tags:
    - net:inspect
    - net:block
  hitl: none

safety_checks:
  - allowlist_strict
  - ip_range_validation
  - dns_rebinding_protection

auditing:
  events:
    - sec_004_request
    - sec_004_decision
  trace_id: uuid-v4

rollback:
  strategy: null (stateless)
  time_target: 0

tests:
  - allowlist_compliance (15 cases)
  - ssrf_attempts_blocked (10 cases)

kpis:
  - false_positive_rate: <0.1%
  - latency_p99: <10ms
```

---

## 📂 Estructura de Carpetas

```
docs/skills/
├── template.md (este archivo)
├── kp/
│   ├── KP-001.md
│   ├── KP-003.md
│   └── ...
├── sec/
│   ├── SEC-001.md
│   ├── SEC-004.md
│   └── ...
└── ...
```

**Nota:** Las Skill Cards detalladas se irán generando durante Fase 1-2 conforme se implementen los skills.

---

*Documento generado para cerrar Observación OC-2*

# 🤖 ESCENARIO DE ATAQUE: 10.000 BOTS COORDINADOS

**Versión:** 1.0  
**Última actualización:** 16 Febrero 2026  
**Escuadrón:** 62 — Defcon-2: Ataque de Bots Coordinados  
**Soluciona:** DC2-1, DC2-2  
**Complementa:** `docs/security/anti-fraud-spec.md` (vectores individuales)

---

## 🎯 Problema

10.000 bots intentan votar simultáneamente en una encuesta barrial. ¿Sobrevivimos?

---

## 🔴 HALLAZGO DC2-1: Sin Simulación de Ataque Masivo Coordinado

**Problema:** `anti-fraud-spec.md` cubre vectores individuales (bot farm, sybil, credential stuffing) pero no un escenario coordinado de 10K bots simultáneos.

**Solución: War Game "Tsunami Bot"**

### Escenario simulado
```
HORA 0:
- 10.000 cuentas creadas en las últimas 48h (emails temp, IPs distribuidas VPN)
- Target: Encuesta barrial "¿Apoyas semáforo en Av. Libertador?"
- Pattern: Votan "Sí" en ráfaga de 15 minutos

HORA 0:00-0:05 — DETECCIÓN TEMPRANA:
Capa 1: Rate Limiting (Cloudflare WAF)
  → 100 req/min por IP = 50% bloqueados (IPs compartidas)
  → Resultado: ~5.000 requests pasan

Capa 2: Turnstile CAPTCHA invisible
  → Challenge score <0.3 = bot probable = CAPTCHA visible
  → Resultado: ~3.000 fallan CAPTCHA, ~2.000 pasan

Capa 3: Account Age Filter
  → Cuentas <7 días con >5 votos/hora = flagged
  → Resultado: ~1.500 flagged, ~500 pasan

Capa 4: Behavioral Biometrics
  → Mouse/touch patterns idénticos = bot fingerprint
  → Resultado: ~300 más detectados

Capa 5: Proof of Humanity (RUT hash, Nivel 2+)
  → Votos de cuentas Nivel 0-1 = peso reducido en resultados
  → Resultado: 200 votos bot pasan pero con peso 0.1x

RESULTADO NETO:
  Votos bot efectivos: ~20 (de 10.000 intentos) = 99.8% bloqueados
```

### Capas de defensa (implementación)

| Capa | Control | Config | Efectividad |
|------|---------|--------|-------------|
| 1 | Rate limit IP | 100 req/min WAF rule | 50% |
| 2 | Turnstile | Score threshold 0.3 | 60% del resto |
| 3 | Account age | `MIN_ACCOUNT_AGE_VOTE=7d` | 75% del resto |
| 4 | Behavioral | Canvas fingerprint + mouse entropy | 60% del resto |
| 5 | Proof of Humanity | Peso por nivel verificación | Residual |
| 6 | k-anonymity | No mostrar resultado si N<5 legítimos | Safety net |

### Alertas automáticas

```
TRIGGER: >50 votos/min en encuesta barrial (normal: <10/min)
  → Slack alert a Rol 67 (Integridad Electoral) + Rol 29 (Trust & Safety)
  → Auto-activar CAPTCHA visible para TODOS los votantes
  → Congelar resultados (no se muestran hasta revisión manual)
  → Log forense completo: IPs, user agents, account ages, vote timestamps

TRIGGER: >100 cuentas nuevas/hora en misma comuna
  → Slack alert a Rol 29
  → Activar verificación SMS obligatoria para nuevos registros
  → Honeypot: links falsos en footer (solo bots hacen clic)
```

---

## 🟠 HALLAZGO DC2-2: Sin Protocolo Post-Ataque

**Problema:** No hay procedimiento para limpiar los efectos de un ataque masivo después de detectarlo.

**Solución: Protocolo de Limpieza Post-Ataque**

| Fase | Acción | Responsable | Tiempo |
|------|--------|-------------|--------|
| 1. Congelar | Desactivar encuesta atacada | Rol 67 | <5 min |
| 2. Analizar | Identificar cluster de bots (IP, timing, fingerprint) | Rol 29 | <30 min |
| 3. Purgar | Invalidar votos del cluster identificado | Rol 67 + Rol 16 | <1h |
| 4. Recalcular | Reconteo con solo votos legítimos | Automático | <5 min |
| 5. Comunicar | Banner: "Detectamos actividad sospechosa. Resultados verificados" | Rol 75 | <2h |
| 6. Banear | Desactivar cuentas bot + IPs en blocklist | Rol 29 | <2h |
| 7. Postmortem | Documento con timeline, impacto, gaps | Rol 71 (OpSec) | <48h |

---

*Documento generado para Escuadrón 62 Defcon-2. Resolución DC2-1 + DC2-2.*

# 🧌 PLAYBOOK DE SIMULACIÓN RED TEAM SOCIAL

**Versión:** 1.0  
**Última actualización:** 15 Febrero 2026  
**Soluciona:** Observación F3-1

---

## 🎯 Objetivo

Simular ataques coordinados de trolls y actores maliciosos NO técnicos para validar la resiliencia social de CIVICUM. Complementa `ai-redteam.md` (que cubre IA).

---

## 📋 Escenarios de Simulación

### Escenario F3-S01: Brigading Político
**Premisa:** Grupo organizado intenta sesgar resultados de votación simbólica a favor de un candidato.

| Fase | Acción Atacante | Defensa Esperada |
|------|----------------|-----------------|
| 1 | Crear 20+ cuentas con emails temporarios | Email verification + rate limit registro |
| 2 | Votar masivamente en tema específico | UNIQUE constraint + validateSupport() |
| 3 | Postear contenido sesgado pro-candidato | TensorFlow.js + F-05 neutralidad |
| 4 | Reportar contenido neutro como "sesgado" | Moderación Capa 4: contra-reportes verificados |

### Escenario F3-S02: Astroturfing Municipal
**Premisa:** Funcionario crea apariencia de apoyo ciudadano a su gestión usando cuentas falsas.

| Fase | Acción Atacante | Defensa Esperada |
|------|----------------|-----------------|
| 1 | Crear reportes positivos falsos | Deduplicación + geolocalización |
| 2 | Apoyar masivamente reportes propios | validateSupport() + rate limit |
| 3 | Desacreditar reportes legítimos contra su gestión | Moderación comunitaria (3+ reports) |

### Escenario F3-S03: Doxxing de Reportero Ciudadano
**Premisa:** Actor malicioso intenta identificar al creador de un reporte anónimo.

| Fase | Acción Atacante | Defensa Esperada |
|------|----------------|-----------------|
| 1 | Cruzar datos geolocalización con perfil | Precisión reducida a nivel comuna |
| 2 | Usar comentarios para forzar respuesta identificable | Opción de anonimato en reportes |
| 3 | Publicar supuesta identidad en comentarios | PII detection Capa 1 + moderación |

### Escenario F3-S04: Flooding/DDoS Social
**Premisa:** Enviar miles de reportes basura para colapsar el sistema de moderación.

| Fase | Acción Atacante | Defensa Esperada |
|------|----------------|-----------------|
| 1 | Spam de reportes | Rate limit: máx 3/día/usuario |
| 2 | Spam de comentarios | Debounce + TensorFlow.js |
| 3 | Spam de apoyos | validateSupport() anti-velocidad |
| 4 | Escalar artificialmente a Nivel 4 | Congelamiento temporal si sospecha |

---

## 📊 Evaluación Post-Simulación

| Dimensión | Score 1-5 | Peso |
|-----------|-----------|------|
| Detección del ataque | _ | 30% |
| Velocidad de respuesta | _ | 25% |
| Contenido falso filtrado | _ | 25% |
| Impacto en usuarios legítimos | _ | 20% |

**Mínimo aceptable:** ≥ 3.5/5 promedio ponderado

---

## 📅 Ejecución

| Acción | Frecuencia | Responsable |
|--------|-----------|-------------|
| Simulación completa (4 escenarios) | Semestral | Rol 79 (Red Team Producto) |
| Mini-simulación (1 escenario) | Trimestral | Rol 28 (Red Team) |
| Update de escenarios | Anual | Rol 56 (Moderation Policy) |

---

*Documento generado para cerrar Observación F3-1*

# 👹 MAPA DE RIESGOS ÉTICO-SOCIALES — EL ABOGADO DEL DIABLO

**Versión:** 1.0  
**Última actualización:** 15 Febrero 2026  
**Soluciona:** Observación Omega-1, Omega-2

---

## 🎯 Objetivo

Identificar fallas éticas sutiles, incentivos perversos y riesgos sistémicos que podrían surgir del uso de CIVICUM a escala. El "abogado del diablo" busca lo que nadie más vio.

---

## 🔴 Riesgos Identificados

### R1: Captura por Élites Digitales
| Aspecto | Detalle |
|---------|---------|
| **Riesgo** | Grupo pequeño de usuarios hiper-activos dominan la conversación |
| **Mecanismo** | Karma alto → más visibilidad → más karma → feedback loop |
| **Mitigación** | F-10 Anti-élite: karma cap (1000 pts), 1p=1v, tope máximo de karma |
| **Mitigación extra** | Rotación de contenido destacado, diversidad algorítmica |
| **Severidad** | 🟠 ALTO |
| **Estado** | ✅ Mitigado (F-10 + karma cap documentados) |

### R2: Weaponización de Reportes
| Aspecto | Detalle |
|---------|---------|
| **Riesgo** | Reportes usados como arma política contra oponentes |
| **Mecanismo** | Crear reportes falsos contra alcalde rival → daño reputacional |
| **Mitigación** | B3-1: protocolo de reportes abusivos + moderación Capa 4 |
| **Mitigación extra** | Fact-checking comunitario, Rol 45 verificador |
| **Severidad** | 🔴 CRÍTICO |
| **Estado** | ✅ Mitigado (audit-alza-la-voz.md) |

### R3: Fatiga Democrática
| Aspecto | Detalle |
|---------|---------|
| **Riesgo** | Usuarios ven que votos simbólicos no cambian nada → abandono masivo |
| **Mecanismo** | Promesa implícita vs realidad → desilusión → "otra app inútil" |
| **Mitigación** | F-02 Honestidad Radical: disclaimers explícitos antes de cada voto |
| **Mitigación extra** | Métricas de impacto real (reportes resueltos, no solo votos) |
| **Severidad** | 🟠 ALTO |
| **Estado** | ✅ Mitigado (F-02 + G2-1 skeptic protocol) |

### R4: Efecto Panóptico Inverso
| Aspecto | Detalle |
|---------|---------|
| **Riesgo** | Autoridades monitorean quién reporta qué → represalias |
| **Mecanismo** | Datos de uso cruzan con registros públicos → identificación |
| **Mitigación** | Anonimato opcional en reportes, RLS, PII minimización (F-03) |
| **Mitigación extra** | 7 vectores blindados: RLS apoyos, service_role separado, logs anonimizados 30d, alias enforcement, fingerprint efímero, vista pública sin author_id, k-anonymity k=5 |
| **Severidad** | 🔴 CRÍTICO |
| **Estado** | ✅ RESUELTO — `docs/security/anti-panoptico-blindaje.md` |

### R5: Brecha Digital como Brecha Democrática
| Aspecto | Detalle |
|---------|---------|
| **Riesgo** | Solo participan quienes tienen smartphone/internet → sesgo urbano |
| **Mecanismo** | Zonas rurales/adultos mayores excluidos → resultados no representativos |
| **Mitigación** | 6 canales: HTML-Lite, SMS, IVR, Presencial, Kioscos, WhatsApp |
| **Mitigación extra** | Métricas de representatividad, disclaimers, alerta de sesgo, cobertura 6/6 barreras |
| **Severidad** | 🟠 ALTO |
| **Estado** | ✅ RESUELTO — `docs/roadmap/inclusion-sin-smartphone.md` v2.0 |

### R6: Instrumentalización Electoral
| Aspecto | Detalle |
|---------|---------|
| **Riesgo** | Candidatos usan CIVICUM como evidencia de "apoyo popular" |
| **Mecanismo** | Screenshot de votación simbólica → "la ciudadanía nos apoya" |
| **Mitigación** | F-02: voto simbólico disclaimer, watermark en exports |
| **Mitigación extra** | ToS prohíbe uso en propaganda electoral |
| **Severidad** | 🟠 ALTO |
| **Estado** | ✅ Mitigado (terms-of-service-template.md + F-02) |

### R7: Burnout del Voluntariado Cívico
| Aspecto | Detalle |
|---------|---------|
| **Riesgo** | Moderadores y guardianes se agotan → calidad decae |
| **Mecanismo** | Sistema depende de voluntarios que eventualmente se van |
| **Mitigación** | IA Capa 1-2 reduce 90% carga, rotación de guardianes |
| **Mitigación extra** | Calendario de descanso, no penalizar inactividad |
| **Severidad** | 🟡 MEDIO |
| **Estado** | ✅ Mitigado (Pi-1 moderación 4 capas + Rho-1 anti-dark patterns) |

---

## 📊 Matriz de Severidad

| ID | Riesgo | Probabilidad | Impacto | Severidad | Estado |
|---|---|---|---|---|---|
| R1 | Captura élites | Media | Alto | 🟠 | ✅ |
| R2 | Weaponización reportes | Alta | Crítico | 🔴 | ✅ |
| R3 | Fatiga democrática | Alta | Alto | 🟠 | ✅ |
| R4 | Panóptico inverso | Baja | Crítico | 🔴 | ✅ |
| R5 | Brecha digital | Alta | Alto | 🟠 | ✅ |
| R6 | Instrumentalización | Media | Alto | 🟠 | ✅ |
| R7 | Burnout voluntariado | Media | Medio | 🟡 | ✅ |

---

## 📅 Revisión

| Check | Frecuencia | Responsable |
|-------|-----------|-------------|
| Actualización mapa de riesgos | Semestral | Rol 80 (Riesgos Socio-técnicos) |
| Devil's advocate session | Trimestral | Rol 79 (Red Team Producto) |
| Review incentivos perversos | Trimestral | Rol 04 (Honestidad Radical) |

---

*Documento generado para cerrar Observaciones Omega-1 y Omega-2*

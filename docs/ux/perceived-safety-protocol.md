# 🛡️ PROTOCOLO UX DE SEGURIDAD PERCIBIDA PARA DENUNCIANTES

**Versión:** 1.0  
**Última actualización:** 16 Febrero 2026  
**Escuadrón:** 53 — Psi-Gamma: El Miedo a la Represalia  
**Soluciona:** PsiG-1, PsiG-2  
**Se complementa con:** `docs/security/anti-panoptico-blindaje.md` (blindaje técnico)

---

## 🎯 Problema

El blindaje técnico existe (R4 resuelto: 7 vectores blindados) pero el usuario NO LO SABE. Si no se **siente** seguro, no reportará. La seguridad percibida es tan importante como la real.

---

## 🔴 HALLAZGO PsiG-1: Sin Comunicación de Seguridad en Flujo de Reporte

**Problema:** El Escudo de Identidad (F-18) existe como concepto y el blindaje anti-panóptico existe como implementación, pero el usuario no ve ningún indicador visual de seguridad durante el flujo de creación de reporte.

**Solución: Indicadores de Seguridad Contextuales**

```
┌──────────────────────────────────────────────┐
│  🛡️ Tu reporte está protegido                │
│                                              │
│  ✅ Tu identidad real nunca se expone         │
│  ✅ Solo tu alias "[nombre]" es visible        │
│  ✅ Nadie puede ver que apoyaste algo          │
│  ✅ Puedes reportar como anónimo               │
│                                              │
│  [Saber más sobre tu protección]             │
└──────────────────────────────────────────────┘
```

**Momentos de refuerzo:**
| Momento | Indicador | Copy |
|---------|----------|------|
| Pre-reporte | Banner Escudo | "Tu identidad está protegida" |
| Checkbox anónimo | Toggle visible | "Reportar como anónimo (ni moderadores verán tu identidad)" |
| Post-envío | Confirmación | "Reporte enviado. Tu identidad NO está vinculada públicamente" |
| Al apoyar | Tooltip | "Tu apoyo es invisible para otros" |
| Al votar | Microcopy | "Tu voto es confidencial" |

---

## 🟠 HALLAZGO PsiG-2: Sin Testing de Seguridad Percibida

**Problema:** No se ha validado con usuarios reales si el flujo transmite confianza suficiente para reportar temas sensibles (corrupción, abuso de poder, violencia).

**Solución: Test de Percepción de Seguridad**

**Protocolo (Rol 06: UX Researcher):**

| # | Escenario de Test | Pregunta |
|---|-------------------|----------|
| T1 | Mostrar flujo de reporte | "¿Te sentirías seguro/a reportando un caso de corrupción de un concejal?" (1-5) |
| T2 | Mostrar checkbox anónimo | "¿Confías en que nadie sabrá que fuiste tú?" (1-5) |
| T3 | Mostrar banner Escudo | "¿Esto te hace sentir más o menos seguro?" |
| T4 | Flujo completo con tema sensible | "Reporta un abuso policial [simulado]. ¿En algún momento dudaste si era seguro?" |
| T5 | Post-reporte | "Si supieras que un funcionario corrupto podría ver la plataforma, ¿aún reportarías?" |

**Muestra:**
- 5 usuarios segmento S5 (Vulnerable/Riesgo)
- 5 usuarios segmento S4 (Mayor Cauteloso)
- 5 usuarios segmento S3 (Ciudadano Común)

**Criterio de éxito:**
| Métrica | Target |
|---------|--------|
| Confianza media (1-5) | ≥3.5 |
| % que completaría el reporte | ≥70% |
| % que entiende qué datos son visibles | ≥80% |

**Contenido expandido "Saber más sobre tu protección":**
```
CÓMO TE PROTEGEMOS
─────────────────────────────────
📌 Tu identidad real: Solo tú y el equipo legal (si un juez lo ordena)
   pueden vincular tu alias con tu persona.

📌 Tu actividad: Nadie puede ver qué reportes apoyaste ni cómo
   votaste. Solo se muestran totales.

📌 Tus datos: Encriptados en tránsito y en reposo. No vendemos
   datos. No compartimos con autoridades sin orden judicial.

📌 Tu ubicación: Si reportas un problema, solo se publica la
   ubicación del problema, NUNCA la tuya.

📌 Retractación: Puedes borrar tu reporte en cualquier momento.
   Se elimina en 72h de todos los sistemas.

¿Quieres saber más? Lee nuestra Política de Privacidad completa.
```

---

*Documento generado para Escuadrón 53 Psi-Gamma. Resolución PsiG-1 + PsiG-2.*

# 💤 FRAMEWORK DE REACTIVACIÓN ÉTICA

**Versión:** 1.0  
**Última actualización:** 16 Febrero 2026  
**Escuadrón:** 52 — Psi-Beta: La Apatía y el Abandono  
**Soluciona:** PsiB-1, PsiB-2

---

## 🎯 Problema

El usuario se registró pero nunca volvió. Necesitamos win-back ético: sin spam, sin dark patterns, sin culpa.

---

## 🔴 HALLAZGO PsiB-1: Sin Framework de Win-Back Ético

**Problema:** `audit-retencion-habito.md` define política push (2/día, 5/sem) pero no tiene un flujo específico para usuarios dormidos (>30 días sin actividad).

**Solución: Secuencia "Valor, No Molestia"**

```
D+0  : Registro completo
D+3  : Si no ha vuelto → NADA (es normal)
D+7  : Si no ha vuelto → Email 1: "Esto pasó en tu comuna esta semana"
       (NO: "Te extrañamos")
       Contenido: 1 dato concreto + 1 reporte nuevo de su comuna
D+30 : Si no ha vuelto → Email 2: "Resultado: el bache de [calle] fue reparado"
       Contenido: resultado real de un reporte de su comuna
D+60 : Si no ha vuelto → Último contacto: "¿Quieres seguir recibiendo 
       noticias de tu comuna? [Sí] [No, desactivar]"
D+90 : Si no responde → Auto-desactivar comunicaciones
       NUNCA MÁS contactar salvo que usuario vuelva voluntariamente
```

**Reglas éticas de win-back:**
| Regla | Implementación |
|-------|---------------|
| Sin culpa | Nunca "te extrañamos" ni "hace X días que no entras" |
| Solo valor | Cada contacto debe tener un dato concreto útil |
| Opt-out fácil | Un clic para desactivar, SIEMPRE visible |
| Máximo 3 intentos | Después de D+60 sin respuesta → silencio |
| Sin contadores de presión | No "3 reportes nuevos te esperan" |
| Horario ético | Solo L-V 10:00-18:00 (Rol 08 Calm Tech) |

---

## 🟠 HALLAZGO PsiB-2: Sin Diagnóstico de Abandono

**Problema:** No sabemos POR QUÉ se fue el usuario. Sin diagnóstico, la reactivación es ciega.

**Solución: Exit Survey Mínima (Opcional)**

Cuando el usuario marca "Desactivar comunicaciones":

```
¿Por qué te vas? (opcional, 1 clic)

○ No encontré lo que buscaba
○ La app es difícil de usar
○ No me siento seguro/a
○ No veo que sirva de algo
○ Otra razón: [___________]

[Enviar] [Prefiero no decir]
```

**Dashboard de abandono:**
| Métrica | Fuente | Responsable |
|---------|--------|-------------|
| D7 retention rate | Analytics | Rol 01 (Product Lead) |
| Motivo de abandono | Exit survey | Rol 06 (UX Researcher) |
| Win-back conversion | Email open + return | Rol 76 (Growth Ético) |
| Auto-desactivaciones D+90 | Cron | Rol 80 (Riesgos) |
| NPS de reactivados | Survey post-retorno | Rol 03 (Service Designer) |

---

*Documento generado para Escuadrón 52 Psi-Beta. Resolución PsiB-1 + PsiB-2.*

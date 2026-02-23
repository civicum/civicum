# 🚌 PLAN DE LEGADO Y MITIGACIÓN DE "BUS FACTOR"

**Versión:** 1.0  
**Última actualización:** 19 Febrero 2026  
**Escuadrón:** 99 — Omega-9: El Legado  
**Soluciona:** Hallazgo LEG-01 (Dependencia Crítica de Personas Clave)

---

## 🎯 Problema
"Si Daniel (o el líder técnico) desaparece mañana, ¿el proyecto sigue vivo o muere?"
Actualmente: **Bus Factor = 1** (Alto Riesgo).

---

## 📉 Objetivo: Bus Factor > 3

### Estrategia de Mitigación
1.  **Documentación como Código (Docs-as-Code):**
    *   Todo el conocimiento operativo está en `/docs` en el repo, no en la cabeza de nadie ni en Google Docs privados.
    *   *Si el repo sobrevive, el proyecto sobrevive.*
2.  **Infraestructura como Código (IaC):**
    *   No hay configuración manual en consolas. Todo está en `wrangler.toml`, `drizzle.config.ts`, `vercel.json` y GitHub Actions.
    *   *Cualquier dev senior puede desplegar el proyecto en < 2 horas.*
3.  **Licenciamiento Open Source (AGPL-3.0? No, MIT/Apache para Core):**
    *   El código es libre para que la comunidad pueda forkearlo si la fundación desaparece.

---

## 🧟 Protocolo "Dead Man's Switch"
Si no hay actividad de commit/login de los administradores principales en 30 días:
1.  **Alerta Automática:** Email a 3 custodios de confianza (Consejo Directivo).
2.  **Acceso de Emergencia:** Se liberan las llaves de administración de la cuenta "Master" de Cloudflare/Vercel (custodiadas en Bitwarden con acceso compartido de emergencia).
3.  **Llamado a la Comunidad:** Se publica un banner "Help Wanted: Maintainers Needed" en el sitio.

---

## 🔄 Plan de Sucesión Técnica
1.  **Rol 01 (Product Lead) -> Rol 69 (Head of Ops)**
2.  **Rol 14 (Arquitecto) -> Rol 22 (Security) + Rol 21 (SRE)**

---
*Documento generado para cerrar Hallazgo LEG-01.*

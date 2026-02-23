# 🕵️ MODELO DE AMENAZA INTERNA — INSIDER THREAT

**Versión:** 1.0  
**Última actualización:** 16 Febrero 2026  
**Escuadrón:** 61 — Defcon-1: Infiltración Interna  
**Soluciona:** DC1-1, DC1-2

---

## 🎯 Problema

¿Qué daño puede hacer un desarrollador deshonesto con acceso al repo/infra?

---

## 🔴 HALLAZGO DC1-1: Sin Modelo de Amenaza Interna

**Problema:** Existe `least privilege` como mención pero no hay un threat model que enumere qué puede hacer cada rol con sus accesos actuales.

**Solución: Mapa de Blast Radius por Rol**

| Rol Técnico | Accesos | Peor escenario | Blast radius | Probabilidad |
|-------------|---------|----------------|-------------|-------------|
| **Frontend Dev** | Repo frontend, Vercel preview | Inyectar XSS en cliente, redirigir a phishing | 🟠 ALTO — afecta todos los usuarios del build | Baja |
| **Backend Dev** | Repo backend, Edge Functions, DB read | Exfiltrar datos via Edge Function, inyectar backdoor API | 🔴 CRÍTICO — acceso a datos de usuarios | Baja |
| **DevOps/SRE** | Vercel admin, Cloudflare admin, Neon admin | Borrar infra, cambiar DNS, exfiltrar DB completa | 🔴 CRÍTICO — destrucción total posible | Muy baja |
| **DB Admin** | Neon console, bypass RLS (service_role) | Leer todos los votos/apoyos individuales, borrar datos | 🔴 CRÍTICO — violación masiva de privacidad | Muy baja |
| **Scraper/Data** | service_role para scrapers, R2 write | Inyectar datos falsos de fuentes oficiales | 🟠 ALTO — envenenamiento de datos | Baja |

**Controles por rol:**

### Control C1: Code Review Obligatorio (2 personas)
```
REGLA: Todo merge a main requiere 2 approvals de personas diferentes
- Branch protection: require 2 reviews
- CODEOWNERS: archivos sensibles requieren senior review
- Auto-merge DESACTIVADO
- Squash merge OBLIGATORIO (trail limpio)
```

### Control C2: Commit Signing
```
REGLA: Todo commit debe estar firmado con GPG key verificada
- git config commit.gpgsign true
- GitHub: Require signed commits en branch protection
- Commits sin firma = rechazado automáticamente
```

### Control C3: Segregación de Secretos
```
PRODUCCIÓN:
- SUPABASE_SERVICE_KEY → Solo en Edge Functions de scraping (no en frontend)
- NEON_CONNECTION_STRING → Solo en backend deploy, no en dev
- CLOUDFLARE_API_TOKEN → Solo SRE lead (1 persona)
- VERCEL_TOKEN → Solo CI/CD (service account, no personal)

STAGING:
- Secretos DIFERENTES a producción (no compartir)
- DB staging con datos sintéticos (nunca copia de prod)
```

### Control C4: Audit Trail de Accesos
| Qué se audita | Cómo | Retención | Alerta |
|---------------|------|-----------|--------|
| Acceso a Neon console | Neon audit log | 1 año | Si fuera de horario laboral |
| Deploy a producción | Vercel deploy log | 1 año | Si no es via CI/CD |
| Cambio de DNS | Cloudflare audit log | 1 año | Inmediata (cualquier cambio) |
| Query con service_role | Trigger PG (anti-panoptico V2) | 1 año | Si toca tablas sensibles |
| Merge a main | GitHub audit log | Indefinido | Si sin 2 approvals (should never happen) |

---

## 🟠 HALLAZGO DC1-2: Sin Protocolo de Offboarding Seguro

**Problema:** Si un desarrollador deja el equipo (voluntaria o involuntariamente), no hay checklist de revocación de accesos.

**Solución: Checklist de Offboarding**

```
DENTRO DE 1 HORA de la salida:
- [ ] Revocar acceso GitHub (remove from org)
- [ ] Revocar acceso Vercel
- [ ] Revocar acceso Cloudflare
- [ ] Revocar acceso Neon.tech
- [ ] Revocar GPG key del repo (remove from allowed signers)
- [ ] Rotar TODOS los secretos que la persona conocía
- [ ] Desactivar sesiones activas auth (invalidate tokens)
- [ ] Revocar acceso Slack/Discord del equipo

DENTRO DE 24 HORAS:
- [ ] Auditar últimos 30 días de commits de la persona
- [ ] Auditar últimos 30 días de accesos a consoles
- [ ] Verificar que no hay backdoors en código mergeado recientemente
- [ ] Documentar acceso revocado en log de offboarding
```

---

*Documento generado para Escuadrón 61 Defcon-1. Resolución DC1-1 + DC1-2.*

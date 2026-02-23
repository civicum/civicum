# 🎣 DEFENSA ANTI-PHISHING INSTITUCIONAL

**Versión:** 1.0  
**Última actualización:** 16 Febrero 2026  
**Escuadrón:** 63 — Defcon-3: Phishing Institucional  
**Soluciona:** DC3-1, DC3-2

---

## 🎯 Problema

Alguien clona la web de CIVICUM para robar credenciales. ¿Cómo nos defendemos?

---

## 🔴 HALLAZGO DC3-1: Sin Defensa Anti-Phishing Técnica

**Problema:** Solo existe una mención de phishing en F-47 (dominios) pero no hay defensas implementadas.

**Solución: 5 Capas Anti-Phishing**

### Capa 1: DNS y Email Authentication
| Control | Configuración | Protege contra |
|---------|--------------|----------------|
| SPF | `v=spf1 include:_spf.vercel.com include:_spf.cloudflare.com -all` | Email spoofing |
| DKIM | Clave 2048-bit rotada cada 6 meses | Email tampering |
| DMARC | `v=DMARC1; p=reject; rua=mailto:dmarc@civicum.cl` | Phishing por email |
| CAA | `0 issue "letsencrypt.org"` — solo Let's Encrypt puede emitir cert | Cert falsos |

### Capa 2: Vigilancia de Dominio
| Acción | Herramienta | Frecuencia |
|--------|------------|-----------|
| Monitorear typosquatting | DNSTwist (OSS) | Diario (cron) |
| Dominios a vigilar | `civicun.cl`, `civicuum.cl`, `c1vicum.cl`, `civicum.com`, `civicum.net` |
| Certificados sospechosos | Certificate Transparency logs (crt.sh) | Diario |
| Google Safe Browsing | Registrar `civicum.cl` en Search Console | Continuo |

**Dominios defensivos a registrar:**
```
civicum.cl    ✅ (primario)
civicum.com   → Registrar defensivamente
civicum.org   → Registrar defensivamente
civikum.cl    → Registrar defensivamente
civicun.cl    → Registrar defensivamente
```

### Capa 3: Headers de Seguridad
```
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://r2.civicum.cl; connect-src 'self' https://api.civicum.cl; frame-ancestors 'none'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(self)
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

### Capa 4: Indicador Visual de Autenticidad
```
┌──────────────────────────────────────────────┐
│  🏛️ civicum.cl                  🔒 Oficial  │
│                                              │
│  Tip: CIVICUM nunca pide tu clave por email. │
│  Si alguien la pide, es falso.               │
└──────────────────────────────────────────────┘
```
- Favicon único e inconfundible (el logo CIVICUM)
- Service Worker valida que dominio = `civicum.cl` o `*.civicum.cl`
- Si detecta iframe embedding → romper frame + alerta

### Capa 5: Educación al Usuario
- Onboarding: "CIVICUM vive solo en civicum.cl. Si ves otra dirección, no es nosotros."
- Email footer: "Este email viene de @civicum.cl. Si la dirección es diferente, no lo abras."
- Si usuario reporta phishing: "Gracias. Ya estamos trabajando para bloquear ese sitio."

---

## 🟠 HALLAZGO DC3-2: Sin Proceso de Takedown

**Problema:** No hay protocolo para actuar cuando se detecta un sitio phishing activo.

**Solución: Protocolo de Takedown**

| Paso | Acción | Responsable | SLA |
|------|--------|-------------|-----|
| 1 | Verificar que es phishing (no legítimo) | Rol 22 (Security Architect) | <30 min |
| 2 | Reportar a Google Safe Browsing | Rol 22 | <1h |
| 3 | Reportar a Cloudflare (abuse) | Rol 22 | <1h |
| 4 | Reportar al registrar del dominio (ICANN UDRP si es .com) | Rol 50 (Abogado PI) | <4h |
| 5 | Si hosting identificable: reportar a hosting provider | Rol 22 | <4h |
| 6 | Alerta a usuarios vía banner in-app | Rol 75 (Comms) | <2h |
| 7 | Comunicación pública si es masivo | Rol 05 (Riesgos Rep.) | <4h |
| 8 | Registro NIC Chile si es .cl | Rol 50 | <24h |

---

*Documento generado para Escuadrón 63 Defcon-3. Resolución DC3-1 + DC3-2.*

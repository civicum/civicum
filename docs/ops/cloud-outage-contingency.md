# ☁️ CIELO CAÍDO: CONTINGENCIA ANTE FALLA DE PROVEEDOR CLOUD

**Versión:** 1.0  
**Última actualización:** 19 Febrero 2026  
**Escuadrón:** 143 — Zero-3: Falla de Proveedor Cloud  
**Soluciona:** Hallazgo Z3-01 (Dependencia Crítica de Vercel/Neon)

---

## 🎯 El Escenario Apocalíptico
Vercel sufre un apagón global. Neon (Postgres) pierde una región entera.
CIVICUM desaparece de internet.

---

## ☔ Paracaídas de Emergencia

### 1. La "Página Estática de Crisis" (Hosteada en GitHub Pages/Netlify)
*   URL alternativa: `status.civicum.cl` (redirigida por DNS si el principal falla).
*   Muestra: "Estamos con problemas técnicos, pero estamos vivos."
*   Permite: **Reportar Emergencias Vitales** (Formulario simple Google Forms o Typeform embebido que no depende de nuestra infra).

### 2. Base de Datos de Lectura (Read Replica en otra Nube)
*   Mantener una réplica asíncrona (Log Shipping) de la DB en AWS RDS o DigitalOcean.
*   Si Neon muere, la App puede cambiar (vía variable de entorno) a modo "Solo Lectura" apuntando a la réplica.
*   Los usuarios pueden ver información, pero no crear contenido nuevo.

### 3. CDN Fallback
*   Si Cloudflare cae... bueno, medio internet cae. Ahí rezamos.
*   Pero si Vercel cae, Cloudflare Workers puede servir una versión "Cached" del sitio (Always Online).

---

## 🧪 Test del "Cable Cortado"
1.  Cambiar DNS para apuntar a la página de crisis.
2.  Intentar acceder.
3.  **Meta:** El usuario ve el mensaje de calma y puede reportar emergencia, aunque la app compleja esté muerta.

---
*Documento generado para cerrar Hallazgo Z3-01.*

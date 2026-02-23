# 🚫 UNBLOCKABLE: RESISTENCIA A LA CENSURA DE ISP

**Versión:** 1.0  
**Última actualización:** 19 Febrero 2026  
**Escuadrón:** 135 — Distribución-5: Censura de ISP  
**Soluciona:** Hallazgo D5-01 (Bloqueo de DNS/IP en Redes Hostiles)

---

## 🎯 El Problema de Distribución
Una empresa, universidad o gobierno local decide que CIVICUM es "molesto" y bloquea el dominio `civicum.cl` en su red Wi-Fi.
O un ISP corrupto redirige el tráfico a una página de error.

---

## 🛡️ Técnicas de Evasión

### 1. DNS sobre HTTPS (DoH)
*   La app no usa el DNS del sistema operativo (que puede estar envenenado).
*   Usa un resolver propio vía HTTPS (Cloudflare/Google) directo desde el cliente JS.
*   Esto impide el bloqueo simple por DNS spoofing.

### 2. Espejos y Dominios Rotativos (Fallback)
*   Si `api.civicum.cl` no responde (timeout), la app intenta automáticamente conectarse a:
    *   `api-backup.civicum.net`
    *   `civicum-api.pages.dev` (Dominio de Cloudflare difícil de bloquear sin romper internet).

### 3. IPFS / Onion Service (Opción Nuclear)
*   En caso de bloqueo total nacional:
    *   Distribuir una versión estática ("Snapshot") de las denuncias en **IPFS**.
    *   Disponibilizar endpoint `.onion` para acceso vía Tor para administradores y periodistas.

---

## 🧪 Test del "Firewall Corporativo"
1.  Bloquear `civicum.cl` en el archivo `/etc/hosts` local (simulando bloqueo DNS).
2.  Abrir la app.
3.  **Meta:** La app detecta el fallo y enruta peticiones por el dominio secundario o DoH, funcionando normalmente.

---
*Documento generado para cerrar Hallazgo D5-01.*

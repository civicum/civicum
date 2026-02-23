# 📧 NO SPAM: PROTOCOLO DE ENTREGABILIDAD DE EMAIL

**Versión:** 1.0  
**Última actualización:** 19 Febrero 2026  
**Escuadrón:** 131 — Distribución-1: Entregabilidad de Emails  
**Soluciona:** Hallazgo D1-01 (Correos de Validación en Spam)

---

## 🎯 El Problema de Distribución
Si el correo "Confirma tu cuenta" llega a Spam, el usuario no existe.
Si enviamos 10.000 correos de golpe y Gmail nos marca como spam, perdemos el dominio.

---

## 📨 Infraestructura de Confianza (Sender Reputation)

### 1. La "Santísima Trinidad" del Email Auth
Nada sale sin estar firmado:
*   **SPF (Sender Policy Framework):** "Solo las IPs X pueden enviar correos a nombre de civicum.cl".
*   **DKIM (DomainKeys Identified Mail):** Firma criptográfica en el header de cada mail.
*   **DMARC (Domain-based Message Authentication, Reporting, and Conformance):** Política `p=reject`. Si falla SPF o DKIM, el mail se rechaza (evita spoofing).

### 2. IP Warming & Throttling
*   Nunca usar la IP transaccional para Marketing.
*   **Warm-up:** Empezar enviando 50 mails/hora, subir 10% diario.
*   **Limpieza de Lista:** Si un mail rebota (Hard Bounce), se marca `invalid` en DB y NUNCA se vuelve a intentar. Tasa de rebote > 3% mata la reputación.

### 3. Contenido "Spam-Proof"
*   Ratio Texto/Imagen equilibrado (no solo una imagen gigante).
*   Evitar palabras gatillo: "Gratis", "Urgente", "$$$", "Haz click aquí".
*   Link de "Unsubscribe" visible y funcional en 1 click (Header `List-Unsubscribe`).

---

## 🧪 Test del "Nuevo Usuario"
1.  Crear cuenta con un Gmail virgen.
2.  Enviar correo de confirmación.
3.  **Meta:** Debe llegar a "Inbox" o "Notificaciones", NUNCA a "Spam".
4.  Verificar en `mxtoolbox.com` que DMARC pasa.

---
*Documento generado para cerrar Hallazgo D1-01.*

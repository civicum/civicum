# 🪵 POLÍTICA DE LOGS (RUIDO VS SEÑAL)

**Versión:** 1.0
**Squad:** 194 Logs
**Misión:** Dejar de quemar dinero guardando "console.log('hola')".

---

## 🎯 El Problema
El sistema genera 50GB de logs diarios. El 98% es `DEBUG` irrelevante o errores conocidos que nadie arregla. Nos cuesta una fortuna en CloudWatch/Datadog.

## 🛡️ NIVELES DE LOGGING

### 1. Niveles Estrictos
*   **ERROR:** El sistema falló. El usuario no pudo completar la acción. **(Alerta a PagerDuty)**.
*   **WARN:** Algo raro pasó, pero el sistema se recuperó. (Revisión semanal).
*   **INFO:** Eventos de negocio clave (ej: "Usuario registrado", "Pago procesado"). (Retención 30 días).
*   **DEBUG:** Solo activo en Desarrollo/Staging. **PROHIBIDO EN PRODUCCIÓN** salvo activación temporal por flag.

### 2. Log Estructurado (JSON)
*   Nunca loguear texto plano: `console.log("Error usuario no encontrado")`.
*   Siempre JSON: `logger.error({ event: "USER_NOT_FOUND", userId: 123, error: e.message })`.
*   Permite indexación y búsqueda barata.

### 3. Sanitización de PII (Redact)
*   El logger debe tener un middleware que oscurezca automáticamente:
    *   RUTs.
    *   Emails.
    *   Tarjetas de Crédito.
    *   Passwords (OBVIO).

---
*Si todo es urgente, nada es urgente. Si todo se loguea, nada se lee.*

# 🔕 EL UNSUBSCRIBE (EFECTO INMEDIATO)

**Versión:** 1.0
**Squad:** 280 Placebo-5
**Problema:** Usuario hace clic en "Desuscribir". Mensaje: "Tu solicitud será procesada en 48 horas". Recibe 3 emails más. Odio eterno.

---

## 🎯 La Inercia Burocrática
No hay ninguna razón técnica para demorar un unsubscribe 48 horas en 2026. Es una táctica oscura ("Dark Pattern") para colar un último email.

## 🛡️ RESPETO INSTANTÁNEO

### 1. One-Click Unsubscribe
*   Cabecera `List-Unsubscribe` en todos los emails transaccionales y de marketing (RFC 8058).
*   Al hacer clic, la baja es síncrona en la base de datos principal.

### 2. Purga de Colas (Queue Flush)
*   Si hay emails encolados (Redis/RabbitMQ) para ese usuario, el proceso de unsubscribe busca y **elimina** esos mensajes pendientes antes de que salgan.
*   Tolerancia Cero: Si te diste de baja a las 10:00, el email de las 10:01 es un bug grave.

### 3. Página de Éxito Sin Culpa
*   Al desuscribirse, no mostramos: *"¿Seguro? Te extrañaremos 😢"*.
*   Mostramos: *"Listo. No te molestaremos más. Gracias por tu tiempo."* (Respeto).

---
*Si amas a alguien, déjalo ir (inmediatamente).*

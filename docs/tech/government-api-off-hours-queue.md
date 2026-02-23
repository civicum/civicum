# 🕒 EL VUELVA MAÑANA DIGITAL (OFF-HOURS QUEUE)

**Versión:** 1.0
**Squad:** 286 Burocracia-1
**Problema:** La API del Registro Civil (o equivalente municipal) cierra conexiones a las 18:00 y los fines de semana. El usuario usa Civicum el domingo a las 22:00.

---

## 🎯 El Estado Duerme, Internet No
No podemos mostrar un error 500 porque el funcionario apagó el servidor.

## 🛡️ PATRÓN ASÍNCRONO DE "VENTANILLA"

### 1. Store & Forward (La Cola Nocturna)
*   Si la API estatal responde `503 Service Unavailable` o timeout fuera de horario:
    *   Civicum guarda la solicitud en una cola persistente (SQS/RabbitMQ) llamada `government_pending_queue`.
    *   Al usuario le decimos: *"Recibido. Estamos esperando que abra la ventanilla digital. Te notificaremos apenas sea procesado (aprox. lunes 09:05)."*

### 2. Cron de Reintento Inteligente (Jitter)
*   No reintentar todos a las 09:00:00 (Ataque DDoS a nosotros mismos).
*   El worker empieza a procesar la cola a las 09:05 con un delay aleatorio entre requests para no saturar la (probablemente frágil) API estatal.

### 3. Webhook de Estado
*   Cuando finalmente logramos insertar el dato en el sistema estatal, un Webhook interno actualiza el estado en Civicum de `PENDIENTE_BUROCRACIA` a `RECIBIDO_ESTADO`.

---
*Si el Estado es lento, nosotros somos pacientes (y automáticos).*

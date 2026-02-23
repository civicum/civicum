# 🗑️ EL OLVIDO DIGITAL (TTL)

**Versión:** 1.0
**Squad:** 275 Cronos-5
**Misión:** Cumplir la promesa: "No guardamos tus logs por más de 30 días".

---

## 🎯 La Acumulación Eterna
Los discos duros son baratos. La tendencia natural es "guardar por si acaso". Eso viola la privacidad y crea un riesgo de leak masivo (Toxic Data).

## 🛡️ GARBAGE COLLECTION ESTRUCTURAL

### 1. TTL a Nivel de Base de Datos
*   No confiamos en scripts cron manuales ("clean_logs.sh") que alguien puede olvidar o desactivar.
*   Usamos funciones nativas de la DB:
    *   **DynamoDB/CosmosDB:** Campo `TargetExpiryTime`. La DB borra el ítem sola.
    *   **PostgreSQL:** Particionamiento por fecha. `DROP TABLE logs_2026_01`.

### 2. Logs Efímeros
*   Los logs de Nginx/Apache que contienen IPs **no se escriben en disco**.
*   Se envían a un stream (stdout) -> Colector (Datadog/ELK) con política de retención configurada a 30 días Hard Limit.

### 3. Prueba de Borrado (Audit Log)
*   El sistema genera un certificado mensual automático:
    *   *"El día 01/03/2026 se eliminaron permanentemente 4.5TB de datos correspondientes a Enero 2026."*
    *   Este reporte es público para auditoría de transparencia.

---
*El derecho al olvido se programa, no se promete.*

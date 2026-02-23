# 🏎️ GUARDIA DE RACE CONDITION (DOBLE VOTO)

**Versión:** 1.0
**Squad:** 179 Race Condition
**Riesgo:** Integridad de datos ante concurrencia extrema.

---

## 🎯 El Problema
Un usuario con mouse gamer o script hace click en "Votar" 50 veces en 100ms.
Si el backend hace: `LEER votos -> SUMAR 1 -> GUARDAR`, los 50 hilos leen el mismo valor inicial y solo se guarda 1 voto... o peor, se guardan 50 filas duplicadas.

## 🛡️ MECANISMOS DE DEFENSA

### 1. Constraint de Base de Datos (La Muralla)
*   **Unique Index:** `CREATE UNIQUE INDEX vote_idx ON votes (user_id, topic_id);`
*   Si 50 requests llegan a la DB al mismo tiempo, 49 fallarán con error `duplicate key value violates unique constraint`. **Solo 1 gana.**

### 2. Idempotency Keys (Para Pagos/Acciones Críticas)
*   El cliente genera un UUID v4 (`idempotency-key`) al iniciar la acción de votar.
*   Envía ese UUID en el header.
*   El backend revisa en Redis si esa key ya fue procesada en los últimos 5 minutos. Si sí, devuelve el resultado cacheado (200 OK) sin re-procesar.

### 3. Operaciones Atómicas (Atomic Increments)
*   Nunca hacer: `votos = votos + 1` en aplicación.
*   Siempre hacer: `UPDATE topics SET vote_count = vote_count + 1 WHERE id = ?;` (La DB serializa las escrituras).

---
*En la concurrencia, solo puede quedar uno (Highlander Principle).*

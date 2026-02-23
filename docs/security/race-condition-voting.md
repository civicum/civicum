# Protocolo de Defensa: Race Conditions y Doble Voto (Squad 179)

**Área:** Arquitectura Backend & Integridad de Voto
**Riesgo Detectado:** Un usuario malicioso o con conexión inestable presiona el botón "Votar" múltiples veces en un rango de milisegundos. El servidor, al procesar concurrencia, podría registrar más de un voto para la misma entidad (Proyecto/Iniciativa).

## 1. Patrón de Bloqueo Optimista (Optimistic Concurrency Control)

Civicum implementa un mecanismo de prevención dura a nivel de Base de Datos para garantizar el principio de **"Un Voto, Una Persona, Una Iniciativa"**:

1. **Restricción de Integridad (Unique Constraint):**
   La tabla `votes` en Neon (PostgreSQL) debe tener un índice único compuesto: `UNIQUE(user_id, initiative_id)`. Cualquier intento de insertar un segundo registro generará un error fatal en la BD, impidiendo matemáticamente el doble conteo.

2. **Idempotencia de la API:**
   El endpoint `/api/votes` implementa idempotencia mediante un `Idempotency-Key` (UUID generado en el Frontend al renderizar el botón).
   - Si un request con un `Idempotency-Key` ya procesado vuelve a entrar (por reintento de red o doble clic), el servidor ignora la mutación pero retorna `200 OK` (simulando éxito para no romper el flujo del cliente).

## 2. Defensa Frontend (Debounce & Disable)

Aunque la defensa principal reside en la Base de Datos, la experiencia del usuario debe ser cuidada:

1. **Estado "Loading" Inmediato:** Al primer clic, el botón debe transicionar instantáneamente a estado "Cargando/Deshabilitado" (UI Optismistic Update).
2. **Post-Debounce:** Aplicar una ventana de *"Debounce"* de 500ms a nivel de manejador de eventos en React/Next.js para absorber dobles clics accidentales de humanos.

## 3. Manejo de Conflictos y Transacciones

Si el servidor debe alterar múltiples tablas (ej: insertar voto, decrementar presupuesto disponible, sumar puntos de reputación), esto **debe** realizarse dentro de un bloque `BEGIN ... COMMIT` (Transacción ACID).

*Si una sub-operación falla o se detecta una *Race Condition* en otra tabla, toda la transacción hace `ROLLBACK` y el estado vuelve al punto cero.*

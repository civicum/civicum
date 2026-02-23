# Estándar de Cumplimiento Y2K38 (Squad 176)

**Auditoría:** Roles 30 (Data Architect), 16 (Backend), 14 (Arquitecto), 21 (SRE), 19 (QA Auto)

## El Riesgo de Desbordamiento
El problema del Año 2038 (Y2K38) ocurre cuando el reloj UNIX, de 32 bits, alcanza su valor máximo (`2147483647` segundos desde el 1 de enero de 1970). Si las bases de datos o los sistemas de backend utilizan un tipo `INTEGER` clásico, el reloj hará un "overflow" a un número negativo, viajando atrás en el tiempo al año 1901.

En CIVICUM, esto destruiría la integridad cívica: los votos parecerían ocurrir antes de que los proyectos existan, los bloqueos de moderación finalizarían inmediatamente, y los tokens de sesión se invalidarían por completo.

## 1. Patrón Cero-Enteros-de-Tiempo
**Prohibición Estricta:** Queda prohibido el uso del tipo nativo `INTEGER` (32 bits) para almacenar timestamps UNIX en Drizzle ORM o directamente en sentencias SQL sobre Neon DB.

### A. Para Fechas (Punto en el Tiempo)
Cualquier columna que registre el momento en que ocurrió un evento debe usar obligatoriamente `TIMESTAMPTZ` (Timestamp with Time Zone), el cual internamente PostgreSQL maneja en 64-bit y resuelve el Y2K38 garantizando soporte por 292,277 años.

```typescript
// MAL (Desbordará en 2038)
createdAt: integer('created_at').notNull() 

// CORRECTO (Drizzle -> PostgreSQL)
createdAt: timestamp('created_at', { withTimezone: true, mode: 'date' }).defaultNow().notNull()
```

### B. Para IDs (Llaves Primarias Relacionales)
Dado que CIVICUM busca escala masiva (millones de transacciones por segundo hipotéticamente), las llaves relacionales autoincrementales que usaban `INT` estándar también desbordarán.
Todo nuevo ID numérico debe ser `BIGSERIAL` o `BIGINT` (64-bit).

```typescript
// MAL (Desbordará eventualmente)
id: serial('id').primaryKey()

// CORRECTO
id: bigserial('id', { mode: 'number' }).primaryKey()
// O alternativamente, usar UUIDv4 o UUIDv7 nativos
id: uuid('id').defaultRandom().primaryKey()
```

## 2. Validación de Carga Útil (Frontend y Backend Edge)
El backend que ejecuta en las Edge Functions de Vercel debe validar que cualquier timestamp numérico entrante (como un epoch enviado en un header `X-Client-Time`) no venga forzado a negativo. La API debe fallar la petición con `400 Bad Request` si la fecha no es consistente con el presente +/- 10 minutos (Tolerancia de validación).

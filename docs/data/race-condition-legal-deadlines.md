# Race Condition y Plazos Legales (Squad 273)

**Misión:** Una ley se promulga a las 00:00. Un reporte 23:59. ¿Qué aplica?

## 1. El Riesgo de los "Snipers" Administrativos
Muchos presupuestos participativos (Fondos Municipales) tienen un límite de 100 postulaciones. Si en el milisegundo 99 ingresan 5 proyectos al mismo tiempo, y el backend de CIVICUM no aísla las transacciones a nivel físico, Next.js podría leer el "Cupo 99", aceptarlos a los 5 como válidos, e inyectar un saldo negativo irreal (Double-spend problem versión cívica). La municipalidad revocaría la plataforma por inconsistencia financiera.

## 2. Aislamiento Transaccional Burocrático

1.  **Select For Update (Pessimistic Locking):** Drizzle ORM debe forzar un bloqueo en la fila `presupuesto_row_id` de la tabla al consultar el monto disponible. Si la petición X está validando el descuento de fondos, la petición Y no lee el fondo, sino que espera 100ms en Queue.
2.  **Niveles Serializables en Días Críticos:** Para votaciones masivas que cierren a una hora tope, la transacción en Neon Postgres pasa a `ISOLATION LEVEL SERIALIZABLE`. Puede haber lentitud en los últimos 30 segundos, pero es materialmente imposible que dos votos reclamen ser "El corte de línea final".
3.  **Timestamp del Balance Load:** La hora oficial del Voto o Postulación NO la dictamina el `POST` Request del navegador (Cuyo reloj interno el usuario puede falsear 5 min atrás en Windows Settings). La dicta exclusivamente la capa Lambda inicial al llegar a la frontera de Vercel Edge ("Server Receive Time").

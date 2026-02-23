# Protocolo de Remoción de Autoridad (Squad 186)

**Auditoría:** Roles 66 (Ciencia Política), 64 (Auditoría Ciudadana), 30 (Data Architect), 75 (Comms), 53 (Probidad)

## 1. El Riesgo del Borrado Histórico
Cuando un alcalde, diputado o concejal es destituido por corrupción, mala praxis, o enfrentar cargos criminales, el instinto de la plataforma (o del equipo de la autoridad) podría ser "borrar la cuenta" (Soft/Hard Delete).
Si esto ocurre en CIVICUM, todas las respuestas públicas ("Resuelto", "Atendido"), sus métricas de presupuesto prometido, y los comentarios en "Mesas de Trabajo" quedarían huérfanos. Estaríamos encubriendo el historial político del país.

## 2. Inmutabilidad de la Cuenta Oficial (Nivel 4)
Queda estrictamente prohibido permitir que una "Cuenta de Autoridad Verificada" sea borrada por el usuario o por cascada de base de datos.
1. Las Cuentas Nivel 4 firman un contrato de Términos de Servicio Especiales: Sus datos vertidos en calidad de autoridad son **Registros Públicos Permanentes**.
2. No aplica el "Derecho al Olvido" europeo ni local para actos realizados con el investidura pública.

## 3. Estado de DB: `Impeached / Dethroned`
Cuando sucede la destitución oficial (basada en el Diario Oficial o TRICEL):
*   El campo enum `account_status` en la DB Postgres pasa de `active` a `dethroned`.
*   **Permisos de Escritura:** Se revoca instantáneamente su token JWT. El equipo de la ex-autoridad pierde el acceso.
*   **Interfaz de Usuario (UX):** El perfil de la autoridad adquiere una franja roja y un Badge persistente: *"Autoridad Destituida / Periodo Finalizado Abruptamente"*.
*   **Promesas Activas:** Todos los tickets en estado `En Progreso` que dependían de esa cuenta cambian su dueño a `Unidad Funcional [Nombre Municipio]` o entran a "Pausadas por Transición de Mando", evitando que la ciudadanía pierda el tracking del proyecto físico (ej: un semáforo a medio construir).

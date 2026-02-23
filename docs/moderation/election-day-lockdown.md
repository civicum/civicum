# Election Day Lockdown (Squad 187)

**Auditoría:** Roles 67 (Integridad Electoral), 55 (Trust & Safety), 69 (Ops), 48 (Abogado), 75 (Comms)

## 1. El Riesgo Legal Electoral
La Ley chilena 18.700 (Orgánica Constitucional sobre Votaciones) establece que la propaganda electoral debe finalizar al término del tercer día anterior a la elección (Veda / Silencio Electoral).
Si un grupo de militantes usa la plataforma CIVICUM el sábado anterior a la elección para subir masivamente reportes de "Alza la Voz" atacando al alcalde de turno o alabando obras de un candidato, CIVICUM se vuelve cómplice logístico de propaganda ilegal, arriesgando multas o la baja temporal de servidores.

## 2. Procedimiento "Lockdown 48h"
No se puede apagar la aplicación (CIVICUM debe seguir recibiendo denuncias de incidentes callejeros reales). Se implementa un estado diferencial en la lógica de negocio (Backend Edge Functions).

48 horas antes de la apertura de urnas, se activa la flag global: `ELECTION_LOCKDOWN: true`.

### Efectos Inmediatos en Producción:
1. **Pausa del Voto Ciudadano:** El módulo "Voto Ciudadano" (Encuestas) se congela en modo *Read-Only*. No se pueden subir nuevas encuestas ni emitir votos simbólicos. Pantalla muestra: *"Pausa Institucional por Veda Electoral. Retornamos el [DÍA+1]"*.
2. **Cuarentena de Mesas de Trabajo:** No se pueden crear nuevas "Mesas de Trabajo" públicas. Las discusiones existentes desactivan la creación de nuevos comentarios.
3. **Filtro de Seguridad en Alza la Voz:** Los reportes urbanos (baches, luminarias) siguen vivos. Sin embargo, el sistema de moderación IA (Civia) rechaza automáticamente cualquier título o cuerpo que mencione partidos políticos, combinaciones de "Vota por", "Candidato X", o los apellidos de los actores políticos en papeleta de esa circunscripción.

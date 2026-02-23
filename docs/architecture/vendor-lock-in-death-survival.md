# El Proveedor Quebrado (Vendor Lock-in) (Squad 314)

**Misión:** Vercel o Neon.tech entran a quiebra de un día para otro. ¿Estamos atados?

## 1. El Riesgo de los Rehenes Tecnológicos
CIVICUM utiliza Edge Functions ultra modernas y un PostgreSQL Serverless (Neon Tech / Supabase) que son rápidos y hermosos, pero introducen APIs ultra-específicas propietarias.
Si Neon.tech quiebra, o a AWS se le ocurre bloquear a ONG Chilenas por motivos políticos. Nos encontramos con que el Código NodeJS usa comandos que SOLO Vercel comprende o importaciones de Prisma que solo corren en esa nube. Mover y arreglar el código a un "Computador de Torre local en un sindicato Chileno" tomaría 6 meses de refactorización. La app está secuestrada comercialmente.

## 2. Portabilidad de Supervivencia Relacional (The Backpack Rule)
El código debe tener las maletas hechas para huir de la plataforma en 12 horas.

1.  **Abstracción ORM Agnostica:** Drizzle ORM será configurado mediante Adaptadores Agnosticos. Nada de uso intensivo de Extensiones oscuras propietarias de Neon/AWS. Si se apaga la base de datos rica, el código de "Conexión SQL" cambia 1 línea de Variables de Entorno y puede engancharse a un rudimentario `Postgres 16` local corriendo en un Raspberry Pi de alguien de San Bernardo sin romper la App.
2.  **Muerte del Edge Vendor-Specific (Node Standard):** Desalentamos usar Funcionalidades de Vercel (`@vercel/kv`, `@vercel/blob`) si no tienen un Polyfill Open Source estándar (Ej. Redis Nativo, S3 Estándar API). Si Vercel "Apaga las luces", llevamos el código Javascript estándar a Render.com, Fly.io, un Servidor DigitalOcen o un IIS de la Muni, ponemos `npm start`, y mágicamente arranca porque respeta The Web Standards.
3.  **T-12 Migration Playbook:** La Wiki interna contiene un documento "Operación Éxodo". Define con código de `pg_dump` y comandos SSH cómo los Devops toman las valijas de CIVICUM migrándolo entero en un margen de 12 horas a un Droplet de 10 dólares.

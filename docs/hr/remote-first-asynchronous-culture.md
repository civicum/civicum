# Cultura Asíncrona Remote-First (Squad 225)

**Misión:** Seguridad y cohesión en un equipo abierto, distribuido y asíncrono.

## 1. El Riesgo Operacional Desincronizado
CIVICUM es construido por activistas y desarrolladores en sus horas libres (Noches, Madrugadas) a lo largo de Chile y el extranjero. Imponer metodologías sincrónicas corporativas como la *"Daily Scrum de las 9:00 AM por Zoom"* desgastará al equipo gratuito. Por otro lado, la pura asincronía crea vulnerabilidades masivas: Un dev a las 3:00 AM metiendo un Pull Request al que un administrador dormido le da "Merge" sin revisar, rompiendo la producción para el despertar de todo el país.

## 2. Paradigma Asíncrono Defensivo (Zero-Trust Asynchronous Workflow)

1.  **Branch Protection Rule 2AM:** Se ancla a la rama `main` en GitHub la política *Require review from Code Owners*. Las aprobaciones técnicas (Merge) están bloqueadas automáticamente con status *Pending* si las pruebas E2E (Playwright) no pasaron al 100%. Nadie puede mergear código roto de madrugada, sin excepciones de administrador.
2.  **Principio de Menor Privilegio Productivo (No Production Keys):** El equipo distribuido no posee IAM access a la consola nativa de Vercel/Neon DB. Para hacer migraciones SQL a medianoche, deben usar el pipeline de CI/CD que corre una herramienta pericial (Liquibase/Prisma Migrate) validada.
3.  **RFC (Request for Comments) Asincrónico:** Antes de escribir una línea de código de un *Feature* grande, el contribuidor debe subir a Notion/Discord un DOC de 1 plana explicando qué hará. El equipo tiene 48h para opinar. Fomenta el debate lento (Deliberación) antes que la prisa programática.

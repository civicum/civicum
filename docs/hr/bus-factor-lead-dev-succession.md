# Factor de Autobús y Sucesión del Lead Dev (Squad 222)

**Misión:** ¿Qué pasa si el Lead Dev se va a Google mañana? Documentación y sucesión.

## 1. El Riesgo de la Concentración Neuronal (Bus Factor)
El "Bus Factor" mide cuántas personas pueden ser "atropelladas por un autobús" (o contratadas por otra empresa) antes de que el proyecto se vuelva inoperable. En proyectos Open-Source o Startups, este factor suele estar en 1 o 2. Si el creador de la estructura de Civia RAG abandona CIVICUM por problemas personales mañana, nadie sabrá cómo reiniciar el pipeline de embeddings y el proyecto colapsará por ineficiencia de mantenimiento en unos meses.

## 2. Conocimiento Desacoplado (La Arquitectura Plana)

Para subir el Bus Factor a 5, se instituyen tres reglas operacionales draconianas.

1.  **No Single Source of Magic:** Queda terminantemente prohibido utilizar scripts crípticos bash en la terminal personal del Lead Dev para desplegar la plataforma o mover bases de datos. Todo procedimiento que no esté alojado, versionado y explicable en un archivo `.yml` (GitHub Actions / Terraform) se considera **deuda técnica letal** y no se aprueba en los PRs.
2.  **Architecture Decision Records (ADR):** Se implanta un repositorio `docs/tech/adrs`. Todo cambio sustancial de arquitectura (ej: "Por qué pasamos de Prisma a Drizzle ORM") exige un documento Markdown narrado *antes* de picar código. El historial del pensamiento sobrevive al pensador.
3.  **Shadowing Rotativo (Programación en Parejas):** Una vez al mes (First Friday of the Month), se ejecuta una sesión de *Pair Programming* obligatorio documentado cruzando áreas. El Lead Frontend observa cómo se debuggea un fallo en la DB; el Lead Backend rediseña un componente React con UI Visual. El conocimiento debe sangrar cruzado.

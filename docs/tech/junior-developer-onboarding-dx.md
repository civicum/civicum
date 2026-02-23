# Onboarding de Nuevos Contribuidores (DX) (Squad 224)

**Misión:** ¿Puede un junior entender el código en 1 semana? (Developer Experience).

## 1. El Riesgo de la Torre de Marfil (DevEx Fallida)
Un proyecto de Código Abierto muere cuando la barrera de entrada para un desarrollador voluntario de Año 1 de Universidad es demasiado alta. Si CIVICUM requiere instalar Docker, Redis, Kafka, configurar 40 llaves de API externas y entender una arquitectura de microservicios compleja solo para compilar el `localhost:3000` y cambiar el color de un botón, el 95% de los programadores Junior abandonarán el repo en el primer `npm ERR!`.

## 2. Pautaje de Developer Experience (Zero-to-Code en 10 min)
La resiliencia del equipo se basa en la rotación infinita de tropas frescas. El setup técnico no debe superar los 10 minutos.

1.  **Modo "Dummy Mocks" por Defecto:** Al clonar el repositorio, el archivo `civicum.config.ts` operará en modo simulado para todas las APIs externas. Iniciar el servidor (`npm run dev`) omitirá Auth0 (Clerk), cargará un perfil falso de *Usuario Test* logueado, y Mockeará a la IA (Devuelve strings prefabricados en vez de gastar tokens OpenAI).
2.  **Base de Datos en Semilla (Seeding Absoluto):** Ejecutar `npm run db:seed` destruirá y levantará la DB Drizzle local en 5 segundos, insertando Comunas, Alcaldes ficticios y Proyectos falsos para que el Junior UI-Dev empiece a jugar visualmente.
3.  **Documentación Readme Visual:** Se prohíbe el README.md puramente textual. Debe contener un diagrama simplificado de Mermaid `Frontend -> Server Action -> DB` y un GIF animado mostrando cómo se ve el entorno local levantado.

# Límites de Complejidad Ciclomática (Squad 191)

**Auditoría:** Roles 14 (Arquitecto), 16 (Backend), 15 (Frontend), 21 (SRE), 02 (Arquitecto Producto)

## 1. El Riesgo de la Deuda Técnica
CIVICUM es infraestructura pública de código abierto. Si una función del backend encargada de verificar el escrutinio de votos tiene 15 condicionales `if/else` anidados (Código Espagueti), se vuelve inauditable para la comunidad.
La Complejidad Ciclomática mide el número de caminos linealmente independientes a través del código fuente. A mayor complejidad, mayor probabilidad de inyectar bugs invisibles de seguridad.

## 2. Hard Limits en el CI/CD (GitHub Actions)
La calidad del código no puede depender de la buena voluntad. Se imponen barreras de análisis estático.

1.  **Límite Ciclomático Absoluto: 10.** Ninguna función en TypeScript/Javascript puede superar una Complejidad Ciclomática de 10. Si el linter (SonarQube/Biome) detecta una puntuación de 11+, el Pull Request es **Rechazado Automáticamente**.
2.  **Límites Físicos:**
    *   Máximo 300 líneas por archivo (excepto diccionarios o configuraciones estáticas).
    *   Máximo 5 parámetros por función (Obligar el uso de interfaces/objetos de configuración).

## 3. Protocolo de Refactorización (Patrón Early Return)
El código debe leerse como prosa legal simple.
Se prohíbe el anidamiento profundo (Arrow Code). Los desarrolladores deben utilizar obligatoriamente el patrón *Early Return* (Guard Clauses) para manejar los escenarios de error primero y dejar el *Happy Path* al final de la función, reduciendo la indentación visual.

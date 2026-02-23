# Tree Shaking y Purga de Dependencias (Squad 193)

**Auditoría:** Roles 17 (Performance), 15 (Frontend), 12 (Low-end), 14 (Arquitecto), 20 (Observabilidad)

## 1. El Riesgo del Peso Muerto (Bloatware)
La accesibilidad universal de CIVICUM depende de cargar rápido en la red 3G de un teléfono pre-pago de $50 USD. Cada librería (`npm install`) agredada al sistema y no utilizada es "peso muerto" que el navegador del ciudadano debe parsear inútilmente, consumiendo batería y cuota de datos.

Este es un impuesto de clase oculto causado por la negligencia de los desarrolladores ("Bloatware").

## 2. Auditoría Constante de Empaquetamiento (Bundle Analyzer)
Para garantizar el principio "Low-End", el CI/CD de CIVICUM implementa un límite estricto al tamaño del paquete final (First Load JS).

1.  **Bloqueo de Importaciones Completas:** El *linter* prohíbe sentencias como `import _ from 'lodash';`. Se obliga el uso de importaciones granulares: `import debounce from 'lodash/debounce';`.
2.  **Tree Shaking Forzado:** Webpack/Turbopack eliminará automáticamente el código muerto. Se debe marcar `"sideEffects": false` en las librerías propias del Monorepo.

## 3. Limpieza de Dependencias Huérfanas
Mensualmente (o en cada release mayor), el SRE automatizará la ejecución de la herramienta `depcheck`. 
Si el script detecta que una librería declarada en el `package.json` no está siendo requerida por ningún archivo activo `.ts` o `.tsx`, la librería se elimina inmediatamente. Nadie puede argumentar "quizás la usemos mañana". El código especulativo se destruye.

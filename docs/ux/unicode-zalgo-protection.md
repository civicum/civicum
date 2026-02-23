# Protección contra Textos Zalgo y Unicode (Squad 177)

**Auditoría:** Roles 15 (Frontend), 32 (Calidad Datos), 27 (OWASP), 18 (QA Funcional), 16 (Backend)

## El Riesgo de Corrupción UI
Un ataque Zalgo ocurre cuando un usuario deliberadamente inyecta docenas o cientos de Marcas Combinadas Unicode (Combining Diacritical Marks) en un solo carácter base. 
Ejemplo: `C̵̡̛̰͇͎̓̓̿͌i̸̲̮͎͕͊͘v̶̯̤͍̐̓̇̕ỉ̴͇͓͍̹̉c̴͈͇̮̆̓u̸͈͕m̵̧͍͎͌͌`.
Este texto no ejecuta código XSS, pero es un ataque de Denegación de Servicio sobre la interfaz (UI DoS). Destruye el CSS, empuja los límites del grid y oculta el contenido debajo de él, arruinando la usabilidad de un acta oficial de votación.

## 1. El Muro de NFKC (Sanitización Backend)
Todo input de usuario que sea de "Texto Libre" (Comentarios, Nombres de Usuario, Títulos de Mesas) debe pasar por el motor de limpieza en el backend (Vercel Edge Functions / tRPC middleware) antes de tocar la base de datos Neon. 

1. **Normalización:** Se aplica obligatoriamente la normalización Unicode `NFKC` (Compatibility Decomposition, followed by Canonical Composition). Esto colapsa caracteres exóticos y "fuentes raras" pre-compiladas escritas por apps de terceros hacia su equivalente en texto estándar, garantizando accesibilidad y consistencia de búsqueda.
2. **Remoción Estricta de Zalgo:** Se remueven por regex masiva todos los caracteres de las zonas bloqueadas (U+0300 a U+036F en exceso).

### Pseudo-Implementación en Middleware:
```javascript
function stripZalgo(inputString) {
  // 1. Normalizar 
  let normalized = inputString.normalize('NFKC');
  // 2. Filtrar rangos de marcas combinadas (Diacritics)
  return normalized.replace(/[\u0300-\u036f\u0483-\u0489\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/g, '');
}
```

## 2. Límites Físicos (Defensa en Profundidad)
Además de la sanitización, el esquema de la base de datos no debe usar `TEXT` infinito para Nombres. 
*   **Restricción de Longitud:** Nombres limitados a `VARCHAR(60)`. Biografías a `VARCHAR(250)`. 
*   **CSS Defensivo (Frontend):** Si un texto malicioso lograra pasar, el frontend aplicará `overflow: hidden`, `text-overflow: ellipsis`, y `line-clamp` para "cortarle la cabeza y los pies" a cualquier texto que intente expandirse verticalmente.

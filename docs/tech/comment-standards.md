# 💬 ESTÁNDAR DE DOCUMENTACIÓN VIVA (COMENTARIOS)

**Versión:** 1.0
**Squad:** 192 Comentarios
**Principio:** El código dice CÓMO. Los comentarios dicen POR QUÉ.

---

## 🎯 El Problema
```javascript
// Incrementa i en 1
i++; 
```
Esto es basura. Ruido visual.

## 🛡️ REGLAS DE COMENTARIOS

### 1. El "Por Qué" Obligatorio
*   Comenta decisiones de diseño, no sintaxis.
*   ✅ `// Usamos Set en vez de Array para búsqueda O(1) porque la lista puede tener 10k items`
*   ❌ `// Define una nueva lista Set`

### 2. Comentarios de Advertencia (Disclaimer)
*   Usa etiquetas estandarizadas:
    *   `// TODO:` Tarea pendiente (debe tener link a ticket Jira/Issue).
    *   `// FIXME:` Código roto pero "funciona por ahora".
    *   `// HACK:` Solución sucia por limitación externa (ej: bug de librería).
    *   `// NOTE:` Contexto importante para el futuro.

### 3. Documentación de API (JSDoc / OpenAPI)
*   Toda función pública o endpoint debe tener documentación de:
    *   **Inputs:** Qué espera (tipos, rangos).
    *   **Outputs:** Qué devuelve.
    *   **Throws:** Qué errores puede lanzar.

---
*Un comentario desactualizado es peor que ningún comentario.*

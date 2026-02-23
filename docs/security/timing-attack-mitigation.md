# ⏱️ SIDE CHANNEL ATTACKS (TIMING)

**Versión:** 1.0
**Squad:** 269 Spycraft-4
**Problema:**
*   Login `admin` + pass `error`: Respuesta en 10ms.
*   Login `no-existe` + pass `error`: Respuesta en 2ms.
*   **Conclusión:** El usuario `admin` existe.

---

## 🎯 Información en el Tiempo
El tiempo de respuesta filtra información sobre lo que pasó adentro.

## 🛡️ COMPARACIÓN DE TIEMPO CONSTANTE

### 1. Constant-Time Algorithms
*   La comparación de hashes de contraseña **nunca** debe hacer "early return".
*   `if (a[i] != b[i]) return false;` <- **PROHIBIDO**.
*   Debe recorrer todo el string siempre, verifique o no.

### 2. Login Jitter (Ruido Aleatorio)
*   Añadimos un `sleep(random(100ms, 300ms))` intencional a todas las respuestas de autenticación fallida.
*   Esto enmascara la diferencia de microsegundos que toma consultar la DB vs no encontrar el usuario.

### 3. Padding de Tamaño
*   Todas las respuestas de error tienen el mismo tamaño en bytes (rellenamos con espacios vacíos).
*   Evita ataques de análisis de tráfico cifrado (donde se adivina el error por el tamaño del paquete).

---
*El reloj no debe decir la verdad.*

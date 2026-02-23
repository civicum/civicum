# Estrategia de Reducción de Ruido en Logs (Squad 194)

**Área:** Observabilidad Sustentable
**Riesgo Detectado:** El sistema registra demasiados eventos triviales (ej: "Usuario hizo scroll", "Ping 200 OK"), lo que genera altos costos de ingesta en Datadog/Sentry/Logflare, desbordando el modelo *Zero-Cost* y dificultando el análisis de errores reales.

## 1. Filtro Heurístico "Signal-to-Noise"

Para mantener la observabilidad dentro de márgenes financieros estrictos, se prohíbe el volcado irrestricto de información. 

### Lo que NO se debe registrar (Ruido):
- 🚫 **Logueando Basura Trivial:** Clics en menús, vistas de páginas, tiempo de sesión. Todo esto debe ser capturado por Analytics anónimos del lado del cliente, no por el backend Logger, ya que cuesta dinero almacenar esta información inútil.
- 🚫 **Consultas SELECT Sanas:** No registrar queries SQL que retornan en menos de 100ms.
- 🚫 **Errores de Cliente Conocidos (404/401):** Un usuario intentando acceder a una URL rota no requiere un ticket en Sentry a menos que ocurra >100 veces por minuto (anomalía). Se recomienda limpieza constante de errores benignos.

### Lo que SÍ se debe registrar (Señal):
- ✅ **Cualquier Mutación Fallida:** Errores `500`, transacciones bloqueadas (Race Conditions capturadas), fallos de Base de Datos.
- ✅ **Alarmas de Seguridad:** Intentos de login fallidos >5 (Auditoría), bloqueos por Rate Limit, detección de Prompt Injection en Civia.
- ✅ **Puntos de Fricción Crítica:** Fallos en validación ClaveÚnica o OCR de documentos públicos.

## 2. Ingestión Inteligente (Sampling Dinámico)

- **Tráfico Normal:** Procesar solo el 5% (`sampleRate: 0.05`) de los traces de performance en el backend.
- **Tráfico de Error:** Capturar el 100% de los traces cuando el Request termina en un error no manejado (`statusCode >= 500`).

## 3. Retención Degradada (TTL de 7 días)

Todo registro de log general debe autodestruirse a los 7 días. Solo los logs de "Auditoría Legal" (ej: eliminación manual de un usuario, cambio de políticas de privacidad) se derivan a un *Cold Storage* (S3 Glacier / R2) conservándose por 5 años por imperativo gubernamental/legal presupuestario.

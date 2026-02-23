# 🏁 RACE CONDITION LEGAL (LA FOTO-FINISH)

**Versión:** 1.0
**Squad:** 273 Cronos-3
**Problema:** Una ley que prohíbe X entra en vigencia el 01/01 a las 00:00:00. Un reporte de X entra al servidor a las 00:00:00.05. ¿Es legal o ilegal?

---

## 🎯 Precisión Legal
La latencia de red no puede determinar la culpabilidad de un ciudadano.

## 🛡️ TIMESTAMP TRUST CHAIN

### 1. Timestamp del Servidor (Autoridad)
*   La hora del cliente (celular) es irrelevante (es manipulable).
*   La única hora válida es la `Transaction Time` en la Base de Datos (PostgreSQL `NOW()`).

### 2. Margen de Gracia (Buffer Zone)
*   Para plazos fatales, aplicamos un "Buffer Técnico" de 5 minutos a favor del ciudadano.
*   Si el plazo vence a las 23:59:00, el sistema acepta inputs hasta las 23:59:59 y marca internamente *"Aceptado en Período de Gracia"*. Evita disputas por relojes desincronizados.

### 3. Sellado de Tiempo (TSA Local)
*   Hash del documento + Timestamp firmado criptográficamente por el servidor.
*   Genera una prueba matemática de existencia: *"Este dato existía ANTES de las 00:00:01"*.

---
*Ante la duda, el reloj favorece al ciudadano (In Dubio Pro Reo).*

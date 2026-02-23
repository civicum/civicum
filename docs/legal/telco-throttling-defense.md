# 🐌 THROTTLING DE TELCOS (NEUTRALIDAD DE RED)

**Versión:** 1.0
**Squad:** 255 Átomo-5
**Escenario:** La compañía móvil detecta que estamos subiendo video y nos capa la velocidad a 64kbps (Traffic Shaping).

---

## 🎯 El Embudo Artificial
Técnicamente ilegal (Ley de Neutralidad de Red), pero sucede.

## 🛡️ EVASIÓN DE SHAPING

### 1. Ofuscación de Tráfico
*   No subimos archivos como `multipart/form-data` estándar que es fácil de inspeccionar (Deep Packet Inspection).
*   Subimos video en chunks binarios sobre **WebSockets encriptados (WSS)** o streams HTTP/2 ofuscados, pareciendo tráfico genérico HTTPS.

### 2. Chunking Adaptativo
*   Si detectamos que la velocidad cae drásticamente a la mitad del upload:
    *   Reducimos el tamaño de los chunks (de 1MB a 64KB).
    *   Esto evita que un timeout en un paquete grande nos obligue a retransmitir todo.

### 3. Evidence Logger
*   La app registra la velocidad de subida real vs la prometida por el ISP.
*   Si hay discrepancia sistemática, genera un **reporte técnico automático** para que la ONG Derechos Digitales pueda denunciar a la Telco ante la SUBTEL.

---
*Internet debe ser neutral. Si no, la volvemos neutral a la fuerza.*

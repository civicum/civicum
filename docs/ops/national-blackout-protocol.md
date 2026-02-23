# 🕯️ PROTOCOLO APAGÓN NACIONAL (48 HORAS DARK)

**Versión:** 1.0
**Squad:** 226 Cisne-1
**Escenario:** Terremoto Grado 9 o Ciberataque a la red eléctrica. Chile está a oscuras. 4G intermitente.

---

## 🎯 Misión: Sobrevivir sin la Nube
Si Civicum depende de AWS para todo, en una catástrofe somos inútiles.

## 🛡️ ESTRATEGIA "MESH & DELAY"

### 1. Modo "Crisis Offline" (Automático)
*   Si la app no conecta al servidor en 3 intentos fallidos, activa la UI de **"Emergencia Local"**.
*   **Funcionalidades:** Solo permite ver mapas descargados y crear reportes críticos (Fuga de Gas, Derrumbe). Bloquea "Jardinería" o "Debates".

### 2. Sincronización Oportunista (DTN)
*   Uso de **Delay-Tolerant Networking**. Los reportes se guardan en cola local con TTL de 72 horas.
*   En el milisegundo que vuelve el 3G, la app dispara el paquete comprimido (JSON de 1kb) antes de descargar imágenes pesadas.

### 3. Peer-to-Peer (Bluetooth Bridge) - *Experimental*
*   Permite transferir reportes críticos ("Necesito Insulina") a un vecino con conexión satelital (Starlink) vía códigos QR densos o Bluetooth, actuando como repetidor humano.

---
*Cuando se apaga la luz, brillamos más.*

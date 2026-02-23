# 📡 INTEGRACIÓN LORAWAN (IOT CIUDADANO)

**Versión:** 1.0
**Squad:** 323 Mesh-3
**Escenario:** Vecinos instalan sensores de calidad del aire (PM2.5) o medidores de ruido caseros. Queremos esa data en el mapa de Civicum.

---

## 🎯 La Ciudad Sensada
No depender de los 3 sensores oficiales del gobierno que siempre están "en mantención".

## 🛡️ THE THINGS NETWORK (TTN) BRIDGE

### 1. Protocolo de Ingesta Abierta
*   Cualquier sensor compatible con LoRaWAN (largo alcance, baja potencia) puede enviar data a Civicum.
*   Requisito: Registrar el dispositivo en nuestra "Application EUI" en The Things Network (gratis y comunitario) o usar Helium Network.

### 2. Validación de Calibración
*   *Problema:* Sensores baratos (DIY) pueden medir mal.
*   *Solución:* **Consenso de Vecindad**. Si 5 sensores en un radio de 1km marcan "Aire Crítico" y uno marca "Aire Limpio", el desviado se marca como `UNCALIBRATED` y se ignora su data.

### 3. Alertas Híbridas
*   Si los sensores LoRa detectan humo (aumento súbito de PM2.5), Civicum envía notificación push a los humanos en el radio: *"Sensores reportan posible humo. ¿Ves algo?"*.
*   El humano confirma lo que la máquina sospecha.

---
*El internet de las cosas, verificado por el internet de la gente.*

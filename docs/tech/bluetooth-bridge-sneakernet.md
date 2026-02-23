# 🌉 BLUETOOTH BRIDGE (SNEAKERNET)

**Versión:** 1.0
**Squad:** 321 Mesh-1
**Escenario:** Desastre natural. Se cayeron las torres celulares (4G/5G). Un vecino en la "Zona Cero" tiene un reporte vital pero no tiene internet. Un vecino B va caminando hacia una zona con señal.

---

## 🎯 El Internet Humano
Cuando la nube falla, la red somos nosotros.

## 🛡️ PROTOCOLO "STORE-CARRY-FORWARD"

### 1. Handshake Anónimo (BLE)
*   Civicum emite un "beacon" BLE (Bluetooth Low Energy) invisible.
*   Si dos teléfonos con la app se cruzan (a < 10 mts), intercambian paquetes encriptados automáticamente.
*   *Usuario A (Sin señal)* -> Pasa paquete encriptado a -> *Usuario B (Mensajero involuntario)*.

### 2. Mula de Datos (Data Mule)
*   El Usuario B no puede leer el reporte del Usuario A (cifrado asimétrico con llave pública del servidor).
*   El Usuario B sigue caminando. Cuando su teléfono detecta conectividad (WiFi/4G), sube automáticamente los "paquetes ajenos" que recolectó en el camino.

### 3. Confirmación Diferida
*   Cuando la nube recibe el reporte, manda un "ACK" (Recibido).
*   El Usuario B descarga ese ACK y, al volver a la zona cero y cruzarse con A, se lo entrega.
*   El teléfono de A vibra: *"Tu reporte fue entregado hace 2 horas gracias a un vecino anónimo"*.

---
*No necesitas internet si tienes comunidad.*

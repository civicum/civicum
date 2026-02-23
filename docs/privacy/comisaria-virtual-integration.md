# 👮 PROTOCOLO COMISARÍA VIRTUAL (PERMISOS Y DATOS SENSIBLES)

**Versión:** 1.0
**Squad:** 202 Clave-2
**Contexto:** Integración futura para sacar salvoconductos o permisos de barrio en crisis.

---

## 🎯 Riesgo de Estado Policial
Si CIVICUM sabe a dónde vas y a qué hora (Permiso de Desplazamiento), somos una herramienta de vigilancia masiva.

## 🛡️ PRINCIPIO DE "DATA TOXICA"

### 1. Almacenamiento Efímero (TTL = 0)
*   CIVICUM actúa como un **Túnel Cifrado** hacia la API de Carabineros.
*   **LA APP NO GUARDA EL PERMISO.**
*   El PDF se descarga directamente al dispositivo del usuario. En nuestros logs solo queda: `User X solicitó Permiso Y - Éxito`. No guardamos origen, destino ni motivo.

### 2. Bloqueo de Geo-Tracking
*   Aunque el dispositivo tenga GPS activo, la solicitud a Comisaría Virtual vía CIVICUM **blanquea** la geolocalización precisa, enviando solo la comuna (nivel macro) requerida por la ley, protegiendo la dirección exacta del hogar.

### 3. Auditoría de Accesos
*   Si un funcionario policial (rol validador) escanea un QR generado en CIVICUM, el usuario recibe una notificación inmediata: *"Tu permiso fue validado por el Funcionario [ID] a las [HORA]"*.

---
*Facilitar el trámite no significa entregar la libertad.*

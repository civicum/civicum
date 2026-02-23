# ☠️ PROTOCOLO GOLPE DIGITAL (KILL SWITCH)

**Versión:** 1.0
**Squad:** 227 Cisne-2
**Escenario:** Autoridades de facto (Golpe de Estado) irrumpen en el datacenter exigiendo la lista de disidentes.

---

## 🎯 El Dilema de la Bóveda
Tener datos de activistas es peligroso si el gobierno se vuelve autoritario.

## 🛡️ MECANISMO DE AUTODESTRUCCIÓN ÉTICA

### 1. El "Botón del Pánico" Multifirma
*   Se requiere la firma criptográfica concurrente de 3 de 5 "Guardianes" (distribuidos en distintos países) para autorizar el volcado de la base de datos.
*   Si las llaves intentan ser usadas bajo coerción (Duress Code), se activa el borrado lógico.

### 2. Canario de la Mina (Warrant Canary)
*   Civicum publica diariamente un archivo firmado: *"Hasta hoy 19/02/2026, no hemos recibido órdenes secretas de entrega de datos"*.
*   Si el archivo deja de actualizarse, la comunidad sabe que hemos sido comprometidos.

### 3. Borrado de Emergencia (Scorched Earth)
*   Comando `DROP TABLE users CASCADE; SHRED /var/lib/postgresql/data`.
*   Se borran las llaves de encriptación maestra, haciendo que los backups sean ruido blanco irrecuperable.

---
*Preferimos perder la historia que traicionar el futuro.*

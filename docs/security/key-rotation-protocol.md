# 🔑 ROTACIÓN DE LLAVES MAESTRAS (EMERGENCIA)

**Versión:** 1.0
**Squad:** 241 Enigma-1
**Misión:** Cambiar la cerradura de la casa sin dejar a los habitantes afuera.

---

## 🎯 El Escenario de Pesadilla
Un ex-admin filtra la `GPG_MASTER_KEY` o AWS KMS Key. Toda la base de datos es vulnerable.

## 🛡️ PROCEDIMIENTO DE RE-ENCRIPTACIÓN

### 1. Generación de Nueva Llave (K_new)
*   Se genera una nueva llave maestra en un Hardware Security Module (HSM) o Cold Storage.
*   Nadie conoce la llave completa (Shamir's Secret Sharing: se requieren 3 partes para reconstruirla).

### 2. Double-Encryption (Fase de Transición)
*   La aplicación empieza a escribir nuevos datos encriptados con `K_new`.
*   Para leer, intenta primero con `K_new`. Si falla, usa `K_old` y re-encripta al vuelo (Lazy Migration).

### 3. Revocación y Purga
*   Una vez migrado el 100% de la data (verificado por script batch nocturno), se marca `K_old` como inválida.
*   Se revoca el acceso a `K_old` en IAM.

---
*Una llave eterna es una llave rota.*

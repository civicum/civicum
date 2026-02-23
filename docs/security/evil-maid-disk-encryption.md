# 🧹 EVIL MAID ATTACK (LIMPIEZA MALICIOSA)

**Versión:** 1.0
**Squad:** 267 Spycraft-2
**Escenario:** El Sysadmin deja su laptop en el hotel para bajar a desayunar. La "mucama" (atacante) entra y conecta un USB booteable.

---

## 🎯 Acceso Físico = Game Over
Si pueden tocar el hardware, el software no importa... a menos que el disco sea ilegible.

## 🛡️ ENDPOINT HARDENING

### 1. FDE (Full Disk Encryption) Obligatorio
*   Ningún dispositivo con acceso a Admin (Civicum Staff) puede operar sin BitLocker (Windows) o FileVault (Mac) activado.
*   Clave de recuperación gestionada por MDM centralizado, no por el usuario.

### 2. BIOS/UEFI Lock
*   Contraseña de BIOS obligatoria.
*   Boot Order bloqueado: Solo bootear desde Disco Interno. USB Boot deshabilitado.
*   Secure Boot activado para evitar drivers no firmados.

### 3. Tamper Seal (Sello de Esmalte)
*   **Low-tech:** Aplicar esmalte de uñas con glitter en los tornillos del case.
*   Saca una foto macro. Al volver, verifica si el patrón de glitter cambió. Si cambió, el laptop se destruye (o se formatea a bajo nivel).

---
*Confía en nadie. Cifra todo.*

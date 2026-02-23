# ⚛️ ATAQUE CUÁNTICO (MIGRACIÓN PQC)

**Versión:** 1.0
**Squad:** 292 Survival-2
**Amenaza:** "Harvest Now, Decrypt Later". Agencias de inteligencia están guardando nuestro tráfico hoy para desencriptarlo en 5 años con un computador cuántico que rompa RSA-2048.

---

## 🎯 El Fin de la Criptografía Clásica
RSA y Elliptic Curve (ECC) son vulnerables al Algoritmo de Shor.

## 🛡️ DEFENSA POST-CUÁNTICA

### 1. Algoritmos NIST PQC (Crystals-Kyber)
*   Comenzamos la transición híbrida.
*   En lugar de solo ECDH para intercambio de claves, usamos **X25519 + Kyber768** (híbrido).
*   Si el cuántico rompe X25519, Kyber (basado en retículos) resiste.

### 2. Adiós a RSA para Firmas
*   Migrar firmas digitales de RSA a **Dilithium** o **SPHINCS+** (algoritmos Hash-based, inmunes a ataques cuánticos).

### 3. Re-Encryption de Datos en Reposo
*   Si tenemos datos sensibles guardados con llaves simétricas viejas (AES-128), rotar a **AES-256**.
*   Grover's Algorithm reduce la seguridad de AES a la mitad, por lo que AES-256 es seguro (equivale a AES-128 post-cuántico), pero AES-128 ya no.

---
*Nos protegemos hoy del computador de mañana.*

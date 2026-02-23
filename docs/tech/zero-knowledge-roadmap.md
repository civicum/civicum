# 🕵️ ZERO-KNOWLEDGE PROOFS (ROADMAP ZKP)

**Versión:** 1.0
**Squad:** 245 Enigma-5
**Misión:** Demostrar que votaste sin demostrar qué votaste.

---

## 🎯 La Privacidad Absoluta
En un sistema tradicional, para verificar un voto, el admin necesita ver el voto. Eso rompe el secreto.

## 🛡️ EL FUTURO DE LA PRIVACIDAD (ZK-SNARKs)

### 1. Prueba de Pertenencia (Membership Proof)
*   El usuario genera una prueba criptográfica (ZKP) que dice: *"Poseo una clave privada que corresponde a un RUT válido en el padrón electoral de Maipú"*.
*   El sistema verifica la prueba (True/False) **sin conocer cuál RUT es**.

### 2. Anti-Doble Voto (Nullifiers)
*   Al votar, se genera un "Nullifier" determinista.
*   Si el mismo usuario intenta votar de nuevo, genera el mismo Nullifier (que ya existe en la lista de usados), y se rechaza.
*   Todo esto ocurre sin revelar la identidad real.

### 3. Implementación (Fase Piloto 2027)
*   Actualmente costoso computacionalmente para móviles gama baja.
*   Plan: Usar `Circom` y `SnarkJS` en una sidechain liviana para consultas vinculantes de alto riesgo (presupuestos participativos).

---
*Confía en el código, no en el contador de votos.*

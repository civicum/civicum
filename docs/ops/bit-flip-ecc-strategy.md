# ⚛️ RAYOS CÓSMICOS (BIT FLIPS)

**Versión:** 1.0
**Squad:** 251 Átomo-1
**Misión:** Que una partícula subatómica no cambie al Presidente.

---

## 🎯 El Enemigo Invisible
Un rayo cósmico impacta un transistor de RAM y cambia un 0 por un 1. En un videojuego, es un glitch. En una elección, es un fraude accidental.

## 🛡️ DEFENSA MOLECULAR

### 1. Hardware: ECC Obligatorio
*   **Servidores de Voto:** Solo pueden correr en instancias AWS/Azure con memoria **ECC (Error Correcting Code)** habilitada.
*   Si la instancia detecta un error de paridad multibit que no puede corregir, **se suicida** (Kernel Panic inmediato) antes que procesar datos corruptos.

### 2. Software: Checksums Volátiles
*   Al cargar el conteo de votos en memoria (RAM), calculamos un checksum (`CRC32` o `SHA-256`).
*   Antes de escribir el resultado en disco (Persistencia), recalculamos el checksum de la memoria.
*   Si `Hash(RAM_Start) != Hash(RAM_End)` -> **Abortar transacción**. Asumimos corrupción física.

### 3. Redundancia de Triple Modular (TMR)
*   Para sumas críticas:
    *   `Process A` calcula 2+2=4.
    *   `Process B` calcula 2+2=4.
    *   `Process C` calcula 2+2=4.
*   Si uno discrepa, gana la mayoría (Voto por mayoría lógica).

---
*La física cuántica no respeta la democracia. Nosotros sí.*

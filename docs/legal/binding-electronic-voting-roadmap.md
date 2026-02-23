# 🗳️ VOTO ELECTRÓNICO VINCULANTE (ROADMAP)

**Versión:** 1.0
**Squad:** 248 Horizonte-3
**Misión:** Pasar de la "Consulta Ciudadana" (sugerencia) a la "Decisión Vinculante" (ley).

---

## 🎯 El Salto de Fe
Técnicamente podemos contar votos. Legalmente, el Servel debe validarlos.

## 🛡️ REQUISITOS DE ESTADO

### 1. Autenticación Robusta (ClaveÚnica + Biometría)
*   No basta con el login de Facebook.
*   Integración obligatoria con **ClaveÚnica** (Identity Provider del Estado) + Verificación facial viva (Liveness Check) al momento de emitir el voto.

### 2. Secreto e Integridad (E2EE)
*   El voto se cifra en el dispositivo del usuario con la clave pública de la Junta Electoral.
*   Ni el servidor de Civicum, ni el Admin, ni el Alcalde pueden desencriptar votos individuales. Solo la Junta (con su llave privada fragmentada) puede descifrar el conteo final.

### 3. Auditoría de Papel (VVPAT Híbrido)
*   Para elecciones críticas, el sistema genera un código QR que el usuario puede imprimir y depositar en una urna física como respaldo (Paper Trail).

---
*La democracia digital no es un like. Es un contrato.*

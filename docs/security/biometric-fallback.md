# 👆 BIOMETRÍA INCLUSIVA: FALLBACKS PARA DEDOS REALES

**Versión:** 1.0  
**Última actualización:** 19 Febrero 2026  
**Escuadrón:** 105 — Joule-5: Interrupciones Biométricas  
**Soluciona:** Hallazgo J5-01 (Exclusión por Falla de Sensor)

---

## 🎯 El Problema Físico
La biometría (WebAuthn / Passkeys) es genial, PERO:
*   Los lectores de huella baratos fallan con dedos húmedos o sucios (trabajadores manuales, construcción, cocina).
*   Los ancianos pierden huella dactilar con la edad.
*   Las pantallas rotas impiden el lector en pantalla.

Si CIVICUM exige biometría "sí o sí", excluye a la clase trabajadora manual.

---

## 🔓 Estrategia de Autenticación Resiliente

### 1. WebAuthn como "Conveniencia", no "Bloqueo"
*   La biometría se ofrece como "Atajo Rápido".
*   **SIEMPRE** existe el botón "Usar PIN" o "Usar Patrón" visible inmediatamente si falla el primer intento biométrico.

### 2. Timeout de Sensor
*   No esperar 30 segundos a que el sensor responda.
*   Si en 3 segundos no hay lectura exitosa, mostrar UI de PIN automáticamente.

### 3. "Bio-Blindness" (Ceguera Biométrica)
*   Si el dispositivo reporta que tiene biometría (`PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()`) pero falla 3 veces seguidas:
    *   La app marca un flag local `biometry_unreliable = true`.
    *   En el futuro, ofrece PIN por defecto en vez de biometría para no frustrar al usuario.

---

## 🧪 Test del "Dedo Mojado"
1.  Ingeniero se moja el dedo o usa guante de látex sucio.
2.  Intenta desbloquear la app.
3.  **Éxito:** La app falla rápido y ofrece PIN/Patrón sin obligar a reintentar biometría infinitamente.

---
*Documento generado para cerrar Hallazgo J5-01.*

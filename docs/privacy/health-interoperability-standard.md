# 🏥 INTEROPERABILIDAD SALUD (DERECHOS DEL PACIENTE)

**Versión:** 1.0
**Squad:** 205 Clave-5
**Escenario:** Integración con API de Salud (Minsal) para horas médicas o retiro de fármacos.

---

## 🎯 El Dato más Sensible
Saber que alguien retira medicamentos para el VIH o Salud Mental es información ultra-sensible.

## 🛡️ ESTÁNDAR HL7 FHIR + CONSENTIMIENTO GRANULAR

### 1. Consentimiento Expreso por Evento
*   No existe "Permiso General para Datos de Salud".
*   Cada vez que Civicum necesite consultar una disponibilidad, el usuario debe aprobar:
    *   *"¿Autorizas a Civicum a consultar tu estado de receta en Cesfam Central? (Válido por 15 minutos)"*

### 2. "Ojos Cerrados" (Blind Relay)
*   Si la app muestra "Medicamentos Listos para Retiro", la data viaja encriptada End-to-End desde el Minsal a la pantalla del usuario.
*   El backend de Civicum ve: `Payload Encriptado (Size: 2kb)`. **No sabemos qué remedio es.**

### 3. Prohibición de Inferencia
*   Está prohibido usar metadatos de salud para perfilar usuarios.
*   Ej: Si un usuario va mucho al Cesfam, **NO SE LE PUEDE** mostrar publicidad de farmacias ni sugerir grupos de "Enfermos Crónicos".

---
*La salud es privada. La tecnología solo es el mensajero.*

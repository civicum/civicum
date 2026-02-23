# ⚖️ PRIVACIDAD VS. TRANSPARENCIA (EL EQUILIBRIO PÚBLICO)

**Versión:** 1.0
**Squad:** 326 Suprema-1
**Conflicto:** El público tiene derecho a saber quién financia una campaña municipal. El donante tiene derecho a que no sepan dónde vive ni cuánto gana.

---

## 🎯 El Dilema del Donante
Si la transparencia es absoluta, nadie dona por miedo. Si la privacidad es absoluta, hay lavado de activos.

## 🛡️ PROTOCOLO DE DIVULGACIÓN PROTEGIDA (TIERED DISCLOSURE)

### 1. Umbral de Privacidad Pública
*   **Micro-donaciones (< 1 UTM):** Totalmente anónimas públicamente. Solo el SII (Impuestos Internos Interno) ve el origen. En la web aparece como "Vecino Anónimo".
*   **Donaciones Medias:** Se publica Nombre e Inicial del Apellido ("Juan P.").
*   **Grandes Apotantes (> 10 UTM):** Transparencia Total Obligatoria. Nombre Completo. *No* se publica dirección ni RUT completo (solo hash o parcial).

### 2. Privacidad Diferencial en Mapas
*   Jamás mostrar "Aquí vive el donante".
*   Agregar ruido estadístico a las coordenadas de donantes en mapas de calor.
*   Desplazar aleatoriamente el punto 100-500 metros (Obfuscación Geo-espacial).

### 3. "Doxing" por Transparencia
*   Prohibición de publicar datos derivados que permitan re-identificar a donantes anónimos (ej: "El único médico del pueblo donó..."). El sistema alerta si un dataset es demasiado específico (k-anonymity < 5).

---
*La luz del sol desinfecta, pero no debe quemar.*

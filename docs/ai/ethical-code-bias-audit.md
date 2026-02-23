# ⚖️ EL CÓDIGO ÉTICO (AUDITORÍA ALGORÍTMICA)

**Versión:** 1.0
**Squad:** 298 Zen-3
**Problema:** Un `if` inocente puede discriminar a un barrio entero.

---

## 🎯 El Sesgo Inconsciente
El código no es neutral. Hereda los prejuicios de quien lo escribe.

## 🛡️ REVISIÓN DE JUSTICIA

### 1. Prohibición de "Zip Code Profiling"
*   **Regla:** Ningún algoritmo de prioridad puede usar el Código Postal o Comuna como factor negativo.
*   Un bache en La Pintana tiene la misma prioridad (o más) que uno en Vitacura.
*   `if (commune == 'VIP') priority++` -> **Despido inmediato**.

### 2. Auditoría de "Shadowbanning"
*   Revisar lógica de moderación automática.
*   ¿Estamos ocultando reportes de usuarios "molestos" (que se quejan mucho)?
*   El quejumbroso suele ser el ciudadano más comprometido. No silenciar.

### 3. Explicabilidad (XAI)
*   Si una IA rechaza un reporte ("No es un problema válido"), debe explicar por qué en lenguaje natural.
*   Jamás "Rechazado por Error 400". Siempre: "Rechazado porque la foto está borrosa".

---
*El código debe ser ciego a la clase social, pero atento a la necesidad.*

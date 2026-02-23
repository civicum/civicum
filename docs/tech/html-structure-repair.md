# 🏗️ CAMBIO DE HTML SORPRESA (SELF-HEALING)

**Versión:** 1.0
**Squad:** 237 Crawler-2
**Escenario:** El Servel cambia el `div class="results"` por `section id="lista"`. El scraper explota.

---

## 🎯 La Fragilidad del DOM
Los sitios del estado cambian sin aviso y sin API.

## 🛡️ DETECCIÓN Y REPARACIÓN

### 1. Monitores Canarios (Honeydata)
*   El scraper monitorea un dato conocido que *siempre* debería estar (ej: "Presidente de la República").
*   Si ese dato desaparece o cambia de lugar, se activa la **Alerta de Ruptura de Estructura**.

### 2. Heurística Visual (Vision AI)
*   En lugar de depender solo de selectores CSS (`div > span`), usamos IA visual para identificar elementos por su apariencia:
    *   *"Busca el botón azul que dice 'Buscar'"*.
    *   *"Extre la tabla que parece lista de precios"*.
*   Esto resiste cambios de código subyacente.

### 3. Fallback a Cache (Snapshot)
*   Si el scraper falla, Civicum muestra la **última instantánea exitosa** con una advertencia visible:
    *   *⚠️ "Datos del 18/02. Estamos re-conectando con la fuente oficial."*

---
*Si cambian la cerradura, aprendemos cerrajería.*

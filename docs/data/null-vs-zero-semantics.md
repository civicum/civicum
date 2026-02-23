# ∅ EL NULL VS. EL CERO (SEMÁNTICA DE DATOS)

**Versión:** 1.0
**Squad:** 285 Limpieza-5
**Problema:**
*   Caso A: El municipio no informó su gasto en cultura. (Dato desconocido).
*   Caso B: El municipio gastó $0 en cultura. (Dato conocido).
*   **Error:** El dashboard muestra "0" en ambos casos. El alcalde del Caso A disfruta del beneficio de la duda, o el del Caso B es acusado falsamente de ocultar info.

---

## 🎯 La Diferencia Política
En datos públicos, la ausencia de información es un pecado distinto a la falta de gestión.

## 🛡️ RIGOR SEMÁNTICO

### 1. Representación Visual Distinta
*   **0 (Cero):** Se muestra como `$0`. Significa "No se gastó nada".
*   **Null (Nulo):** Se muestra como `N/A`, `---` o *"Sin Información"*. Significa "No sabemos".

### 2. Cálculos Agregados (Ojo con el Promedio)
*   **Regla de Analista:**
    *   `AVG([100, 0, 100])` = 66.6 (El municipio tacaño baja el promedio).
    *   `AVG([100, Null, 100])` = 100 (El municipio opaco es ignorado en el promedio).
*   Documentar explícitamente qué criterio se usa en cada KPI.

### 3. Exigencia de "No-Null"
*   En formularios de transparencia, el campo no puede quedar vacío.
*   El usuario debe elegir explícitamente: "El valor es 0" o "No tengo el dato". No hay ambigüedad permitida en la ingesta.

---
*El cero es un número. El Null es un estado de ignorancia.*

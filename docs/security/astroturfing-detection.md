# 🎭 DETECCIÓN DE ASTROTURFING (TESTAFERROS DIGITALES)

**Versión:** 1.0
**Squad:** 172 Testaferro
**Definición:** Simulación de apoyo popular masivo para una causa política o comercial.

---

## 🎯 La Amenaza
Un político paga a una agencia para que 500 "vecinos" comenten "¡Qué gran gestión!" en sus obras. Esto distorsiona la percepción de la realidad.

## 🛡️ HEURÍSTICA DE DETECCIÓN: "EL CORO SINTÉTICO"

### 1. Análisis Semántico de Texto (NLP)
*   Si 50 comentarios dicen variaciones de la misma frase clave (ej: *"Excelente gestión alcalde"*, *"Gestión excelente alcalde"*), se marca como **Scripted**.
*   **Acción:** Agrupar comentarios ("50 usuarios dijeron algo similar") y reducir su visibilidad.

### 2. Coincidencia Temporal (Time-Clustering)
*   Si una obra antigua recibe 100 apoyos en 5 minutos a las 3 AM.
*   **Acción:** Congelar contador de apoyos hasta revisión humana.

### 3. Gráfico de Relaciones (Network Analysis)
*   Si un grupo de usuarios SÓLO interactúa con contenidos del Político X y nunca reporta baches ni interactúa con otros vecinos.
*   **Flag:** `political_botnet`.

## 🚫 SANCIONES
1.  **Shadowban:** Los comentarios del botnet son visibles solo para ellos mismos.
2.  **Etiqueta de Transparencia:** Al político se le marca con: *"Detectamos actividad inauténtica en esta publicación"*. (El daño reputacional es el mayor disuasivo).

---
*La voz del pueblo no se compra al por mayor.*

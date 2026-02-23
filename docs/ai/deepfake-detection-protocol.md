# 🤖 PROTOCOLO DE DETECCIÓN DE EVIDENCIA SINTÉTICA (DEEPFAKE)

**Versión:** 1.0
**Squad:** 167 Deepfake
**Herramientas:** C2PA, Hive AI, Liveness Check

---

## 🎯 Amenaza
Actores maliciosos suben videos generados por IA (Sora, Kling) mostrando a autoridades cometiendo delitos falsos o desastres naturales inexistentes para causar pánico.

## 🛡️ CAPAS DE DEFENSA

### 1. Metadatos de Origen (C2PA / Content Credentials)
*   Verificar si la imagen viene firmada con estándares **C2PA** (Content Provenance and Authenticity).
*   Si la firma indica "Created by AI" o herramienta de edición generativa: **Flag Automático**.

### 2. Análisis Forense Automatizado (API Externa)
*   Para reportes de "Alto Impacto" (catástrofes, denuncias graves), procesar imágenes con API de detección (ej: Hive AI/Sensity).
*   **Umbral:** Si `ai_probability > 0.8` → Cuarentena inmediata + Revisión humana.

### 3. Heurística Comunitaria (Crowdsourced)
*   Botón de reporte específico: *"Parece generado por IA"*.
*   Si 3 usuarios Nivel 3+ reportan lo mismo, el contenido se oculta preventivamente (blur) con advertencia: *"Posible contenido sintético en revisión"*.

## 🚨 PROTOCOLO DE RESPUESTA

1.  **Detección:** El sistema, usuario o admin marca el contenido como `suspected_synthetic`.
2.  **Contención:** El contenido deja de ser visible en el "Feed Principal".
3.  **Verificación:** El Rol 45 (Fact-checker) analiza:
    *   Artefactos visuales (manos, textos ilegibles).
    *   Consistencia de sombras/luces.
    *   Corroboración con otras fuentes (cámaras de seguridad, otros testigos).
4.  **Resolución:**
    *   **Confirmado Deepfake:** Ban permanente de la cuenta (Ataque a la Fe Pública).
    *   **Falso Positivo:** Restauración y whitelisting del hash.

---
*La realidad es el único activo que no podemos permitir que se devalúe.*

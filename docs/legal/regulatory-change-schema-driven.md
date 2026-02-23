# 📜 EL OFICIO CIRCULAR (GESTIÓN DE CAMBIO LEGAL)

**Versión:** 1.0
**Squad:** 288 Burocracia-3
**Problema:** El Ministerio saca el "Oficio 450B" que dice que ahora el campo "Apellido Materno" es opcional. Nuestros formularios lo tienen como "Required". De un día para otro, somos ilegales.

---

## 🎯 La Ley es Código (Mutable)
El código hardcodeado es enemigo de la burocracia cambiante.

## 🛡️ ARQUITECTURA "SCHEMA DRIVEN"

### 1. Formularios Definidos por JSON (No HTML)
*   No escribimos `<input>` en el frontend.
*   El frontend descarga el `schema_solicitud_v45.json` desde el backend.
*   Si cambia la ley, editamos el JSON en el Admin Panel, y la app móvil se actualiza sin necesitar un nuevo deploy en App Store.

### 2. Versionado de Lógica Legal
*   Cada solicitud guardada tiene un campo `meta_legal_version: "v45"`.
*   Si la ley cambia a v46, las solicitudes v45 antiguas siguen siendo válidas bajo la regla del "Tempus Regit Actum" (El tiempo rige el acto). No intentamos migrar datos viejos a reglas nuevas.

### 3. Alerta de "Breaking Change" Normativo
*   Monitoreo de keywords en el Diario Oficial. Si aparece "Modifícase formulario", se genera ticket JIRA automático para el equipo legal.

---
*El frontend debe ser tan flexible como la interpretación de un abogado.*

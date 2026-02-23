# 📖 UI/UX PARA ALFABETIZACIÓN CÍVICA NIVEL CERO

**Versión:** 1.0  
**Última actualización:** 19 Febrero 2026  
**Escuadrón:** 107 — Margen-2: Alfabetización Cívica Nula  
**Soluciona:** Hallazgo M2-01 (Incomprensión de Roles y Alcance)

---

## 🎯 El Problema Social
El usuario promedio no sabe qué hace un CORE, un Concejal o un Diputado. No sabe si arreglar la vereda es responsabilidad del Alcalde o del Presidente.
Si la UI asume conocimiento cívico ("Elige la comisión pertinente"), el usuario abandona frustrado.

---

## 🧠 Estrategia: "Traducir Ciudadano a Burocracia"

### 1. Lenguaje Natural > Terminología Legal
*   ❌ "Ingresa tu Iniciativa Popular de Norma."
*   ✅ "Propón una idea para tu comuna o país."

### 2. "Router Cívico" Invisible
*   El usuario no elige a quién le habla.
*   El usuario dice: *"Hay un hoyo en la calle Av. Matta."*
*   **CIVICUM (Backend):** Detecta "Hoyo" + "Av. Matta" -> Asigna a **Dirección de Obras Municipales (Santiago)**.
*   El usuario dice: *"Quiero pena de muerte."*
*   **CIVICUM (Backend):** Detecta "Legislativo" + "Constitucional" -> Asigna a **Debate Nacional (Congreso)**.

### 3. Tooltips Educativos "Just-in-Time"
*   Al mencionar un cargo, subrayado discreto:
    *   "El <u>Concejal</u> tiene que fiscalizar esto."
    *   *Tooltip/Modal:* "Los Concejales son los 'ojos' de los vecinos. Su pega es vigilar que el Alcalde gaste bien la plata."

---

## 🧪 Test de la "Abuela"
1.  Pedir a un usuario sin educación cívica formal que reporte un problema de luminaria.
2.  **Éxito:** Logra reportarlo sin preguntarse "¿A qué departamento le corresponde?".

---
*Documento generado para cerrar Hallazgo M2-01.*

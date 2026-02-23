# 🌎 INTERNACIONALIZACIÓN (CIVICUM LATAM)

**Versión:** 1.0
**Squad:** 250 Horizonte-5
**Misión:** Que el código funcione en Lima, Bogotá y Buenos Aires.

---

## 🎯 El Problema del "Hardcoding" Cultural
Nuestro código está lleno de "RUT", "Región", "Comuna" y "Alcalde". Eso no sirve en Perú (DNI, Distrito, Alcalde) o Argentina (DNI, Partido, Intendente).

## 🛡️ ABSTRACCIÓN DE DOMINIO

### 1. Diccionario de Entidades (i18n++)
*   No solo traducimos textos (`Hello` -> `Hola`). Traducimos **conceptos estructurales**.
*   Configurable por instancia:
    *   `ID_DOCUMENT_NAME`: "RUT" (CL) | "DNI" (PE/AR).
    *   `LOCAL_LEADER_TITLE`: "Alcalde" (CL) | "Intendente" (AR).
    *   `ADMIN_DIVISION_2`: "Comuna" | "Distrito" | "Partido".

### 2. Motores de Validación Pluggables
*   El validador de RUT (Módulo 11) se extrae a un plugin `cl-validations`.
*   Se crea `pe-validations` para DNI peruano.
*   La app carga el set de validaciones según la configuración de país.

### 3. Independencia Legal
*   Los términos de privacidad y leyes referenciadas (Ley 20.730) se mueven a archivos de configuración externos, no hardcodeados en el frontend.

---
*El código es universal. La burocracia es local.*

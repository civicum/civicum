# 👻 CARACTERES INVISIBLES (SANITIZACIÓN)

**Versión:** 1.0
**Squad:** 283 Limpieza-3
**Problema:** Un funcionario copia un texto desde un PDF antiguo y lo pega en el admin. El texto trae un `Zero Width Space` (U+200B) o un `Non-Breaking Space` (U+00A0). El JSON revienta, la búsqueda falla y el CSV sale corrupto.

---

## 🎯 Basura Invisible
Lo que no ves sí te puede hacer daño (a tu parser).

## 🛡️ FILTRADO DE INPUTS

### 1. Trim Agresivo
*   No solo quitar espacios en los bordes (`.trim()`).
*   Reemplazar todos los espacios extraños por el espacio ASCII estándar (U+0020).

### 2. Blacklist de Control Characters
*   Eliminar automáticamente rangos Unicode de control no imprimibles (C0 y C1 controls), excepto saltos de línea permitidos.
*   `Soft Hyphens` (guiones separadores de sílabas) deben morir.

### 3. Normalización Unicode (NFC)
*   Convertir todo input a **Normalization Form C (NFC)**.
*   Evita que la `ñ` se guarde como `n` + `~` (dos caracteres) en lugar de `ñ` (uno solo), lo que rompe las búsquedas de texto y ordenamientos.

---
*Limpiamos el texto para que la máquina entienda lo que el humano leyó.*

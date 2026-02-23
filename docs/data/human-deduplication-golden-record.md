# 👥 DESDUPLICACIÓN DE HUMANOS (GOLDEN RECORD)

**Versión:** 1.0
**Squad:** 282 Limpieza-2
**Escenario:**
*   Perfil 1: Juan Pérez, rut 12.345.678-9, email `juan@gmail.com`
*   Perfil 2: Juan A. Pérez, rut 12.345.678-9, email `jperez@empresa.cl`
*   **Riesgo:** Los beneficios sociales se le otorgan dos veces, o se le niegan porque "ya los cobró".

---

## 🎯 Un Humano, Un Registro
La unicidad del ciudadano es la base de la justicia algorítmica.

## 🛡️ RESOLUCIÓN DE ENTIDADES (ER)

### 1. El Identificador Único Nacional (RUT)
*   En Chile, el RUT es la llave maestra.
*   **Regla:** Si dos registros tienen el mismo RUT validado, SON la misma persona, ignorando diferencias de nombre o email.
*   El sistema fusiona automáticamente (Merge) priorizando la data más reciente o la validada con ClaveÚnica.

### 2. Fuzzy Matching para No-RUT
*   Para usuarios extranjeros o sin RUT validado:
    *   Algoritmo Jaro-Winkler sobre Nombre + Apellido.
    *   Match exacto de Email o Celular.
    *   Si `Score > 0.95`, se sugiere fusión: *"¿Eres tú?"*.

### 3. ID de Ciudadano (UUID)
*   Internamente, el sistema no usa el RUT como Foreign Key (es dato sensible y mutable tecnicamente).
*   Usamos un `citizen_uuid` interno. Todos los perfiles duplicados apuntan al mismo `citizen_uuid` (Golden Record).

---
*Clonar personas es ilegal, incluso en bases de datos.*

# 📚 VERDAD LEGAL: AUDITORÍA DE VIGENCIA EN RAG

**Versión:** 1.0  
**Última actualización:** 19 Febrero 2026  
**Escuadrón:** 124 — Data-Sci-4: Auditoría de RAG  
**Soluciona:** Hallazgo DS4-01 (Alucinación de Leyes Derogadas)

---

## 🎯 El Problema de Datos
El usuario pregunta: "¿Puedo ser vocal de mesa si tengo 70 años?".
Civia responde usando la Ley 18.700 de 2015.
Problema: Hubo una modificación en 2025. La IA indujo a error legal al ciudadano.

---

## 🕰️ Time-Aware Retrieval

### 1. Metadata Temporal Estricta
*   Todo documento en el Vector Store tiene `valid_from` y `valid_until`.
*   Al hacer query, el filtro por defecto es `valid_until IS NULL OR valid_until > TODAY`.

### 2. Jerarquía de Normas (Kelsen Invertida)
*   Si hay conflicto entre dos chunks recuperados:
    *   Prioridad 1: Constitución.
    *   Prioridad 2: Ley más reciente.
    *   Prioridad 3: Reglamento.
*   El LLM recibe en el prompt la instrucción explícita: *"Si hay contradicción, la fecha más reciente gana"*.

### 3. Citación Obligatoria con Link
*   Civia no puede decir "La ley dice...".
*   Debe decir: "Según el [Artículo 45 de la Ley 21.000 (Link BCN)], vigente al 2026...".
*   Si el link da 404 (ver Squad 117), usa el archivo, pero advierte.

---

## 🧪 Test de la "Ley Derogada"
1.  Ingresar al Knowledge Base una ley antigua y su modificación nueva.
2.  Preguntar sobre el artículo modificado.
3.  **Éxito:** Civia cita la nueva ley y menciona explícitamente "Esta norma modificó a la anterior en fecha X".

---
*Documento generado para cerrar Hallazgo DS4-01.*

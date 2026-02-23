# 📜 ORDENANZA MUNICIPAL (RAG STRATEGY)

**Versión:** 1.0
**Squad:** 220 Ley-5
**Misión:** "Desconozco la ordenanza" ya no es excusa.

---

## 🎯 El Caos Normativo Local
346 comunas. 346 ordenanzas de "Ruidos Molestos" distintas. Lo que es multa en Providencia, es legal en Recoleta.

## 🛡️ ARQUITECTURA "LEGAL RAG" (Retrieval-Augmented Generation)

### 1. Ingesta Masiva y Vectorización
*   Crawler que descarga todos los PDFs de ordenanzas desde "Transparencia Activa" de cada municipio.
*   Segmentación por temas ("Aseo", "Ruidos", "Mascotas", "Construcción").
*   Indexación en base de datos vectorial (Pinecone/Milvus) con metadata `comuna_id`.

### 2. El "Abogado de Bolsillo" (Bot)
*   Usuario pregunta: *"¿Puedo podar el árbol de mi vereda?"*
*   Sistema detecta ubicación (e.g., Ñuñoa).
*   **Prompt RAG:** `Contexto: Ordenanza Aseo y Ornato Ñuñoa 2024, Art 45 y 46.`
*   **Respuesta:** *"En Ñuñoa NO puedes. El Art. 45 dice que solo el municipio puede podar. Si lo haces tú, la multa es de 3 UTM."*

### 3. Alerta de Obsolescencia
*   Si la ordenanza tiene más de 5 años y cita leyes derogadas, el sistema etiqueta la respuesta con: *⚠️ "Advertencia: Esta norma local parece desactualizada. Consulta en el juzgado."*

---
*La ley local al alcance de un clic.*

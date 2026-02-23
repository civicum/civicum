# 🔗 CADENA DE CUSTODIA DIGITAL (HASH & INTEGRIDAD)

**Versión:** 1.0
**Squad:** 170 Hash
**Alcance:** Legal / Forense

---

## 🎯 Objetivo
Garantizar la "Integridad Probatoria". Demostrar matemáticamente en un tribunal que la evidencia digital (foto, video, log) presentada HOY es bit a bit idéntica a la capturada el DÍA 1.

## ⛓️ EL ESLABÓN CRIPTOGRÁFICO

### 1. Hash de Ingreso (The Fingerprint)
*   Al recibir cualquier archivo, calcular inmediatamente su hash **SHA-256**.
*   Almacenar este hash en una tabla inmutable `evidence_chain` junto con el `timestamp` y `user_id`.

```sql
INSERT INTO evidence_chain (resource_id, file_hash, algorithm, status)
VALUES ('rep-1234', 'a591a6d40bf420404a01...', 'sha256', 'sealed');
```

### 2. Almacenamiento WORM (Write Once, Read Many)
*   Los archivos originales se guardan en un bucket (S3/R2) con políticas de retención activas.
*   **Políticas:** `Object Lock: Governance Mode`. Nadie, ni siquiera el admin, puede sobrescribir o borrar el archivo por 5 años.

### 3. Auditoría de Acceso (Quién tocó la evidencia)
*   Cada vez que alguien (admin, fiscal, sistema) descarga el original, se registra en `access_log`:
    *   Quién (Admin ID)
    *   Cuándo (ISO 8601)
    *   Para qué (Motivo declarado: "Revisión Judicial", "Auditoría Interna")

## 🧪 PRUEBA DE INTEGRIDAD (VERIFICACIÓN)
Para validar un archivo en el futuro:
1.  Tomar el archivo actual del bucket.
2.  Recalcular su SHA-256.
3.  Comparar con el hash guardado en `evidence_chain` el Día 1.
4.  **Si coinciden:** La evidencia es válida.
5.  **Si difieren:** La cadena de custodia SE ROMPIÓ. La prueba es inadmisible y se dispara alerta de seguridad crítica.

---
*La verdad matemática no miente, ni prescribe.*

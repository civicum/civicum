# 🔗 AUDITORÍA DE ÍNDICES FK

**Versión:** 1.0  
**Última actualización:** 6 Febrero 2026  
**Soluciona:** Observación D2-1

---

## 🔍 Script de Auditoría

```sql
-- Encontrar FK sin índice
SELECT 
  c.conname AS constraint_name,
  c.conrelid::regclass AS table_name,
  a.attname AS column_name
FROM pg_constraint c
JOIN pg_attribute a ON a.attnum = ANY(c.conkey) AND a.attrelid = c.conrelid
WHERE c.contype = 'f'
AND NOT EXISTS (
  SELECT 1 FROM pg_index i
  WHERE i.indrelid = c.conrelid
  AND a.attnum = ANY(i.indkey)
);
```

---

## 📋 FK Identificadas (Pendientes de Validar)

| Tabla | Columna FK | Tiene Índice | Acción |
|-------|------------|--------------|--------|
| reportes | usuario_id | ✅ | — |
| reportes | comuna_id | ✅ | — |
| promesas | autoridad_id | ✅ | — |
| promesas | categoria_id | ⚠️ TBD | Crear si falta |
| validaciones | usuario_id | ⚠️ TBD | Crear si falta |
| validaciones | promesa_id | ⚠️ TBD | Crear si falta |

---

## 🔧 Template para Crear Índice

```sql
-- Índice para FK
CREATE INDEX CONCURRENTLY idx_[tabla]_[columna]
ON [tabla]([columna]);
```

---

*Documento generado para cerrar Observación D2-1*

# 📊 BENCHMARK DE QUERIES ESPACIALES

**Versión:** 1.0  
**Última actualización:** 6 Febrero 2026  
**Soluciona:** Observación Sigma-1

---

## 🎯 Queries Críticos a Monitorear

### Query 1: Reportes Cercanos
```sql
-- Buscar reportes en radio de 5km
EXPLAIN ANALYZE
SELECT id, titulo, ST_Distance(ubicacion, $1) as distancia
FROM reportes
WHERE ST_DWithin(ubicacion, $1, 5000)
ORDER BY distancia
LIMIT 50;
```

**Tiempos Aceptables:**
| Escenario | Target | Alerta |
|-----------|--------|--------|
| <1,000 reportes | <50ms | >100ms |
| 1,000-10,000 | <100ms | >200ms |
| >10,000 | <200ms | >500ms |

---

### Query 2: Promesas por Comuna
```sql
-- Promesas de alcalde por polígono comuna
EXPLAIN ANALYZE
SELECT p.* 
FROM promesas p
JOIN comunas c ON ST_Within(p.ubicacion, c.geom)
WHERE c.codigo = $1;
```

**Tiempos Aceptables:**
| Escenario | Target | Alerta |
|-----------|--------|--------|
| Comuna pequeña | <30ms | >80ms |
| Stgo/Valpo | <100ms | >250ms |

---

### Query 3: Heatmap Nacional
```sql
-- Agregación para heatmap
EXPLAIN ANALYZE
SELECT 
  ST_SnapToGrid(ubicacion, 0.01) as grid,
  COUNT(*) as cantidad
FROM reportes
GROUP BY grid;
```

**Tiempos Aceptables:**
| Registros | Target | Alerta |
|-----------|--------|--------|
| <100,000 | <500ms | >1s |
| 100,000-1M | <2s | >5s |

---

## 📋 Índices Requeridos

```sql
-- Índice espacial para reportes
CREATE INDEX idx_reportes_ubicacion 
ON reportes USING GIST(ubicacion);

-- Índice espacial para comunas
CREATE INDEX idx_comunas_geom 
ON comunas USING GIST(geom);

-- Índice compuesto para búsquedas filtradas
CREATE INDEX idx_reportes_estado_ubicacion 
ON reportes USING GIST(ubicacion) 
WHERE estado = 'activo';
```

---

## 🔄 Monitoreo

### Alertas Configuradas

| Query | Threshold | Acción |
|-------|-----------|--------|
| Reportes cercanos >200ms | P90 | Slack |
| Promesas comuna >250ms | P90 | Slack |
| Heatmap >5s | P95 | PagerDuty |

### Dashboard

- Grafana panel: `PostGIS Query Performance`
- Refresh: 1 min
- Retención: 30 días

---

*Documento generado para cerrar Observación Sigma-1*

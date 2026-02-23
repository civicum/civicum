# 🗺️ GRACEFUL DEGRADATION GEOGRÁFICA

**Versión:** 1.0  
**Última actualización:** 6 Febrero 2026  
**Soluciona:** Observación Sigma-2

---

## 🎯 Escenarios de Falla

| Falla | Impacto | Frecuencia |
|-------|---------|------------|
| PostGIS no responde | Mapas no cargan | Rara |
| Tiles no disponibles | Mapa en blanco | Ocasional |
| Geolocalización falla | Sin "cerca de mí" | Común |
| Polígono corrupto | Área incorrecta | Muy rara |

---

## 🔄 Estrategia de Fallback

### Nivel 1: PostGIS Lento (>2s)

```
┌─────────────────────────────────────────────────────────────┐
│  ⏳ Cargando mapa...                                        │
│                                                             │
│  Mientras tanto, puedes:                                   │
│  • Ver lista de reportes                                   │
│  • Filtrar por comuna manualmente                          │
│                                                             │
│  [Ver como lista]                                          │
└─────────────────────────────────────────────────────────────┘
```

### Nivel 2: PostGIS No Responde

```
┌─────────────────────────────────────────────────────────────┐
│  ⚠️ Mapa no disponible                                      │
│                                                             │
│  Los datos geográficos no están disponibles ahora.         │
│  Puedes seguir usando CIVICUM sin mapa.                    │
│                                                             │
│  📋 Mostrando lista de reportes                            │
│  ────────────────────────────────────────                  │
│  • Bache en Av. Providencia                                │
│  • Luminaria rota en Las Condes                            │
│  • Basura acumulada en Ñuñoa                               │
│                                                             │
│  [Reintentar mapa]                                         │
└─────────────────────────────────────────────────────────────┘
```

### Nivel 3: Geolocalización Fallida

```
┌─────────────────────────────────────────────────────────────┐
│  📍 No pudimos obtener tu ubicación                        │
│                                                             │
│  Selecciona tu comuna:                                     │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  🔍 Buscar comuna...                                │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  Comunas populares:                                        │
│  [Santiago] [Providencia] [Las Condes] [Ñuñoa]            │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔧 Implementación

```typescript
async function loadMapWithFallback() {
  const TIMEOUT = 5000;
  
  try {
    // Intentar cargar mapa con timeout
    const mapData = await Promise.race([
      fetchGeoData(),
      timeout(TIMEOUT)
    ]);
    
    renderMap(mapData);
    
  } catch (error) {
    if (error.name === 'TimeoutError') {
      // Fallback: mostrar lista
      showListFallback();
      showRetryButton();
      logMetric('geo_timeout');
    } else {
      // Error de PostGIS
      showGeoUnavailableMessage();
      showListFallback();
      alertOpsTeam(error);
    }
  }
}
```

---

## 📊 Métricas

| Métrica | Target | Alerta |
|---------|--------|--------|
| Fallback a lista | <1% | >5% |
| Retry exitoso | >80% | <50% |
| Geo timeout | <0.5% | >2% |

---

*Documento generado para cerrar Observación Sigma-2*

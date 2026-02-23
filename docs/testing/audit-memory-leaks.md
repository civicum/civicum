# 🧠 PROTOCOLO DE DETECCIÓN DE MEMORY LEAKS

**Versión:** 1.0  
**Última actualización:** 16 Febrero 2026  
**Escuadrón:** 56 — Lambda-Zero: Fuga de Memoria  
**Soluciona:** LZ-1, LZ-2

---

## 🎯 Problema

Usar la app 2h seguidas en gama baja (2GB RAM). ¿Crashea? ¿Se degrada?

---

## 🔴 HALLAZGO LZ-1: Sin Performance Budget de Memoria

**Problema:** `devices.md` define "heap < 150MB" para gama baja pero no hay monitoreo ni protocolo de detección de leaks durante sesiones extendidas.

**Solución: Performance Budget de Memoria**

| Tier | Heap máx. inicial | Heap máx. 30min | Heap máx. 2h | Acción si excede |
|------|-------------------|-----------------|--------------|------------------|
| LOW (2GB) | 80MB | 100MB | 120MB | GC forzado + LRU caché |
| MID (4GB) | 120MB | 150MB | 180MB | Warning log |
| HIGH (6GB+) | 200MB | 250MB | 300MB | Solo log |

**Implementación: Monitor de Heap**
```typescript
// memoryMonitor.ts — se ejecuta cada 60s
const HEAP_LIMITS = {
  LOW:  { initial: 80, extended: 120, action: 'gc_lru' },
  MID:  { initial: 120, extended: 180, action: 'warn' },
  HIGH: { initial: 200, extended: 300, action: 'log' },
};

function checkHeap(tier: 'LOW' | 'MID' | 'HIGH') {
  const used = performance.memory?.usedJSHeapSize / 1024 / 1024;
  const limit = HEAP_LIMITS[tier].extended;
  
  if (used > limit) {
    // Limpiar caché LRU (IndexedDB queries cacheadas)
    cacheManager.evictLRU(0.3); // Liberar 30% del caché
    // Limpiar listeners de eventos huérfanos
    cleanupOrphanedListeners();
    // Forzar re-render de componentes pesados
    virtualizedListManager.reset();
    // Log para observabilidad
    logger.warn('HEAP_EXCEEDED', { used, limit, tier });
  }
}
```

**Fuentes comunes de leaks (prevención):**
| Fuente | Prevención |
|--------|-----------|
| Event listeners no limpiados | `useEffect` siempre con cleanup |
| TanStack Query caché infinita | `gcTime: 5 * 60 * 1000` (5 min) |
| Zustand subscriptions | `destroy()` en unmount |
| Mapas Leaflet/MapGL | `map.remove()` en cleanup |
| WebLLM model en memoria | Unload si background >5min |
| Imágenes sin lazy load | `loading="lazy"` + intersection observer |
| Service Worker caché cruda | Workbox con `expiration.maxEntries: 50` |

---

## 🟠 HALLAZGO LZ-2: Sin Test de Sesión Extendida

**Problema:** qa-master-plan.md define performance testing con Lighthouse CI pero no incluye testing de sesión extendida (2h+ continuos).

**Solución: Test "Maratón" (2h en Gama Baja)**

**Setup:**
```
Dispositivo: Samsung Galaxy A01 (2GB RAM) o emulación Chrome DevTools
Perfil CPU: 4x slowdown
Perfil RAM: 2GB máximo
Red: 3G (1.5Mbps / 750Kbps / 400ms latency)
```

**Escenario de 2 horas:**
| Minuto | Acción | Métrica a capturar |
|--------|--------|-------------------|
| 0-10 | Login + navegar home | Heap baseline |
| 10-30 | Navegar 5 comunas diferentes | Heap delta |
| 30-50 | Crear 3 reportes con foto | Heap + LCP |
| 50-70 | Scroll feed (50+ items virtualizados) | FPS + heap |
| 70-90 | Abrir/cerrar mapa 10 veces | Heap (Leaflet leaks?) |
| 90-110 | Idle con app abierta (background tabs) | Heap estable? |
| 110-120 | Repetir flujo inicial | LCP vs baseline |

**Criterios de éxito:**
| Métrica | Target |
|---------|--------|
| Heap a 2h / Heap a 0min | ≤1.5x (50% growth máximo) |
| FPS a 2h | ≥55 (vs 60 baseline) |
| LCP a 2h | ≤1.3x vs baseline |
| Crashes | 0 |
| OOM errors | 0 |

**Schedule:** Pre-release (cada sprint) en CI con Playwright + Chrome DevTools Protocol.

---

*Documento generado para Escuadrón 56 Lambda-Zero. Resolución LZ-1 + LZ-2.*

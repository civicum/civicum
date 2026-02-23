# 🛰️ PROTOCOLO DE LATENCIA SATELITAL Y RURAL

**Versión:** 1.0  
**Última actualización:** 16 Febrero 2026  
**Escuadrón:** 58 — Lambda-Dos: Latencia Satelital  
**Soluciona:** L2-1, L2-2  
**Complementa:** Conversation `0c0eb320` (Auditing Latency and Rural Performance)

---

## 🎯 Problema

Simular conexión Starlink inestable + 3G rural con paquetes perdidos. ¿Funciona?

---

## 🔴 HALLAZGO L2-1: Sin Perfiles de Red Rural Formalizados

**Problema:** La conversación de performance rural auditó latencia pero los perfiles de red no están documentados como estándar de testing.

**Solución: Perfiles de Red Chile Rural**

| Perfil | Down | Up | Latency | Jitter | Packet Loss | Ejemplo |
|--------|------|-----|---------|--------|-------------|---------|
| 3G Rural | 1.5 Mbps | 384 Kbps | 300ms | ±150ms | 2% | Aysén, Chiloé interior |
| Starlink Estable | 40 Mbps | 8 Mbps | 45ms | ±20ms | 0.1% | Día soleado, sin obstrucciones |
| Starlink Inestable | 10 Mbps | 3 Mbps | 200ms | ±500ms | 5% | Lluvia, obstrucciones parciales |
| 2G Edge | 100 Kbps | 50 Kbps | 600ms | ±300ms | 3% | Zonas muy remotas |
| WiFi Pública Rural | 2 Mbps | 512 Kbps | 80ms | ±40ms | 1% | Biblioteca municipal |

**Implementación en Playwright:**
```typescript
// networkProfiles.ts
export const CHILE_RURAL_PROFILES = {
  '3G_RURAL': { download: 1500000/8, upload: 384000/8, latency: 300 },
  'STARLINK_UNSTABLE': { download: 10000000/8, upload: 3000000/8, latency: 200 },
  '2G_EDGE': { download: 100000/8, upload: 50000/8, latency: 600 },
};

// En test:
await page.route('**/*', async route => {
  const profile = CHILE_RURAL_PROFILES['STARLINK_UNSTABLE'];
  await new Promise(r => setTimeout(r, profile.latency));
  if (Math.random() < 0.05) { // 5% packet loss
    await route.abort('connectionfailed');
    return;
  }
  await route.continue();
});
```

---

## 🟠 HALLAZGO L2-2: Sin Degradación Graceful por Latencia

**Problema:** La app no adapta su comportamiento según la calidad de la conexión. Mismo UX para 5G urbano que 2G rural.

**Solución: Adaptive Loading Strategy**

| Calidad detectada | Acciones automáticas |
|-------------------|---------------------|
| **Buena** (RTT <100ms) | Comportamiento normal, precarga agresiva |
| **Regular** (100-300ms) | Desactivar precarga, reducir imágenes a WebP 50%, lazy load todo |
| **Mala** (300-600ms) | Modo skeleton permanente, imágenes thumbnail 10KB, offline-first priority |
| **Muy mala** (>600ms / >3% loss) | Banner: "Conexión lenta — trabajando offline", sincronizar solo lo esencial |

**Detección de calidad (Network Information API + RTT medido):**
```typescript
function detectNetworkQuality(): 'good' | 'ok' | 'poor' | 'critical' {
  const nav = navigator as any;
  const effectiveType = nav.connection?.effectiveType; // '4g', '3g', '2g', 'slow-2g'
  const rtt = nav.connection?.rtt;
  
  if (effectiveType === 'slow-2g' || rtt > 600) return 'critical';
  if (effectiveType === '2g' || rtt > 300) return 'poor';
  if (effectiveType === '3g' || rtt > 100) return 'ok';
  return 'good';
}
```

**Indicador visual:**
```
🟢 Conectado          → Sin indicador (no molestar)
🟡 Conexión lenta    → Barra sutil: "Conexión lenta — algunos datos pueden tardar"
🔴 Muy lenta/offline → Barra persistente: "Sin conexión — trabajando con datos guardados"
```

---

## 🧪 Tests Obligatorios

| # | Perfil | Flujo | Criterio |
|---|--------|-------|---------|
| T1 | 3G Rural | Login → Home → Ver reporte | LCP ≤4s |
| T2 | Starlink Inestable | Crear reporte con foto | Upload completa sin error (retry) |
| T3 | 2G Edge | Navegar 3 pantallas | Cada pantalla ≤6s, skeleton visible <1s |
| T4 | Starlink → Offline → Starlink | Crear reporte offline, sync al volver | Sync completa, sin pérdida |
| T5 | WiFi Pública Rural | Abrir mapa con 50 pins | Mapa renderiza ≤5s con clustering |

---

*Documento generado para Escuadrón 58 Lambda-Dos. Resolución L2-1 + L2-2.*

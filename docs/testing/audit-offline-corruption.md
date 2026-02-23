# 🔌 PROTOCOLO DE RESILIENCIA ANTE CORRUPCIÓN OFFLINE

**Versión:** 1.0  
**Última actualización:** 16 Febrero 2026  
**Escuadrón:** 57 — Lambda-Uno: Corrupción de Datos Offline  
**Soluciona:** L1-1, L1-2  
**Complementa:** `docs/testing/offline-extreme.md`, Knowledge Item sync-incident-runbook

---

## 🎯 Problema

¿Qué pasa si cortas internet a la mitad de una sincronización? ¿Se pierden datos?

---

## 🔴 HALLAZGO L1-1: Sin Protocolo de Interrupción de Sync

**Problema:** `offline-extreme.md` testa offline/online pero no el caso específico de interrupción MID-SYNC (sincronización cortada a la mitad).

**Solución: Protocolo "Sync Indestructible"**

### Principio: TODO escribir es atómico o no se escribe

```
FLUJO DE SYNC CON INTERRUPCIÓN:

1. Usuario crea reporte offline → Se guarda en IndexedDB con status "pending"
2. Conexión vuelve → Background Sync (Workbox) inicia upload
3. INTERRUPCIÓN MID-UPLOAD:
   
   CASO A: Request HTTP no completó
   → El reporte sigue en IndexedDB con status "pending"
   → Retry automático en próxima conexión (exponential backoff)
   → nada se pierde ✅
   
   CASO B: Request HTTP completó pero response no llegó
   → Idempotency key (UUID del reporte) → server rechaza duplicado
   → Client no sabe si éxito → re-envía → server devuelve 200 (ya existe)
   → nada se duplica ✅
   
   CASO C: Request HTTP parcial (body truncado)
   → Server rechaza con 400 (body malformado)
   → Client conserva reporte original en IndexedDB
   → Retry con body completo en próxima conexión ✅
   
   CASO D: IndexedDB write interrumpido (app crash mid-write)
   → Transacción IDB es atómica → failed transaction = NO write
   → Dato original (si existía) no se corrompe ✅
```

**Implementación de Idempotency Key:**
```typescript
// Cada acción offline tiene un UUID generado al momento de creación
interface OfflineAction {
  id: string;               // crypto.randomUUID()
  type: 'CREATE_REPORT' | 'SUPPORT' | 'VOTE';
  payload: unknown;
  idempotency_key: string;  // = id (mismo UUID)
  created_at: number;
  retry_count: number;
  status: 'pending' | 'syncing' | 'synced' | 'failed';
}

// Server endpoint verifica idempotency:
// IF EXISTS (SELECT 1 FROM actions WHERE idempotency_key = $1)
//   RETURN 200 (already processed)
// ELSE
//   PROCESS AND INSERT
```

---

## 🟠 HALLAZGO L1-2: Sin Resolución de Conflictos Merge

**Problema:** 2 dispositivos del mismo usuario editan el mismo reporte offline. ¿Cuál gana?

**Solución: Last-Write-Wins con Preservación**

| Escenario | Política | Resultado |
|-----------|---------|-----------|
| 2 edits al mismo campo | Last-write-wins (timestamp más reciente) | Último edit gana |
| Edit en campos distintos | Merge automático | Ambos se aplican |
| Delete + Edit | Delete gana (acción destructiva toma precedencia) | Se borra |
| Conflicto irreconciliable | Mostrar ambas versiones al usuario | Usuario decide |

```typescript
function resolveConflict(local: ReportVersion, remote: ReportVersion): Resolution {
  // Si timestamps iguales (imposible en práctica, pero por seguridad):
  if (local.updated_at === remote.updated_at) {
    return { type: 'SHOW_BOTH', local, remote }; // usuario elige
  }
  
  // Merge campo por campo
  const merged = {};
  for (const field of MERGEABLE_FIELDS) {
    if (local[field] !== remote[field]) {
      // Si solo uno cambió vs. base, usar el que cambió
      const baseVal = getBaseVersion(local.base_version_id)?.[field];
      if (local[field] === baseVal) merged[field] = remote[field];
      else if (remote[field] === baseVal) merged[field] = local[field];
      else merged[field] = remote.updated_at > local.updated_at 
        ? remote[field] : local[field]; // LWW
    } else {
      merged[field] = local[field]; // sin conflicto
    }
  }
  return { type: 'MERGED', data: merged };
}
```

**Indicador visual de conflicto:**
```
⚠️ Tu reporte fue editado desde otro dispositivo.
[Ver diferencias] [Usar esta versión] [Usar la otra]
```

---

## 🧪 Tests de Corrupción

| # | Escenario | Método | Criterio |
|---|-----------|--------|---------|
| T1 | Cortar WiFi durante upload | DevTools Network throttle → offline | Reporte en IDB, retry automático |
| T2 | Kill app durante sync | `adb shell am force-stop` | Dato no corrupto al re-abrir |
| T3 | Llenar IndexedDB al 95% | Llenar con datos dummy | Alerta + LRU eviction |
| T4 | 2 dispositivos, edit offline simultáneo | 2 Chrome profiles | Merge o conflicto mostrado |
| T5 | 100 acciones offline → single sync | Modo avión 1h, acciones múltiples | Todas se sincronizan en orden |

---

*Documento generado para Escuadrón 57 Lambda-Uno. Resolución L1-1 + L1-2.*

# 🗺️ AUDITORÍA DE COBERTURA REGIONAL — ANTI-SANTIAGOCENTRIMO

**Versión:** 1.0  
**Última actualización:** 16 Febrero 2026  
**Escuadrón:** 73 — Mapuche-3: Descentralización Real  
**Soluciona:** M3-1, M3-2

---

## 🎯 Problema

¿CIVICUM tiene la misma calidad de datos y experiencia en Aysén que en Santiago? ¿O es otra app santiaguina que se olvida de regiones?

---

## 🔴 HALLAZGO M3-1: Sin Auditoría de Cobertura de Datos por Región

**Problema:** Las fuentes de datos (BCN, SERVEL, DIPRES, ChileCompra) son nacionales pero la interfaz no verifica que TODAS las 346 comunas tengan datos completos.

**Solución: Matriz de Cobertura por Región**

| Fuente | RM | Valparaíso | Biobío | Araucanía | Los Lagos | Aysén | Magallanes | Arica | Tarapacá | Atacama | Coquimbo | Maule | Ñuble | Los Ríos | O'Higgins | Antofagasta |
|--------|-----|-----------|--------|-----------|-----------|-------|-----------|-------|---------|---------|---------|-------|-------|---------|----------|------------|
| BCN (legisladores) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| SERVEL (electoral) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| DIPRES (presupuesto) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| ChileCompra | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ⚠️ | ⚠️ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| InfoLobby | ✅ | ✅ | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| Portal Transparencia | ✅ | ✅ | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| OIRS municipal | ✅ | ✅ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |

**Leyenda:** ✅ Datos completos | ⚠️ Datos parciales/desactualizados | ❌ Sin datos

**Dashboard de cobertura (interno):**
```
COBERTURA REGIONAL CIVICUM
─────────────────────────

Región                 Comunas  Datos OK  Gaps  Cobertura
Metropolitana          52       52        0     100%
Valparaíso             38       36        2     95%
Biobío                 33       30        3     91%
Araucanía              32       25        7     78%
Los Lagos              30       22        8     73%
Aysén                  10       6         4     60%  ⚠️
Magallanes             11       7         4     64%  ⚠️

→ Prioridad: completar cobertura de comunas sureñas (Aysén, Magallanes)
```

---

## 🟠 HALLAZGO M3-2: Sin Contenido Contextualizado por Región

**Problema:** Los ejemplos, onboarding y contenido de Academia Cívica son genéricos o santiagocéntricos. "¿Cómo funciona el Metro?" no aplica en Arica.

**Solución: Contenido Regionalizado**

### Reglas de contextualización
| Elemento | Santiagocéntrico ❌ | Regionalizado ✅ |
|----------|-------------------|-----------------|
| Ejemplo de reporte | "Bache en Las Condes" | "[Ejemplo de tu comuna]" — dinámico |
| Transporte | "¿Cómo funciona el Metro?" | "¿Cómo funciona el transporte en tu ciudad?" |
| Autoridades | "Alcaldesa de Providencia" | "Tu alcalde/sa: [nombre dinámico]" |
| Presupuesto | "$15.000M de la Municipalidad de Santiago" | "Tu municipio maneja $[X] este año" |
| Georreferencias | "Plaza de Armas, Santiago" | Auto-detectar comuna y mostrar hitos locales |
| Chilenismos | Modismos santiaguinos | Adaptar por zona (sureño ≠ nortino ≠ capitalino) |

### Knowledge Pack regionalizado
```typescript
// Por cada región, Civia tiene contexto adaptado
const REGIONAL_CONTEXT = {
  'arica': {
    ejemploReporte: 'Falta de agua en el valle de Azapa',
    autoridadLocal: 'GORE Arica y Parinacota',
    temaRelevante: 'Zona fronteriza, agua, minería',
    chilenismos: ['nortino', 'chaqueño'],
  },
  'aysen': {
    ejemploReporte: 'Camino cortado por temporal en Carretera Austral',
    autoridadLocal: 'GORE Aysén',
    temaRelevante: 'Aislamiento, conectividad, medio ambiente',
    chilenismos: ['sureño', 'paisano'],
  },
  // ... 14 regiones más
};
```

**Indicador en UI si datos incompletos:**
```
ℹ️ Algunos datos de tu comuna aún no están disponibles.
Estamos trabajando para completar la cobertura de [Región].
¿Quieres ayudarnos? [Reportar dato faltante]
```

---

*Documento generado para Escuadrón 73 Mapuche-3. Resolución M3-1 + M3-2.*

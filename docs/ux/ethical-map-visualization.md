# 🗺️ PROTOCOLO DE VISUALIZACIÓN ÉTICA DE CONFLICTOS EN MAPA

**Versión:** 1.0  
**Última actualización:** 16 Febrero 2026  
**Escuadrón:** 75 — Mapuche-5: Mapeo de Conflictos  
**Soluciona:** M5-1, M5-2

---

## 🎯 Problema

El mapa muestra reportes geolocalizados. Si un barrio tiene muchos reportes, podría parecer "el barrio peligroso". ¿Cómo mostrar datos sin estigmatizar?

---

## 🔴 HALLAZGO M5-1: Sin Directrices Anti-Estigmatización del Mapa

**Problema:** El mapa con heatmap/clusters de reportes puede reforzar estigmas socioeconómicos. "La Pintana = rojo" ≠ "La Pintana = peor". Puede significar "la ciudadanía de La Pintana es más activa".

**Solución: 7 Reglas de Visualización Ética**

### Regla 1: Nunca rojo = peligro
```
❌ Heatmap tradicional: verde (poco) → rojo (mucho)
    → Implica: rojo = malo = peligro

✅ Mapa CIVICUM: gris (poco) → terracota (mucho)
    → Implica: terracota = más actividad ciudadana
    → Usar la paleta de la marca, NO la de alarma
```

### Regla 2: Contextualizar siempre
```
❌ "La Pintana: 342 reportes"
    → Parece un barrio problemático

✅ "La Pintana: 342 reportes — La ciudadanía más activa de la RM"
    → Reenmarca: más reportes = más participación = positivo
```

### Regla 3: Normalizar por población
```
❌ Comparar comunas por cantidad absoluta de reportes
    → Santiago centro siempre "gana" por densidad

✅ Comparar por reportes per cápita (reportes / 10.000 hab.)
    → Comparación justa entre La Pintana (500K hab) y Vitacura (80K hab)
```

### Regla 4: Categorizar, no amalgamar
```
❌ Todos los reportes en un solo mapa (basura + crimen + baches = "zona roja")

✅ Filtros por categoría:
    🟢 Infraestructura (baches, luminaria)
    🔵 Medio ambiente (contaminación, ruido)
    🟡 Servicios públicos (salud, educación)
    🟠 Seguridad (solo datos oficiales, no percepción)
    → Cada capa es independiente
```

### Regla 5: Mostrar resolución, no solo problema
```
❌ Solo puntos de reportes (mapa de problemas)

✅ Dos capas:
    Layer 1: Reportes activos (🔴 pin terracota)
    Layer 2: Reportes resueltos (🟢 pin verde)
    → Toggle: "Ver resueltos" para mostrar que sí hay cambio
```

### Regla 6: No zoom a viviendas individuales
```
❌ Zoom máximo: se ve la casa del reportante

✅ Zoom mínimo: nivel cuadra (zoom ≤17 en Leaflet)
    → Snap reportes a la cuadra más cercana, no al punto exacto
    → Fuzzing de coordenadas: ±50m aleatorio en display
```

### Regla 7: No rankings de "peor comuna"
```
❌ "Top 10 comunas con más problemas"

✅ "Comunas con mayor participación ciudadana"
    O simplemente: no rankear. Mostrar datos individuales por comuna.
```

---

## 🟠 HALLAZGO M5-2: Sin Testing de Percepción del Mapa

**Problema:** No se ha validado si el mapa genera estigma en la percepción de los usuarios.

**Solución: Test de Percepción del Mapa**

**Protocolo (Rol 06: UX Researcher):**

| # | Escenario | Pregunta |
|---|-----------|----------|
| T1 | Mostrar mapa con concentración en comuna popular | "¿Qué te dice este mapa sobre este barrio?" |
| T2 | Mostrar mapa con capa de resolución | "¿Tu percepción cambia al ver los resueltos?" |
| T3 | Mostrar ranking de comunas | "¿Te parece justo comparar así?" |
| T4 | Mostrar per cápita vs absoluto | "¿Qué versión te parece más honesta?" |
| T5 | Mostrar paleta terracota vs rojo-alarma | "¿Qué te transmite cada color?" |

**Muestra:**
- 5 usuarios de comunas populares (S1-S2)
- 5 usuarios de comunas acomodadas (S3)
- Diversidad etaria y de género

**Criterio de éxito:**
| Métrica | Target |
|---------|--------|
| % que interpreta concentración como "activismo" (no "peligro") | ≥50% |
| % que prefiere per cápita | ≥60% |
| % que se siente ofendido por su comuna en el mapa | 0% |

---

*Documento generado para Escuadrón 75 Mapuche-5. Resolución M5-1 + M5-2.*

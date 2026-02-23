# 🔮 GUÍA DE VISUALIZACIÓN ÉTICA Y NO-ESTIGMATIZANTE

**Versión:** 1.0
**Squad:** 153 Casandra
**Impacto:** Mapas, Gráficos, Reportes Públicos

---

## 🎯 Objetivo
Evitar que la visualización de datos de CIVICUM cree "zonas rojas" o estigmatice barrios vulnerables, convirtiéndose en una profecía autocumplida de deterioro urbano.

## 🗺️ REGLAS DE MAPAS DE CALOR (Heatmaps)

### 1. El Principio de "Mapa de Soluciones"
*   **MAL:** Mapa de calor rojo intenso mostrando solo "Delitos reportados".
*   **BIEN:** Mapa que muestra "Actividad Cívica": mezcla reportes, apoyos, propuestas y soluciones.
*   **Efecto:** Un barrio activo se ve "caliente" (participativo), no peligroso.

### 2. Difuminado Obligatorio (Fuzzing)
*   **Zoom mínimo:** Nunca mostrar puntos exactos de reportes sensibles (crimen, drogas) en zoom calle.
*   **Agregación:** Agrupar en hexágonos (H3 index) de mínimo 500m de radio.
*   **Color:** Usar paletas neutras (Terracota/Naranja) en lugar de "Rojo Alarma" o "Negro Muerte".

### 3. Contexto Demográfico
*   Al mostrar tasas (ej. "basura por habitante"), siempre normalizar por densidad poblacional. Un mapa de "total de reportes" solo muestra dónde vive más gente, lo cual es engañoso.

## 🏘️ NARRATIVAS DE DATOS

### 1. Evitar Lenguaje de "Zona de Guerra"
*   No usar términos como: "Puntos calientes", "Zona roja", "Nido de delincuencia".
*   Usar: "Áreas de alta atención", "Focos de reporte", "Zonas prioritarias".

### 2. Comparación Constructiva
*   No comparar barrios para humillar ("La comuna X es la peor").
*   Comparar contra la **meta propia**: "La comuna X mejoró un 10% respecto al mes pasado".

## 🚫 PROHIBICIONES
1.  Publicar valoraciones inmobiliarias correlacionadas con datos de reportes.
2.  Permitir filtrado de usuarios por "Nivel de seguridad del barrio".

---
*La data crea realidad. Dibujemos una realidad justa.*

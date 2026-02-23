# 🗺️ DETECCIÓN DE ANOMALÍAS: GEOMETRÍA DEL FRAUDE

**Versión:** 1.0  
**Última actualización:** 19 Febrero 2026  
**Escuadrón:** 121 — Data-Sci-1: Detección de Anomalías Geoespaciales  
**Soluciona:** Hallazgo DS1-01 (Granjas de Bots "Vecinos")

---

## 🎯 El Problema de Datos
500 "vecinos" reportan el mismo bache o apoyan la misma causa.
Al mirar los metadatos: Todos vienen de la misma latitud/longitud exacta (hasta el 6to decimal) o de un patrón de cuadrícula perfecta.
Es una granja de clicks tratando de manipular el presupuesto participativo.

---

## 🕵️ Algoritmos de Detección

### 1. The "God View" Clustering
*   **Algoritmo:** DBSCAN (Density-Based Spatial Clustering of Applications with Noise).
*   **Parámetros:** epsilon = 5 metros, minPts = 10.
*   **Gatillo:** Si detecta > 10 votos desde un radio de 5 metros en < 1 hora -> **Flag: Coordinated Action**.

### 2. Análisis de Velocidad (Superman Check)
*   Si el Usuario A vota en Maipú a las 10:00 y en Puente Alto a las 10:05.
*   Velocidad requerida: > 200 km/h.
*   **Acción:** Invalidar ambos votos (Shadowban).

### 3. IP vs GPS Consistency
*   Si el GPS dice "Plaza de Armas, Santiago" pero la IP es "Datacenter AWS, Virginia, USA".
*   **Acción:** Bloqueo inmediato. Solo se permiten IPs residenciales/móviles chilenas (ASN Filter).

---

## 🧪 Test del "Teleport"
1.  Enviar 2 reportes con la misma cuenta separadas por 10km en 1 minuto.
2.  **Éxito:** El sistema marca la cuenta como `fraud_suspect` y no contabiliza los reportes en el mapa público.

---
*Documento generado para cerrar Hallazgo DS1-01.*

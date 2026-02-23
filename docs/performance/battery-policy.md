# 🔋 POLÍTICA ANTI-VAMPIRO: EFICIENCIA ENERGÉTICA Y GPS

**Versión:** 1.0  
**Última actualización:** 19 Febrero 2026  
**Escuadrón:** 101 — Joule-1: Vampiros Energéticos  
**Soluciona:** Hallazgo J1-01 (Drenaje Batería > 5%/hora)

---

## 🎯 El Problema Físico
Un usuario en una toma de terreno o zona rural puede tener un celular gama baja con batería degradada (70% salud) y sin acceso fácil a carga.
Si CIVICUM gasta un 10% de su batería en background, **la app será desinstalada**.

---

## 📏 Estándar "Zero-Drain"
**Límite Duro:** < 1% de consumo de batería por hora en background.

### 1. Estrategia GPS: "Single Shot" vs "Tracking"
*   **PROHIBIDO:** `watchPosition()` continuo en background.
*   **PERMITIDO:** `getCurrentPosition()` (High Accuracy) **SOLO** cuando el usuario abre el formulario de reporte ("Alza la Voz").
*   **TIEMPO MÁXIMO:** El sensor GPS debe apagarse a los 30 segundos de obtener la ubicación.

### 2. Sincronización Background (Service Worker)
*   **Frecuencia:** Máximo 1 vez cada 6 horas (no cada 15 mins).
*   **Condición:** `navigator.connection.saveData` debe ser `false` Y batería > 20%.
*   **Trigger:** Usar `PeriodicSyncManager` con política de "Opportunistic Sync" (cuando el OS despierte la radio por otra app).

### 3. Pantalla (El mayor consumidor)
*   **Auto-Dark Mode:** Por defecto en pantallas OLED para ahorrar hasta 30% energía.
*   **Timeout:** Si la app detecta inactividad (acelerómetro quieto) por 60s, oscurecer pantalla (Dimming) antes de bloqueo.

---

## 🧪 Pruebas de Auditoría (Battery Historian)
1.  Instalar app en Samsung J4 (2018) con batería vieja.
2.  Dejar en background 8 horas.
3.  Analizar `bugreport` con Battery Historian.
4.  **Meta:** CIVICUM no debe aparecer en el "Top 10 Apps" de consumo.

---
*Documento generado para cerrar Hallazgo J1-01.*

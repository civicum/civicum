# 🕸️ PROTOCOLO BLOQUEO DE IP (EVASIÓN)

**Versión:** 1.0
**Squad:** 236 Crawler-1
**Misión:** Si el Congreso nos cierra la puerta, entramos por la ventana (pública).

---

## 🎯 El Muro Institucional
Servidores del estado bloquean rangos de IP de data centers (AWS, Google Cloud) para evitar "ataques".

## 🛡️ ESTRATEGIA DE ROTACIÓN

### 1. Red de Proxies Residenciales
*   No usamos IPs de Data Center (fáciles de detectar).
*   Enrutamos el tráfico a través de una red de **Proxies Residenciales** (IPs de proveedores de internet hogar: VTR, Movistar) rotativas.
*   Para el servidor del Congreso, parecemos ciudadano promedio navegando desde Maipú, no un bot desde Virginia.

### 2. "Backoff" Exponencial
*   Si recibimos un código `403 Forbidden` o `429 Too Many Requests`:
    *   Pausa inmediata del scraper.
    *   Espera aleatoria (Jitter) entre 5 y 15 minutos antes de reintentar con nueva identidad.

### 3. User-Agent Chameleon
*   Rotación de `User-Agent` en cada petición, simulando:
    *   Chrome en Windows 11.
    *   Safari en iPhone.
    *   Firefox en Linux.
*   Evita el patrón de huella digital de "Headless Browser".

---
*La información pública debe ser pública, aunque pongan rejas digitales.*

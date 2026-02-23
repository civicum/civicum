# Crawler 1: Bloqueo de Instituciones (Squad 236)

**Misión:** Si el Congreso o ChileCompra bloquea nuestras IPs vía Cloudflare DDoS Protect.

## 1. El Riesgo Firewall
Para alimentar la Inteligencia Artificial (Civia) con resoluciones del Tribunal Constitucional o discusiones de la Cámara de Diputados, CIVICUM usa scrapers cronometrados. Si los ejecutamos tontamente, el WAF (Web Application Firewall) del Estado detectará 10.000 requests desde 1 IP de Amazon (AWS/Vercel) y nos vetará por siempre al considerarnos un Ataque DoS, matando la fuente del Fact-checking.

## 2. Ingestión Táctica
El scraping ciudadano no es un ataque informático, es una pesca cuidadosa.

1.  **Proxies Rotativos Geolocalizados:** Prohibido usar IPs del Datacenter (Ej: `18.232.*` de us-east-1). Las peticiones salientes pasan a través de un pool rotativo de *Residential Proxies* chilenos fijos, de modo que el tráfico ingrese simulando residentes reales consultando desde Providencia o Antofagasta.
2.  **Imitación Antropomórfica de Headers:** El código `fetch()` no puede poseer User-Agents limpios (`python-requests/2.25.1`). Se randomizan cadenas reales: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36`.
3.  **Tope Semántico (Head-Request Polling):** Antes de descargar un documento .PDF de 10 MB de ChileCompra, mandamos una query HTTP estructurada como `Method: HEAD`. Si el peso en bytes o el hash de metadata de la cabecera no ha cambiado desde la copia local, *se aborta temporalmente la conexión*, perdonando la transferencia (Bandwidth Honor).

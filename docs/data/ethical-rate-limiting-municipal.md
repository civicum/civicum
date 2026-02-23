# Rate Limiting Ético Municipal (Squad 239)

**Misión:** No botar los servidores de municipios pequeños con nuestro scraping.

## 1. El Riesgo del DDoS Auto-inducido
Si diseñamos un Crawler eficiente concurrentemente (Puppeteer/Playwright corriendo 100 workers a la vez) para bajar 20,000 archivos de Transparencia y lo apuntamos contra la Municipalidad de Tirúa o de Cabo de Hornos... el servidor cPanel municipal de 1 vCPU se fundirá.
Dejaremos sin página web a la municipalidad por una semana. Nos acusarán formalmente (y con razón) de ciberterrorismo o sabotaje informático a infraestructura crítica.

## 2. Pautaje del Honorable Scraper "Samaritano"

1.  **Lectura del `robots.txt` Compulsoria:** CIVICUM jamás ignora las reglas de Crawling orgánicas establecidas por el Dev del municipio en la directiva `Crawl-delay`.
2.  **Tope Global Concurrente (Semaphore):** Conexiones simultáneas salientes de Vercel/EC2 hacia el mismo dominio (ej: `*.munipelluhue.cl`) tienen un Hard-Cap Estricto de 2 sockets simultáneos.
3.  **Timeout y Backoff Inteligente Limitado:** Si la página del municipio carga en >3000ms, CIVICUM asume congestión, retrocede inmediatamente y reprograma el Scrape para la madrugada de la semana que viene (Random Jitter). CIVICUM nunca mata la infraestructura local que jura proteger.

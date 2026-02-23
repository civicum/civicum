# 🐢 RATE LIMITING ÉTICO (GENTLEMAN SCRAPER)

**Versión:** 1.0
**Squad:** 239 Crawler-4
**Misión:** Obtener la data sin botar el servidor de la Municipalidad de Pelarco (que corre en un Pentium 4).

---

## 🎯 El Poder Destructivo
Nuestra nube escala al infinito. Sus servidores no. Podemos hacer un DDoS accidental.

## 🛡️ CÓDIGO DE CONDUCTA DEL ROBOT

### 1. Regla del "Buen Vecino"
*   Límite duro de peticiones por segundo (RPS) adaptativo según la respuesta del servidor.
*   **Horario Nocturno:** Scraping pesado solo entre 02:00 AM y 06:00 AM (hora local), cuando el tráfico ciudadano es mínimo.

### 2. Cabecera de Contacto
*   Nuestro Crawler siempre se identifica honestamente en el User-Agent, pero incluye un correo de contacto:
    *   `User-Agent: CivicumBot/1.0 (+https://civicum.org/bot; contacto@civicum.org)`
*   Si un SysAdmin nos pide parar, paramos.

### 3. Cache Agresiva
*   Nunca pedimos el mismo recurso dos veces si no ha expirado su `Last-Modified`.
*   Respetamos `robots.txt` salvo en casos de *Interés Público Superior* (donde la ley de transparencia obliga a publicar, pero el robots.txt bloquea). En ese caso, se audita legalmente.

---
*No rompemos la biblioteca para leer los libros.*

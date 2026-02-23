# 🍯 HONEYPOT DETECTION (LA TRAMPA DEL PERIODISTA)

**Versión:** 1.0
**Squad:** 268 Spycraft-3
**Escenario:** Un usuario intenta poner `' OR 1=1;--` en el buscador. ¿Es un hacker ruso o un periodista de CIPER buscando una noticia?

---

## 🎯 No Dispares al Mensajero
Si baneamos automáticamente a un investigador, él publicará: "Civicum censura a quien busca fallas". Mala PR.

## 🛡️ IDENTIFICACIÓN DE COMPORTAMIENTO

### 1. El "Sandbox" Invisible
*   Si detectamos patrones de escaneo ético (nmap lento, payloads de prueba estándar OWASP):
    *   No bloqueamos la IP.
    *   Cambiamos la respuesta del backend a un **Modo Simulado**. El ataque parece funcionar (retorna errores falsos), pero no toca datos reales.
    *   Ganamos tiempo para analizar la intención.

### 2. Header "Security-txt"
*   Implementamos `/.well-known/security.txt` estándar.
*   Si alguien escanea, lo primero que ve es: "Si encontraste algo, repórtalo aquí y te pagamos (Bug Bounty). No lo publiques".

### 3. Tagging "Researcher"
*   Marcamos la cuenta con flag `POTENTIAL_RESEARCHER`.
*   El equipo de Trust & Safety contacta proactivamente: "Vimos que estás probando nuestros sistemas. ¿Quieres acceso a un entorno de QA para no romper nada?"
*   Convertimos la amenaza en colaboración.

---
*Mejor un hacker amigo que un titular enemigo.*

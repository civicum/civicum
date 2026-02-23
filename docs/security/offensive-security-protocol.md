# Protocolo de Seguridad Ofensiva (Squad Epsilon)

**Squad:** 11. Escuadrón Epsilon: Seguridad Ofensiva  
**Misión:** Pentesting agresivo, inyección SQL, XSS y ataque a la API.  
**Responsables:** Security Architect, IAM/Auth, OWASP Web, Red Team, Criptografía.

## 1. Filosofía "Assume Breach"
Asumimos que el atacante ya está dentro. No confiamos en el perímetro.
- **Zero Trust:** Cada request, interna o externa, se autentica y autoriza.
- **Defense in Depth:** Si falla el WAF, falla la API Gateway. Si falla la API, falla la DB. Si falla la DB, los datos están encriptados.

## 2. Vectores de Ataque Prioritarios (Top 5)
1.  **SQL Injection:** Uso estricto de ORM (Prisma/Drizzle) o Prepared Statements. Prohibido concatenar strings en queries.
2.  **XSS (Cross-Site Scripting):** Sanitación automática de Next.js. Content Security Policy (CSP) estricta bloqueando scripts inline.
3.  **BOLA (Broken Object Level Authorization):** Verificar que el usuario ID:5 no pueda ver los datos del ID:6 cambiando la URL.
4.  **Rate Limiting:** Protección contra DDOS a nivel de aplicación (Upstash/Redis) y de infraestructura (Cloudflare).
5.  **Supply Chain Attacks:** Bloqueo de dependencias NPM no verificadas (ver Protocolo Supply Chain).

## 3. Red Teaming Continuo
- **Automático:** Escaneo semanal con ZAP/Burp Suite en CI/CD.
- **Manual:** "Viernes de Hackeo". Los devs intentan romper el código de sus compañeros.
- **Bounty:** Aunque no hay dinero, ofrecemos "Honor Cívico" (Hall of Fame) a hackers éticos que reporten vuln.

## 4. Gestión de Secretos
- **Nunca en Git:** `.env` está en `.gitignore`.
- **Rotación:** Las llaves de API se rotan cada 90 días o ante sospecha de compromiso.
- **Escaneo:** GitGuardian o TruffleHog en el pipeline de pre-commit.

*La seguridad no es un estado, es un hábito de paranoia constructiva.*

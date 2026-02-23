# Protocolo de Defensa contra Asedio de Bots (Squad Defcon-2)

**Squad:** 62. Escuadrón Defcon-2: Ataque de Bots Coordinados  
**Misión:** 10.000 bots intentan votar en una encuesta barrial.  
**Responsables:** Trust & Safety Técnico, SRE, Backend Lead, Integridad Electoral.

## 1. El Foso Digital (Rate Limiting Dinámico)
No bloqueamos por IP fija (CGNAT). Bloqueamos por comportamiento.
- **Circuit Breaker:** Si una comuna recibe +500% de votos que su promedio histórico en 1 hora, se activa el modo "Solo ClaveÚnica Verificada" automáticamente.

## 2. Análisis de Grafos de Co-ocurrencia
Detectamos granjas de bots que operan en enjambre.
- **Patrón:** Si 50 usuarios distintos votan exactamente por las mismas 3 opciones en el mismo orden en < 5 minutos, se marcan como "Sibilas" (Sybil Attack).

## 3. Fingerprinting Avanzado (Sin Cookies)
- Usamos TLS Fingerprinting (JA3) para detectar si los requests vienen de scripts de Python/Selenium y no de navegadores reales.

## 4. Desactivación Silenciosa (Shadowban Masivo)
- Al detectar la botnet, no les damos error 403 (que les avisa para cambiar de IP).
- Les damos éxito 200 OK, pero sus votos van a `/dev/null` (o una tabla de cuarentena).

*Defender la democracia digital es una carrera armamentista. Ellos tienen volumen, nosotros tenemos inteligencia.*

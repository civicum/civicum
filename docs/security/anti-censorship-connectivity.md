# Protocolo de Resistencia a Censura (Anti-Bloqueo ISP) (Squad Distribución-5)

**Squad:** 135. Escuadrón Distribución-5: Censura de ISP  
**Misión:** ¿Qué pasa si una red corporativa o pública bloquea nuestro dominio?  
**Responsables:** SRE, Security, OpSec, Arquitecto.

## 1. DNS over HTTPS (DoH)
- La app no confía en el DNS del proveedor de internet (que suele ser el punto de censura fácil).
- Civia usa DoH (Cloudflare 1.1.1.1 o Google 8.8.8.8) directamente desde el código para resolver la IP del servidor, saltándose bloqueos DNS locales.

## 2. Domain Fronting & Rotación
- Mantenemos una lista de "Dominios Esrijo" (ej: `cdn-static-assets-chile.com`) que apuntan a nuestra infraestructura pero tienen nombres inocuos.
- Si `api.civicum.cl` falla por timeout, la app intenta conectarse silenciosamente a los dominios alternativos.

## 3. ESNI (Encrypted Server Name Indication)
- Implementamos TLS 1.3 con ESNI para que el ISP no pueda ver qué sitio específico está visitando el usuario dentro de una IP compartida de Cloudflare.

*El derecho a reportar no puede ser revocado por un administrador de red enojado.*

# Protocolo de Defensa contra Clon Malicioso (Squad Sun-Tzu-5)

**Squad:** 115. Escuadrón Sun-Tzu-5: El "Clon" Malicioso  
**Misión:** Aparece "CivicumApp.net" (falsa) distribuyendo malware.  
**Responsables:** OWASP, Abogado PI, Comms, Security, Product Lead.

## 1. Monitoreo Proactivo de Tiendas y Dominios
- **Script de Vigilancia:** Bot diario que busca "Civicum", "Civia" y variaciones (Typosquatting como `Civicvm`) en Google Play, App Store, APKPure y registros de dominios nuevos.
- **Alerta:** Ante cualquier hallazgo, notifica a Seguridad y Legal simultáneamente.

## 2. Kill Switch de API (Marca de Agua)
- La App oficial firma todas sus peticiones con un certificado pinned (SSL Pinning) y un token rotatorio criptográfico.
- Si un clon intenta conectarse a nuestros servidores (para mostrar datos reales y robar credenciales), el backend rechaza la conexión por "Firma de Cliente Inválida".

## 3. Takedown Express (DMCA/Cease & Desist)
- Tenemos plantillas pre-redactadas de "Cease & Desist" para enviar a Cloudflare, GoDaddy y Google.
- Objetivo: Bajar el sitio falso en < 4 horas.
- **Comunicación:** Aviso inmediato a usuarios: "Esta es la ÚNICA app oficial. Si descargaste otra, bórrala y cambia tu clave".

*La imitación no es halago, es un vector de ataque.*

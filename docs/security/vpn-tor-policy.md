# 🧅 POLÍTICA DE PRIVACIDAD Y ANONIMATO (VPN/TOR)

**Versión:** 1.0
**Squad:** 165 Frontera
**Estado:** Activa

---

## 🎯 El Dilema
¿Bloqueamos Tor y VPNs para evitar bots y spam?
**Respuesta CIVICUM:** NO. El derecho a la privacidad y al anonimato es un derecho digital fundamental.

## 📜 REGLAS DE TRÁFICO ANONIMIZADO

### 1. Principio de "Sospecha Neutra"
El uso de VPN o Tor **NO es un crimen**. Puede ser un activista protegiendo su identidad, una víctima de violencia intrafamiliar, o un periodista.
*   **Política:** No bloquear IP solo por ser un nodo de salida Tor o VPN comercial.

### 2. Mitigación de Abuso (Rate Limiting)
Dado que estas IPs suelen usarse para ataques:

| Nivel de Tráfico | Acción |
|---|---|
| Lectura (Ver mapas, datos) | **Permitido sin fricción.** |
| Login / Auth | **Permitido.** (La seguridad la da la ClaveÚnica/2FA, no la IP). |
| Escritura (Votar, Reportar) | **Challenge Agresivo.** |

### 3. Proof-of-Humanity (PoH)
Si la IP es detectada como VPN/Tor/Proxy:
*   Para **crear contenido**: Se exige resolver un CAPTCHA criptográfico difícil (Turnstile "Managed" mode).
*   Se limitan las acciones a: 1 reporte por hora (vs 10 para IPs residenciales).

### 4. Shadowbanning de Spammers
Si una IP de Tor inunda el sistema con reportes falsos:
*   No bloquear la IP (afecta a otros usuarios inocentes).
*   Aplicar **Shadowban temporal** a esa sesión específica o aumentar la dificultad del PoH al infinito para ese actor.

---
*La privacidad protege a los débiles de los poderosos. La transparencia vigila a los poderosos por los débiles.*

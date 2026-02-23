# Protocolo Anti-Testaferro (Squad Finanzas-2)

**Squad:** 172. Escuadrón Testaferro: Cuentas Paja  
**Misión:** Un político crea 50 cuentas falsas para simular apoyo popular (Astroturfing).  
**Responsables:** Integridad Electoral, Trust & Safety, Red Team.

## 1. Análisis de Grafo Social
- Detectamos "Islas de Apoyo": Un grupo de 50 usuarios que SOLO interactúan entre ellos y con 1 candidato específico, y nunca con otros vecinos.
- Si el "Coeficiente de Endogamia" > 0.9, se marcan como granja de bots/testaferros.

## 2. Huella de Dispositivo
- Si 20 cuentas distintas inician sesión desde el mismo `DeviceID` o `CanvasFingerprint` en una semana, todas quedan en cuarentena ("Shadowban").
- Excepción: Bibliotecas públicas (Whitelisted IPs).

## 3. Prueba de Turing Cívica
- A las cuentas sospechosas se les pide verificar su humanidad no con un captcha, sino con una pregunta local difícil: "¿De qué color es el kiosco de la esquina de la plaza?".

*El apoyo real es orgánico y desordenado. El apoyo falso es geométricamente perfecto.*

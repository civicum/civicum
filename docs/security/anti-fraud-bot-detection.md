# Protocolo Anti-Fraude y Detección de Bots (Squad D4)

**Squad:** 38. Escuadrón D4: Anti-Fraud  
**Misión:** Detectar granjas de bots e intentos de fraude electoral.  
**Responsables:** Trust & Safety Técnico, Integridad Electoral, Biometría, Auditor Voto, UGC.

## 1. Detección de Granjas (Bot Farms)
Monitorizamos patrones inhumanos en tiempo real:
- **Velocidad:** Usuarios que votan/crean reportes a velocidad sobrehumana (<2 seg entre acciones).
- **Horario:** Picos de actividad masiva a las 3 AM hora local.
- **Red:** Múltiples cuentas desde la misma IP/Subnet (aunque permitimos NATs comunitarios, se marca flag para revisión).

## 2. Biometría Comportamental (Pasiva)
Sin pedir huella digital, analizamos cómo usan la app:
- **Mouse/Touch:** Los bots no mueven el mouse de forma curva ni "dudan" antes de hacer clic.
- **Giroscopio:** En mobile, verificamos micro-movimientos naturales de la mano.

## 3. Honeypots (Trampas para Osos)
- Campos de formulario invisibles (`display: none`) que solo los bots llenan. Si se llena, ban inmediato y silencioso (Shadowban).

## 4. Verificación de Identidad Progresiva
Si un usuario activa alertas de fraude pero parece humano:
- **Challenge:** Se le pide verificar con ClaveÚnica o SMS para continuar.
- **Revisión Manual:** Pasa a cola de moderación humana (Squad Pi).

*Un voto falso destruye la confianza de mil votos reales.*

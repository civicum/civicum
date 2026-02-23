# Protocolo de Abandono del Admin (Dead Man's Switch) (Squad Entropía-5)

**Squad:** 120. Escuadrón Entropía-5: El Abandono del Admin  
**Misión:** Tú te enfermas por 3 meses. ¿El sistema corre solo (Dead Man's Switch)?  
**Responsables:** Head of Ops, OpSec, Arquitecto, SRE, Gobernanza.

## 1. El Interruptor del Hombre Muerto
Si el "Super Admin" no inicia sesión ni renueva su token criptográfico en 30 días:
- **Fase 1 (Alerta):** Envío de emails y SMS a contactos de emergencia y equipo core.
- **Fase 2 (Federación):** Si no hay respuesta en 45 días, los permisos de "Super Admin" se transfieren automáticamente a un Comité de Emergencia de 3 personas (multisig wallet logic).
- **Fase 3 (Liberación):** Si todo falla (apocalipsis), el sistema publica automáticamente las llaves de desencriptación de la base de datos pública en IPFS para que la comunidad recupere la data.

## 2. Renovación Automática de Certificados
- Todos los certificados SSL y dominios están en "Auto-Renew" prepagado por 5 años.
- La infraestructura crítica no depende de que alguien ponga la tarjeta de crédito el día 1 del mes.

## 3. Documentación Viva
- La documentación técnica no está en un Google Doc privado. Está en el mismo repositorio del código (como estos `.md`). Si tienes el código, tienes el manual.

*Civicum está diseñado para sobrevivir a sus creadores.*

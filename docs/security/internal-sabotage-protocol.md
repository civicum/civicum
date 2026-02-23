# Protocolo de Sabotaje Interno (Squad Omega-4)

**Squad:** 94. Escuadrón Omega-4: El Saboteador Interno  
**Misión:** Rol 28 intenta romper todo desde adentro.  
**Responsables:** Red Team, IAM, OpSec, Security Architect.

## 1. La Amenaza "Snowden Malvado"
Asumimos que un admin con acceso root quiere destruir Civicum.
- **Defensa:** "Two-Person Rule" (Regla de los dos hombres) para comandos destructivos (`DROP TABLE`, `rm -rf`).
- **Implementación:** La consola de producción requiere dos llaves YubiKey físicas distintas conectadas simultáneamente (o aprobación MPC remota) para ejecutar acciones críticas.

## 2. Trampas de Canario (Honeytokens)
- Archivos falsos como `passwords.txt` o endpoints `/admin/backdoor` que no hacen nada pero alertan instantáneamente a todo el equipo de seguridad si alguien los toca.

## 3. Inmutabilidad de Logs
- Los logs de auditoría se envían en tiempo real a un servidor externo "Write-Only" (WORM) que ni siquiera los admins de Civicum pueden borrar o modificar.
- Si el saboteador borra la DB, no podrá borrar la evidencia de que fue él.

*Confianza, pero verificar. Y si no se puede verificar, no confiar.*

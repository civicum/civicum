# Protocolo de Robo de Identidad del Admin (Squad Zero-4)

**Squad:** 144. Escuadrón Zero-4: Robo de Identidad del Admin  
**Misión:** Alguien tiene tu laptop desbloqueado. ¿Qué pueden romper?  
**Responsables:** IAM, OpSec, Security, Ops.

## 1. Política de "Zero Trust" en Dispositivos
- El laptop del admin NO tiene llaves SSH ni secretos de producción en disco duro.
- Todo acceso requiere 2FA físico (YubiKey) y Token efímero que dura 1 hora.
- Si roban el laptop abierto, el ladrón tiene máximo 59 minutos de acceso antes de ser expulsado.

## 2. Botón de Pánico "Kill Session"
- Cualquier miembro del equipo Core puede activar "Flush All Admin Sessions" desde su celular personal autenticado. Esto cierra sesión violentamente a todos los administradores en el mundo.
- **Costo:** Molestia para el equipo. **Beneficio:** Salva la plataforma.

## 3. Acciones Destructivas Requieren "Two-Man Rule"
- Nadie puede borrar la base de datos o cambiar la configuración de DNS solo.
- Se requiere aprobación de un segundo admin en tiempo real (Multi-party approval) para comandos de alto impacto (`DROP TABLE`, `Terraform destroy`).

*Confía, pero verifica. Y si no puedes verificar, bloquea.*

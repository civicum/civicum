# Protocolo de Higiene de Logs y PII (Squad Defcon-5)

**Squad:** 65. Escuadrón Defcon-5: Fuga de Logs (PII Leak)  
**Misión:** Revisar cada línea de log buscando un RUT o teléfono olvidado.  
**Responsables:** Privacy Engineer, Observabilidad, IAM, Backend Lead.

## 1. El Enemigo es `console.log(user)`
Es el error más común y peligroso.
- **Regla:** Está prohibido loguear objetos completos. Solo se loguean IDs.
- **Linter:** Regla custom de ESLint que prohíbe `console.log` en backend, forzando el uso de nuestra librería de logger (`pino` o `winston`) con redactores configurados.

## 2. Redacción Automática (Data Masking)
El logger intercepta y ofusca patrones regex antes de escribir en disco/nube.
- **Patrones:** RUT chileno, Email, Tarjeta de Crédito, Token JWT.
- **Resultado:** `User [REDACTED] failed login from IP [REDACTED]`.

## 3. Retención Minimalista
- Logs de acceso (Nginx/Cloudflare): Se eliminan a los 7 días.
- Logs de aplicación: Se eliminan a los 30 días.
- No guardamos basura tóxica por "si acaso".

## 4. Alerta de Canario
- Inyectamos "RUTs falsos trampa" en la base de datos de prueba. Si esos RUTs aparecen en un sistema de logs externo (ej: Datadog), se dispara una alerta de seguridad crítica.

*Un log es una escena del crimen esperando ocurrir.*

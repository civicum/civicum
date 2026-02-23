# 🤫 SILENCIO ADMINISTRATIVO (LÓGICA DE NEGOCIO)

**Versión:** 1.0
**Squad:** 289 Burocracia-4
**Problema:** Pasaron 20 días hábiles y el municipio no respondió. ¿Qué le mostramos al usuario? ¿"Pendiente"? ¿"Rechazado"?

---

## 🎯 El Silencio Habla
En derecho administrativo, callar tiene consecuencias jurídicas (Positivas o Negativas según la materia).

## 🛡️ AUTOMATIZACIÓN DE PLAZOS

### 1. El "Countdown" Legal
*   Cada trámite tiene configurada su `ley_del_silencio`:
    *   `POSITIVO`: Si expira, se asume APROBADO (ej: Permisos menores).
    *   `NEGATIVO`: Si expira, se asume RECHAZADO (ej: Reclamos de ilegalidad).
*   El sistema muestra una cuenta regresiva: *"Faltan 3 días para aplicar Silencio Administrativo"*.

### 2. Generación de Certificado de Silencio
*   Si el plazo vence y es Silencio Positivo:
    *   Civicum genera automáticamente un **"Certificado de Transcurso de Plazo"** listo para que el usuario lo presente y exija su derecho adquirido.

### 3. Manejo de "Días Hábiles Administrativos"
*   No usar `datetime.add(days=20)`.
*   Usar calendario de feriados legales y sábados (que no son hábiles administrativos en Chile, salvo excepciones).

---
*Si ellos no responden, el reloj decide.*

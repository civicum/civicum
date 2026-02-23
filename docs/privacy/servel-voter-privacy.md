# 🗳️ PROTOCOLO SERVEL DIRECTO (DATOS ELECTORALES)

**Versión:** 1.0
**Squad:** 204 Clave-4
**Misión:** Sincronizar padrón electoral sin violar el secreto del voto ni la privacidad domiciliaria.

---

## 🎯 El Dato Público pero Sensible
El padrón electoral es público (PDFs gigantes), pero indexarlo y hacerlo buscable ("¿Dónde vive mi vecino?") es una violación ética grave (Doxing facilitado).

## 🛡️ MANEJO ÉTICO DEL PADRÓN

### 1. Ingesta Ciega
*   Civicum procesa el padrón para validar:
    *   *"¿El usuario X vota realmente en la comuna Y?"* (Para darle badge de "Residente Verificado").
*   Una vez validado, **SE BORRA LA DIRECCIÓN DEL PADRÓN**. No mantenemos una base de datos paralela de domicilios electorales.

### 2. Prohibición de Búsqueda Inversa
*   La API interna prohíbe terminantemente queries del tipo: `SELECT * FROM residents WHERE address = 'Calle Falsa 123'`.
*   Solo se permite: `Check(UserRUT, ComunaClaimed) -> Boolean`.

### 3. Protección de Votantes Vulnerables
*   Personas con medidas cautelares o víctimas de violencia intrafamiliar suelen pedir secreto de domicilio electoral.
*   Civicum respeta la flag `reserva_legal` y no procesa esos registros ni siquiera para validación automática.

---
*Validar la residencia sin exponer el refugio.*

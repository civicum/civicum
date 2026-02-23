# Protocolo de Onboarding de Autoridades (Squad Medivac-3)

**Squad:** 88. Escuadrón Medivac-3: Onboarding de Autoridades  
**Misión:** ¿Cómo entra un Alcalde a la plataforma? ¿Validación de identidad?  
**Responsables:** Biometría, IAM, Ciencia Política, Riesgos.

## 1. Verificación Biométrica Obligatoria (Liveness Check)
No basta con tener la clave del correo institucional `@municipalidad.cl`.
- **Requisito:** El Alcalde/Concejal debe pasar una prueba de vida facial (Liveness) cotejada con su foto oficial del Registro Civil o Servel. Esto evita que el CM (Community Manager) secuestre la cuenta real del edil.

## 2. Delegación Auditada
Sabemos que el Alcalde no responderá los baches personalmente.
- **Feature:** El Alcalde crea "Delegados" (Obras, Seguridad).
- **Transparencia:** Cuando el Delegado responde, la firma dice: "Juan Pérez (Delegado) en nombre del Alcalde X". Nunca fingimos que es el Alcalde escribiendo si no lo es.

## 3. Revocación Inmediata (Kill Switch)
- Si un funcionario es destituido o pierde la elección, su acceso de "Autoridad" se revoca automáticamente el día del traspaso de mando (integración con Servel).

*La autoridad se valida en las urnas y en el login.*

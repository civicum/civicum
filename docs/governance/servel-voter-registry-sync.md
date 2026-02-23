# Sincronización Padrón Servel (Squad 204)

**Misión:** Sincronización con el padrón electoral. ¿Manejo ético de la dirección del votante?

## 1. El Riesgo del Dóxeo Geopolítico Masivo
Cruzamiento de Base de Datos: Si CIVICUM sabe dónde vive exactamente cada usuario (Cruce padrón electoral) y además registra sus opiniones (inclinación izquierda/derecha por cómo vota), la plataforma podría sufrir una filtración (Breach) que le entregue a los partidos políticos y campañas un mapa GPS de cada ideología por cuadra para hacer *Gerrymandering* o micro-targeting electoral abrasivo.

## 2. Geometría Electoral Ciega (ZKP-lite)
Nunca sincronizaremos la calle + número de la casa del ciudadano.

1.  La ingesta del Padrón Electoral Público proporcionada por el Servel estará limitada exclusivamente a la validación de pertenencia territorial general: *Comuna* y *Circunscripción Electoral* (ej: Las Condes - Sanquín, Providencia - Parque Inés de Suárez).
2.  **Validación en Memoria Descartada:** Al validar una firma para una Iniciativa Popular, el backend de validación compara si el RUT enrolado sigue perteneciendo a ese Distrito y devuelve el flag de validez `true/false`, sin volcar las colindancias o la zona censal detallada a la base transaccional.
3.  CIVICUM se mantiene completamente ciego al domicilio puerta-a-puerta (Art. F-08).

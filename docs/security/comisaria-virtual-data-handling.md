# Comisaría Virtual y Datos Crímenes (Squad 202)

**Misión:** Simular integración de permisos/denuncias. ¿Cómo manejamos datos sensibles?

## 1. El Riesgo de Acumulación Forense
Si un usuario utiliza CIVICUM para reportar crímenes enlazando datos de Comisaría Virtual o denuncias formales del Ministerio Público, la plataforma podría convertirse accidentalmente en un repositorio legal donde los nombres de víctimas o imputados quedan guardados en JSONb. Esto nos transformaría en un blanco prioritario para el Narcotráfico, el Cibercrimen y Auditorías Judiciales de incautación de servidores.

## 2. The Stateless Broker Pattern
Cualquier interacción con datos de seguridad pública (Denuncias, Órdenes, Patentes) asume el rol de *Broker Stateless*.

1.  **Dumb Pipe:** CIVICUM funciona solo como ventanilla de transferencia si existe un iFrame interconector o un consumo de API REST de Gobierno Digital. 
2.  **Zero-Persistence Rule:** Las invocaciones a las APIs policiales/judiciales transitan en formato cifrado (`https`) de extremo a extremo, pero las respuestas (`Response.JSON`) solo viven en la RAM de la Edge Function (`Next.js Route Handler`).
3.  **Prohibición de Caching:** Los CDN (Cloudflare) y Service Workers tienen estrictamente prohibido guardar en caché (Cache-Control: `no-store`, `no-cache`, `must-revalidate`) cualquier URI que responda al path `/api/integrations/seguridad/*`.

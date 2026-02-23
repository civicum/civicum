# Protocolo de Fuga de Memoria y Resistencia (Squad Lambda-Zero)

**Squad:** 56. Escuadrón Lambda-Zero: Fuga de Memoria  
**Misión:** Usar la app por 2 horas seguidas en un gama baja. ¿Crashea?  
**Responsables:** Performance, Frontend Lead, Observabilidad, QA Funcional.

## 1. El "Maratón J7"
No basta con que la app abra rápido. Debe mantenerse estable.
- **Prueba:** Scrollear el feed infinito, abrir 50 reportes y subir 10 fotos *sin recargar la página* en un dispositivo con 2GB de RAM.
- **Criterio de Falla:** Si el navegador mata la tab (OOM Kill), reprobamos.

## 2. Limpieza de Listeners y DOM
- **Regla:** Cada componente React (o similar) debe limpiar sus `useEffect` y `EventListeners` al desmontarse.
- **Imágenes:** Las imágenes fuera del viewport deben eliminarse del DOM o sustituirse por placeholders vacíos (Virtualización de listas).

## 3. SPA vs MPA (Navegación)
Si el manejor de memoria del framework falla:
- **Hard Reload:** Forzamos una recarga completa del navegador cada 50 navegaciones internas para "purgar" la memoria RAM del dispositivo usuario de forma preventiva.

*Una app que se pone lenta con el uso es una app que insulta al usuario pobre.*

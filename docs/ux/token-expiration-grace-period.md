# Caducidad de Tokens: Salvaguardando Párrafos (Squad 274)

**Misión:** El token HTTP expira a la mitad de un llanto redaccional vecinal de 40 minutos de catarsis.

## 1. El Riesgo del Error 401 Destructor (Abuso UX)
Una vecina traumatizada narra con detalle hiper-extenso durante 50 minutos cómo asaltaron a su hija en la entrada del colegio oscuro que no tiene luminarias de la municipalidad.
Escribe un pergamino perfecto en el campo `<textarea>` de Alza la voz.
Al apretar `[Enviar Todo a la Muni]`, el Token JWT (que caduca a los 30 min) ha muerto en memoria caché. 
CIVICUM hace un "Refresh Token" brusco o simplemente lanza 401 y **recarga la página para mandarla al Login**. Pierde las 4 hojas del texto dramático. La usuaria estalla en lágrimas, maldice a CIVICUM, tira el celular y jamás se organiza de nuevo.

## 2. Protocolo de Captura de Texto Agónico

1.  **LocalStorage Heartbeat (Draft Saver):** Absolutamente cada pulsación de tecla (`onKeyUp/Debounced: 2000ms`) en los Reportes Cívicos de CIVICUM se graba localmente en `window.localStorage` sin pasar por la red.
2.  **Recuperación 401 "Lazarus":** Si Vercel responde "Token Expirado", el Frontend bloquea la recarga de página dura. Inyecta el componente React Modal: `"Tu sesión cerró por seguridad. Inicia de nuevo en esta cajita".` (In-Place Login). El usuario se loguea en la ventana superpuesta `iframe` u `Oauth Popup`. 
3.  **Inyección Póstuma:** Al refrescar la sesión nueva válidamente, el sistema chupa el `localStorage`, re-hidrata todos los formularios del `<textarea>` y despacha silenciosamente el POST pendiente, devolviéndole a la vecina la ventana triunfal: *"Iniciativa Ingresada con Éxito."* Nunca supo que su texto casi la abandona.

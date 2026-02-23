# CDN Hijacking e Integridad de Subrecursos (Squad 313)

**Misión:** Una red de entrega como jsDelivr es hackeada y manda JS sucio.

## 1. El Riesgo del Man-in-the-Middle Global (CDN Takeover)
CIVICUM, para cargar rápido en Magallanes, usa Vercel Edge o importa la librería analítica o tipografías desde Cloudflare CDN externas (Ej: `<script src="https://cdn.jsdelivr.net/.../library.js">`).
Si atacantes logran corromper el servidor gringo de esa CDN (o engañar la DNS chilena de Entel BGP), interceptarán el paquete de Javascript y modificarán el `library.js` al vuelo para que inserte en CIVICUM un "Roba-Credenciales". Los 5 millones de chilenos no ven nada raro, pero sus RUT y Paswords están siendo desviados a servidores extranjeros silenciosamente por un solo `<script>`.

## 2. Blindaje Criptográfico Físico (SRI Constraint)

1.  **Generación Hash Forzosa (Subresource Integrity - SRI):** Queda prohibida la carga de CUALQUIER elemento Activo (Script) o Estético (CSS) externo en CIVICUM mediante un simple `src=""`. Todo recurso de 3eros embebido en el `<head>` debe contener el atributo obligatorio `integrity="sha384-[HashedText]"` y `crossorigin="anonymous"`.
2.  **El Muro de Cristal del Navegador:** Si un Senador Hacker interviene el paquete JS de viaje cambiándole 1 solo espacio o añadiendo 1 bit de tracking. El navegador moderno Google Chrome o Safari del vecino chileno intentará procesar la firma `SHA-384`, notará que discrepa del que nosotros enviamos en el HTML original y se negará a cargar el Script. El botón de la app dejará de marchar (Falla Segura), pero el RUT Chileno jamás será robado.
3.  **Inline First:** Siempre que sea posible, CIVICUM favorece la descarga/alojamiento de Fuentes/Iconos localmente para no depender de la fe a servicios de un tercero. Eliminando externalidades de la democracia.

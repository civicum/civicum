# Bluetooth Bridge y Sneakernet (Squad 321)

**Misión:** ¿Podemos pasar un reporte de un teléfono a otro sin internet? (Sneakernet) Futuro.

## 1. El Riesgo de la Muerte Incomunicada (Blackout Zone)
Terremoto 9.0 en Concepción. La red 4G y fibra óptica muere por 72 horas. La aplicación CIVICUM, atada a `https://civicum.cl` (Vercel) arroja un fatal "Offline / Dinosaurio de Chrome". 
Dos cuadras más allá del epicentro local, hay vecinos que no saben que hay heridos debajo de una casa porque no pueden subir la "Queja/Alarma" a la Nube Comunal. El rol asambleario de la App muere cuando más duele.

## 2. Enjambre P2P y Diseminación Epidémica (Bluetooth Mesh)

1.  **Activación de Radio "Modo Catástrofe":** La Service Worker de la App detecta ping fallido a AWS > 1 hora. Automáticamente, enciende el API Web Bluetooth del celular a la escucha. Toda demanda escrita por el usuario pasa al estado "Bandeja de Salida (Mesh-Ready)".
2.  **Propagación Gossip de Cercanía (Gossip Protocol):** Juan (Epicentro) camina por la calle. Pasa a 20 metros de Pedro. Los celulares "conversan" BLE de fondo. El celular de Pedro (Que tampoco tiene internet) se traga la denuncia criptográficamente sellada de Juan como un paquete cerrado Zip. Pedro camina 3 cuadras y cruza a María. María recibe de Pedro el paquete de Juan y el de Pedro.
3.  **El Nodo de Luz (Uplink Survivor):** María, caminando con su celular lleno de los reportes del barrio, llega a dos kilómetros de distancia a la Zona Táctica de Carabineros que tiene Internet Starlink. Tan pronto como el celular de María huele red, "Vomita" de golpe todos los 300 reportes acumulados y encriptados en su bolsa MESH hacia el Servidor Vercel. Vercel descifra los IDs. El país acaba de organizar un rescate a través de un puente humano de vecinos caminando.

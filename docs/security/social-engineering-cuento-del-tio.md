# Phishing Social y el Cuento del Tío (Squad 303)

**Misión:** Estafas desde la cárcel hacia dirigentes vecinales. "Señora, soy del Soporte CIVICUM".

## 1. El Riesgo de la Suplantación de Autoridad Democrática (Spear Phishing)
Desde el penal Colina II, una banda criminal nota que Doña Carmen (70 años, Independencia) empuja proyectos masivos vecinales en la aplicación. Toman la iniciativa que ella redactó. 
Le mandan un SMS o le dejan comentario: *"Hola Carmen, soy Ignacio del Soporte Informático de CIVICUM. Lamentablemente tu proyecto para el Asfaltado está pausado por el Alcalde por una falla de ClaveÚnica. Mándame tu RUT y el código que te llegará al celular para destrabarlo y aprobártelo ahora mismo"*. 
Carmen, desesperada por su cuadra, entrega el 2FA. El criminal entra a su cuenta de Estado, saca préstamos y usurpa sus bienes. CIVICUM fue el vector social de su ruina.

## 2. Inyectar Paranoia Verificable en UX 
No le podemos quitar los teléfonos a las mafias, debemos armar cognitiva y digitalmente a los ancianos.

1.  **Doctrina de Falsa Asistencia ("Jamás Te Ayudaremos"):** El Login de CIVICUM exhibe la declaración estática universal: *⚠️ "Aprende de MEMORIA: Ni los Creadores de CIVICUM, ni el Servel, Ni tu Alcalde te van a llamar jamás por teléfono para 'Ayudarte con una Petición'. Si alguien te llama ofreciendo ayuda en nombre de nuestra ONG, ES UNA ESTAFA. Córtales"*. (Honestidad Defensiva Previa).
2.  **Bloqueo de Palabras Clave de Supresión DMs (T&S):** El chat/foro de comentarios internos de la app posee un Scanner Regex Asíncrono de PII (Personally Identifiable Information). Si un usuario escribe *"Mándame tu Clave, Whatsapp, ClaveÚnica, Código, Soporte Técnico"*, el Webhook de Vercel intercepta el Post e Inyecta Reemplazo Asteriscos `[ESTAFA DETECTADA Y BLOQUEADA POR PROTECCIÓN CIVICA]`, pausando al atacante de por vida por el Payload Maligno.
3.  **The Gold Badge (Insignia Privada Inquebrantable):** Cualquier comunicación vital desde el "Centro Cívico Oficial", viene acompañada Algorítmicamente en el celular por un Escudo Color Oro firmado criptográficamente. Si el Escudo no brilla con la animación SVG de React-Spring forzada por el Server Component, es un farsante tratando de robar identidades.

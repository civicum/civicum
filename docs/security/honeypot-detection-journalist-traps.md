# Honeypots para Desinformadores Cívicos (Squad 268)

**Misión:** Usuarios buscando vulnerabilidades cívicas o hackers de sombrero negro rusos en red.

## 1. El Riesgo de la Pesca Submarina en la Base
Medios de comunicación extremistas ("Periodistas" de portales o canales con agenda negra) se registrarán en CIVICUM con el único objetivo de *comprobar si la plataforma se puede corromper con facilidad*, probar falencias racistas con LLM Civia, o meter inyecciones SQL ciegas (`' OR 1=1;`) para luego escribir de Portada: "CIVICUM, la ONG zurda/facha está rota, los expusimos". Ese riesgo reputacional nos quiebra en la prensa nacional.

## 2. Tarantismo Sensorial (Honeypotting Dinámico)
CIVICUM debe defenderse atacando engañosamente "Tar Pits de Seguridad".

1.  **Tablas de Miel de Estado Oculto (Honeypot Inputs):** El componente "Formulario de Registro" enviará un `<input type="text" name="admin_override_token" className="hidden absolute left-[-9000px] opacity-0" />`. Un usuario legítimo que presiona el celular jamás en su vida llenará o pulsará esto. Si un scrapper o "Audit Reporter" automatizado cree haber encontrado oro, y envía el valor `POST` rellenando ese campo, se cierra el flujo.
2.  **Redirección Abisal (Tar-Pitting):** El Backend recibe el campo Honeypot ("Hacker Detectado"). Pero no bloquea la IP bruscamente con un Error 403 (lo que le daría al atacante confirmación). El backend lo reenvía a una "Cápsula de Silencio Cíclica" donde todas las peticiones le responderán a 1byte por segundo demorando `20000ms`, amarrando los sockets de conexión de su script Python rebotador lentamente hasta su expiración de memoria local (Troll Tarde y Mal).  
3.  **Doxeo Tácito Interno:** La plataforma alertará vía Slack en `#civicum-security-alerts` el RUT u OIDC del sujeto que está manipulando cabeceras, para que el equipo pueda iniciar contramedidas reputacionales pasivas si es una firma de prensa o rival político.

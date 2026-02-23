# Protección a Denunciantes (WhistleblowerProtocol) (Squad 217)

**Misión:** Garantías legales para que el denunciante no sea perseguido laboralmente.

## 1. El Riesgo de Represalia Laboral (Ley 20.205)
Un funcionario administrativo que detecta irregularidades licitatorias y sube un documento técnico en la plataforma no lo hará si CIVICUM transparenta su IP, su Usuario Logueado (ClaveÚnica) o su Mac Address. El gobierno de turno instruirá un despido encubierto. Sin protección garantizada a nivel software (Criptografía), no habrá soplones que rompan la base del iceberg de corrupción.

## 2. El "Canal Ámbar": Anonimato Legal Asegurado
Toda "Mesa de Trabajo" cruzada con la temática `Probidad` o `Fondo de Inversión` implementa una abstracción de identidad irreversible:

1.  **Identity Stripping:** El endpoint API corta la relación entre el Token JWT del Cliente y la inserción del Body de la Denuncia. El registro del log del servidor no asocia la IP HTTP con el archivo.
2.  **Disclaimer de Resguardo 20.205:** Al marcar el checkbox de `Denuncia Anónima Sensible`, el usuario es advertido de que la ONG no tiene llaves físicas de descifrado relacional. Si un fiscal exige la IP detrás de la denuncia (Subpoena), CIVICUM simplemente *no posee ese dato en la tabla transaccional*.
3.  **Destrucción Meta-EXIF:** Todo archivo adjunto en este formato sufre purga estricta en un lambda (Worker) antes de ser guardado en Cloudflare R2. Se limpia el Modelo del Teléfono, Software, Geolocalización Oculta del lente, todo dato que permita triangular al empleado.

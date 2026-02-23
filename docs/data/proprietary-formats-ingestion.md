# Formatos Propietarios y "Weaponized Incompetence" (Squad 287)

**Misión:** Municipio responde Transparencia con un .wpd antiquísimo o .rar con clave. 

## 1. El Riesgo del Muro de Basura Informática
Para defenderse de fiscalizaciones de Opendata (y de sistemas Scrappers como el de CIVICUM), Municipalidades corruptas "Cumplen" la Ley de Transparencia pasivamente, pero de la forma más obstruccionista posible: Respondiendo las Solicitudes con el Gasto de Personal comprimidos en Archivos de WordPerfect `.wps`, o un `.zip` partido en 40 pedazos subidos a Google Drive.
Si nuestra ingesta es de CSV o PDF rígido, los fallos abundarán. El funcionario dirá: *"Nosotros cumplimos, su robot de CIVICUM no sabe leer. Tema cerrado."* El periodismo fracasa. 

## 2. Trituración Multi-Parse (The Scrapper Blender)
Ante la ineficiencia forzada, trituración indiscriminada.

1.  **Pipeline de Conversión Universal:** Node Worker (o Cloudflare Worker) intercepta el Payload devuelto en crudo por la Municipalidad. Si el Mime-Type arcaico `.wps`, o `.rtf`, o `.doc` (Viejo) salta la barrera, un Dockerized Unoconv Interno LibreOffice Headless C-Worker captura ese archivo bizarro y lo fuerza brutalmente a una conversión pericial a `texto plano UTF-8` (Textraction cruda de binario).
2.  **Desarmado de RAR/ZIP Ofuscativo:** Si viene encapsulado, CIVICUM efectúa `unzip` recursivo hasta nivel de profundidad D=10. Extrae la foto jpg o png al final del hilo (la boleta de fondos), y a eso le aplica Claude-Haiku OCR Vision.  
3.  **Marcador de Probidad (Weaponization Flag):** Si una alcaldía entrega formatos inusuales o escaneados de máquina de escribir por más de 3 meses en pleno 2026. La plataforma marcará sus índices con Alarma. CIVICUM avisará algorítmicamente en el Feed Vecinal: *"La alcaldía gastó fondos, pero sube los datos en formato obsoleto para evadir escrutinios. Riesgo de Corrupción Informática Detectado."* Visibilizando la negligencia y mermando su aprobación.

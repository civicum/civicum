# El Oficio Circular Destructor (Squad 288)

**Misión:** Cambio en circular ministerial de medianoche invalida los formularios vigentes cívicos.

## 1. El Riesgo del "Breaking Change" Administrativo (The Drop)
Jueves 17:00 P.M. El Ministerio del Interior y Contraloría sacan nueva "Circular Interna de Probidad #804" y de un momento a otro todo Informe que se presente como denuncia de sobrepago a concejales **debe ir obligatoriamente** con anexo "Declaración Jurada en Formulario F-50 Autorizado Digitalmente".
CIVICUM no estaba avisado. Todos los reportes vecinales anti-corrupción que generemos este fin de semana para Civia-IA (basados en las planillas viejas) serán marcados por Fiscalía de Admisibilidad como `"Forma Errática o Incompleta"` y tirados al bote de basura por parte del Estado (Fallo Legal Sistémico Nacional a nivel PWA).

## 2. Auto-Adaptación y Gracia Burocrática (Grace Period Halt)

1.  **Crawler Legislativo Pre-Halt (Diario Oficial Listener):** Nuestro motor Scrapper (Puppeteer) escanea paralelamente la publicación diaria íntegra del `diariooficial.interior.gob.cl`. Si los Modelos NLP detectan un Hit Semántico sobre "Normativa / Formulario de Denuncia Municipal / Portal", las herramientas de formulario Cívico involucradas (*Alza la Voz, Denuncia Asfaltado*) se cierran en UI con un "Halt" preventivo de 72 horas para mantención. 
2.  **Abogado In-The-Loop Civia Alerta:** No improvisamos RAG de leyes a ciegas. Un mail salta al Rol 48 ("Abogado"). Él es quien debe interpretar la Circular, actualizar el "Prompt de Plantilla de Requerimiento .MD" Inmutable del sistema (Configuración RAG), forzar el nuevo anexo `F-50`, y commitearlo a The Git Tree (`git push`).  
3.  **Buffer de Retención Retroactivo:** Las denuncias "Pending" que ocurrieron antes del parche (Durante las horas de la zona oscura legal), no se archivan, sino que CIVICUM le avisa por Email Push a la persona: *"Tú denuncia es sólida, pero el Estado cambió las reglas hace 4 horas ("Traba burocrática"). Solo entra aquí, firma de nuevo este anexo con un click extra, y mantenemos vivo tu puesto en la fila investigativa sin dejarlo caer"* (Resiliencia Emocional Cívica).

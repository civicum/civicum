# Fatiga de Decisión del Formulario Cívico (Squad 319)

**Misión:** Un abuelo no sabe si un semáforo malo corresponde al departamento "Tránsito", "Obras" o "Vialidad" en la Municipalidad.

## 1. El Riesgo del Muro Burocrático Frontal (Cognitive Overload)
Las Apps de Municipalidades (Sosafe/Gob) suelen mostrar 25 íconos en la pantalla principal antes de dejarte hablar ("Vialidad, Seguridad, Basura, Ruidos..."). 
Por miedo a colocar su denuncia legal en la caja equivocada ("Me lo van a anular administrativamente"), el usuario gasta 3 minutos estresando el córtex pre-frontal decidiendo si "Una jauría de perros con sarna cerca del liceo" es un Caso de "Salubridad", de "Educación de Menores" o "Control de Fauna Menor" o de "Seguridad Antiasaltos".
Mucha gente se equivoca o se frustra y no sube su advertencia de asalto o peligro.

## 2. La Caja Océano Única (Magic Input / AI Parsing)
Los humanos hablan. La máquina (CIVICUM) encasilla.

1.  **Abolición de Categorías Front-End:** El Formulario Principal de CIVICUM no tiene Dropdowns (`<select>`) Obligatorios. Sólo un `<textarea placeholder="¿Qué pasó? Dinos con tus palabras">`.
2.  **LangChain Category Auto-Routing:** El abuelo escribe *"Perros asquerosos en el liceo B52 asustan a los niños y tiraron tarros podridos"*. Cuando hace Clic. Civia-AI Internamente le inyecta la Metadata `{"type": ["sanidad", "educacion_periferia", "seguridad"], "confidence": 0.99}`.
3.  **Confirmación de Aleta (Sutil Correction):** El usuario pasa a la página 2 y el sistema le dice suavemente: *"Te hemos asignado el camino de Zoonosis y Educación Municipal, ¿está bien?"*. El usuario aprieta Sí en un milisegundo aliviado de no haber tenido que hacer él el trabajo intelectual burócrata. Le trasladamos la carga cognitiva y estrés institucional de la especie humana hacia el Clúster de Silicon de Civia.

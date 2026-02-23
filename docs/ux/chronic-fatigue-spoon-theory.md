# Teoría de la Cuchara y Fatiga Crónica (Squad 215)

**Misión:** Minimizar clics y esfuerzo físico para completar tareas (Spoon Theory).

## 1. El Riesgo Físico de la Burocracia Digital
La "Teoría de la Cuchara" postula que personas con discapacidades invisibles (Fatiga Crónica, Fibromialgia, Lupus, Efectos Long-COVID) inician el día con una cantidad limitada de "Cucharas" descartables (Unidades de Energía Cognitiva y Física). 
Si el módulo "Alza la Voz" en CIVICUM exige: tomar una foto, subirla, escribir un título obligatorio de 50 letras, buscar latitud/longitud en un mapa caprichoso manual, seleccionar 3 categorías y justificar un RUT, el ciudadano gastará el 20% de la energía de su día en esto. **Añadir fricción en la UI es una barrera médica.**

## 2. Zero-Friction Flow (Micro-Tareas Asíncronas)
El costo cinético de interactuar con el Estado debe minimizarse.

1.  **Autocompletado Ubicuo:** El GPS se extrae desde el Metadata EXIF de la fotografía al hacer `upload()`, saltándose el paso de seleccionar en mapa.
2.  **Generación de Contexto (Civia Auto-Fill):** El usuario sube una foto de un semáforo roto. El LLM Visión asume el título ("Semáforo apagado/roto detectado") y asume la Categoría ("Tránsito/Seguridad"). Se reducen los campos de tecleo (Typewrite) a Cero.
3.  **Firma 1-Tap:** Todos los votos y adhesiones se realizan con el patrón `Click-to-Action` inmediato sin doble modal de confirmación (*¿Está seguro que quiere apoyar esto? Sí/No*). Todo voto cuenta con deshacer (Undo Toast 5 seg).

Menos clics = Más democracia inclusiva.

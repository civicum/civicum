# Centralismo Inconsciente y UX/UI (Squad 305)

**Misión:** Mostrar un Icono de "Metro subterráneo" confunde al ciudadano de Aysén que viaja en Lancha Bimodal.

## 1. El Riesgo del Neocolonialismo de Santiago (Santiaguismo IA)
El diseñador UX (Rol 10) que vive en Providencia y estudió en una burbuja, desarrolla los íconos de CIVICUM. 
Usa la Tarjeta BIP! para ejemplificar el "Transporte Público", usa los "Paraderos del Transantiago" de techo verde para referirse a la calle, usa íconos de edificios para ilustrar "Mi Cuadra". 
Cuando Juan, en Chiloé o Putre, o Punta Arenas abre CIVICUM intentando registrar que la barcaza al continente está rota, se encuentra con botones e instrucciones de "Edificios y Metro" ajenos a su cosmovisión y realidad. Siente instintivamente y lógicamente que "Esta App de la capital no está hecha para el Chile Rural, ni los pueblos, es otro engaño de Santiago para los santiaguinos". (Abandono Inmediato y Churn Social).

## 2. Inyección de Regionalismo Paramétrico Estricto (Local-First UX)
La interfaz de CIVICUM debe transmutar según la latencia de arraigo del usuario.

1.  **The "Chileno" Lexicon Mapper:** Una base de datos `i18n` (Internacionalización) es sobrecargada no de países, sino de MacroZonas Chilenas. El Componente Frontend `TransportIcon` lee las coordenadas (Loc: Magallanes). Pinta un Pingüino / Barcaza. Si lee Antofagasta (Norte Grande), pinta Bus / Terreno Desierto. El diseño deja de ser monolítico.
2.  **Destrucción del Metaphor Bias:** El Equipo de Contenidos y UX tiene un Linter Semántico en sus PRs `(Content-Linter)`. Expresiones o Iconografías como "Metro", "La Micro Amarilla", "Cordillera Nevada" (Arica no la ve nevada) están BANEADAS globalmente como metáforas universales civilizatorias en el código fuente. Se deben usar abstracciones ontológicas puras: "El Vehículo", "El Camino", "Cerro/Planicie".
3.  **Avatar de Descentralización:** Al hacer Onboarding (Inicio de la aventura Cívica), el primer formulario OBLIGATORIO pregunta *"¿Cómo se describe tu entorno físico? (Urbano / Campiña Sur / Borde Costero Norte)"*. El motor de Next.js renderiza todo el Dark Mode del ciudadano basado en Paletas de colores referenciales de esa respuesta (Azul Marino del Océano vs Ocre de Atacama). El Estado le habló desde su tierra, no desde el centro y la metrópolis.

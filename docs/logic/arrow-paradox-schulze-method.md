# La Paradoja de Arrow en Cabildos (Squad 331)

**Misión:** El sistema de "Rank-Choice" produce que A le gane a B, B le gane a C, y C le gane a A (Condorcet Cycle).

## 1. El Riesgo del Loop Democrático Infinito (Parálisis de Condorcet)
Un cabildo en Antofagasta debate 3 ideas para los fondos: `[A: Parque]`, `[B: Clínica]`, `[C: Escuela]`. Usan "Ranked Voting" en CIVICUM.
Los resultados de los 300 vecinos arrojan que las preferencias colectivas prefieren el Parque sobre la Clínica (A > B), la Clínica sobre la Escuela (B > C), ¡pero prefieren la Escuela sobre el Parque (C > A)! 
Las matemáticas (Teorema de Arrow) han roto la lógica. CIVICUM entra en pánico, el backend arroja "Empate Técnico Circular", y los $500 millones de pesos quedan congelados por 2 años en el banco municipal porque la comuna "No se pudo poner de acuerdo". La democracia perfecta colapsó sobre sí misma.

## 2. Inyección de Desempate Condorcet (Tideman/Schulze Method)

1.  **Erradicación del Voto Simple Mayoritario:** Prohibido el `First-Past-The-Post` en decisiones multi-opcionales complejas. CIVICUM usará exclusivamente grafos matemáticos dirimentes.
2.  **Edge-Resolution por Método Schulze:** Cuando el Backend de Next.js detecta un "Bucle Condorcet" (Ciclo inresoluble) en la cuenta de Votos de Drizzle, se detona The Schulze Algorithm Pipeline. La IA analiza el "Camino de mayor fuerza dde derrota" (The Strongest Path of Defeat).  
    Descubrirá que, aunque hay un bucle, la opción B venció a C por un margen "más violento y aplastante" que A venciendo a B. El algoritmo quiebra el eslabón más débil del bucle.
3.  **Transparencia de la Navaja Matemática:** Para evitar que la gente grite "Fraude", el Acta generada en PDF muestra literalmente el Grafo Euclidiano de Fuerza de Voto, explicando en simple: *La Paradoja Matemática se resolvió descartando el margen de victoria más estrecho (Empate Roto). Gana el Parque A.* La máquina salva a los hombres de su propia indecisión entrópica.

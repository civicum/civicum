# El Código Ético Líneas Adentro (Squad 298)

**Misión:** Revisión línea por línea de que no hay algoritmos discriminatorios ocultos.

## 1. El Riesgo de los Prejuicios Enterrados (Bias Pipeline)
Involuntariamente, el Data Engineer de CIVICUM implementó un filtro Anti-Spam (Fuzzy Scoring) que le da **-0.5 puntos de Relevancia** a las denuncias que vienen con graves faltas de ortografía o "Slang Callejero".
En el Frontend, eso se traduce en que "Las Veredas Rotas de Las Condes" (que fueron redactadas perfectamente por vecinos sin faltas de ortografía) rankean siempre primeras en el Header Público de la comuna. Mientras tanto "Me robaron el basurero cabros k wea aser" (Reporte de la población La Victoria), rankea último. La matemática invisibilizó la urgencia porque el código de la Inteligencia Artificial tenía sesgos de clase clasista.

## 2. Purgatorio del Score "Neutral"

1.  **Egalitarian Sorting Default (Cronológico Insobornable):** Queda tajantemente eliminado el "Ranked por IA/Interés" en el Feed predeterminado vecinal (El truco siniestro de Facebook e Instagram). El Feed primario de CIVICUM será matemática y llanamente `ORDER BY created_at DESC`. Lo más nuevo, se ve primero, haya sido escrito por un letrado o por un rapero callejero.
2.  **Reclamación Algorítmica (Git Explainability):** Cada vez que la plataforma aplique un castigo de visualidad (Shadowban por spam o rate limits), esa acción específica genera un Hash de Explicación en base de datos. Si el usuario reclama "¿Por qué ocultaron mi queja?", la plataforma expone el `Reason: Repeated 5 times in 1 min. Automated Rule N°802`. Zero Black-Box. La opacidad de la IA se erradica mediante trazabilidad de logs, asumiendo la justicia algorítmica.

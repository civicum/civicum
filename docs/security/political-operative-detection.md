# Detección del Operador Político (Squad 210)

**Misión:** Detección de operadores políticos pagados que manipulan encuestas locales.

## 1. El Riesgo del Acarreo ("Astroturf" Distrital)
Un candidato a Concejal paga a un "Puntero Político" (operador barrial) para ganar una "Mesa de Trabajo" digital sobre viviendas sociales. El operador convence a 50 miembros de su red clientelar que se instalen la PWA de CIVICUM en un solo día, apoyen el post del candidato y comenten consignas para simular "apoyo popular orgánico".

## 2. El Algoritmo de Firmas Sintéticas
El equipo Trust & Safety y Ciencia Política implementa la matriz de *Sybil Attack Detection*.

1.  **Velocity Check (Velocidad de Alistamiento):** Si una IP regional o cuadrante geográfico que venía sumando 1 usuario diario, levanta 50 altas nuevas en 2 horas, originadas por referidos cruzados, se dispara el *Shadow-Lock* a las analíticas de apoyo popular.
2.  **Análisis de Voto Bloque (Voting Bloc Similarity):** Civia calculará el Coeficiente de Jaccard en los votos de los usuarios de esa zona. Si 50 cuentas votan SI exacto a las mismas 10 propuestas y NO a las mismas 10 durante un periodo de 3 días, es matemáticamente imposible que sea opinión independiente.
3.  **Etiqueta Transparente (Banderín Rojo):** No bloqueamos cuentas (Censura Injusta). Pero, todas las votaciones afectadas incluyen un banner en UI: 
    > 📍 **Anomalía Comunitaria Analizada:** "El 90% de los votos de esta propuesta proviene de cuentas creadas en las últimas 48 horas bajo la misma zona geográfica de influencia. Esta validación cívica ha sido degradada en el ranking al Nivel de Confianza Bajo."

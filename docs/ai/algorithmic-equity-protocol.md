# Protocolo de Equidad Algorítmica (Squad E3)

**Squad:** 22. Escuadrón E3: Equidad Algorítmica  
**Misión:** Verificar que la IA no discrimine por comuna o nivel socioeconómico.  
**Responsables:** Evals IA, Riesgos Socio-técnicos, AI Safety, UX Researcher, ML Engineer.

## 1. El Riesgo de la "Priorización VIP"
Históricamente, los algoritmos priorizan datos de zonas ricas porque tienen "mejor calidad" o "más volumen". Civicum invierte esta lógica.

### Métricas de Equidad (Fairness Metrics)
Monitorizamos activamente:
- **Tasa de Respuesta por Comuna:** Si Vitacura tiene 90% y La Pintana 40%, el algoritmo se detiene.
- **Falsos Positivos en Moderación:** ¿Estamos borrando más reportes en lenguaje informal/flaite? (Ver auditoría Squad 181).

## 2. Auditoría de Bias en Embeddings
Los modelos de embedding (como OpenAI text-embedding-3) pueden asociar conceptos negativos a ciertos nombres o lugares.
- **Test de Asociación:** Verificamos si "delincuencia" está más cerca vectorialmente de "Puente Alto" que de "Las Condes".
- **Mitigación:** Si se detecta bias, se aplica "Debiasing Post-processing" o instrucciones explícitas en el Prompt de RAG.

## 3. Acceso Equitativo
La IA no puede ser solo para quienes escriben perfecto.
- **Soporte de Audio:** Civia debe entender audios de WhatsApp mal grabados y con ruido de fondo.
- **Tolerancia Ortográfica:** El sistema debe entender "oyio" como "hoyo" sin juzgar.

*Un algoritmo justo no trata a todos igual; trata a todos con la misma dignidad.*

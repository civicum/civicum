# Shadowban Monitoring KPI (Squad 185)

**Auditoría:** Roles 80 (Riesgos), 63 (Data Analyst), 56 (Moderation Policy), 41 (AI Safety), 61 (Transparencia)

## 1. El Riesgo del Ocio y el Silencio (Shadowban)
A diferencia de un borrado explícito, un *Shadowban* (Ocultamiento en las Sombras) es cuando la plataforma simula recibir tu reporte alegremente, pero el Algoritmo de Flujo, el RAG Engine o los Moderadores Humanos evitan distribuirlo a otros usuarios o categorizarlo como relevante. 
En entornos políticos, es la táctica más común de las inteligencias artificiales comerciales (sesgadas por "safety") y de autoridades que controlan herramientas digitales de participación ciudadana.

## 2. Dashboard de "Transparencia Activa de Impresiones"
CIVICUM requiere monitorear no solo métricas de ingreso, sino el embudo o *funnel de distribución* categorizado por tema, asegurando equidad algorítmica.

El Dashboard público de "Cuentas Claras" (F-61 Transparencia Activa) mostrará estos dos KPIs paralelos en tiempo real.

### KPI-A: Ratio de Ingreso Temático (Input)
*   De cada 100 reportes que llegan, ¿cuántos hablan de Medioambiente versus Corrupción Administrativa, Bacheo, o Luminarias?
*   *Ejemplo: Corrupción = 10% del total de ingresos a la base de datos.*

### KPI-B: Ratio de Distribución Visual Algorítmica (Output)
*   De cada 10.000 vistas o impresiones cargadas en las pantallas de todos los usuarios, ¿a qué categoría pertenecen esas cajas renderizadas?
*   *Ejemplo: Corrupción = Solo 1% de las impresiones en el DOM.*

## 3. Disparador de Alarma de Sesgo de Distribución
Si la diferencia del volumen porcentual de impresiones (KPI-B) es desproporcionadamente mucho menor (10 puntos base) que la cantidad de inputs reales de la ciudadanía (KPI-A) en una categoría sensible:

1.  Se dispara la bandera roja en `Sentry / Logflare` bajo el tag: `[ALERT-SHADOWBANNING-DETECTED]`.
2.  Debe revisarse el peso asimétrico del sistema de Karma, la sobre-penalización del bot de spam (IA Safety) o la posible manipulación humana de los Moderadores Nivel 3 y 4.

El Algoritmo debe reflejar el estrés real de la nación, no una versión blanqueada.

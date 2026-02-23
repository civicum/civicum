# Guía de Visualización No-Estigmatizante (Anti-Gueto Digital)

**Versión:** 1.0  
**Misión:** Evitar que los mapas de calor y la representación de datos de "Alza la Voz" o "Cuentas Claras" aíslen barrios, devalúen su percepción local o generen "zonas rojas" permanentes y perjudiciales (Escuadrón 153 - Casandra).

## 1. Des-Enfoque Positivo de Riesgos
- **Prohibido el Rojo:** Los mapas de calor de denuncias (e.g. basura, infraestructura, seguridad cívica) **NUNCA** deben usar degradados en color escarlata/rojo intenso, pues generan semántica de "peligro mortal o sangre".
- **Alternativa:** Usar tonalidades neutras, como morados/azules intensos o el espectro de cálidos de Terracota (naranjas terrosos) para indicar "Alta Actividad Cívica o Densidad de Reportes".

## 2. Mapa de Activos, No Solo de Déficits
Todo mapa de calor que visualice problemas en un barrio debe, **obligatoriamente**, permitir al usuario "apagar" la capa de problemas y "encender" la capa de soluciones o activos.
- Visualizar mesas de trabajo activas, problemas resueltos, fondos comunales invertidos, y sedes conectadas.
- La narrativa del mapa debe mutar de *"Esta zona es un peligro"* a *"Esta zona tiene vecinos muy participativos y alertas"*.

## 3. Difuminado Espacial Dinámico (Spatial Fuzzing)
- Para proteger la salud social de una calle o una vivienda, Civicum ofusca sistemáticamente las coordenadas exactas de las denuncias hasta un radio de 50 a 100 metros en la visualización pública.
- Jamás se permitirá hacer "zoom" profundo que revele si el problema proviene de "la casa #402" contra "la casa #404". Las visualizaciones se agregan a nivel de "cuadra" o "hexágono (H3)".

## 4. Decaimiento Temporal (Time Decay)
Los "puntos de calor" antiguos no pueden marcar permanentemente un barrio.
- Un reporte adquiere transparencia progresiva, volviéndose invisible en el mapa al cabo de **6 meses** si no ha recibido tracción, y cambiando de estado a "Fantasmal" si fue resuelto (historial pasivo, no alerta de calor).

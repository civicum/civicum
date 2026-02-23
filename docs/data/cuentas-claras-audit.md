# Protocolo de Auditoría Cuentas Claras (Squad B4)

**Squad:** 45. Escuadrón B4: Cuentas Claras  
**Misión:** Auditoría del módulo de transparencia.  
**Responsables:** Analista DIPRES, Data Analyst, Transparencia, Calidad Datos, Arquitecto Info.

## 1. La Verdad de la Planilla Excel
El módulo "Cuentas Claras" visualiza el presupuesto municipal y del proyecto.
- **Traza de la Fuente:** Cada gráfico debe tener un link directo al `.xls` o `.csv` original en el portal de Transparencia Activa del gobierno.
- **Sin "Maquillaje":** Si la data oficial es sucia o inconsistente, mostramos la inconsistencia, no la suavizamos. "Data Missing" es un dato en sí mismo.

## 2. Visualización No Engañosa
- **Ejes desde Cero:** Prohibido truncar el eje Y para exagerar diferencias menores.
- **Ajuste por Inflación:** Al comparar montos históricos, siempre mostrar valores en UF o ajustados por IPC.

## 3. Contextualización (El "¿Y eso es mucho?")
100 millones de pesos suenan a mucho dinero, pero puede ser el 0.01% del presupuesto.
- **Comparativa:** "Esto equivale a 2 camiones de basura" o "Esto es el 50% del presupuesto de Salud". Usar anclajes cognitivos reales.

## 4. Denuncia de Inconsistencia
Si detectamos que los números no cuadran con la realidad (ej: "Gasto en Plaza" vs "Plaza sigue rota"):
- Botón prominente: "¿Ves algo distinto en tu barrio?". Crowdsourcing de fiscalización.

*Los datos no mienten, pero los gráficos pueden mentir. Nosotros no.*

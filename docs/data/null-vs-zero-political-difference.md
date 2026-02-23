# Dicotomía del Null vs. Cero (Squad 285)

**Misión:** Diferenciar entre "No hay datos de plata" (Null) y "El presupuesto es cero". Diferencia Cívica Crítica.

## 1. El Riesgo de la Calumnia Numérica Automática
Si la Municipalidad de Santiago Este año oculta maliciosamente cuánto dinero le entregó a las ONG Aliadas a través de tratos directos, CIVICUM intentará extraer esa columna desde Hacienda. El campo no existe o arroja vacío.
Si el programador Junior en Node.js asigna ingenuamente una fallback variable tipo `presupuesto = data.monto || 0;`, el Dashboard Ciudadano renderizará con grandes letras de colores: `ONG Asignada: $0 pesos`.
Prensa Nacional explota diciendo: "Alcaldía abandonó su ONG". Todo es irreal. Hubo transferencias de cientos de millones pero el Estado se negó a documentarlo. CIVICUM los premió "blanqueándolos" con un Cero de Gasto por un fallo informático de `Truthy/Falsy Evaluation` en JS.

## 2. Rigurosidad Matemática Política y Nomenclatura Punitiva

1.  **Drizzle Types Estrictas:** Queda prohibido mezclar en el Schema Relacional `0` con `UNDEFINED` o `NULL`. Todas las Inversiones, Multas o Recuentos numéricos tendrán el campo SQL fijado fuertemente a `DEFAULT NULL`, no a Zero.
2.  **Penalización Visual del Null (Shame Badge):** Si en el Frontend (Next.js) un valor presupuestario llega como Real Cero Numérico (Ej, Se auditaron las cuentas y la inversión física se demostró Nula), el Front pinta la UI con Rojo y un `[Inversión: CLP $0]`. 
    Si llega el valor `NULL`, Next.js no pinta "Cero", no pinta "No Aplica". Pinta una barra "NEGRA/AMARILLA TIPO POLICíA" que dice a gritos obligatoriamente impreso: 
    *   `[⚠️ DATO OCULTADO / NEGATIVA ESTATAL]` o `[INCOGNOSCIBLE]`.
3.  **Voto de Castigo de Transparencia:** Cada `NULL` detectado sistemáticamente sobre campos Core, disminuye el 'Score de Claridad Cívica' del municipio, hundiendo al alcalde en el Ranking Nacional de Probidad CIVICUM, castigando con rigor informático la opacidad.

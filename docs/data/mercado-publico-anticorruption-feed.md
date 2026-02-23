# Mercado Público Anticorrupción (Squad 203)

**Misión:** Auditoría de datos de licitaciones. ¿Detectamos la corrupción en los datos crudos?

## 1. El Riesgo de Ignorar la Dinero Real
Una plataforma cívica que solo audita altoparlantes y eventos culturales, pero ignora contratos multimillonarios de recolección de basura o trato directo de construcción, es un simulacro de democracia decorativa.
El dinero está en Mercado Público.

## 2. El Pipeline de Integridad de Licitaciones
OpenClaw (El Worker ETL de CIVICUM) actuará como un vigilante pasivo de la API REST "api.mercadopublico.cl".

### Reglas de Extracción (ETL):
1.  **Polling Asíncrono no-abusivo:** Cron Job nocturno (3 AM CLT) configurado para importar únicamente las licitaciones (Trato Directo, Licitación Privada, Licitación Pública) adjudicadas el día anterior en las comunas donde CIVICUM tiene presencia activa.
2.  **Motor de Anomalías Civia:** Las resoluciones "Trato Directo" que superen el límite de 1,000 UTM (Unidades Tributarias Mensuales) serán pasadas por un filtro RAG que las contrastará contra la base de leyes de emergencia (Ley de Compras Públicas).
3.  **Vigilancia Comunitaria (El Output):** Si Civia encuentra una alerta heurística (ej: *Empresa creada hace 5 meses recibiendo trato directo por $500 millones en obras civiles*), el sistema emitirá una recomendación automática a los auditores ciudadanos en "Cuentas Claras" para que investiguen el RUT societario en el Diario Oficial.

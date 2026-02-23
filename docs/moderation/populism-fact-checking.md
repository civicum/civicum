# Protocolo Anti-Populismo y Fact-Checking (Squad 188)

**Auditoría:** Roles 04 (Honestidad), 57 (Deliberación), 62 (Presupuesto), 47 (Alfabetización), 75 (Comms)

## 1. El Riesgo de la Voluntad Absurda
Una herida clásica de la democracia digital no moderada es la viralización de iniciativas inviables. Si 50,000 personas en "Voto Ciudadano" exigen "Soterrar todo el cableado eléctrico de la comuna en 6 meses", y la plataforma lo valida como un "Mundo Deseado" oficial, el Municipio fracasará en cumplirlo porque el presupuesto total equivale a 15 años de recaudación.
El ciudadano culpará a la institución en vez de entender el límite material. Esto genera cinismo político.

## 2. Notas de Viabilidad Cívica (Civic Notes)
CIVICUM no borra las propuestas extravagantes (rompería la Transparencia y Libertad de Expresión F-02). Las *contextualiza* mediante la inyección de Realidad Financiera.

### A. RAG Presupuestario (DIPRES)
El índice vectorial de Civia (`pgvector`) está permanentemente ingestionando los reportes anuales de la DIPRES (Dirección de Presupuestos) y los Presupuestos Municipales oficiales.

### B. El Flujo de Verificación
Cuando un "Voto Ciudadano" (Iniciativa) supera el "Nivel de Tracción 2" (ej: >5% del padrón validado comunal):
1.  Civia corre un análisis de requerimiento material (Costing Analysis).
2.  Si Civia determina que el costo excede el 25% del margen discrecional del municipio, levanta una alerta amarilla.
3.  El Analista de Presupuesto (Rol 62) o Moderador Experto revisa la alerta IA.
4.  Se publica una **Community Note** dorada pineada al tope de la iniciativa:
    > **🏛️ Verificación de Viabilidad:** "El soterramiento propuesto tiene un costo referencial de $X Millones según mercado (Oficio X-2023). El presupuesto comunal para Obras Civiles 2026 es de $Y Millones. La propuesta es financieramente inviable en el corto plazo sin financiamiento FNDR o Bancario."
5.  El ciudadano puede seguir votando a favor de la "idea", pero con los ojos abiertos al dato duro. La frustración contra la institución baja drásticamente al externalizar la culpa a la escasez material.

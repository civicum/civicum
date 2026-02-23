# Zero-Knowledge Proofs: Voto Anónimo Exigente (Squad 245)

**Misión:** ¿Podemos probar que un voto es válido sin saber quién votó?

## 1. El Riesgo del Servidor Dios
La plataforma "Alza la Voz" en la etapa MVP registra: `Juan Pérez -> Votó 'A Favor' en Ley de Plazas`. Si un gobierno fascista o un narcotraficante extorsiona al líder de la plataforma para ver quién votó qué... el sistema tiene el mapeo 1:1. El concepto democrático del **Voto Secreto** está fracturado por diseño en bases de datos relacionales crudas.

## 2. Matemática del Sigilo (zk-SNARKs)
CIVICUM asume la responsabilidad criptográfica del Escrutinio de Identidad a futuro (Visión Técnica 2028).

1.  **Token Ciego:** En vez de que `votos_table` relacione el POST con el `user_id_fk`, el voto pasa a ser un "Aporte Validado pero Desconectado".
2.  **La Prueba zk-SNARK:** Cuando un usuario de la comuna 1 (RUT válido, Persona viva) emite un voto por "Voto en contra del alcalde", el frontend calcula matemáticamente un Zero-Knowledge Proof (ej. Circom/Groth16). La PWA le manda al Estado de CIVICUM un paquete de JSON que dice: *"Tengo un número RUN chileno válido y resido en Nuñoa, pero no te diré cuál es. Mi prueba matemática es que resolví la ecuación criptográfica de validación local (Token Mint), mi voto computa válido."*
3.  **Registro Irrepudiable:** CIVICUM acepta que el voto fue emitido por un ciudadano real, incrementa el contador de "A Favor", pero es técnicamente ciego para unirlo al email o nombre almacenado en Neon. 

Nos preparamos para el nivel máximo de disidencia garantizada.

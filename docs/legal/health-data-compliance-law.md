# Ley de Interoperabilidad en Salud (Squad 205)

**Misión:** Si a futuro integramos datos de consultorios, ¿cumplimos la Ley de Derechos?

## 1. El Riesgo Legal de Manejar Datos Médicos
Bajo la Ley N° 19.628 (Protección de la Vida Privada, Chile), la salud, patologías y discapacidades son **Datos Personales Sensibles**.
El riesgo aquí no es de Hackers o de Bases de Datos, sino de arquitectura de validación clínica. Si permitimos el consumo de APIs del MINSAL bajo la excusa de dar facilidades a la Junta de Vecinos (ej: *"Lista de hipertensos del barrio para compra cooperativa de medicamentos"*), CIVICUM necesitará certificaciones nivel Clínico (HIPAA equivalente chileno) de las cuales carece técnica, jurídica y financieramente (Zero-Cost).

## 2. Hard Stop de Telemedicina o Diagnóstico
Queda normado irrevocablemente bajo la arquitectura jurídica:
1.  **Prohibición de API MINSAL PII:** CIVICUM jamás consumirá APIs del Estado que arrojen fichas clínicas individuales, patologías Base o información psiquiátrica nominada de los votantes, previendo catástrofes de filtración.
2.  **Excepción Estadística Anonimizada (Open Data MINSAL):** Solo se permite el consumo asíncrono y la retransmisión de datos estadísticos o de interés público y utilitario, por ejemplo: Alertas Sanitarias Geo-referenciadas Públicas o Mapeo del Tiempos de Espera (Urgenciómetros) de los SAPUS de la comuna integrados visualmente en la plataforma sin requerir login del usuario.

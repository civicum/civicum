# Protocolo de Resiliencia ante Feedback Tóxico (Squad Turing-E)

**Squad:** 80. Escuadrón Turing-E: Feedback Loop Tóxico  
**Misión:** ¿La IA aprende de usuarios tóxicos? (Evitar caso Microsoft Tay).  
**Responsables:** ML Engineer, AI Safety, Calidad Datos.

## 1. Aprendizaje Diferido (Offline Learning)
La IA **nunca** aprende en tiempo real del usuario.
- **Proceso:** El feedback ("Thumbs down") y las correcciones del usuario van a una cola de revisión humana o sintética (LLM Judge) antes de entrar al dataset de fine-tuning.

## 2. Inmunidad al Trolling Coordinado
Si un grupo organizado (ej: 4chan) decide enseñar a Civia a ser racista enviando miles de ejemplos tóxicos:
- **Detección de Anomalía:** El sistema de ingestión de datos detecta picos de vocabulario ofensivo y congela la actualización del RAG/Modelo.

## 3. Olvido Selectivo
Si un dato tóxico se cuela en el Knowledge Base (RAG):
- **Herramienta de Cirugía:** Capacidad de borrar vectores específicos o documentos fuente y re-indexar sin tener que re-entrenar todo el modelo.

*Civia escucha a todos, pero solo aprende de los buenos ciudadanos.*

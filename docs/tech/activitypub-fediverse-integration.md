# Federación y ActivityPub (Squad 249)

**Misión:** Conectar Civicum con el Fediverso (Mastodon) para descentralizar la red.

## 1. El Riesgo de los "Jardines Vallados" (Walled Gardens)
Twitter (X) y Facebook murieron como ágoras democráticas limpias porque son monopolios cerrados de código propietario. 
Si CIVICUM crece, también aislará el debate barrial dentro de su propia App y Dominio, convirtiéndose en el mismo "Jardín Vallado" pero estatal o no-gubernamental. Si un vecino usa *Mastodon* o protocolos abiertos para opinar sobre la plaza, su voz no cruzará la frontera de CIVICUM.

## 2. ActivityPub como Puente Cívico Descentralizado
El ecosistema de CIVICUM debe entender estándares W3C.

1.  **Actor-Model Adoption:** Cada "Iniciativa Cívica" o "Mesa de Trabajo" adquiere una URI universalmente resoluble (ej: `@plaza-nunoa@civicum.cl`). 
2.  **Publicación Federated (Outbox):** Cuando el Alcalde publica un acta en una Mesa de Trabajo, el servidor Next.js emite un paquete JSON-LD a la bandeja de salida (ActivityPub Inbox) hacia los seguidores federados en otras instancias (ej. Instancia Mastodon de estudiantes chilenos). 
3.  **Restricción Estricta de Inbounds (Trolls Externos):** El protocolo ActivityPub **solo funcionará en modo "Send-Only"** o fuertemente parseado para reportes visuales neutros. CIVICUM prohibirá que identidades anónimas rusas en Mastodon logren crear "Alza la Voz" en San Miguel. Solo los RUT Validados localmente pueden "escribir" en la Base de Datos Transaccional (Derechos de Padrón Asimétrico).

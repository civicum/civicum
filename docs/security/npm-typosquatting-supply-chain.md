# Typosquatting en NPM (Squad 311)

**Misión:** Un voluntario instala malware al escribir mal `react-domm`.

## 1. El Riesgo del Envenenamiento Abierto
Como CIVICUM es Open Source, docenas de contribuyentes clonan el repositorio e instalan paquetes. Un atacante (quizás estatal) sube a NPMjs un paquete idéntico llamado `next-auht` (con la H corrida) o `clsx-civicum`. 
Un desarrollador junior novato, intentando aportar, se equivoca al tipear `npm install next-auht`. El paquete instala un Keylogger o un minero de criptomonedas, y peor aún, modifica silenciosamente el `package.json` de CIVICUM. Si un Revisor de Código no lo ve, el Pull Request entra a Máster. Vercel hace Build, y CIVICUM despliega Malware Nacional en los celulares de todo Chile.

## 2. Bloqueo de Cadena Estricta (Supply Chain Vaulting)

1.  **Strict Lockfile CI Drop:** El archivo `pnpm-lock.yaml` (CIVICUM usará PNPM por su rigidez de enlaces duros) es la Biblia Sagrada. La Integración Continua (Github Actions) corre `pnpm install --frozen-lockfile`. Si el CI detecta incluso 1 byte de variación en el árbol de dependencias no pre-aprobado criptográficamente por una auditoría manual del Lead Architect, el Build truena (`Exit code 1`) matando el Release Pipeline.
2.  **Socket.dev Deep Integration:** Implementación forzosa en CI del Scanner `Socket.dev` (O en su defecto un Scanner FOSS NPM Audit). Esta IA no revisa "Vulnerabilidades Antiguas". Revisa "Comportamientos Raros" (Ej: *Este paquete instaló un script post-install que trata de leer el archivo `/etc/shadow` o hacer un Curl a Rusia*). Bloqueo Inmediato.
3.  **Prohibición de Installers Ciegos (`npm i -g`):** Ningún paso del Dockerfile oficial de CIVICUM corre instalaciones indiscriminadas directas de NPM sin fijarlas a un `SHA-512 Resolution Hash`. Nadie inyecta código a los chilenos sin revisión ocular.

# Reglas de Moderación Clickbait (Squad 184)

**Auditoría:** Roles 56 (Moderation Policy), 07 (UX Writer), 51 (UGC), 05 (Reputacional), 76 (Growth)

## 1. El Riesgo de Degradación
Si el Feed de "Alza la Voz" o "Voto Ciudadano" premia las interacciones independientemente del contenido cualitativo, los usuarios (buscando Karma) redactarán reportes estilo "MIRA LO QUE NOS OCULTA EL ALCALDE (TE VAS A ENOJAR!!!)".
Esto empujaría los problemas cívicos reales y bien redactados al final del feed, convirtiendo a CIVICUM en un tablón hiper-emocional estilo tabloide, alejando a la ciudadanía centrada.

## 2. Bloqueadores Técnicos en el Origen (Frontend)
El formulario de ingreso prohíbe explícitamente y de raíz la estructura Clickbait. El componente `<Input>` Title en React verificará en tiempo real:
*   `max-length=60`: Titulos largos son truncados.
*   `Caps-Lock Check`: Se prohíbe usar texto exclusivamente en MAYÚSCULAS para títulos. (Ej: Regex que bloquee si >60% del texto es Uppercase).
*   `Ban de Símbolos`: Bloqueo de uso excesivo sintáctico de "!!!", "???", o "(URGENTE)".

## 3. Protocolo de Re-Escritura Desapasionada
La moderación de clickbait **no censura** el reporte ciudadano. El problema a denunciar puede ser real y grave.  
La táctica es despojarlo de la pirotecnia para validarlo dentro de la cultura cívica:

Los "Moderadores Ciudadanos Nivel 3" (Rol de Confianza, F-07) tienen un botón de `Neutralize Title`.
Al usarlo:
1.  El título sensacionalista pasa por un sub-modelo ligero (ej: Workers AI - Mistral-7B).
2.  El título es convertido a lenguaje procesal y descriptivo.
    *   *De:* "¡EN LA ESQUINA PASAN COSEANDO Y EL ALCALDE NO HACE NADA!!!"
    *   *A:* "Denuncia reiterada de inseguridad delictual en intersección de Calles X con Y".
3.  El postre preserva su número de votos en el algoritmo y el cuerpo descriptivo que el ciudadano detalló. La red permanece limpia y seria.

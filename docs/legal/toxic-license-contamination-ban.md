# Licencias Contaminantes Extrañas (Squad 312)

**Misión:** Rechazar librerías con claúsulas legales "Do no evil" que quiebran el OpenSource.

## 1. El Riesgo de la Bomba Legal Ambígua
CIVICUM está licenciado bajo `AGPLv3` (Apertura Extrema Forzosa). Pero un programador usó una hermosa librería secundaria para dibujar mapas que usaba la famosa `"JSON License"`. Históricamente, esa licencia dice: *«The Software shall be used for Good, not Evil».*
¿Quién define "Maldad"? ¿Si el Fiscal Nacional o el Gobierno de Turno odian CIVICUM, pueden ir a Tribunales Internacionales demandando a la ONG argumentando que la aplicación "Es Evil (Mala)" para el país? Al incluir esa librería minúscula, ensuciamos nuestra AGPLv3, volvimos el software propietario o ilegal para uso civil, y nos abrimos a demandas de Copyright y Cese Legal por culpa de una talla de un gringo hace 15 años.

## 2. Inquisición de Licencias en el Pipeline (License-Fencing)

1.  **Fossa / Tidelift Block (Automated License Scanner):** Un Worker de `License-Checker` escanea recursivamente las profundidades D-9 del árbol NPM en cada Pull Request. 
2.  **Lista Blanca Estricta (The Pure List):** CIVICUM tiene un filtro que SOLO permite: `MIT`, `Apache-2.0`, `BSD-2/3`, `ISC`, `GPLv2/v3`, y `AGPL`. Cualquier dependencia que incluya algo como `WTFPL` (Inviable legalmente en Chile), `Creative Commons Non-Commercial` (Quiebra compatibilidad FOSS) o `Proprietary`, es expulsada salvajemente mediante un hook de Git antes del Merge.
3.  **Auditoría de Inmunidad Estatal:** Como CIVICUM busca influir al Estado, necesita ser intachable intelectualmente. Todo el repositorio se compromete a no heredar ni 1 solo archivo GPL sin firmar los Derechos de Autor, impidiendo que el Estado use un error de patente de Software para tumbar el flujo democrático.

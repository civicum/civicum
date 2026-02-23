# Normalización de Direcciones Mutantes (Squad 281)

**Misión:** "Av. Providencia 123" vs "Providencia #123". ¿CIVICUM une las quejas?

## 1. El Riesgo de la Dilución de Crisis
Una cañería estalla en "Avenida Matta con San Diego". Vecinos furiosos envían 10 reportes distintos a CIVICUM, buscando alcanzar los 10 Votos necesarios para detornar una Alerta Alcaldicia Amarilla automática.
Pero cada vecino escribió la calle diferente: "Av. mata", "Avenida matta 123", "Esq san diego av matta". La base de datos asume que son 10 incidentes aislados en puntos distintos con 1 voto cada uno. La Alerta Amarilla nunca se dispara. El problema real está oculto bajo un velo de Inconsistencia Sintáctica, salvando a la municipalidad ineficiente.

## 2. Ingestión Rígida Geoespacial (Snap-to-Grid)
El usuario no sabe dónde está parado, sus coordenadas y el SIG (GIS) sí.

1.  **Muerte del Text-Input Callejero:** El formulario Civil para georeferenciar problemas NO posee campo de texto escrito a mano. El vecino solo puede soltar un "Pin" (Marcador) en el mapa de Mapbox/Google Maps. Reverse Geocoding asíncrono.
2.  **Hexágonos H3 de Rejilla (Uber H3 Index):** Para evitar que el Pin del vecino 1 ("Matta") quede a 15 metros del Pin del vecino 2 ("San Diego"), CIVICUM abandona las direcciones de correo per se. A nivel de Backend PostGIS, la comuna se pre-divide en hexágonos de resolución 10 (aprox. la mitad de una cuadra). Si la denuncia A y denuncia B caen dentro del mismo Hexágono H3 en un rango de fecha < 48 horas, se fusionan algorítmicamente en un solo `Cluster_IncidentID`. Los 10 votos solitarios se humanizan sumando `10 apoyos`, y la sirena municipal Amarilla suena.

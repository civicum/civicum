# Supervivencia al Throttling de Telcos (Squad 255)

**Misión:** La telco estrangula la red rural a 64kbps. ¿El upload sobrevive?

## 1. El Riesgo del Paquete Prepago Mermado (Data Cap Asphyxiation)
El 60% del país que usa prepago frecuentemente "agota su bolsa de gigas". Las Telcos (WOM, Claro) por ley de Neutralidad reducen su velocidad simétrica a irrisorios 64kbps (Banda E de estrangulamiento).
Si la plataforma CIVICUM requiere "Foto obligatoria para denunciar microbasural" y un celular toma fotos de 12 Megapíxeles en HDR de 8MB, a 64kbps tardará unos 18 minutos ininterrumpidos en subirse. El Request HTTP morirá asfixiado por el Gateway Timeout (504). El poblador más humilde, en el momento que más necesita a CIVICUM, quedará silenciado por la telco.

## 2. Compresión de Client-Side Brutal (JPEG Asalto)
Prohibición de enrutamiento "Server-Side Transform". CIVICUM asume que la red es enemiga hostil.

1.  **Canvas Image Reduction en JS Local:** Cuando el usuario elige la foto del basural, aún no sube nada (No hay Payload de red). Ocurre una interpolación local (Browser API `canvas-to-blob` o compresor WASM Squoosh nativo).
2.  **Regla de Exterminio 200KB:** El archivo de 8MB se redimensiona a 800x600px estricto y baja su calidad `.webp` progresiva hasta empujar su peso neto atado a no más de 250 KB (El límite empírico para que pase bajo la barrera del "Timeout" en un throttling de 64kbps en menos de 20 segundos reales).
3.  **Renuncia al 4K Social:** CIVICUM no es Instagram. La Municipalidad no necesita ver la resolución 4K HDR de la basura en la calle para confirmar la infracción de salubridad. Solo importa el Timestamp EXIF y la comprobación pericial borrosa de existencia fáctica. El pixel pierde prioridad sobre el bit entregado a la democracia.

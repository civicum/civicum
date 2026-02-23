# Código QR Offline Dinámico (Squad 322)

**Misión:** Generar un QR con el reporte encriptado para que otro lo escanee y lo suba (Mule Upload).

## 1. El Riesgo de la Asfixia del Campamento Remoto
En una asamblea en un Campamento (Toma de terreno, Viña del Mar Alto), 40 dirigentes se juntan a firmar el "Peticionario de Alcantarillado". Hay cero cobertura de red en el cerro. 
El líder redacta todo en la App Offline, pero no confía en esperar a que *"Su teléfono tenga Internet"* porque se le descarga la batería en unas horas. Si el teléfono muere antes de llegar al plan de la ciudad, los 40 apoyos valiosos se pierden en el silicio frío de la memoria RAM fundida. 

## 2. Inyección Óptica de Paquete Transaccional (The Physical Payload)

1.  **Transmutación de JSON a Matriz (QR Generation):** Cuando la App en modo "Desconectado" guarda un acta con 40 firmas locales asíncronas, el sistema usa `Brotli (Compresión Extrema)` y luego empaqueta el String del JSON de Base 64.  
2.  **Visión de Parpadeo (Animated QR):** Como el peso del acta supera los 3KB (Límite normal de un QR), la pantalla del celular del dirigente comienza a Parpadear una cadena de 15 CÓDIGOS QR en sucesión cíclica (Animated QR). 
3.  **La Mula Cívica (Optical Air-Gap Transfer):** El vecino delegado que bajará a la Municipalidad (La "Mula" de datos), saca la cámara de su celular con CIVICUM y graba por 5 segundos la pantalla del dirigente. Su CIVICUM escanea las 15 tramas QR y recompone mágicamente el Hash original comprimido.  El acta cívica saltó en el aire sin Bluetooth, sin Cables, solo de forma óptica (Air-Gapping Militar llevado a la protesta). La mula baja la alcaldía y sube el acta bajo los plazos legales absolutos.

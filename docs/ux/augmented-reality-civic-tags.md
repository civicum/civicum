# Tags Cívicos en Realidad Aumentada (Horizonte 247)

**Misión:** Ver etiquetas de reportes sobre la calle con la cámara del celular.

## 1. El Riesgo de la Pesadilla Computacional (AR Bloat)
Visión a futuro: Si CIVICUM implementa un módulo visual "Pokémon Go Cívico" donde las personas pasean por sus barrios y ven los decretos o quejas flotando en Realidad Aumentada (AR), inyectar motores masivos `Three.js` o Unity ARFoundation colapsará el proyecto central de Next.js empujando la PWA a tamaños gigantes de payload (30 MB+). Quemará baterías de Litio de celulares ancianos (Low-End limit). El costo socio-técnico superará el provecho.

## 2. Paradigma del Visor Lento (CSS 3D / WebXR Minimal)
Si la "Realidad Aumentada Ciudadana" despega, será bajo parámetros austeros.

1.  **Módulo Separado (Lazy Loading Extremo):** El código JavaScript que lee la brújula, giroscopio y cámara del dispositivo (WebXR Device API) se excluye de CIVICUM Core. Solo se descarga "On-Demand" con un Spinner si, y solo si, el vecino presiona conscientemente el Botón `[Modo Visor AR]`.
2.  **Marcadores Pasivos vs. SLAM:** No utilizamos Inteligencia Artificial de Mapeo Computacional Visual pesado. Usamos trigonometría de latitud/longitud cruda (Compass GPS Orientation). CIVICUM proyecta elementos 2D HTML limpios con cálculos de perspectiva vía `CSS transform: rotate3d(...)` montados sobre la transmisión cruda del lente `getUserMedia()`. Costo de cálculo casi Cero.
3.  **Auditoría de Consentimiento Óptico:** Alarma roja a grabaciones ilegales: El Visor de AR tiene prohibida la transmisión en vivo por WebRTC a servidores. La imagen existe exclusivamente en la memoria efímera de la pantalla del ciudadano y muere al cerrar el módulo. No grabamos ventanas ni matrículas cruzadas.

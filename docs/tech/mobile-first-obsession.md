# Protocolo Mobile First Obsesivo (Squad A1/C4)

**Squad:** 8. Escuadrón A1: Mobile First & 10. Escuadrón C4: Performance Low-End  
**Misión:** Optimización extrema para pantallas pequeñas, touch targets y redes 3G lentas.  
**Responsables:** Low-end Lead, Frontend Lead, Performance, Accesibilidad, UX.

## 1. El Dispositivo de Referencia
No desarrollamos para iPhone 15 Pro. Desarrollamos para:
- **Dispositivo:** Samsung Galaxy J7 (2016) o similar.
- **Red:** 3G Rural con 300ms de latencia y 5% packet loss.
- **Pantalla:** Rota (simulada) en esquinas.

## 2. Reglas de Interfaz (The Thumb Zone)
1.  **Botones Gordos:** Mínimo 48x48dp reales. Si mi abuela no le achunta, es bug.
2.  **Bottom Navigation:** Nada importante va arriba (zona inalcanzable con una mano).
3.  **Input Types:** Usar `type="tel"` para números, `type="email"` para correos. No hacer sufrir al teclado.

## 3. Performance Budget (Presupuesto de Rendimiento)
- **JS Bundle:** Máximo 150KB gzipped inicial.
- **First Contentful Paint (FCP):** < 1.5s en 3G.
- **Time to Interactive (TTI):** < 3.0s en J7.

### El Pecado de la Hidratación
Si la app tarda más de 300ms en ser interactiva después de verse, se considera rota. Preferimos HTML estático a esqueletos de carga infinitos.

## 4. Imágenes y Medios
- **WebP/AVIF:** Obligatorio.
- **Lazy Loading:** Todo lo que no está en viewport no se carga.
- **Compresión Agresiva:** Las fotos de denuncia se comprimen en el cliente (browser) antes de subir.

*La velocidad es la característica de accesibilidad más importante.*

# Protocolo de Viralidad Técnica (Open Graph) (Squad Distribución-4)

**Squad:** 134. Escuadrón Distribución-4: Shareability (Viralidad)  
**Misión:** ¿Cómo se ve un reporte cuando se comparte en WhatsApp/Instagram? (OpenGraph).  
**Responsables:** Growth, UI Visual, Frontend, Comms.

## 1. La "Tarjeta" es el Producto
Cuando alguien pega un link de Civicum en WhatsApp, no puede salir un logo genérico.
- **Imagen Dinámica:** Generamos on-the-fly (`og:image`) una imagen que contiene: Título del Reporte + Mapa con Pin + Estado ("🔴 URGENTE" o "✅ RESUELTO").
- **Título Clickbait-Ético:** "¡Vecinos de Maipú lograron tapar el bache de Av. Pajaritos!" (En vez de "Reporte #5432").

## 2. Deep Linking Inteligente
- Si el usuario tiene la app instalada, el link abre la app directo en el reporte.
- Si no, abre la Web PWA con un botón flotante "Apoyar esta causa" (que pide login después de interactuar, no antes).

## 3. "Share-to-Status"
- Botón nativo para compartir el logro en "Estados de WhatsApp" o "Historias de Instagram" con un diseño vertical pre-renderizado atractivo, no solo un link plano.

*Si no se ve sexy en el grupo de vecinos de WhatsApp, no existe.*

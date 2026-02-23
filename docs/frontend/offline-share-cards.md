# 📤 GENERACIÓN OFFLINE DE CARDS COMPARTIBLES

**Versión:** 1.0  
**Última actualización:** 6 Febrero 2026  
**Soluciona:** Observación G2-EXT-1  
**Prioridad:** P3

---

## 🎯 Objetivo

Permitir generar cards compartibles sin conexión usando Canvas API.

---

## 🔧 Implementación

### Canvas Local

```typescript
async function generateShareCard(promesa: Promesa): Promise<Blob> {
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 630;
  const ctx = canvas.getContext('2d');
  
  // Background
  ctx.fillStyle = getColorByStatus(promesa.estado);
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Logo (cached)
  const logo = await getCachedLogo();
  ctx.drawImage(logo, 20, 20, 48, 48);
  
  // Título
  ctx.font = 'bold 36px Inter';
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText(promesa.titulo, 100, 80);
  
  // Estado
  ctx.font = '24px Inter';
  ctx.fillText(promesa.estado, 100, 130);
  
  // URL + QR
  const qr = await generateQR(`civicum.cl/p/${promesa.id}`);
  ctx.drawImage(qr, canvas.width - 100, canvas.height - 100, 80, 80);
  
  // Fecha
  ctx.font = '16px Inter';
  ctx.fillText(new Date().toLocaleDateString('es-CL'), 20, canvas.height - 20);
  
  return new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
}
```

### Cache de Assets

```typescript
const SHARE_ASSETS = [
  '/images/logo-white.png',
  '/fonts/Inter-Bold.woff2',
];

// Pre-cache en Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('share-assets-v1').then(cache => 
      cache.addAll(SHARE_ASSETS)
    )
  );
});
```

### Web Share API

```typescript
async function shareCard(promesa: Promesa) {
  const blob = await generateShareCard(promesa);
  const file = new File([blob], 'promesa.png', { type: 'image/png' });
  
  if (navigator.share) {
    await navigator.share({
      title: promesa.titulo,
      text: `Mira esta promesa: ${promesa.titulo}`,
      files: [file],
    });
  } else {
    // Fallback: download
    downloadBlob(blob, 'promesa.png');
  }
}
```

---

*Documento generado para cerrar Observación G2-EXT-1*

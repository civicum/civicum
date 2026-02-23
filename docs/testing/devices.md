# 📱 MATRIZ DE DISPOSITIVOS DE TESTING

**Versión:** 1.0  
**Última actualización:** 6 Febrero 2026  
**Soluciona:** Observación A1-1

---

## 🎯 Dispositivos de Referencia

### Gama Alta (Baseline de Diseño)
| Dispositivo | RAM | Pantalla | OS | Prioridad |
|-------------|-----|----------|-----|-----------|
| iPhone 14 Pro | 6GB | 6.1" | iOS 16+ | P0 |
| Samsung Galaxy S23 | 8GB | 6.1" | Android 13+ | P0 |
| Pixel 8 | 8GB | 6.2" | Android 14 | P1 |

### Gama Media (Target Principal Chile)
| Dispositivo | RAM | Pantalla | OS | Prioridad |
|-------------|-----|----------|-----|-----------|
| Samsung Galaxy A54 | 6GB | 6.4" | Android 13 | P0 |
| Xiaomi Redmi Note 12 | 4GB | 6.67" | Android 13 | P0 |
| Motorola Moto G53 | 4GB | 6.5" | Android 13 | P1 |

### Gama Baja (Crítico para Inclusión - NUEVO)
| Dispositivo | RAM | Pantalla | OS | Prioridad |
|-------------|-----|----------|-----|-----------|
| **Samsung Galaxy A03** | **2GB** | 6.5" | Android 11 | **P0** |
| **Xiaomi Redmi 9A** | **2GB** | 6.53" | Android 10 | **P0** |
| **Motorola Moto E6 Play** | **2GB** | 5.5" | Android 9 | **P1** |
| Huawei Y5 2019 | 2GB | 5.71" | Android 9 | P2 |
| Samsung Galaxy J2 Core | 1GB | 5.0" | Android 8 (Go) | P2 |

---

## ⚠️ Criterios de Aceptación por Gama

### Gama Baja (2GB RAM)
- [ ] FCP (First Contentful Paint) < 3s en 3G
- [ ] TTI (Time to Interactive) < 5s en 3G
- [ ] Sin crashes con 10+ tabs abiertas
- [ ] Modo offline funcional sin degradación
- [ ] Memoria heap < 150MB en uso normal

### Gama Media (4GB RAM)
- [ ] FCP < 2s en 4G
- [ ] TTI < 3s en 4G
- [ ] Animaciones a 60fps
- [ ] Modo offline + sync sin lag

### Gama Alta (6GB+ RAM)
- [ ] FCP < 1.5s
- [ ] TTI < 2s
- [ ] Experiencia completa sin restricciones

---

## 🧪 Checklist de Testing por Dispositivo

```markdown
## [Nombre Dispositivo] - [Fecha]
- [ ] Instalación PWA
- [ ] Navegación entre módulos
- [ ] Carga de mapas (PostGIS)
- [ ] Formularios complejos
- [ ] Modo offline (desconectar WiFi)
- [ ] Sync post-reconexión
- [ ] Uso de cámara (si aplica)
- [ ] Notificaciones push
- [ ] Memoria después de 30min uso
```

---

## 📊 Distribución de Mercado Chile (Referencia)

| Segmento | % Mercado | Dispositivo Típico |
|----------|-----------|-------------------|
| Gama Alta | ~15% | iPhone, Samsung S |
| Gama Media | ~50% | Xiaomi, Samsung A |
| Gama Baja | ~35% | Samsung A03, Redmi 9A |

**Fuente:** Estimación basada en estudios de mercado móvil Chile 2024

---

*Documento generado para cerrar Observación A1-1*

# 🏭 PROTOCOLO UX PARA ZONAS DE SACRIFICIO

**Versión:** 1.0  
**Última actualización:** 16 Febrero 2026  
**Escuadrón:** 71 — Mapuche-1: Zonas de Sacrificio  
**Soluciona:** M1-1, M1-2

---

## 🎯 Problema

¿Cómo sirve CIVICUM en Quintero, Puchuncaví, Coronel, Tocopilla? Comunidades en crisis ambiental crónica con urgencia real, desconfianza institucional total y riesgo de represalias.

---

## 🔴 HALLAZGO M1-1: Sin UX Adaptada para Crisis Ambiental

**Problema:** D8 (Medioambiente) existe como dominio cívico y hay routing a SMA/Seremi Salud, pero no hay un flujo de reporte urgente para emergencias ambientales (nubes tóxicas, derrames, olores).

**Solución: Flujo "Alerta Ambiental"**

### Categoría especial en Alza la Voz
```
🚨 ALERTA AMBIENTAL (botón rojo, visible en Home si GPS en zona de sacrificio)

PASO 1: ¿Qué está pasando?
  ○ Olor fuerte / gas
  ○ Humo / nube visible
  ○ Agua contaminada
  ○ Derrame / residuo
  ○ Ruido industrial extremo
  ○ Otro

PASO 2: ¿Cuándo empezó?
  ○ Ahora mismo
  ○ Hace menos de 1 hora
  ○ Hace más de 1 hora

PASO 3: Foto/Video (opcional) + Ubicación (auto GPS)

PASO 4: ¿Afecta tu salud?
  ○ Sí, me siento mal (mareo, náusea, irritación)
  ○ No directamente, pero estoy preocupado/a

[ENVIAR ALERTA] → Prioridad máxima en el sistema
```

**Diferencias vs. reporte normal:**
| Aspecto | Reporte normal | Alerta ambiental |
|---------|---------------|------------------|
| Prioridad | Cola normal | Inmediata — top del feed comunal |
| Escalamiento | Verde→amarillo→rojo (15 días) | Automático a SMA + Seremi Salud en 24h |
| Correlación | Individual | Agrupa alertas <2km en <6h como "evento" |
| Notificación | Solo comuna | Push a todos los usuarios en radio 5km |
| Evidencia | Texto + foto | Foto + video + timestamp + GPS preciso |

### Comunas de zona de sacrificio (lista inicial)
```
ZONE_SACRIFICE_COMMUNES = [
  'Quintero', 'Puchuncaví', 'Concón',  // Bahía Quintero
  'Coronel', 'Hualpén',                 // Biobío
  'Tocopilla', 'Mejillones',            // Antofagasta
  'Ventanas',                           // Histórica
];
// Feature flag: SACRIFICE_ZONE_MODE
// Si GPS del usuario está en estas comunas → activar interfaz especial
```

---

## 🟠 HALLAZGO M1-2: Sin Protección Especial para Reportantes en Zonas de Sacrificio

**Problema:** Reportar contaminación industrial puede generar represalias de empresas o autoridades locales cooptadas. La seguridad percibida (PsiG) no es suficiente — se necesita protección reforzada.

**Solución: Modo "Escudo Reforzado" para Zonas de Sacrificio**

| Protección | Implementación |
|-----------|---------------|
| Anonimato por defecto | En zonas de sacrificio, el toggle anónimo está ON por defecto |
| Sin geolocalización exacta del reportante | Solo se publica ubicación del EVENTO, no del usuario |
| Fotos sin EXIF | Stripping automático de metadata de fotos (ya existe pero verificar) |
| Agrupación | Reportes individuales se muestran como "evento comunitario" (no un solo denunciante) |
| Correlación temporal | Si 3+ alertas en <6h en <2km → "Evento confirmado por múltiples fuentes" |
| No attribution | Nunca decir "Juan reportó", sino "N vecinos reportaron" |

**Microcopy zona de sacrificio:**
```
"Sabemos que reportar aquí es difícil. Tu identidad está 
protegida. Este reporte se sumará como parte de un evento 
comunitario, no como denuncia individual."
```

---

*Documento generado para Escuadrón 71 Mapuche-1. Resolución M1-1 + M1-2.*

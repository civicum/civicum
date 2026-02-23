# 🔄 WEBHOOK BCN PARA ACTUALIZACIONES CONSTITUCIONALES

**Versión:** 1.0  
**Última actualización:** 6 Febrero 2026  
**Soluciona:** Observación E1-1

---

## 🎯 Objetivo

Automatizar detección de cambios constitucionales desde BCN.

---

## 📡 Fuentes de Datos

| Fuente | URL | Formato |
|--------|-----|---------|
| BCN RSS | https://www.bcn.cl/rss/leyes | RSS/Atom |
| Ley Chile | https://www.leychile.cl/ | Web scraping |
| Diario Oficial | https://www.diariooficial.interior.gob.cl/ | PDF |

---

## 🔧 Implementación

### Cron Job (Diario)

```typescript
// jobs/constitution-sync.ts
export async function syncConstitution() {
  // 1. Fetch RSS BCN
  const updates = await fetchBCNRss();
  
  // 2. Filtrar cambios constitucionales
  const constitutionalChanges = updates.filter(
    u => u.categories.includes('Constitución')
  );
  
  // 3. Si hay cambios, alertar
  if (constitutionalChanges.length > 0) {
    await notifyLegalTeam(constitutionalChanges);
    await createUpdateTicket(constitutionalChanges);
  }
  
  // 4. Log
  log('info', 'Constitution sync completed', {
    checked: updates.length,
    changes: constitutionalChanges.length
  });
}
```

### Alerta a Equipo Legal

```markdown
**Asunto:** 🚨 Cambio constitucional detectado

**Fuente:** BCN RSS
**Fecha publicación:** [fecha]
**Título:** [título]
**URL:** [url]

**Acción requerida:**
1. Revisar cambio
2. Actualizar base de conocimiento Civia
3. Validar respuestas afectadas
```

---

## 📅 Schedule

| Acción | Frecuencia | Responsable |
|--------|------------|-------------|
| Sync RSS | Diario 06:00 | Automático |
| Revisión cambios | Según alerta | Legal |
| Update Civia | Según revisión | Content |

---

*Documento generado para cerrar Observación E1-1*

# 📊 PROYECCIÓN DE SCALING Y LÍMITES MAU

**Versión:** 1.0  
**Última actualización:** 6 Febrero 2026  
**Soluciona:** Observación F2-1

---

## 🎯 Límites por Tier Vercel

| Tier | MAU Límite | Bandwidth | Funciones | Costo |
|------|------------|-----------|-----------|-------|
| Hobby | 10,000 | 100GB | 100K exec | $0 |
| Pro | 100,000 | 1TB | 1M exec | $20/mes |
| Enterprise | Sin límite | Negociable | Negociable | Custom |

---

## 📈 Proyección 12 Meses

| Mes | MAU Proyectado | Tier Requerido | Acción |
|-----|----------------|----------------|--------|
| M1 | 500 | Hobby | — |
| M3 | 2,000 | Hobby | — |
| M6 | 8,000 | Hobby | ⚠️ Preparar upgrade |
| M9 | 25,000 | **Pro** | Upgrade automático |
| M12 | 50,000 | Pro | Evaluar Enterprise |

---

## 🚨 Triggers de Upgrade

| Métrica | Threshold | Acción |
|---------|-----------|--------|
| MAU | >8,000 | Alert + Plan upgrade |
| Bandwidth | >80GB | Alert |
| Functions | >80K | Alert |
| Error rate | >1% | Investigar |

---

## 💰 Presupuesto de Contingencia

| Escenario | Costo Mensual |
|-----------|---------------|
| Base (Hobby) | $0 |
| Growth (Pro) | $20 |
| Viral (Pro+) | $50-100 |
| Enterprise | Negociar |

---

*Documento generado para cerrar Observación F2-1*

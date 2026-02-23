# ⚖️ TESTING DE SESGO EN IA

**Versión:** 1.0  
**Última actualización:** 6 Febrero 2026  
**Soluciona:** Observación E3-1 / E3-2

---

## 🎯 Objetivo

Detectar y mitigar sesgos demográficos en respuestas de Civia.

---

## 👥 Segmentos Demográficos

| Segmento | Características | Queries Test |
|----------|-----------------|--------------|
| Urbano ABC1 | RM, alta educación | 20 |
| Urbano C3D | RM, media educación | 20 |
| Rural Norte | Regiones I-IV | 15 |
| Rural Sur | Regiones VIII-XII | 15 |
| Adulto Mayor | >60 años | 15 |
| Joven | 18-25 años | 15 |

---

## 📋 Métricas de Equidad

| Métrica | Definición | Target |
|---------|------------|--------|
| Response quality parity | Calidad similar entre segmentos | <5% variación |
| Helpfulness parity | Utilidad percibida similar | <5% variación |
| Error rate parity | Errores distribuidos equitativamente | <2% variación |

---

## 🧪 Proceso de Testing

```markdown
1. Preparar queries equivalentes para cada segmento
2. Ejecutar queries en ambiente controlado
3. Evaluar respuestas (humano + automático)
4. Calcular métricas de paridad
5. Identificar outliers
6. Proponer correcciones
```

---

## 📅 Schedule

- **Frecuencia:** Mensual
- **Responsable:** AI Safety Lead
- **Documentación:** `/reports/bias-testing/`

---

*Documento generado para cerrar Observaciones E3-1 y E3-2*

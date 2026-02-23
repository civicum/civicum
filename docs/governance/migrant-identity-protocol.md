# 🛂 PROTOCOLO DE INCLUSIÓN: IDENTIDAD MIGRANTE

**Versión:** 1.0  
**Última actualización:** 19 Febrero 2026  
**Escuadrón:** 106 — Margen-1: El Migrante sin RUT Definitivo  
**Soluciona:** Hallazgo M1-01 (Exclusión por "RUT Inválido")

---

## 🎯 El Problema Social
Miles de residentes en Chile viven años con "RUT Provisorio" o "IPE" (Identificador Provisorio Escolar) mientras esperan su regularización. Son vecinos activos, pagan IVA, usan los servicios públicos, pero el validador de RUT estándar (`Modulo 11`) los rechaza o exige un número de serie de cédula que no tienen vigente.

---

## 🌍 Solución: Identidad Cívica Flexibilizada

### 1. Validación de IPE / Pasaporte + Georreferencia
*   Si el usuario no tiene RUT definitivo:
    *   Permitir registro con **IPE** o **Pasaporte**.
    *   **Validación de Residencia:** Exigir georreferencia activa en el domicilio declarado (o foto de cuenta de servicios básica) para asignar comuna.
    *   **Estado:** "Vecino Verificado (Documentación en Trámite)".

### 2. Derechos Cívicos Diferenciados
| Acción | RUT Definitivo + ClaveUnica | RUT Provisorio / IPE |
|--------|-----------------------------|----------------------|
| Ver propuestas | ✅ Sí | ✅ Sí |
| Reportar problemas | ✅ Sí | ✅ Sí |
| Apoyar causas | ✅ Sí | ✅ Sí |
| **Votar Plebiscitos** | ✅ Sí (Simbólico) | ✅ Sí (Simbólico) |
| **Crear Iniciativa** | ✅ Sí | ⚠️ Requiere 3 avales verificados |

### 3. "Honestidad Radical" en UX
*   No mostrar error "RUT Inválido" en rojo agresivo.
*   Mostrar: "Si tu RUT está en trámite, usa esta opción."
*   Explicar claramente que su participación es válida ante el municipio aunque no voten en Servel.

---

## 🧪 Test de Inclusión
1.  Ingresar RUT provisorio (mayor a 50 millones o formato IPE).
2.  Verificar que el sistema permite completar el registro.
3.  Verificar que el usuario queda asignado a su comuna residencial real.

---
*Documento generado para cerrar Hallazgo M1-01.*

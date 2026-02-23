# 🔌 TESTING OFFLINE EXTREMO

**Versión:** 1.0  
**Última actualización:** 6 Febrero 2026  
**Soluciona:** Observación A2-1

---

## 🎯 Escenarios de Prueba

### Escenario 1: Offline Prolongado (72h)
```
Precondiciones:
- Usuario registrado con datos sincronizados
- Caché inicial poblado (15MB)
- Batería >80%

Pasos:
1. Activar modo avión
2. Usar app normalmente durante 72h
3. Registrar operaciones cada 4h
4. Medir degradación de UX

Criterios de Éxito:
- [ ] Sin crashes durante 72h
- [ ] Todas las operaciones quedan en cola
- [ ] UI muestra estado offline claramente
- [ ] Memoria estable (<200MB)
```

### Escenario 2: Cola Saturada (1000+ operaciones)
```
Precondiciones:
- Modo offline activo
- Usuario Nivel 3 (verificado)

Pasos:
1. Generar 1000 operaciones:
   - 500 lecturas de promesas
   - 300 cambios de filtros
   - 150 follows de autoridades
   - 50 reportes guardados
2. Medir tiempo de sync al reconectar
3. Verificar integridad de datos

Criterios de Éxito:
- [ ] Cola persiste en IndexedDB
- [ ] Sync completo en <5 minutos
- [ ] 0 operaciones perdidas
- [ ] Orden cronológico respetado
```

### Escenario 3: Conflictos Masivos
```
Precondiciones:
- Dos sesiones activas (móvil + web)
- Datos compartidos entre sesiones

Pasos:
1. Modificar mismos datos en ambas sesiones
2. Una sesión offline, otra online
3. Reconectar sesión offline
4. Verificar resolución de conflictos

Criterios de Éxito:
- [ ] Last-write-wins aplicado
- [ ] Usuario notificado de cambios
- [ ] Sin duplicación de datos
- [ ] Log de conflictos generado
```

---

## ⚠️ Edge Cases Críticos

| Caso | Esperado | Fallback |
|------|----------|----------|
| Batería muere durante sync | Cola persiste | Retry al reiniciar |
| Storage lleno | Alerta + LRU eviction | Limpiar caché |
| App killed por OS | Datos persistidos | Restaurar al abrir |
| Upgrade de app offline | Migración al sync | Alerta al usuario |

---

## 📊 Matriz de Validación

| Test | P0 | P1 | P2 |
|------|----|----|-------|
| 24h offline | ✅ | | |
| 72h offline | | ✅ | |
| 500 ops cola | ✅ | | |
| 1000 ops cola | | ✅ | |
| Conflicto simple | ✅ | | |
| Conflicto masivo | | | ✅ |

---

*Documento generado para cerrar Observación A2-1*

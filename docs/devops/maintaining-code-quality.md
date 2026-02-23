# 🧹 HIGIENE DE CÓDIGO: GESTIÓN DE DEUDA TÉCNICA

**Versión:** 1.0  
**Última actualización:** 19 Febrero 2026  
**Escuadrón:** 118 — Entropía-3: Deuda Técnica Acumulada  
**Soluciona:** Hallazgo E3-01 (Código Inmantenible a Largo Plazo)

---

## 🎯 La Amenaza Entrópica
La prisa por lanzar features hace que el código se vuelva un "Spaghetti Monstruoso". En 12 meses, nadie se atreve a tocar el módulo de votación porque "si lo miras, se rompe".

---

## 🧼 Protocolo de Limpieza Continua

### 1. El Presupuesto de Deuda (Technical Debt Budget)
*   Regla: **20% del tiempo de cada Sprint** se dedica EXCLUSIVAMENTE a refactoring, actualización de dependencias y limpieza.
*   No es negociable con Product Management. Es como barrer el taller.

### 2. Estándares Estáticos Draconianos (Linters)
*   `ESLint` + `Prettier` + `SonarQube` en modo estricto ("Zero Tolerance").
*   Complejidad Ciclomática Máxima: 10 (Si una función tiene muchos `if/else`, el build falla).
*   Longitud Máxima de Archivo: 300 líneas (Fuerza la modularización).

### 3. Regla del Boy Scout
*   *"Deja el código más limpio de lo que lo encontraste."*
*   Si tocas un archivo legado feo para un fix pequeño, estás obligado a refactorizarlo un poco (renombrar variables, extraer funciones).

### 4. Deprecación Agresiva de Features Zombis
*   Si una feature ("Chat Vecinal") la usa < 1% de usuarios en 3 meses -> **Se borra del código base.**
*   Menos código = Menos bugs = Menos superficie de ataque.

---

## 🧪 Test del "Nuevo Dev"
1.  Contratar a un junior imaginario (o agente IA).
2.  Pedirle que explique el flujo de autenticación leyendo solo el código.
3.  **Éxito:** Si lo entiende en < 30 mins, el código está limpio.

---
*Documento generado para cerrar Hallazgo E3-01.*

# Documentación Viva: Why-Driven Documentation (Squad 192)

**Auditoría:** Roles 14 (Arquitecto), 09 (Arquitecto Info), 44 (Editor), 18 (QA Funcional), 19 (QA Auto)

## 1. El Riesgo del Ruido Cognitivo
Comentar código de manera evidente (`// asigna true a la variable activa -> const isActive = true;`) es un anti-patrón. Genera ruido visual ("ceguera de comentarios") y tiende a desactualizarse rápidamente cuando el código cambia, transformando la documentación en una mentira histórica.

En un proyecto open-source estatal como CIVICUM, lo que la comunidad necesita entender no es *qué* hace el código (eso lo dice TypeScript), sino *por qué* se tomó esa decisión técnica específica versus otras alternativas.

## 2. La Regla del 'Por Qué' (Why-Driven)
**Regla de Oro:** Está estructuralmente prohibido comentar la sintaxis del lenguaje. Los comentarios de bloque deben funcionar como micro-ADRs (Architectural Decision Records).

### Modelo Incorrecto (Rechazo en Code Review):
```typescript
// Iteramos sobre los usuarios
for (let i = 0; i < users.length; i++) {
  // Verificamos si es RUT válido
  if (validateRut(users[i].rut)) { ... }
}
```

### Modelo Correcto (Aprobación):
```typescript
/**
 * @context Usamos un for-loop tradicional en vez de `users.map()` porque, 
 * bajo test de contingencia (Squad 101), la iteración funcional causaba 
 * Garbage Collection pausas inaceptables cuando el input superaba los 50,000 votantes.
 * Referencia: Issue #1042 - Optimización Low-End.
 */
for (let i = 0; i < users.length; i++) {
  if (validateRut(users[i].rut)) { ... }
}
```

Esta regla asegura que si un desarrollador intenta borrar el loop en el futuro, entenderá el trauma histórico (memoria institucional) y no retrocederá a una versión menos performante.

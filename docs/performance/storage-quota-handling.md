# 💾 ESTRATEGIA DE ALMACENAMIENTO: QUOTA EXCEEDED HANDLING

**Versión:** 1.0  
**Última actualización:** 19 Febrero 2026  
**Escuadrón:** 103 — Joule-3: Límite de Almacenamiento  
**Soluciona:** Hallazgo J3-01 (Crash por Disco Lleno)

---

## 🎯 El Problema Físico
El usuario intenta guardar un reporte offline (fotos + audio) pero tiene **0 MB libres** en su teléfono (lleno de WhatsApps y fotos).
El navegador lanza `QuotaExceededError`. La app crashea o pierde los datos.

---

## 🛠️ Protocolo de Supervivencia (Storage Pressure)

### 1. Detección Proactiva (`navigator.storage.estimate`)
Al iniciar la app, verificar espacio disponible.
*   **Si quota < 50MB:** Activar "Modo Ahorro Extremo".
    *   No cachear imágenes nuevas.
    *   Borrar caché antigua (LRU - Least Recently Used) inmediatamente.
    *   Mostrar advertencia sutil: "Poco espacio. CIVICUM funciona en modo ligero."

### 2. Manejo de Error en Escritura (Try/Catch)
```typescript
try {
  await db.reports.add(newReport);
} catch (e) {
  if (e.name === 'QuotaExceededError') {
    // 1. Intentar borrar caché prescindible (noticias, avatares)
    await clearNonEssentialCache();
    // 2. Reintentar
    try {
      await db.reports.add(newReport);
    } catch (e2) {
      // 3. Fallback final: LocalStorage (solo texto, sin fotos)
      await saveTextToLocalStorage(newReport);
      alert("Espacio lleno. Se guardó solo el texto de tu reporte.");
    }
  }
}
```

### 3. Compresión Agresiva antes de Guardar
*   Fotos se comprimen a WebP q=50 **antes** de intentar guardarlas en IDB.
*   Nunca guardar Base64 strings (bloat 33%); usar `Blobs`.

---

## 🧪 Test "Teléfono Lleno"
1.  Llenar el almacenamiento del dispositivo simulador hasta dejar 0 bytes.
2.  Intentar crear un reporte con foto.
3.  **Resultado esperado:** La app NO crashea. Informa al usuario. Guarda al menos el texto.

---
*Documento generado para cerrar Hallazgo J3-01.*

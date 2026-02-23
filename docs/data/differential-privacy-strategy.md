# 🔒 ESTADÍSTICA SEGURA: PRIVACIDAD DIFERENCIAL

**Versión:** 1.0  
**Última actualización:** 19 Febrero 2026  
**Escuadrón:** 123 — Data-Sci-3: Privacidad Diferencial  
**Soluciona:** Hallazgo DS3-01 (Re-identificación de Minorías)

---

## 🎯 El Problema de Datos
Publicamos: "En la manzana X, el 100% de los residentes reportó problemas de accesibilidad silla de ruedas".
Si en esa manzana solo vive UNA persona en silla de ruedas, acabamos de publicar su dirección y condición médica.

---

## 🌫️ Ruido Matemático Protector

### 1. K-Anonymity (k=5)
*   Nunca mostrar estadísticas de grupos con menos de 5 personas.
*   Si hay < 5 reportes en un barrio, se agrupan con el barrio vecino ("Aggregated Zone").

### 2. Laplacian Noise Injection
*   Al reportar conteos exactos (ej: "432 votos"), el sistema inyecta ruido aleatorio de distribución Laplace.
*   Resultado público: "Aproximadamente 430 votos" (± error controlado).
*   Esto impide "ataques de diferenciación" (restar el total de ayer con el de hoy para saber qué votó Juan).

### 3. Microdata Protection
*   Los datasets descargables (`Open Data`) no contienen filas individuales ("Raw Data").
*   Solo contienen agregados pre-calculados o muestras sintéticas estadísticamente equivalentes pero falsas.

---

## 🧪 Test del "Vecino Único"
1.  Buscar una zona con 1 solo reporte registrado.
2.  Consultar la API pública de estadísticas.
3.  **Éxito:** La API devuelve "Datos insuficientes" o agrupa la zona, protegiendo al solitario.

---
*Documento generado para cerrar Hallazgo DS3-01.*

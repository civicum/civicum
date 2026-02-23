# Validación Cruzada de Datos Oficiales (Squad 240)

**Misión:** Si dos fuentes oficiales se contradicen, ¿cuál mostramos? 

## 1. El Riesgo de Epistemología Fracturada
Un usuario acusa corrupción: "La empresa ganadora no tiene oficina real". 
El motor Scraper de CIVICUM verifica en la API de MercadoPúblico y la empresa figura con domicilio legal en *Las Condes*. Luego cruza con el SERVEL y el dueño tributario figura viviendo en *Lampa*. El SII además la clasifica sin iniciación vigente.
Si presentamos datos crudos contradictorios de múltiples sistemas del Estado, la IA alucinará o creará paranoia innecesaria. La "Verdad" técnica está fragmentada.

## 2. Jerarquía de Fuentes "Source of Truth"
Cuando las APIs del Estado digan cosas distintas, CIVICUM impone jerarquía Cívico-Penal por sobre el frontpage web:

1.  **Dato Maestro (Nivel 1): Servicios Impuestos y Justicia.** Ante nombres, RUT, deudas, o constituciones de sociedad, el *Servicio de Impuestos Internos (SII)* y el *Registro Civil* sobreescriben cualquier campo de *MercadoPúblico* o de *Página Municipal*. (La plata manda).
2.  **Incertidumbre Transparente (Nivel 2):** Si el conflicto persiste entre ministerios y Civia no puede resolver la verdad, se inyecta la Caja Gris de Transparencia en la interfaz:
    > "🔍 *Discrepancia Oficial Detectada:* La empresa figura en MercadoPúblico con Giro 'Construcción', pero el SII la cataloga como 'Asesoría de Imagen'. Sugerimos investigación humana."
3.  **Prohibición de Promediar la Verdad:** El Rol 32 (Calidad de Datos) establece que Civia nunca intentará deducir, extrapolar ni inventar un dato intermedio para "rellenar el espacio en blanco" en el perfil de una autoridad o empresa contratista. Muestra los dos o muestra la duda.

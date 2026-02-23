# 🕵️ PROTECCIÓN DEL DENUNCIANTE (WHISTLEBLOWER)

**Versión:** 1.0
**Squad:** 217 Ley-2
**Misión:** Proteger al funcionario honesto que denuncia corrupción interna desde dentro del municipio.

---

## 🎯 El Miedo a la Represalia
"Si denuncio que mi jefe roba, me despiden mañana". La Ley 20.205 protege, pero la tecnología a veces delata.

## 🛡️ GARANTÍAS DE ANONIMATO TÉCNICO

### 1. Desvinculación de Identidad (Drop-Box Seguro)
*   Opción **"Denuncia Anónima Funcionaria"**.
*   Técnicamente, el sistema crea un ID temporal desvinculado del RUT del usuario.
*   En la base de datos: `Author: NULL` (literalmente). No hay forma de rastrear quién lo escribió, ni siquiera con orden judicial a Civicum (porque el dato no existe).

### 2. Limpieza de Metadatos de Documentos
*   Si el denunciante sube un PDF/Word ("Prueba.docx"), Civicum **sanitiza automáticamente** al autor del documento (metadata "Last Modified By") antes de guardarlo, para evitar que el jefe vea "Modificado por Juan Pérez".

### 3. Canal de Retorno Seguro (Tor/Signal)
*   Para que el investigador pueda hacer preguntas sin saber quién responde, se usa un chat efímero encriptado con llaves rotativas.

---
*La lealtad es con la probidad, no con la jerarquía.*

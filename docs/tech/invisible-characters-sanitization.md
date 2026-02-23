# Sanitización de Caracteres Invisibles (Squad 283)

**Misión:** Copiar de MS Word trae caracteres ocultos que rompen el API JSON.

## 1. El Riesgo de la Bomba de Texto (\u200B)
Los oficinistas y dirigentes vecinales copian actas de asambleas larguísimas directamente desde *Microsoft Word* y las pegan en el `<textarea>` de la plataforma CIVICUM. Microsoft Word inyecta basura invisible de formato (Zero-width spaces `\u200B`, En-dashes extraños `\u2013`, o Right-To-Left marks).
A simple vista, el Acta parece impecable en pantalla. Al enviarla al Backend (JSON payload), el parser de Node.js o el serializador de AWS pueden tropezar catastróficamente provocando una caída silenciosa de tipo "Invalid String", arruinando todo el cabildo vecinal. Además, si el carácter invisible entra, rompe el Motor Búsquedas ("Matta" vs "Mat`\u200B`ta") dejando los datos inencontrables.

## 2. El Muro de Fuego ASCII (Texto Puro Cívico)

1.  **Paste-Event Hijacking (Interceptación del Portapapeles):** En Frontend, el componente contenedor de textos largos inyecta un listener forzado `onPaste`. Cuando el dirigente suelta el acta gigante, el Evento detiene el flujo nativo del navegador, captura la data bruta usando `e.clipboardData.getData('text/plain')`. Forzando al Sistema Operativo a soltar absolutamente cualquier nodo DOM / HTML u OCR Oculto, quedándose solo con las moléculas del párrafo.
2.  **Strip Zod Middleware:** En la frontera T-0 del Servidor Next.js (Server Action), todos los Strings antes de cruzar la validación de base de datos se someten a un RegEx "Terminator": `.replace(/[\u200B-\u200D\uFEFF]/g, '')`. Se asesina a todo Zero-Width Space o formato R-to-L de codificaciones rotas sin avisos.
3.  **Sanitized Markdown Forzado:** Si la comuna realmente quería subir Negritas o Titulares, el texto estricto y pasteurizado se renderizará automáticamente a nivel Github Flavored Markdown. Solo `*`, `#` y saltos de línea son respetados.

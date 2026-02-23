# Archivos Fotografiados y OCR Forzado (Squad 238)

**Misión:** Extracción de datos desde documentos antiguos no digitalizados (OCR + IA).

## 1. El Riesgo de la Burocracia Ofuscada
Los Decretos Alcaldicios en las sub-páginas de Transparencia Municipal no suelen estar en `.docx` ni en `.pdf` seleccionables. Suelen ser impresiones en papel, firmadas a bolígrafo por el alcalde, escaneadas arrugadas y subidas como un archivo de imagen pesado envuelto en PDF. 
Si el Scraper de CIVICUM solo "lee el texto DOM", catalogará el archivo como vacío, perdiendo una posible licitación anómala. Es el viejo truco pasivo-agresivo burocrático.

## 2. Ingesta Forense Inteligente (Vision-Language Models)
CIVICUM empleará extracción agresiva de texto incrustado.

1.  **Ghost Detector:** Si el Payload descargado `.pdf` no contiene cadenas Tesseract Textual legibles (menos de 50 caracteres para un documento de 10 páginas), se enruta a la "Unidad de Tratamiento de Imágenes".
2.  **Extracción Tesseract + Corrección OpenAI:** Un worker (Python/AWS Textract) pasa OCR por las imágenes. Dado que el escaneo original es de mala calidad, el resultado puede decir: `Dec r$to Alxcaldicio n0. ^4` 
3.  **VLM Cleaning:** Civia (LLM local o Claude Haiku) toma el texto rasgado, lo limpia deduciendo palabras por contexto y formatea la salida en JSON (`{ "tipo": "Decreto Alcaldicio", "numero": 44, "materia": "Licitación" }`). Ese JSON purificado es el que finalmente inyecta a la Inteligencia Ciudadana.

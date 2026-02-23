# Blindaje de Responsabilidad Civil - Difamación (Squad 218)

**Misión:** ¿Civicum es responsable solidario si un usuario difama a otro? (Art. 2331).

## 1. El Riesgo Cívico (La Demanda Millonaria)
Si un vecino crea una Mesa de Trabajo titulada: "El Concejal X es un ladrón y narcotraficante", y es mentira, el Concejal, bajo el Artículo 2331 del Código Civil Chileno (o querella por Injurias), puede intentar demandar no solo al vecino, sino solidariamente a la ONG u Organización que administra CIVICUM por "permitir e incentivar" la difamación. Esto quebraría el proyecto en un mes ($0 Fondo de Reserva Legal).

## 2. Puerto Seguro (Safe Harbor Chileno)
CIVICUM no es editor ni curador (Publishing House); es Plataforma Pasiva Transmisora sujeta al Artículo 85 de la Ley de Propiedad Intelectual 17.336 (Excepciones Proveedores de Servicio).

1.  **Notice and Takedown Rápido:** Implementación de un flujo legal en `/reportar-abuso`. Si una autoridad notifica con evidencia preliminar judicial una difamación, el equipo Moderador oculta (no borra) preventivamente el post hasta la resolución. Esta acción ágil protege a la ONG de complicidad negligente pasiva.
2.  **Responsabilización Activa JWT:** En los ToS (Términos de Servicio) de la pantalla de bienvenida (Clickwrap), el usuario firma digitalmente aceptando que *"Cualquier responsabilidad civil o penal emanada de aseveraciones de facto ("Fulanito robó") será de exclusiva responsabilidad de quien autentique el ingreso con ClaveÚnica o Cédula de Identidad."*
3.  **CIVIA Fact-Checker Intercept:** Si el LLM detecta un lenguaje difamatorio dirigido (`(sustantivo-nombre propio) + (delito penal)`), bloquea la publicación obligando al usuario a cambiar el tono de "Acusación de Delito" a "Alerta de Irregularidad Administrativa".

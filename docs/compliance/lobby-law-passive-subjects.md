# Cumplimiento Pasivo de la Ley del Lobby (Squad 219)

**Misión:** Registro automático de audiencias generadas por la plataforma (Compliance).

## 1. El Riesgo del Sujeto Pasivo
La "Ley del Lobby" (Ley N° 20.730) obliga a los Sujetos Pasivos (Alcaldes, Concejales, Directores de Obra) a registrar audiencias donde se intenten influir decisiones públicas.
Si una directiva vecinal usa una "Mesa de Trabajo" en CIVICUM para convencer a un Alcalde de cambiar el plano regulador, y el Alcalde responde oficialmente en la plataforma, eso equivale jurídicamente a una audiencia digital. Si no se registra en Infolobby, el Alcalde arriesga multas Contraloría. CIVICUM podría ser vista como una "zona oscura" anti-transparencia.

## 2. Automatización Compliance (Civia Lobby-Hook)
CIVICUM no obliga al alcalde a hacer doble trabajo, lo automatiza.

1.  **Detección de Influencia (NLP):** Civia clasifica el texto de las Mesas de Trabajo. Si detecta intención directiva de presupuesto o concesiones (`"Solicitamos priorizar la licitación B en vez de la A"`), marca el hilo temporalmente como `[Lobby Potencial]`.
2.  **Gatillo de Autoridad (Trigger):** Si una Cuenta Nivel 4 (Autoridad) responde interactivamente en ese hilo, se consolida la "Audiencia Digital".
3.  **Exportación Infolobby Automática:** Un proceso nocturno cronometrado recopila todos estos eventos y genera un archivo CSV o XML formateado exactamente según el estándar API del Consejo para la Transparencia y la Segpres, enviándolo al equipo de gabinete del Alcalde con el Asunto: **"Reporte de Audiencias Digitales CIVICUM para registro Ley 20.730"**.

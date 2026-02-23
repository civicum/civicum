# El "Pituto" Digital (Squad 302)

**Misión:** Impedir que el Admin de Soporte de CIVICUM beneficie y eleve la queja comunal de su amigo de la infancia.

## 1. El Riesgo de la Burocracia Heredada ("Tener Amigos en la Muni")
Alguien le escribe por WhatsApp a un Moderador (Rol 56) del equipo interno de CIVICUM: *"Oye perrito, mi calle en La Reina tiene la vereda trizada, ¿Me la apurái en la app para que caiga a revisión del Alcalde hoy mismo?"*. 
El Moderador entra a su Panel de CMS oculto (Ej: Vercel/Sanity/Strapi), selecciona la ID del reporte del amigo y le inyecta manualmente `Priority = P1` y `Upvotes = +1500 (Ghost Votes)`. El amigo gana la pavimentación quitándole fondos a Lota por puro "Pituto Centralizado".
CIVICUM se convierte en la misma escoria política que juró destruir.

## 2. Abstracción del Poder y Bloqueo Operacional (The Panopticon)
El código debe atarle las manos a sus propios creadores.

1.  **Castración de CRUD Administrativo:** Queda prohibida la existencia de botones en el Dashboard de Admins que permitan mutar Votos (`UP/DOWN`) o setear Flags de Urgencia (`URGENT`). Los moderadores de CIVICUM solo poseen permiso atómico de lectura (`READ_ONLY`) y Suspensión de Spam (Soft-Delete por T&S).
2.  **Trazabilidad Forense Transparente (Glass Logs):** Si ocurre una acción administrativa extrema (Ej: "Eliminación por lenguaje de Odio Muerte"), el Query Postgres no muta el row en la oscuridad, sino que escribe en una Tabla Pública de Transparencia: `{"Admin": "JuanM", "Acción": "Ocultó Reporte 99", "Fecha": "2026", "Justificación Cívica": "Norma X"}`. Cualquier vecino puede auditar por qué el equipo censuró algo.
3.  **Auditoría Externa Obligatoria Open Source:** El peso de los votos se calcula estrictamente con Functions Edge. Nadie puede forzar el Override desde el SQL. Si un programador es sobornado para "Meter mano por debajo en Supabase o Neon", ese Query manual dejará traza huella en los Logs Audit de AWS CloudTrail, garantizando la renuncia automática de dicho desarrollador infractor sin compensación.

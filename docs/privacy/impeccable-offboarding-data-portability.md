# La Salida Limpia y Portabilidad (Squad 299)

**Misión:** Un usuario quiere irse y llevarse sus votos. Offboarding Perfecto.

## 1. El Riesgo de Secuestrar la Esperanza (Hotel California)
Las startups tecnológicas te hacen el Login (Onboarding) hermoso y de 1 paso. Pero si quieres "Eliminar Tu Cuenta" te piden confirmar por correo 3 veces, hablar con soporte y aún así tus datos siguen pululando. 
Esto ocurre en el Estado de Chile. Dar de baja un contrato de VTR es un infierno. Si CIVICUM repite este patrón abusivo y se opone a liberar los datos civiles o miente haciendo creer que el vecino no puede abandonar su municipio digital, el daño moral es imperdonable. La aplicación se vuelve una prisión cívica (The Data Trap).

## 2. El Botón Rojo Atómico (Right to Delete 2.0)

1.  **Toma tus Datos y Lárgate (Auto-GDPR Zip Bundle):** Un click en `[Exportar mi Historia Cívica]` lanza un Job asíncrono que compila todo: Cada voto dado, IPs, mensajes ocultos y PDFs reportados. Modela todo en un `JSON-Lines`, lo comprime en formato Gzip y devuelve el link de descarga directa. El vecino posee material probatorio de sus propios reclamos.
2.  **Delete-Cascade Inmaculado (Raze the Earth):** Cuando el vecino pulsa "Borrar Cuenta definitivamente": No ocurre una desactivación semántica perezosa (`is_active = false`). El Trigger Server-Action lanza una operación `DELETE CASCADE` pesada y nuclear en Drizzle ORM abarcando Tablas de Profile, Relaciones, Votos Simples atados a su RUT, eliminando de inmediato Tokens Session en Redis y AWS SES Suppression.
3.  **Votos Heredables Anónimos (Orphan Status):** Si el usuario borrado, 1 mes atrás había apoyado construir una Escuelita y gracias a su voto se aprobó, borrar ese voto haría perder la mayoría e invalidar legalmente a la escuelita 1 mes después. Para estos casos de "Voto Vincular Colectivo Múltiple", la entidad-voto PÚBLICA pierde el identificador Foráneo pasando de `userAuth: uuid_pedro` a `userAuth: null`. La aprobación de la escuela sobrevive, pero toda manera de culpar/rastrear de que Pedro formó parte, desaparece.

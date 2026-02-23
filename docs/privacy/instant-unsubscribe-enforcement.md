# El "Unsubscribe" Violento (Squad 280)

**Misión:** Respetar la decisión de exclusión a nivel nanosegundo sin colas diluidas "Por Sistema".

## 1. El Riesgo del Hostigamiento Falso-Automático
Empresas como Retailers obligan al usuario a *"esperar 48-72 hrs hábiles a que el sistema procese"* porque delegan listas a Mailchimp, permitiendo dispararles un último boletín el fin de semana. 
En política cívica, si el usuario desaprueba a CIVICUM, a su Alcalde, y está furioso, y solicita el `[Dar de Baja todas las Alertas Vecinales]`, enviarle "Un solo E-mail Más Diciendo: La Municipalidad aprobó esto!" causará la ira profunda del vecino ("Se pasan las reglas por el aro"). Aumentará la percepción social de la ineficacia democrática del software y podría interponer una falta a los derechos ARCO de sus datos. 

## 2. Inyección Fulminante de Revocación de Comunicaciones
Matamos la burocracia dilatoria del marketing salvaje americano.

1.  **Boolean Hard-Kill Inmediato:** En el instante que se presiona el enlace del Email *"Darte de Baja de tu Comuna"*, la base de datos Primaria Drizzle-Schema efectúa un `UPDATE users SET receives_notif = false`. El retraso es la latencia de red (4 milisegundos). No delegamos en sincronía la supresión de envíos.
2.  **Webhook de Cierre a Enrutadores (AWS SES):** CIVICUM no esparce la falsedad de los procesos "Lentos". Si Resend o Sendgrid (Proveedores 3eras partes) tienen colas atrasadas in-flight de "Newsletters Mensuales Cívicas", la Web API les manda en tiempo paralelo la adición del usuario en The Global Suppression List (Supresión API Directa). Abortar Mails flotando en tránsito.
3.  **Botón de Reactivación Orgánico In-App Only:** No usaremos el vil recurso de *"¿Seguro quieres irte?"* ni colores oscuros en el proceso. Solo aparecerá después, dentro del Setting personal en Letras Grises si alguna vez orgánicamente él opta por retornar. El respeto al cansancio o hastío civil del vecino es Total y Rápido.

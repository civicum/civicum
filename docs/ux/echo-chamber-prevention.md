# Prevención de Cámaras de Eco (Squad 189)

**Auditoría:** Roles 59 (Justicia Restaurativa), 57 (Deliberación), 76 (Growth), 54 (Gobernanza), 80 (Riesgos)

## 1. El Riesgo de la Interfaz Hostil
Las plataformas como Twitter/X o Reddit operan sobre el principio del conflicto, engrandeciendo el enojo ("Angry Reacts", "Ratios", "Downvotes") para prolongar el Tiempo en Pantalla (Growth Tóxico).
CIVICUM es una plataforma de resolución de problemas sociales. Si la Interfaz de Usuario (UI) recompensa la destrucción argumental del contrario en una "Mesa de Trabajo", la comunidad se trincheriza en bandos polarizados, destruyendo la Deliberación Pública (Art. F-05 y F-07).

## 2. Rediseño Obligatorio de Componentes UI (React/shadcn)

El *Design System Terracota* prohíbe las siguientes micro-interacciones:

1.  **Abolición del "Downvote" Visible:** No hay botón rojo (dedo abajo) en las discusiones ni en el Voto Ciudadano. Si una propuesta no te gusta, pasas a la siguiente o votas *Abstención/En Contra* de forma secreta al final del flujo. Los Dislikes visibles actúan como una jauría digital que lincha psicologicamente al usuario discrepante.
2.  **Abolición del Anidado Profundo:** Las respuestas en los foros se limitan a Nivel 1 (Comentario) y Nivel 2 (Respuesta). No hay cadenas de *Reply-to-reply* que son caldo de cultivo para peleas de ego 1-a-1 de 40 mensajes.

## 3. Cooldown de Justicia Restaurativa
Para evitar el Secuestro de la Discusión (Trolling de saturación):
*   Un usuario (Nivel 1 o 2 de Confianza) solo puede realizar 3 intervenciones consecutivas (comentarios) dentro de una misma Mesa de Trabajo/Iniciativa en un lapso de 60 minutos.
*   Luego de eso, el botón "Comentar" se bloquea en modo LocalStorage / Backend Rate-Limit con el mensaje de "Calm Tech" (F-08):
    > 🧘 *"Has participado intensamente en este tema. CIVICUM requiere pausas deliberativas. Lee las opiniones de los demás. Tu turno regresará en 45 minutos."*

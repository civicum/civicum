# Moderación de Dogwhistles y Emojis (Squad 256)

**Misión:** Emojis (🥛, 🐸) coordinando odio sin activar filtros de texto.

## 1. El Riesgo del Odio Cifrado
Los filtros tradicionales de "Groserías" (`profanity_filter.js`) son inútiles ante la alt-right o el anarquismo organizado moderno. Si un grupo decide atacar el perfil de un migrante usando `Emojis de Vasos de Leche 🥛` (símbolo supremacista gringo importado) o la `Rana Pepe 🐸`, un regex de texto plano dirá "Todo bien, es una receta". Mientras tanto, la víctima sufre acoso estocástico y abandona CIVICUM.

## 2. Detección Temporal de Anomalías (Semiótica Activa)
Los emojis no son ofensivos per se, lo son por ráfaga estadística.

1.  **Velocity Watchdog:** Un servicio background en Redis evalúa la aceleración del uso de emojis específicos. Si el emoji `🚁` (Helicóptero) habitualmente se usa 5 veces a la semana, y de pronto aparece en 300 comentarios en 15 minutos apuntando al hilo de un concejal comunista de Recoleta, se declara un "Vuelo de Dogwhistle" (Alerta Semiótica).
2.  **Soft-Quarantine (Pausa Orgánica):** Si se detecta la ráfaga, el sistema no banea a nadie (para evitar falsos positivos de protestas legítimas). En cambio, activa el `Rate Limit Cívico`: el hilo afectado entra a "Modo Frío", permitiendo solo 1 comentario cada 5 minutos por usuario, desinflando la dopamina del ataque troll enjambre instantáneamente.
3.  **Honeypotting Ciego:** Los usuarios que lideran estos ataques (las primeras 3 IP que iniciaron la ráfaga) son agregados a un "Shadowban" algorítmico ligero. Sus futuros reportes bajan un 40% su prioridad de empuje (ranking) en el Feed público municipal por 30 días, limpiando la plaza.

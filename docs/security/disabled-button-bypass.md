# Botones Deshabilitados vs Backend (Squad 277)

**Misión:** ¿Un botón gris impide a un Hacker forzar la Petición?

## 1. El Riesgo de Confiar en el Vaso (Client-Side Trust)
Un vecino "Troll" ha sido temporalmente baneado de votar en la plataforma por diseminar información tóxica o insultos. Entra a CIVICUM, va a su Junta de Vecinos virtual. Efectivamente el botón `[Firmar Iniciativa]` está gris (`disabled={true} opacity-50 cursor-not-allowed`).
El Troll abre la Consola del Navegador (F12) Red, copia el Comando cURL de un voto antiguo de su historial HTTP, e inyecta el `Fetch` crudo pasando el ID nuevo del proyecto saltándose el Front-End y logrando meter su injerencia cívica prohibida. 

## 2. Paranoia del Vaso Traslúcido (Backend as the Fortress)
Todos los Front-Ends (React/Vue/Svelte) son considerados por CIVICUM como zonas de guerra mentirosas y corrompidas, incluso el nuestro.

1.  **ZOD Schema Validation (Isomorfismo Cero Confianza):** La validación de longitud de caracteres de un "Alza La Voz", o el Permiso Role-Base, siempre y religiosamente ocurre a Nivel Zod Server-Side (`z.object({ voteId: z.string().uuid() })`).
2.  **Server Actions RBAC Enclosure:** Toda Server Action o Endpoint API asume mala fe del cliente por herencia. En la primera línea de ejecución `await User.isBanned()`. Si es afirmativo, se arroja `403 Forbidden` destruyendo el Token de Petición cURL. 
3.  **Muerte del HTML Forms de los 90s:** Los botones Grises son puramente ayudas estéticas para guiar a los cívicos honestos. Las validaciones de oro las emite el muro de cemento del Node Server inmutable. El Botón FrontEnd no protege a CIVICUM, protege al usuario de errores de Click; pero el Backend protege la Democracia del Troll de Comando.

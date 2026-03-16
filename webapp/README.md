# CIVICUM — Webapp

Este es el frontend + proxy backend ligero (Hono) del proyecto CIVICUM.

## 1. Prerequisitos
- Node.js (preferiblemente v20+)
- pnpm (gestor de paquetes)
- Base de datos Postgres (Neon o local) para la capa de datos real.

## 2. Instalación
\`\`\`bash
pnpm install
\`\`\`

## 3. Configuración de Entorno (.env)
1. Copia el archivo \`.env.example\` a \`.env\`.
2. Completa la variable \`DATABASE_URL\` con las credenciales de tu rama de Postgres de desarrollo.
   > ⚠️ **NUNCA uses la base de datos de producción para desarrollo.**

## 4. Base de Datos (Migraciones y Seed)
Una vez configurado tu \`.env\` con una DB de desarrollo vacía:

1. **Generar migraciones** (si el schema cambió):
   \`\`\`bash
   pnpm db:generate
   \`\`\`
2. **Aplicar migraciones** (crear tablas en tu DB):
   \`\`\`bash
   pnpm db:migrate
   \`\`\`
3. **Poblar con datos de prueba (Seed)** (opcional):
   \`\`\`bash
   pnpm db:seed
   \`\`\`
   Esto insertará reportes iniciales en \`communityReports\`.
4. **Vaciar la base de datos (Reset)** (para observar Empty State):
   \`\`\`bash
   pnpm db:reset
   \`\`\`
   Esto elimina todas las filas de \`communityReports\`.

## 5. Levantar el Entorno de Desarrollo
Para probar la aplicación completa con backend real, necesitas abrir **dos terminales**:

**Terminal 1 (Backend Hono + Drizzle):**
\`\`\`bash
pnpm dev:server
\`\`\`
El backend correrá en el puerto \`3001\`.

**Terminal 2 (Frontend Vite):**
\`\`\`bash
pnpm dev
\`\`\`
Vite correrá en el puerto \`5173\` y hará proxy de las llamadas \`/api\` al puerto \`3001\`.

## 6. Validación de Estados en Dashboard (Community Reports)
Para validar que la vertical real funciona:
1. Asegúrate de tener \`DATABASE_URL\` configurado y ambos servidores corriendo.
2. Navega al Dashboard en la UI.
3. Si corriste \`pnpm db:seed\`, verás el estado de éxito con datos (si estuviera implementado) o simplemente las cards.
4. Si corres \`pnpm db:reset\`, verás el **Empty State** real renderizado por el servidor que retorna 0 filas.
5. Si no configuras \`DATABASE_URL\`, verás el **Error State** real (500) del backend.

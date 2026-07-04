/**
 * Seed data chilena — Regiones y Comunas reales
 *
 * Ejecutar con: CIVICUM_ALLOW_DB_SEED=true pnpm tsx src/db/seed-geo.ts
 * Requiere DATABASE_URL configurado y migraciones al día.
 *
 * Datos oficiales basados en división político-administrativa de Chile (16 regiones).
 * Subdivisión de comunas acotada a las más pobladas de cada región para el MVP.
 */
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { regions, communes } from './schema';

const ALLOW_SEED_ENV = 'CIVICUM_ALLOW_DB_SEED';
const SUSPICIOUS_DATABASE_MARKER = /(prod|production|staging)/i;

function assertSeedAllowed() {
  const databaseUrl = process.env.DATABASE_URL;

  if (process.env.NODE_ENV?.toLowerCase() === 'production') {
    console.error('❌ Seed bloqueado: NODE_ENV=production.');
    process.exit(1);
  }
  if (process.env[ALLOW_SEED_ENV] !== 'true') {
    console.error(`❌ Seed bloqueado: usa ${ALLOW_SEED_ENV}=true.`);
    process.exit(1);
  }
  if (!databaseUrl) {
    console.error('❌ DATABASE_URL no configurado.');
    process.exit(1);
  }
  try {
    const url = new URL(databaseUrl);
    if ([url.hostname, url.pathname, url.username].some(p => SUSPICIOUS_DATABASE_MARKER.test(p))) {
      console.error('❌ Seed bloqueado: DATABASE_URL parece prod/staging.');
      process.exit(1);
    }
  } catch {
    if (SUSPICIOUS_DATABASE_MARKER.test(databaseUrl)) {
      console.error('❌ Seed bloqueado: DATABASE_URL parece prod/staging.');
      process.exit(1);
    }
  }
}

const DATABASE_URL = process.env.DATABASE_URL!;

const sql = neon(DATABASE_URL);
const db = drizzle(sql);

const REGIONES_CHILE = [
  { id: 'r01', name: 'Arica y Parinacota' },
  { id: 'r02', name: 'Tarapacá' },
  { id: 'r03', name: 'Antofagasta' },
  { id: 'r04', name: 'Atacama' },
  { id: 'r05', name: 'Coquimbo' },
  { id: 'r06', name: 'Valparaíso' },
  { id: 'r07', name: 'Metropolitana de Santiago' },
  { id: 'r08', name: "Libertador General Bernardo O'Higgins" },
  { id: 'r09', name: 'Maule' },
  { id: 'r10', name: 'Ñuble' },
  { id: 'r11', name: 'Biobío' },
  { id: 'r12', name: 'La Araucanía' },
  { id: 'r13', name: 'Los Ríos' },
  { id: 'r14', name: 'Los Lagos' },
  { id: 'r15', name: 'Aysén del General Carlos Ibáñez del Campo' },
  { id: 'r16', name: 'Magallanes y de la Antártica Chilena' },
];

const COMUNAS_POR_REGION: Record<string, { id: string; name: string }[]> = {
  r01: [
    { id: 'c0101', name: 'Arica' },
    { id: 'c0102', name: 'Camarones' },
    { id: 'c0103', name: 'Putre' },
    { id: 'c0104', name: 'General Lagos' },
  ],
  r02: [
    { id: 'c0201', name: 'Iquique' },
    { id: 'c0202', name: 'Alto Hospicio' },
    { id: 'c0203', name: 'Pozo Almonte' },
    { id: 'c0204', name: 'Pica' },
  ],
  r03: [
    { id: 'c0301', name: 'Antofagasta' },
    { id: 'c0302', name: 'Calama' },
    { id: 'c0303', name: 'Tocopilla' },
    { id: 'c0304', name: 'Mejillones' },
  ],
  r04: [
    { id: 'c0401', name: 'Copiapó' },
    { id: 'c0402', name: 'Vallenar' },
    { id: 'c0403', name: 'Caldera' },
    { id: 'c0404', name: 'Huasco' },
  ],
  r05: [
    { id: 'c0501', name: 'La Serena' },
    { id: 'c0502', name: 'Coquimbo' },
    { id: 'c0503', name: 'Ovalle' },
    { id: 'c0504', name: 'Illapel' },
  ],
  r06: [
    { id: 'c0601', name: 'Valparaíso' },
    { id: 'c0602', name: 'Viña del Mar' },
    { id: 'c0603', name: 'Quilpué' },
    { id: 'c0604', name: 'Villa Alemana' },
    { id: 'c0605', name: 'Concón' },
    { id: 'c0606', name: 'Quintero' },
    { id: 'c0607', name: 'Puchuncaví' },
  ],
  r07: [
    { id: 'c0701', name: 'Santiago' },
    { id: 'c0702', name: 'Providencia' },
    { id: 'c0703', name: 'Ñuñoa' },
    { id: 'c0704', name: 'Maipú' },
    { id: 'c0705', name: 'Puente Alto' },
    { id: 'c0706', name: 'La Florida' },
    { id: 'c0707', name: 'Las Condes' },
    { id: 'c0708', name: 'La Reina' },
    { id: 'c0709', name: 'Peñalolén' },
    { id: 'c0710', name: 'San Miguel' },
  ],
  r08: [
    { id: 'c0801', name: 'Rancagua' },
    { id: 'c0802', name: 'San Fernando' },
    { id: 'c0803', name: 'Rengo' },
    { id: 'c0804', name: 'Santa Cruz' },
  ],
  r09: [
    { id: 'c0901', name: 'Talca' },
    { id: 'c0902', name: 'Curicó' },
    { id: 'c0903', name: 'Linares' },
    { id: 'c0904', name: 'Constitución' },
  ],
  r10: [
    { id: 'c1001', name: 'Chillán' },
    { id: 'c1002', name: 'Chillán Viejo' },
    { id: 'c1003', name: 'San Carlos' },
  ],
  r11: [
    { id: 'c1101', name: 'Concepción' },
    { id: 'c1102', name: 'Talcahuano' },
    { id: 'c1103', name: 'San Pedro de la Paz' },
    { id: 'c1104', name: 'Chiguayante' },
    { id: 'c1105', name: 'Los Ángeles' },
    { id: 'c1106', name: 'Coronel' },
  ],
  r12: [
    { id: 'c1201', name: 'Temuco' },
    { id: 'c1202', name: 'Padre Las Casas' },
    { id: 'c1203', name: 'Villarrica' },
    { id: 'c1204', name: 'Pucón' },
    { id: 'c1205', name: 'Angol' },
  ],
  r13: [
    { id: 'c1301', name: 'Valdivia' },
    { id: 'c1302', name: 'La Unión' },
    { id: 'c1303', name: 'Panguipulli' },
  ],
  r14: [
    { id: 'c1401', name: 'Puerto Montt' },
    { id: 'c1402', name: 'Osorno' },
    { id: 'c1403', name: 'Castro' },
    { id: 'c1404', name: 'Ancud' },
  ],
  r15: [
    { id: 'c1501', name: 'Coyhaique' },
    { id: 'c1502', name: 'Puerto Aysén' },
  ],
  r16: [
    { id: 'c1601', name: 'Punta Arenas' },
    { id: 'c1602', name: 'Puerto Natales' },
    { id: 'c1603', name: 'Porvenir' },
  ],
};

async function seed() {
  assertSeedAllowed();
  console.log('🌱 Sembrando datos geográficos de Chile...\n');

  // Insertar regiones
  console.log('📌 Insertando 16 regiones...');
  for (const region of REGIONES_CHILE) {
    await db
      .insert(regions)
      .values({ id: region.id, name: region.name })
      .onConflictDoNothing()
      .execute();
  }
  console.log('✅ Regiones insertadas.\n');

  // Insertar comunas
  let totalComunas = 0;
  for (const [regionId, comunasList] of Object.entries(COMUNAS_POR_REGION)) {
    for (const comuna of comunasList) {
      await db
        .insert(communes)
        .values({ id: comuna.id, regionId, name: comuna.name })
        .onConflictDoNothing()
        .execute();
      totalComunas++;
    }
  }
  console.log(`✅ ${totalComunas} comunas insertadas.\n`);

  // Verificar
  const regionCount = await db.select().from(regions).execute();
  const comunaCount = await db.select().from(communes).execute();
  console.log(`📊 Total: ${regionCount.length} regiones, ${comunaCount.length} comunas.`);
  console.log('🎉 Seed completado exitosamente.');
}

seed()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('❌ Error en seed:', err);
    process.exit(1);
  });
import 'dotenv/config';
import { neon } from '@neondatabase/serverless';

async function verify() {
  const sql = neon(process.env.DATABASE_URL!);
  const r = await sql`SELECT count(*) as cnt FROM regions`;
  const c = await sql`SELECT count(*) as cnt FROM communes`;
  const rm = await sql`SELECT name FROM regions WHERE id = 'r07'`;
  const stgo = await sql`SELECT c.name as comuna, r.name as region FROM communes c JOIN regions r ON c.region_id = r.id WHERE c.id = 'c0701'`;
  console.log('Regiones:', r[0].cnt, '| Comunas:', c[0].cnt);
  console.log('Region 07:', rm[0].name);
  console.log('Santiago:', stgo[0].comuna, '/', stgo[0].region);
}

verify().catch(console.error);
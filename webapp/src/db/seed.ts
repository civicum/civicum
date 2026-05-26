import { inArray } from "drizzle-orm";
import { getDb } from "../server/db";
import { communityReports } from "./schema";
import * as dotenv from "dotenv";

dotenv.config();

const ALLOW_SEED_ENV = "CIVICUM_ALLOW_DB_SEED";
const SUSPICIOUS_DATABASE_MARKER = /(prod|production|staging)/i;

const seedReports = [
    {
        title: "Bache en Avenida Central",
        description: "Agujero profundo en el carril derecho justo antes del cruce.",
        status: "PENDING"
    },
    {
        title: "Luminaria apagada",
        description: "Poste de luz no funciona hace 3 noches en el parque sur.",
        status: "PENDING"
    }
];

function hasSuspiciousDatabaseUrl(databaseUrl: string) {
    try {
        const url = new URL(databaseUrl);
        return [url.hostname, url.pathname, url.username].some((part) =>
            SUSPICIOUS_DATABASE_MARKER.test(part)
        );
    } catch {
        return SUSPICIOUS_DATABASE_MARKER.test(databaseUrl);
    }
}

function assertSeedAllowed() {
    const databaseUrl = process.env.DATABASE_URL;

    if (process.env.NODE_ENV?.toLowerCase() === "production") {
        console.error("Seed blocked: NODE_ENV=production is never allowed.");
        process.exit(1);
    }

    if (process.env[ALLOW_SEED_ENV] !== "true") {
        console.error(
            `Seed blocked: set ${ALLOW_SEED_ENV}=true only for an intentional local seed.`
        );
        process.exit(1);
    }

    if (!databaseUrl) {
        console.error("Seed blocked: DATABASE_URL is not configured.");
        process.exit(1);
    }

    if (hasSuspiciousDatabaseUrl(databaseUrl)) {
        console.error(
            "Seed blocked: DATABASE_URL looks like prod/staging/production. Refusing to seed."
        );
        process.exit(1);
    }
}

async function seed() {
    console.log("Seeding community_reports...");
    assertSeedAllowed();

    try {
        const db = getDb();
        const seedTitles = seedReports.map((report) => report.title);
        const existingReports = await db
            .select({ title: communityReports.title })
            .from(communityReports)
            .where(inArray(communityReports.title, seedTitles));
        const existingTitles = new Set(existingReports.map((report) => report.title));
        const reportsToInsert = seedReports.filter((report) => !existingTitles.has(report.title));

        if (reportsToInsert.length === 0) {
            console.log("Seed skipped: community_reports seed rows already exist.");
            process.exit(0);
        }

        await db.insert(communityReports).values(reportsToInsert);
        console.log(`Seed complete: inserted ${reportsToInsert.length} community_reports row(s).`);
        process.exit(0);
    } catch (error) {
        console.error("Seed failed:", error);
        process.exit(1);
    }
}

seed();

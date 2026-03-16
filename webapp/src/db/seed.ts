
import { getDb } from "../server/db";
import { communityReports } from "./schema";
import * as dotenv from "dotenv";

dotenv.config();

async function seed() {
    console.log("🌱 Seeding database...");
    
    if (!process.env.DATABASE_URL) {
        console.error("❌ Seeding blocked: DATABASE_URL is not configured.");
        process.exit(1);
    }
    
    try {
        const db = getDb();
        await db.insert(communityReports).values([
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
        ]);
        console.log("✅ Seed complete.");
        process.exit(0);
    } catch (error) {
        console.error("❌ Seed failed:", error);
        process.exit(1);
    }
}

seed();

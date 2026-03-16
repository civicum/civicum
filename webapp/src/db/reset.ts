import { getDb } from "../server/db";
import { communityReports } from "./schema";
import * as dotenv from "dotenv";

dotenv.config();

async function reset() {
    console.log("🗑️ Resetting database...");
    
    if (!process.env.DATABASE_URL) {
        console.error("❌ Reset blocked: DATABASE_URL is not configured.");
        process.exit(1);
    }
    
    try {
        const db = getDb();
        await db.delete(communityReports);
        console.log("✅ Database reset complete (0 rows).");
        process.exit(0);
    } catch (error) {
        console.error("❌ Reset failed:", error);
        process.exit(1);
    }
}

reset();

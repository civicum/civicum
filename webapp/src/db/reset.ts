import { getDb } from "../server/db";
import { communityReports } from "./schema";
import * as dotenv from "dotenv";

dotenv.config();

const ALLOW_RESET_ENV = "CIVICUM_ALLOW_DB_RESET";
const SUSPICIOUS_DATABASE_MARKER = /(prod|production|staging)/i;

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

function assertResetAllowed() {
    const databaseUrl = process.env.DATABASE_URL;

    if (process.env.NODE_ENV?.toLowerCase() === "production") {
        console.error("Reset blocked: NODE_ENV=production is never allowed.");
        process.exit(1);
    }

    if (process.env[ALLOW_RESET_ENV] !== "true") {
        console.error(
            `Reset blocked: set ${ALLOW_RESET_ENV}=true only for an intentional local reset of community_reports.`
        );
        process.exit(1);
    }

    if (!databaseUrl) {
        console.error("Reset blocked: DATABASE_URL is not configured.");
        process.exit(1);
    }

    if (hasSuspiciousDatabaseUrl(databaseUrl)) {
        console.error(
            "Reset blocked: DATABASE_URL looks like prod/staging/production. Refusing to delete community_reports."
        );
        process.exit(1);
    }
}

async function reset() {
    console.log("Resetting community_reports...");
    assertResetAllowed();

    try {
        const db = getDb();
        await db.delete(communityReports);
        console.log("Reset complete: community_reports deleted.");
        process.exit(0);
    } catch (error) {
        console.error("Reset failed:", error);
        process.exit(1);
    }
}

reset();

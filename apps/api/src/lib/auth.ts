import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";
import * as schema from "../db/schema/users"; // Import users schema if needed map

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg", // or "postgresql", check docs. "pg" is common. 
        // If using custom schema mapping:
        // schema: { ... }
    }),
    emailAndPassword: {
        enabled: true,
    },
    // Add other plugins or providers here
});

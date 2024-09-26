import type { Config } from "drizzle-kit";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  out: "./src/server/db/migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  }
} satisfies Config;
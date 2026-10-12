import { defineConfig } from "drizzle-kit";

// Generates SQL migrations into ./drizzle; apply with `bun run db:migrate:remote`.
export default defineConfig({
  dialect: "sqlite",
  schema: "./src/api/database/schema.ts",
  out: "./drizzle",
});

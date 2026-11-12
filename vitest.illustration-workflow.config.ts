import { defineConfig } from "vitest/config";
/** Dedicated local database tests, no global setup and no database reset. */
export default defineConfig({
  test: { environment: "node", include: ["tests/illustration-workflow.integration.test.ts"] },
});

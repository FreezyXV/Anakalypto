import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";

/** Pure content and progression checks: no env loading, migrations or database. */
export default defineConfig({
  test: { environment: "node", include: ["tests/discovery.test.ts"] },
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
});

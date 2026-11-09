import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";

/** Content and SVG checks only: no env loading, migrations, database or network. */
export default defineConfig({
  test: {
    environment: "node",
    include: [
      "tests/discovery.test.ts",
      "tests/lesson-visuals.test.ts",
      "tests/markdown.test.ts",
      "tests/preview-safety.test.ts",
    ],
  },
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
});

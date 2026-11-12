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
      "tests/visual-inventory.test.ts",
      "tests/illustration-workflow.test.ts",
      "tests/energy29-models.test.ts",
      "tests/batch50.test.ts",
      "tests/schemas.test.ts",
      "tests/energy29-preservation.test.ts",
      "tests/existing-drawings-review.test.ts",
    ],
  },
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
});

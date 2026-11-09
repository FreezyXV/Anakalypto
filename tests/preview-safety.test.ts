import { spawnSync } from "node:child_process";
import process from "node:process";
import { describe, expect, it } from "vitest";

function refusedTarget(databaseUrl?: string) {
  const environment = { ...process.env };
  delete environment.DATABASE_URL;
  delete environment.DIRECT_URL;
  if (databaseUrl) {
    environment.DATABASE_URL = databaseUrl;
    environment.DIRECT_URL = databaseUrl;
  }
  return spawnSync(process.execPath, ["--import", "tsx", "scripts/check-preview-content.ts"], {
    env: environment,
    encoding: "utf8",
    timeout: 10_000,
  });
}

describe("preview content check safety", () => {
  it("refuses a remote target before opening a database connection", () => {
    const result = refusedTarget("postgresql://preview@production.invalid/anakalypto_preview");
    expect(result.status).toBe(1);
    expect(result.stderr).toContain("Ce contrôle exige les deux URL explicites");
  });

  it("does not fall back to the repository's environment files", () => {
    const result = refusedTarget();
    expect(result.status).toBe(1);
    expect(result.stderr).toContain("Ce contrôle exige les deux URL explicites");
  });

  it("refuses the separate integration-test database", () => {
    const result = refusedTarget("postgresql://preview@127.0.0.1:54329/anakalypto_preview_test");
    expect(result.status).toBe(1);
    expect(result.stderr).toContain("Ce contrôle exige les deux URL explicites");
  });
});

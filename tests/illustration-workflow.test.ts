import { describe, expect, it } from "vitest";
import { spawnSync } from "node:child_process";
import { articleHash, assertCompletion } from "../src/lib/illustration-workflow/policy";

describe("illustration workflow safeguards", () => {
  const a = { title: "A", summary: "B", content: "C" };
  const valid = {
    owner: "Codex",
    claimedBy: "Codex",
    currentHash: "same",
    claimContentHash: "same",
    visualRefs: ["schema:broadcast"],
    evidence: "docs/qa/example/README.md",
    fingerprint: "a".repeat(64),
  };
  it("requires the owner, unchanged lesson and actual review metadata to finish", () => {
    expect(() => assertCompletion(valid)).not.toThrow();
    expect(() => assertCompletion({ ...valid, owner: "Claude" })).toThrow("réservée");
    expect(() => assertCompletion({ ...valid, currentHash: "changed" })).toThrow("changé");
    expect(() => assertCompletion({ ...valid, visualRefs: [] })).toThrow("illustration");
    expect(() => assertCompletion({ ...valid, evidence: "" })).toThrow("recette");
  });
  it("detects changes to lesson body, summary, title and full path", () => {
    const hash = articleHash(a, "/one");
    for (const field of ["content", "summary", "title"] as const)
      expect(articleHash({ ...a, [field]: "changed" }, "/one")).not.toBe(hash);
    expect(articleHash(a, "/two")).not.toBe(hash);
  });
  it("never falls back to the production DATABASE_URL or .env.local", () => {
    const env: NodeJS.ProcessEnv = {
      ...process.env,
      DATABASE_URL: "postgresql://production.invalid/db",
    };
    delete env.ILLUSTRATION_DATABASE_URL;
    const result = spawnSync(
      process.execPath,
      ["--import", "tsx", "scripts/illustration-work.ts", "summary"],
      { env, encoding: "utf8", timeout: 10_000 },
    );
    expect(result.status).toBe(1);
    expect(result.stderr).toContain("ILLUSTRATION_DATABASE_URL explicite requise");
  });
});

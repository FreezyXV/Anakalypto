import { describe, it, expect } from "vitest";
import {
  stableRef,
  classifyVisual,
  assertClaim,
  csv,
  type Review,
} from "../scripts/visual-inventory-lib";
const review: Review = {
  quality: "validee",
  fingerprint: "before",
  evidence: "docs/qa/example/README.md",
  reviewedAt: "2026-11-11",
  reason: "reviewed",
};
describe("visual inventory anti-duplication", () => {
  it("keeps references stable when other lessons are added or reordered", () => {
    const first = ["/one", "/two"].map(stableRef),
      second = ["/new", "/two", "/one"].map(stableRef);
    expect(second[2]).toBe(first[0]);
    expect(second[1]).toBe(first[1]);
    expect(new Set(second).size).toBe(3);
  });
  it("does not infer quality from the mere presence of an illustration", () => {
    expect(classifyVisual(true, "current")).toBe("a_verifier");
    expect(classifyVisual(false, "current", review)).toBe("sans_illustration");
    expect(classifyVisual(true, "before", review)).toBe("validee");
  });
  it("invalidates a review when the article or rendering fingerprint changes", () => {
    expect(classifyVisual(true, "after", review)).toBe("a_verifier");
    expect(classifyVisual(true, "before", { ...review, quality: "a_ameliorer" })).toBe(
      "a_ameliorer",
    );
  });
  it("blocks duplicate reservations and recreation of existing art", () => {
    expect(() =>
      assertClaim(
        "/one",
        false,
        "sans_illustration",
        { "/one": { owner: "Claude", action: "create", startedAt: "2026-11-11", note: "" } },
        "Codex",
        "create",
      ),
    ).toThrow("Claude");
    expect(() => assertClaim("/one", true, "a_verifier", {}, "Codex", "create")).toThrow(
      "existe déjà",
    );
    expect(() => assertClaim("/one", true, "validee", {}, "Codex", "improve")).toThrow("anomalie");
    expect(() => assertClaim("/one", false, "sans_illustration", {}, "Codex", "review")).toThrow(
      "Aucun visuel",
    );
    expect(() => assertClaim("/one", true, "a_ameliorer", {}, "Codex", "improve")).not.toThrow();
  });
  it("preserves commas, quotes and line breaks in exported references", () => {
    expect(
      csv([{ title: 'Une « idée », dite "A"\nsuite', ref: "LEC-test" }], ["ref", "title"]),
    ).toBe('ref,title\n"LEC-test","Une « idée », dite ""A""\nsuite"\n');
  });
});

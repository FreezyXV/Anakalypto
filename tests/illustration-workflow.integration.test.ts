import { randomUUID } from "node:crypto";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";
import { articleHash } from "../src/lib/illustration-workflow/policy";
import { bootstrapIllustrations } from "../src/lib/illustration-workflow/bootstrap";
import { completeInlineReview } from "../src/lib/illustration-workflow/inline";
import {
  claimIllustration,
  completeIllustration,
  illustrationList,
  illustrationSummary,
  releaseIllustration,
} from "../src/lib/illustration-workflow/service";

const url = process.env.ILLUSTRATION_DATABASE_URL;
if (
  !url ||
  new URL(url).hostname !== "127.0.0.1" ||
  new URL(url).pathname !== "/anakalypto_preview"
)
  throw new Error("Ces tests exigent la base jetable anakalypto_preview sur 127.0.0.1, sans .env.");
const db = new PrismaClient({ adapter: new PrismaPg({ connectionString: url }) });
const slug = `visual-test-${randomUUID()}`,
  p = `/${slug}/${slug}`;
let articleId: string, categoryId: string;
const review = {
  visualRefs: ["schema:test-only"],
  fingerprint: "a".repeat(64),
  evidence: "docs/qa/backend/README.md",
};

describe.sequential("persistent illustration queue on isolated PostgreSQL", () => {
  beforeAll(async () => {
    const c = await db.category.create({
      data: { slug, path: slug, name: "Test isolé", level: 0 },
    });
    categoryId = c.id;
    const a = await db.article.create({
      data: {
        slug,
        categoryId,
        title: "Test isolé",
        summary: "Fixture",
        content: "Texte initial",
        status: "DRAFT",
      },
    });
    articleId = a.id;
  });
  afterAll(async () => {
    // Deletes only the uniquely named test-owned fixture, never the application corpus.
    if (articleId) await db.article.delete({ where: { id: articleId } });
    if (categoryId) await db.category.delete({ where: { id: categoryId } });
    await db.$disconnect();
  });
  it("ignores drafts and automatically queues the article only on publication", async () => {
    expect(await db.articleIllustration.findUnique({ where: { articleId } })).toBeNull();
    await db.article.update({ where: { id: articleId }, data: { status: "PUBLISHED" } });
    expect(await db.articleIllustration.findUnique({ where: { articleId } })).toMatchObject({
      status: "WAITING_FOR_ILLUSTRATION",
      lessonPath: p,
      visualRefs: [],
    });
  });
  it("records editorial schemas independently from drawings and invalidates changed text", async () => {
    const schema =
      "```schema\ntype: etapes\ntitre: Exemple\nelements:\n - titre: Un\n - titre: Deux\n```";
    await db.article.update({ where: { id: articleId }, data: { content: schema } });
    const row = await db.articleIllustration.findUniqueOrThrow({ where: { articleId } });
    expect(row).toMatchObject({
      inlineSchemaCount: 1,
      inlineStatus: "REVIEW_REQUIRED",
      visualRefs: [],
    });
    const listed = (await illustrationList(db, undefined, 1000)).find(
      (r) => r.articleId === articleId,
    )!;
    expect(listed).toMatchObject({ hasVisual: true, hasDrawing: false, hasInlineSchema: true });
    await expect(
      db.articleIllustration.update({ where: { articleId }, data: { inlineStatus: "READY" } }),
    ).rejects.toThrow();
    await db.articleIllustration.update({
      where: { articleId },
      data: {
        inlineStatus: "READY",
        inlineEvidence: "docs/qa/fixture.md",
        inlineReviewedContentHash: "a".repeat(64),
      },
    });
    await db.article.update({
      where: { id: articleId },
      data: { content: schema + "\nTexte modifié" },
    });
    expect(await db.articleIllustration.findUniqueOrThrow({ where: { articleId } })).toMatchObject({
      inlineStatus: "REVIEW_REQUIRED",
      inlineReviewedContentHash: null,
      inlineEvidence: null,
    });
    await db.article.update({ where: { id: articleId }, data: { content: "Texte initial" } });
    expect(await db.articleIllustration.findUniqueOrThrow({ where: { articleId } })).toMatchObject({
      inlineSchemaCount: 0,
      inlineStatus: "WAITING_FOR_ILLUSTRATION",
    });
  });
  it("tracks a schema on direct publication and protects its review against stale claims", async () => {
    const a = await db.article.create({
      data: {
        slug: `${slug}-inline`,
        categoryId,
        title: "Schéma isolé",
        summary: "Fixture",
        content:
          "  ```schema\ntype: etapes\ntitre: Exemple\nelements:\n - titre: Un\n - titre: Deux\n  ```",
        status: "PUBLISHED",
      },
    });
    const path = `/${slug}/${a.slug}`;
    try {
      expect(
        await db.articleIllustration.findUniqueOrThrow({ where: { articleId: a.id } }),
      ).toMatchObject({ inlineSchemaCount: 1, inlineStatus: "REVIEW_REQUIRED" });
      await claimIllustration(db, path, "Codex");
      await expect(completeInlineReview(db, path, "Claude", review.evidence)).rejects.toThrow(
        "Réserver",
      );
      await completeInlineReview(db, path, "Codex", review.evidence);
      expect(
        await db.articleIllustration.findUniqueOrThrow({ where: { articleId: a.id } }),
      ).toMatchObject({
        inlineStatus: "READY",
        status: "WAITING_FOR_ILLUSTRATION",
        visualRefs: [],
      });
      await db.article.update({ where: { id: a.id }, data: { title: "Texte actualisé" } });
      await expect(completeInlineReview(db, path, "Codex", review.evidence)).rejects.toThrow(
        "modifié",
      );
      await releaseIllustration(db, path, "Codex");
      await claimIllustration(db, path, "Codex");
      await completeInlineReview(db, path, "Codex", review.evidence);
      await db.category.update({ where: { id: categoryId }, data: { path: `${slug}-moved` } });
      expect(
        await db.articleIllustration.findUniqueOrThrow({ where: { articleId: a.id } }),
      ).toMatchObject({ inlineStatus: "REVIEW_REQUIRED", inlineEvidence: null });
    } finally {
      await db.category.update({ where: { id: categoryId }, data: { path: slug } });
      await db.article.delete({ where: { id: a.id } });
    }
  });
  it("allows exactly one concurrent claimant and refuses another owner finishing", async () => {
    const results = await Promise.allSettled([
      claimIllustration(db, p, "Codex"),
      claimIllustration(db, p, "Claude"),
    ]);
    expect(results.filter((r) => r.status === "fulfilled")).toHaveLength(1);
    const row = await db.articleIllustration.findUniqueOrThrow({ where: { articleId } });
    await expect(
      completeIllustration(db, p, row.claimedBy === "Codex" ? "Claude" : "Codex", review),
    ).rejects.toThrow("réservée");
    expect(
      (await illustrationList(db, "WAITING_FOR_ILLUSTRATION", 1000)).some(
        (r) => r.articleId === articleId,
      ),
    ).toBe(false);
    await releaseIllustration(db, p, row.claimedBy!);
  });
  it("rejects READY without a review and rejects partial reservations in PostgreSQL", async () => {
    await expect(
      db.articleIllustration.update({ where: { articleId }, data: { status: "READY" } }),
    ).rejects.toThrow();
    await expect(
      db.articleIllustration.update({ where: { articleId }, data: { claimedAt: new Date() } }),
    ).rejects.toThrow();
    expect(await db.articleIllustration.findUnique({ where: { articleId } })).toMatchObject({
      status: "WAITING_FOR_ILLUSTRATION",
      claimedBy: null,
    });
  });
  it("does not approve work when the lesson changes while reserved", async () => {
    await claimIllustration(db, p, "Codex");
    await db.article.update({ where: { id: articleId }, data: { content: "Texte modifié" } });
    await expect(completeIllustration(db, p, "Codex", review)).rejects.toThrow("changé");
    await releaseIllustration(db, p, "Codex");
  });
  it("persists a reviewed visual and prevents a second creation", async () => {
    await claimIllustration(db, p, "Codex");
    await completeIllustration(db, p, "Codex", review);
    const row = await db.articleIllustration.findUniqueOrThrow({
      where: { articleId },
      include: { article: true },
    });
    expect(row).toMatchObject({
      status: "READY",
      visualRefs: review.visualRefs,
      claimedBy: null,
      reviewedContentHash: articleHash(row.article, p),
    });
    await expect(claimIllustration(db, p, "Claude")).rejects.toThrow("modifiée");
  });
  it("invalidates a review after editing and preserves the existing illustration", async () => {
    await db.article.update({ where: { id: articleId }, data: { summary: "Résumé corrigé" } });
    expect(await db.articleIllustration.findUnique({ where: { articleId } })).toMatchObject({
      status: "REVIEW_REQUIRED",
      visualRefs: review.visualRefs,
      reviewedContentHash: null,
    });
  });
  it("hides unpublished lessons from every work list and claim", async () => {
    await db.article.update({ where: { id: articleId }, data: { status: "DRAFT" } });
    await expect(claimIllustration(db, p, "Codex")).rejects.toThrow("introuvable");
    expect(
      (await illustrationList(db, undefined, 1000)).some((r) => r.articleId === articleId),
    ).toBe(false);
    const s = await illustrationSummary(db);
    expect(s.untracked).toBe(0);
    expect(Object.values(s.counts).reduce((n, s) => n + s.count, 0)).toBe(s.published);
  });
  it("does not reuse READY after editing a temporarily unpublished lesson", async () => {
    await db.article.update({ where: { id: articleId }, data: { status: "PUBLISHED" } });
    await claimIllustration(db, p, "Codex");
    await completeIllustration(db, p, "Codex", review);
    await db.article.update({ where: { id: articleId }, data: { status: "DRAFT" } });
    await db.article.update({
      where: { id: articleId },
      data: { content: "Correction avant republication" },
    });
    await db.article.update({ where: { id: articleId }, data: { status: "PUBLISHED" } });
    expect(await db.articleIllustration.findUnique({ where: { articleId } })).toMatchObject({
      status: "REVIEW_REQUIRED",
      visualRefs: review.visualRefs,
      reviewedContentHash: null,
    });
    await db.article.update({ where: { id: articleId }, data: { status: "DRAFT" } });
  });
  it("does not overwrite a later review on repeated initialization", async () => {
    const before = await db.articleIllustration.findMany({
      where: { status: "READY" },
      orderBy: { articleId: "asc" },
    });
    expect(await bootstrapIllustrations(db)).toMatchObject({ initialized: 0 });
    expect(
      await db.articleIllustration.findMany({
        where: { status: "READY" },
        orderBy: { articleId: "asc" },
      }),
    ).toEqual(before);
  });
  it("paginates the queue without returning the same lesson twice", async () => {
    const first = await illustrationList(db, undefined, 10);
    const next = await illustrationList(db, undefined, 10, first.at(-1)!.lessonPath);
    expect(first).toHaveLength(10);
    expect(next).toHaveLength(10);
    expect(next.every((r) => r.lessonPath > first.at(-1)!.lessonPath)).toBe(true);
    expect(new Set([...first, ...next].map((r) => r.articleId)).size).toBe(20);
  });
  it("updates the reference and retains the drawing when its category path changes", async () => {
    await db.article.update({ where: { id: articleId }, data: { status: "PUBLISHED" } });
    await db.category.update({ where: { id: categoryId }, data: { path: slug + "-moved" } });
    expect(await db.articleIllustration.findUnique({ where: { articleId } })).toMatchObject({
      lessonPath: `/${slug}-moved/${slug}`,
      status: "REVIEW_REQUIRED",
      visualRefs: review.visualRefs,
    });
  });
});

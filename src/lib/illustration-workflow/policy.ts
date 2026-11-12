import { createHash } from "node:crypto";

export const ILLUSTRATION_LABELS = {
  WAITING_FOR_ILLUSTRATION: "En attente d’illustration dessinée",
  REVIEW_REQUIRED: "Illustration à vérifier",
  READY: "Prête, illustration incluse et vérifiée",
  NEEDS_IMPROVEMENT: "Illustration à améliorer",
} as const;
export type VisualStatus = keyof typeof ILLUSTRATION_LABELS;
export function lessonRef(path: string) {
  return `LEC-${createHash("sha256").update(path).digest("hex").slice(0, 12).toUpperCase()}`;
}
export function articleHash(a: { title: string; summary: string; content: string }, p: string) {
  return createHash("sha256")
    .update(JSON.stringify([p, a.title, a.summary, a.content]))
    .digest("hex");
}
export function assertCompletion(input: {
  owner: string;
  claimedBy: string | null;
  claimContentHash: string | null;
  currentHash: string;
  visualRefs: string[];
  evidence: string;
  fingerprint: string;
}) {
  if (!input.owner.trim() || input.owner !== input.claimedBy)
    throw new Error("La leçon doit être réservée par cet agent.");
  if (input.claimContentHash !== input.currentHash)
    throw new Error("Le contenu a changé depuis la réservation : libérer puis revoir la leçon.");
  if (!input.visualRefs.length || input.visualRefs.some((v) => !v.trim()))
    throw new Error("Une illustration spécifique associée à cette leçon est requise.");
  if (!input.evidence.startsWith("docs/qa/") || !/^[a-f0-9]{64}$/.test(input.fingerprint))
    throw new Error("Un rapport de recette et une empreinte de rendu sont requis.");
}

/** Presence is independent of visual quality: an unreviewed editorial schema still exists. */
export function visualPresence(row: { inlineSchemaCount: number; visualRefs: string[] }) {
  const hasDrawing = row.visualRefs.length > 0,
    hasInlineSchema = row.inlineSchemaCount > 0;
  return {
    hasVisual: hasDrawing || hasInlineSchema,
    hasDrawing,
    hasInlineSchema,
    inlineSchemaCount: row.inlineSchemaCount,
  };
}

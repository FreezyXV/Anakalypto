import review from "../../docs/qa/revue-integrale-2026-11-20/reviewed-render-hashes.json";

export const reviewedDiagramHashes: Readonly<Record<string, string[]>> = review.diagrams;
export const reviewedWorkshopHashes = review.workshops;

export function hasReviewedDiagram(id: string) {
  return Object.hasOwn(reviewedDiagramHashes, id);
}

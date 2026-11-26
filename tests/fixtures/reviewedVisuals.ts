import mecanique from "../../docs/qa/refonte-mecanique-auto/rendus.json";
import flottaison from "../../docs/qa/refonte-aviation/flottaison-rendus.json";
import aviation from "../../docs/qa/refonte-aviation/rendus.json";
import transport from "../../docs/qa/refonte-catalogue-suite/rendus.json";
import moteurs from "../../docs/qa/refonte-ateliers-moteurs/rendus.json";
import review from "../../docs/qa/revue-integrale-2026-11-20/reviewed-render-hashes.json";

export const reviewedDiagramHashes: Readonly<Record<string, string[]>> = {
  ...review.diagrams,
  ...transport,
  ...aviation,
  ...mecanique,
};
export const reviewedWorkshopHashes = { ...review.workshops, ...moteurs, ...flottaison };

export function hasReviewedDiagram(id: string) {
  return Object.hasOwn(reviewedDiagramHashes, id);
}

export function hasTransportRevision(id: string) {
  return (
    Object.hasOwn(transport, id) || Object.hasOwn(aviation, id) || Object.hasOwn(mecanique, id)
  );
}

export { lessonRef as stableRef } from "../src/lib/illustration-workflow/policy";
export type Quality = "validee" | "a_ameliorer" | "a_verifier" | "sans_illustration";
export type Review = {
  quality: "validee" | "a_ameliorer";
  fingerprint: string;
  evidence: string;
  reviewedAt: string;
  reason: string;
};
export type Reservation = {
  owner: string;
  action: "create" | "review" | "improve";
  startedAt: string;
  note: string;
};
export function classifyVisual(present: boolean, fingerprint: string, review?: Review): Quality {
  if (!present) return "sans_illustration";
  if (!review || review.fingerprint !== fingerprint) return "a_verifier";
  return review.quality;
}
export function assertClaim(
  path: string,
  present: boolean,
  quality: Quality,
  reservations: Record<string, Reservation>,
  owner: string,
  action: Reservation["action"],
) {
  if (!path.startsWith("/") || !owner.trim()) throw new Error("Référence et responsable requis");
  if (reservations[path])
    throw new Error(`Déjà réservé par ${reservations[path]!.owner} : ${path}`);
  if (action === "create" && present)
    throw new Error(`Un visuel existe déjà : réserver une revue, pas une création (${path})`);
  if (action !== "create" && !present) throw new Error(`Aucun visuel à revoir : ${path}`);
  if (action === "improve" && quality !== "a_ameliorer")
    throw new Error(`Une anomalie documentée est nécessaire avant de refaire ce visuel : ${path}`);
}
export function csv(rows: Record<string, string>[], columns: string[]) {
  const q = (v: string) => `"${v.replaceAll('"', '""')}"`;
  return (
    [columns.join(","), ...rows.map((row) => columns.map((c) => q(row[c] ?? "")).join(","))].join(
      "\n",
    ) + "\n"
  );
}

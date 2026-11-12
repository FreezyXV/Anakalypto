import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { ILLUSTRATION_LABELS, type VisualStatus } from "@/lib/illustration-workflow/policy";
import { illustrationList, illustrationSummary } from "@/lib/illustration-workflow/service";

export const dynamic = "force-dynamic";

/** Read-only public catalogue metadata. Claims and review writes require the server CLI. */
export async function GET(request: Request) {
  const p = new URL(request.url).searchParams,
    status = p.get("status") ?? "WAITING_FOR_ILLUSTRATION";
  const limit = Number(p.get("limit") ?? "50"),
    after = p.get("after") ?? undefined;
  const headers = { "Cache-Control": "no-store" };
  if (
    (status !== "ALL" && !Object.hasOwn(ILLUSTRATION_LABELS, status)) ||
    !Number.isInteger(limit) ||
    limit < 1 ||
    limit > 100 ||
    (after && (!after.startsWith("/") || after.length > 2000))
  )
    return NextResponse.json(
      {
        error: "Paramètres invalides : statut documenté, limit de 1 à 100, after = chemin complet.",
      },
      { status: 400, headers },
    );
  const [summary, rows] = await Promise.all([
    illustrationSummary(prisma),
    illustrationList(
      prisma,
      status === "ALL" ? undefined : (status as VisualStatus),
      limit + 1,
      after,
    ),
  ]);
  const lessons = rows.slice(0, limit).map((r) => ({
    ref: r.ref,
    path: r.lessonPath,
    title: r.title,
    status: r.status,
    label: r.label,
    visualRefs: r.visualRefs,
    hasVisual: r.hasVisual,
    hasDrawing: r.hasDrawing,
    hasInlineSchema: r.hasInlineSchema,
    inlineSchemaCount: r.inlineSchemaCount,
    inlineStatus: r.inlineStatus,
  }));
  return NextResponse.json(
    {
      summary,
      filter: status,
      guidance:
        "hasVisual inclut les schémas du texte ; WAITING_FOR_ILLUSTRATION concerne le dessin spécifique. Contrôler l’existant avant tout ajout.",
      unclaimedOnly: true,
      lessons,
      nextCursor: rows.length > limit ? lessons.at(-1)!.path : null,
    },
    { headers },
  );
}

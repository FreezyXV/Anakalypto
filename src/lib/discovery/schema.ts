import { z } from "zod";
import { MECHANISM_KINDS, MECHANISM_SCENES, isSequentialKind } from "./mechanisms";

const shortText = z.string().trim().min(1).max(240);
const slug = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
const option = z.object({ id: slug, label: shortText, feedback: shortText }).strict();

export const interactionSchema = z.discriminatedUnion("kind", [
  z
    .object({
      kind: z.literal("choice"),
      question: shortText,
      options: z.array(option).min(2).max(4),
      correctOptionId: slug,
      checkpoint: z.boolean().default(false),
    })
    .strict()
    .superRefine((value, ctx) => {
      if (!value.options.some((item) => item.id === value.correctOptionId))
        ctx.addIssue({ code: "custom", message: "La bonne reponse doit designer une option." });
      if (new Set(value.options.map((item) => item.id)).size !== value.options.length)
        ctx.addIssue({
          code: "custom",
          message: "Les options doivent avoir des identifiants uniques.",
        });
    }),
  z
    .object({
      kind: z.literal("toggle"),
      label: shortText,
      onLabel: shortText,
      offLabel: shortText,
      onFeedback: shortText,
      offFeedback: shortText,
    })
    .strict(),
  z
    .object({
      kind: z.literal("range"),
      label: shortText,
      minLabel: shortText,
      maxLabel: shortText,
      feedback: shortText,
    })
    .strict(),
]);

export const discoveryLessonSchema = z
  .object({
    slug,
    version: z.number().int().positive(),
    status: z.enum(["draft", "published"]),
    title: z.string().trim().min(1).max(100),
    summary: shortText,
    domain: shortText,
    domainPath: slug,
    minutes: z.number().int().min(1).max(10),
    expandedPath: z
      .string()
      .regex(/^\/(?:[a-z0-9]+(?:-[a-z0-9]+)*\/){1,}[a-z0-9]+(?:-[a-z0-9]+)*$/),
    objective: shortText,
    sources: z
      .array(
        z
          .object({ title: shortText, url: z.url(), publisher: shortText, checkedAt: z.iso.date() })
          .strict(),
      )
      .min(1),
    steps: z
      .array(
        z
          .object({
            id: slug,
            title: z.string().trim().min(1).max(80),
            text: shortText,
            visual: z
              .object({
                kind: z.enum(["soap", "turbo", "circuit", "flow", "piston", ...MECHANISM_KINDS]),
                caption: shortText,
                labels: z.array(z.string().trim().min(1).max(30)).min(2).max(5).optional(),
                active: z.boolean().default(false),
                loop: z.boolean().optional(),
                loopTo: z.number().int().nonnegative().optional(),
                offReached: z.number().int().min(0).max(4).optional(),
                phase: z.number().int().min(0).max(3).optional(),
                frame: z.number().int().min(0).max(4).optional(),
                scene: z
                  .enum(["walls", "land", "retouch", "erosion", "balance", "gust", "microbes"])
                  .optional(),
              })
              .strict(),
            interaction: interactionSchema.optional(),
          })
          .strict(),
      )
      .min(5)
      .max(8),
  })
  .strict()
  .superRefine((lesson, ctx) => {
    if (new Set(lesson.steps.map((step) => step.id)).size !== lesson.steps.length)
      ctx.addIssue({
        code: "custom",
        message: "Les etapes doivent avoir des identifiants uniques.",
      });
    const checks = lesson.steps.filter(
      (step) => step.interaction?.kind === "choice" && step.interaction.checkpoint,
    );
    if (checks.length < 2)
      ctx.addIssue({ code: "custom", message: "Deux defis de comprehension sont necessaires." });
    if (!lesson.steps.some((step) => ["toggle", "range"].includes(step.interaction?.kind ?? "")))
      ctx.addIssue({ code: "custom", message: "Une manipulation est necessaire." });
    for (const step of lesson.steps) {
      if (step.visual.kind === "flow" && !step.visual.labels)
        ctx.addIssue({ code: "custom", message: "Un flux doit nommer ses elements." });
      const visual = step.visual;
      if (visual.frame !== undefined && !isSequentialKind(visual.kind))
        ctx.addIssue({
          code: "custom",
          message: "Une image fixe concerne uniquement les visuels séquentiels.",
        });
      if (visual.frame !== undefined && ["range", "toggle"].includes(step.interaction?.kind ?? ""))
        ctx.addIssue({
          code: "custom",
          message: "Une manipulation doit commander son image, sans image fixe.",
        });
      if (visual.scene !== undefined) {
        const scenes = MECHANISM_SCENES[visual.kind as keyof typeof MECHANISM_SCENES] as
          readonly string[] | undefined;
        if (!scenes?.includes(visual.scene))
          ctx.addIssue({
            code: "custom",
            message: "Cette scène ne correspond pas au sujet du visuel.",
          });
      }
      if (
        visual.kind !== "flow" &&
        (visual.loop !== undefined ||
          visual.loopTo !== undefined ||
          visual.offReached !== undefined)
      )
        ctx.addIssue({
          code: "custom",
          message: "Les options de chaine concernent uniquement flow.",
        });
      if (visual.kind !== "piston" && visual.phase !== undefined)
        ctx.addIssue({ code: "custom", message: "La phase fixe concerne uniquement piston." });
      if (
        visual.loopTo !== undefined &&
        (!visual.loop || visual.loopTo >= (visual.labels?.length ?? 0) - 1)
      )
        ctx.addIssue({
          code: "custom",
          message: "Le retour de boucle doit viser une etape anterieure.",
        });
      if (visual.offReached !== undefined && visual.offReached >= (visual.labels?.length ?? 0))
        ctx.addIssue({
          code: "custom",
          message: "L'arret doit preceder la derniere etape de la chaine.",
        });
    }
  });

export type DiscoveryLesson = z.infer<typeof discoveryLessonSchema>;
export type DiscoveryStep = DiscoveryLesson["steps"][number];
export type DiscoveryInteraction = z.infer<typeof interactionSchema>;

import type { DiscoveryLesson, DiscoveryStep } from "./schema";
import { rangeValueLabel } from "./control-label";

export type VisualWorkshopScene = Pick<
  DiscoveryStep,
  "id" | "title" | "text" | "visual" | "interaction"
>;

export function workshopStateTitle(scene: VisualWorkshopScene, value: number): string {
  const interaction = scene.interaction;
  if (interaction?.kind === "toggle") return value > 0 ? interaction.onLabel : interaction.offLabel;
  if (interaction?.kind === "range") {
    const label = rangeValueLabel(scene.visual, interaction, value);
    return scene.visual.kind === "turbo" || scene.visual.kind === "gears"
      ? `${interaction.label} : ${label}`
      : label;
  }
  return scene.title;
}

/** Only expose the lesson's authored manipulation and distinct, authored variants. */
export function workshopScenes(lesson: DiscoveryLesson): VisualWorkshopScene[] {
  const manipulation = lesson.steps.find(
    (step) => step.interaction?.kind === "toggle" || step.interaction?.kind === "range",
  );
  if (!manipulation) return [];
  const seen = new Set<string>();
  const variants = lesson.steps.filter((step) => {
    const scene = step.visual.scene;
    if (!scene || seen.has(scene)) return false;
    seen.add(scene);
    return true;
  });
  return [manipulation, ...variants].map((step) => ({
    id: step.id,
    title: step.title,
    text: step.text,
    visual: step.visual,
    // Challenges remain in the guided discovery. Here, their drawing is freely observable.
    interaction: step.interaction?.kind === "choice" ? undefined : step.interaction,
  }));
}

export function workshopInitialValue(scene: VisualWorkshopScene): number {
  return scene.visual.kind === "piston"
    ? 62
    : scene.visual.kind === "moon"
      ? 57
      : scene.visual.kind === "buoyancy"
        ? 40
        : scene.visual.scene
          ? scene.visual.active
            ? 100
            : 0
          : 100;
}

import { describe, expect, it } from "vitest";
import { getDiscoveryLessons } from "../src/lib/discovery/load";
import { discoveryLessonSchema } from "../src/lib/discovery/schema";
import {
  completeSession,
  freshSession,
  parseDiscoveryProgress,
} from "../src/lib/discovery/progress";
import { completeReview, freshReview, getCheckpoints } from "../src/lib/discovery/review";
import { discoveryDayIndex, recommendDiscovery } from "../src/lib/discovery/recommendation";
import { loadContentBlocks } from "../src/lib/content/load";
import { flowState, pistonState, visualDescription } from "../src/lib/discovery/visual-state";
import {
  workshopScenes,
  workshopInitialValue,
  workshopStateTitle,
} from "../src/lib/discovery/workshop";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { DiscoveryVisual, DiscoveryPreview } from "../src/components/discovery/DiscoveryVisual";
import { visualCaption } from "../src/lib/discovery/visual-caption";
import { MECHANISM_KINDS, MECHANISM_STAGES, mechanismState } from "../src/lib/discovery/mechanisms";
import {
  leverModel,
  buoyancyModel,
  moonModel,
  gearsModel,
  MOON_PHASES,
} from "../src/lib/discovery/models";

describe("discovery content", () => {
  it("publishes valid experiences linked to published expanded articles", async () => {
    const [lessons, blocks] = await Promise.all([
      getDiscoveryLessons(),
      loadContentBlocks("content"),
    ]);
    const paths = new Set(
      blocks
        .filter((block) => block.data.type === "article" && block.data.status === "published")
        .map((block) => `/${block.data.categoryPath}/${block.data.slug}`),
    );
    expect(lessons.length).toBeGreaterThanOrEqual(3);
    for (const lesson of lessons) expect(paths.has(lesson.expandedPath), lesson.slug).toBe(true);
  });

  it("rejects impossible answer keys, duplicated options and duplicated steps", async () => {
    const lesson = (await getDiscoveryLessons())[0]!;
    const check = lesson.steps.find((step) => step.interaction?.kind === "choice")!;
    const badAnswer = structuredClone(lesson);
    const badCheck = badAnswer.steps.find((step) => step.id === check.id)!;
    if (badCheck.interaction?.kind !== "choice") throw new Error("Fixture has no choice");
    badCheck.interaction.correctOptionId = "missing";
    expect(discoveryLessonSchema.safeParse(badAnswer).success).toBe(false);
    badCheck.interaction.correctOptionId = badCheck.interaction.options[0]!.id;
    badCheck.interaction.options[1]!.id = badCheck.interaction.options[0]!.id;
    expect(discoveryLessonSchema.safeParse(badAnswer).success).toBe(false);
    const badSteps = structuredClone(lesson);
    badSteps.steps[1]!.id = badSteps.steps[0]!.id;
    expect(discoveryLessonSchema.safeParse(badSteps).success).toBe(false);
  });

  it("requires manipulation and two comprehension checkpoints", async () => {
    const lesson = structuredClone((await getDiscoveryLessons())[0]!);
    for (const step of lesson.steps)
      if (step.interaction?.kind === "choice") step.interaction.checkpoint = false;
    expect(discoveryLessonSchema.safeParse(lesson).success).toBe(false);
    for (const step of lesson.steps) delete step.interaction;
    expect(discoveryLessonSchema.safeParse(lesson).success).toBe(false);
  });

  it("keeps flow labels legible and forbids unknown visual kinds", async () => {
    const lesson = structuredClone((await getDiscoveryLessons())[0]!);
    lesson.steps[0]!.visual = {
      kind: "flow",
      active: false,
      caption: "A real causal sequence",
      labels: ["A".repeat(31), "B"],
    };
    expect(discoveryLessonSchema.safeParse(lesson).success).toBe(false);
    lesson.steps[0]!.visual.labels = ["A", "B"];
    expect(discoveryLessonSchema.safeParse(lesson).success).toBe(true);
    expect(
      discoveryLessonSchema.safeParse({
        ...lesson,
        steps: [
          { ...lesson.steps[0], visual: { kind: "unknown", caption: "Bad" } },
          ...lesson.steps.slice(1),
        ],
      }).success,
    ).toBe(false);
  });
});

describe("visual workshops", () => {
  it("names the actual compared states, including all subject-specific values", async () => {
    for (const lesson of await getDiscoveryLessons()) {
      const main = workshopScenes(lesson)[0]!;
      expect(workshopStateTitle(main, 0), lesson.slug).not.toBe(
        workshopStateTitle(main, workshopInitialValue(main)),
      );
    }
    const cyclone = (await getDiscoveryLessons()).find((l) => l.slug === "naissance-d-un-cyclone")!;
    const scene = workshopScenes(cyclone)[0]!;
    expect(workshopStateTitle(scene, 0)).toBe("Mer froide");
    expect(workshopStateTitle(scene, 100)).toBe("Mer chaude");
  });
  it("exposes every authored variant without exporting answers or mutating the lesson", async () => {
    for (const lesson of await getDiscoveryLessons()) {
      const before = JSON.stringify(lesson);
      const scenes = workshopScenes(lesson);
      expect(scenes[0]?.interaction?.kind, lesson.slug).toMatch(/toggle|range/);
      expect(scenes[0]?.visual.frame).toBeUndefined();
      const expected = new Set(lesson.steps.map((step) => step.visual.scene).filter(Boolean));
      expect(new Set(scenes.slice(1).map((scene) => scene.visual.scene))).toEqual(expected);
      expect(scenes.every((scene) => scene.interaction?.kind !== "choice")).toBe(true);
      expect(JSON.stringify(lesson)).toBe(before);
    }
  });

  it("describes both manipulated states and respects fixed comparison scenes", async () => {
    for (const lesson of await getDiscoveryLessons()) {
      const main = workshopScenes(lesson)[0]!;
      const first = visualDescription(main.visual, 0);
      const second = visualDescription(main.visual, workshopInitialValue(main));
      expect(first, lesson.slug).not.toBe(second);
      const fixed = lesson.steps.filter(
        (step) => step.visual.frame !== undefined || step.visual.phase !== undefined,
      );
      for (const step of fixed)
        expect(visualDescription(step.visual, 0)).toBe(visualDescription(step.visual, 100));
    }
  });

  it("starts the piston comparison at the power stroke, rather than an identical full-cycle endpoint", async () => {
    const lesson = (await getDiscoveryLessons()).find((item) => item.slug === "les-quatre-temps")!;
    const scene = workshopScenes(lesson)[0]!;
    expect(pistonState(workshopInitialValue(scene)).phase).toBe(2);
    expect(visualDescription(scene.visual, 0)).toContain("Admission");
    expect(visualDescription(scene.visual, workshopInitialValue(scene))).toContain(
      "Combustion-détente",
    );
  });
});

describe("review and recommendations", () => {
  const initial = new Date("2026-10-10T10:00:00.000Z");
  const due = new Date("2026-10-11T10:00:00.000Z");
  const cards = [
    { slug: "a", version: 1 },
    { slug: "b", version: 1 },
    { slug: "c", version: 1 },
  ];

  async function fixture() {
    const checks = getCheckpoints((await getDiscoveryLessons())[0]!.steps);
    const session = completeSession(
      freshSession(1),
      checks.map((step) => step.id),
      initial,
    );
    const review = freshReview();
    for (const step of checks) {
      review.choices[step.id] = step.interaction.correctOptionId;
      review.firstCorrect[step.id] = true;
    }
    return { checks, session, review };
  }
  it("preserves course answers and completion while scheduling a successful due review", async () => {
    const { checks, session, review } = await fixture();
    session.choices = { original: "answer" };
    const result = completeReview(session, review, checks, due);
    expect(result.choices).toEqual(session.choices);
    expect(result.firstCorrect).toEqual(session.firstCorrect);
    expect(result.completed).toBe(true);
    expect(result.review?.passed).toBe(true);
    expect(result.reviewStreak).toBe(1);
    expect(result.reviewAt).toBe("2026-10-14T10:00:00.000Z");
    expect(session.review).toBeUndefined();
  });
  it("does not postpone the scheduled review after early practice", async () => {
    const { checks, session, review } = await fixture();
    const result = completeReview(session, review, checks, initial);
    expect(result.reviewStreak).toBe(0);
    expect(result.reviewAt).toBe(session.reviewAt);
  });
  it("resets the interval after an error, even after a corrected answer", async () => {
    const { checks, session, review } = await fixture();
    session.reviewStreak = 3;
    review.firstCorrect[checks[0]!.id] = false;
    const result = completeReview(session, review, checks, due);
    expect(result.review?.passed).toBe(false);
    expect(result.reviewStreak).toBe(0);
    expect(result.reviewAt).toBe("2026-10-12T10:00:00.000Z");
  });
  it("cannot complete a review with unanswered challenges or an unfinished course", async () => {
    const { checks, session, review } = await fixture();
    expect(completeReview(session, freshReview(), checks, due)).toBe(session);
    expect(completeReview(freshSession(1), review, checks, due).completed).toBe(false);
  });
  it("caps the successful interval at thirty days", async () => {
    const { checks, session, review } = await fixture();
    session.reviewStreak = 4;
    const result = completeReview(session, review, checks, due);
    expect(result.reviewStreak).toBe(4);
    expect(result.reviewAt).toBe("2026-11-10T10:00:00.000Z");
  });
  it("prioritizes the most recently started lesson, then due reviews", () => {
    const older = { ...freshSession(1), updatedAt: initial.toISOString() };
    const newer = { ...freshSession(1), updatedAt: due.toISOString() };
    const completed = completeSession(freshSession(1), ["q"], initial);
    expect(
      recommendDiscovery(cards, { a: older, b: newer, c: completed }, due.toISOString()),
    ).toEqual({ lesson: cards[1], kind: "resume" });
    expect(recommendDiscovery(cards, { c: completed }, due.toISOString())).toEqual({
      lesson: cards[2],
      kind: "review",
    });
    completed.review = freshReview();
    expect(recommendDiscovery(cards, { c: completed }, initial.toISOString())?.kind).toBe("review");
  });
  it("avoids finished lessons while new ones exist and ignores obsolete versions", () => {
    const completed = completeSession(freshSession(1), ["q"], initial);
    expect(
      recommendDiscovery(cards, { a: completed, b: completed }, initial.toISOString()),
    ).toEqual({ lesson: cards[2], kind: "discover" });
    expect(
      recommendDiscovery([cards[0]!], { a: { ...completed, version: 2 } }, due.toISOString())?.kind,
    ).toBe("discover");
    expect(recommendDiscovery([], {}, initial.toISOString())).toBeUndefined();
  });
  it("uses Paris midnight across winter and summer time", () => {
    expect(
      discoveryDayIndex("2026-10-10T22:00:00.000Z") - discoveryDayIndex("2026-10-10T21:59:00.000Z"),
    ).toBe(1);
    expect(
      discoveryDayIndex("2026-12-10T23:00:00.000Z") - discoveryDayIndex("2026-12-10T22:59:00.000Z"),
    ).toBe(1);
  });
  it("recovers old-format records while isolating corrupted entries", () => {
    const valid = freshSession(1);
    expect(parseDiscoveryProgress(JSON.stringify({ a: valid, b: { version: "broken" } }))).toEqual({
      a: valid,
    });
    expect(parseDiscoveryProgress("{broken")).toEqual({});
    expect(parseDiscoveryProgress("[]")).toEqual({});
    expect(parseDiscoveryProgress(null)).toEqual({});
  });
});

describe("comprehension progress", () => {
  const now = new Date("2026-10-10T10:00:00.000Z");
  it("does not equate reaching the end with understanding", () => {
    expect(completeSession(freshSession(1), ["a", "b"], now).status).toBe("review");
    expect(completeSession(freshSession(1), [], now).status).toBe("review");
  });
  it("records a corrected first mistake as review and schedules the following day", () => {
    const session = freshSession(1);
    session.firstCorrect = { a: false, b: true };
    session.choices = { a: "correct", b: "correct" };
    const result = completeSession(session, ["a", "b"], now);
    expect(result.status).toBe("review");
    expect(result.completed).toBe(true);
    expect(result.reviewAt).toBe("2026-10-11T10:00:00.000Z");
  });
  it("marks first-try success and starts a replay with clean answers", () => {
    const session = freshSession(1);
    session.firstCorrect = { a: true, b: true };
    expect(completeSession(session, ["a", "b"], now).status).toBe("understood");
    const replay = freshSession(2);
    expect(replay.version).toBe(2);
    expect(replay.completed).toBe(false);
    expect(replay.firstCorrect).toEqual({});
  });
});

describe("mechanism diagrams", () => {
  const visual = {
    kind: "flow" as const,
    caption: "Test",
    active: false,
    labels: ["Consigne", "Mesure", "Comparaison", "Correction"],
    loop: true,
    loopTo: 1,
    offReached: 2,
  };
  it("returns feedback to the sensors rather than changing the user's instruction", () => {
    expect(flowState(visual, 100)).toMatchObject({ reached: 4, loopActive: true, target: 1 });
    expect(flowState(visual, 100).description).toContain("Mesure");
    expect(flowState(visual, 0)).toMatchObject({ reached: 2, loopActive: false, stopped: true });
  });
  it("shows no completed step in silence, and marks a stop before the first stage", () => {
    const stopped = { ...visual, offReached: 0 };
    expect(flowState(stopped, 0).reached).toBe(0);
    const html = renderToStaticMarkup(
      createElement(DiscoveryVisual, { visual: stopped, value: 0 }),
    );
    expect(html).toContain("Arrêt avant l’étape 1");
    expect(html).toContain("Arrêt avant « Consigne ».");
  });
  it("retains the original linear flow behaviour when no new options are set", () => {
    const linear = {
      kind: "flow" as const,
      caption: "Test",
      active: false,
      labels: ["A", "B", "C"],
    };
    expect(flowState(linear, 0)).toMatchObject({ reached: 1, stopped: false, loopActive: false });
    expect(flowState(linear, 50).reached).toBe(2);
    expect(flowState(linear, 100).reached).toBe(3);
  });
  it("rejects stops beyond the chain, invalid returns, and phase settings on other diagrams", async () => {
    const lesson = structuredClone((await getDiscoveryLessons())[0]!);
    lesson.steps[0]!.visual = { ...visual, offReached: 4 };
    expect(discoveryLessonSchema.safeParse(lesson).success).toBe(false);
    lesson.steps[0]!.visual = { ...visual, loopTo: 3 };
    expect(discoveryLessonSchema.safeParse(lesson).success).toBe(false);
    lesson.steps[0]!.visual = { ...visual, loop: false };
    expect(discoveryLessonSchema.safeParse(lesson).success).toBe(false);
    lesson.steps[0]!.visual = { kind: "soap", caption: "Test", active: false, phase: 2 };
    expect(discoveryLessonSchema.safeParse(lesson).success).toBe(false);
  });
  it("keeps the valves, piston direction and ignition consistent with all four strokes", () => {
    expect(pistonState(12)).toMatchObject({
      phase: 0,
      intakeOpen: true,
      exhaustOpen: false,
      downward: true,
      spark: false,
    });
    expect(pistonState(37)).toMatchObject({
      phase: 1,
      intakeOpen: false,
      exhaustOpen: false,
      downward: false,
      spark: false,
    });
    expect(pistonState(50)).toMatchObject({
      phase: 2,
      intakeOpen: false,
      exhaustOpen: false,
      downward: true,
      spark: true,
    });
    expect(pistonState(62).spark).toBe(false);
    expect(pistonState(87)).toMatchObject({
      phase: 3,
      intakeOpen: false,
      exhaustOpen: true,
      downward: false,
      spark: false,
    });
  });
  it("returns to the same mechanical position after two complete revolutions", () => {
    const start = pistonState(0);
    const end = pistonState(100);
    expect(end.crankAngle).toBe(720);
    expect(end.cycleComplete).toBe(true);
    expect(end.phase).toBe(0);
    expect(end.pistonY).toBeCloseTo(start.pistonY);
    expect(end.crankX).toBeCloseTo(start.crankX);
    expect(end.crankY).toBeCloseTo(start.crankY);
    expect(pistonState(25).pistonY).toBeGreaterThan(pistonState(0).pistonY);
    expect(pistonState(75).pistonY).toBeCloseTo(pistonState(25).pistonY);
  });
  it("preserves the connecting rod's length throughout the cycle", () => {
    for (let value = 0; value <= 100; value++) {
      const state = pistonState(value);
      expect(Math.hypot(state.crankX - 180, state.crankY - (state.pistonY + 7))).toBeCloseTo(70);
    }
  });
  it("can show a fixed power stroke independently of the active flag", () => {
    expect(pistonState(0, 2)).toMatchObject({ phase: 2, position: 62.5 });
    const html = renderToStaticMarkup(
      createElement(DiscoveryVisual, {
        visual: { kind: "piston", caption: "Test", active: false, phase: 2 },
        value: 0,
      }),
    );
    expect(html).toContain("Combustion-détente");
    expect(html).toContain("Les gaz chauds poussent le piston");
  });
});

describe("new subject teaching models", () => {
  it("keeps compact captions tied to fixed lesson states without losing physical limits", () => {
    expect(
      visualCaption({ kind: "moon", caption: "Modèle", active: true, fixedValue: 29 }, 100),
    ).toContain("Premier quartier");
    expect(
      visualCaption({ kind: "buoyancy", caption: "Modèle", active: false, fixedValue: 100 }, 0),
    ).toContain("La poussée ne suffit plus");
    expect(
      visualCaption({ kind: "photosynthesis", caption: "Modèle", active: false }, 0),
    ).toContain("pas de nouvel apport");
  });
  it("illustrates lunar teaching steps with their authored phase rather than a boolean endpoint", async () => {
    const lesson = (await getDiscoveryLessons()).find(
      (l) => l.slug === "la-lune-et-nos-points-de-vue",
    )!;
    for (const [id, phase] of [
      ["observer", "Premier croissant"],
      ["defi-1", "Nouvelle Lune"],
      ["comprendre", "Premier quartier"],
      ["retenir", "Pleine Lune"],
    ]) {
      const visual = lesson.steps.find((s) => s.id === id)!.visual;
      expect(visualDescription(visual, 0)).toContain(phase);
      expect(visualDescription(visual, 100)).toContain(phase);
    }
  });
  it("shows a loaded floating hull for the loading challenge and neutral buoyancy at the limit", async () => {
    const lesson = (await getDiscoveryLessons()).find(
      (l) => l.slug === "le-bateau-et-l-eau-deplacee",
    )!;
    const loaded = lesson.steps.find((s) => s.id === "defi-1")!.visual;
    expect(visualDescription(loaded, 0)).toContain("720 kg");
    expect(visualDescription(loaded, 0)).toContain("720 L");
    expect(
      buoyancyModel(lesson.steps.find((s) => s.id === "comprendre")!.visual.fixedValue!).condition,
    ).toBe("neutral");
  });
  it("rejects fixed numerical states on live controls or outside the model's bounds", async () => {
    const lesson = structuredClone(
      (await getDiscoveryLessons()).find((l) => l.slug === "la-lune-et-nos-points-de-vue")!,
    );
    const manipulation = lesson.steps.find((s) => s.interaction?.kind === "range")!;
    manipulation.visual.fixedValue = 29;
    expect(discoveryLessonSchema.safeParse(lesson).success).toBe(false);
    delete manipulation.visual.fixedValue;
    lesson.steps[0]!.visual.fixedValue = 101;
    expect(discoveryLessonSchema.safeParse(lesson).success).toBe(false);
    lesson.steps[0]!.visual.fixedValue = 29;
    expect(discoveryLessonSchema.safeParse(lesson).success).toBe(true);
  });
  it("uses a floating hull and a quarter Moon in catalogue covers, with isolated SVG definitions", () => {
    const visual = { kind: "buoyancy" as const, caption: "Modèle", active: false };
    const cover = renderToStaticMarkup(createElement(DiscoveryPreview, { visual }));
    expect(cover).toContain("720 kg");
    expect(cover).toContain("La coque flotte");
    const moon = renderToStaticMarkup(
      createElement(DiscoveryPreview, { visual: { ...visual, kind: "moon" } }),
    );
    expect(moon).toContain("Premier quartier");
    const pair = renderToStaticMarkup(
      createElement(
        "div",
        null,
        createElement(DiscoveryVisual, { visual, value: 0 }),
        createElement(DiscoveryVisual, { visual, value: 100 }),
      ),
    );
    const ids = [...pair.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
    expect(ids.length).toBeGreaterThan(0);
    expect(new Set(ids).size).toBe(ids.length);
  });
  it("balances lever moments across the full range without changing the load", () => {
    for (let value = 0; value <= 100; value++) {
      const m = leverModel(value);
      expect(m.loadForce).toBe(120);
      expect(m.effortForce * m.effortArm).toBeCloseTo(m.loadForce * m.loadArm);
      expect(m.loadArm + m.effortArm).toBe(40);
    }
    expect(leverModel(0).effortForce).toBe(360);
    expect(leverModel(100).effortForce).toBe(40);
  });
  it("distinguishes floating equilibrium, complete immersion and insufficient buoyancy", () => {
    for (const value of [0, 25, 50, 74]) {
      const m = buoyancyModel(value);
      expect(m.condition).toBe("floating");
      expect(m.buoyantForce).toBe(m.weight);
      expect(m.displacedLitres).toBeLessThan(1000);
    }
    expect(buoyancyModel(75).condition).toBe("neutral");
    expect(buoyancyModel(75).buoyantForce).toBe(buoyancyModel(75).weight);
    for (const value of [76, 90, 100]) {
      const m = buoyancyModel(value);
      expect(m.condition).toBe("sinking");
      expect(m.buoyantForce).toBeLessThan(m.weight);
      expect(m.displacedLitres).toBe(1000);
    }
  });
  it("reaches eight distinct lunar phases and gives equal light fractions to opposite crescents", () => {
    MOON_PHASES.forEach((name, i) => expect(moonModel(Math.round((i * 100) / 7)).name).toBe(name));
    expect(moonModel(0).illuminatedFraction).toBe(0);
    expect(moonModel(57).illuminatedFraction).toBe(1);
    expect(moonModel(29).illuminatedFraction).toBeCloseTo(0.5);
    expect(moonModel(14).illuminatedFraction).toBeCloseTo(moonModel(100).illuminatedFraction);
  });
  it("transmits the same number of teeth in opposite directions at every angle", () => {
    for (let value = 0; value <= 100; value++) {
      const m = gearsModel(value);
      expect(m.driverAngle * m.driverTeeth + m.drivenAngle * m.drivenTeeth).toBeCloseTo(0);
    }
    expect(gearsModel(100).drivenAngle).toBe(-240);
  });
  it("renders every lunar phase without invalid geometry and explains the selected phase", () => {
    for (let index = 0; index < 8; index++) {
      const html = renderToStaticMarkup(
        createElement(DiscoveryVisual, {
          visual: { kind: "moon", caption: "Deux vues", active: false },
          value: Math.round((index * 100) / 7),
          stateCaption: true,
        }),
      );
      expect(html).toContain(MOON_PHASES[index]);
      expect(html).not.toMatch(/NaN|undefined/);
    }
  });
});

describe("subject-specific illustrations", () => {
  it("gives every discovery its own subject diagram", async () => {
    const lessons = await getDiscoveryLessons();
    expect(lessons).toHaveLength(MECHANISM_KINDS.length + 4);
    expect(new Set(lessons.map((lesson) => lesson.steps[0]!.visual.kind)).size).toBe(
      lessons.length,
    );
    for (const kind of MECHANISM_KINDS)
      expect(
        lessons.some((lesson) => lesson.steps[0]!.visual.kind === kind),
        kind,
      ).toBe(true);
  });
  it("renders all subject diagrams at both control limits with an accessible description", () => {
    for (const kind of MECHANISM_KINDS) {
      const render = (value: number) =>
        renderToStaticMarkup(
          createElement(DiscoveryVisual, {
            visual: { kind, caption: "Description", active: false },
            value,
          }),
        );
      const before = render(0);
      const after = render(100);
      expect(before, kind).not.toBe(after);
      for (const html of [before, after]) {
        expect(html, kind).toContain("<figcaption>");
        expect(html, kind).toContain('aria-hidden="true"');
        expect(html, kind).not.toMatch(/NaN|undefined/);
      }
    }
  });
  it("uses the same five stages for the range, direct buttons and fixed question frames", () => {
    for (const kind of ["paper", "soil", "fresco", "grid"] as const) {
      expect(MECHANISM_STAGES[kind]).toHaveLength(5);
      for (let index = 0; index < 5; index++) {
        expect(mechanismState(kind, index * 25).stage).toBe(index);
        expect(mechanismState(kind, 100, index).stage).toBe(index);
        expect(mechanismState(kind, 0, index).stage).toBe(index);
      }
      expect(mechanismState(kind, -10).stage).toBe(0);
      expect(mechanismState(kind, 110).stage).toBe(4);
    }
  });
  it("rejects a scene from another subject and a fixed frame on a live manipulation", async () => {
    const lesson = structuredClone(
      (await getDiscoveryLessons()).find((lesson) => lesson.slug === "de-la-pate-a-la-feuille")!,
    );
    lesson.steps[0]!.visual.scene = "walls";
    expect(discoveryLessonSchema.safeParse(lesson).success).toBe(false);
    delete lesson.steps[0]!.visual.scene;
    lesson.steps.find((step) => step.interaction?.kind === "range")!.visual.frame = 2;
    expect(discoveryLessonSchema.safeParse(lesson).success).toBe(false);
    delete lesson.steps.find((step) => step.interaction?.kind === "range")!.visual.frame;
    lesson.steps[0]!.visual.frame = 5;
    expect(discoveryLessonSchema.safeParse(lesson).success).toBe(false);
  });
  it("shows drainage for the paper checkpoint and a fresh pulp for recycled paper", async () => {
    const lesson = (await getDiscoveryLessons()).find(
      (lesson) => lesson.slug === "de-la-pate-a-la-feuille",
    )!;
    expect(lesson.steps.find((step) => step.id === "defi-1")!.visual.frame).toBe(1);
    expect(lesson.steps.find((step) => step.id === "defi-2")!.visual.frame).toBe(0);
  });
  it("keeps the interrupted and weak states scientifically distinct", () => {
    expect(mechanismState("telephone", 0).description).toContain("ne signifie pas");
    expect(mechanismState("photosynthesis", 0).description).toContain("réserves");
    expect(mechanismState("cyclone", 0).description).toContain("s’évapore aussi");
    expect(mechanismState("wifi", 100, undefined, "walls").description).toContain(
      "ne signifie pas",
    );
    expect(mechanismState("autopilot", 0).description).toContain("capteurs restent disponibles");
  });
  it("uses a separate scene for every transfer scenario requiring a different state", async () => {
    const expected = {
      "les-donnees-dans-l-air": "walls",
      "naissance-d-un-cyclone": "land",
      "la-couleur-dans-le-mur": "retouch",
      "naissance-d-un-sol": "erosion",
      "le-voyage-de-l-electricite": "balance",
      "le-pilote-qui-corrige": "gust",
    };
    const lessons = await getDiscoveryLessons();
    for (const [slug, scene] of Object.entries(expected))
      expect(
        lessons.find((lesson) => lesson.slug === slug)!.steps.find((step) => step.id === "defi-2")!
          .visual.scene,
      ).toBe(scene);
  });
  it("does not attach the new scene or frame options to an unrelated existing visual", async () => {
    const lesson = structuredClone(
      (await getDiscoveryLessons()).find((lesson) => lesson.slug === "allumer-une-lampe")!,
    );
    lesson.steps[0]!.visual.scene = "balance";
    expect(discoveryLessonSchema.safeParse(lesson).success).toBe(false);
    delete lesson.steps[0]!.visual.scene;
    lesson.steps[0]!.visual.frame = 1;
    expect(discoveryLessonSchema.safeParse(lesson).success).toBe(false);
  });
});

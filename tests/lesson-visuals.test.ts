import {
  planarArmPose,
  toyQuantization,
  quadraticTraining,
  attentionWeights,
  correlateValid,
  epsilonGreedyProbabilities,
  generalizationExample,
} from "../src/lib/lesson-visuals/learning-models";
import {
  machAngle,
  glideForces,
  windTriangle,
  inertialBiasDisplacement,
} from "../src/lib/lesson-visuals/aeronautics-models";
import {
  pendulumPeriod,
  radiocarbonFraction,
  insertionTrace,
  ean13,
} from "../src/lib/lesson-visuals/models";
import {
  transitFlux,
  pointLensAmplification,
  webbSegmentCenters,
  equalFluxRadius,
} from "../src/lib/lesson-visuals/astronomy-models";
import { describe, it, expect } from "vitest";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import {
  LESSON_DIAGRAMS,
  getLessonDiagram,
  lessonPosterFrame,
} from "../src/lib/lesson-visuals/registry";
import { renderMarkdown } from "../src/lib/markdown";
import { loadContentBlocks } from "../src/lib/content/load";
import { LessonDiagramCanvas } from "../src/components/lesson-visuals/LessonDiagramCanvas";

const render = (index: number, step: number) =>
  renderToStaticMarkup(createElement(LessonDiagramCanvas, { spec: LESSON_DIAGRAMS[index]!, step }));
const art = (html: string) =>
  html
    .replaceAll(/<defs>[\s\S]*?<\/defs>/g, "")
    .split("<svg")[1]
    ?.split("</svg>")[0]
    ?.replaceAll(/lesson-art-[^\s"<)]+/g, "ID");

describe("lesson-specific illustrations", () => {
  it("keeps both robot link lengths across the authored grasp and lift", () => {
    for (const tip of [
      { x: 150, y: 105 },
      { x: 193, y: 126 },
      { x: 193, y: 85 },
    ]) {
      const p = planarArmPose({ x: 70, y: 169 }, tip);
      expect(Math.hypot(p.elbow.x - p.base.x, p.elbow.y - p.base.y)).toBeCloseTo(80, 10);
      expect(Math.hypot(p.tip.x - p.elbow.x, p.tip.y - p.elbow.y)).toBeCloseTo(76, 10);
      expect(p.tip).toEqual(tip);
      expect(p.elbow.y).toBeLessThan(169);
    }
    expect(() => planarArmPose({ x: 0, y: 0 }, { x: 200, y: 0 })).toThrow();
    expect(() => planarArmPose({ x: 0, y: 0 }, { x: 0, y: 0 })).toThrow();
  });
  it("maps unsigned bytes to four levels with bounded reconstruction error", () => {
    const samples = Array.from({ length: 256 }, (_, n) => n),
      r = toyQuantization(samples);
    expect(new Set(r.map((v) => v.code))).toEqual(new Set([0, 1, 2, 3]));
    for (const v of r) {
      expect(Math.abs(v.original - v.reconstructed)).toBeLessThanOrEqual(1 / 3 + 1e-12);
    }
    expect(r[0]!.reconstructed).toBe(-1);
    expect(r[255]!.reconstructed).toBe(1);
    expect(() => toyQuantization([256])).toThrow();
    expect(() => toyQuantization([1.1])).toThrow();
  });
  it("only associates unique, exact paths of published lessons", async () => {
    const blocks = await loadContentBlocks("content");
    const paths = new Set(
      blocks
        .filter((b) => b.data.type === "article" && b.data.status === "published")
        .map((b) => `/${b.data.categoryPath}/${b.data.slug}`),
    );
    const authored = LESSON_DIAGRAMS.flatMap((s) => s.paths);
    expect(new Set(authored).size).toBe(authored.length);
    expect(new Set(LESSON_DIAGRAMS.map((s) => s.id)).size).toBe(LESSON_DIAGRAMS.length);
    for (const path of authored) expect(paths.has(path), path).toBe(true);
  });
  it("does not attach a neighbouring or keyword-matching diagram to an unreviewed lesson", () => {
    expect(getLessonDiagram("/invented/fibre-optique")).toBeUndefined();
    expect(
      getLessonDiagram(
        "/energie/energies-renouvelables/solaire/comment-fonctionne-une-cellule-photovoltaique",
      ),
    ).toBeDefined();
    expect(
      getLessonDiagram(
        "/energie/energies-renouvelables/solaire/comment-fabrique-t-on-un-panneau-solaire-en-silicium",
      ),
    ).toBeUndefined();
  });
  it("renders a distinct drawing, caption and explanation for all three authored states", () => {
    for (const [index, spec] of LESSON_DIAGRAMS.entries()) {
      expect(spec.steps).toHaveLength(3);
      expect(new Set(spec.steps.map((s) => s.caption)).size, spec.id).toBe(3);
      const frames = [0, 1, 2].map((step) => render(index, step));
      for (const [step, html] of frames.entries()) {
        expect(html).not.toMatch(/(?:NaN|undefined|Infinity)/);
        expect(html).toContain(`data-frame="${step}"`);
        expect(html).toContain("<figcaption>");
        expect(spec.steps[step]!.detail.length).toBeGreaterThan(60);
      }
      expect(new Set(frames.map(art)).size, spec.id).toBe(3);
    }
  });
  it("scopes paint definitions even when a poster and three frames share one page", () => {
    for (const spec of LESSON_DIAGRAMS) {
      const html = renderToStaticMarkup(
        createElement(
          "div",
          null,
          ...[0, 1, 2, 2].map((step, key) =>
            createElement(LessonDiagramCanvas, { key, spec, step }),
          ),
        ),
      );
      const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
      expect(ids.length).toBeGreaterThan(8);
      expect(new Set(ids).size).toBe(ids.length);
      for (const ref of html.matchAll(/url\(#([^)]*)\)/g)) expect(ids).toContain(ref[1]);
    }
  });
  it("uses representative covers rather than a stall or a charging state by default", () => {
    for (const s of LESSON_DIAGRAMS) expect([0, 1, 2]).toContain(lessonPosterFrame(s));
    expect(lessonPosterFrame(LESSON_DIAGRAMS.find((s) => s.id === "lift")!)).toBe(0);
    expect(lessonPosterFrame(LESSON_DIAGRAMS.find((s) => s.id === "battery")!)).toBe(0);
    expect(lessonPosterFrame(LESSON_DIAGRAMS.find((s) => s.id === "lens")!)).toBe(1);
  });
  it("replaces obsolete empty frames only when an actual diagram is supplied", async () => {
    const text =
      "## Le mécanisme\n\nUn texte conservé.\n\n[Emplacement image : un schéma, légende et texte alternatif à fournir ultérieurement.]";
    const plain = await renderMarkdown(text);
    const illustrated = await renderMarkdown(text, {
      figureReference: { href: "#schema-lecon", title: "Air < eau & lumière" },
    });
    expect(plain.html).toContain("figure-placeholder");
    expect(illustrated.html).not.toContain("figure-placeholder");
    expect(illustrated.html).toContain('href="#schema-lecon"');
    expect(illustrated.html).toContain("Air &lt; eau &amp; lumière");
    expect(illustrated.html).toContain("Un texte conservé.");
    expect(illustrated.toc).toEqual(plain.toc);
    await expect(
      renderMarkdown(text, { figureReference: { href: "javascript:alert(1)", title: "A" } }),
    ).rejects.toThrow("ancre locale");
  });
  it("provides an inspectable limit and an HTTPS reference for every diagram", () => {
    for (const s of LESSON_DIAGRAMS) {
      expect(s.limit.length).toBeGreaterThan(60);
      expect(new URL(s.source.url).protocol).toBe("https:");
    }
  });
});

describe("quantitative illustration models", () => {
  it("updates a toy parameter against the loss gradient with decreasing loss", () => {
    const states = quadraticTraining(12);
    expect(states[0]).toEqual({ weight: 0, loss: 9 });
    expect(states[1]!.weight).toBeCloseTo(1.2, 12);
    expect(states[1]!.loss).toBeCloseTo(3.24, 12);
    expect(states[2]!.weight).toBeCloseTo(1.92, 12);
    for (let i = 1; i < states.length; i++)
      expect(states[i]!.loss).toBeLessThan(states[i - 1]!.loss);
    expect(() => quadraticTraining(-1)).toThrow();
  });
  it("normalizes attention stably and excludes every masked future position", () => {
    const scores = [1000, 1001, 999];
    for (let prefix = 0; prefix < 3; prefix++) {
      const row = attentionWeights(scores, prefix);
      expect(row.reduce((s, v) => s + v, 0)).toBeCloseTo(1, 12);
      expect(row.every(Number.isFinite)).toBe(true);
      for (let j = prefix + 1; j < 3; j++) expect(row[j]).toBe(0);
      const shifted = attentionWeights(
        scores.map((v) => v - 1000),
        prefix,
      );
      row.forEach((v, i) => expect(v).toBeCloseTo(shifted[i]!, 12));
    }
    expect(() => attentionWeights([1, 2], -1)).toThrow();
  });
  it("reuses a spatial filter without reversing its orientation or mutating its inputs", () => {
    const image = Array.from({ length: 5 }, () => [0, 0, 1, 1, 1]),
      kernel = [
        [-1, 0, 1],
        [-1, 0, 1],
        [-1, 0, 1],
      ];
    const original = JSON.stringify({ image, kernel });
    expect(correlateValid(image, kernel)).toEqual([
      [3, 3, 0],
      [3, 3, 0],
      [3, 3, 0],
    ]);
    expect(
      correlateValid(
        image,
        kernel.map((row) => row.map((v) => -v)),
      ),
    ).toEqual([
      [-3, -3, 0],
      [-3, -3, 0],
      [-3, -3, 0],
    ]);
    expect(JSON.stringify({ image, kernel })).toBe(original);
    expect(() => correlateValid([[1], [1, 2]], [[1]])).toThrow();
  });
  it("allows random exploration to choose the current best action again", () => {
    const values = [0.6, 1 / 3, 0],
      p = epsilonGreedyProbabilities(values, 0.1);
    expect(p.reduce((s, v) => s + v, 0)).toBeCloseTo(1, 12);
    expect(p[0]).toBeCloseTo(0.9 + 0.1 / 3, 12);
    expect(epsilonGreedyProbabilities(values, 0)).toEqual([1, 0, 0]);
    expect(epsilonGreedyProbabilities(values, 1)).toEqual([1 / 3, 1 / 3, 1 / 3]);
    expect(() => epsilonGreedyProbabilities(values, 1.1)).toThrow();
  });
  it("marks overfitting on synthetic curves while keeping the minimum of validation at the middle", () => {
    expect(generalizationExample(5).validation).toBeLessThan(generalizationExample(1).validation);
    expect(generalizationExample(5).validation).toBeLessThan(generalizationExample(10).validation);
    expect(generalizationExample(10).training).toBeLessThan(generalizationExample(5).training);
    expect(() => generalizationExample(-1)).toThrow();
  });
  it("adds wind vectors while keeping the aircraft’s own airspeed constant", () => {
    for (const wind of [-65, 0, 65])
      for (const compensate of [false, true]) {
        const f = windTriangle(178, wind, compensate);
        expect(Math.hypot(f.air.x, f.air.y)).toBeCloseTo(178, 10);
        expect(f.ground.x).toBeCloseTo(f.air.x + f.wind.x, 10);
        expect(f.ground.y).toBeCloseTo(f.air.y + f.wind.y, 10);
        if (compensate) expect(f.ground.y).toBe(0);
      }
    expect(() => windTriangle(65, 65, true)).toThrow();
  });
  it("double-integrates a fixed accelerometer bias in the simplified drift example", () => {
    expect(inertialBiasDisplacement(82, 0)).toBe(0);
    expect(inertialBiasDisplacement(82, 1)).toBe(41);
    expect(inertialBiasDisplacement(82, 2)).toBe(4 * inertialBiasDisplacement(82, 1));
    expect(inertialBiasDisplacement(-82, 1)).toBe(-41);
    expect(() => inertialBiasDisplacement(1, -1)).toThrow();
  });
  it("keeps Mach wave envelopes tangent to their earlier spherical wavefronts", () => {
    expect(machAngle(2)).toBeCloseTo(Math.PI / 6, 12);
    for (const m of [1.01, Math.sqrt(2), 2, 5]) {
      const angle = machAngle(m);
      // For a wave emitted t ago: distance from its centre to the envelope = a*t.
      expect(m * 20 * Math.sin(angle)).toBeCloseTo(20, 12);
    }
    expect(machAngle(5)).toBeLessThan(machAngle(2));
    expect(() => machAngle(1)).toThrow();
  });
  it("balances steady gliding forces with lift normal and drag opposite to the flight path", () => {
    for (const finesse of [1, 3, 10, 40]) {
      const f = glideForces(finesse, 75),
        v = { x: Math.cos(f.angle), y: Math.sin(f.angle) };
      expect(f.lift.x + f.drag.x + f.weight.x).toBeCloseTo(0, 12);
      expect(f.lift.y + f.drag.y + f.weight.y).toBeCloseTo(0, 12);
      expect(f.lift.x * v.x + f.lift.y * v.y).toBeCloseTo(0, 12);
      expect(f.drag.x * v.x + f.drag.y * v.y).toBeLessThan(0);
      expect(Math.hypot(f.lift.x, f.lift.y) / Math.hypot(f.drag.x, f.drag.y)).toBeCloseTo(
        finesse,
        10,
      );
      expect(1 / Math.tan(f.angle)).toBeCloseTo(finesse, 10);
    }
    expect(() => glideForces(0, 75)).toThrow();
  });
  it("preserves incident flux when shifting an illustrative zone with stellar luminosity", () => {
    const radii = [0.25, 1, 2.25, 4].map((l) => ({ l, r: equalFluxRadius(l, 43) }));
    for (const { l, r } of radii) expect(l / (r * r)).toBeCloseTo(1 / (43 * 43), 10);
    expect(equalFluxRadius(4, 43)).toBe(86);
    expect(() => equalFluxRadius(0)).toThrow();
  });
  it("draws Webb with eighteen separate hexagonal segments and a central opening", () => {
    const segments = webbSegmentCenters(10);
    expect(segments).toHaveLength(18);
    expect(segments.some((p) => p.x === 0 && p.y === 0)).toBe(false);
    expect(new Set(segments.map((p) => `${p.q},${p.row}`)).size).toBe(18);
    expect(
      segments.filter((p) => Math.max(Math.abs(p.q), Math.abs(p.row), Math.abs(p.q + p.row)) === 1),
    ).toHaveLength(6);
    expect(() => webbSegmentCenters(0)).toThrow();
  });
  it("uses the masked surface for a transit and preserves symmetry through ingress", () => {
    expect(transitFlux(0, 32, 8)).toBeCloseTo(1 - 1 / 16);
    expect(transitFlux(40, 32, 8)).toBe(1);
    expect(transitFlux(32, 32, 8)).toBeGreaterThan(transitFlux(0, 32, 8));
    expect(transitFlux(32, 32, 8)).toBeLessThan(1);
    for (const d of [-60, -39, -32, -20, 0, 20, 32, 39, 60]) {
      expect(transitFlux(d, 32, 8)).toBeCloseTo(transitFlux(-d, 32, 8));
      expect(transitFlux(d, 32, 8)).toBeGreaterThanOrEqual(0);
    }
    expect(transitFlux(0, 1, 2)).toBe(0);
    expect(() => transitFlux(1, 0, 1)).toThrow();
  });
  it("increases microlensing amplification near alignment without inventing a dimming", () => {
    expect(pointLensAmplification(0.4)).toBeGreaterThan(pointLensAmplification(1));
    expect(pointLensAmplification(1)).toBeGreaterThan(pointLensAmplification(3));
    expect(pointLensAmplification(100)).toBeCloseTo(1, 6);
    expect(() => pointLensAmplification(0)).toThrow();
  });
  it("keeps pendulum periods consistent with length and local gravity", () => {
    expect(pendulumPeriod(1)).toBeCloseTo(2.006, 3);
    expect(pendulumPeriod(2) / pendulumPeriod(0.5)).toBeCloseTo(2);
    expect(pendulumPeriod(1, 1.62)).toBeGreaterThan(pendulumPeriod(1));
    expect(() => pendulumPeriod(0)).toThrow();
  });
  it("halves the remaining fraction rather than removing a fixed fraction of the original", () => {
    expect(radiocarbonFraction(0)).toBe(1);
    expect(radiocarbonFraction(5730)).toBe(0.5);
    expect(radiocarbonFraction(11460)).toBe(0.25);
    expect(radiocarbonFraction(17190)).toBe(0.125);
    expect(() => radiocarbonFraction(-1)).toThrow();
  });
  it("keeps every value while extending a sorted prefix, without mutating the input", () => {
    const input = [4, 1, 3, 2],
      trace = insertionTrace(input);
    expect(input).toEqual([4, 1, 3, 2]);
    expect(trace.at(-1)).toEqual([1, 2, 3, 4]);
    for (const [i, frame] of trace.entries()) {
      expect([...frame].sort()).toEqual([...input].sort());
      const prefix = frame.slice(0, i + 1);
      expect(prefix).toEqual([...prefix].sort((a, b) => a - b));
    }
    expect(insertionTrace([2, 1, 2, 1]).at(-1)).toEqual([1, 1, 2, 2]);
  });
  it("encodes a coherent EAN-13 symbol with its check digit and guard patterns", () => {
    const sample = ean13("590123412345");
    expect(sample.digits).toBe("5901234123457");
    expect(sample.modules).toHaveLength(95);
    expect(sample.modules.slice(0, 3)).toBe("101");
    expect(sample.modules.slice(45, 50)).toBe("01010");
    expect(sample.modules.slice(-3)).toBe("101");
    const numbers = [...sample.digits].map(Number);
    expect(numbers.reduce((sum, n, i) => sum + n * (i % 2 ? 3 : 1), 0) % 10).toBe(0);
    expect(() => ean13("not-a-number")).toThrow();
  });
});

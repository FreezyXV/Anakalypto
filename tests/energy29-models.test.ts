import { describe, expect, it } from "vitest";
import {
  demandShiftExample,
  dtNucleons,
  energyChainExample,
  energyWh,
  idealStorageHours,
  illustrativeDay,
  meanRemaining,
  mirrorEndpoints,
  reboundFraction,
  residualDemand,
} from "../src/lib/lesson-visuals/energy29-models";

describe("authored energy illustration examples", () => {
  it("subtracts solar from demand without discarding a possible surplus", () => {
    expect(residualDemand(illustrativeDay.demand, illustrativeDay.solar)).toEqual([
      30, 30, 10, 18, 58, 40,
    ]);
    expect(residualDemand([10], [15])).toEqual([-5]);
    expect(() => residualDemand([1], [])).toThrow();
  });
  it("keeps the three lighting examples and direct rebound arithmetically consistent", () => {
    expect(energyWh(60, 1)).toBe(60);
    expect(energyWh(10, 1)).toBe(10);
    expect(energyWh(10, 3)).toBe(30);
    expect(reboundFraction(60, 10, 30)).toBeCloseTo(0.4);
    expect(() => energyWh(-1, 3)).toThrow();
    expect(() => reboundFraction(10, 10, 10)).toThrow();
  });
  it("conserves energy when a load is shifted and when the accounting boundary changes", () => {
    const sum = (a: readonly number[]) => a.reduce((s, v) => s + v, 0),
      e = energyChainExample;
    expect(sum(demandShiftExample.before)).toBe(10);
    expect(sum(demandShiftExample.after)).toBe(10);
    expect(e.conversionLoss + e.final).toBe(e.primary);
    expect(e.useful + e.useLoss).toBe(e.final);
    expect(idealStorageHours(4, 2)).toBe(2);
    expect(() => idealStorageHours(4, 0)).toThrow();
  });
  it("represents a mean radioactive population, not an exact small-sample outcome", () => {
    expect([0, 1, 2, 3].map((t) => meanRemaining(8, t))).toEqual([8, 4, 2, 1]);
    expect(meanRemaining(8, 0.5)).toBeCloseTo(8 / Math.sqrt(2));
    expect(() => meanRemaining(8, -1)).toThrow();
  });
  it("conserves both proton and neutron counts in the D–T reaction", () => {
    const { deuterium: d, tritium: t, helium: h, neutron: n } = dtNucleons;
    expect(d.protons + t.protons).toBe(h.protons + n.protons);
    expect(d.neutrons + t.neutrons).toBe(h.neutrons + n.neutrons);
  });
  it("orients every illustrated heliostat using the law of reflection", () => {
    for (const x of [72, 129, 186]) {
      const [ax, ay, bx, by] = mirrorEndpoints(x, 157, 255, 70, 0.55, 0.83),
        length = Math.hypot(bx - ax, by - ay);
      const normal = [-(by - ay) / length, (bx - ax) / length],
        il = Math.hypot(0.55, 0.83),
        incoming = [0.55 / il, 0.83 / il];
      const dot = incoming[0]! * normal[0]! + incoming[1]! * normal[1]!,
        out = [incoming[0]! - 2 * dot * normal[0]!, incoming[1]! - 2 * dot * normal[1]!],
        ol = Math.hypot(255 - x, 70 - 157);
      expect(out[0]).toBeCloseTo((255 - x) / ol, 3);
      expect(out[1]).toBeCloseTo((70 - 157) / ol, 3);
    }
  });
});

import { describe, it, expect } from "vitest";
import { applyFilters, pickRandom } from "../src/utils/filter";

const sample = [
  { name: "A", role: "V", difficulty: "Easy", traits: ["X", "Y"] },
  { name: "B", role: "D", difficulty: "Hard", traits: ["Y"] },
  { name: "C", role: "V", difficulty: "Medium", traits: [] },
];

describe("applyFilters", () => {
  it("returns all when no filters", () => {
    expect(applyFilters(sample, {})).toHaveLength(3);
  });

  it("filters by role", () => {
    expect(applyFilters(sample, { role: "V" }).map(c => c.name)).toEqual(["A", "C"]);
  });

  it("filters by difficulty", () => {
    expect(applyFilters(sample, { difficulty: "Hard" }).map(c => c.name)).toEqual(["B"]);
  });

  it("filters by traits (AND)", () => {
    expect(applyFilters(sample, { traits: ["X", "Y"] }).map(c => c.name)).toEqual(["A"]);
  });

  it("returns empty when no match", () => {
    expect(applyFilters(sample, { role: "Z" })).toHaveLength(0);
  });
});

describe("pickRandom", () => {
  it("returns null on empty array", () => {
    expect(pickRandom([])).toBeNull();
  });

  it("returns one of the elements", () => {
    const result = pickRandom([1, 2, 3]);
    expect([1, 2, 3]).toContain(result);
  });
});
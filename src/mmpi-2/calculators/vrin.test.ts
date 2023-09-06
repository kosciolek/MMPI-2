import { testAnswers } from "./test-data";
import { calculateVrin } from "./vrin";

import { expect, test } from "vitest";

test("Vrin", () => {
  const results = calculateVrin(testAnswers);
  expect(results).toEqual(16);
});

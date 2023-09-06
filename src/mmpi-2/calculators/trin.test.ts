import { testAnswers } from "./test-data";
import { calculateTrin } from "./trin";
import { expect, test } from "vitest";

test("Trin", () => {
  const results = calculateTrin(testAnswers);
  expect(results).toEqual(10);
});

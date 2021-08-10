import { testAnswers } from "./test-data";
import { calculateVrin } from "./vrin";

test("Vrin", () => {
  const results = calculateVrin(testAnswers);
  expect(results).toEqual(16);
});

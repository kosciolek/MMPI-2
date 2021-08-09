import { testAnswers } from "./test-data";
import { calculateTrin } from "./trin";
import { calculateVrin } from "./vrin";

test("Trin", function () {
  const results = calculateTrin(testAnswers);
  expect(results).toEqual(10);
});

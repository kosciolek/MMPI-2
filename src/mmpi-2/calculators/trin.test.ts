import { testAnswers } from "./test-data";
import { calculateTrin } from "./trin";

test("Trin", () => {
  const results = calculateTrin(testAnswers);
  expect(results).toEqual(10);
});

import { mainScales } from "../criteria/main-scales";
import { calculateKCorrected } from "./k-corrected";
import { calculateRawScale } from "./raw";
import { calculateTenScales } from "./ten";
import { femaleRaw, kCorrected, maleRaw, testAnswers, tFemale, tMale } from "./test-data";
import { calculateVrin } from "./vrin";

test("Vrin", function () {
  const results = calculateVrin(testAnswers);
  expect(results).toEqual(16);
});

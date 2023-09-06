import { mainScales } from "../criteria/main-scales";
import { calculateKCorrected } from "./k-corrected";
import { calculateRawScale } from "./raw";
import { kCorrected, testAnswers } from "./test-data";

import { expect, test } from "vitest";

test("female", () => {
  const results = calculateKCorrected(
    Object.fromEntries(Object.keys(mainScales).map((scale) => [scale, calculateRawScale(testAnswers, scale, "female")]))
  );

  expect(results).toEqual(kCorrected);
});

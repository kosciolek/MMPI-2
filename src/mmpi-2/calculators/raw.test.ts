import { mainScales } from "../criteria/main-scales";
import { calculateRawScale } from "./raw";
import { femaleRaw, maleRaw, testAnswers } from "./test-data";
import { expect, test } from "vitest";

test("female", () => {
  const results = Object.fromEntries(
    Object.keys(mainScales).map((scale) => [scale, calculateRawScale(testAnswers, scale, "female")])
  );
  expect(results).toEqual(femaleRaw);
});

test("male", () => {
  const results = Object.fromEntries(
    Object.keys(mainScales).map((scale) => [scale, calculateRawScale(testAnswers, scale, "female")])
  );
  expect(results).toEqual(maleRaw);
});

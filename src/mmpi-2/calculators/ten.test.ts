import { mainScales } from "../criteria/main-scales";
import { calculateRawScale } from "./raw";
import { calculateTenScales } from "./ten";
import { testAnswers, tFemale, tMale } from "./test-data";
import { expect, test } from "vitest";

test("female", () => {
  const results = calculateTenScales(
    Object.fromEntries(
      Object.keys(mainScales).map((scale) => [scale, calculateRawScale(testAnswers, scale, "female")])
    ),
    "female"
  );
  expect(results).toEqual(tFemale);
});

test("male", () => {
  const results = calculateTenScales(
    Object.fromEntries(Object.keys(mainScales).map((scale) => [scale, calculateRawScale(testAnswers, scale, "male")])),
    "male"
  );
  expect(results).toEqual(tMale);
});

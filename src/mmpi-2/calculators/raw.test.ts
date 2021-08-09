import { mainScales } from "../criteria/main-scales";
import { calculateRawScale } from "./raw";
import { femaleRaw, maleRaw, testAnswers } from "./test-data";

describe("Raw", function () {
  it("female", function () {
    const results = Object.fromEntries(
      Object.keys(mainScales).map((scale) => [
        scale,
        calculateRawScale(testAnswers, scale, "female"),
      ])
    );
    expect(results).toEqual(femaleRaw);
  });

  it("male", function () {
    const results = Object.fromEntries(
      Object.keys(mainScales).map((scale) => [
        scale,
        calculateRawScale(testAnswers, scale, "female"),
      ])
    );
    expect(results).toEqual(maleRaw);
  });
});

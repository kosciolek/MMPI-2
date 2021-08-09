import { mainScales } from "../criteria/main-scales";
import { calculateKCorrected } from "./k-corrected";
import { calculateRawScale } from "./raw";
import { calculateTenScales } from "./ten";
import { femaleRaw, kCorrected, maleRaw, testAnswers, tFemale, tMale } from "./test-data";

describe("T-scores", function () {
  it("female", function () {
    const results = calculateTenScales(
      Object.fromEntries(
        Object.keys(mainScales).map((scale) => [
          scale,
          calculateRawScale(testAnswers, scale, "female"),
        ])
      ),
      "female"
    );
    expect(results).toEqual(tFemale);
  });

  it("male", function () {
    const results = calculateTenScales(
      Object.fromEntries(
        Object.keys(mainScales).map((scale) => [
          scale,
          calculateRawScale(testAnswers, scale, "male"),
        ])
      ),
      "male"
    );
    expect(results).toEqual(tMale);
  });
});

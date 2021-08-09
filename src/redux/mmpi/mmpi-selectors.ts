import { createSelector } from "@reduxjs/toolkit";
import { calculateKCorrected } from "../../mmpi-2/calculators/k-corrected";
import { calculateRawScale } from "../../mmpi-2/calculators/raw";
import { calculateTenScales } from "../../mmpi-2/calculators/ten";
import { scaleHierarchy } from "../../mmpi-2/scaleHierarchy";
import { getAnswers, getGender, getViewMode } from "./selectors";

export const getRawScales = createSelector([getAnswers, getGender], (answers, gender) =>
  Object.values(scaleHierarchy)
    .flat()
    .reduce((sum, currentScale) => {
      sum[currentScale] = calculateRawScale(answers as any, currentScale, gender as any);
      return sum;
    }, {} as any)
);
export const getKCorrectedScales = createSelector(getRawScales, calculateKCorrected);
export const getTenScales = createSelector(
  [getKCorrectedScales, getGender],
  (kCorrectedScales, gender) => calculateTenScales(kCorrectedScales, gender as any)
);
export const getFinalScaleValues = createSelector(
  [getRawScales, getKCorrectedScales, getTenScales, getViewMode],
  (rawScales, kCorrectedScales, tenScales, displayMode) => {
    switch (displayMode) {
      case "ten":
        return tenScales;
      case "k":
        return kCorrectedScales;
      default:
        return rawScales;
    }
  }
);

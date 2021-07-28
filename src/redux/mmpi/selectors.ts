import { createSelector } from "@reduxjs/toolkit";
import { calculateKCorrected } from "../../mmpi-2/calculators/k-corrected";
import { calculateRawScale } from "../../mmpi-2/calculators/raw";
import { calculateTenScales } from "../../mmpi-2/calculators/ten";
import { scaleHierarchy } from "../../mmpi-2/scaleHierarchy";
import { RootState } from "../types";

export const getSelf = (state: RootState) => state.mmpi;

export const getAnswersReady = createSelector([getSelf], (self) =>
  self.answers.every((answer) => answer === true || answer === false)
);

export const getUnfinishedAnswersCount = createSelector(
  [getSelf],
  (self) => self.answers.filter((answer) => answer === null).length
);

export const getIsFinished = createSelector(
  [getUnfinishedAnswersCount],
  (count) => count === 0
);

export const getAnswer = (index: number) => (state: RootState) =>
  state.mmpi.answers[index];

export const getAnswers = (state: RootState) => state.mmpi.answers;

export const getGender = (state: RootState) => state.mmpi.gender;

export const getDisplayMode = (state: RootState) => state.mmpi.displayMode;

export const getRawScales = createSelector(
  [getAnswers, getGender],
  (answers, gender) =>
    Object.values(scaleHierarchy)
      .flat()
      .reduce((sum, currentScale) => {
        sum[currentScale] = calculateRawScale(
          answers as any,
          currentScale,
          gender as any
        );
        return sum;
      }, {} as any)
);

export const getKCorrectedScales = createSelector(
  getRawScales,
  calculateKCorrected
);

export const getTenScales = createSelector(
  [getKCorrectedScales, getGender],
  (kCorrectedScales, gender) =>
    calculateTenScales(kCorrectedScales, gender as any)
);

export const getFinalScaleValues = createSelector(
  [getRawScales, getKCorrectedScales, getTenScales, getDisplayMode],
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

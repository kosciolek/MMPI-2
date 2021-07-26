import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../types";

export const getSelf = (state: RootState) => state.mmpi;
export const getAnswersReady = createSelector([getSelf], (self) =>
  self.answers.every((answer) => answer === true || answer === false)
);
export const getUnfinishedAnswersCount = createSelector(
  [getSelf],
  (self) => self.answers.filter((answer) => answer === null).length
);

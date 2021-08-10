import { createSelector } from "@reduxjs/toolkit";
import { questionCount } from "../../mmpi-2/utils";
import { RootState } from "../types";

export const getSelf = (state: RootState) => state.mmpi;

export const getAnswersReady = createSelector([getSelf], (self) =>
  self.answers.every((answer) => answer === true || answer === false)
);

export const getUnfinishedAnswersCount = createSelector(
  [getSelf],
  (self) => self.answers.filter((answer) => answer === null).length
);

export const getIsFinished = createSelector([getUnfinishedAnswersCount], (count) => count === 0);

export const getAnswer = (index: number) => (state: RootState) => state.mmpi.answers[index];

export const getAnswers = (state: RootState) => state.mmpi.answers;

export const getGender = (state: RootState) => state.mmpi.gender;

export const getViewMode = (state: RootState) => state.mmpi.viewMode;

export const getIsEmpty = createSelector(
  [getUnfinishedAnswersCount],
  (count) => count === questionCount
);

/* Return the index of the first question without an answer */
export const getFirstUnanswered = createSelector([getAnswers], (answers) => answers.indexOf(null));

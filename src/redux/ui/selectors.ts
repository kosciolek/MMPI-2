import { questionCount } from "../../mmpi-2/utils";
import { RootState } from "../types";

export const getSelf = (state: RootState) => state.ui;
export const getAnswersPage = (state: RootState) => state.ui.answerView.page;
export const getAnswersPerPage = (state: RootState) =>
  state.ui.answerView.answersPerPage;

export const getFirstAnswer = (state: RootState) => {
  const { page, answersPerPage } = state.ui.answerView;
  return Math.max(page * answersPerPage, 0);
};
export const getLastAnswer = (state: RootState) => {
  const { page, answersPerPage } = state.ui.answerView;
  return Math.min(page * answersPerPage + answersPerPage, questionCount - 1);
};

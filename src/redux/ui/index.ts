import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { questionCount } from "../../mmpi-2/utils";

export const initialState = {
  mobileMenuOpen: false,
  answerView: {
    page: 0,
    answersPerPage: 25,
    compactView: false,
  },
};

export type UiSlice = typeof initialState;

export const uiSlice = createSlice({
  name: "ui",
  reducers: {
    setMobileMenuOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.mobileMenuOpen = payload;
    },
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    setAnswersPage: (state, action: PayloadAction<number>) => {
      state.answerView.page = action.payload;
    },
    nextPage: (state) => {
      const { page, answersPerPage } = state.answerView;
      state.answerView.page = Math.min(Math.floor(questionCount / answersPerPage), page + 1);
    },
    prevPage: (state) => {
      state.answerView.page = Math.max(0, state.answerView.page - 1);
    },
    toggleAnswerCompactView: (state) => {
      state.answerView.compactView = !state.answerView.compactView;
    },
    setAnswersPerPage: (state, { payload }: PayloadAction<number>) => {
      state.answerView.page = state.answerView.page * (state.answerView.answersPerPage / payload);
      state.answerView.answersPerPage = payload;
    },
  },
  initialState,
});

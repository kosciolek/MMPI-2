import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Answer, Answers, DisplayMode, Gender } from "../../mmpi-2/types";
import { questionCount } from "../../mmpi-2/utils";

const initialState = {
  answers: Array.from({ length: questionCount }).fill(null) as Answers,
  gender: "male" as Gender,
  displayMode: "k" as DisplayMode,
};
export type MmpiSlice = typeof initialState;
export const mmpiSlice = createSlice({
  name: "mmpi",
  initialState,
  reducers: {
    answerSelected: (
      state,
      { payload }: PayloadAction<{ questionId: number; answer: Answer }>
    ) => {
      state.answers[payload.questionId] = payload.answer;
    },
    replaceAnswers: (state, action: PayloadAction<Answers>) => {
      state.answers = action.payload;
    },
    setGender: (state, action: PayloadAction<Gender>) => {
      state.gender = action.payload;
    },
    toggleQuestion: (state, action: PayloadAction<number>) => {
      state.answers[action.payload] = !state.answers[action.payload];
    },
  },
});

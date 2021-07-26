import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Answer, Answers } from "../../mmpi-2/types";
import { questionCount } from "../../mmpi-2/utils";

const initialState = {
  answers: Array.from({ length: questionCount }).fill(null) as Answers,
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
  },
});

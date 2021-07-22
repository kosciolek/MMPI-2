import { questionCount } from "./utils";

export type Questions = string[];

/*
export const questions: Questions = Object.values({

});
*/

/* TODO Auto generated, to be replaced. */
export const questions: Questions = Array.from({ length: questionCount }).map(
  (_, i) => `Pytanie nr. ${i}`
);

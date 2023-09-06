import { Answer } from "../types";

export type Pair = {
  [questionNumber: string]: boolean;
};

export const ifPairMatches = (answers: Answer[], pair: Pair) => {
  const [[k1, v1], [k2, v2]] = Object.entries(pair);
  const first = answers[parseInt(k1, 10) - 1] === v1;
  const second = answers[parseInt(k2, 10) - 1] === v2;
  return first && second;
};

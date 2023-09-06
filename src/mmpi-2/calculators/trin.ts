import { trinScale } from "../criteria/trin-scale";
import { Answer } from "../types";
import { ifPairMatches } from "./utils";

export const calculateTrin = (answers: Answer[]) => {
  const positive = trinScale.positive.reduce((acc, pair) => acc + Number(ifPairMatches(answers, pair)), 0);
  const negative = trinScale.negative.reduce((acc, pair) => acc + Number(ifPairMatches(answers, pair)), 0);
  const offset = 10;

  return positive - negative + offset;
};

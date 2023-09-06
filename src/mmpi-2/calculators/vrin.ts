import { vrinScale } from "../criteria/vrin-scale";
import { Answer } from "../types";
import { ifPairMatches } from "./utils";

export const calculateVrin = (answers: Answer[]) =>
  vrinScale.positive.reduce((acc, pair) => (ifPairMatches(answers, pair) ? acc + 1 : acc), 0);

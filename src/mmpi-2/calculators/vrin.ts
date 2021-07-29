import { vrinScale } from "../criteria/vrin-scale";
import { Answers } from "../types";
import { ifPairMatches } from "./utils";

export const calculateVrin = (answers: Answers) =>
  vrinScale.positive.reduce((acc, pair) => (ifPairMatches(answers, pair) ? acc + 1 : acc), 0);

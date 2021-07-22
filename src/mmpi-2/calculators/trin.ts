import { trinScale } from "../criteria/trin-scale";
import { Answers } from "../types";
import { ifPairMatches } from "./utils";

export const calculateTrin = (answers: Answers) => {
  const positive = trinScale.positive.reduce(
    (acc, pair) => Number(ifPairMatches(answers, pair)),
    0
  );
  const negative = trinScale.negative.reduce(
    (acc, pair) => Number(ifPairMatches(answers, pair)),
    0
  );
  const offset = 10;

  return positive - negative + offset;
};

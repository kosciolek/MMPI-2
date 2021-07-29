import { MainScales, mainScales } from "../criteria/main-scales";
import { Answers, Gender } from "../types";
import { calculateTrin } from "./trin";
import { calculateVrin } from "./vrin";

export const calculateRawScale = (answers: Answers, scaleId: keyof MainScales, gender: Gender) => {
  if (scaleId === "VRIN") return calculateVrin(answers);
  if (scaleId === "TRIN") return calculateTrin(answers);

  const resolvedScale = scaleId === "Mf" ? `${scaleId}-${gender[0]}` : scaleId;
  const positive = mainScales[resolvedScale].positive.reduce(
    (acc, pos) => (answers[pos - 1] ? acc + 1 : acc),
    0
  );
  const negative = mainScales[resolvedScale].negative.reduce(
    (acc, pos) => (!answers[pos - 1] ? acc + 1 : acc),
    0
  );

  return positive + negative;
};

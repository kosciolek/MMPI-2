import { MainScales } from "../criteria/main-scales";
import { tenScale } from "../criteria/ten-scale";
import { Gender } from "../types";

export const calculateTenScales = (
  scaleValues: Record<keyof MainScales, number>,
  gender: Gender
) => {
  const entries = Object.entries(scaleValues).map(([scale, value]) => [
    scale,
    tenScale[gender][scale]?.[value] ?? value,
  ]);
  return Object.fromEntries(entries);
};

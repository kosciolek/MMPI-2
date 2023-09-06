import { KCorrections, kCorrections } from "../criteria/k-corrections";
import { MainScales } from "../criteria/main-scales";

export const calculateKCorrected = (scaleValues: Record<keyof MainScales, number>) => {
  const entries = Object.entries(scaleValues).map(([scaleId, scaleValue]) => {
    const sum =
      scaleValue + Math.round(scaleValues.K * (kCorrections[scaleId as keyof KCorrections] || 0));
    return [scaleId, sum] as const;
  });
  return Object.fromEntries(entries);
};

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Answer, Gender, Mode } from "./mmpi-2/types";
import { questionCount } from "./mmpi-2/utils";
import { useMemo } from "react";
import { scaleHierarchy } from "./mmpi-2/scale-hierarchy";
import { calculateRawScale } from "./mmpi-2/calculators/raw";
import { calculateKCorrected } from "./mmpi-2/calculators/k-corrected";
import { calculateTenScales } from "./mmpi-2/calculators/ten";

export type Store = {
  answers: Answer[];
  setAnswer: (index: number, state: Answer) => void;
  reset: () => void;

  mode: Mode;
  setMode: (mode: Mode) => void;

  gender: Gender;
  setGender: (gender: Gender) => void;

  page: number;
  pageSize: number;
  setPage: (page: number) => void;
  setPageToFirstQuestionWithoutAnswer: () => void;
};

export const useStore = create<Store>()(
  persist(
    (set, get) => ({
      answers: Array.from<Answer>({ length: questionCount }).fill(null),
      setAnswer: (index, state) => {
        const copy = [...get().answers];
        copy[index] = state;
        set({ answers: copy });
      },
      reset: () => {
        set({ answers: Array.from<Answer>({ length: questionCount }).fill(null) });
      },

      mode: "raw",
      setMode: (mode) => {
        set({ mode });
      },

      gender: "male",
      setGender: (gender) => {
        set({ gender });
      },

      page: 0,
      pageSize: 100,
      setPage: (page) => {
        set({ page });
      },
      setPageToFirstQuestionWithoutAnswer: () => {
        const index = get().answers.indexOf(null);
        const pageSize = get().pageSize;
        set({ page: Math.floor(index / pageSize) });
      },
    }),
    {
      name: "data",
    }
  )
);

export const useResults = (): Record<string, number> => {
  const answers = useStore((x) => x.answers);
  const gender = useStore((x) => x.gender);
  const mode = useStore((x) => x.mode);
  console.log(gender);
  return useMemo(() => {
    const raw = Object.values(scaleHierarchy)
      .flat()
      .reduce<Record<string, number>>((sum, currentScale) => {
        sum[currentScale] = calculateRawScale(answers, currentScale, gender);
        return sum;
      }, {});
    if (mode === "raw") {
      return raw;
    }
    const k = calculateKCorrected(raw);
    if (mode === "k") {
      return k;
    }
    return calculateTenScales(k, gender);
  }, [answers, gender, mode]);
};

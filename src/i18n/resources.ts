import { translationEn } from "./en";
import { translationPl } from "./pl";
import { LANGUAGE } from "./utils";

export const resources = {
  [LANGUAGE.PL]: {
    translation: translationPl,
  },
  [LANGUAGE.EN]: {
    translation: translationEn,
  },
};

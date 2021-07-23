import { LANGUAGE } from "./utils";
import pl from "./pl/translation.json";
import en from "./en/translation.json";

export const resources = {
  [LANGUAGE.PL]: {
    translation: pl,
  },
  [LANGUAGE.EN]: {
    translation: en,
  },
};

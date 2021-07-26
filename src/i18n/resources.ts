import { LANGUAGE } from "./utils";
import pl from "./pl/translation.json";
import en from "./en/translation.json";
import plQuestions from "./pl/questions.json";
import enQuestions from "./en/questions.json";

export const resources = {
  [LANGUAGE.PL]: {
    translation: pl,
    questions: plQuestions,
  },
  [LANGUAGE.EN]: {
    translation: en,
    questions: enQuestions,
  },
};

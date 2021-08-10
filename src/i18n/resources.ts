import { LANGUAGE } from "./utils";
import pl from "./pl/translation.json";
import en from "./en/translation.json";
import plQuestions from "./pl/questions.json";
import enQuestions from "./en/questions.json";
import plGroups from "./pl/groups.json";
import enGroups from "./en/groups.json";

export const resources = {
  [LANGUAGE.PL]: {
    translation: pl,
    questions: plQuestions,
    groups: plGroups,
  },
  [LANGUAGE.EN]: {
    translation: en,
    questions: enQuestions,
    groups: enGroups,
  },
};

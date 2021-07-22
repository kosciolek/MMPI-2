import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { resources } from "./resources";

export const i18n = i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lng: "pl",
    interpolation: {
      escapeValue: false,
    },
  });

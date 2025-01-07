import { languageKey, languages } from "../constants/constants.js";
import { getLanguage, setLanguage } from "./get-set-language.js";
import { languageIcon } from "./change-language-icon.js";

function changeLanguage() {
  const currentLanguage = getLanguage();
  const newLanguage =
    currentLanguage === languages.english
      ? languages.spanish
      : languages.english;
  localStorage.setItem(languageKey, newLanguage);
  return newLanguage;
}

languageIcon.addEventListener("click", () => {
  const newLanguage = changeLanguage();
  setLanguage(newLanguage);
});

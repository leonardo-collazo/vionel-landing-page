import { getLanguage, setLanguage } from "./get-set-language.js";

function loadLanguage() {
  const currentLanguage = getLanguage();
  setLanguage(currentLanguage);
}

loadLanguage();

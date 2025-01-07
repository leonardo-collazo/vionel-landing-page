import { languageIconSources } from "../constants/constants.js";
import { getLanguage } from "./get-set-language.js";

const languageIconHtml = document.getElementById("language-icon");

function loadLanguageIcon() {
  const currentLanguage = getLanguage();
  const languageIconSource = languageIconSources[currentLanguage];
  languageIconHtml.setAttribute("src", languageIconSource);
}

loadLanguageIcon();

export { loadLanguageIcon };

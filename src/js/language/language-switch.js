import { languageKey, languages, i18n } from "../constants/constants.js";

const languageIcon = document.getElementById("language-icon");
const i18nElements = document.querySelectorAll("[i18n]");

function getLanguage() {
  let currentLanguage = localStorage.getItem(languageKey);
  if (!currentLanguage) {
    currentLanguage = languages.english;
  }
  return currentLanguage;
}

function setLanguage(language) {
  const translations = language === languages.english ? i18n.eng : i18n.esp;
  i18nElements.forEach(element => {
    const key = element.getAttribute("i18n");
    element.textContent = translations[key];
  });
}

function changeLanguage() {
  const currentLanguage = getLanguage();
  const newLanguage =
    currentLanguage === languages.english
      ? languages.spanish
      : languages.english;
  localStorage.setItem(languageKey, newLanguage);
  return newLanguage;
}

function start() {
  const currentLanguage = getLanguage();
  setLanguage(currentLanguage);
}

languageIcon.addEventListener("click", () => {
  const newLanguage = changeLanguage();
  setLanguage(newLanguage);
});

start();

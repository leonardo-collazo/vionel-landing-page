// ('á', '\\u00e1');
// ('é', '\\u00e9');
// ('í', '\\u00ed');
// ('ó', '\\u00f3');
// ('ú', '\\u00fa');
// ('Á', '\\u00c1');
// ('É', '\\u00c9');
// ('Í', '\\u00cd');
// ('Ó', '\\u00d3');
// ('Ú', '\\u00da');
// ('ñ', '\\u00f1');
// ('Ñ', '\\u00d1');

const languageKey = "vionel-landing-page-language";

const languages = {
  spanish: "esp",
  english: "eng",
};

const i18n = {
  esp: {
    "about-tab": "Acerca de",
    "services-tab": "Servicios",
    "contact-tab": "Contacto",
    "about-option": "Acerca de",
    "services-option": "Servicios",
    "contact-option": "Contacto",
  },
  eng: {
    "about-tab": "About",
    "services-tab": "Services",
    "contact-tab": "Contact",
    "about-option": "About",
    "services-option": "Services",
    "contact-option": "Contact",
  },
};

const languageIconSources = {
  esp: "./src/assets/icons/spain-flag.png",
  eng: "./src/assets/icons/usa-flag.png",
};

export { languageKey, languages, i18n, languageIconSources };

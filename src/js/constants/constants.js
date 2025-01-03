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
    "contact-me-tab": "Cont\u00e1ctame",
    "about-option": "Acerca de",
    "services-option": "Servicios",
    "contact-me-option": "Cont\u00e1ctame",
  },
  eng: {
    "about-tab": "About",
    "services-tab": "Services",
    "contact-me-tab": "Contact me",
    "about-option": "About",
    "services-option": "Services",
    "contact-me-option": "Contact me",
  },
};

export { languageKey, languages, i18n };

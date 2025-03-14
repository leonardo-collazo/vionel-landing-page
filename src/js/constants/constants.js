// ('á', '\u00e1');
// ('é', '\u00e9');
// ('í', '\u00ed');
// ('ó', '\u00f3');
// ('ú', '\u00fa');
// ('Á', '\u00c1');
// ('É', '\u00c9');
// ('Í', '\u00cd');
// ('Ó', '\u00d3');
// ('Ú', '\u00da');
// ('ñ', '\u00f1');
// ('Ñ', '\u00d1');

const languageKey = "vionel-landing-page-language";

const languages = {
  spanish: "esp",
  english: "eng",
};

const i18n = {
  eng: {
    "about-tab": "About Me",
    "services-tab": "Services",
    "contact-tab": "Contact",
    "about-option": "About Me",
    "services-option": "Services",
    "contact-option": "Contact",
    "hero-section-header": "Car Diagnostic",
    "hero-section-info": "After our diagnostic, your problems will be gone",
    "hero-section-button": "Services",
    "about-section-header": "About Me",
    "about-section-info":
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam debitis eos incidunt non maiores nulla? Tempore dolorem unde maxime atque sed, aspernatur saepe, nulla, quasi itaque necessitatibus nobis in dolorum.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam debitis eos incidunt non maiores nulla? Tempore dolorem unde maxime atque sed, aspernatur saepe, nulla, quasi itaque necessitatibus nobis in dolorum.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam debitis eos incidunt non maiores nulla? Tempore dolorem unde maxime atque sed, aspernatur saepe, nulla, quasi itaque necessitatibus nobis in dolorum.",
    "service-section-header": "Services",
    "service1-name": "Service Name",
    "service1-details":
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "service2-name": "Service Name",
    "service2-details":
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "service3-name": "Service Name",
    "service3-details":
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "service4-name": "Service Name",
    "service4-details":
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "contact-section-header": "Contact",
    "contact-section-address": "Address",
    "contact-section-phone": "Phone",
    "contact-section-email": "Email",
    "reference-icons8": "Icons by",
  },
  esp: {
    "about-tab": "Sobre m\u00ed",
    "services-tab": "Servicios",
    "contact-tab": "Contacto",
    "about-option": "Sobre m\u00ed",
    "services-option": "Servicios",
    "contact-option": "Contacto",
    "hero-section-header": "Diagn\u00f3stico Automotriz",
    "hero-section-info":
      "Despu\u00e9s de nuestro diagn\u00f3stico, todos sus problemas ser\u00e1n resueltos",
    "hero-section-button": "Servicios",
    "about-section-header": "Sobre m\u00ed",
    "about-section-info":
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam debitis eos incidunt non maiores nulla? Tempore dolorem unde maxime atque sed, aspernatur saepe, nulla, quasi itaque necessitatibus nobis in dolorum.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam debitis eos incidunt non maiores nulla? Tempore dolorem unde maxime atque sed, aspernatur saepe, nulla, quasi itaque necessitatibus nobis in dolorum.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam debitis eos incidunt non maiores nulla? Tempore dolorem unde maxime atque sed, aspernatur saepe, nulla, quasi itaque necessitatibus nobis in dolorum.",
    "service-section-header": "Servicios",
    "service1-name": "Nombre del Servicio",
    "service1-details":
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "service2-name": "Nombre del Servicio",
    "service2-details":
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "service3-name": "Nombre del Servicio",
    "service3-details":
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "service4-name": "Nombre del Servicio",
    "service4-details":
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "contact-section-header": "Contacto",
    "contact-section-address": "Direcci\u00f3n",
    "contact-section-phone": "Tel\u00e9fono",
    "contact-section-email": "Correo",
    "reference-icons8": "\u00cdconos por",
  },
};

const languageIconSources = {
  esp: "./src/assets/icons/spain-flag.png",
  eng: "./src/assets/icons/usa-flag.png",
};

export { languageKey, languages, i18n, languageIconSources };

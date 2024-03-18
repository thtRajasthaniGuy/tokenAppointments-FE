import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // English translations
        greeting: "Hello, world!",
        // Add more translations here
      },
    },
    fr: {
      translation: {
        // French translations
        greeting: "Bonjour tout le monde!",
        // Add more translations here
      },
    },
    // Add more languages and translations here
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;

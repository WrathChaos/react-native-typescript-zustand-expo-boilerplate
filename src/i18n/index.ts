import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      home: {
        welcome: 'Welcome to the App!',
        greeting: 'Hello, {{name}}!',
      },
      settings: {
        title: 'Settings',
        language: 'Language',
        darkMode: 'Dark Mode',
        profile: 'Profile',
      },
    },
  },
  es: {
    translation: {
      home: {
        welcome: '¡Bienvenido a la App!',
        greeting: '¡Hola, {{name}}!',
      },
      settings: {
        title: 'Ajustes',
        language: 'Idioma',
        darkMode: 'Modo Oscuro',
        profile: 'Perfil',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

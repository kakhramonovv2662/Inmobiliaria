import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { setLocale } from './yup';
import uz from './locales/uz.json';
import ru from './locales/ru.json';
import en from './locales/en.json';

setLocale();

export const defaultNS = 'common';

export const lng = 'uz';

export const resources = {
  en: {
    common: en
  },
  ru: {
    common: ru
  },
  uz: {
    common: uz
  }
} as const;

/**
 * Setup localization
 */
const init = async () => {
  await i18n.use(initReactI18next).init({
    fallbackLng: Object.keys(resources),
    ns: [defaultNS],
    lng,
    resources,
    defaultNS,
    react: {
      bindI18n: 'languageChanged loaded added'
    },
    debug: true,
    keySeparator: '.',
    interpolation: {
      escapeValue: false
    }
  });
};

export { init };

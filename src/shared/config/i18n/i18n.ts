import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    debug: _IS_DEV_,

    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  })
  .catch(console.error)

export default i18n

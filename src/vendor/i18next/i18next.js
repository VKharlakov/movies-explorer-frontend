import { initReactI18next } from "react-i18next";
import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

import ru from './locales/ru/translation.json'
import en from './locales/en/translation.json'

i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
    fallbackLng: 'ru',
    resources: {
        ru: {
            translation: ru
        },
        en: {
            translation: en
        }
    },
    detection: {
        order: ['queryString', 'cookie'],
        cache: ['cookie']
    },
    interpolation: {
        escapeValue: false
    },
    lng: localStorage.getItem('language')
})

export default i18n
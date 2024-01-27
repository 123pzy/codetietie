import { createI18n } from "vue-i18n";
import zh from './zh'
import en from './en'

const messages = {
    'zh': zh,
    "en-US": en
}

const i18n = createI18n({
    locale: localStorage.getItem('CN'),
    fallbackLocale: 'en-US',
    legacy: false,
    messages,
})

export default i18n
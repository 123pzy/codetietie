import { createI18n } from 'vue-i18n';
import zh from './zh';
import en from './en';

type messagesObj = {
  [propsName: string]: any;
};

localStorage.setItem('CN', 'zh');
const defaultLang: any = localStorage.getItem('CN');
const messages: messagesObj = {
  zh: zh,
  'en-US': en,
};

const i18n = createI18n({
  locale: defaultLang,
  fallbackLocale: 'en-US',
  legacy: false,
  messages,
});

export default i18n;

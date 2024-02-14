import { createApp } from 'vue';
import './styles/style.css';
import App from './App.vue';
import { router } from './routes.js';

// import 'highlight.js/styles/vs2015.min.css';
// import 'highlight.js/lib/common';
// import hljsVuePlugin from '@highlightjs/vue-plugin';
import { createPinia } from 'pinia';
import './assets/fonts/font.css'
import i18n from './lang/index'

const app = createApp(App);
app.use(router);
// app.use(hljsVuePlugin);
app.use(createPinia());
app.use(i18n)
app.mount('#app');

import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { router } from './routes.js';

import 'highlight.js/styles/vs2015.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'
 
//注册组件
 

const app = createApp(App);
app.use(router);
app.use(hljsVuePlugin)
app.mount('#app');

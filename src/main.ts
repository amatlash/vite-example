import { createApp } from 'vue'
import { createHead } from '@vueuse/head';
import { i18n } from '~/i18n';
import App from './App.vue'

createApp(App)
    .use(i18n)
    .use(createHead())
    .mount('#app')

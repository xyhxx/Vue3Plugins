import { createApp } from 'vue';
import App from './App.vue';
import xyhLoading from './plugins/loading';
import xyhToast from './plugins/toast';

createApp(App).use(xyhLoading).use(xyhToast, {theme: '#00695c', color: '#fff'}).mount('#app');
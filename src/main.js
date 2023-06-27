
import { createApp } from 'vue'

import vuetify from './plugins/vuetify';
import App from './App.vue'
import Layout from './components/Layout.vue'
import MainTitle from './components/titles/MainTitle.vue';
import store from './store';

import router from './router';
import './style.css'

const app = createApp(App);
app.use(vuetify).use(router).use(store);
app.component('Layout', Layout);
app.component('MainTitle', MainTitle);
app.mount('#app');

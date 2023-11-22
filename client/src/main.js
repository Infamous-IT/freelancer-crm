import { createApp } from 'vue';
// import Vuetify from 'vuetify/lib';
import App from './App.vue';
import store from './vuex/store.js';

const app = createApp(App);
app.use(store);
// app.use(Vuetify);
app.mount('#app');

import { createApp } from "vue";
import { createPinia, defineStore } from "pinia";
import App from '../../src/App.vue';

export const useUserStore = defineStore('user_info', {
    state: () => ({
        
    })
})

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount('#app');
import { createApp, provide } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { useRouter } from 'vue-router';
import { useSessionStore } from './stores/session';

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)

app.use(pinia)
app.use(router)


app.mount('#app')
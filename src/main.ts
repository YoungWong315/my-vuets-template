import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

import 'reset-css/reset.css'
import router from '@/modules/router/index'

import VConsole from 'vconsole'
// const vconsole = new VConsole()

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')
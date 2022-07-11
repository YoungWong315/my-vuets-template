import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

import * as service from '@/modules/service'
console.log(service)

import 'reset-css/reset.css'
import router from '@/modules/router/index'

import VConsole from 'vconsole'
// const vconsole = new VConsole()

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')
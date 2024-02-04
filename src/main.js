import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import router from './router/router.js'
import './assets/scss/main.scss'

const app = createApp(App)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
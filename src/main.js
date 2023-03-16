import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'             // 引入 bootstrap CSS 檔案
import 'bootstrap/dist/js/bootstrap.bundle.js'        // 引入 bootstrap JS 檔案
import './assets/style.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

import './assets/base.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import STable from '@surely-vue/table'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(STable)

app.mount('#app')

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)
console.info('[vue] instance: ', app)
app.mount('#app')

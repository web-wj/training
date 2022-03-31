import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

console.log('此时的App', App)
createApp(App).use(store).use(router).mount('#app')

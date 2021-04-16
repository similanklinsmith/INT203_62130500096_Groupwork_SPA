import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Popup from './components/Popup.vue'
createApp(App).component("pop-up", Popup).use(router).mount('#app')

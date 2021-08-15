import {createApp} from 'vue'
import App from './App.vue'
import {router} from "./utils/Routes";

createApp(App).use(router).mount('#app')

import {createApp} from 'vue'
import App from './App.vue'
import {router} from "./utils/Routes";
import {store} from "./utils/Store";

createApp(App).use(store).use(router).mount('#app')

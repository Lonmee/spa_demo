import {createApp} from "vue";
import App from "./App.vue"
import {router} from "./route/Routes";
import {store} from "./store/Store";
import axios from "axios";
import VueAxios from "vue-axios";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

createApp(App)
    .use(store)
    .use(router)
    .use(VueAxios, axios)
    .use(ElementPlus)
    .mount("#app");

import {createApp} from "vue";
import App from "./App.vue"
import {router} from "./utils/Routes";
import {store} from "./utils/Store";
import axios from "axios";
import VueAxios from "vue-axios";

createApp(App)
    .use(store)
    .use(router)
    .use(VueAxios, axios)
    .mount("#app")

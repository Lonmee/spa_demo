import {createRouter, createWebHashHistory} from "vue-router";
import Home from '../components/Home.vue';
import Catalog from "../components/Catalog.vue";
import Cart from "../components/Cart.vue";
import Mine from '../components/Mine.vue';
import Login from '../components/Login.vue';
import LoginArea from "../components/login/LoginArea.vue";
import Signup from "../components/login/Signup.vue";
import PinRecover from "../components/login/PinRecover.vue";

const routes = [
    {path: '/', component: Home},
    {path: '/catalog', component: Catalog},
    {path: '/cart', component: Cart},
    {path: '/me', component: Mine},
    {path: '/login', component: Login, props: true},
    {path: '/login-area', component: LoginArea},
    {path: '/signup', component: Signup},
    {path: '/pin-recover', component: PinRecover}
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

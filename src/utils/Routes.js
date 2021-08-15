import {createRouter, createWebHistory} from 'vue-router';
import Home from '../components/Home.vue';
import Catalog from '../components/Catalog.vue';
import Cart from '../components/Cart.vue';
import Mine from '../components/Mine.vue';
import Login from '../components/Login.vue';
import LoginArea from '../components/login/LoginArea.vue';
import Signup from '../components/login/Signup.vue';
import PinRecover from '../components/login/PinRecover.vue';

const routes = [
    {name: 'home', path: '/', component: Home},
    {name: 'catalog', path: '/catalog', component: Catalog},
    {name: 'cart', path: '/cart', component: Cart},
    {name: 'mine', path: '/mine', component: Mine},
    {name: 'login', path: '/login', component: Login, props: true},
    {name: 'login-area', path: '/login-area', component: LoginArea, props: true},
    {name: 'signup', path: '/signup', component: Signup},
    {name: 'pin-recover', path: '/pin-recover', component: PinRecover}
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from) => {
    // for area back
    from.params.hasOwnProperty('mc') && (to.params = from.params);
});

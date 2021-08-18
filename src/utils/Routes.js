import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';

const routes = [
    // stay
    {name: 'home', path: '/', component: Home},
    // lazy
    {name: 'catalog', path: '/catalog', component: () => import('../views/Catalog.vue')},
    {name: 'cart', path: '/cart', component: () => import('../views/Cart.vue')},
    {name: 'mine', path: '/mine', component: () => import('../views/Mine.vue')},
    {name: 'login', path: '/login', component: () => import('../views/Login.vue'), props: true},
    {
        name: 'login-area',
        path: '/login-area',
        component: () => import('../views/login/LoginArea.vue'),
        props: true
    },
    {name: 'signup', path: '/signup', component: () => import('../views/login/Signup.vue')},
    {name: 'pin-recover', path: '/pin-recover', component: () => import('../views/login/PinRecover.vue')}
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from) => {
    // for area back
    to.params.mc = from.params.mc;
});

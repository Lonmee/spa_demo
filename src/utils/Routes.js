import {createRouter, createWebHistory} from 'vue-router';
import Home from '../components/Home.vue';

const routes = [
    // stay
    {name: 'home', path: '/', component: Home},
    // lazy
    {name: 'catalog', path: '/catalog', component: () => import('../components/Catalog.vue')},
    {name: 'cart', path: '/cart', component: () => import('../components/Cart.vue')},
    {name: 'mine', path: '/mine', component: () => import('../components/Mine.vue')},
    {name: 'login', path: '/login', component: () => import('../components/Login.vue'), props: true},
    {
        name: 'login-area',
        path: '/login-area',
        component: () => import('../components/login/LoginArea.vue'),
        props: true
    },
    {name: 'signup', path: '/signup', component: () => import('../components/login/Signup.vue')},
    {name: 'pin-recover', path: '/pin-recover', component: () => import('../components/login/PinRecover.vue')}
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from) => {
    // for area back
    from.params.hasOwnProperty('mc') && (to.params = from.params);
});

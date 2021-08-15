import {createRouter, createWebHashHistory} from "vue-router";
import Home from './components/Home.vue';

const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/about', component: About},
    {path: '/about', component: About},
    {path: '/about', component: About},
    {path: '/about', component: About},
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

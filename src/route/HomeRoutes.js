import Show from "../views/Show.vue";

export default [
    // stay
    {
        name: 'show',
        path: '/',
        component: Show
    },
    // lazy
    {
        name: 'catalog',
        path: '/catalog',
        component: () => import('../views/Catalog.vue')
    },
    {
        name: 'cart',
        path: '/cart',
        component: () => import('../views/Cart.vue')
    },
    {
        name: 'mine',
        path: '/mine',
        component: () => import('../views/Mine.vue')
    },
];
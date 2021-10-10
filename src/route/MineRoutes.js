export default [
    {
        name: 'login',
        path: '/login',
        component: () => import('../views/mine/login/Login.vue'),
        props: true
    },
    {
        name: 'login-area',
        path: '/login-area',
        component: () => import('../views/mine/login/LoginArea.vue'),
        props: true
    },
    {
        name: 'signup',
        path: '/signup',
        component: () => import('../views/mine/login/Signup.vue')
    },
    {
        name: 'pin-recover',
        path: '/pin-recover',
        component: () => import('../views/mine/login/PinRecover.vue')
    }
];
import {createRouter, createWebHistory} from 'vue-router';
import HomeRoutes from "./HomeRoutes";
import ShowRoutes from "./ShowRoutes";
import CatalogRoutes from "./CatalogRoutes";
import CartRoutes from "./CartRoutes";
import MineRoutes from "./MineRoutes";

const router = createRouter({
    history: createWebHistory(),
    routes: HomeRoutes
        .concat(ShowRoutes)
        .concat(CatalogRoutes)
        .concat(CartRoutes)
        .concat(MineRoutes)
});

// router.beforeEach((to, from) => {
//     // for area back
//     // from.params.mc && (to.params.mc = from.params.mc);
//     console.log('going form: ', from, 'to: ', to);
// })
//
// router.afterEach((to, from) => {
//     console.log('gone form: ', from, 'to: ', to);
// });

export default router;
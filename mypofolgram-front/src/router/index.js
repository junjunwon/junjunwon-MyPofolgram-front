import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path:'/',
        component: () => import("../views/Main.vue"),
    },
    {
        path:'/mypage',
        component: () => import("../views/Mypage.vue"),
    },
]

let router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
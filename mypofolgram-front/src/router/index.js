import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path:'/',
        component: () => import("../views/Main.vue"),
    },
    {
        path:'/activity',
        component: () => import("../views/Activity.vue"),
    },
    {
        path:'/search',
        component: () => import("../views/Search.vue"),
    },
    {
        path:'/comment/:id',
        component:() => import("../views/Comment.vue"),
    },
    {
        path:'/mypage',
        component: () => import("../views/Mypage.vue"),
    },
    {
        path: "/mypage/follow/:page",
        component: () => import("../views/Follow.vue"),
    },
    {
        path: "/mypage/modify",
        name:"modify",
        props:true,
        component: () => import("../views/Modify.vue"),
    },
    {
        path: "/mypage/modifyProfile",
        name:"modifyProfile",
        props:true,
        component: () => import("../views/ModifyProfile.vue"),
    },
]

let router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
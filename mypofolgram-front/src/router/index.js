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
        meta: {
        }
    },
    {
        path: "/mypage/follow/:page",
        component: () => import("../views/Follow.vue"),
        meta: {
        }
    },
    {
        path: "/mypage/modify",
        name:"modify",
        props:true,
        component: () => import("../views/Modify.vue"),
        meta: {
        }
    },
    {
        path: "/mypage/modifyProfile",
        name:"modifyProfile",
        props:true,
        component: () => import("../views/ModifyProfile.vue"),
        meta: {
        }
    },
]

let router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
import { createRouter, createWebHistory } from "vue-router";
// import { createStore } from "vuex";

// const beforeAuth = isAuth => (from, to, next) => {
//     const isAuthenticated = createStore.getters["isAuthenticated"]
//     if((isAuthenticated && isAuth) || (!isAuthenticated && !isAuth)) {
//         return next()
//     } else {
//         next("/main")
//     }
// }

const routes = [
    {
        path:'/main',
        component: () => import("../views/Main.vue"),
    },
    {
        path:'/',
        component: () => import("../views/Login.vue"),
        // beforeEnter : beforeAuth(false)
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
        props : true,
        meta: {
        }
    },
    {
        path: "/mypage/follow/:page",
        props : true,
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
    {
        path: "/story/:id",
        props : true,
        component: () => import("../views/StoryView.vue"),
        meta: {
        }
    },
]

let router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});


export default router;
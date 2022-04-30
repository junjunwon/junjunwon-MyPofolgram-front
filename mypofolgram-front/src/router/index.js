import { createRouter, createWebHistory } from "vue-router";
import createStore from "../store"

const beforeAuth = isAuth => (from, to, next) => {
    const isAuthenticated = createStore.getters["auth/isAuthenticated"]
    if ((isAuthenticated && isAuth) || (!isAuthenticated && !isAuth)) {
      return next()
    } else {
      // 홈 화면으로 이동
      next("/login")
    }
  }

const routes = [
    {
        path:'/',
        name : 'main',
        component: () => import("../views/Main.vue"),
        beforeEnter: beforeAuth(true),
    },
    {
        path:'/login',
        component: () => import("../views/Login.vue"),
        beforeEnter: beforeAuth(false),
    },
    {
        path:'/activity',
        component: () => import("../views/Activity.vue"),
        beforeEnter: beforeAuth(true),
    },
    {
        path:'/search',
        component: () => import("../views/Search.vue"),
        beforeEnter: beforeAuth(true),
    },
    {
        path:'/comment/:id',
        component:() => import("../views/Comment.vue"),
        beforeEnter: beforeAuth(true),
    },
    {
        path:'/mypage',
        component: () => import("../views/Mypage.vue"),
        beforeEnter: beforeAuth(true),
        props : true,
        meta: {
        }
    },
    {
        path: "/mypage/follow/:page",
        props : true,
        component: () => import("../views/Follow.vue"),
        beforeEnter: beforeAuth(true),
        meta: {
        }
    },
    {
        path: "/mypage/modify",
        name:"modify",
        props:true,
        component: () => import("../views/Modify.vue"),
        beforeEnter: beforeAuth(true),
        meta: {
        }
    },
    {
        path: "/mypage/modifyProfile",
        name:"modifyProfile",
        props:true,
        component: () => import("../views/ModifyProfile.vue"),
        beforeEnter: beforeAuth(true),
        meta: {
        }
    },
    {
        path: "/story/:id",
        props : true,
        component: () => import("../views/StoryView.vue"),
        beforeEnter: beforeAuth(true),
        meta: {
        }
    },
]

let router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

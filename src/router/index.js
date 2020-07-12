import Vue from 'vue'
import VueRouter from 'vue-router'
import register from '@/views/register.vue'
import login from "@/views/Login.vue"
import userinfo from "@/views/userinfo.vue"
Vue.use(VueRouter)
const routes = [{
        path: '/register',
        component: register
    },
    {
        path: "/login",
        component: login
    },
    {
        path: "/userinfo",
        component: userinfo
    }
]
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
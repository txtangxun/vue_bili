import Vue from 'vue'
import VueRouter from 'vue-router'
import register from '@/views/register.vue'
import login from "@/views/Login.vue"
import edit from "@/views/edit.vue"
import userinfo from "@/views/userinfo.vue"
import home from "@/views/Home.vue"
Vue.use(VueRouter)
const routes = [{
        path: '/',
        component: home
    },
    {
        path: '/register',
        component: register
    },
    {
        path: "/login",
        component: login
    },
    {
        path: "/userinfo",
        component: userinfo,
        meta: {
            isToken: true
        }
    },
    {
        path: "/edit",
        component: edit,
        meta: {
            isToken: true
        }
    }
]
const router = new VueRouter({
    routes,
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    if (!localStorage.getItem('id') && !localStorage.getItem('token') && to.meta.isToken === true) {
        router.push('/login')
        return
    }
    next()
})

export default router
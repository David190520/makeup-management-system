import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../pages/Home.vue'),
        meta: { requiresAuth: true },
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../pages/Login.vue'),
        meta: { guest: true }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// navigation guard for authentication
router.beforeEach((to, from, next) => {
    next();
})

export default router;
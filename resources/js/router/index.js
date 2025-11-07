import { createRouter, createWebHistory } from "vue-router";

// components
import Home from '../pages/Home.vue';
import login from '../pages/Login.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: { requiresAuth: true },
    },
    {
        path: '/login',
        name: 'login',
        component: login,
        meta: { guest: true }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// Navigation guard for authentication
router.beforeEach((to, from, next) => {
    // for now just allow all routes
    next();
})
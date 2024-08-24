import { createWebHistory, createRouter } from "vue-router";

import Main from '@/pages/Main.vue';
import Albums from '@/pages/Albums.vue';
import Register from "@/pages/Register.vue";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/albums',
        component: Albums
    },
    {
        path: '/register',
        component: Register
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_GH_URL),
    routes
});

export default router;
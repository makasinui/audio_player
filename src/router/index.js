import { createWebHistory, createRouter } from "vue-router";
import Main from '@/pages/Main.vue'

const routes = [
    {
        path: '/',
        component: Main
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_GH_URL),
    routes
});

export default router;
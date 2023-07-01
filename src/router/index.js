import { createWebHistory, createRouter } from "vue-router";
import Main from '@/pages/Main.vue'

const routes = [
    {
        path: '/',
        component: Main
    }
]

const router = createRouter({
    history: createWebHistory('/audio_player/'),
    routes
});

export default router;
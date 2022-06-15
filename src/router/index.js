import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/Pages/HomePage";
import PageView from "@/Pages/PageView";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
    {
        path: '/page',
        name: 'page_view',
        component: PageView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
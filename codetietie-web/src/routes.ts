import HomePage from './pages/HomePage/index.vue'
import CodePage from './pages/CodePage/index.vue'
import NotFoundPage from './pages/NotFoundPage/index.vue'
import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from 'vue-router'

const routes:RouteRecordRaw[] = [
    {
        path: "/",
        name: 'Root',
        component: HomePage,
    },
    {
        path: "/:randomValue",
        name: 'randomValue',
        component: CodePage,
    },
    {
        path: '/not_found',
        name: 'notFound',
        component: NotFoundPage
    }
]

const router = createRouter({
    routes: routes,
    history: createWebHistory(),
});

export { router };
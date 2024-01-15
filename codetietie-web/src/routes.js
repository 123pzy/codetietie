import HomePage from './pages/HomePage.vue'
import CodePage from './pages/CodePage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'
import { createRouter, createWebHistory } from "vue-router";

const routes = [
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
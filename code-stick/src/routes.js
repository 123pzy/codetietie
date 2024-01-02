import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: 'Root',
        component: App,
    },
    {
        path: "/:randomValue",
        name: 'randomValue',
        component: HomePage,
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
import HomePage from './pages/HomePage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: 'Root',
        compontent: HomePage,
        children: [
            {
                path: "/:randomValue",
                name: 'randomValue',
                compontent: HomePage,
            }
        ]
    },
    {
        path: '/not_found',
        name: 'notFound',
        compontent: NotFoundPage
    }
]

const router = createRouter({
    routes: routes,
    history: createWebHistory(),
});

export { router };
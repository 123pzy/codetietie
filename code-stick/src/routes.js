import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        compontent: App,
    },
    {
        path: "/:randomValue",
        name: 'randomValue',
        compontent: App,
    }
]

const router = createRouter({
    routes: routes,
    history: createWebHistory(),
});

export { router };
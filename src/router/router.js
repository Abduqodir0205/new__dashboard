import { createRouter, createWebHistory } from "vue-router";
import userLoginVue from "../components/user-login.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    routes: [
        {
            path: "/",
            name: login,
            component: userLoginVue,
        },
    ]
})
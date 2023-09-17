import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue"
import HistoryView from "@/views/HistoryView.vue";
import TeamView from "@/views/TeamView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
            meta: {
                title: "Home",
            },
        },

        {
            path: "/history",
            name: "history",
            component: HistoryView,
            meta: {
                title: "Home",
            },
        },

        {
            path: "/team",
            name: "team",
            component: TeamView,
            meta: {
                title: "Team",
            },
        },
    ],
});

export default router;
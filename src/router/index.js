import { createRouter, createWebHistory } from "vue-router";
import Start from "./../components/Start.vue";
import UeberMich from "../components/UeberMich.vue";
import Kontakt from "./../components/Kontakt.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Start", component: Start },
    { path: "/uebermich", name: "UeberMich", component: UeberMich },
    { path: "/kontakt", name: "Kontakt", component: Kontakt },
  ],
});

export default router;

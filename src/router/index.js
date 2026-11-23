import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignupView from "../views/SignupView.vue";

// The two "pages" of the app are views; the router swaps them inside <router-view>.
// Hash history (#/signup) is used so the app also works on a static host
// such as GitHub Pages without any server configuration.
const routes = [
    { path: "/", name: "home", component: HomeView },
    { path: "/signup", name: "signup", component: SignupView },
    // unknown address -> main page
    { path: "/:pathMatch(.*)*", redirect: "/" }
];

export default createRouter({
    history: createWebHashHistory(),
    routes
});

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/style.css";

createApp(App)
    .use(router) // Vue Router: Home and Signup views
    .use(store)  // Vuex: global store with the posts
    .mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import customPlugin from "@/plugin";
// ćšć±ćé
import "amfe-flexible";
import "normalize.css/normalize.css";

const app = createApp(App);
app.use(customPlugin);
app.use(store).use(router).mount("#app");

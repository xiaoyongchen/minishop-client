import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 全局变量
import "amfe-flexible";
import "normalize.css/normalize.css";

createApp(App).use(store).use(router).mount("#app");

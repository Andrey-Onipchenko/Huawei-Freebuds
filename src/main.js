import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Maska from "maska";

createApp(App).use(store).use(router).use(Maska).mount("#app");

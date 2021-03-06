// 负责vue示例创建，每次请求均会有独立的vue实例创建
import Vue from "vue";
import App from "./App.vue";
import { createRouter } from "./router";
import { createStore } from "./store";

export function createApp(context) {
  const router = createRouter();
  const store = createStore();
  const app = new Vue({
    router,
    store,
    context,
    render: (h) => h(App),
  });
  
  return {
    app,
    router,
    store,
  };
}

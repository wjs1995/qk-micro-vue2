import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
  },
];

export default () => {
  return new VueRouter({
    mode: "history",
    // base: process.env.BASE_URL,
    base: window.__POWERED_BY_QIANKUN__ ? "/app-vue2/" : "/",
    routes,
  });
};

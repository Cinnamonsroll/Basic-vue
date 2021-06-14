import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/",
      name: "meow",
      component: () => import("./components/main")
    },
  ]
});

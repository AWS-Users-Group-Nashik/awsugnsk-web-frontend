import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home"),
    },
    {
      path: "/events",
      name: "events",
      component: () => import("@/views/Events"),
    },
    {
      path: "/learning-paths",
      name: "learning-paths",
      component: () => import("@/views/LearningPaths"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/About"),
    },
  ],
});

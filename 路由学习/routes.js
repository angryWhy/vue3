import Home from "./Home.vue";
import child from "./child.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/home",
    component: () => import(/*webpackChunkName: "home-chunk"*/ "./Home"),
  },
  {
    path: "/child/:name",
    component: child,
  },
];
const router = createRouter({
  routes,
  history: createWebHistory,
});
export default router;

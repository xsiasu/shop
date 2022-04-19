import Vue from "vue";
import Router from "vue-router";
import HomeView from "./views/HomeView.vue";
import ShopView from "./views/ShopView.vue";
import FeaturesView from "./views/FeaturesView.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      name: "home",
      path: "/",
      component: HomeView,
    },
    {
      name: "shop",
      path: "/shop",
      component: ShopView,
    },
    {
      name: "features",
      path: "/features",
      component: FeaturesView,
    },
  ],
});

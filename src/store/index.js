import Vue from "vue";
import Vuex from "vuex";

import blog from "./blog/index";
import cart from "./cart/index";
import insta from "./insta/index";
import product from "./product/index";

Vue.use(Vuex);
Vue.config.devtools = true;
export default new Vuex.Store({
  modules: {
    blog,
    cart,
    insta,
    product,
  },
});

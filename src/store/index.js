import Vue from "vue";
import Vuex from "vuex";
import cart from "./cart/index";

Vue.use(Vuex);
Vue.config.devtools = true;

export default new Vuex.Store({
  namespaced: true,
  modules: {
    cart,
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {},
});

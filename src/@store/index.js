import Vue from "vue";
import Vuex from "vuex";

import productApi from "./bestproduct/index";

Vue.use(Vuex);

// export default new Vuex.Store({
//   modules: {
//     product,
//   },
//   state: {},
//   mutations: {},
//   actions: {},
// });

export default new Vuex.Store({
  state: {
    bestproduct: [],
  },
  mutation: {
    setBestProduct(state, products) {
      state.bestproduct = [].concat(products);
    },
    setFeaturedProduct(state, products) {
      state.featuredproduct = [].concat(products);
    },
  },
  actions: {
    async setBestProduct({ commit }) {
      const response = await productApi.getBestProduct();
      commit("setBestProduct", response.data);
    },
    async setFeaturedProduct({ commit }) {
      const response = await productApi.getFeaturedProduct();
      commit("setFeaturedProduct", response.data);
    },
  },
});

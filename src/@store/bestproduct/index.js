import productApi from "";

export default {
  namespaced: true,
  state: {
    bestproduct: [],
    featuredproduct: [],
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
};

import allproductApi from "@/api/product";
export default {
  namespaced: true,
  state: {
    //data
    bestproduct: [],
    allproduct: [],
    totalproduct: 0,
    featuredproduct: [], //배열선언만 한것인가?
  },
  getters: {
    featuredAllProducts: (state) => {
      return state.featuredproduct.length;
    },
    countOfNew: (state) => {
      let count = 0;
      state.featuredproduct.forEach((featured) => {
        if (featured.badge === "sale") count++;
      });
      return count;
    },
    // getters 를 사ㅇㅏ기 위서 두번째 인에 getters를 넣어줘야하므로 state 를 첫번째
    // 인자에 넣어줘야한다.
    percentOfNew: (state, getters) => {
      return Math.round(
        (getters.countOfNew / getters.featuredAllProducts) * 100
      );
    },
  },
  mutations: {
    //베스트상품
    setbestProduct(state, allproduct) {
      state.bestproduct = [].concat(allproduct);
    },
    //특징상품
    setFeaturedProduct(state, allproduct) {
      state.featuredproduct = [].concat(allproduct);
    },
    //모든상품
    setAllProduct(state, allproduct) {
      state.allproduct = [].concat(allproduct);
    },
  },
  actions: {
    async setBestProduct({ commit }) {
      const response = await allproductApi.getBestProduct();
      commit("setBestProduct", response.data);
    },
    async setFeaturedProduct({ commit }) {
      const response = await allproductApi.getFeaturedProduct();
      commit("setFeaturedProduct", response.data);
    },

    async setAllProduct({ commit }) {
      const response = await allproductApi.getAllProduct();
      commit("setAllProduct", response.data.allproduct);
    },
  },
};

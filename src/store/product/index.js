import allproductApi from "@/api/product";
export default {
  namespaced: true,
  state: {
    //data
    bestproduct: [],
    allproduct: [],
    totalproduct: 0,
    featuredproduct: [], //배열선언만 한것인가?
    page: 0,
    priceRange: null,
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
    //paging 처리를 위한 상품 호출 count
    setAllProductCount(state, totalCount) {
      state.totalproduct = totalCount;
    },
    setPage(state, page) {
      state.page = page;
    },
    setPriceRange(state, priceRange) {
      state.priceRange = priceRange;
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

    async setAllProduct({ commit, state }, page = 0) {
      const response = await allproductApi.getAllProduct(
        page,
        state.priceRange
      );
      // 모든상품데이터 호출
      commit("setAllProduct", response.data.allproduct);
      // 모든상품의 count 호출
      commit("setAllProductCount", response.data.total);
      commit("setPage", page);
    },
    async setPriceRange({ commit, dispatch }, priceRange) {
      commit("setPriceRange", priceRange);

      dispatch("setAllProduct");
    },
  },
};

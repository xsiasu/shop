import Vue from "vue";
import Vuex from "vuex";
import socialApi from "@/api/social";
import featuredproductApi from "@/api/product";
import allproductApi from "@/api/product";
import bestproductApi from "@/api/product";

Vue.use(Vuex);
Vue.config.devtools = true;
export default new Vuex.Store({
  namespaced: true,
  state: {
    //data
    allproduct: [],
    totalproduct: 0,
    featuredproduct: [],
    bestproduct: [],
    blogs: [],
    instagram: [],
    items: [],
  },
  getters: {
    //computed

    allProducts: (state) => {
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
      return Math.round((getters.countOfNew / getters.allProducts) * 100);
    },
    totalPrice(state) {
      return Math.round(
        state.items.reduce((sum, item) => sum + item.price * item.qty, 0)
      );
    },
    totalQty: (state) => {
      return state.items.length;
    },
  },
  mutations: {
    setFeaturedProduct(state, featuredproduct) {
      state.featuredproduct = [].concat(featuredproduct);
    },
    setbestProduct(state, bestproduct) {
      state.bestproduct = [].concat(bestproduct);
    },
    setAllProduct(state, allproduct) {
      state.allproduct = [].concat(allproduct);
    },
    setBlog(state, blogs) {
      state.blogs = [].concat(blogs);
    },
    setInstagram(state, instagram) {
      state.instagram = [].concat(instagram);
    },
    addItem(state, item) {
      const cartItems = state.items.filter((cartItem) => {
        cartItem.id = item.id;
      });
      if (cartItems.length === 0) {
        state.items.push({
          ...item,
          qty: 1,
        });
      } else {
        cartItems[0].qty++;
      }
    },
    delItem(state, index) {
      state.items.splice(index, 1);
    },
  },
  actions: {
    async setFeaturedProduct({ commit }) {
      const response = await featuredproductApi.getFeaturedProduct();
      commit("setFeaturedProduct", response.data);
    },
    async setBestProduct({ commit }) {
      const response = await bestproductApi.getBestProduct();
      commit("setBestProduct", response.data);
    },
    async setAllProduct({ commit }) {
      const response = await allproductApi.getAllProduct();
      commit("setAllProduct", response.data.allproduct);
    },
    async setBlog({ commit }) {
      const response = await socialApi.getBlog();
      commit("setBlog", response.data);
    },
    async setInstagram({ commit }) {
      const response = await socialApi.getInstagram();
      commit("setInstagram", response.data);
    },
    addItem({ commit }, item) {
      commit("addItem", item);
    },
    delItem({ commit }, id) {
      commit("delItem", id);
    },
  },
});

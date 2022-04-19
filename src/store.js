import Vue from "vue";
import Vuex from "vuex";
import socialApi from "@/api/social";
import allproductApi from "@/api/product";

Vue.use(Vuex);
Vue.config.devtools = true;
export default new Vuex.Store({
  namespaced: true,
  state: {
    //data
    allproduct: [],
    totalproduct: 0,
    featuredproduct: [], //배열선언만 한것인가?
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
    setBlog(state, blogs) {
      state.blogs = [].concat(blogs);
    },
    setInstagram(state, instagram) {
      state.instagram = [].concat(instagram);
    },
    addItem(state, item) {
      const resultItems = state.items.filter((cartItem) => {
        cartItem.id = item.id;
      });

      if (resultItems.length === 0) {
        state.items.push({
          ...item,
          qty: 1,
        });
      } else {
        resultItems[0].qty++;
      }
    },
    delItem(state, index) {
      state.items.splice(index, 1);
    },
    // delItem(state, id) {
    //   state.items = state.items.filter((item) => {
    //     item.id !== id;
    //   });
    // },
    changeQty(state, { id, qty }) {
      const cartItem = state.items.filter((cartItem) => {
        cartItem.id === id;
      });

      if (cartItem.length !== 0) {
        if (cartItem[0].qty + qty <= 0) {
          const index = state.items.findIndex((cartItem) => {
            cartItem.id === id;

            state.items.splice(index, 1);
          });
        } else {
          cartItem[0].qty += qty;
        }
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
  actions: {
    async setFeaturedProduct({ commit }) {
      const response = await allproductApi.getFeaturedProduct();
      commit("setFeaturedProduct", response.data);
    },
    async setBestProduct({ commit }) {
      const response = await allproductApi.getBestProduct();
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
    delItem({ commit }, index) {
      commit("delItem", index);
    },
    increaseQty({ commit }, id) {
      commit("changeQty", {
        id,
        qty: 1,
      });
    },
    decreaseQty({ commit }, id) {
      commit("changeQty", {
        id,
        qty: -1,
      });
    },
    clearCart({ commit }) {
      commit("clearCart");
    },
  },
});

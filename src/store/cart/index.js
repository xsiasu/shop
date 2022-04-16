export default {
  namespaced: true,
  state: {
    //data
    items: [],
  },
  getters: {
    //computed
    totalPrice(state) {
      return Math.round(state.items.reduce((sum, item) => sum + item.price, 0));
    },
    totalQty: (state) => {
      return state.items.length;
    },
  },
  mutations: {
    // 동기밖에 안됨
    addItem(state, item) {
      state.items.push({
        ...item,
      });
    },
  },
  actions: {
    // 비동기 지원
    addItem({ commit }, item) {
      commit("addItem", item);
    },
  },
};

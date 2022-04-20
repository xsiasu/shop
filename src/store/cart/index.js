export default {
  namespaced: true,
  state: {
    //data
    items: [],
  },
  getters: {
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
    addItem(state, item) {
      const resultItems = state.items.filter((cartItem) => {
        cartItem.id === item.id;
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
    delItem(state, id) {
      // state.items.splice(index, 1);
      state.items = state.items.filter((item) => item.id !== id);
    },
    changeQty(state, { id, qty }) {
      const resultItem = state.items.filter((cartItem) => {
        cartItem.id === id;
      });
      if (resultItem.length !== 0) {
        if (resultItem[0].qty + qty <= 0) {
          const index = state.items.findIndex((cartItem) => {
            cartItem.id === id;

            state.items.splice(index, 1);
          });
        } else {
          resultItem[0].qty += qty;
        }
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
  actions: {
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
};

import socialApi from "@/api/social";
export default {
  namespaced: true,
  state: {
    //data
    instagram: [],
  },
  getters: {},
  mutations: {
    setInstagram(state, instagram) {
      state.instagram = [].concat(instagram);
    },
  },
  actions: {
    async setInstagram({ commit }) {
      const response = await socialApi.getInstagram();
      commit("setInstagram", response.data);
    },
  },
};

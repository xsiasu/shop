import socialApi from "@/api/social";
export default {
  namespaced: true,
  state: {
    //data
    blogs: [],
  },
  getters: {},
  mutations: {
    setBlog(state, blogs) {
      state.blogs = [].concat(blogs);
    },
  },
  actions: {
    async setBlog({ commit }) {
      const response = await socialApi.getBlog();
      commit("setBlog", response.data);
    },
  },
};

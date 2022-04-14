import http from "./http";
//aync es6 에 promise 가 좀 더  편하게 바뀌었다고 생각하면 됨
export default {
  async getMainSlideBanner() {
    return http.get("api/banner.json");
  },
};

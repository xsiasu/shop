import http from "./http";
//aync es6 에 promise 가 좀 더  편하게 바뀌었다고 생각하면 됨
export default {
  async getBlog() {
    return http.get("api/blog-article.json");
  },
  async getInstagram() {
    return http.get("api/instagram.json");
  },
};

import http from "./http";
//aync es6 에 promise 가 좀 더  편하게 바뀌었다고 생각하면 됨
export default {
  async getBestProduct() {
    return http.get("api/best-product.json");
  },
  async getFeaturedProduct() {
    return http.get("api/featured-product.json");
  },
  //모든상품의 인자를 넣어준다. page=1 , priceRange=null
  async getAllProduct(page = 1, priceRange = null) {
    return http.get("api/all-product.json", {
      page,
      priceRange,
    });
  },
};

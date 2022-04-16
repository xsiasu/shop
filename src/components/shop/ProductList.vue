<template>
  <!-- Product -->
  <div class="row">
    <template v-for="(item, index) in allproduct">
      <div :key="index" class="col-sm-12 col-md-6 col-lg-4 p-b-50">
        <!-- Block2 -->
        <div class="block2">
          <div
            class="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew"
          >
            <img :src="`${item.image}`" alt="IMG-PRODUCT" />

            <div class="block2-overlay trans-0-4">
              <a href="#" class="block2-btn-addwishlist hov-pointer trans-0-4">
                <i class="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                <i
                  class="icon-wishlist icon_heart dis-none"
                  aria-hidden="true"
                ></i>
              </a>

              <div class="block2-btn-addcart w-size1 trans-0-4">
                <!-- Button -->
                <button
                  class="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4"
                  @click="addToCart(item)"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div class="block2-txt p-t-20">
            <a
              href="product-detail.html"
              class="block2-name dis-block s-text3 p-b-5"
            >
              {{ item.title }}
            </a>

            <span class="block2-price m-text6 p-r-5"> {{ item.price }} </span>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import allproductApi from "@/api/product";
// import AllProduct from "@/components/AllProduct.vue";
// import { mapState } from "vuex";
export default {
  components: {
    // AllProduct,
  },
  data() {
    return {
      allproduct: [],
    };
  },
  computed: {
    // ...mapState(["allproduct"]),
  },
  created() {
    allproductApi.getAllProduct().then((response) => {
      this.allproduct = [].concat(response.data.allproduct);
    });
  },
  methods: {
    addToCart(item) {
      this.$store.dispatch("addItem", item);
    },
  },
};
</script>

<style></style>

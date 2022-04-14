<template>
  <!-- New Product -->
  <section class="newproduct bgwhite p-t-45 p-b-105">
    <div class="container">
      <div class="sec-title p-b-60">
        <h3 class="m-text5 t-center">
          Featured Products{{ allProducts }} 새상품
          {{ countOfNew }}
          새상품의 비율 {{ percentOfNew }}%
        </h3>
      </div>

      <!-- Slide2 -->
      <div class="wrap-slick2">
        <div ref="slick" class="slick2">
          <template v-for="(item, index) in featuredproduct">
            <AllProduct :key="index" :item="item" />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import AllProduct from "@/components/AllProduct.vue";
export default {
  // 배열로 받기
  components: {
    AllProduct,
  },
  computed: {
    ...mapGetters(["allProducts", "countOfNew", "percentOfNew"]),
    ...mapState(["featuredproduct"]),
  },
  // 객체 받기
  // computed: {
  //   ...mapGetters({
  //     allcount: "allProducts",
  //     newcount: "countOfNew",
  //     percent: "percentOfNew",
  //   }),
  // },
  created() {
    this.$store.dispatch("setFeaturedProduct").then(() => {
      this.$nextTick(() => {
        $(this.$refs.slick).slick2();
      });
    });
  },
};
</script>

<style></style>

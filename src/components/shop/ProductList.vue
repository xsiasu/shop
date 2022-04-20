<template>
  <!-- Product -->
  <div class="row">
    <template v-for="(item, index) in allproduct">
      <div :key="index" class="col-sm-12 col-md-6 col-lg-4 p-b-50">
        <!-- Block2 -->
        <AllProduct :item="item" />
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AllProduct from "@/components/AllProduct.vue";
export default {
  components: {
    AllProduct,
  },
  computed: {
    ...mapState("product", ["allproduct"]),
  },
  created() {
    this.$store.dispatch("product/setAllProduct");
  },
};
</script>

<style></style>

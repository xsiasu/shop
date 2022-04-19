<template>
  <div class="item-slick2 p-l-15 p-r-15">
    <!-- Block2 -->
    <div class="block2">
      <div
        class="block2-img wrap-pic-w of-hidden pos-relative"
        :class="{
          'block2-labelnew': item.badge === 'new',
          'block2=labelsale': item.badge === 'sale',
        }"
      >
        <img :src="item.image" alt="IMG-PRODUCT" />

        <div class="block2-overlay trans-0-4">
          <a href="" class="block2-btn-addwishlist hov-pointer trans-0-4">
            <i class="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
            <i class="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
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
          Herschel supply co 25l
        </a>

        <span class="block2-price m-text6 p-r-5"> $75.00 </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart(item) {
      this.$store.dispatch("addItem", item);
    },
  },
};
</script>

<style></style>

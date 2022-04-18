<template>
  <div>
    <!-- Header cart noti -->
    <span class="header-icons-noti">{{ totalQty }}</span>
    <div class="header-cart header-dropdown">
      <ul class="header-cart-wrapitem">
        <template v-for="(item, index) in items">
          <li :key="index" class="header-cart-item">
            <div class="header-cart-item-img" @click="delItem(index)">
              <img :src="item.image" alt="IMG" />
            </div>
            <div class="header-cart-item-txt">
              <a href="#" class="header-cart-item-name">
                Converse All Star Hi Black Canvas
              </a>

              <span class="header-cart-item-info">
                {{ item.qty }} x ${{ item.price }}</span
              >
            </div>
          </li>
        </template>
      </ul>

      <div class="header-cart-total">Total: ${{ totalPrice }}</div>

      <div class="header-cart-buttons">
        <div class="header-cart-wrapbtn">
          <!-- Button -->
          <a
            href="cart.html"
            class="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4"
          >
            View Cart
          </a>
        </div>

        <div class="header-cart-wrapbtn">
          <!-- Button -->
          <a
            href="#"
            class="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4"
          >
            Check Out
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["items"]),
    ...mapGetters(["totalPrice", "totalQty"]),
  },
  created() {},
  methods: {
    delItem(index) {
      this.$store.dispatch("delItem", index);
    },
  },
};
</script>

<style></style>

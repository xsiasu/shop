<template>
  <!-- Header -->
  <header class="header1">
    <!-- Header desktop -->
    <div class="container-menu-header">
      <div class="topbar">
        <div class="topbar-social">
          <a href="#" class="topbar-social-item fa fa-facebook" />
          <a href="#" class="topbar-social-item fa fa-instagram" />
          <a href="#" class="topbar-social-item fa fa-pinterest-p" />
          <a href="#" class="topbar-social-item fa fa-snapchat-ghost" />
          <a href="#" class="topbar-social-item fa fa-youtube-play" />
        </div>

        <span class="topbar-child1">
          Free shipping for standard order over $100
        </span>

        <div class="topbar-child2">
          <span class="topbar-email"> fashe@example.com </span>

          <div class="topbar-language rs1-select2">
            <select class="selection-1" name="time">
              <option>USD</option>
              <option>EUR</option>
            </select>
          </div>
        </div>
      </div>

      <div class="wrap_header">
        <!-- Logo -->
        <router-link to="/" class="logo" tag="a">
          <img src="images/icons/logo.png" alt="IMG-LOGO" />
        </router-link>

        <!-- Menu -->
        <div class="wrap_menu">
          <nav class="menu">
            <ul class="main_menu">
              <li>
                <router-link :to="{ name: 'home' }" active-class="active">
                  <a>Home</a>
                </router-link>
                <ul class="sub_menu">
                  <li><a href="index.html">Homepage V1</a></li>
                  <li><a href="home-02.html">Homepage V2</a></li>
                  <li><a href="home-03.html">Homepage V3</a></li>
                </ul>
              </li>
              <li>
                <router-link :to="{ name: 'shop' }" active-class="active"
                  ><a>Shop</a></router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'features' }" active-class="active"
                  ><a>Features</a></router-link
                >
              </li>
            </ul>
          </nav>
        </div>

        <!-- Header Icon -->
        <div class="header-icons">
          <a href="#" class="header-wrapicon1 dis-block">
            <img
              src="images/icons/icon-header-01.png"
              class="header-icon1"
              alt="ICON"
            />
          </a>

          <span class="linedivide1" />

          <div class="header-wrapicon2">
            <img
              src="images/icons/icon-header-02.png"
              class="header-icon1 js-show-header-dropdown"
              alt="ICON"
            />

            <CartList />
          </div>
        </div>
      </div>
    </div>

    <!-- Header Mobile -->
    <div class="wrap_header_mobile">
      <!-- Logo moblie -->
      <router-link to="/" class="logo-mobile">
        <img src="images/icons/logo.png" alt="IMG-LOGO" />
      </router-link>

      <!-- Button show menu -->
      <div class="btn-show-menu">
        <!-- Header Icon mobile -->
        <div class="header-icons-mobile">
          <a href="#" class="header-wrapicon1 dis-block">
            <img
              src="images/icons/icon-header-01.png"
              class="header-icon1"
              alt="ICON"
            />
          </a>

          <span class="linedivide2" />

          <div class="header-wrapicon2">
            <img
              src="images/icons/icon-header-02.png"
              class="header-icon1 js-show-header-dropdown"
              alt="ICON"
            />
            <span class="header-icons-noti">{{ totalQty }}</span>

            <!-- Header cart noti -->
            <div class="header-cart header-dropdown">
              <ul class="header-cart-wrapitem">
                <template v-for="(item, index) in items">
                  <li :key="index" class="header-cart-item">
                    <div class="header-cart-item-img" @click="delItem(item.id)">
                      <img :src="item.image" alt="IMG" />
                    </div>

                    <div class="header-cart-item-txt">
                      <a href="#" class="header-cart-item-name">
                        {{ item.title }}
                      </a>

                      <span class="header-cart-item-info">
                        {{ item.qty }} x ${{ item.price }}
                      </span>
                    </div>
                  </li>
                </template>
              </ul>

              <div class="header-cart-total">Total: ${{ totalPrice }}</div>

              <div class="header-cart-buttons">
                <div class="header-cart-wrapbtn">
                  <!-- Button -->
                  <router-link
                    tag="a"
                    :to="{ name: 'features' }"
                    class="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4"
                  ></router-link>
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
        </div>

        <div class="btn-show-menu-mobile hamburger hamburger--squeeze">
          <span class="hamburger-box">
            <span class="hamburger-inner" />
          </span>
        </div>
      </div>
    </div>

    <!-- Menu Mobile -->
    <div class="wrap-side-menu">
      <nav class="side-menu">
        <ul class="main-menu">
          <li class="item-topbar-mobile p-l-20 p-t-8 p-b-8">
            <span class="topbar-child1">
              Free shipping for standard order over $100
            </span>
          </li>

          <li class="item-topbar-mobile p-l-20 p-t-8 p-b-8">
            <div class="topbar-child2-mobile">
              <span class="topbar-email"> fashe@example.com </span>

              <div class="topbar-language rs1-select2">
                <select class="selection-1" name="time">
                  <option>USD</option>
                  <option>EUR</option>
                </select>
              </div>
            </div>
          </li>

          <li class="item-topbar-mobile p-l-10">
            <div class="topbar-social-mobile">
              <a href="#" class="topbar-social-item fa fa-facebook" />
              <a href="#" class="topbar-social-item fa fa-instagram" />
              <a href="#" class="topbar-social-item fa fa-pinterest-p" />
              <a href="#" class="topbar-social-item fa fa-snapchat-ghost" />
              <a href="#" class="topbar-social-item fa fa-youtube-play" />
            </div>
          </li>

          <li class="item-menu-mobile">
            <a href="index.html">Home</a>
            <ul class="sub-menu">
              <li><a href="index.html">Homepage V1</a></li>
              <li><a href="home-02.html">Homepage V2</a></li>
              <li><a href="home-03.html">Homepage V3</a></li>
            </ul>
            <i class="arrow-main-menu fa fa-angle-right" aria-hidden="true" />
          </li>

          <li class="item-menu-mobile">
            <a href="product.html">Shop</a>
          </li>

          <li class="item-menu-mobile">
            <a href="product.html">Sale</a>
          </li>

          <li class="item-menu-mobile">
            <a href="cart.html">Features</a>
          </li>

          <li class="item-menu-mobile">
            <a href="blog.html">Blog</a>
          </li>

          <li class="item-menu-mobile">
            <a href="about.html">About</a>
          </li>

          <li class="item-menu-mobile">
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import CartList from "./CartList";
import { mapState, mapGetters } from "vuex";
export default {
  components: {
    CartList,
  },
  computed: {
    ...mapState("cart", ["items"]),
    ...mapGetters("cart", ["totalPrice", "totalQty"]),
  },
  methods: {
    delItem(id) {
      this.$store.dispatch("cart/delItem", id);
    },
  },
};
</script>

<style scoped>
.active {
  color: red;
}
</style>

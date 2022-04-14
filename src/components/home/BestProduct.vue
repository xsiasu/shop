<template>
  <!-- Banner -->
  <section class="banner bgwhite p-t-40 p-b-40">
    <div class="container">
      <div class="row">
        <div class="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
          <!-- block1 -->
          <template v-for="(item, index) in firstColum">
            <div :key="index" class="block1 hov-img-zoom pos-relative m-b-30">
              <img :src="`${item.image}`" alt="IMG-BENNER" />
              <div class="block1-wrapbtn w-size2">
                <!-- Button -->
                <a
                  href="`{item.link}`"
                  class="flex-c-m size2 m-text2 bg3 hov1 trans-0-4"
                >
                  {{ index + 1 }}{{ item.linkText }}
                </a>
              </div>
            </div>
          </template>
        </div>

        <div class="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
          <template v-for="item in secondColum">
            <!-- block1 -->
            <div
              :key="item.index"
              class="block1 hov-img-zoom pos-relative m-b-30"
            >
              <img :src="`${item.image}`" alt="IMG-BENNER" />

              <div class="block1-wrapbtn w-size2">
                <!-- Button -->
                <a
                  href="`{item.link}`"
                  class="flex-c-m size2 m-text2 bg3 hov1 trans-0-4"
                >
                  {{ item.linkText }}
                </a>
              </div>
            </div>
          </template>
        </div>

        <div class="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
          <!-- block1 -->

          <div class="block1 hov-img-zoom pos-relative m-b-30">
            <img :src="thirdColum.image" alt="IMG-BENNER" />

            <div class="block1-wrapbtn w-size2">
              <!-- Button -->
              <a
                href="`${item.link}`"
                class="flex-c-m size2 m-text2 bg3 hov1 trans-0-4"
              >
                {{ thirdColum.linkText }}
              </a>
            </div>
          </div>

          <!-- block2 -->
          <div class="block2 wrap-pic-w pos-relative m-b-30">
            <img src="images/icons/bg-01.jpg" alt="IMG" />

            <div class="block2-content sizefull ab-t-l flex-col-c-m">
              <h4 class="m-text4 t-center w-size3 p-b-8">
                Sign up & get 20% off
              </h4>

              <p class="t-center w-size4">
                Be the frist to know about the latest fashion news and get
                exclu-sive offers
              </p>

              <div class="w-size2 p-t-25">
                <!-- Button -->
                <a
                  href="#"
                  class="flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import bestproductApi from "@/api/product";
export default {
  data() {
    return {
      bestproduct: [],
    };
  },
  computed: {
    firstColum() {
      if (this.bestproduct.length >= 2) {
        return this.bestproduct.slice(0, 2);
      }
      return [];
    },
    secondColum() {
      if (this.bestproduct.length >= 4) {
        return this.bestproduct.slice(2, 4);
      }
      return [];
    },
    thirdColum() {
      if (this.bestproduct.length >= 5) {
        return this.bestproduct[4];
      }
      return [];
    },
  },
  created() {
    bestproductApi.getBestProduct().then((response) => {
      this.bestproduct = [].concat(response.data);

      //slick jquery plugin 적용
      // $nextTick() 메쏘드가 활ㅛ
      this.$nextTick(() => {
        $(this.$refs.slick).slick1();
      });
    });
  },
};
</script>

<style></style>

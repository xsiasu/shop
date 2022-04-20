<template>
  <!-- Blog -->
  <section class="blog bgwhite p-t-94 p-b-65">
    <div class="container">
      <div class="sec-title p-b-52">
        <h3 class="m-text5 t-center">Our Blog</h3>
      </div>

      <div class="row">
        <template v-for="item in blogs">
          <div :key="item.id" class="col-sm-10 col-md-4 p-b-30 m-l-r-auto">
            <!-- Block3 -->
            <div class="block3">
              <a
                href="blog-detail.html"
                class="block3-img dis-block hov-img-zoom"
              >
                <img :src="`${item.image}`" alt="IMG-BLOG" />
              </a>

              <div class="block3-txt p-t-14">
                <h4 class="p-b-7">
                  <a href="blog-detail.html" class="m-text11">
                    {{ item.title }}
                  </a>
                </h4>

                <span class="s-text6">By</span>
                <span class="s-text7">{{ item.author }}</span>
                <span class="s-text6">on</span>
                <span class="s-text7">{{ item.createAt }}</span>

                <p class="s-text8 p-t-16">
                  {{ item.content }}
                </p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("blog", ["blogs"]),
  },
  created() {
    this.$store.dispatch("blog/setBlog");
  },
};
</script>

<style></style>

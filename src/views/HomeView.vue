<template>
  <div class="home">
    <SlideVue />
    <BestProduct />
    <FeaturedProduct />
    <LookBook />
    <OurBlog />
    <InstagramList />
  </div>
</template>

<script>
import SlideVue from "@/components/home/SlideVue.vue";
import BestProduct from "@/components/home/BestProduct.vue";
import FeaturedProduct from "@/components/home/FeaturedProduct.vue";
import LookBook from "@/components/home/LookBook.vue";
import OurBlog from "@/components/home/OurBlog.vue";
import InstagramList from "@/components/home/InstagramList.vue";

export default {
  name: "HomeVue",
  components: {
    SlideVue,
    BestProduct,
    FeaturedProduct,
    LookBook,
    OurBlog,
    InstagramList,
  },
};
</script>
<style></style>

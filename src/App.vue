<template>
  <div id="app">
    <HeaderVue />
    <router-view />
    <FooterVue />
  </div>
</template>

<script>
import HeaderVue from "@/components/HeaderVue.vue";
import FooterVue from "@/components/FooterVue.vue";
export default {
  components: {
    HeaderVue,
    FooterVue,
  },
  mounted() {
    $.initialize();
  },
};
</script>
<style></style>

<template>
  <div>
    <!-- Title Page -->
    <section
      class="bg-title-page p-t-40 p-b-50 flex-col-c-m"
      style="background-image: url(images/heading-pages-01.jpg)"
    >
      <h2 class="l-text2 t-center">Cart</h2>
    </section>
    <FeaturesList />
  </div>
</template>

<script>
import FeaturesList from "@/components/features/FeaturesList.vue";
export default {
  components: {
    FeaturesList,
  },
};
</script>

<style></style>

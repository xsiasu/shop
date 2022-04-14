<template>
  <div>
    <!-- Title Page -->
    <section
      class="bg-title-page p-t-50 p-b-40 flex-col-c-m"
      :style="'background-image: url(https://picsum.photos/1920/239/?image=526);'"
    >
      <h2 class="l-text2 t-center">Women</h2>
      <p class="m-text13 t-center">New Arrivals Women Collection 2018</p>
    </section>

    <section class="bgwhite p-t-55 p-b-65">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-md-4 col-lg-3 p-b-50">
            <div class="leftbar p-r-20 p-r-0-sm">
              <CategoryMenu />
              <PriceFilter />
              <ColorFilter />
              <SearchArea />
            </div>
          </div>

          <div class="col-sm-6 col-md-8 col-lg-9 p-b-50">
            <!--  -->
            <div class="flex-sb-m flex-w p-b-35">
              <span class="s-text8 p-t-5 p-b-5">
                Showing 1–12 of 16 results
              </span>
            </div>
            <ProductList />
            <!-- Product -->
            <div class="row">
              <!-- Block2 -->
            </div>
            <PaginationArea />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CategoryMenu from "@/components/shop/CategoryMenu";
import ColorFilter from "@/components/shop/ColorFilter";
import PriceFilter from "@/components/shop/PriceFilter";
import SearchArea from "@/components/shop/SearchArea";
import PaginationArea from "@/components/shop/PaginationArea";
import ProductList from "@/components/shop/ProductList";

export default {
  components: {
    PriceFilter,
    CategoryMenu,
    ColorFilter,
    SearchArea,
    PaginationArea,
    ProductList,
  },
  data() {
    return {};
  },
};
</script>

<style></style>

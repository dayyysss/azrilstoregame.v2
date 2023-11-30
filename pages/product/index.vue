<script lang="ts" setup>
import { useProductsStore } from "~/stores/products";

definePageMeta({
middleware: ["user-access"]
});

const productStore = useProductsStore();
const allProducts = ref([]);

productStore.getAllProducts().then(() => {
allProducts.value = productStore.products;
});

const selectedCategory = ref("");
</script>

    <template>
  <section>
    <div class="container">
      <div class="gap-6 flex-wrap mx-auto max-w-screen-xl">
        <div class="mb-12 flex justify-end gap-6">
          <NuxtLink
            to="/category/create"
            class="bg-orange-500 text-white flex justify- center items-center px-3 rounded-lg"
            >Create Category</NuxtLink
          >
          <NuxtLink
            to="/product/create"
            class="bg-green-500 text-white flex justify-center items-center px-3 rounded-lg"
            >Create Products</NuxtLink
          >
          <Dropdown @selected-category="selectedCategory = $event" />
        </div>
        <div class="flex gap-6 flex-wrap mx-auto max-w-screen-xl">
          <template v-for="(item, index) in allProducts" :key="index">
            <CardsCardProduct :product="item" class="w-[calc(100%/4-18px)]" />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
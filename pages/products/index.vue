<template>
  <div>
    <Container class=" min-h-[300px]">
      <div class="my-3">
        <h1 class="text-2xl  font-bold font-mono">Products</h1>
        <p>Discover all product with easy</p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        <ProductCard v-for="product, index in products" :key="index" :product="product" />
      </div>

      <div class="flex justify-center mt-5 p-4">
        <VPagination v-model="page" :range-size="pageSize" :pages="5" active-color="#9D174D" />
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import VPagination from '@hennge/vue3-pagination'
import '@hennge/vue3-pagination/dist/vue3-pagination.css'
import { Product } from '../../types'
const config = useRuntimeConfig()
const router = useRouter()
const route = useRoute()
const { page, pageSize, limit } = useMeta(100)


const { data } = await useAsyncData<{ products: Product[] }>('products', () => $fetch(`/products?skip=${page.value}&limit=${limit.value}`, {
  method: "GET",
  baseURL: config.public.apiBase,
}), {
  watch: [page]
})
const products = computed(() => {
  return data.value?.products ?? []
})

watch(page, () => {
  router.replace(`/products?page=${page.value}`)
})

onMounted(() => {
  const { page: pageRoute } = route.query
  if (pageRoute) {
    page.value = parseInt(pageRoute as string)
  }
})

</script>

<style scoped></style>
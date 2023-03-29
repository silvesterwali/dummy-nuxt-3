<template>
  <div>
    <Container>
      <div class="grid grid-cols-1 md:grid-cols-2 my-16 ">
        <div class="space-y-2">
          <h1 class="text-3xl font-bold ">{{ product?.title }}</h1>
          <div>
            <img :src="product?.thumbnail" class="w-100 h-100" :alt="product?.title">
          </div>

          <div class="font-bold text-xl">
            {{ '$' + product?.price }}
          </div>
          <div>
            <div class="bg-red-500 max-w-fit p-2 text-white">
              OFF: {{ '%' + product?.discountPercentage }}
            </div>
          </div>
          <div class="flex justify-between">
            <div>
              <div class="flex flex-row space-x-1 text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6 fill-yellow-400 stroke-none">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>

                {{ product?.rating }}

              </div>
            </div>
          </div>


          <div>
            {{ product?.description }}
          </div>
        </div>
        <div v-if="product?.images" class="p-4">
          <ProductImageSlide :images="product?.images" />
        </div>

      </div>

      <div>
        <NuxtLink to="/products"
          class="py-2 px-4 text-white rounded-lg hover:shadow-lg hover:shadow-pink-500 bg-gradient-to-t hover:outline-none hover:ring-1 hover:ring-offset-2 hover:ring-pink-500  from-pink-500 to-red-800 ">
          Go to
          Product
        </NuxtLink>
      </div>

    </Container>
  </div>
</template>

<script setup lang="ts">
import { Product } from '~~/types';
const route = useRoute()
const config = useRuntimeConfig()

const { data } = await useAsyncData<Product>('product', () => $fetch(`/products/${route.params.id}`, {
  baseURL: config.public.apiBase
}))

const product = computed(() => {
  return data.value
})


</script>

<style scoped></style>
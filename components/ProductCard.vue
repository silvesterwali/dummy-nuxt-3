<template>
  <div class=" rounded-lg overflow-hidden shadow-md hover:shadow-lg h-full border border-slate-100 relative">
    <div class="absolute z-10 bg-red-500 font-medium hover:font-semibold font-mono p-2 rounded-bl-md shadow-md text-white -right-0">
      {{ '% '+ product.discountPercentage  }}
    </div>
    <div>
      <Swiper
        :modules="[SwiperEffectCreative,Navigation]"
        :slides-per-view="1"
        :effect="'creative'"
        class="relative"
        :navigation="{
          nextEl:`.swiper-button-costume-next`,
          prevEl:`.swiper-button-costume-prev`
        }"

        :creative-effect="{
          prev: {
            shadow: false,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }"
      >
        <SwiperSlide v-for="image,index in product.images" class="bg-white" :key="index">
          <img loading="lazy" :src="image" class="h-64 w-full object-cover" >
        </SwiperSlide>

        <div class="swiper-button-costume-next top-1/2 absolute z-10 left-2 bg-white border rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            class="fill-black"
            height="24"
            viewBox="0 0 24 24"
            style=";transform: ;msFilter:;"
          ><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" /></svg>
        </div>

        <div class="swiper-button-costume-prev top-1/2 z-10 absolute right-2 bg-white border rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-black "
            style="transform: ;msFilter:;"
          > <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" /></svg>
        </div>
      </Swiper>
    </div>
    <div class="p-2 space-y-2">
  
      <div class="text-slate-600">
      {{ product.title }}  
   
    </div>
    <div class="font-bold">
       {{ '$' + product.price }} 
    </div>
    <div class="flex justify-between">
      <div >
        <div class="flex flex-row space-x-1 text-slate-400">
        <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 fill-yellow-400 stroke-none">
        <path stroke-linecap="round"  stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>  
      
      {{ product.rating }} 

      </div>
      </div>
      <div class="text-slate-400">
          Stock {{ product.stock }}
      </div>
      
    </div>
    <div class="text-sm text-slate-400">
      {{ product.description }}
    </div>
    </div>
  
   
  </div>
</template>

<script setup lang="ts">
import { Navigation } from 'swiper'
import  { Product} from '../types'

defineProps<{
  product:Product
}>()


</script>

<style scoped>
.swiper-button-disabled{
  display: none !important;
}
</style>

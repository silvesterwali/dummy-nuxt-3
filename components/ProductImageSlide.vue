<template>
  <div class=" rounded-lg overflow-hidden  h-full ">
    <div>
      <Swiper :modules="[SwiperEffectCreative, Navigation]" :slides-per-view="1" :effect="'creative'" class="relative"
        :navigation="
          {
            nextEl: `.swiper-button-costume-next`,
            prevEl: `.swiper-button-costume-prev`
          }
        " :creative-effect="
  {
    prev: {
      shadow: false,
      translate: ['-20%', 0, -1],
    },
    next: {
      translate: ['100%', 0, 0],
    }
  }">
        <SwiperSlide v-for="image, index in images" class="bg-white" :key="index">
          <img loading="lazy" :src="image" class=" h-80 w-full object-contain">
        </SwiperSlide>

        <div class="swiper-button-costume-next top-1/2 absolute z-10 left-2 bg-white border rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" class="fill-black" height="24" viewBox="0 0 24 24"
            style=";transform: ;msFilter:;">
            <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
          </svg>
        </div>

        <div class="swiper-button-costume-prev top-1/2 z-10 absolute right-2 bg-white border rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-black "
            style="transform: ;msFilter:;">
            <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
          </svg>
        </div>
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Navigation } from 'swiper'
import type { Images } from '../types'

defineProps<{
  images: Images
}>()

</script>

<style scoped>
.swiper-button-disabled {
  display: none !important;
}
</style>

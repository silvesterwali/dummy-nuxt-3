<template>
  <div class="relative bg-white">
    <div id="header" class="sticky top-0 z-50 " :class="{
      'bg-transparent': isTransparent,
      'bg-white': !isTransparent
    }">
      <div class="lg:mx-auto lg:max-w-7xl md:max-w-3xl sticky z-20 lg:px-2 ">
        <div class="flex items-center justify-between  py-6 md:space-x-10"
          :class="{ 'border-b border-gray-100': !isTransparent }">
          <div class="flex justify-start lg:w-0 lg:flex-1 ml-2 sm:ml-0">
            <NuxtLink to="/">
              <span class="sr-only">Rental</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>

            </NuxtLink>
          </div>
          <div>
            <div class="items-center justify-end lg:flex md:flex-1 lg:w-0 space-x-4 hidden">
              <NuxtLink to="/" active-class="active-class" class="whitespace-nowrap">
                Home
              </NuxtLink>
              <NuxtLink to="/products" active-class="active-class" class="whitespace-nowrap">
                Products
              </NuxtLink>

              <NuxtLink to="/users" active-class="active-class" class="whitespace-nowrap">
                Users
              </NuxtLink>

            </div>

          </div>
        </div>
      </div>
    </div>
    <div>
      <NuxtLoadingIndicator />
      <slot />
    </div>
    <DefaultFooter />
  </div>
</template>

<script lang="ts" setup>
const isTransparent = ref<Boolean>(true)


onMounted(() => {
  window.addEventListener('scroll', function () {
    const header = document.querySelector('#header') as HTMLElement
    if (window.pageYOffset > header.offsetHeight && window.pageYOffset > 10) {
      isTransparent.value = false
    } else {
      isTransparent.value = true
    }
  })
})

</script>

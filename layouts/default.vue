<template>
  <div class="relative bg-white">
    <div
      id="header"
      class="sticky top-0 z-50 "
      :class="{
        'bg-transparent':isTransparent,
        'bg-white':!isTransparent
      }"
    >
      <div class="lg:mx-auto lg:max-w-7xl md:max-w-3xl sticky z-20 lg:px-2 ">
        <div class="flex items-center justify-between  py-6 md:space-x-10" :class="{'border-b border-gray-100':!isTransparent}">
          <div class="flex justify-start lg:w-0 lg:flex-1 ml-2 sm:ml-0">
            <NuxtLink to="/">
              <span class="sr-only">Rental</span>
              <img class="h-8 w-auto sm:h-10" src="~/assets/images/kresna-logo.png" alt="logo rental">
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

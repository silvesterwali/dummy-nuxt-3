<template>
  <div>
    <Container class="py-16">
      <div class="flex flex-row">
        <div class="max-w-2xl text-slate-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi fugit sed quo cum dolorum dolorem iure
          assumenda eius consequatur omnis, adipisci magnam placeat, blanditiis, similique saepe sapiente aperiam deleniti
          eaque!
        </div>
        <div class="ml-5">
          <ul>
            <li>
              <NuxtLink to="/" active-class="active-class" class="whitespace-nowrap">
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/products" active-class="active-class" class="whitespace-nowrap">
                Products
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/users" active-class="active-class" class="whitespace-nowrap">
                Users
              </NuxtLink>
            </li>

          </ul>
        </div>
      </div>
      <div class="my-5">
        <p class="font-medium">Copyright © 2023 All rights reserved Silvester Wali</p>
        <p class="text-slate-400">Design and Developed by s.p Digital</p>
      </div>

    </Container>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>
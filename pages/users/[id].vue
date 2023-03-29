<template>
  <div>
    <Container>
      <div class="grid grid-cols-1 md:grid-cols-2 my-16 ">
        <div class="space-y-4">
          <img :src="user?.image" :alt="fullName" class="h-56 w-full object-contain">
          <h1 class="text-2xl font-bold text-center">{{ fullName }}</h1>
        </div>
        <div class="space-y-4">
          <div class="rounded-lg shadow-md p-4 hover:shadow-xl">
            <h3 class="font-bold">Profile</h3>
            <ul>
              <li class="flex justify-between py-2">
                <span class="text-slate-400">
                  First Name
                </span>
                <span class="text-slate-600">
                  {{ user?.firstName }}
                </span>
              </li>
              <li class="flex justify-between py-2">
                <span class="text-slate-400">
                  Maiden Name
                </span>
                <span class="text-slate-600">
                  {{ user?.maidenName }}
                </span>
              </li>
              <li class="flex justify-between py-2">
                <span class="text-slate-400">
                  Last Name
                </span>
                <span class="text-slate-600">
                  {{ user?.lastName }}
                </span>
              </li>
              <li class="flex justify-between py-2">
                <span class="text-slate-400">
                  Phone
                </span>
                <span class="text-slate-600">
                  {{ user?.phone }}
                </span>
              </li>
              <li class="flex justify-between py-2">
                <span class="text-slate-400">
                  Email
                </span>
                <span class="text-slate-600">
                  {{ user?.email }}
                </span>
              </li>

            </ul>
          </div>
          <!--company-->
          <div class="rounded-lg shadow-md p-4 hover:shadow-xl">
            <h3 class="font-bold">Address</h3>
            <ul>
              <li class="flex justify-between py-2">
                <span class="text-slate-400">
                  Address
                </span>
                <span class="text-slate-600">
                  {{ address?.address }}
                </span>
              </li>
              <li class="flex justify-between py-2">
                <span class="text-slate-400">
                  State
                </span>
                <span class="text-slate-600">
                  {{ address?.state }}
                </span>
              </li>
              <li class="flex justify-between py-2">
                <span class="text-slate-400">
                  City
                </span>
                <span class="text-slate-600">
                  {{ address?.city }}
                </span>
              </li>
              <li class="flex justify-between py-2">
                <span class="text-slate-400">
                  Postal Code
                </span>
                <span class="text-slate-600">
                  {{ address?.postalCode }}
                </span>
              </li>

            </ul>
          </div>
        </div>
      </div>

      <div>
        <NuxtLink to="/users"
          class="py-2 px-4 text-white rounded-lg hover:shadow-lg hover:shadow-pink-500 bg-gradient-to-t hover:outline-none hover:ring-1 hover:ring-offset-2 hover:ring-pink-500  from-pink-500 to-red-800 ">
          Go to users
        </NuxtLink>
      </div>

    </Container>
  </div>
</template>

<script setup lang="ts">
import { User } from '~~/types';
const route = useRoute()
const config = useRuntimeConfig()

const { data } = await useAsyncData<User>('users', () => $fetch(`/users/${route.params.id}`, {
  baseURL: config.public.apiBase
}))

const user = computed(() => {
  return data.value
})

const fullName = computed(() => {
  return `${user.value?.firstName} ${user.value?.maidenName} ${user.value?.lastName}`
})

const address = computed(() => {
  return user.value?.address
})


</script>

<style scoped></style>
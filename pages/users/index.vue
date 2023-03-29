<template>
  <div>
    <Container class=" min-h-[300px]">
      <div class="my-3">
        <h1 class="text-2xl  font-bold font-mono">User</h1>
        <p>Discover all users</p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        <UserCard v-for="user, index in  users" :user="user" :key="index" />
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
import { User } from '../../types'
const config = useRuntimeConfig()
const { page, pageSize, limit } = useMeta(100)

const { data } = await useAsyncData<{ users: User[] }>('users', () => $fetch(`/users?skip=${page.value}&limit=${limit.value}`, {
  method: "GET",
  baseURL: config.public.apiBase,
}), {
  watch: [page]
})
const users = computed(() => {
  return data.value?.users ?? []
})

</script>

<style scoped></style>
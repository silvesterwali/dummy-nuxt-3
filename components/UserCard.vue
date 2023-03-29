<template>
  <div class="rounded-lg overflow-hidden h-full group shadow-md hover:shadow-lg relative min-h-[300px]"
    @click="goToDetail">
    <div class="absolute">
      <img :src="user.image" :alt="fullName" class=" h-72 w-full object-contain">
    </div>
    <div
      class="absolute z-10 bottom-0 bg-gradient-to-r from-pink-500 to-red-800 w-full p-2 h-32 invisible group-hover:visible  transition duration-600 ease-out  delay-300 translate-y-3  ">
      <div class="font-bold font-mono text-center text-xl text-slate-200">
        {{ fullName }}
      </div>
      <div>
        <div class="text-slate-200">
          Email : {{ user.email }}
        </div>
        <div class="text-slate-200">
          Username : {{ user.username }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { User } from '~~/types'
const prop = defineProps<{ user: User }>()


const fullName = computed(() => {
  const { user } = prop
  return `${user.firstName} ${user.maidenName} ${user.lastName}`
})

function goToDetail() {
  navigateTo(`/users/${prop.user.id}`)
}

</script>

<style scoped></style>
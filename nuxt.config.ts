// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 modules:['@nuxtjs/tailwindcss','nuxt-swiper'],
 tailwindcss:{
    configPath:"tailwind.config.ts",
    exposeConfig: true
 },
 runtimeConfig:{
   public:{
      apiBase:''
   }
 }
})

<script setup>
import NavBar from './components/navbar/NavBar.vue'
import Toast from './components/ui/Toast.vue'
import Hero from './components/Hero.vue'
</script>

<template>
  <Toast />
<!--  <Hero />-->
  <NavBar />
  <router-view />
</template>

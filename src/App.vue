<script setup>
import NavBar from './components/navbar/NavBar.vue'
import Toast from './components/ui/Toast.vue'
</script>

<template>
  <Toast />
  <NavBar />
  <router-view />
</template>

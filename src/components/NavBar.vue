<script setup>
import { ref } from 'vue';
const menuOpen = ref(false);
</script>

<template>
  <header class="navbar">
    <div class="left">
      <button class="burger" @click="menuOpen = !menuOpen">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="logo">🐾 LAKKY</div>
    </div>

    <div class="right">
      <button class="btn">Контакти</button>
      <button class="btn">Про нас</button>
    </div>

    <div v-if="menuOpen" class="menu">
      <a href="#cats">Коти</a>
      <a href="#dogs">Собаки</a>
    </div>
  </header>
</template>

<style scoped>
.menu {
  background: white;
  padding: 10px;
  margin-top: 10px;
}
.menu a {
  display: block;
  color: black;
  margin: 5px 0;
}
</style>

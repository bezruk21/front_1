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
      <a href="#cats" @click="menuOpen = false">🐱 Коти</a>
      <a href="#dogs" @click="menuOpen = false">🐶 Собаки</a>
      <a href="#hamsters" @click="menuOpen = false">🐹 Хом'яки</a>
      <a href="#parrots" @click="menuOpen = false">🦜 Папугаї</a>
    </div>

    <div v-if="menuOpen" class="bg" @click="menuOpen = false"></div>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background: #c8b6e2;
  color: white;
  z-index: 1000;
  box-sizing: border-box;
}

.left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.burger {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.burger span {
  display: block;
  width: 25px;
  height: 3px;
  background: white;
  margin: 5px 0;
}

.burger:hover span {
  background: #4a3f6b;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.right {
  display: flex;
  gap: 15px;
  align-items: center;
}

.btn {
  padding: 12px 25px;
  background: #4a3f6b;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  white-space: nowrap;
}

.btn:hover {
  background: #3a2f5b;
}

.menu {
  position: absolute;
  top: 80px;
  left: 30px;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  z-index: 100;
}

.menu a {
  display: block;
  color: #4a3f6b;
  text-decoration: none;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  font-size: 16px;
}

.menu a:hover {
  background: #f0f0f0;
  color: #c8b6e2;
}

.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  z-index: 99;
}
</style>
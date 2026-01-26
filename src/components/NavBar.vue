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
<!--      <div class="logo">🐾 LAPKY</div>-->
      <div class="logo" @click="$router.push('/')">🐾 LAPKY</div>
    </div>

    <div class="right">
      <button class="btn">Контакти</button>
      <button class="btn">Про нас</button>
    </div>

    <div v-if="menuOpen" class="menu">
      <a class="menu-link" @click="$router.push('/cats')">🐱 Коти</a>
      <a class="menu-link" @click="$router.push('/dogs')">🐶 Собаки</a>
      <a class="menu-link" @click="$router.push('/hamsters')">🐹 Хом'яки</a>
      <a href="#">🦜 Папугаї</a>
    </div>

    <div v-if="menuOpen" class="bg" @click="menuOpen = false"></div>
  </header>
</template>

<style scoped>

.menu-link {
  cursor: pointer;
  font-weight: bold;
}

.menu-link:hover {
  color: #7a3cff;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: transparent;
  color: white;
  z-index: 10;
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
}

.burger span {
  display: block;
  width: 25px;
  height: 3px;
  background: white;
  margin: 5px 0;
}

.logo {
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.logo:hover {
  color: #7a3cff;
  transform: scale(1.05);
  text-shadow: 0 0 10px rgba(122, 60, 255, 0.7);
}

.right {
  display: flex;
  gap: 15px;
}

.btn {
  padding: 12px 25px;
  background: #4a3f6b;
  color: white;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
}

.menu {
  position: absolute;
  top: 80px;
  left: 30px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  z-index: 11;
}

.menu a {
  display: block;
  color: #4a3f6b;
  padding: 10px;
  text-decoration: none;
}

.bg {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.3);
  z-index: 9;
}
</style>

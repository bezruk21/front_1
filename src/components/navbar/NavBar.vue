<script setup>
import { ref } from 'vue';
import { useFetch } from '@vueuse/core';
import { useAuth } from '../../composables/useAuth';
import AuthModal from '../auth/AuthModal.vue';
import UserMenu from './UserMenu.vue';

const { setUser, logout } = useAuth();

const showUserMenu = ref(false);
const showAuthModal = ref(false);
const menuOpen = ref(false);

const toggleUserMenu = async () => {
  if (!showUserMenu.value) {
    const token = localStorage.getItem('access_token');

    if (token) {
      const { data, statusCode } = await useFetch('http://127.0.0.1:8000/users/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).json();

      if (statusCode.value === 200 && data.value) {
        setUser(data.value);
      } else {
        logout();
      }
    } else {
      logout();
    }
  }
  showUserMenu.value = !showUserMenu.value;
};

const closeUserMenu = () => {
  showUserMenu.value = false;
};

const openAuth = () => {
  showAuthModal.value = true;
  showUserMenu.value = false;
};
</script>

<template>
  <header class="navbar">
    <div class="left">
      <button class="burger" @click="menuOpen = !menuOpen">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="logo">🐾 LAPKY</div>
    </div>

    <div class="right">
      <button class="btn">Контакти</button>
      <button class="btn">Про нас</button>

      <div class="user-wrapper">
        <button class="user-icon" @click="toggleUserMenu">
          👤
        </button>

        <div v-if="showUserMenu" class="user-overlay" @click="closeUserMenu">
          <div class="menu-container" @click.stop>
            <UserMenu @login="openAuth" @close="closeUserMenu" />
          </div>
        </div>
      </div>

      <AuthModal v-if="showAuthModal" @close="showAuthModal = false" />
    </div>

    <div v-if="menuOpen" class="menu">
      <a href="#">🐱 Коти</a>
      <a href="#">🐶 Собаки</a>
      <a href="#">🐹 Хом'яки</a>
      <a href="#">🦜 Папугаї</a>
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

.user-wrapper {
  position: relative;
}

.user-icon {
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
}

.user-overlay {
  position: fixed;
  inset: 0;
  z-index: 20;
}

.menu-container {
  position: absolute;
  top: 60px;
  right: 0;
}
</style>
<script setup>
import { ref } from 'vue';
import { useFetch } from '@vueuse/core';
import { useAuth } from '../../composables/useAuth';
import AuthModal from '../auth/AuthModal.vue';
import UserMenu from './UserMenu.vue';

const { setUser, logout } = useAuth();

const showUserMenu = ref(false);
const showAuthModal = ref(false);
const menuOpen = ref(false); // Відповідає за відкриття бокового меню

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
  <header class="navbar fixed-top px-3 px-md-4">

    <div class="d-flex align-items-center gap-3">
      <button class="btn text-white fs-4 p-0 border-0" @click="menuOpen = true">
        <i class="bi bi-list"></i> <span v-if="!menuOpen" class="burger-icon">☰</span>
      </button>

      <div class="logo text-white" @click="$router.push('/')">
        🐾 LAPKY
      </div>
    </div>

    <div class="d-flex align-items-center gap-3">

      <div class="d-none d-md-flex gap-2">
        <button class="btn btn-custom rounded-pill px-4">Контакти</button>
        <button class="btn btn-custom rounded-pill px-4">Про нас</button>
      </div>

      <div class="position-relative">
        <button class="btn text-white fs-4 p-0 border-0" @click="toggleUserMenu">
          👤
        </button>

        <div v-if="showUserMenu" class="user-dropdown-wrapper">
          <div class="user-overlay-backdrop" @click="closeUserMenu"></div> <div class="position-absolute end-0 mt-2" style="z-index: 1050; min-width: 200px;">
          <UserMenu @login="openAuth" @close="closeUserMenu" />
        </div>
        </div>
      </div>
    </div>

    <AuthModal v-if="showAuthModal" @close="showAuthModal = false" />

    <div v-if="menuOpen" class="offcanvas-backdrop fade show" @click="menuOpen = false"></div>

    <div
        class="offcanvas offcanvas-start bg-white"
        :class="{ 'show': menuOpen }"
        style="visibility: visible; width: 280px;"
        tabindex="-1"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title fw-bold text-primary">Меню</h5>
        <button type="button" class="btn-close" @click="menuOpen = false"></button>
      </div>

      <div class="offcanvas-body d-flex flex-column gap-2">
        <a class="nav-link fs-5 fw-bold text-dark" @click="$router.push('/cats'); menuOpen=false">🐱 Коти</a>
        <a class="nav-link fs-5 fw-bold text-dark" @click="$router.push('/dogs'); menuOpen=false">🐶 Собаки</a>
        <a class="nav-link fs-5 fw-bold text-dark" href="#">🐹 Хом'яки</a>
        <a class="nav-link fs-5 fw-bold text-dark" href="#">🦜 Папугаї</a>

        <hr class="d-md-none my-3"> <button class="btn btn-outline-primary w-100 rounded-pill d-md-none">Контакти</button>
        <button class="btn btn-outline-primary w-100 rounded-pill d-md-none">Про нас</button>
      </div>
    </div>

  </header>
</template>

<style scoped>
.navbar {
  background: linear-gradient(to bottom, rgba(74, 63, 107, 0.9), transparent);
  transition: background 0.3s;
  z-index: 1030;
}

.logo {
  font-size: 1.5rem;
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.2s;
  user-select: none;
}
.logo:hover {
  transform: scale(1.05);
}

.btn-custom {
  background-color: #4a3f6b;
  color: white;
  border: none;
  font-weight: 600;
  transition: all 0.2s;
}
.btn-custom:hover {
  background-color: #3a3155;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  color: white;
}

.burger-icon {
  font-size: 1.5rem;
  line-height: 1;
}

.user-overlay-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1040;
  cursor: default;
}

.nav-link {
  cursor: pointer;
  padding: 10px;
  border-radius: 8px;
  transition: background 0.2s, color 0.2s;
}
.nav-link:hover {
  background-color: #f0f0f5;
  color: #7a3cff !important;
}

.offcanvas {
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
}
.offcanvas.show {
  transform: translateX(0);
}
</style>
<script setup>
import { useAuth } from '../../composables/useAuth';

const { isAuthenticated, logout } = useAuth();
const emit = defineEmits(['login', 'register', 'close']);

const handleLogout = () => {
  logout();
  emit('close');
};
</script>

<template>
  <div class="user-menu">
    <template v-if="!isAuthenticated">
      <button class="menu-btn" @click="emit('login')">
        ➜ Увійти
      </button>
    </template>

    <button
        v-else
        class="menu-btn"
        @click="handleLogout"
    >
      ⎋ Вийти
    </button>
  </div>
</template>

<style scoped>
.user-menu {
  position: absolute;
  top: 50px;
  right: 0;
}
</style>
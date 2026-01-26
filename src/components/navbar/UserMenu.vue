<script setup>
import { useAuth } from '../../composables/useAuth';

const { isAuthenticated, logout } = useAuth();
const emit = defineEmits(['login', 'close']);

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

    <button v-else class="menu-btn" @click="handleLogout">
      ⎋ Вийти
    </button>
  </div>
</template>

<style scoped>
.user-menu {
  min-width: 150px;
  background: white;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.menu-btn {
  width: 100%;
  text-align: left;
  padding: 10px;
  background: #f5f5fa;
  border: none;
  border-radius: 8px;
  color: #4a3f6b;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.menu-btn:hover {
  background: #e0e0e8;
}
</style>
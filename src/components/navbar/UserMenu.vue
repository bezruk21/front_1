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
  <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
    <div class="card-body p-2 d-flex flex-column gap-1">

      <template v-if="!isAuthenticated">
        <button
            class="btn btn-light text-start fw-semibold text-primary w-100"
            @click="emit('login')"
        >
          <span class="me-2">➜</span> Увійти
        </button>
      </template>

      <template v-else>
        <button class="btn btn-light text-start fw-semibold w-100 disabled">
          👤 Мій профіль
        </button>

        <hr class="my-1">

        <button
            class="btn btn-light text-start fw-semibold text-danger w-100"
            @click="handleLogout"
        >
          <span class="me-2">⎋</span> Вийти
        </button>
      </template>

    </div>
  </div>
</template>

<style scoped>
.btn-light {
  background: transparent;
  border: none;
  color: #4a3f6b;
  transition: background 0.2s;
}

.btn-light:hover {
  background-color: #f5f5fa;
  color: #7a3cff;
}

.btn-light.text-danger:hover {
  background-color: #fff5f5;
  color: #dc3545;
}
</style>
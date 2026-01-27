<script setup>
import { onMounted } from 'vue';
import { useFetch } from '@vueuse/core';
import NavBar from './components/navbar/NavBar.vue';
import Toast from './components/ui/Toast.vue';
import { useAuth } from './composables/useAuth';

const { setUser, logout } = useAuth();

onMounted(async () => {
  const token = localStorage.getItem('access_token');

  if (token) {
    try {
      const { data, response } = await useFetch('http://127.0.0.1:8000/users/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).json();

      if (response.value.ok && data.value) {
        setUser(data.value);
      } else {
        logout();
      }
    } catch (e) {
      console.error("Помилка авторизації:", e);
      logout();
    }
  }
});
</script>

<template>
  <Toast />
  <NavBar />
  <router-view />
</template>
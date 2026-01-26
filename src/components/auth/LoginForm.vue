<script setup>
import { useAuth } from '../../composables/useAuth';
const { login } = useAuth();

const emit = defineEmits(['switch', 'success']);

const submit = () => {
  login();
  emit('success');
};

</script>

<template>
  <div class="form">
    <h2>Вітаємо!</h2>

    <input placeholder="Email" />
    <input type="password" placeholder="Пароль" />

    <button class="main" @click="submit">
      Увійти
    </button>

    <p>
      Ще не маєте акаунту?
      <span @click="emit('switch')">Створити</span>
    </p>
  </div>
</template>

<style scoped>
</style>

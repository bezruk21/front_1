<script setup>
import { useAuth } from '../../composables/useAuth';
const { register } = useAuth();

const emit = defineEmits(['switch', 'success']);

const submit = () => {
  register();
  emit('success');
};
</script>

<template>
  <div class="form">
    <h2>Приєднуйтесь до нас</h2>

    <input placeholder="Ім'я" />
    <input placeholder="Email" />
    <input type="password" placeholder="Пароль" />
    <input type="password" placeholder="Підтвердьте пароль" />

    <button class="main" @click="submit">
      Зареєструватися
    </button>

    <p>
      Вже є акаунт?
      <span @click="emit('switch')">Увійти</span>
    </p>
  </div>
</template>


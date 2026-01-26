<script setup>
import { reactive, ref } from 'vue';
import { useFetch } from '@vueuse/core';
import { useAuth } from '../../composables/useAuth';

const { login } = useAuth();
const emit = defineEmits(['switch', 'success']);

// 1. Реактивний об'єкт для даних форми
const formData = reactive({
  email: '',
  password: ''
});

const errorMessage = ref('');
const isLoading = ref(false);

const submit = async () => {
  errorMessage.value = '';
  isLoading.value = true;

  try {
    const formPayload = new FormData();

    // ВАЖЛИВО: Бекенд чекає саме 'username'.
    // Ми беремо значення з formData.email і кладемо його в поле 'username'.
    formPayload.append('username', formData.email);
    formPayload.append('password', formData.password);

    const { data, response, error } = await useFetch('http://127.0.0.1:8000/auth/login', {
      method: 'POST',
      body: formPayload, // Відправляємо як FormData
    }).json();

    isLoading.value = false;

    // Якщо все ще помилка - дивимось у консоль, що саме не так
    if (error.value || !response.value.ok) {
      console.log("Помилка від сервера:", data.value); // <--- Тут буде підказка
      errorMessage.value = 'Невірні дані';
      return;
    }

    // Успішний вхід
    const result = data.value;
    if (result.access_token) {
      localStorage.setItem('access_token', result.access_token);
      // Якщо бекенд не повертає об'єкт user, беремо email із форми
      login(result.user || { email: formData.email });
      emit('success');
    }

  } catch (e) {
    console.error(e);
    isLoading.value = false;
    errorMessage.value = 'Помилка з\'єднання';
  }
};
</script>

<template>
  <div class="form">
    <h2>Вітаємо!</h2>

    <input v-model="formData.email" type="email" placeholder="Email" />
    <input v-model="formData.password" type="password" placeholder="Пароль" />

    <p v-if="errorMessage" class="error-text">{{ errorMessage }}</p>

    <button class="main" @click="submit" :disabled="isLoading">
      {{ isLoading ? 'Вхід...' : 'Увійти' }}
    </button>

    <p>
      Ще не маєте акаунту?
      <span class="link" @click="emit('switch')">Створити</span>
    </p>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.main {
  padding: 10px;
  background: #4a3f6b;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.main:disabled {
  background: #ccc;
}
.error-text {
  color: red;
  font-size: 14px;
  margin: 0;
}
.link {
  color: #4a3f6b;
  cursor: pointer;
  font-weight: bold;
}
</style>
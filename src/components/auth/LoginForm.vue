<script setup>
import { reactive, ref } from 'vue';
import { useFetch } from '@vueuse/core';
import { useAuth } from '../../composables/useAuth';
import { useToast } from '../../composables/useToast';

const { triggerToast } = useToast();

const { login } = useAuth();
const emit = defineEmits(['switch', 'success']);

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
    const payload = {
      email: formData.email,
      password: formData.password
    };

    const { data, response, error } = await useFetch('http://127.0.0.1:8000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
    }).json();

    isLoading.value = false;

    if (error.value || !response.value.ok) {
      console.log("Помилка:", data.value);
      errorMessage.value = data.value?.detail || 'Невірний логін або пароль';
      return;
    }

    const result = data.value;

    if (result.access_token) {
      localStorage.setItem('access_token', result.access_token);
      login({ email: formData.email });

      triggerToast('Ви успішно увійшли!', 'success');

      emit('success');
    }

  } catch (e) {
    console.error(e);
    isLoading.value = false;
    errorMessage.value = 'Помилка з\'єднання';
    triggerToast('Помилка з\'єднання', 'error');
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
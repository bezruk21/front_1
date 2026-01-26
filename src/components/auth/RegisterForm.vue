<script setup>
import { reactive, ref } from 'vue';
import { useFetch } from '@vueuse/core';
import { useAuth } from '../../composables/useAuth';
import { useToast } from '../../composables/useToast';

const { register } = useAuth();
const { triggerToast } = useToast();
const emit = defineEmits(['switch', 'success']);

const formData = reactive({
  email: '',
  username: '',
  password: '',
  confirmPassword: ''
});

const errorMessage = ref('');
const isLoading = ref(false);

const submit = async () => {
  errorMessage.value = '';

  if (formData.password !== formData.confirmPassword) {
    errorMessage.value = 'Паролі не співпадають';
    triggerToast('Паролі не співпадають', 'error');
    return;
  }

  isLoading.value = true;

  try {
    const payload = {
      email: formData.email,
      username: formData.username || formData.email,
      password: formData.password
    };

    const { data, response, error } = await useFetch('http://127.0.0.1:8000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).json();

    isLoading.value = false;

    if (error.value || !response.value.ok) {
      console.log("Помилка реєстрації:", data.value);
      const msg = data.value?.detail || 'Помилка при реєстрації';
      errorMessage.value = msg;
      triggerToast(msg, 'error');
      return;
    }

    const newUser = data.value;

    register(newUser);

    triggerToast('Реєстрація успішна! Ласкаво просимо.', 'success');
    emit('success');

  } catch (e) {
    console.error(e);
    isLoading.value = false;
    errorMessage.value = 'Помилка з\'єднання';
    triggerToast('Сервер не відповідає', 'error');

  }
};
</script>

<template>
  <div class="form">
    <h2>Приєднуйтесь до нас</h2>

    <input v-model="formData.username" placeholder="Ім'я" />
    <input v-model="formData.email" type="email" placeholder="Email" />
    <input v-model="formData.password" type="password" placeholder="Пароль" />
    <input v-model="formData.confirmPassword" type="password" placeholder="Підтвердьте пароль" />

    <p v-if="errorMessage" class="error-text">{{ errorMessage }}</p>

    <button class="main" @click="submit" :disabled="isLoading">
      {{ isLoading ? 'Реєстрація...' : 'Зареєструватися' }}
    </button>

    <p>
      Вже є акаунт?
      <span class="link" @click="emit('switch')">Увійти</span>
    </p>
  </div>
</template>

<style scoped>
.form { display: flex; flex-direction: column; gap: 15px; }
input { padding: 10px; border: 1px solid #ccc; border-radius: 8px; }
.main { padding: 10px; background: #4a3f6b; color: white; border: none; border-radius: 8px; cursor: pointer; }
.error-text { color: red; font-size: 14px; margin: 0; }
.link { color: #4a3f6b; cursor: pointer; font-weight: bold; }
</style>
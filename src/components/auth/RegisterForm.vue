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

    const { data, response, error } = await useFetch('http://127.0.0.1:8000/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).json();

    isLoading.value = false;

    if (error.value || !response.value.ok) {
      const msg = data.value?.detail || 'Помилка при реєстрації';
      errorMessage.value = msg;
      triggerToast(msg, 'error');
      return;
    }

    const newUser = data.value;
    register(newUser);
    triggerToast('Реєстрація успішна!', 'success');
    emit('success');

  } catch (e) {
    isLoading.value = false;
    errorMessage.value = 'Помилка з\'єднання';
    triggerToast('Сервер не відповідає', 'error');
  }
};
</script>

<template>
  <div>
    <h2 class="fw-bold mb-4 text-center">Реєстрація</h2>

    <div class="mb-3">
      <input
          v-model="formData.username"
          class="form-control form-control-lg bg-light border-0"
          placeholder="Ім'я"
      />
    </div>

    <div class="mb-3">
      <input
          v-model="formData.email"
          type="email"
          class="form-control form-control-lg bg-light border-0"
          placeholder="Email"
      />
    </div>

    <div class="row g-2 mb-3">
      <div class="col-6">
        <input
            v-model="formData.password"
            type="password"
            class="form-control bg-light border-0"
            placeholder="Пароль"
        />
      </div>
      <div class="col-6">
        <input
            v-model="formData.confirmPassword"
            type="password"
            class="form-control bg-light border-0"
            placeholder="Підтвердження"
        />
      </div>
    </div>

    <p v-if="errorMessage" class="text-danger small text-center mb-3">
      {{ errorMessage }}
    </p>

    <div class="d-grid mb-3">
      <button
          class="btn btn-primary btn-lg rounded-3 fw-bold"
          @click="submit"
          :disabled="isLoading"
      >
        {{ isLoading ? 'Обробка...' : 'Зареєструватися' }}
      </button>
    </div>

    <p class="text-center text-muted">
      Вже є акаунт?
      <a href="#" class="text-primary fw-bold text-decoration-none" @click.prevent="emit('switch')">
        Увійти
      </a>
    </p>
  </div>
</template>

<style scoped>
.btn-primary {
  background-color: #4a3f6b;
  border-color: #4a3f6b;
}
.btn-primary:hover {
  background-color: #3a3155;
  border-color: #3a3155;
}
.text-primary {
  color: #4a3f6b !important;
}
</style>
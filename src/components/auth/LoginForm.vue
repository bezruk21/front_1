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
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).json();

    isLoading.value = false;

    if (error.value || !response.value.ok) {
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
  <div>
    <h2 class="fw-bold mb-4 text-center">Вітаємо!</h2>

    <div class="mb-3">
      <input
          v-model="formData.email"
          type="email"
          class="form-control form-control-lg bg-light border-0"
          placeholder="Email"
      />
    </div>

    <div class="mb-3">
      <input
          v-model="formData.password"
          type="password"
          class="form-control form-control-lg bg-light border-0"
          placeholder="Пароль"
      />
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
        {{ isLoading ? 'Вхід...' : 'Увійти' }}
      </button>
    </div>

    <p class="text-center text-muted">
      Ще не маєте акаунту?
      <a href="#" class="text-primary fw-bold text-decoration-none" @click.prevent="emit('switch')">
        Створити
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
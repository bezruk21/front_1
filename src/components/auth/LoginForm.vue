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

const isLoading = ref(false);

const submit = async () => {
  isLoading.value = true;
  try {
    const payload = { email: formData.email, password: formData.password };

    const { data, response, error } = await useFetch('http://127.0.0.1:8000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).json();

    isLoading.value = false;

    if (error.value || !response.value.ok) {
      triggerToast(data.value?.detail || 'Невірний логін або пароль', 'error');
      return;
    }

    if (data.value.access_token) {
      localStorage.setItem('access_token', data.value.access_token);
      login({ email: formData.email });
      triggerToast('Раді бачити знову!', 'success');
      emit('success');
    }
  } catch (e) {
    isLoading.value = false;
    triggerToast('Сервер не відповідає', 'error');
  }
};
</script>

<template>
  <div class="d-flex flex-column">
    <div class="mb-3">
      <label class="form-label small text-muted fw-bold mb-1">Email</label>
      <input
          v-model="formData.email"
          type="email"
          class="form-control bg-light border-0"
          placeholder="name@example.com"
      />
    </div>

    <div class="mb-3">
      <label class="form-label small text-muted fw-bold mb-1">Пароль</label>
      <input
          v-model="formData.password"
          type="password"
          class="form-control bg-light border-0"
          placeholder="••••••••"
      />
    </div>

    <button
        class="btn btn-primary w-100 fw-bold py-2 mt-2 rounded-3"
        @click="submit"
        :disabled="isLoading"
    >
      {{ isLoading ? 'Вхід...' : 'Увійти' }}
    </button>

    <div class="text-center mt-3">
      <small class="text-muted">Немає акаунту? </small>
      <a href="#" class="text-decoration-none fw-bold text-primary small" @click.prevent="emit('switch')">
        Створити
      </a>
    </div>
  </div>
</template>

<style scoped>
.btn-primary { background-color: #4a3f6b; border: none; }
.btn-primary:hover { background-color: #3a3155; }
.text-primary { color: #4a3f6b !important; }
</style>
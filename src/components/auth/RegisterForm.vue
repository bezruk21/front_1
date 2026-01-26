<script setup>
import { reactive, ref } from 'vue';
import { useFetch } from '@vueuse/core';
import { useAuth } from '../../composables/useAuth';
import { useToast } from '../../composables/useToast';

const { register } = useAuth();
const { triggerToast } = useToast();
const emit = defineEmits(['switch', 'success']);

const formData = reactive({
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
});

const isLoading = ref(false);

const submit = async () => {
  if (formData.password !== formData.confirmPassword) {
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
      triggerToast(data.value?.detail || 'Помилка реєстрації', 'error');
      return;
    }

    register(data.value);
    triggerToast('Акаунт створено успішно!', 'success');
    emit('success');
  } catch (e) {
    isLoading.value = false;
    triggerToast('Сервер не відповідає', 'error');
  }
};
</script>

<template>
  <div class="d-flex flex-column gap-2">
    <div>
      <label class="form-label small text-muted fw-bold mb-1">Ім'я</label>
      <input v-model="formData.username" class="form-control bg-light border-0" />
    </div>

    <div>
      <label class="form-label small text-muted fw-bold mb-1">Email</label>
      <input v-model="formData.email" type="email" class="form-control bg-light border-0" />
    </div>

    <div class="row g-2">
      <div class="col-6">
        <label class="form-label small text-muted fw-bold mb-1">Пароль</label>
        <input v-model="formData.password" type="password" class="form-control bg-light border-0" />
      </div>
      <div class="col-6">
        <label class="form-label small text-muted fw-bold mb-1">Ще раз</label>
        <input v-model="formData.confirmPassword" type="password" class="form-control bg-light border-0" />
      </div>
    </div>

    <button
        class="btn btn-primary w-100 fw-bold py-2 mt-3 rounded-3"
        @click="submit"
        :disabled="isLoading"
    >
      {{ isLoading ? 'Створення...' : 'Зареєструватися' }}
    </button>

    <div class="text-center mt-2">
      <small class="text-muted">Вже є акаунт? </small>
      <a href="#" class="text-decoration-none fw-bold text-primary small" @click.prevent="emit('switch')">
        Увійти
      </a>
    </div>
  </div>
</template>

<style scoped>
.btn-primary { background-color: #4a3f6b; border: none; }
.btn-primary:hover { background-color: #3a3155; }
.text-primary { color: #4a3f6b !important; }
</style>
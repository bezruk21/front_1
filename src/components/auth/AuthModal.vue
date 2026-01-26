<script setup>
import LoginForm from './LoginForm.vue';
import RegisterForm from './RegisterForm.vue';
import { ref } from 'vue';

const emit = defineEmits(['close']);
const isLogin = ref(true);
</script>

<template>
  <div class="modal-overlay">

    <div class="modal-backdrop-custom" @click="emit('close')"></div>

    <div class="modal-dialog-custom">
      <div class="modal-content rounded-4 shadow border-0 overflow-hidden bg-white">

        <div class="d-flex justify-content-between align-items-center px-4 pt-4 pb-2">
          <h5 class="fw-bold m-0 text-dark">
            {{ isLogin ? 'Вхід' : 'Реєстрація' }}
          </h5>
          <button
              type="button"
              class="btn-close"
              @click="emit('close')"
          ></button>
        </div>

        <div class="p-4 pt-2">
          <LoginForm
              v-if="isLogin"
              @switch="isLogin = false"
              @success="emit('close')"
          />

          <RegisterForm
              v-else
              @switch="isLogin = true"
              @success="emit('close')"
          />
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
/* Фіксуємо контейнер поверх сайту */
.modal-overlay {
  position: fixed;
  inset: 0; /* top: 0, right: 0, bottom: 0, left: 0 */
  z-index: 1055;
  display: flex;
  align-items: center;     /* Центрування по вертикалі */
  justify-content: center; /* Центрування по горизонталі */
}

/* Темний фон */
.modal-backdrop-custom {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Напівпрозорий чорний */
  backdrop-filter: blur(2px); /* Легке розмиття фону */
}

/* Саме віконце */
.modal-dialog-custom {
  position: relative;
  z-index: 1056;
  width: 100%;
  max-width: 380px; /* <--- ГОЛОВНЕ: обмежуємо ширину, щоб не розповзалось */
  margin: 20px;
}
</style>
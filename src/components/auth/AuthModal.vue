<script setup>
import LoginForm from './LoginForm.vue';
import RegisterForm from './RegisterForm.vue';
import { ref } from 'vue';

const emit = defineEmits(['close']);
const isLogin = ref(true);
</script>

<template>
  <div class="overlay" @click.self="emit('close')">
    <div class="modal">
      <button class="close" @click="emit('close')">✕</button>

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
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  backdrop-filter: blur(4px);
  z-index: 50;
}

.modal {
  background: white;
  width: 380px;
  border-radius: 20px;
  margin: 100px auto;
  padding: 30px;
  position: relative;
}

.close {
  position: absolute;
  right: 16px;
  top: 16px;
  background: none;
  border: none;
  font-size: 18px;
}


</style>
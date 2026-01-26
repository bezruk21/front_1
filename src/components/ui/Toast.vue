<script setup>
import { useToast } from '../../composables/useToast';

const { show, message, type, closeToast } = useToast();
</script>

<template>
  <Transition name="toast">
    <div
        v-if="show"
        class="toast"
        :class="type"
        @click="closeToast"
    >
      <span class="icon">{{ type === 'success' ? '✅' : '❌' }}</span>
      <span class="text">{{ message }}</span>
    </div>
  </Transition>
</template>

<style scoped>
.toast {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 15px 25px;
  border-radius: 12px;
  background: white;
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 9999;
  cursor: pointer;
  min-width: 300px;
  border-left: 5px solid;
}

.toast.success {
  border-left-color: #4CAF50;
  color: #2E7D32;
}

.toast.error {
  border-left-color: #F44336;
  color: #C62828;
}

.text {
  font-weight: 600;
  font-size: 14px;
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
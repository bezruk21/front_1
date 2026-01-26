<script setup>
import { useToast } from '../../composables/useToast';

const { show, message, type, closeToast } = useToast();
</script>

<template>
  <Transition name="toast">
    <div
        v-if="show"
        class="toast-custom shadow-lg d-flex align-items-center p-3 mb-3 bg-white rounded"
        :class="type"
        @click="closeToast"
    >
      <div class="fs-4 me-3">
        {{ type === 'success' ? '✅' : '❌' }}
      </div>
      <div class="fw-semibold text-dark">
        {{ message }}
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.toast-custom {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1060;
  min-width: 300px;
  cursor: pointer;
  border-left: 6px solid #ccc;
}

.toast-custom.success {
  border-left-color: #198754;
}

.toast-custom.error {
  border-left-color: #dc3545;
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>
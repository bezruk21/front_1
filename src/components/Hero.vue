<script setup>
import petImage from '../assets/american-staffordshire-terrier-puppy-table.jpg';
</script>

<template>
  <section class="hero">
    <img :src="petImage" alt="Собака" class="hero-img" />
  </section>
</template>

<style scoped>
.hero {
  position: fixed;  
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}

.hero-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
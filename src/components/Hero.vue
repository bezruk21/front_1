<script setup>
import petImage from '../assets/american-staffordshire-terrier-puppy-table.jpg';
</script>

<template>
  <section class="hero">
    <img :src="petImage" alt="Собака" class="hero-img" />

    <div class="hero-content">
      <h1>
        Подаруй дім<br />
        маленким лапкам
      </h1>
      <button>Обрати друга</button>
    </div>
  </section>
</template>

<style scoped>
/* Попередні стилі .hero та .hero-img залишаються */
.hero {
  position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 1;
}
.hero-img {
  position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
}
.hero-content {
  position: relative; z-index: 2; padding-top: 140px; padding-left: 8%; max-width: 520px; color: white;
}

.hero-content h1 {
  font-size: 56px;
  font-weight: 900;
  line-height: 1.05;
  margin-bottom: 28px;
}
</style>
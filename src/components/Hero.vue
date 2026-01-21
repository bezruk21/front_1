<script setup>
import petImage from '../assets/american-staffordshire-terrier-puppy-table.jpg';
</script>

<template>
  <section class="hero">
    <img :src="petImage" alt="Собака" class="hero-img" />

    <div class="hero-content">
      <h1>Подаруй дім<br />маленким лапкам</h1>
      <button>Обрати друга</button>
    </div>

    <div class="paws">
      <span class="paw p1">🐾</span>
      <span class="paw p2">🐾</span>
      <span class="paw p3">🐾</span>
      <span class="paw p4">🐾</span>
    </div>
  </section>
</template>

<style scoped>
.paws {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.paw {
  position: absolute;
  font-size: 60px;
  opacity: 0.25;
}

.p1 { top: 10%; left: 5%; }
.p2 { top: 15%; left: 25%; font-size: 40px; }
.p3 { top: 5%; right: 20%; }
.p4 { bottom: 10%; right: 5%; font-size: 120px; }

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

.hero-content button {
  padding: 16px 40px;
  background: #4a3f6b;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
}

.hero-content button:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}
</style>
<template>
  <section class="parrots-page">
    <div class="container">
      <h2>🦜 Попугаї</h2>
      <p class="subtitle">
        Яскраві та розумні пташки шукають дім та люблячих господарів.
      </p>

      <div class="grid">
        <div class="card" v-for="parrot in parrots" :key="parrot.name">
          <img :src="parrot.image" :alt="parrot.name" />
          <h3>{{ parrot.name }}</h3>
          <span>{{ parrot.age }}</span>
          <p>{{ parrot.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import parrot1 from '../assets/parrot1.jpg'
import parrot2 from '../assets/parrot2.jpg'
import parrot3 from '../assets/parrot3.jpg'
import parrot4 from '../assets/parrot4.jpg'

const parrots = [
  {
    name: 'Кеша',
    age: '2 роки',
    desc: 'Грайливий та допитливий попугай, любить говорити нові слова.',
    image: parrot1
  },
  {
    name: 'Лулу',
    age: '1 рік',
    desc: 'Яскрава та активна пташка, потребує уваги та ігор.',
    image: parrot2
  },
  {
    name: 'Ріо',
    age: '3 роки',
    desc: 'Спокійний та розумний, легко навчається новим трюкам.',
    image: parrot3
  },
  {
    name: 'Тікі',
    age: '6 місяців',
    desc: 'Молодий попугай, веселий і товариський.',
    image: parrot4
  }
]
</script>

<style scoped>
.parrots-page {
  position: fixed;
  inset: 0;
  overflow-y: auto;

  padding-top: 10px;
  padding-bottom: 120px;

  background: linear-gradient(135deg, #9b2cff, #b84cff);
  color: white;
}
.parrots-page::after {
  content: '';
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: linear-gradient(to top, rgba(155,44,255,0.8), transparent);
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
}

h2 {
  font-size: 45px;
  margin-bottom: 5px;
}

.subtitle {
  margin-bottom: 25px;
  opacity: 0.9;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 20px;
}

.card {
  background: white;
  color: #333;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.25);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-6px);
}

.card img {
  width: 100%;
  height: 225px;
  object-fit: cover;
}

.card h3 {
  margin: 0px 15px 5px;
}

.card span {
  color: #7a3cff;
  font-weight: bold;
  margin-left: 15px;
}

.card p {
  padding: 10px 15px 20px;
  font-size: 14px;
}
</style>
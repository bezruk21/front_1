<template>
  <section class="dogs-page">
    <div class="container">
      <h2>🐶 Собаки</h2>
      <p class="subtitle">
        Вірні друзі шукають дім та люблячих господарів.
      </p>

      <div class="grid">
        <div class="card" v-for="dog in dogs" :key="dog.name">
          <img :src="dog.image" />
          <h3>{{ dog.name }}</h3>
          <span>{{ dog.age }}</span>
          <p>{{ dog.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import dog1 from '../assets/dog1.jpg'
import dog2 from '../assets/dog2.jpg'
import dog3 from '../assets/dog3.jpg'
import dog4 from '../assets/dog4.jpg'

const dogs = [
  {
    name: 'Рекс',
    age: '3 роки',
    desc: 'Вірний та слухняний пес, любить активні прогулянки.',
    image: dog1
  },
  {
    name: 'Чак',
    age: '2 роки',
    desc: 'Грайливий та дружелюбний, добре ладить з дітьми.',
    image: dog2
  },
  {
    name: 'Лайма',
    age: '1 рік',
    desc: 'Молода енергійна собачка, потребує активного господаря.',
    image: dog3
  },
  {
    name: 'Граф',
    age: '6 місяців',
    desc: 'Спокійний та вихований, ідеальний компаньйон.',
    image: dog4
  }
]
</script>

<style scoped>
.dogs-page {
  position: fixed;
  inset: 0;
  overflow-y: auto;

  padding-top: 10px;
  padding-bottom: 120px;

  background: linear-gradient(135deg, #9b2cff, #b84cff);
  color: white;
}
.dogs-page::after {
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
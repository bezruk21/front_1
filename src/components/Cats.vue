<template>
  <section class="cats-page">
    <div class="container">
      <h2>😺 Коти</h2>
      <p class="subtitle">
        Знайдіть свого ідеального котика! Всі наші хвостаті друзі чекають на люблячу родину.
      </p>

      <div class="grid">
        <div class="card" v-for="cat in cats" :key="cat.name">
          <img :src="cat.image" />
          <h3>{{ cat.name }}</h3>
          <span>{{ cat.age }}</span>
          <p>{{ cat.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import cat1 from '../assets/cat1.jpg'
import cat2 from '../assets/cat2.jpg'
import cat3 from '../assets/cat3.jpg'
import cat4 from '../assets/cat4.jpg'

const cats = [
  {
    name: 'Мурка',
    age: '2 роки',
    desc: 'Ласкава кицька, любить гратися та спати на сонечку.',
    image: cat1
  },
  {
    name: 'Барсик',
    age: '1 рік',
    desc: 'Енергійний котик, обожнює гратися та досліджувати.',
    image: cat2
  },
  {
    name: 'Сіра',
    age: '3 роки',
    desc: 'Спокійна киця, ідеальна для квартири.',
    image: cat3
  },
  {
    name: 'Севастіан',
    age: '6 місяців',
    desc: 'Маленький і грайливий кошеня, шукає родину.',
    image: cat4
  }
]
</script>

<style scoped>
.cats-page {
  position: fixed;
  inset: 0;
  overflow-y: auto;

  padding-top: 10px;
  padding-bottom: 120px;

  background: linear-gradient(135deg, #9b2cff, #b84cff);
  color: white;
}

.cats-page::after {
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
  margin: 15px 15px 5px;
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
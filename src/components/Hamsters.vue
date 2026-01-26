<template>
  <section class="hamsters-page">
    <div class="container">
      <h2>🐹 Хом'ячки</h2>
      <p class="subtitle">
        Маленькі пухнастики шукають дім та люблячих господарів.
      </p>

      <div class="grid">
        <div class="card" v-for="hamster in hamsters" :key="hamster.name">
          <img :src="hamster.image" />
          <h3>{{ hamster.name }}</h3>
          <span>{{ hamster.age }}</span>
          <p>{{ hamster.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import hamster1 from '../assets/hamster1.jpg'
import hamster2 from '../assets/hamster2.jpg'
import hamster3 from '../assets/hamster3.jpg'
import hamster4 from '../assets/hamster4.jpg'

const hamsters = [
  {
    name: 'Пухлик',
    age: '6 місяців',
    desc: 'Веселий та пухнастий хом’ячок, любить бігати в колесі.',
    image: hamster1
  },
  {
    name: 'Сніжок',
    age: '1 рік',
    desc: 'Лагідний та дружелюбний, добре ладить з іншими хом’ячками.',
    image: hamster2
  },
  {
    name: 'Гризунчик',
    age: '8 місяців',
    desc: 'Енергійний малюк, потребує багато іграшок та тунелів.',
    image: hamster3
  },
  {
    name: 'Шуша',
    age: '5 місяців',
    desc: 'Спокійний і милий, ідеальний компаньйон для дитячої кімнати.',
    image: hamster4
  }
]
</script>

<style scoped>
.hamsters-page {
  position: fixed;
  inset: 0;
  overflow-y: auto;

  padding-top: 10px;
  padding-bottom: 120px;

  background: linear-gradient(135deg, #9b2cff, #b84cff);
  color: white;
}
.hamsters-page::after {
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
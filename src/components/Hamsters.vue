<template>
  <section class="hamsters-page">
    <div class="container py-4">
      <h2 class="display-4 fw-bold mb-2">🐹 Хом'яки</h2>
      <p class="lead mb-5 opacity-75">
        Маленькі пухнастики шукають дім та люблячих господарів.
      </p>

      <div class="row g-4">
        <div
            class="col-12 col-sm-6 col-lg-3"
            v-for="hamster in hamsters"
            :key="hamster.name"
        >
          <div class="card h-100 border-0 shadow-lg hamster-card">
            <img :src="hamster.image" class="card-img-top" :alt="hamster.name" />

            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <h3 class="card-title h5 mb-0">{{ hamster.name }}</h3>
                <span class="badge bg-light text-primary border">{{ hamster.age }}</span>
              </div>
              <p class="card-text text-muted small">{{ hamster.desc }}</p>
            </div>
          </div>
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
  padding-top: 80px; /* Відступ під фіксований хедер */
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

/* Стилі карток */
.hamster-card {
  transition: transform 0.3s ease;
  overflow: hidden;
  border-radius: 18px;
}

.hamster-card:hover {
  transform: translateY(-6px);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

/* Колір бейджика */
.badge {
  color: #7a3cff !important;
  font-size: 0.85rem;
}
</style>
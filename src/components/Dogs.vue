<template>
  <section class="dogs-page">
    <div class="container py-4">
      <h2 class="display-4 fw-bold mb-2">🐶 Собаки</h2>
      <p class="lead mb-5 opacity-75">
        Вірні друзі шукають дім та люблячих господарів.
      </p>

      <div class="row g-4">
        <div
            class="col-12 col-sm-6 col-lg-3"
            v-for="dog in dogs"
            :key="dog.name"
        >
          <div class="card h-100 border-0 shadow-lg dog-card">
            <img :src="dog.image" class="card-img-top" :alt="dog.name" />

            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <h3 class="card-title h4 mb-0">{{ dog.name }}</h3>
                <span class="badge bg-light text-primary border">{{ dog.age }}</span>
              </div>
              <p class="card-text text-muted">{{ dog.desc }}</p>
            </div>
          </div>
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

.dog-card {
  transition: transform 0.3s ease;
  overflow: hidden;
  border-radius: 18px;
}

.dog-card:hover {
  transform: translateY(-6px);
}

.card-img-top {
  height: 225px;
  object-fit: cover;
}

.badge {
  color: #7a3cff !important;
  font-size: 0.9rem;
}
</style>
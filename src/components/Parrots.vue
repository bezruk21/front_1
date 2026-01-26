<template>
  <section class="parrots-page">
    <div class="container py-4">
      <h2 class="display-4 fw-bold mb-2">🦜 Папугаї</h2>
      <p class="lead mb-5 opacity-75">
        Яскраві та розумні пташки шукають дім та люблячих господарів.
      </p>

      <div class="row g-4">
        <div
            class="col-12 col-sm-6 col-lg-3"
            v-for="parrot in parrots"
            :key="parrot.name"
        >
          <div class="card h-100 border-0 shadow-lg parrot-card">
            <img :src="parrot.image" class="card-img-top" :alt="parrot.name" />

            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <h3 class="card-title h5 mb-0">{{ parrot.name }}</h3>
                <span class="badge bg-light text-primary border">{{ parrot.age }}</span>
              </div>
              <p class="card-text text-muted small">{{ parrot.desc }}</p>
            </div>
          </div>
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
  padding-top: 80px;
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

.parrot-card {
  transition: transform 0.3s ease;
  overflow: hidden;
  border-radius: 18px;
}

.parrot-card:hover {
  transform: translateY(-6px);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.badge {
  color: #7a3cff !important;
  font-size: 0.85rem;
}
</style>
<template>
  <section class="cats-page">
    <div class="container py-4">
      <h2 class="display-4 fw-bold mb-2">😺 Коти</h2>
      <p class="lead mb-5 opacity-75">
        Знайдіть свого ідеального котика! Всі наші хвостаті друзі чекають на люблячу родину.
      </p>

      <div class="row g-4">
        <div
            class="col-12 col-sm-6 col-lg-3"
            v-for="cat in cats"
            :key="cat.name"
        >
          <div class="card h-100 border-0 shadow-lg cat-card">
            <img :src="cat.image" class="card-img-top" :alt="cat.name" />

            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <h3 class="card-title h4 mb-0">{{ cat.name }}</h3>
                <span class="badge bg-light text-primary border">{{ cat.age }}</span>
              </div>
              <p class="card-text text-muted">{{ cat.desc }}</p>
            </div>
          </div>
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

.cat-card {
  transition: transform 0.3s ease;
  overflow: hidden;
  border-radius: 18px;
}

.cat-card:hover {
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
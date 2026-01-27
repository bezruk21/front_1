<script setup>
import { ref, computed } from 'vue'

import cat1 from '../assets/cat1.jpg'
import cat2 from '../assets/cat2.jpg'
import dog1 from '../assets/dog1.jpg'
import dog2 from '../assets/dog2.jpg'
import parrot1 from '../assets/parrot1.jpg'
import hamster1 from '../assets/hamster1.jpg'

const animals = [
  {
    name: 'Мурка',
    age: '2 роки',
    description: 'Ласкава кішечка, любить гратися та спати на сонечку.',
    image: cat1,
    type: 'cat'
  },
  {
    name: 'Рекс',
    age: '3 роки',
    description: 'Вірний та слухняний пес, любить активні прогулянки.',
    image: dog1,
    type: 'dog'
  },
  {
    name: 'Кеша',
    age: '2 роки',
    description: 'Розмовний та яскравий папуга, любить співати.',
    image: parrot1,
    type: 'parrot'
  },
  {
    name: 'Хома',
    age: '6 місяців',
    description: 'Активний та милий хомʼячок, обожнює колесо.',
    image: hamster1,
    type: 'hamster'
  },
  {
    name: 'Барсик',
    age: '1 рік',
    description: 'Енергійний котик, обожнює гратися.',
    image: cat2,
    type: 'cat'
  },
  {
    name: 'Бобік',
    age: '2 роки',
    description: 'Грайливий та дружелюбний.',
    image: dog2,
    type: 'dog'
  }
]

// 🔹 вибраний фільтр
const selectedType = ref('all')

// 🔹 відфільтрований список
const filteredAnimals = computed(() => {
  if (selectedType.value === 'all') return animals
  return animals.filter(a => a.type === selectedType.value)
})
</script>

<template>
  <section class="choose">
    <div class="container">

      <h1>Обрати друга</h1>
      <p class="subtitle">
        Використовуйте фільтри, щоб знайти ідеального компаньйона для вашої родини.
      </p>

      <div class="filters">
        <select v-model="selectedType">
          <option value="all">Всі</option>
          <option value="cat">Коти</option>
          <option value="dog">Собаки</option>
          <option value="parrot">Папуги</option>
          <option value="hamster">Хомʼяки</option>
        </select>

        <select>
          <option>Будь-який вік</option>
        </select>

        <select>
          <option>Будь-який розмір</option>
        </select>
      </div>

      <p class="count">Знайдено: {{ filteredAnimals.length }} тварин</p>

      <!-- КАРТКИ -->
      <div class="grid">
        <div
            class="card"
            v-for="animal in filteredAnimals"
            :key="animal.name"
        >
          <img :src="animal.image" />
          <div class="card-body">
            <h3>{{ animal.name }}</h3>
            <span class="age">{{ animal.age }}</span>
            <p>{{ animal.description }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.choose {
  min-height: 100vh;
  background: linear-gradient(180deg, #a56eff 0%, #7a3cff 100%);
  padding-top: 140px;
}

.container {
  max-width: 900px;
  padding-left: 80px;
  padding-right: 24px;
}

h1 {
  color: white;
  font-size: 48px;
  font-weight: 800;
}

.subtitle {
  color: rgba(255,255,255,0.9);
  margin: 12px 0 32px;
}

.filters {
  display: flex;
  gap: 16px;
  background: rgba(255,255,255,0.15);
  padding: 20px;
  border-radius: 16px;
}

.filters select {
  background: #2f2f2f;
  color: white;
  padding: 14px 18px;
  border-radius: 12px;
  border: none;
  font-weight: 600;
}


.count {
  color: white;
  margin: 24px 0;
  font-weight: 600;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
}

.card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.card-body {
  padding: 16px;
}

.card h3 {
  margin: 0;
}

.age {
  color: #7a3cff;
  font-weight: 600;
  font-size: 14px;
}
</style>

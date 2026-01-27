<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const submit = () => {
  console.log(form.value)
  alert('Повідомлення надіслано 🐾')
}
</script>

<template>
  <section class="contacts">
    <div class="contacts-container">
      <h1 class="title">Контакти</h1>

      <div class="contacts-grid">
        <!-- Ліва колонка -->
        <div class="contacts-left">
          <div class="info">
            <div class="card">
              <h3>Зв'яжіться з нами</h3>

              <div class="item">
                📍 <div>
                <b>Адреса</b>
                <p>вул. Тваринна, 42<br />Київ, 01001<br />Україна</p>
              </div>
              </div>

              <div class="item">
                📞 <div>
                <b>Телефон</b>
                <p>+380 44 123 45 67<br />+380 67 890 12 34</p>
              </div>
              </div>

              <div class="item">
                ✉️ <div>
                <b>Email</b>
                <p>info@lapky.ua<br />adopt@lapky.ua</p>
              </div>
              </div>
            </div>

            <div class="card">
              <h3>Години роботи</h3>
              <p>Пн–Пт: <b>10:00 – 18:00</b></p>
              <p>Сб: <b>11:00 – 16:00</b></p>
              <p>Нд: <b>Вихідний</b></p>
            </div>
          </div>
        </div>

        <!-- Права колонка -->
        <form class="card form" @submit.prevent="submit">
          <h3>Напишіть нам</h3>

          <input v-model="form.name" placeholder="Ім'я *" required />
          <input v-model="form.email" type="email" placeholder="Email *" required />
          <input v-model="form.phone" placeholder="Телефон" />
          <textarea v-model="form.message" placeholder="Повідомлення *" required />

          <button class="send">Відправити повідомлення</button>
        </form>
      </div>
    </div>

  </section>
</template>

<style scoped>
.contacts {
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #a56eff, #7a3cff);
  padding-top: 140px;
}

.contacts-left {

}

.info {
  display: flex;
  flex-direction: column;
  gap: 24px; /* або 32px */
}

.contacts-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px 80px;
}

.title {
  color: white;
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 40px;
}

.contacts-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}

.card {
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.card h3 {
  color: #7a3cff;
  margin-bottom: 20px;
}

.item {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  font-size: 15px;
}

.form input,
.form textarea {
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid #ddd;
  font-size: 14px;
}

.form textarea {
  min-height: 120px;
  resize: none;
}

.send {
  margin-top: 10px;
  padding: 14px;
  border-radius: 999px;
  border: none;
  background: #7a3cff;
  color: white;
  font-weight: 700;
  transition: 0.2s;
}

.send:hover {
  background: #5f2ecc;
  transform: translateY(-2px);
}

@media (max-width: 900px) {
  .contacts-grid {
    grid-template-columns: 1fr;
  }
}
</style>

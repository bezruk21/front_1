<template>
  <section class="about">
    <div class="about-container">
      <h1 class="title">Про нас</h1>

      <!-- Наша місія -->
      <div class="card">
        <h3>❤️ Наша місія</h3>
        <p>
          LAPKY — це більше ніж притулок для тварин. Це місце, де кожна маленька
          лапка знаходить свій дім, а кожне серце — свого вірного друга.
          Ми віримо, що кожна тварина заслуговує на любов, турботу та затишний дім.
        </p>
      </div>

      <!-- Чим ми займаємося -->
      <div class="card">
        <h3>🏠 Чим ми займаємося</h3>

        <p>
          <b>Рятуємо життя:</b>
          Беремо під опіку безпритульних тварин, надаємо ветеринарну допомогу
          та створюємо комфортні умови для проживання.
        </p>

        <p>
          <b>Шукаємо родини:</b>
          Ретельно підбираємо господарів для кожної тварини,
          щоб забезпечити щасливе життя в новій родині.
        </p>

        <p>
          <b>Просвітлюємо:</b>
          Проводимо освітні програми про відповідальне ставлення до тварин
          та важливість стерилізації.
        </p>
      </div>

      <!-- Наші досягнення -->
      <div class="card">
        <h3>⭐ Наші досягнення</h3>

        <div class="stats">
          <div class="stat">
            <b>500+</b>
            <span>Тварин знайшли дім</span>
          </div>
          <div class="stat">
            <b>150+</b>
            <span>Під нашою опікою</span>
          </div>
          <div class="stat">
            <b>5+</b>
            <span>Років роботи</span>
          </div>
        </div>
      </div>

      <!-- Приєднуйтесь -->
      <div class="card">
        <h3>🤝 Приєднуйтесь до нас</h3>
        <ul>
          <li>Візьміть тварину з притулку</li>
          <li>Станьте волонтером</li>
          <li>Зробіть пожертву</li>
          <li>Поширюйте інформацію про нас</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #a56eff, #7a3cff);
  padding-top: 140px;
}

.about-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 24px 80px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.title {
  color: white;
  font-size: 48px;
  font-weight: 800;
}

.card {
  background: white;
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.card h3 {
  color: #7a3cff;
  margin-bottom: 16px;
}

.card p {
  margin-bottom: 12px;
  line-height: 1.6;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.stat {
  background: #f6f1ff;
  border-radius: 16px;
  padding: 20px;
  text-align: center;
}

.stat b {
  font-size: 32px;
  color: #7a3cff;
}

.stat span {
  display: block;
  margin-top: 6px;
  font-size: 14px;
}

ul {
  padding-left: 18px;
}

li {
  margin-bottom: 8px;
}

@media (max-width: 768px) {
  .stats {
    grid-template-columns: 1fr;
  }
}
</style>

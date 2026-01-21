<template>
  <header class="navbar">
    <div class="logo">🐾 LAKKY</div>

    <div class="right">
      <button class="btn">Контакти</button>
      <button class="btn">Про нас</button>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  padding: 20px;
  background: #c8b6e2;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.right {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 8px 16px;
  border: none;
  background: #4a3f6b;
  color: white;
  cursor: pointer;
}
</style>

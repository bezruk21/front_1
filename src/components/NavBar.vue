<template>
  <header class="navbar">
    <div class="left">
      <button class="burger">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="logo">🐾 LAKKY</div>
    </div>

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

.left {
  display: flex;
  align-items: center;
  gap: 15px;
}

.burger {
  background: none;
  border: none;
  cursor: pointer;
}

.burger span {
  display: block;
  width: 25px;
  height: 3px;
  background: white;
  margin: 4px 0;
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
}
</style>

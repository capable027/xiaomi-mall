<template>
  <div class="nav">
    <img src="/src/assets/logo.png" alt="logo" class="logo" />
    <div class="nav-links">
      <router-link to="/">首页</router-link>
      <router-link to="/cart">购物车</router-link>
      <router-link to="/login">登录</router-link>
    </div>
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
}
.logo {
  height: 40px;
}
.nav-links a {
  margin-left: 20px;
  text-decoration: none;
  color: #333;
}
.nav-links a.router-link-active {
  color: #ff6700;
}
</style>

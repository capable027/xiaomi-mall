<template>
  <el-container class="layout">
    <el-header class="header">
      <NavBar />
    </el-header>

    <el-main class="main">
      <router-view />
    </el-main>

    <el-footer class="footer">
      <Footer />
    </el-footer>
  </el-container>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.header {
  background-color: #fff;
  border-bottom: 1px solid #eee;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main {
  flex: 1;
  padding: 20px;
  background-color: #f8f8f8;
}
.footer {
  background-color: #fff;
  border-top: 1px solid #eee;
  text-align: center;
  padding: 15px;
  font-size: 14px;
  color: #888;
}
</style>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useCartStore } from '../store/cart'
import { ElMessage } from 'element-plus'

const route = useRoute()
const router = useRouter()
const cartStore = useCartStore()

const products = [
  { id: 1, name: '小米14', price: 3999, img: '/src/assets/phone1.jpg' },
  { id: 2, name: 'Redmi K70', price: 2999, img: '/src/assets/phone2.jpg' },
  { id: 3, name: '小米平板6', price: 2499, img: '/src/assets/pad.jpg' },
  { id: 4, name: '小米电视65寸', price: 4299, img: '/src/assets/tv.jpg' }
]

const product = products.find(p => p.id === Number(route.params.id))

const addToCart = () => {
  cartStore.addToCart(product)
  ElMessage.success('已加入购物车')
  router.push('/cart')
}
</script>

<template>
  <div class="detail">
    <img :src="product.img" class="detail-img" />
    <div class="detail-info">
      <h2>{{ product.name }}</h2>
      <p class="price">￥{{ product.price }}</p>
      <p class="desc">这是一款高品质的小米产品，仅作示例展示。</p>
      <el-button type="primary" @click="addToCart">加入购物车</el-button>
    </div>
  </div>
</template>

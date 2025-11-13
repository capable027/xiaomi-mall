<template>
  <div class="cart">
    <h2>🛒 我的购物车</h2>

    <el-table :data="cart.items" v-if="cart.items.length" style="width: 100%">
      <el-table-column prop="img" label="商品" width="120">
        <template #default="{ row }">
          <img :src="row.img" class="cart-img" />
        </template>
      </el-table-column>

      <el-table-column prop="name" label="名称" />
      <el-table-column prop="price" label="单价(￥)" width="120" />
      <el-table-column label="数量" width="150">
        <template #default="{ row }">
          <el-input-number v-model="row.count" :min="1" />
        </template>
      </el-table-column>

      <el-table-column label="小计(￥)" width="120">
        <template #default="{ row }">
          {{ row.price * row.count }}
        </template>
      </el-table-column>

      <el-table-column label="操作" width="100">
        <template #default="{ row }">
          <el-button type="danger" size="small" @click="cart.removeFromCart(row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-empty v-else description="购物车是空的，去首页逛逛吧~" />

    <div v-if="cart.items.length" class="cart-summary">
      <div>
        共 {{ cart.totalCount }} 件商品，总计：
        <span class="price">￥{{ cart.totalPrice }}</span>
      </div>
      <el-button type="primary">去结算</el-button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../store/cart'
const cart = useCartStore()
</script>

<style scoped>
.cart {
  max-width: 1000px;
  margin: 40px auto;
}
.cart-img {
  width: 80px;
  border-radius: 8px;
}
.cart-summary {
  margin-top: 20px;
  text-align: right;
  font-size: 18px;
}
.price {
  color: #ff6700;
  font-weight: bold;
}
</style>

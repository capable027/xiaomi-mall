<template>
  <div class="home">

    <!-- 🖼️ 轮播图（带文字 + 动画） -->
    <el-carousel height="460px" indicator-position="outside">
      <el-carousel-item v-for="(item, i) in banners" :key="i">
        <div class="banner-box">
          <img :src="item.img" class="banner-img" />
          <div class="banner-caption">
            <h2>{{ item.title }}</h2>
            <p>{{ item.desc }}</p>
            <el-button type="primary" round size="large" @click="openLink(item.link)">立即了解</el-button>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>


    <!-- 🛍️ 商品区 -->
    <h2 class="section-title">热门商品</h2>
    <el-row :gutter="20">
      <el-col :span="6" v-for="p in products" :key="p.id">
        <el-card
          :body-style="{ padding: '10px' }"
          class="product-card"
          style="height: 100%; display: flex; flex-direction: column;"
          @click="openLink(p.link)"
        >
          <div class="product-img-wrapper">
            <img :src="p.img" class="product-img" />
          </div>
          <h3 class="product-name">{{ p.name }}</h3>
          <p class="product-price">￥{{ p.price }}</p>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script setup>
const banners = [
  {
    img: '/src/assets/img/banner1.jpg',
    title: 'Xiaomi 17 Pro',
    desc: '徕卡影像，全新体验',
    link: 'https://www.mi.com/prod/xiaomi-17-pro?spmref=MiShop_PC.mihomepage.mtl_68d0931c799ab50001357c84.1'
  },
  {
    img: '/src/assets/img/banner2.jpg',
    title: 'Xiaomi YU 7',
    desc: '智驾轿跑，续航旗舰',
    link:'https://www.xiaomiev.com/yu7?spmref=MiShop_PC.mihomepage.mtl_6720bfd0352df30001ebf72c.1'
  },
  {
    img: '/src/assets/img/banner3.jpg',
    title: 'Xiaomi Pad 8 Pro',
    desc: '实力满载，轻薄长续航',
    link:'https://www.mi.com/prod/xiaomi-pad-8-pro?spmref=MiShop_PC.mihomepage.mtl_68cd3ead799ab50001aa37c0.1'
  }
]

const products = [
  { id: 1, name: 'xiaomi 15 系列', price: '3599起', img: '/src/assets/img/xiaomi15.jpg', link: 'https://www.mi.com/shop/buy/detail?product_id=10050081' },
  { id: 2, name: 'REDMI K90 Pro Max', price: '3999起', img: '/src/assets/img/REDMI K90 Pro Max.jpg', link: 'https://www.mi.com/shop/buy/detail?product_id=22171' },
  { id: 3, name: 'REDMI Watch 6', price: 599, img: '/src/assets/img/REDMI Watch 6.jpg', link: 'https://www.mi.com/shop/buy/detail?product_id=22153' },
  { id: 4, name: 'RED MI Pad 2', price: '999起', img: '/src/assets/img/RED MI Pad 2.jpg', link: 'https://www.mi.com/shop/buy/detail?product_id=21591' },
  { id: 5, name: '小米电视 S Mini LED 系列', price: '2449起', img: '/src/assets/img/小米电视 S Mini LED 系列.jpg', link: 'https://www.mi.com/shop/buy/detail?product_id=10050068' },
  { id: 6, name: '巨省电Pro 1.5匹超一级能效 米家空调', price: 2699, img: '/src/assets/img/巨省电Pro 1.5匹超一级能效 米家空调.jpg', link: 'https://www.mi.com/shop/buy/detail?product_id=21028' },
  { id: 7, name: 'Xiaomi 开放式耳机 Pro', price: 999, img: '/src/assets/img/Xiaomi 开放式耳机 Pro.jpg', link: 'https://www.mi.com/shop/buy/detail?product_id=21418' },
  { id: 8, name: '米家声波扫振电动牙刷Pro 白金礼盒', price: 249, img: '/src/assets/img/米家声波扫振电动牙刷Pro 白金礼盒.jpg', link: 'https://www.mi.com/shop/buy/detail?product_id=21262&cfrom=search' }
]

const openLink = (url) => {
  window.open(url, '_blank')
}

</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
}

/* 轮播图样式 */
.banner-box {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
}
.banner-img {
  width: 100%;
  height: 460px; /* 调高 */
  object-fit: cover;
  transition: transform 1.2s ease;
}
.banner-box:hover .banner-img {
  transform: scale(1.05);
}

/* 文字层 */
.banner-caption {
  position: absolute;
  bottom: 50px;
  left: 80px;
  color: #fff;
  text-shadow: 0 3px 12px rgba(0, 0, 0, 0.5);
  animation: fadeInUp 1s ease;
}
.banner-caption h2 {
  font-size: 38px;
  margin: 0;
}
.banner-caption p {
  margin: 10px 0 20px;
  font-size: 18px;
  opacity: 0.9;
}

/* 商品区 */
.section-title {
  margin: 30px 0 20px;
  font-weight: bold;
  font-size: 22px;
  color: #333;
}
.product-card {
  transition: all 0.2s;
  cursor: pointer;
  margin-bottom: 30px; /* 增加底部间距，使上下卡片之间有更宽的间隔 */
  display: flex;      /* 使用弹性布局确保卡片内容对齐 */
  flex-direction: column;
}
.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.product-img-wrapper {
  overflow: hidden;
  border-radius: 6px;
}
.product-img {
  width: 100%;
  transition: transform 0.3s ease;
}
.product-card:hover .product-img {
  transform: scale(1.05);
}
.product-name {
  margin: 10px 0 5px;
  font-size: 16px;
  color: #333;
}
.product-price {
  color: #ff6700;
  font-size: 18px;
  font-weight: bold;
}

/* ===== 按钮动态光效 ===== */
.banner-caption .el-button {
  position: relative;
  overflow: hidden;
  background: linear-gradient(90deg, #ff6900, #ff9300);
  border: none;
  transition: all 0.3s ease;
}

.banner-caption .el-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 103, 0, 0.4);
}

/* 光滑过动画 */
.banner-caption .el-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -75%;
  width: 50%;
  height: 100%;
  background: linear-gradient(120deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 80%);
  transform: skewX(-20deg);
  transition: all 0.6s ease;
}

.banner-caption .el-button:hover::before {
  left: 125%;
}


/* 动画 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

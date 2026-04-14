<template>
  <div class="page">
    <h1>首页</h1>
    <p>这是首页...</p>
    <Swiper :swiper-list="swiperList" />
    <router-link to="/list">
      <button>去列表页</button>
    </router-link>
    <router-link to="/detail/101">
      <button>去详情页</button>
    </router-link>
  </div>
</template>

<script setup>
import Swiper from './Swiper.vue'

const swiperList = [
  {
    img: 'https://picsum.photos/800/400?random=1',
    title: '欢迎来到Vue3路由演示项目'
  },
  {
    img: 'https://picsum.photos/800/400?random=2',
    title: '轻松实现单页应用路由跳转'
  },
  {
    img: 'https://picsum.photos/800/400?random=3',
    title: '支持前进、后退、返回首页'
  }
]
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
}

button {
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  background: #42b983;
  color: white;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #359469;
}
</style>

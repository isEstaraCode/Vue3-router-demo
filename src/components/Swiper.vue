<template>
  <!-- 给容器加ref，代替querySelector，避免null报错 -->
  <div class="swiper-container" ref="swiperContainer">
    <div class="swiper-wrapper" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div
        v-for="(item, index) in swiperList"
        :key="index"
        class="swiper-slide"
      >
        <img :src="item.img" :alt="item.title" class="swiper-img" />
        <div class="swiper-desc">{{ item.title }}</div>
      </div>
    </div>

    <button class="swiper-btn prev" @click="prev">‹</button>
    <button class="swiper-btn next" @click="next">›</button>

    <div class="swiper-indicators">
      <span
        v-for="(item, index) in swiperList"
        :key="index"
        class="indicator"
        :class="{ active: index === currentIndex }"
        @click="goTo(index)"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  swiperList: {
    type: Array,
    required: true
  },
  autoPlayInterval: {
    type: Number,
    default: 3000
  }
})

const currentIndex = ref(0)
const swiperContainer = ref(null) // 用ref获取DOM，更安全
let timer = null

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.swiperList.length
}

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + props.swiperList.length) % props.swiperList.length
}

const goTo = (index) => {
  currentIndex.value = index
}

const startAutoPlay = () => {
  stopAutoPlay() // 先清定时器，避免重复
  timer = setInterval(() => {
    next()
  }, props.autoPlayInterval)
}

const stopAutoPlay = () => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

onMounted(() => {
  startAutoPlay()
  // 用ref获取DOM，100%避免null
  if (swiperContainer.value) {
    swiperContainer.value.addEventListener('mouseenter', stopAutoPlay)
    swiperContainer.value.addEventListener('mouseleave', startAutoPlay)
  }
})

onUnmounted(() => {
  stopAutoPlay()
  // 先判断DOM存在，再移除事件，彻底解决报错
  if (swiperContainer.value) {
    swiperContainer.value.removeEventListener('mouseenter', stopAutoPlay)
    swiperContainer.value.removeEventListener('mouseleave', startAutoPlay)
  }
})
</script>

<style scoped>
.swiper-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  height: 400px;
  margin: 20px auto;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.swiper-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease;
}

.swiper-slide {
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
  position: relative;
}

.swiper-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-desc {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
}

.swiper-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.7);
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 10;
}

.swiper-btn:hover {
  background: white;
}

.prev {
  left: 15px;
}

.next {
  right: 15px;
}

.swiper-indicators {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s;
}

.indicator.active {
  width: 25px;
  border-radius: 5px;
  background: white;
}
</style>
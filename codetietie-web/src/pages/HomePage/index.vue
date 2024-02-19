<template>
  <div class="homePage-container">
    <Header :name_distance="9" :btn_distance="9" />
    <div class="content">
      <div class="main">
        <div class="text">
          <div class="text-name">代码贴贴</div>
          <div class="text-info">一个快速分享代码的网站。</div>
          <div class="start-btn" @click="go">{{ $t('getStarted') }}</div>
        </div>
        <div class="image">
          <img
            src="@/assets/home-page-Img-dark.png"
            class="home-img"
            v-show="theme === 'dark'"
          />
          <img
            src="@/assets/home-page-Img-light.png"
            class="home-img"
            v-show="theme !== 'dark'"
          />
        </div>
      </div>
      <div class="func-item"></div>
    </div>
    <footer>
      <span>Copyright © 2024 - 2024 |</span>
      <span @click="jumpICP"> 冀ICP备2022018813号</span>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/Header/index.vue';
import { useState } from '@/stores/state.ts';
import { storeToRefs } from 'pinia';

const state = useState();
const { theme } = storeToRefs(state);
function go() {
  window.location.href = '/codetietie';
}
function jumpICP() {
  window.open('https://beian.miit.gov.cn');
}
console.log(
  '%c欢迎关注公众号：学编程的GISer',
  'color:skyblue;font-size:20px;font-weight:700;border:2px dashed skyblue;padding:5px;'
);
</script>

<style lang="less" scoped>
.homePage-container {
  color: var(--font-color);
  min-height: 100vh;
  background-color: var(--bg-color);
  display: flex;
  justify-content: center;
  overflow: auto;
  box-sizing: border-box;
  padding-bottom: 5vh;
  position: relative;
}
.content {
}
.main {
  display: flex;
  transform: translateY(15vh);
}
.text {
  height: 55vh;
  width: 35vw;
  padding: 1rem;
  box-sizing: border-box;
  border: 2px solid #999;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  &-name {
    width: 100%;
    text-align: center;
    font-weight: 700;
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  &-info {
    width: 100%;
    font-size: 1.1rem;
    text-align: center;
  }
}
.start-btn {
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  line-height: 2rem;
  width: 6rem;
  color: var(--btn-color);
  background-color: var(--btn-bg-color);
  padding: 1rem;
  border-radius: 5rem;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
}
.image {
  height: 55vh;
  width: 52vw;
  border: 2px solid #999;
  display: flex;
  align-items: center;
  .home-img {
    width: 100%;
  }
}
footer {
  color: var(--font-color);
  position: absolute;
  bottom: 1vh;
}
footer > span {
  font-size: 0.68rem;
}
@media (max-width: 768px) {
  footer > span {
    font-size: 0.6rem;
  }
}
</style>

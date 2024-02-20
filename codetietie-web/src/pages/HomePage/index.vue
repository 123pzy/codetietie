<template>
  <div class="homePage-container">
    <Header :name_distance="2" :btn_distance="2" />
    <div class="homePage-content">
      <div class="main">
        <div class="text">
          <div class="text-name">{{ $t('website_title') }}</div>
          <div class="text-info">{{ $t('website_subject') }}</div>
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
      <div class="func-items">
        <div class="func-item" v-for="item in JSON.parse(t('funcItems'))">
          <div class="title">{{ item.title }}</div>
          <div class="content">{{ item.content }}</div>
        </div>
      </div>
    </div>
    <footer>
      <span>Copyright © 2024 - 2024 |</span>
      <span @click="jumpICP"> 冀ICP备2022018813号</span>
    </footer>
  </div>
</template>

<script lang="ts" setup>
// import { ref } from 'vue';
import Header from '@/components/Header/index.vue';
import { useState } from '@/stores/state.ts';
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
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
  height: fit-content;
  background-color: var(--bg-color);
  display: flex;
  justify-content: center;
  overflow: auto;
  box-sizing: border-box;
  padding-bottom: 5vh;
  position: relative;
}
.homePage-content {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.main {
  display: flex;
  transform: translateY(15vh);
  height: 70vh;
}
.text {
  height: 55vh;
  width: 30vw;
  padding: 1rem;
  box-sizing: border-box;
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
  width: 57vw;
  display: flex;
  justify-content: end;
  align-items: center;
  box-sizing: border-box;
  .home-img {
    width: 100%;
  }
}
.func-items {
  height: 20vh;
  width: 90vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.func-item {
  width: 18.8%;
  height: 90%;
  background-color: var(--homePage-func-item-bg-color);
  border-radius: 1rem;
  padding: 1.5rem;
  box-sizing: border-box;
  overflow: hidden;
}
// 设置限制显示行数
.ellipsis(@textNum) {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: @textNum;
  -webkit-box-orient: vertical;
}
.title {
  font-size: 1rem;
  font-weight: 700;
  .ellipsis(2);
}
.content {
  color: var(--homePage-func-item-font-color);
  margin-top: 0.6rem;
  .ellipsis(4);
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
  .main {
    justify-content: center;
    transform: translateY(10vh);
    flex-wrap: wrap;
    height: fit-content;
  }
  .text {
    height: 50%;
    width: 100%;
    gap: 1rem;
    &-name {
      font-size: 2rem;
    }
    &-info {
      width: 100%;
      font-size: 1rem;
      text-align: center;
    }
  }
  .text-name {
    margin: 0;
  }
  .start-btn {
    width: fit-content;
    padding: 0.2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 2rem;
  }
  .image {
    height: fit-content;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: start;
    .home-img {
      max-width: 96%; /* 设置最大宽度为父元素的100% */
      height: auto; /* 让高度自动调整，以保持原始宽高比 */
    }
  }
  .func-items {
    margin-top: 13.2vh;
    height: fit-content;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .func-item {
    height: fit-content;
    width: 98%;
    padding: 1.2rem;
  }
  footer > span {
    font-size: 0.6rem;
  }
}
</style>

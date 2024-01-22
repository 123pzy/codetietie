<template>
  <div class="home-container">
    <Header :name_distance="9" :btn_distance="9" />
    <div class="box">
      <div class="font">
        <p class="introduce">{{ $t('website_description') }}</p>
        <p class="beautyCode">beautiful code</p>
        <p class="text">
          {{ $t('website_subject') }}
        </p>
      </div>
      <div class="start-btn" @click="go">{{ $t('getStarted') }}</div>
      <img
        src="../assets/home-page-Img-dark.png"
        class="home-img"
        v-show="theme === 'dark'"
      />
      <img
        src="../assets/home-page-Img-light.png"
        class="home-img"
        v-show="theme !== 'dark'"
      />
    </div>
    <footer>
      <span>Copyright © 2024 - 2024 |</span>
      <span @click="jumpICP"> 冀ICP备2022018813号</span>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import Header from '../components/Header.vue';
import { useState } from '../stores/state.js';
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

<style scoped>
.home-container {
  min-height: 100vh;
  background-color: var(--bg-color);
  display: flex;
  justify-content: center;
  overflow: auto;
  box-sizing: border-box;
  padding-bottom: 5vh;
  position: relative;
}
.box {
  height: fit-content;
  width: 70vw;
  text-align: center;
}
.font {
  width: 70vw;
  display: grid;
  justify-content: center;
}
.introduce {
  color: var(--websit-name-bg);
  width: 30rem;
  max-width: 80vw;
  font-size: 3rem;
  font-weight: 700;
  margin-top: 15vh;
  margin-bottom: 1rem;
  justify-self: center;
}
.beautyCode {
  color: var(--websit-name-bg);
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  margin-top: -1.6rem;
}
.text {
  width: 50rem;
  color: var(--websit-name-bg);
  justify-self: center;
}
.start-btn {
  font-size: 1rem;
  width: 10rem;
  color: var(--btn-color);
  background-color: var(--btn-bg-color);
  padding: 1rem;
  border-radius: 0.5rem;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 1rem;
  cursor: pointer;
}
.home-img {
  width: 70vw;
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
  .box {
    width: 80vw;
  }
  .font {
    width: 80vw;
    display: grid;
    justify-content: center;
  }
  .introduce {
    width: 80vw;
    max-width: 80vw;
    font-size: 2.15rem;
  }
  .text {
    width: 80vw;
    font-size: 0.9rem;
  }
  .start-btn {
    width: 6rem;
    margin-top: 1.5rem;
    margin-bottom: 2rem;
  }
  .home-img {
    width: 80vw;
  }
  footer > span {
    font-size: 0.6rem;
  }
}
</style>

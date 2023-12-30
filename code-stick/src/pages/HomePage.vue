<template>
  <div class="homepage-container">
    <div class="websit-name">
      {{ state.CN === 'Chinese' ? '代码贴贴' : 'CODETIETIE' }}
    </div>
    <div class="btn">
      <div class="theme-box" @click="changeTheme">
        <img
          src="../../public/theme-dark.svg"
          v-show="theme == 'dark'"
          style="height: 80%"
        />
        <img
          src="../../public/theme-light.svg"
          v-show="theme == 'light'"
          style="height: 80%"
        />
      </div>
      <div class="CN-shift" @click="changeCN">
        <img
          src="../assets/chinese-dark.svg"
          v-show="theme == 'dark'"
          style="height: 80%"
        />
        <img
          src="../assets/chinese-light.svg"
          v-show="theme == 'light'"
          style="height: 80%"
        />
      </div>
      <div class="github-icon" @click="openMyGithub">
        <img
          src="../assets/github-dark.svg"
          v-show="theme == 'dark'"
          alt=""
          style="height: 80%"
        />
        <img
          src="../assets/github-light.svg"
          v-show="theme == 'light'"
          alt=""
          style="height: 80%"
        />
      </div>
      <div class="coffee-icon" @click="openMyByuMecoffee">
        <img
          src="../assets/coffee-dark.svg"
          v-show="theme == 'dark'"
          alt=""
          style="height: 80%"
        />
        <img
          src="../assets/coffee-light.svg"
          v-show="theme == 'light'"
          alt=""
          style="height: 80%"
        />
      </div>
    </div>
    <CodeOptions v-show="state.state" />
    <CodeContent />
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import CodeContent from '../components/CodeContent.vue';
import CodeOptions from '../components/CodeOptions.vue';
import { useState } from '../stores/state.js';

const state = useState();
// 初始主题
var theme = ref(localStorage.getItem('theme') || 'light');
// 切换主题
function changeTheme() {
  theme.value = theme.value == 'dark' ? 'light' : 'dark';
}
// 主题切换后调用
watchEffect(() => {
  document.documentElement.dataset.theme = theme.value;
  localStorage.setItem('theme', theme.value);
});
watchEffect(() => {
  localStorage.setItem('CN', state.CN);
});
// 切换中英文
function changeCN() {
  state.CN = state.CN == 'Chinese' ? 'English' : 'Chinese';
}
// 跳转到我的GitHub
function openMyGithub() {
  window.open('https://github.com/123pzy/codetieite');
}
// 跳转到我的Buy me a coffee
function openMyByuMecoffee() {
  window.open('https://www.buymeacoffee.com/123pzy');
}
</script>

<style scoped>
.homepage-container {
  display: flex;
  /* align-items: center; */
  height: 100vh;
  width: 100vw;
  color: #fff;
}
.btn {
  height: 50px;
  width: 200px;
  position: absolute;
  top: 0.29rem;
  right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
}
.theme-box,
.CN-shift,
.github-icon,
.coffee-icon {
  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.CN-shift {
  display: flex;
  align-items: end;
}
.websit-name {
  font-family: 'Luckiest_Guy', 'Browood-Regular';
  letter-spacing: 1px;
  font-size: 1.45rem;
  color: var(--websit-name-bg);
  position: absolute;
  top: 0.9rem;
  left: 1.6rem;
  display: inline-block;
  z-index: 999;
}
</style>

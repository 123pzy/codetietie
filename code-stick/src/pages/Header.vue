<template>
  <div class="header-container">
    <div class="websit-name" @click="goHome">
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
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import { useState } from '../stores/state.js';

const props = defineProps(['name_distance', 'btn_distance']);
const state = useState();
// 点击图标跳转index页面
function goHome() {
  window.location.href = '/';
}
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
  state.theme = theme.value;
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
.websit-name {
  font-family: 'Luckiest_Guy', 'Browood-Regular';
  letter-spacing: 1px;
  font-size: 1.45rem;
  color: var(--websit-name-bg);
  position: absolute;
  top: 2vh;
  left: v-bind(name_distance + 'rem');
  display: inline-block;
  z-index: 999;
  cursor: pointer;
}
.btn {
  height: 50px;
  width: 200px;
  position: absolute;
  top: 0.29rem;
  right: v-bind(btn_distance + 'rem');
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
</style>

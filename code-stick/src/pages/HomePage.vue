<template>
  <div class="homepage-container">
    <div class="websit-name">代码贴贴</div>
    <div class="theme-box" @click="changeTheme">
      <img src="../../public/theme-dark.svg" v-show="theme == 'dark'" />
      <img src="../../public/theme-light.svg" v-show="theme == 'light'" />
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
var theme = ref('dark');
// 切换主题
function changeTheme() {
  theme.value = theme.value == 'dark' ? 'light' : 'dark';
}
// 主题切换后调用
watchEffect(() => {
  document.documentElement.dataset.theme = theme.value;
});
</script>

<style scoped>
.homepage-container {
  display: flex;
  /* align-items: center; */
  height: 100vh;
  width: 100vw;
  color: #fff;
}
.theme-box {
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 0px 0.5px var(--line-color);
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: 15px;
}
.websit-name {
  font-size: 1.45rem;
  font-weight: 700;
  color: var(--websit-name-bg);
  position: absolute;
  top: 15px;
  left: 32px;
  display: inline-block;
  z-index: 999;
}
</style>

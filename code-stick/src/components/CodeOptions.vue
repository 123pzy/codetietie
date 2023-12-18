<template>
  <div class="container">
    <img src="../../public/vite.svg" alt="" class="logo">
    <h2 class="websit-name">代码贴贴</h2>
    <div class="theme-box" @click="changeTheme">
      <img src="../../public/theme-dark.svg" v-show="theme == 'dark'" />
      <img src="../../public/theme-light.svg" v-show="theme == 'light'" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
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
.container {
  height: 100vh;
  width: 17vw;
  background-color: var(--bg-color);
  position: absolute;
  color: #fff;
}
.logo{
    height: 30px;
    position: relative;
    top: 20.5px;
}
.websit-name {
  /* 设置颜色为与背景颜色的差值 */
  mix-blend-mode: difference;
  position: absolute;
  left: 38px;
  display: inline-block;
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
  right: 10px;
  top: 20.5px;
}
</style>

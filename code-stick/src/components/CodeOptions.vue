<template>
  <div class="container">
    <img src="../../public/vite.svg" alt="" class="logo" />
    <h2 class="websit-name">代码贴贴</h2>
    <div class="theme-box" @click="changeTheme">
      <img src="../../public/theme-dark.svg" v-show="theme == 'dark'" />
      <img src="../../public/theme-light.svg" v-show="theme == 'light'" />
    </div>
    <div class="options">
      <!-- 设置过期时间 -->
      <div class="deal-line">
        <n-space style="height: 300px">
          <n-slider
            :default-value="dealLineTime"
            vertical
            reverse
            :tooltip="false"
            :marks="marks"
            step="mark"
            @dragend="test"
          />
        </n-space>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import { NSlider, NSpace } from 'naive-ui';
// 初始主题
var theme = ref('dark');
// 切换主题
function changeTheme() {
  theme.value = theme.value == 'dark' ? 'light' : 'dark';
}
function test(): void {
  console.log('value');
}
// 设置过期时间
const dealLineTime = ref(30);
const marks = ref({
  1: '1天',
  7: '1周',
  15: '半个月',
  30: '1个月',
  60: '2个月',
  100: '100天',
});
// 主题切换后调用
watchEffect(() => {
  document.documentElement.dataset.theme = theme.value;
  console.log(dealLineTime.value);
});
</script>

<style scoped>
.container {
  height: 100vh;
  width: 17vw;
  display: flex;
  flex-wrap: wrap;
  background-color: var(--bg-color);
  position: absolute;
  color: #fff;
}
.logo {
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
.options {
  position: absolute;
  top: 80px;
}

@media (max-width: 768px) {
  .container {
    height: 100vh;
    width: 17vw;
    background-color: var(--bg-color);
    position: absolute;
    top: 10vh;
    color: #fff;
  }
  .logo {
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
}
</style>

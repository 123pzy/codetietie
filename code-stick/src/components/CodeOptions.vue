<template>
  <div class="code-options-container">
    <div class="options">
      <!-- 设置过期时间 -->
      <div class="deal-line">
        <div class="deal-line-title">设置过期时间：</div>
        <n-space vertical class="nspace">
          <n-slider
            :default-value="daysToAdd"
            @update:value="updateValue"
            @dragend="dragend"
            :format-tooltip="formatTooltip"
            :marks="mark"
          />
        </n-space>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { NSlider, NSpace } from 'naive-ui';
import { useState } from '../stores/state.js';

// 设置过期时间
const daysToAdd = ref(30);
// 设置滑条样式
function formatTooltip(value: number) {
  if (value !== 100) {
    return value + '天';
  } else {
    return '永不过期';
  }
}
const mark = ref({
  100: '永不过期',
});

// 过期时间更新之后的回调
function updateValue(value) {
  daysToAdd.value = value;
}
// 拖拽结束之后的回调
const state = useState();
function dragend() {
  state.daysToAdd = daysToAdd.value;
}
</script>

<style scoped>
.code-options-container {
  color: #fff;
  height: 60vh;
  width: 17vw;
  background-color: var(--bg-color);
  border: 2px solid #999;
  padding: 1rem;
  border-radius: 1rem;
  position: absolute;
  top: 45%;
  left: 4.5vw;
  transform: translateY(-50%);
}
.deal-line {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}
.deal-line-title {
  font-size: 1rem;
  letter-spacing: 1.6px;
  color: var(--nslider-color);
}
.nspace {
  height: 50px;
  width: 100%;
  font-size: 0.7rem;
  color: var(--nslider-color);
}
</style>

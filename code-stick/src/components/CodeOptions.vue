<template>
  <div class="code-options-container">
    <div class="options">
      <!-- 设置过期时间 -->
      <div class="deal-line">
        <div class="deal-line-title">1.设置过期时间：</div>
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
      <div class="read-burn">
        <div class="read-burn-title">2.阅后即焚</div>
        <n-space>
          <n-switch
            v-model:value="burnActive"
            size="large"
            :rail-style="railStyle"
            @update:value="handleChangeBurnActive"
          >
            <template #icon>
              <img
                src="../assets/read-burn-true.svg"
                class="read-burn-icon"
                v-show="burnActive"
              />
              <img
                src="../assets/read-burn-false.svg"
                class="read-burn-icon"
                v-show="!burnActive"
              />
            </template>
          </n-switch>
        </n-space>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, CSSProperties } from 'vue';
import { NSlider, NSpace, NSwitch } from 'naive-ui';
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
function updateValue(value: number) {
  daysToAdd.value = value;
}
// 拖拽结束之后的回调
const state = useState();
function dragend() {
  state.daysToAdd = daysToAdd.value;
}

// 阅后即焚
const burnActive = ref(false);
const railStyle = ({
  focused,
  checked,
}: {
  focused: boolean;
  checked: boolean;
}) => {
  const style: CSSProperties = {};
  if (checked) {
    style.background = 'var(--burn-true-color)';
    if (focused) {
      style.boxShadow = '0 0 0 2px #d0305040';
    }
  } else {
    style.background = 'var(--burn-false-color)';
    if (focused) {
      style.boxShadow = '0 0 0 2px #2080f040';
    }
  }
  return style;
};
// 更改是否阅后即焚之后的回调
function handleChangeBurnActive(value: boolean) {
  state.burn = value;
}
</script>

<style scoped>
.code-options-container {
  color: #fff;
  height: 6vh;
  width: 80vw;
  background-color: var(--bg-color);
  border: 1px solid #999;
  padding: 1rem;
  border-radius: 1rem;
  position: absolute;
  bottom: 13vh;
  left: 50%;
  transform: translateX(-50%);
}
.options {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.6rem;
}
.deal-line {
  width: 25rem;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
}
.deal-line-title,
.read-burn-title {
  font-size: 1rem;
  letter-spacing: 1.6px;
  color: var(--nslider-color);
}
.read-burn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.read-burn-icon {
  height: 1rem;
}
.nspace {
  height: 50px;
  width: 15rem;
  font-size: 0.7rem;
  color: var(--nslider-color);
}
</style>

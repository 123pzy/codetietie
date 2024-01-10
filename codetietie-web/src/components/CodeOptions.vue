<template>
  <div class="code-options-container">
    <div class="options">
      <!-- 设置过期时间 -->
      <div class="deal-line">
        <div class="deal-line-title">1.{{ state.text.setDealTime }}</div>
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
        <div class="read-burn-title">2.{{ state.text.BurnAfterReading }}:</div>
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
const daysToAdd = ref(80);
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
      style.boxShadow = '0 0 0 1px var(--burn-true-color)';
    }
  } else {
    style.background = 'var(--burn-false-color)';
    if (focused) {
      style.boxShadow = '0 0 0 1px var(--burn-false-color)';
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
  display: flex;
  gap: 1.6rem;
}
.deal-line {
  width: 30vw;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
}
.deal-line-title,
.read-burn-title {
  font-size: 1rem;
  color: var(--font-color);
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
  color: var(--font-color);
}

@media (max-width: 768px) {
  .code-options-container {
    height: 80%;
    width: 100%;
    background-color: var(--bg-color);
    padding: 1rem;
    border: 0;
    border-radius: 0;
    position: relative;
    bottom: 0;
  }
  .options {
    display: flex;
    flex-wrap: wrap;
  }
  .deal-line {
    width: 100%;
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
    height: 3rem;
    width: 100%;
    font-size: 0.7rem;
    color: var(--font-color);
  }
}
</style>

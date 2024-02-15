<template>
  <div
    class="homepage-container"
    :class="{ 'to-short': state.customStatus, 'to-long': !state.customStatus }"
  >
    <Header :name_distance="2" :btn_distance="1.5" />
    <n-message-provider>
      <CodeCard />
    </n-message-provider>
    <div class="weixin-box">
      <n-tooltip placement="left" trigger="hover" animated>
        <template #trigger>
          <div class="weixin-content">
            <n-icon
              size="32"
              style="
                display: flex;
                justify-content: center;
                margin-top: 3px;
                margin-bottom: 3px;
              "
            >
              <img src="@/assets/weixin.svg" style="height: 100%; width: 60%" />
            </n-icon>
            <span class="weixin-text">{{ $t('callMe') }}</span>
          </div>
        </template>
        <div class="tooltip-content">
          <img src="@/assets/two_dimensional_code.png" alt="" />
        </div>
      </n-tooltip>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/Header/index.vue';
import CodeCard from '@/components/CodeCard/index.vue';
import { NMessageProvider, NTooltip } from 'naive-ui';
import { useState } from '@/stores/state';

const state = useState();
</script>

<style lang="less" scoped>
.homepage-container {
  display: flex;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  float: right;
}
.weixin-box {
  color: var(--font-color);
  background-color: var(--call-me-bg-color);
  box-shadow: 0px 0px 35px 0.5px var(--call-me-shallow-color);
  border-radius: 5px 0 0 5px;
  height: fit-content;
  width: 2.2rem;
  position: fixed;
  bottom: 5.6vh;
  right: 0;
}
.weixin-content {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2px;
  padding-bottom: 10px;
  cursor: pointer;
}
.weixin-text {
  display: block;
  font-size: 0.8rem;
  writing-mode: vertical-rl;
}
.tooltip-content {
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    height: 10vh;
  }
}
.to-short {
  animation: short 0.32s forwards;
}
.to-long {
  animation: long 0.22s forwards;
}
@keyframes short {
  0% {
    width: 100vw;
  }
  100% {
    width: calc(100vw - 300px);
  }
}
@keyframes long {
  0% {
    width: calc(100vw - 300px);
  }
  100% {
    width: 100vw;
  }
}

@media (max-width: 768px) {
  .options {
    display: none;
  }
  .weixin-box {
    bottom: 7vh;
  }
  .weixin-text {
    display: none;
  }
  .weixin-content {
    padding: 0;
  }
}
</style>

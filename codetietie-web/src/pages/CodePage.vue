<template>
  <div class="homepage-container">
    <Header :name_distance="2" :btn_distance="1.5" />
    <CodeOptions v-show="state.state && !addFileStatus" class="options" />
    <n-message-provider>
      <CodeContent />
    </n-message-provider>
    <div class="weixin-box">
      <n-tooltip placement="left" trigger="hover" animated>
        <template #trigger>
          <div class="weixin-content">
            <n-icon size="32">
              <img
                src="../assets/weixin.svg"
                alt=""
                style="height: 100%; width: 60%"
              />
            </n-icon>
            <span class="weixin-text">联系我</span>
          </div>
        </template>
        <div style="display: flex; flex-wrap: wrap; width: 10vh">
          wechat：
          <img
            src="../assets/two_dimensional_code.png"
            alt=""
            style="height: 10vh"
          />
        </div>
      </n-tooltip>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CodeContent from '../components/CodeContent.vue';
import CodeOptions from '../components/CodeOptions.vue';
import { NMessageProvider, NTooltip, NIcon } from 'naive-ui';
import Header from '../components/Header.vue';
import { useState } from '../stores/state.js';
import { storeToRefs } from 'pinia';

const state = useState();
var { addFileStatus } = storeToRefs(state);
</script>

<style scoped>
.homepage-container {
  display: flex;
  height: 100vh;
  width: 100vw;
  position: relative;
}
.weixin-box {
  color: var(--font-color);
  background-color: var(--call-me-bg-color);
  box-shadow: 0px 0px 35px 0.5px var(--call-me-shallow-color);
  border-radius: 4px;
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
  cursor: pointer;
  padding: 2px;
  padding-bottom: 10px;
}
.weixin-text {
  display: block;
  font-size: 0.8rem;
  writing-mode: vertical-rl;
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

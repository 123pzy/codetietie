<template>
  <div class="homepage-container">
    <Header :name_distance="2" :btn_distance="1.5" />
    <CodeOptions v-show="state.state" class="options" />
    <n-message-provider>
      <CodeContent />
    </n-message-provider>
    <div class="weixin-icon">
      <n-tooltip placement="top-end" trigger="hover" animated>
        <template #trigger>
          <n-icon size="32">
            <img src="../assets/weixin.svg" alt="" style="height: 2vh" />
          </n-icon>
        </template>
        <div style="display: flex; flex-wrap: wrap; width: 10vh">
          {{ state.text.callMe }}
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
import Header from './Header.vue';
import { useState } from '../stores/state.js';

const state = useState();
</script>

<style scoped>
.homepage-container {
  display: flex;
  height: 100vh;
  width: 100vw;
  color: #fff;
}
.weixin-icon {
  height: 1rem;
  position: fixed;
  bottom: 3.2vh;
  right: 1.6vw;
}

@media (max-width: 768px) {
  .options {
    display: none;
  }
  .weixin-icon {
    bottom: 3.8vh;
    right: 4vw;
  }
}
</style>

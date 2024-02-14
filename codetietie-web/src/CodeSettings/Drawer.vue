<template>
  <div class="drawer">
    <img
      @click="activate"
      src="../assets/drawer-light.svg"
      alt=""
      style="height: 2rem"
    />
    <n-drawer
      v-model:show="active"
      :width="260"
      placement="left"
      :mask-closable="true"
    >
      <n-drawer-content
        title="设置"
        :header-style="{
          backgroundColor: 'var(--bg-color)',
          color: 'var(--nslider-color)',
        }"
        :body-style="{ backgroundColor: 'var(--bg-color)' }"
      >
        <CodeSettings />
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import CodeSettings from '@/CodeSettings/index.vue';
import { NDrawer, NDrawerContent } from 'naive-ui';

// 抽屉
const active = ref(false);
const activate = () => {
  active.value = true;
};
</script>

<style scoped>
.drawer {
  display: none;
  background-color: #dfe6e9;
  border-radius: 3px;
}
@media (max-width: 768px) {
  .drawer {
    display: block;
    height: 2rem;
    width: 2rem;
    position: absolute;
    top: 5rem;
    left: 1rem;
    z-index: 10;
  }
}
</style>

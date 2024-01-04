<template>
  <div class="drawer">
    <n-button-group>
      <n-button @click="activate('left')"
        ><img src="../assets/drawer-light.svg" alt="" style="height: 2rem"
      /></n-button>
    </n-button-group>
    <n-drawer v-model:show="active" :width="260" :placement="placement">
      <n-drawer-content
        title="设置"
        :header-style="{
          backgroundColor: 'var(--bg-color)',
          color: 'var(--nslider-color)',
        }"
        :body-style="{ backgroundColor: 'var(--bg-color)' }"
      >
        <CodeOptions />
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import CodeOptions from './CodeOptions.vue';
import { NButtonGroup, NDrawer, NDrawerContent } from 'naive-ui';
import type { DrawerPlacement } from 'naive-ui';

// 抽屉
const active = ref(false);
const placement = ref();
const activate = (place: DrawerPlacement) => {
  active.value = true;
  placement.value = place;
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

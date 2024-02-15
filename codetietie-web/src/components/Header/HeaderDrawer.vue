<template>
  <n-drawer
    :width="300"
    v-model:show="state.customStatus"
    placement="left"
    :mask-closable="false"
    :show-mask="false"
  >
    <n-drawer-content
      title="设置"
      :header-style="{
        backgroundColor: 'var(--bg-color)',
        color: 'var(--nslider-color)',
      }"
      :body-style="{ backgroundColor: 'var(--bg-color)' }"
      closable
    >
      <CodeCardTheme></CodeCardTheme>
    </n-drawer-content>
  </n-drawer>
</template>

<script lang="ts" setup>
import { useState } from '@/stores/state';
import { NDrawer, NDrawerContent } from 'naive-ui';
import CodeCardTheme from '@/components/CodeCardSetting/index.vue';

const state = useState();
</script>

<style scoped></style>

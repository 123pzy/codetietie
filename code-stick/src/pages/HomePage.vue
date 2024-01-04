<template>
  <div class="homepage-container">
    <Header :name_distance="2" :btn_distance="1.5" />
    <CodeOptions v-show="state.state" class="options" />
    <CodeContent />
  </div>
</template>

<script lang="ts" setup>
import CodeContent from '../components/CodeContent.vue';
import CodeOptions from '../components/CodeOptions.vue';
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

@media (max-width: 768px) {
  .options {
    display: none;
  }
}
</style>

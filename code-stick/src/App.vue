<template>
  <CodeOptions v-show="state.state"/>
  <CodeContent />
</template>

<script lang="ts" setup>
import CodeContent from './components/CodeContent.vue';
import CodeOptions from './components/CodeOptions.vue';
import { useState } from './stores/state.js';

const state = useState();

</script>

<style scoped></style>

<template>
  <div class="container">
    <Header :name_distance="2" :btn_distance="1.5" />
    <div class="box">
      <p class="code">404</p>
      <p class="title">{{ state.text.notFoundTitle }}</p>
      <p class="text">
        {{ state.text.notFoundDescription }}
      </p>
      <CodeButton @click="goHome" fontFamily="'Courier New'">{{ state.text.takeMeHome }}</CodeButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useState } from '../stores/state';
import Header from './Header.vue';
import CodeButton from '../components/CodeButton.vue';

const router = useRouter();
const state = useState();
function goHome() {
  router.push('/');
}
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  color: var(--font-color);
  background-color: var(--bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Courier New', Courier, monospace;
}
.box {
  height: fit-content;
  width: 23rem;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
}
p {
  margin: 0;
}
.code {
  font-size: 4rem;
}
.title {
  font-size: 1.5rem;
}
.text {
  text-align: center;
}
</style>

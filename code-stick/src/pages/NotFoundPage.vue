<template>
  <div class="container">
    <Header :name_distance="2" :btn_distance="1.5" />
    <div class="box">
      <p class="code">404</p>
      <p class="title">PAGE NOT FOUND</p>
      <p class="text">
        The page you are looking for doesn't exist or the author has set "Burn
        after reading", either way the code is gone.
      </p>
      <div class="action" @click="goHome">Take me home</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import Header from './Header.vue';

const router = useRouter();
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
.action {
  height: 5vh;
  width: fit-content;
  color: var(--btn-color);
  background-color: var(--btn-bg-color);
  text-align: center;
  line-height: 5vh;
  font-size: 1.05rem;
  padding: 0 1rem 0 1rem;
  border-radius: 2rem;
  cursor: pointer;
  border: 1.6px solid #000;
}
</style>

<template>
  <div class="container">
    <Header :name_distance="2" :btn_distance="1.5" />
    <div class="box">
      <p class="code">404</p>
      <p class="title">{{ $t('notFoundTitle') }}</p>
      <p class="text">
        {{ $t('notFoundDescription') }}
      </p>
      <Button @click="goHome" fontFamily="'Courier New'">{{
        $t('takeMeHome')
      }}</Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import Header from '@/components/Header/index.vue';
import Button from '@/components/Button/index.vue';

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
</style>

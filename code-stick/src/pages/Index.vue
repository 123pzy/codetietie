<template>
  <div class="index-container">
    <Header :name_distance="15" :btn_distance="15" />
    <div class="box">
      <div class="font">
        <p class="introduce">Create and share beautiful code</p>
        <p class="text">
          Transform your code into visually captivating images with our powerful
          tool. Personalize the background, choose themes, toggle the title bar,
          add branding, and explore various features.
        </p>
      </div>
      <div class="start-btn" @click="go">Get Started</div>
      <img
        src="../assets/index-dark.png"
        class="index-img"
        v-show="theme == 'dark'"
      />
      <img
        src="../assets/index-light.png"
        class="index-img"
        v-show="theme == 'light'"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from './Header.vue';
import { useState } from '../stores/state.js';
import { storeToRefs } from 'pinia';

const state = useState();
const { theme } = storeToRefs(state);
function go() {
  window.location.href = '/codetietie';
}
</script>

<style scoped>
.index-container {
  min-height: 100vh;
  background-color: var(--bg-color);
  display: flex;
  justify-content: center;
  overflow: auto;
  box-sizing: border-box;
}
.box {
  height: fit-content;
  width: 70vw;
  text-align: center;
}
.font {
  width: 70vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.introduce {
  color: var(--websit-name-bg);
  width: 30rem;
  max-width: 80vw;
  font-size: 3rem;
  font-weight: 700;
  margin-top: 15vh;
  margin-bottom: 1rem;
}
.text {
  width: 50rem;
  color: var(--websit-name-bg);
}
.start-btn {
  width: 10rem;
  color: var(--btn-color);
  background-color: var(--btn-bg-color);
  padding: 1rem;
  border-radius: 0.5rem;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 1rem;
  cursor: pointer;
}
.index-img {
  width: 60vw;
}
</style>

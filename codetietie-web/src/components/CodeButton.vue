<template>
  <div class="btn-box">
    <div class="btn">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps(['fontFamily']);
</script>

<style scoped>
.btn-box {
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
}
.btn {
  font-family: v-bind(fontFamily), 'Browood-Regular', 'Luckiest_Guy';
  color: var(--btn-color);
  background-color: var(--btn-bg-color);
  height: 5vh;
  width: fit-content;
  text-align: center;
  line-height: 5vh;
  font-size: 1.05rem;
  padding: 0 1rem 0 1rem;
  border-radius: 2rem;
  cursor: pointer;
  border: 1.6px solid #000;
}
</style>

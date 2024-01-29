<template>
  <div class="btn-box">
    <div class="btn">
      <div class="content"><slot></slot></div>
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
  width: fit-content;
  color: var(--btn-color);
  background-color: var(--btn-bg-color);
  border-radius: 2rem;
  cursor: pointer;
}
.content {
  font-size: 1rem;
  font-family: v-bind(fontFamily), 'Browood-Regular', 'Luckiest_Guy';
  height: 2.7rem;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.15rem;
  margin: 0 0.9rem 0 0.9rem;
}
</style>

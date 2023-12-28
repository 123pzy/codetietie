<template>
  <!-- <HomePage /> -->
  <div ref="h1">111</div>
</template>

<script lang="ts" setup>
// import  HomePage  from './pages/HomePage.vue';
import domtoimage from 'dom-to-image';
import { nextTick, ref } from 'vue';

const h1 = ref();
nextTick(() => {
  console.log(h1.value);
  domtoimage.toBlob(h1.value).then(function (blob) {
    console.log(blob);
    const filename = 'image.png';

    downloadBlob(blob, 'image.png');
  });
});

function downloadBlob(blob, fileName) {
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
}
</script>

<style scoped></style>

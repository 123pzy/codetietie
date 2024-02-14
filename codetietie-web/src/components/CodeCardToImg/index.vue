<template>
  <div class="code-container" ref="codeDOM">
    <div class="card-content">
      <div class="code-header">
        <div class="code-header-left">
          <!-- Mac风格 -->
          <div class="mac-style-box">
            <div class="red"></div>
            <div class="yellow"></div>
            <div class="green"></div>
          </div>
        </div>
        <div class="code-header-right">
          <div class="code-language">
            {{ languageNames[currentCodeLanguage as LanguageName] }}
          </div>
        </div>
      </div>
      <div class="codeMirror-content">
        <CodeMirrorEditor :disabled="true"></CodeMirrorEditor>
      </div>
    </div>
    <span class="url">{{ url }}</span>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useState } from '@/stores/state';
import { storeToRefs } from 'pinia';
import CodeMirrorEditor from '@/components/CodeCard/CodeMirrorEditor.vue';
import html2canvas from 'html2canvas';
import { languageNames } from '@/themes/language-names';
import { LanguageName } from "@uiw/codemirror-extensions-langs";

const state = useState();
const { currentCodeLanguage, downloadToImgDOM } = storeToRefs(state);
const codeDOM = ref();
function downLoad() {
  html2canvas(<any>codeDOM.value).then(function (canvas) {
    // 创建一个临时链接元素
    var link = document.createElement('a');

    // 将画布转换为图片URL
    var image = canvas.toDataURL();

    // 设置链接元素的href属性为图片URL
    link.href = image;

    // 设置链接元素的下载属性为截图.png
    link.download = 'image-codetietie.png';

    // 模拟点击链接元素，开始下载
    link.click();
  });
}
const url = ref(location.href);
watch(downloadToImgDOM, () => {
  downLoad();
});
</script>

<style lang="less" scoped>
.code-container {
  height: fit-content;
  width: fit-content;
  // padding: 2rem;
  background-image: linear-gradient(to top right, #8720fd, #ffc832);
  position: absolute;
  z-index: -1;
}
.card-content {
  background-color: #1e1e1e;
  border-radius: 15px;
  margin: 2rem;
  margin-bottom: 1rem;
}
.code-header {
  height: 2rem;
  display: flex;
  background-color: #1e1e1e;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px 15px 0 0;
  padding: 5px;
  padding-bottom: 0;
}
.code-header-left {
  height: 2rem;
  display: flex;
  align-items: center;
}
.mac-style-box {
  color: #1e1e1e;
  height: 1rem;
  display: flex;
  align-items: center;
  gap: 0.66rem;
  padding-left: 0.8rem;
  padding-right: 0.9rem;
}
.circle(@bgColor) {
  height: 0.75rem;
  width: 0.75rem;
  border-radius: 50%;
  cursor: pointer;
  background-color: @bgColor;
}
.red {
  .circle(#de4243);
}
.yellow {
  .circle(#e69e2a);
}
.green {
  .circle(#11a73e);
}
.code-header-right {
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 0.5rem;
  padding-left: 1.5rem;
  padding-right: 0.5rem;
}
.code-language {
  color: #f1f2f0;
}
.url {
  display: block;
  float: right;
  height: 1rem;
  line-height: 1rem;
  color: #fff;
  position: relative;
  right: 1rem;
  bottom: 0.5rem;
  opacity: 0.6;
  font-weight: 700;
}
</style>

<template>
  <!-- :indent-with-tab="true" 是否自动获取焦点-->
  <!-- 这里设置为disabled为true，禁止编辑代码 -->
  <codemirror
    v-model="currentCode"
    placeholder="Code gose here..."
    :style="{
      height: '100%',
      width: '100%',
      'min-height': `${minHeight}vh`,
      'min-width': `${minWidth}vw`,
      padding: '0.6rem',
      'padding-top': 0,
      'border-radius': '0 0 15px 15px',
    }"
    :autofocus="true"
    :tabSize="2"
    :extensions="extensions"
    :disabled="disabled"
    :lineNumbers="false"
  />
</template>

<script lang="ts" setup>
import { Codemirror } from 'vue-codemirror';
import { storeToRefs } from 'pinia';
import { useState } from '@/stores/state';
import type { codeMirrorEditorPrpps } from '@/types/index';
import { langs } from '@uiw/codemirror-extensions-langs';
import { ref, watch } from 'vue';
import { languageNames } from '@/themes/language-names';

const state = useState();
const {
  currentCode,
  minHeight,
  minWidth,
  currentCodeLanguage,
  currentCodeTheme,
  codeTheme,
  codeLanguage,
} = storeToRefs(state);
defineProps<codeMirrorEditorPrpps>();
const extensions = ref();
// 动态修改代码语言
watch(
  currentCodeLanguage,
  () => {
    if (currentCodeLanguage.value in languageNames) {
      extensions.value = [codeLanguage.value, codeTheme.value];
    } else {
      extensions.value = [langs['javascript'](), codeTheme.value];
    }
  },
  { immediate: true }
);
watch(currentCodeTheme, () => {
  extensions.value = [codeLanguage.value, codeTheme.value];
});
</script>
<style lang="less" scoped></style>

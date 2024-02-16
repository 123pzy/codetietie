<template>
  <div class="select-container">
    <slot></slot>
    <n-select
      size="small"
      v-model:value="valueObj[props.valueIndex as keyof typeof valueObj]"
      :placeholder="props.placeholder"
      :show-checkmark="false"
      filterable
      :options="optionsObj[props.optionsIndex as keyof typeof optionsObj]"
      :render-tag="renderTag"
      :node-props="generateOptionProps"
      @update:value="
        updateValueObj[props.updateValueIndex as keyof typeof updateValueObj]
      "
    />
  </div>
</template>

<script lang="ts" setup>
import { h, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useState } from '@/stores/state';
import { NSelect, NTag, SelectOption } from 'naive-ui';
import { codeThemeTeam } from '@/themes/theme-names.ts';
import { codeLanguageTeam } from '@/themes/language-names';

const props = defineProps([
  'valueIndex',
  'optionsIndex',
  'placeholder',
  'updateValueIndex',
]);
const state = useState();
const {
  currentCodeTheme,
  selectedCodeTitle,
  codeContentTeam,
  currentCode,
  currentCodeLanguage,
  currentCodeLanguageByHljs,
  editCodeLanguage,
} = storeToRefs(state);
const valueObj = ref({
  currentCodeTheme: currentCodeTheme,
  selectedCodeTitle: selectedCodeTitle,
  editCodeLanguage: editCodeLanguage,
});
const optionsObj = ref({
  codeThemeTeam: codeThemeTeam,
  codeContentTeam: codeContentTeam,
  codeLanguageTeam: codeLanguageTeam,
});

const updateValueObj = ref({
  changeCodeContent: changeCodeContent,
  changeEditCodeLang: changeEditCodeLang,
  funcTest: funcTest,
});
// 下拉框的样式
function generateOptionProps() {
  return {
    style: {
      color: '#cfcfcf',
      'font-size': '0.8rem',
      'background-color': '#353535',
      '--n-option-color-pending': 'rgb(68, 68, 68)',
    },
  };
}
const renderTag = ({
  option,
  handleClose,
}: {
  option: SelectOption;
  handleClose: () => void;
}) => {
  return h(
    NTag,
    {
      type: option.type as 'success' | 'warning' | 'error',
      closable: false,
      onMousedown: (e: FocusEvent) => {
        e.preventDefault();
      },
      onClose: (e: MouseEvent) => {
        e.stopPropagation();
        handleClose();
      },
    },
    { default: () => option.label }
  );
};
// 选择代码
function changeCodeContent(value: string, option: SelectOption) {
  currentCode.value = value; // 修改代码展示
  currentCodeLanguage.value = (option.language as string)
    ? (option.language as string)
    : (currentCodeLanguageByHljs.value as string); // 修改展示代码的语言
  currentCodeLanguage.value = currentCodeLanguage.value
    ? currentCodeLanguage.value
    : 'markdown';
}
// 修改创建代码的语言
function changeEditCodeLang(value: string): void {
  currentCodeLanguage.value = value;
}
function funcTest() {}
</script>

<style scoped>
.select-container-title {
  display: block;
  color: var(--font-color);
}
</style>

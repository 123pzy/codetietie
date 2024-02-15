<template>
  <div class="code-card-setting">
    <div class="select-code-theme">
      <span class="select-code-theme-title">{{
        $t('selectCodeThemeTitle')
      }}</span>
      <n-select
        size="small"
        v-model:value="currentCodeTheme"
        :placeholder="$t('selectCodeTheme')"
        :show-checkmark="false"
        filterable
        :options="codeThemeTeam"
        :render-tag="renderTag"
        :node-props="generateOptionProps"
        @update:value="changeCodeTheme"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { h } from 'vue';
import { codeThemeTeam } from '@/themes/theme-names.ts';
import { storeToRefs } from 'pinia';
import { useState } from '@/stores/state';
import { NSelect, NTag, SelectOption } from 'naive-ui';

const state = useState();
const { currentCodeTheme } = storeToRefs(state);
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
// 改变代码主题回调
function changeCodeTheme() {
  // console.log(themes[currentCodeTheme.value], value);
}
</script>

<style scoped>
.select-code-theme-title {
  display: block;
  color: var(--font-color);
}
</style>

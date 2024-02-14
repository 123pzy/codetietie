<template>
  <!-- 增加代码title -->
  <div class="after-edit">
    <div class="add-code-name">
      <span class="add-code-name-title">{{ t('setEditCodeName') }}</span>
      <n-input
        :placeholder="t('giveCodeName')"
        v-model:value="editCodeTitle"
        size="small"
        autosize
        style="width: 100%"
        v-show="editStatus"
      />
    </div>
    <!-- 选择代码语言 -->
    <div class="select-language">
      <span class="select-language-title">{{ t('setEditCodeLanguage') }}</span>
      <n-select
        size="small"
        v-model:value="editCodeLanguage"
        :placeholder="t('selectCodeLanguage')"
        :show-checkmark="false"
        filterable
        :options="codeLanguageTeam"
        :render-tag="renderTag"
        :node-props="generateOptionProps"
        @update:value="changeEditCodeLang"
      />
    </div>
    <!-- 选择过期时间 -->
    <div class="deadline-select" v-show="!datePickerDisabled">
      <span class="deadline-select-title">{{
        t('setEditCodeExpireTime')
      }}</span>
      <n-space vertical>
        <n-date-picker
          size="small"
          type="datetime"
          :format="format"
          :placeholder="t('editCodeExpireTimePlaceholder')"
          v-model:value="deadlineTime"
          @update:value="setDeadlineTime"
          :disabled="datePickerDisabled"
        />
      </n-space>
    </div>
    <!-- 设置阅后即焚 -->
    <div class="read-burn" v-show="!datePickerDisabled">
      <div class="read-burn-title">{{ $t('BurnAfterReading') }}:</div>
      <n-space>
        <n-switch
          v-model:value="burnActive"
          size="large"
          :rail-style="railStyle"
          @update:value="changeBurnActive"
          :disabled="datePickerDisabled"
        >
          <template #icon>
            <img
              src="@/assets/read-burn-true.svg"
              class="read-burn-icon"
              v-show="burn"
            />
            <img
              src="@/assets/read-burn-false.svg"
              class="read-burn-icon"
              v-show="!burn"
            />
          </template>
        </n-switch>
      </n-space>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, h, CSSProperties } from 'vue';
import {
  NSpace,
  NSelect,
  NTag,
  SelectOption,
  NInput,
  NDatePicker,
  NSwitch,
} from 'naive-ui';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import { useState } from '@/stores/state';
// import { useRoute, useRouter } from 'vue-router';
import { codeLanguageTeam } from '@/themes/language-names';

// const route = useRoute();
// const router = useRouter();
// const path = ref(route.params.randomValue == 'codetietie' ? false : true);
const { t } = useI18n();
const state = useState();
const {
  currentCodeLanguage,
  editStatus,
  editCodeTitle,
  editCodeLanguage,
  deadlineTime,
  burn,
  datePickerDisabled,
} = storeToRefs(state);
const format = ref('yyyy/MM/dd - HH:mm');
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
// 修改创建代码的语言
function changeEditCodeLang(value: string): void {
  currentCodeLanguage.value = value;
}
// 设置过期时间
function setDeadlineTime(v: any) {
  console.log(v, deadlineTime.value);
}
// 阅后即焚
const burnActive = ref(false);
const railStyle = ({
  focused,
  checked,
}: {
  focused: boolean;
  checked: boolean;
}) => {
  const style: CSSProperties = {};
  if (checked) {
    style.background = '#f0f1f0';
    if (focused) {
      style.boxShadow = '0 0 0 1px #f0f1f0';
    }
  } else {
    style.background = '#353535';
    if (focused) {
      style.boxShadow = '0 0 0 1px #353535';
    }
  }
  return style;
};
// 更改是否阅后即焚之后的回调
function changeBurnActive(value: boolean) {
  burn.value = value;
}
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
</script>

<style lang="less" scoped>
.after-edit {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-left: 0.5rem;
}
.add-code-name,
.select-language,
.deadline-select {
  width: 12vw;
}
.add-code-name-title,
.select-language-title,
.deadline-select-title {
  display: none;
}

.code-language {
  color: #f1f2f0;
  margin-right: 0.5rem;
}

.read-burn-title {
  font-size: 0.9rem;
  text-wrap: nowrap;
  color: #f1f2f0;
}
.read-burn {
  display: flex;
  align-items: center;
  gap: 0.2rem;
}
.read-burn-icon {
  height: 1rem;
}
@media (max-width: 768px) {
  .after-edit {
    height: 60%;
    padding-top: 1rem;
    justify-content: start;
    gap: 1rem;
    flex-direction: column;
  }
  .add-code-name,
  .select-language,
  .deadline-select {
    width: 10rem;
  }
  .add-code-name-title,
  .select-language-title,
  .deadline-select-title {
    display: block;
    color: var(--font-color);
  }
  .read-burn-title {
    color: var(--font-color);
  }
}
</style>

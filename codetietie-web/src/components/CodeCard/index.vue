<template>
  <div class="code-card-container">
    <Drawer v-show="editStatus"></Drawer>
    <div class="code-card">
      <CodeHeader></CodeHeader>
      <div class="codeMirror-content">
        <CodeMirrorEditor :disabled="disabled"></CodeMirrorEditor>
      </div>
    </div>
    <CodeCardToImg></CodeCardToImg>
    <div class="btn-team">
      <div class="before-edit" v-if="!editStatus">
        <Button @click="addCodeFolder">{{ $t('createCodeBtn') }}</Button>
        <Button @click="shareCode"
          >{{ $t('shareCodeBtn')
          }}<img
            style="height: 55%"
            v-show="theme !== 'dark'"
            src="@/assets/share-code-light.svg" />
          <img
            style="height: 55%"
            v-show="theme === 'dark'"
            src="@/assets/share-code-dark.svg"
        /></Button>
      </div>
      <div class="after-edit" v-else>
        <Button @click="confirmAddCode">{{ $t('confirmBtn') }}</Button>
        <Button @click="cancelAddCode">{{ $t('cancelBtn') }}</Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CodeMirrorEditor from './CodeMirrorEditor.vue';
import CodeHeader from './CodeHeader.vue';
import Button from '@/components/Button/index.vue';
import CodeCardToImg from '@/components/CodeCardToImg/index.vue';
import Drawer from '@/components/CodeSettings/Drawer.vue'
import { h } from 'vue';
import { useState } from '@/stores/state';
import { storeToRefs } from 'pinia';
import { useMessage, NIcon } from 'naive-ui';
import { CopyOutline, ReceiptOutline } from '@vicons/ionicons5';
import { useI18n } from 'vue-i18n';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const { t } = useI18n();
const state = useState();
const {
  theme,
  editStatus,
  currentCode,
  addStatus,
  disabled,
  codeContentTeam,
  minHeight,
  minWidth,
  currentCodeLanguage,
  datePickerDisabled,
} = storeToRefs(state);
// 点击分享按钮
const message = useMessage();
function shareCode() {
  var currentPageUrl = location.href;
  state.copyFunc(currentPageUrl);
  message.success(`${t('shareMessage')}`, {
    icon: () => h(NIcon, null, { default: () => h(CopyOutline) }),
  });
}
// 点击“创建代码”
function addCodeFolder() {
  datePickerDisabled.value = false;
  state.toEditStatus();
  addStatus.value = true;
}
// 点击“确认”
function confirmAddCode() {
  if (!currentCode.value) {
    // 提示不能分享空代码
    message.warning('输入代码不能为空~', {
      icon: () => h(NIcon, null, { default: () => h(ReceiptOutline) }),
    });
  } else {
    state.addCode(addStatus.value, route, router);
  }
}
// 取消增加代码
function cancelAddCode() {
  editStatus.value = false;
  console.log(currentCode.value);
  currentCode.value = codeContentTeam.value[0].value;
  currentCodeLanguage.value = codeContentTeam.value[0].language;
  minHeight.value = 0;
  minWidth.value = 0;
  disabled.value = true;
}
</script>

<style scoped>
.code-card-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
      90deg,
      var(--line-color) 2.5%,
      rgba(0, 0, 0, 0) 3%
    ),
    linear-gradient(360deg, var(--line-color) 2.5%, rgba(0, 0, 0, 0) 3%);
  background-size: 20px 20px;
  background-position: center center;
  padding-bottom: 4rem;
  background-color: var(--bg-color);
  box-sizing: border-box;
}
.codeMirror-content {
  width: 100%;
  background-color: #1e1e1e;
  max-height: 70vh;
  overflow: auto;
  border-radius: 0 0 15px 15px;
}
/* 设置滚动条的大小 */
.codeMirror-content::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
.codeMirror-content::-webkit-scrollbar-thumb {
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
  background: #999;
}
.codeMirror-content::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: #1e1e1e;
}
.code-card {
  max-width: 90vw;
  height: fit-content;
  width: fit-content;
  /* border: 8px solid #1e1e1e; */
  border-radius: 15px;
}
.btn-team {
  position: absolute;
  left: 50%;
  bottom: 4rem;
  transform: translateX(-50%);
}
.before-edit,
.after-edit {
  display: flex;
  gap: 0.6rem;
}
</style>

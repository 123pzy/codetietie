<template>
  <div class="code-card-container">
    <Drawer v-show="editStatus"></Drawer>
    <div
      class="code-card"
      :class="{ tobig: big, tosmall: small, towh: wh }"
      ref="codeCard"
    >
      <CodeHeader :toBig="toBig" :toSmall="toSmall"></CodeHeader>
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
import Drawer from '@/components/CodeSettings/Drawer.vue';
import { h, ref } from 'vue';
import { useState } from '@/stores/state';
import { storeToRefs } from 'pinia';
import { useMessage, NIcon } from 'naive-ui';
import { CopyOutline, ReceiptOutline } from '@vicons/ionicons5';
import { useI18n } from 'vue-i18n';
import { useRouter, useRoute } from 'vue-router';
import { Ref } from 'vue';

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
  backgroundColor,
  currentURL,
} = storeToRefs(state);
// 点击分享按钮
const message = useMessage();
function shareCode() {
  state.copyFunc(currentURL.value);
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
  currentCode.value = codeContentTeam.value[0].value;
  currentCodeLanguage.value = codeContentTeam.value[0].language;
  minHeight.value = 0;
  minWidth.value = 0;
  disabled.value = true;
}
// 最大化代码
const big = ref(false);
const small = ref(false);
const wh = ref(false);
const codeCard = ref();
var height: Ref<number> = ref(0);
var width: Ref<number> = ref(0);
function toBig() {
  big.value = true;
  small.value = false;
  height.value = codeCard.value.offsetHeight;
  width.value = codeCard.value.offsetWidth;
}
function toSmall() {
  if (!small.value && big.value) {
    big.value = false;
    small.value = true;
    setTimeout(() => {
      wh.value = true;
      small.value = false;
      console.log(codeCard.value.classList);
    }, 300);
  }
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
  transform: translateY(-2rem);
  background-color: v-bind(backgroundColor);
  border-radius: 15px;
}
@keyframes tobig {
  0% {
    height: v-bind(height + 'px');
    width: v-bind(width + 'px');
  }
  100% {
    height: 100vh;
    width: 100vw;
    transform: translateY(0);
    border-radius: 0px;
  }
}
@keyframes tosmall {
  0% {
    height: 100vh;
    width: 100vw;
  }
  100% {
    height: v-bind(height + 'px');
    width: v-bind(width + 'px');
    max-width: 90vw;
    transform: translateY(-2rem);
    border-radius: 15px;
  }
}
.tobig {
  max-width: 100vw;
  animation: tobig 0.3s forwards;
  z-index: 100;
}
.tosmall {
  animation: tosmall 0.3s forwards;
  z-index: 0;
}
.towh {
  height: fit-content;
  width: fit-content;
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
